import Difference from './difference/difference';
import Hero from './hero/hero';
import HTW from './htw/htw';
import Include from './include/include';
import InfoFirst from './infoFirst/infoFirst';
import InfoSecond from './infoSecond/infoSecond';
import InfoThird from './infoThird/infoThird';
import Light from './light/light';
import Places from './places/places';
import Services from './services/services';
import Symetric from './symetric/symetric';
import IconsSection from './iconsSection/iconsSection';
import FAQ from './FAQ/FAQ';
import Results from './results/results';

export default function Content(){
    return(
        <>
            <Hero></Hero>
            <InfoFirst></InfoFirst>
            <InfoSecond></InfoSecond>
            <HTW></HTW>
            <InfoThird></InfoThird>
            <Light></Light>
            <Symetric></Symetric>
            <Difference></Difference>
            <Places></Places>
            <IconsSection></IconsSection>
            <Include></Include>
            <Services></Services>
            <FAQ></FAQ>
            <Results></Results>
        </>
    )
}