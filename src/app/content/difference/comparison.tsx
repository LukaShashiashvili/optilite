import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import styles from './difference.module.css';

export const Comparison = () => {
  return (
    <ReactCompareSlider
    className={styles.compareslider}
      itemOne={<ReactCompareSliderImage src={'/asymmetricleft.png'} alt="Image one"/>}
      itemTwo={<ReactCompareSliderImage src={'/asymmetricright.png'} alt="Image two"/>}
    />
  );
};