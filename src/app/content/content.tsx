import Difference from './difference/difference';
import Hero from './hero/hero';
import HTW from './htw/htw';
import InfoFirst from './infoFirst/infoFirst';
import InfoSecond from './infoSecond/infoSecond';
import InfoThird from './infoThird/infoThird';
import Symetric from './symetric/symetric';

export default function Content(){
    return(
        <>
            <Hero></Hero>
            <InfoFirst></InfoFirst>
            <InfoSecond></InfoSecond>
            <HTW></HTW>
            <InfoThird></InfoThird>
            <Difference></Difference>
            <Symetric></Symetric>
            <Hero></Hero>
        </>
    )
}