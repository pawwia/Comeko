import './App.css';
import Main from './main/Main';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import Privacy from './component/Privacy';
import Footer from './component/Footer';
import Contact from './Contact/Contact';
import Portfolio from './component/Porfolio/Portfolio';
import Finance from './component/finance/Finance';
import About from './component/aboutUs/About';
import Services from './component/Services/Services';
import Knowledge from './component/knowledge/Knowledge';
import Fotowoltaika from './component/knowledge/Articles/Fotowoltaika';
import PompyCiepla from './component/knowledge/Articles/Pompy-Ciepla';
import MagazynyEnergii from './component/knowledge/Articles/MagazynyEnergii';
import CzyNetBillingSieOplaca from './component/knowledge/Articles/CzyNetBillingSieOplaca';
import JakDzialaNetBilling from './component/knowledge/Articles/JakDzialaNetBilling';
import MojPrad from './component/knowledge/Articles/Mojprad';
import PompaDlaMnie from './component/knowledge/Articles/PompaDlaMnie';
import PompaFoto from './component/knowledge/Articles/PompaFoto';
import PompaJakDziala from './component/knowledge/Articles/PompaJakDziala';
import PvPodzespoly from './component/knowledge/Articles/PvPodzespoly';
import Ladowarki from './component/knowledge/Articles/Ladowarki';
import BezMontazu from './component/knowledge/Articles/BezMontazu';
import FotowoltaikaDlaFirm from './component/knowledge/Articles/FotowoltaikaDlaFirm';
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
<Route path='/' element={<Main title="Fotowoltaika i Pompy Ciepła - Comeko.pl" />} />
<Route path='/kontakt' element={<Contact title="Kontakt - Skontaktuj się z nami - Fotowoltaika i Pompy Ciepła - Comeko.pl" />} />
<Route path='/portfolio' element={<Portfolio title="Realizacje - Nasze Projekty w Fotowoltaice i Pompach Ciepła - Comeko.pl" />} />
<Route path='/finansowanie' element={<Finance title="Finansowanie - Fotowoltaika i Pompy Ciepła - Comeko.pl" />} />
<Route path='/o-nas' element={<About title="O nas - Comeko.pl - Specjaliści w Fotowoltaice i Pompach Ciepła" />} />
<Route path='/uslugi' element={<Services title="Usługi - Fotowoltaika i Pompy Ciepła - Comeko.pl" />} />
<Route path='/wiedza' element={<Knowledge title="Wiedza - Fotowoltaika i Pompy Ciepła - Poradnik i Informacje - Comeko.pl" />} />
<Route path='/wiedza/pompy-ciepla' element={<PompyCiepla title="Pompy ciepła - Artykuły i Informacje - Comeko.pl" />} />
<Route path='/wiedza/fotowoltaika' element={<Fotowoltaika title="Fotowoltaika - Artykuły i Poradnik - Comeko.pl" />} />
<Route path='/wiedza/magazyny-energii' element={<MagazynyEnergii title="Magazyny energii - Artykuły i Informacje - Comeko.pl" />} />
<Route path='/wiedza/czy-net-billing-sie-oplaca' element={<CzyNetBillingSieOplaca title="Net Billing - Czy się opłaca? - Artykuł - Comeko.pl" />} />
<Route path='/wiedza/jak-dziala-net-billing' element={<JakDzialaNetBilling title="" />} />
<Route path='/wiedza/moj-prad' element={<MojPrad title="" />} />
<Route path='/wiedza/pompy-ciepla-czy-jest-dla-mnie' element={<PompaDlaMnie title="" />} />
<Route path='/wiedza/pompy-ciepla-i-fotowoltaika-duet-idealny' element={<PompaFoto title="Fotowoltaika i Pompy Ciepła - Idealny Duet - Artykuł - Comeko.pl" />} />
<Route path='/wiedza/popmpy-ciepla-jak-dziala-pompa-powietrzna' element={<PompaJakDziala title="" />} />
<Route path='/wiedza/pv-jakie-podzespoly-wybrac' element={<PvPodzespoly title="Instalacje Fotowoltaiczne - Jakie podzespoły wybrać? - Artykuł - Comeko.pl" />} />
<Route path='/wiedza/ladowarki-samochodowe' element={<Ladowarki title="" />} />
<Route path='/wiedza/zestawy-bez-montazu' element={<BezMontazu title="" />} />
<Route path='/wiedza/fotowoltaika-dla-firm' element={<FotowoltaikaDlaFirm title="" />} />
<Route path='/polityka-prywatnosci' element={<Privacy title="Polityka prywatności Comeko" />} />




      </Routes>
<Footer/>

    </div>
</BrowserRouter>
  );
}

export default App;
