'use client'
import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import styles from './product.module.css';import Image from 'next/image';
import PaymentMethods from '../payments/payments';

  interface CheckoutButtonProps {
  variantOptions: { id: string; name: string }[];
}

const Product: React.FC<CheckoutButtonProps> = ({ variantOptions }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(3);
  const [selectedVariants, setSelectedVariants] = useState<string[]>([]);
      
      const shopifyClient = Client.buildClient({
        domain: '4a5406-31.myshopify.com',
        storefrontAccessToken: 'c28f990cace2e752fd8098910de2c8b4',
        apiVersion: ''
      });
    
      useEffect(() => {
        setSelectedVariants((prevSelectedVariants) =>
          Array.from({ length: quantity }, (_, i) => prevSelectedVariants[i] || variantOptions?.[0]?.id || '')
        );
      }, [quantity, variantOptions]);
    
      useEffect(() => {
        if (quantity > 0 && selectedVariants.every(Boolean)) {
          shopifyClient.checkout.create().then((checkout) => {
            const lineItemsToAdd = selectedVariants.map((variantId) => ({
              variantId: btoa(`gid://shopify/ProductVariant/${variantId}`),
              quantity: 1,
            }));
    
            shopifyClient.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkoutWithItems) => {
              setCheckoutUrl(checkoutWithItems.webUrl);
            });
          });
        }
      }, [selectedVariants]);
    
      const handleVariantChange = (index: number, variantId: string) => {
        setSelectedVariants((prevSelectedVariants) =>
          prevSelectedVariants.map((variant, i) => (i === index ? variantId : variant))
        );
      };

      const increaseQuantity = () => {
        setQuantity(quantity + 1)
      }

      const decreaseQuantity = () => {
        if(quantity < 4) return;
        setQuantity(quantity - 1)
      }

      
      const price = 54.99 * quantity;
      const oldprice = Math.round(price * 100 / 70);
      const save = (oldprice - price).toFixed(2);

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
                  <option key={variant.id} value={variant.id}>
                    {variant.name}
                  </option>
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
                  <span className={styles.oldprice}>${oldprice}</span>
                </div>
              </div>
              <div className={styles.ships}>
                <div className={styles.ship}>
                  <Image src={'/delivery.png'} alt={''} width={15} height={15}></Image>
                  <p className={styles.shiptext}>Free Shipping</p>
                </div>
                <div className={styles.ship}>
                  <Image src={'/guarantee.png'} alt={''} width={15} height={15}></Image>
                  <p className={styles.shiptext}>30-Day Money Back</p>
                </div>
              </div>
            </div>
          <button
          className={styles.button}
            onClick={() => {
              if (checkoutUrl) {
                window.location.href = checkoutUrl;
              }
            }}
            disabled={!checkoutUrl || quantity < 1 || selectedVariants.some((variant) => !variant)}
          >
            GO TO CHECKOUT ⚡
          </button>
          <PaymentMethods></PaymentMethods>
        </div>
      );
    };

  export const variantOptions = [
      { id: "49446916391210", name: "⚫ Black" },
      { id: "49446916423978", name: "⚪ White" },
    ];

export default Product;