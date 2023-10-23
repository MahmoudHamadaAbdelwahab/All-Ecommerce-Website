import React from 'react';
import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductContainer from '../../Components/Products/CardProductContainer' 
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeature from '../../Components/Brands/BrandFeature';
const HomePage = () => {
  return (
    <div className='text-center' style={{minHeight:"670px"}}>
      

      <Slider/>   


      <HomeCategory/>   

      <CardProductContainer Title="الاكثر مبيعا" BtnTitle="المزيد" /> 

      <DiscountSection/>   

       <CardProductContainer Title="احدث الأزياء" BtnTitle="المزيد"  /> 

      <BrandFeature Title="جميع البرندات" BtnTitle="المزيد"/>   
      
    </div>

  )
}

export default HomePage;