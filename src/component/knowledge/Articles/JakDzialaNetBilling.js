import React from 'react';
import Articles from './Articles';
import Magazyny from '../../../images/article/netbill.jpeg';


const JakDzialaNetBilling = () => {
    return ( 
        <Articles
        title="Jak działa Net billing?"
        img={Magazyny}
        tit1="Korzyści z net-billingu"
        par1="W 2022 roku nastąpiła zmiana w rozliczaniu energii elektrycznej wytworzonej przez instalacje fotowoltaiczne. Wcześniej prosumenci korzystali z upustów, jednak w nowym systemie, zwanym net-billing, odpłatnie przekazują do sieci nadwyżki produkcji. Cena odsprzedazy energii jest ustalana z góry kazdego miesiąca. "
        par2="Każdy właściciel instalacji fotowoltaicznej posiada konto prosumenta, które prowadzi sprzedawca energii. Konto to służy do rozliczania nadwyżek energii wprowadzonej do sieci i pobranej z sieci. Wprowadzono również pojęcie depozytu prosumenckiego - to wirtualny portfel, do którego trafiają środki zgromadzone ze sprzedaży energii, a z niego pobierane są środki na zakup energii."
        par3="Zyski ze sprzedaży nadwyżek energii można wypłacić. Jeżeli po upływie 12 miesięcy od zdeponowania środki nie zostaną wykorzystane na zakupy energii, powstanie nadpłata, która podlega zwrotowi. Maksymalna kwota zwrotu jest równowartością 20% wartości energii elektrycznej sprzedanej do sieci w miesiącu, którego dotyczy zwrot nadpłaty."
        knowMore="net billingu"
        />
     );
}
 
export default JakDzialaNetBilling;