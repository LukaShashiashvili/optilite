import { useState } from 'react';
import styles from './modal.module.css';
import ProductStatic from '../product/productStatic';
import {variantOptions} from '../product/product';

interface Props{
    quantity: number;
}

export default function Modal(props: Props) {
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    return (
      <>
        <button onClick={toggleModal} className={styles.btnmodal}>
          Choose Color
        </button>
        {modal && (
          <div className={styles.modal}>
            <div onClick={toggleModal} className={styles.overlay}></div>
            <div className={styles.modalcontent}>
                <div className={styles.container}>
                    <div className={styles.headers}>
                        <h3>
                            Choose Your {props.quantity} OptilitePro Color:
                        </h3>
                    </div>
                    <ProductStatic variantOptions={variantOptions} quantity={props.quantity}></ProductStatic>
                </div>
                
              <button className={styles.closemodal} onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
        </>
    );
  }