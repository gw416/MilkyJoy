import './LandingPage.css';

// comonents imports
import Sun from '../Sun/Sun';
import SlideCard from '../SlideCard/SlideCard';
import HeaderText from '../Header/HeaderText';
import NavbarComponent from '../Navbar/NavbarComponent';

// res imports
import yslImg from '../../res/images/yslsdj.jpeg';
import pradaImg from '../../res/images/prada-tote.jpeg';

// TODO - convert to item list file
// Item list, later can put in ItemList File

// constant definitions
const ysl = "SAINT LAURENT";
const yslIl = "SAC DE JOUR IN GRAINED LEATHER.";
const yslDesc = "SAC DE JOUR BAG IN ITS ICONIC SIZE. ROOMY AND LEATHER-LINED, IT FEATURES TWO COMPARTMENTS SEPARATED BY A ZIPPED POCKET. DISTINGUISHABLE BY ITS ACCORDION SIDES, SNAP TABS AND BRASS PADLOCK, IT FEATURES A DETACHABLE SHOULDER STRAP.";

const prada = "PRADA";
const pradaIl = "MEDIUM LEATHER TOTE HANDBAG WITH BELT.";
const pradaDesc = "PRADA MADE. STURDY AND DURABLE LEATHER, ZIPPED POCKET. BELT BUCKLE WAIST. RENOWNED LUXURIOUS TOTE WITH NOTABLE FEATURES"; 

/**
 * 
 *
 * <br/><br/><Sun /><br/>
        <br/>
        <HeaderText txt={"MilkyJoy."} />
        <br/>
        <SlideCard itemName ={ysl} itemDesc={yslIl} itemDetails={yslDesc} itemImage={yslImg}/>
        <br/>
        <SlideCard itemName ={prada} itemDesc={pradaIl} itemDetails={pradaDesc} itemImage={pradaImg}/>
        <br/>




        <div className="LandingPage">
    <header className="LandingPage-header">
        <NavbarComponent />
    </header>
    </div>
 */
function LandingPage() {
  return (
    <div className="LandingPage">
    <header className="LandingPage-header">
    <br/>
        <HeaderText txt={"MilkyJoy."} />
        <br/>
        <SlideCard itemName ={ysl} itemDesc={yslIl} itemDetails={yslDesc} itemImage={yslImg}/>
        <br/>
        <SlideCard itemName ={prada} itemDesc={pradaIl} itemDetails={pradaDesc} itemImage={pradaImg}/>
        <br/>
    </header>
    </div>
  );
}

export default LandingPage;