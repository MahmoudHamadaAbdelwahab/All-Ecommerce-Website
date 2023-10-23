import React from 'react'
import PaginationPage from '../../Components/Utility/Pagination';
import BrandContainer from '../../Components/Brands/BrandContainer';

const AllBrandPage = () => {
  return (
    <div>
      <h1>كل البرندات</h1>

        <BrandContainer/>

        <PaginationPage/>
        
    </div>
  )
}

export default AllBrandPage;