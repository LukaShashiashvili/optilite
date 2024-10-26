import { useState } from 'react';
import styles from './modal.module.css';
import ProductStatic from '../product/productStatic';
import Product, {variantOptions} from '../product/product';

interface Props{
    quantity?: number;
    static: boolean;
}

export default function Modal(props: Props) {
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    return (
      <>
        <button onClick={toggleModal} className={styles.btnmodal}>
          CHOOSE COLOR
        </button>
        {modal && (
          <div className={styles.modal}>
            <div onClick={toggleModal} className={styles.overlay}></div>
            <div className={styles.modalcontent}>
                <div className={styles.container}>
                  <div className={styles.steps}>
                    <div className={styles.stepscontainer}>
                      <div className={styles.round}>1</div>
                      <div className={styles.line}></div>
                      <div className={styles.roundcheck}>2</div>
                    </div>
                    <div className={styles.stepstext}>
                      <p>CHOOSE COLOR</p>
                      <p>CHECKOUT</p>
                    </div>
                  </div>
                  
                  <div className={styles.headers}>
                      <h3>
                          Choose Your {props.quantity} OptilitePro Color:
                      </h3>
                  </div>
                  {props.static && 
                    (<ProductStatic variantOptions={variantOptions} quantity={props.quantity}></ProductStatic>)  
                  }
                  {!props.static && 
                    (<Product variantOptions={variantOptions}></Product>)
                  }
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