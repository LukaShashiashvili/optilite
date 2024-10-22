import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export const Comparison = () => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={'/asymmetricleft.png'} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={'/asymmetricright.png'} alt="Image two" />}
    />
  );
};