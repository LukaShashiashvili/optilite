'use client'
import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import styles from './product.module.css';



interface CheckoutButtonProps{
variantOptions: { id: string; name: string }[];
quantity: number;
}

  const ProductStatic: React.FC<CheckoutButtonProps> = ({ variantOptions, quantity = 1 }) => {
    const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
    const [selectedVariants, setSelectedVariants] = useState<string[]>([]);
        
        const shopifyClient = Client.buildClient({
          domain: '4a5406-31.myshopify.com',
          storefrontAccessToken: 'c28f990cace2e752fd8098910de2c8b4',
          apiVersion: ''
        });
      
        useEffect(() => {
          setSelectedVariants((prevSelectedVariants) =>
            Array.from({ length: quantity}, (_, i) => prevSelectedVariants[i] || variantOptions?.[0]?.id || '')
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
          <div className={styles.container}>
            {Array.from({ length: quantity }, (_, index) => (
              <label className={styles.label} key={index}>
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
            ))}
      
            <button
            className={styles.button}
              onClick={() => {
                if (checkoutUrl) {
                  window.location.href = checkoutUrl;
                }
              }}
              disabled={!checkoutUrl || selectedVariants.some((variant) => !variant)}
            >
              Buy Now
            </button>
          </div>
        );
      };

export default ProductStatic;