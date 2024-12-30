import './LandingPage.css';
import * as React from 'react';

// comonents imports
import Sun from '../Sun/Sun';
import SlideCard from '../SlideCard/SlideCard';
import HeaderText from '../Header/HeaderText';
import NavbarComponent from '../Navbar/NavbarComponent';

// res imports
import yslImg from '../../res/images/yslsdj.jpeg';
import pradaImg from '../../res/images/prada-tote.jpeg';
import SacDeJour from '../../res/images/SacDeJour.jpg';

import MilkyjoyLogo from  '../../res/images/milkyjoy.png';



//mui imports
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';

// TODO - convert to item list file
// Item list, later can put in ItemList File

// constant definitions
const ysl = "SAINT LAURENT";
const yslIl = "SAC DE JOUR IN GRAINED LEATHER.";
const yslDesc = "SAC DE JOUR BAG IN ITS ICONIC SIZE. ROOMY AND LEATHER-LINED, IT FEATURES TWO COMPARTMENTS SEPARATED BY A ZIPPED POCKET. DISTINGUISHABLE BY ITS ACCORDION SIDES, SNAP TABS AND BRASS PADLOCK, IT FEATURES A DETACHABLE SHOULDER STRAP.";

const prada = "PRADA";
const pradaIl = "MEDIUM LEATHER TOTE HANDBAG WITH BELT.";
const pradaDesc = "PRADA MADE. STURDY AND DURABLE LEATHER, ZIPPED POCKET. BELT BUCKLE WAIST. RENOWNED LUXURIOUS TOTE WITH NOTABLE FEATURES";

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Milkyjoy',
  },
  {
    segment: 'sales',
    title: 'Sales',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'products',
    title: 'Products',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'tops',
        title: 'Tops',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'bottoms',
        title: 'Bottoms',
        icon: <DescriptionIcon />,
      },{
        segment: 'shoes',
        title: 'Shoes',
        icon: <DescriptionIcon />,
      },{
        segment: 'handbags',
        title: 'Handbags',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'homewares',
        title: 'Homewares',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'aboutme',
    title: 'About MilkyJoy',
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function LandingPage(props) {

  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  //const demoWindow = window ? window() : undefined;

  return (

    <AppProvider
    navigation={NAVIGATION}
    router={router}
    theme={demoTheme}
    branding={{
      logo: <img src={MilkyjoyLogo} alt="Milkyjoy." />,
      title: 'Milkyjoy.',
      homeUrl: '/toolpad/core/introduction',
    }}
    //window={demoWindow}
  >
    <DashboardLayout>
      <PageContainer>
        <Grid container spacing={1}>
          <Grid size={5} />
          <Grid size={12}>
            <Skeleton height={14} />
          </Grid>
          <Grid size={12}>
            <Skeleton height={14} />
          </Grid>
          <Grid size={4}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={8}>
            <Skeleton height={100} />
          </Grid>

          <Grid size={12}>
            <Skeleton height={150} />
          </Grid>
          <Grid size={12}>
            <Skeleton height={14} />
          </Grid>

          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
        </Grid>
      </PageContainer>
    </DashboardLayout>
  </AppProvider>

  );
}

export default LandingPage;


/**
 * 
 * 
    <div className="LandingPage">
      <NavbarComponent />
        <h1>Landing page</h1>
    </div>



 *       <br />
      <HeaderText txt={"MilkyJoy."} />
      <br />
      <SlideCard itemName={ysl} itemDesc={yslIl} itemDetails={yslDesc} itemImage={yslImg} />
      <br />
      <SlideCard itemName={prada} itemDesc={pradaIl} itemDetails={pradaDesc} itemImage={pradaImg} />
      <br />
 * 
 * 
 * 
 * 
 *  <div className="LandingPage">
      <NavbarComponent />
      <br />
      <HeaderText txt={"MilkyJoy."} />
      <br />
      <SlideCard itemName={ysl} itemDesc={yslIl} itemDetails={yslDesc} itemImage={yslImg} />
      <br />
      <SlideCard itemName={prada} itemDesc={pradaIl} itemDetails={pradaDesc} itemImage={pradaImg} />
      <br />
    </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  <header className="LandingPage-header">
        
      </header>


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



     <div>
      <img src={SacDeJour}/>
      <nav className="menu" >
        <ul>
          <a useRef="#"> Home </a>
          <a useRef="#"> Contact </a>
          <a useRef="#"> Clients </a>
          <a useRef="#"> Search </a>
        </ul>
      </nav>
    </div>
 */