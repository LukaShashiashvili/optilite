'use client'
import React, { useState, useEffect } from 'react';
import styles from './product.module.css';
import Image from 'next/image';
import PaymentMethods from '../payments/payments';

interface CheckoutButtonProps {
  variantOptions: { id: string; name: string }[];
}

const SHOPIFY_STORE_DOMAIN = 'q4ivxf-aa.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'e27ef6ec2d42fd54bb06740273bff70d';
const SHOPIFY_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`;

const Product: React.FC<CheckoutButtonProps> = ({ variantOptions }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(3);
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

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 3 ? q - 1 : q));

  const price = 30 * quantity;
  const oldPrice = Math.round(price * 100 / 50);
  const save = (oldPrice - price).toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.quantity}>
        <span className={styles.quantitylabel}>Quantity:</span>
        <div className={styles.quantitynumber}>
          <button className={styles.quantitybtn} onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button className={styles.quantitybtn} onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <div className={styles.variants}>
        {Array.from({ length: quantity }, (_, index) => (
          <label className={styles.label} key={index}>
            Product {index + 1}:
            <select
              className={styles.select}
              value={selectedVariants[index] || ''}
              onChange={(e) => handleVariantChange(index, e.target.value)}
            >
              {variantOptions.map((variant) => (
                <option key={variant.id} value={variant.id}>{variant.name}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
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
        disabled={!checkoutUrl || quantity < 1 || selectedVariants.some((v) => !v)}
      >
        GO TO CHECKOUT ⚡
      </button>
      <PaymentMethods />
    </div>
  );
};

export const variantOptions = [
  { id: "45525796257955", name: "⚫ Black" },
  { id: "45525796290723", name: "⚪ White" },
];

export default Product;
