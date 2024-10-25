'use client'
import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import styles from './product.module.css';

interface CheckoutButtonProps{
  variantId: string;
  title: string;
  quantity: number;
}

const Product: React.FC<CheckoutButtonProps> = ({ variantId, quantity = 1, title }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  const shopifyClient = Client.buildClient({
    domain: '4a5406-31.myshopify.com',
    storefrontAccessToken: 'c28f990cace2e752fd8098910de2c8b4',
    apiVersion: ''
  });

  useEffect(() => {
    shopifyClient.checkout.create().then((checkout) => {
      const lineItemsToAdd = [{
        variantId: btoa(`gid://shopify/ProductVariant/${variantId}`),
        quantity: quantity,
      }];

      shopifyClient.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkoutWithItems) => {
        setCheckoutUrl(checkoutWithItems.webUrl);
      });
    });
  }, [variantId, quantity]);

  return (
    <div className={styles.container}>
      <button
      className={styles.button}
      onClick={() => {
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        }
      }}
      disabled={!checkoutUrl}
    >
      {title}
    </button>
    </div>    
  );
};

export default Product;