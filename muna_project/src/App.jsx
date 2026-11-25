import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Free from './Components/Free'
import Navbar from './Components/Navbar'
import Heropage from './Components/Heropage'
import Featured from './Components/featuredProducts'
import Category from './Components/Category'
import New from './Components/New'
import Sale from './Components/Sale'  
import Review from './Components/Review'
import Discount from './Components/Discount'
import Footer from './Components/Footer'
import About from './Components/About Components/About'
import Passion from './Components/About Components/Passion'
import Values from './Components/About Components/Values' 
import Team from './Components/About Components/Team'
import AboutDiscount from './Components/About Components/aboutDiscount'
import AboutFooter from './Components/About Components/aboutFooter'
import Form from './Components/Form'
import Laptop from './Components/Product Components/Laptop'
import Headphones from './Components/Product Components/Headphones'
import Smartwatch from './Components/Product Components/Smartwatch'
import Earbuds from './Components/Product Components/Earbuds'
import Keyboard from './Components/Product Components/Keyboard'
import Phone from './Components/Product Components/Phone'
import Mouse from './Components/Product Components/Mouse'
import Controller from './Components/Product Components/Controller'
import Speaker from './Components/Product Components/Speaker'
import Headset from './Components/Product Components/Headset'
import EclipseLaptop from './Components/Product Components/eclipseLaptop'
import ApexWatch from './Components/Product Components/apexWatch'
import ClarityOne from './Components/Product Components/clarityOne'
import LumiaX1 from './Components/Product Components/lumiaX1'
import CoreStation from './Components/Product Components/coreStation'
import TitanLaptop from './Components/Product Components/titanLaptop'
import EdgeControl from './Components/Product Components/edgeControl'
import LinkGlasses from './Components/Product Components/linkGlasses'
import ApexLaptop from './Components/Product Components/apexLaptop'
import AriaPhone from './Components/Product Components/ariaPhone'
import MotionBand from './Components/Product Components/motionBand'
import Boom360 from './Components/Product Components/boom360'
import EleraPhone from './Components/Product Components/eleraPhone'
import StrikePad from './Components/Product Components/strikePad'
import CoreLaptop from './Components/Product Components/coreLaptop'
import BeatX from './Components/Product Components/beatX'
import PulseLaptop from './Components/Product Components/pulseLaptop'
import ProductFooter from './Components/Product Components/productFooter'
import LaptopCategory from './Components/Category Components/laptopCategory'
import PhoneCategory from './Components/Category Components/phoneCategory'
import AudioCategory from './Components/Category Components/audioCategory'
import GamingCategory from './Components/Category Components/gamingCategory'
import WearablesCategory from './Components/Category Components/wearablesCategory'
import CateGory from './Components/Category Components/CateGORY'
import CategoryFooter from './Components/Category Components/categoryFooter'
import NewProducts from './Components/Product Components/newProducts'
import SaleProducts from './Components/Product Components/saleProducts'
import AllProducts from './Components/Product Components/allProducts'
import { Route, Routes } from 'react-router-dom'
import ZenraPhone from './Components/Product Components/zenraPhone'
import EchoBuds from './Components/Product Components/echoBuds'
import PulseWatch from './Components/Product Components/pulseWatch'
import VoxPro from './Components/Product Components/voxpro'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#000000] min-h-screen'> 
    
     <Navbar/>
  

     <Routes>
           <Route path="/" element={
            <>
                <Heropage/>
                <Featured/>
                <Category/>
                <New/>
                <Sale/>
                <Review/>
                <Discount/>
                <Footer/>
                </>
           } />
            <Route path="/about" element={
              <>
              <About />
              <Passion/>
              <Values/>
              <Team/>
              <AboutDiscount />
              <AboutFooter />
                </>
              } />

              <Route path="/categories" element={
                <>
                <CateGory/>
                <CategoryFooter/>
                </>
              } />

              <Route path="/form" element={
                <>
              <Form/>
                </>
              }/>

              <Route path="/Headphones" element={
                <>
                <Headphones/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Smartwatch" element={
                <>
                <Smartwatch/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Earbuds" element={
                <>
                <Earbuds/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Keyboard" element={
                <>
                <Keyboard/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Laptop" element={
                <>
                <Laptop/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Phone" element={
                <>
                <Phone/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Mouse" element={
                <>
                <Mouse/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Controller" element={
                <>
                <Controller/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Speaker" element={
                <>
                <Speaker/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/Headset" element={
                <>
                <Headset/>
                <ProductFooter/>
                </>
              }/>

               <Route path="/eclipselaptop" element={
                <>
                <EclipseLaptop/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/apexwatch" element={
                <>
                <ApexWatch/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/clarityone" element={
                <>
                <ClarityOne/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/lumiax1" element={
                <>
                <LumiaX1/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/corestation" element={
                <>
                <CoreStation/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/titanlaptop" element={
                <>
                <TitanLaptop/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/edgecontrol" element={
                <>
                <EdgeControl/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/linkglasses" element={
                <>
                <LinkGlasses/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/apexlaptop" element={
                <>
                <ApexLaptop/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/ariaphone" element={
                <>
                <AriaPhone/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/motionband" element={
                <>
                <MotionBand/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/boom360" element={
                <>
                <Boom360/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/eleraphone" element={
                <>
                <EleraPhone/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/strikepad" element={
                <>
                <StrikePad/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/corelaptop" element={
                <>
                <CoreLaptop/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/beatx" element={
                <>
                <BeatX/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/pulse14" element={
                <>
                <PulseLaptop/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/zenraphone" element={
                <>
                <ZenraPhone/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/echobuds" element={
                <>
                <EchoBuds/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/pulsewatch" element={
                <>
                <PulseWatch/>
                <ProductFooter/>
                </>
              }/>

              <Route path="voxpro" element={
                <>
                <VoxPro/>
                <ProductFooter/>
                </>
              }/>

              <Route path="/laptopCategory" element={
                <>
                <LaptopCategory/>
                </>
              }/>

              <Route path="/mobileCategory" element={
                <>
                <PhoneCategory/>
                </>
              }/>

               <Route path="/audioCategory" element={
                <>
                <AudioCategory/>
                </>
              }/>

              <Route path="/gamingCategory" element={
                <>
                <GamingCategory/>
                </>
              }/>

              <Route path="/wearablesCategory" element={
                <>
                <WearablesCategory/> 
                </>
              }/>

              <Route path="/allproducts" element={
                <>
                <AllProducts/>
                </>
              }/>

              <Route path="/new-arrivals" element={
                <>
                  <NewProducts/>
                </>
              }/>

             <Route path="/sale" element={
              <>
              <SaleProducts/>
              </>
             }/>

        </Routes>
    </div>

    
  )
}

export default App
