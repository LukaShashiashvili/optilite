'use client'
import { useState } from 'react';
import styles from './FAQ.module.css';
import { data } from './questions';
import SingleQuestion from './singleQuestion';



export default function FAQ(){

const [questions, setQuestions] = useState(data);

    return(
        <main className={styles.container}>
            <div className={styles.headers}>
                <h2>FREQUENTLY</h2>
                <h2>ASKED QUESTIONS</h2>
            </div>
            <div className={styles.list}>
                {questions.map((question) => {
                    return(
                        <SingleQuestion key={question.id} {...question}/>
                    )
                })}
            </div>
        </main>
    )
}