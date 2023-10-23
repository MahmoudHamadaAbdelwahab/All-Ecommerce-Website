import React from 'react'
import ReactPaginate from 'react-paginate'
// import Pagination from 'react-bootstrap/Pagination';
 const PaginationPage = () => {
  const handlePageClick = () => {}
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={100}
        previousLabel="السابق"

        // style
        containerClassName={'Pagination d-flex justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}

        previousClassName={'item'}
        nextClassName={'item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}

        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'PaginationActive'}
        />
        );
}

export default PaginationPage