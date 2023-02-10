import React from 'react';
import Articles from './Articles';
import Magazyny from '../../../images/article/netbilling.webp';


const CzyNetBillingSieOplaca = () => {
    return ( 
        <Articles
        title="Czy net billing się opłaca?"
        img={Magazyny}
        tit1="Korzyści z net-billingu"
        par1="Od kwietnia 2022 roku nowy system rozliczania nadwyżek energii elektrycznej produkowanej przez instalacje fotowoltaiczne, tzw. net-billing, jest obowiązujący dla prosumentów w Polsce. W odróżnieniu od net-meteringu, w którym wprowadzana energia jest uznawana za wirtualny magazyn, w net-billing energia jest sprzedawana po cenie określonej w indeksie RCEm i środki ze sprzedaży są gromadzone w depozycie prosumenckim."
        par2="Niedawne wartości RCEm wykazują, że cena sprzedaży energii elektrycznej jest wyższa niż cena zakupu tej energii z sieci, co oznacza, że prosumenci mogą zarobić więcej dzięki temu systemowi. Na przykład w sierpniu 2022 roku cena sprzedaży wynosiła 796,27 zł/MWh, a we wrześniu 2022 roku aż 1023,42 zł/MWh. Wysokie stawki te oznaczają szansę na wysoki zysk dla prosumentów, zwłaszcza w przypadku, gdy nadwyżki energii produkowanej przez ich instalacje są wysokie w stosunku do jej autokonsumpcji."
        par3="Warto zauważyć, że wprowadzenie net-billingu w Polsce nie tylko zwiększa atrakcyjność inwestycji w fotowoltaikę, ale także umożliwia bardziej efektywne i korzystne dla prosumentów rozliczanie nadwyżek energii. Obecnie funkcjonujące wysokie stawki RCEm dodatkowo zachęcają do instalowania paneli słonecznych, co jest korzystne zarówno dla środowiska, jak i dla portfela."
        knowMore="net billingu"
        />
     );
}
 
export default CzyNetBillingSieOplaca;