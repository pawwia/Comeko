import React from 'react';
import Articles from './Articles';
import Magazyny from '../../../images/article/pvhp.jpeg';


const PompaFoto = () => {
    return ( 
        <Articles
        title="Pompa ciepła + fotowoltaika"
        img={Magazyny}
        tit1="Czy Pompa Ciepła i Fotowoltaika to Para Idealna?"
        par1=" Jeśli chodzi o efektywność i oszczędność energii, połączenie pompy ciepła i fotowoltaiki jest trudne do pobicia. Pompa ciepła to ekologiczne rozwiązanie do ogrzewania domu, które pozwala na oszczędność nawet do 70% na rachunkach za energię. Z kolei fotowoltaika pozwala na wytwarzanie własnej, odnawialnej energii elektrycznej, co również przyczynia się do obniżenia rachunków."
        par2="Połączenie tych dwóch technologii pozwala na jeszcze większe oszczędności i jeszcze większą niezależność od dostawców energii. W ciągu dnia, gdy słońce świeci, fotowoltaika produkuje energię elektryczną, którą można wykorzystać do ogrzania domu lub użyć do innych celów. Natomiast w nocy, gdy słońce już nie świeci, pompa ciepła może korzystać z energii elektrycznej, która została wyprodukowana wcześniej.        "
        par3="Nie tylko połączenie tych dwóch technologii pozwala na oszczędność pieniędzy, ale również przyczynia się do ochrony środowiska. Pompa ciepła i fotowoltaika pozwalają na korzystanie z odnawialnych źródeł energii, co oznacza mniejsze emisje CO2 i mniejsze zanieczyszczenie powietrza. Warto zastanowić się nad zainwestowaniem w te technologie, aby poprawić swoje finanse i wesprzeć ochronę środowiska."
        knowMore="programie mój prąd"
        />
     );
}
 
export default PompaFoto;