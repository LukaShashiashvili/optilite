'use client'
import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import styles from './product.module.css';

  interface CheckoutButtonProps {
  variantOptions: { id: string; name: string }[];
}

const Product: React.FC<CheckoutButtonProps> = ({ variantOptions }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
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
    
      return (
        <div>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
          </label>
    
          {Array.from({ length: quantity }, (_, index) => (
            <label key={index} style={{ display: 'block', marginTop: '10px' }}>
              Choose Color {index + 1}:
              <select
                value={selectedVariants[index] || ''}
                onChange={(e) => handleVariantChange(index, e.target.value)}
                style={{ marginLeft: '10px' }}
              >
                {variantOptions.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name}
                  </option>
                ))}
              </select>
            </label>
          ))}
    
          <button
          className={styles.button}
            onClick={() => {
              if (checkoutUrl) {
                window.location.href = checkoutUrl;
              }
            }}
            disabled={!checkoutUrl || quantity < 1 || selectedVariants.some((variant) => !variant)}
          >
            Buy Now
          </button>
        </div>
      );
    };

  export const variantOptions = [
      { id: "49446916391210", name: "⚫ Black" },
      { id: "49446916423978", name: "⚪ White" },
    ];

export default Product;