'use client'
import styles from './results.module.css';
import { data } from './data';
import { useState } from 'react';
import SingleResult from './singleResult';

export default function Results(){

    const [title, setTitle] = useState(data);

    return(
        <main className={styles.container}>
            <h2 className={styles.header}>RESULTS</h2>
            <div className={styles.list}>
                {title.map((title) => {
                    return(
                        <SingleResult key={title.id} {...title}/>
                    )
                })}
            </div>
        </main>
    )
}