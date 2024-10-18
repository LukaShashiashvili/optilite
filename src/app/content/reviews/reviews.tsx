import styles from './reviews.module.css';
import Image from 'next/image';
import React from "react";



// export default function Reviews(){

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       };

//     return(
//         <Slider {...settings}>
//             <div className={styles.container}>
//                 <div className={styles.headers}></div>
//                 <div>
//                     {data.map((data) => {
//                         return(
//                             <div key={data.id}>
//                                 <img className={styles.photo} src={data.img} alt="" />
//                                 <p className={styles.text}>{data.text}</p>
//                             </div>
//                         )
//                         }
//                     )
//                     }
//                 </div>
//             </div>
//         </Slider>
//     )
// }