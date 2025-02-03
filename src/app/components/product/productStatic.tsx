'use client'
import React, { useState, useEffect } from 'react';
import styles from './product.module.css';
import Image from 'next/image';
import PaymentMethods from '../payments/payments';

interface CheckoutButtonProps {
  variantOptions: { id: string; name: string }[];
  quantity?: number;
}

const SHOPIFY_STORE_DOMAIN = 'q4ivxf-aa.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'e27ef6ec2d42fd54bb06740273bff70d';
const SHOPIFY_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2023-07/graphql.json`;

const ProductStatic: React.FC<CheckoutButtonProps> = ({ variantOptions, quantity = 1 }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<string[]>([]);

  useEffect(() => {
    setSelectedVariants((prevSelected) =>
      Array.from({ length: quantity }, (_, i) => prevSelected[i] || variantOptions?.[0]?.id || '')
    );
  }, [quantity, variantOptions]);

  useEffect(() => {
    if (quantity > 0 && selectedVariants.every(Boolean)) {
      createCart(selectedVariants);
    }
  }, [selectedVariants]);

  const createCart = async (variants: string[]) => {
    const lineItems = variants.map((variantId) => ({
      merchandiseId: `gid://shopify/ProductVariant/${variantId}`,
      quantity: 1,
    }));

    const query = `
      mutation createCart($lines: [CartLineInput!]!) {
        cartCreate(input: { lines: $lines }) {
          cart {
            id
            checkoutUrl
          }
        }
      }
    `;

    const response = await fetch(SHOPIFY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables: { lines: lineItems } }),
    });

    const result = await response.json();
    setCheckoutUrl(result.data.cartCreate.cart.checkoutUrl);
  };

  const handleVariantChange = (index: number, variantId: string) => {
    setSelectedVariants((prev) => prev.map((variant, i) => (i === index ? variantId : variant)));
  };

  const price = 39.99 * quantity;
  const oldPrice = Math.round(price * 100 / 50);
  const save = (oldPrice - price).toFixed(2);

  return (
    <div className={styles.container}>
      {Array.from({ length: quantity }, (_, index) => (
        <div className={styles.variants} key={index}>
          <label className={styles.label}>
            <select
              value={selectedVariants[index] || ''}
              onChange={(e) => handleVariantChange(index, e.target.value)}
              className={styles.select}
            >
              {variantOptions.map((variant) => (
                <option className={styles.option} key={variant.id} value={variant.id}>
                  {variant.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
      <div className={styles.text}>
        <div className={styles.moneycontent}>
          <span className={styles.save}>SAVE ${save}</span>
          <div className={styles.prices}>
            <span className={styles.price}>${price}</span>
            <span className={styles.oldprice}>${oldPrice}</span>
          </div>
        </div>
        <div className={styles.ships}>
          <div className={styles.ship}>
            <Image src={'/delivery.png'} alt={'Delivery'} width={15} height={15} />
            <p className={styles.shiptext}>Free Shipping</p>
          </div>
          <div className={styles.ship}>
            <Image src={'/guarantee.png'} alt={'Guarantee'} width={15} height={15} />
            <p className={styles.shiptext}>30-Day Money Back</p>
          </div>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => checkoutUrl && (window.location.href = checkoutUrl)}
        disabled={!checkoutUrl || selectedVariants.some((v) => !v)}
      >
        GO TO CHECKOUT ⚡
      </button>
      <PaymentMethods />
    </div>
  );
};

export default ProductStatic;