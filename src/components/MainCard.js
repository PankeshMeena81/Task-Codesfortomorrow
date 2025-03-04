import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import profile from '../assests/images/profile.png'
import data from '../data.json'
import { FaAnglesRight } from "react-icons/fa6";
const MainCard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Show 5 items per page
    const totalPages = Math.ceil(data.length / itemsPerPage); // Total number of pages
    const pageRange = 3; // Number of page buttons to show (e.g., 1,2,3 or 2,3,4)
  
    // Calculate the index of the last item on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    // Calculate the index of the first item on the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Slice the data to show only the items for the current page
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

     // Function to handle pagination (changing pages)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the range of page numbers to display
  const getPageNumbers = () => {
    let startPage = Math.max(currentPage - Math.floor(pageRange / 2), 1);
    let endPage = Math.min(startPage + pageRange - 1, totalPages);

    // Adjust the start page if the range is near the end of the total pages
    if (endPage - startPage < pageRange - 1) {
      startPage = Math.max(endPage - pageRange + 1, 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const pageNumbers = getPageNumbers();

    const getFirst50Characters = (text) => {
        return text.length > 50 ? text.substring(0, 70) + '...' : text;
      };
  return (
    <div className='row
     p-5'>

    {
  currentItems.map((items ,index )=>(
    <div className="col-lg-11" key={items?.id}>

    <div className="d-flex justify-content-between">

    <div className="card border-0 shadow w-100 me-4 mb-4">
        <div className="row">

        <div className=" col-lg-2 ">
          <div className="card-imgs  ">
                    <img src={profile} alt="" className='img-fluid '  />
        </div>

        </div>

   <div className="col-lg-10">
   <div className="card-body">
    <h5 className="card-title">{getFirst50Characters(items.title)}</h5>
    <p className="card-text p-0 m-0 ">{getFirst50Characters(items.body)}</p>
    <span className='text-muted '> Mon, 21 Dec 2020 14:57 GMT</span>
  </div>
   </div>
        </div>
</div>

<div className="cross-btn shadow mt-3">
<IoMdClose />
  </div>
 </div>
   </div>

        ))
    }
 {/* Pagination Controls */}
 <div className="pagination-container d-flex justify-content-center mt-4">
        {/* Previous button */}
       

        {/* Render page numbers */}
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`btn ${
              currentPage === pageNumber ? "button-prev" : "button-none"
            } me-2`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        className='border-0 text-muted'
        >
         <FaAnglesRight />

        </button>
      </div>
    </div>
  )
}

export default MainCard