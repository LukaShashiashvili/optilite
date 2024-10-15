import Hero from './hero/hero';
import HTW from './htw/htw';
import InfoFirst from './infoFirst/infoFirst';
import InfoSecond from './infoSecond/infoSecond';
import InfoThird from './infoThird/infoThird';

export default function Content(){
    return(
        <>
            <Hero></Hero>
            <InfoFirst></InfoFirst>
            <InfoSecond></InfoSecond>
            <HTW></HTW>
            <InfoThird></InfoThird>
            <Hero></Hero>
        </>
    )
}