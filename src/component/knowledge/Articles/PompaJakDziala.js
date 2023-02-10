import React from 'react';
import Articles from './Articles';
import Magazyny from '../../../images/article/pvhowworks.jpeg';


const PompaJakDziala = () => {
    return ( 
        <Articles
        title="Pompa Jak dziala"
        img={Magazyny}
        tit1="Jak działa pompa ciepła powietrzna?"
        par1="Pompa ciepła powietrzna jest jednym z rodzajów pomp ciepła, które wykorzystują energię z otoczenia do ogrzewania domu. W przypadku pomp ciepła powietrznych, energia pochodzi z powietrza zewnętrznego. "
        par2="Paragraf 2: Pompa ciepła powietrzna składa się z kilku elementów, takich jak: zewnętrzny kompresor, skraplacz, parownik i sprężarka. Kiedy powietrze jest wciągane do urządzenia przez kompresor, jest ono schładzane w skraplaczu i ostatecznie jest przekształcane w ciepło w parowniku. Sprężarka pomaga w przeniesieniu ciepła do naszego domu, gdzie jest ono wykorzystywane do ogrzewania pomieszczeń."
        par3=" Pompy ciepła powietrzne są bardzo efektywne i ekologiczne, ponieważ wykorzystują energię, która jest już dostępna w naszym otoczeniu, zamiast korzystać z paliw kopalnych. Są one łatwe w obsłudze i nie wymagają wiele uwagi, co czyni je idealnym rozwiązaniem dla osób, które chcą mieć ciepły dom bez konieczności martwienia się o jego ogrzewanie. Co więcej, są one stosunkowo niedrogie w porównaniu z innymi rodzajami pomp ciepła, co czyni je bardziej dostępnymi dla większej liczby osób."
        knowMore="programie mój prąd"
        />
     );
}
 
export default PompaJakDziala;