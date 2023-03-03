import React from 'react';
import Articles from './Articles';
import Magazyny from '../../../images/article/selfpv.webp';


const BezMontazu = () => {
    return ( 
        <Articles
        title="Gotowe zestawy do montażu"
        img={Magazyny}
        tit1=""
        par1="Gotowe zestawy fotowoltaiczne są idealnym rozwiązaniem dla tych, którzy chcą zainwestować w panele słoneczne, ale nie chcą lub nie umieją dobierać poszczególnych elementów instalacji. Zestawy te składają się z kompletnego pakietu, zawierającego wszystko, co potrzebne do montażu instalacji - panele fotowoltaiczne, inwerter, osprzęt montażowy oraz przewody i złącza.

        Zestawy fotowoltaiczne są dostępne w różnych konfiguracjach i mocach, dzięki czemu można dobrać je do własnych potrzeb. Mogą składać się z jednego lub kilku paneli słonecznych, a moc instalacji może wynosić od kilku do kilkudziesięciu kWp." 
        par2="Gotowe zestawy fotowoltaiczne cieszą się dużą popularnością wśród prywatnych inwestorów, ale również firm i instytucji, które chcą wdrożyć odnawialne źródła energii. Zestawy pozwalają zaoszczędzić czas i pieniądze, ponieważ nie trzeba samodzielnie dobierać i montować poszczególnych elementów instalacji."
        par3="Montaż zestawów fotowoltaicznych wymaga podstawowej wiedzy na temat instalacji fotowoltaicznych oraz elektrycznych. Zazwyczaj są one dostarczane z instrukcją montażu oraz wsparciem technicznym, w razie jakichkolwiek problemów.

        Podsumowując, gotowe zestawy fotowoltaiczne są wygodnym i praktycznym rozwiązaniem dla tych, którzy chcą inwestować w energię słoneczną, ale nie posiadają odpowiedniej wiedzy technicznej. Dzięki nim można oszczędzić czas i pieniądze oraz cieszyć się korzyściami płynącymi z wykorzystania energii słonecznej."
        knowMore="programie mój prąd"
        />
     );
}
 
export default BezMontazu;