import React, { useState } from 'react';
import styles from './FAQ.module.css';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

type Props = {
    question: string;
    answer: string;
}
   

export default function SingleQuestion(props: Props){

    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <main className={styles.box}>
            <button className={styles.button} onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
                <h4 className={styles.question}>{props.question}</h4>
            </button>
            {showAnswer && <p className={styles.answer}>{props.answer}</p>}
        </main>
    )
}