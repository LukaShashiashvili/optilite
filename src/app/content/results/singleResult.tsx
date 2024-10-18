import React, { useState } from 'react';
import styles from './results.module.css';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

type Props = {
    title: string;
    info: string;
}
export default function SingleResult(props: Props){

    const [showInfo, setShowInfo] = useState(false);

    return(
        <main className={styles.box}>
            <button className={styles.button} onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                <h4 className={styles.title}>{props.title}</h4>
            </button>
            {showInfo && <p className={styles.info}>{props.info}</p>}
        </main>
    )
}