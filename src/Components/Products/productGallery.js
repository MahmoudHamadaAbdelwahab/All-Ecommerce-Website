import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import img1 from  "./../../Images/computer.jpg"
import img2 from  "./../../Images/iphone-icon.png"
import img3 from  "./../../Images/hed-phone.jpeg"
// import LeftButton from './leftButton';
// import RightButton from './rightButton';
export default function ProductGallery() {
    const images = [
        {
          original:`${img1}`,  // this move image used search react image gallery 
        },
        {
            original: `${img2}`,
        },
        {
            original:`${img3}`,
        },
      ];
  return (
    <div className='ProductGallery display justify-content-center align-item-center pt-2'>
         <ImageGallery items={images} 
         defaultImage={img1}
         showFullscreenButton={false}
         isRTL={true}
         showPlayButton={false}
         showThumbnails={false}
        // renderLeftNav={<LeftButton/>}
        // renderRightNav={<RightButton/>}    
         />;
    </div>
  )
}
