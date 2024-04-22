
import React, {
  useEffect,
  useState
} from 'react';
import  ReactPaginate  from 'react-paginate';
import { BiLinkExternal } from 'react-icons/bi';


function Items({ currentItems }) {
  
  console.log('==================================== Items');
  console.log(typeof(currentItems));
  console.log('====================================');
  

  return (
    <div className="items w-full md:w-full h-full flex flex-col md:flex-row items-center justify-evenly">
    {currentItems && currentItems.map((item) =>  (
      
      <div className=' m-2 h-2/3  w-5/6 md:w-2/3 lg:w-1/3   md:h-1/2 p-8 bg-gradient-to-br from-violet-600 via-violet-600 to-indigo-600 m-5 rounded-md border border-violet-600 flex flex-col hover:translate-y-1.5 transition-all duration-300 justify-center'>
        
        
        
        
      <span className='flex items-center'>
       <a  rel="noreferrer" target="_blank" href={item.url} >
           <h3 className='  text-center  text-white font-extrabold text-3xl m-2 hover:underline transition-all duration-500 ' >{item.name} </h3>
       </a>
      {item.url ? <BiLinkExternal className=' text-white text-center font-extrabold text-2xl hover:underline transition-all duration-500 '/> : null}
      </span>
       <h4 className=' m-2 text-center  text-white font-normal text-lg '>({item.position})</h4>
       <div className=' flex flex-wrap items-center justify-center m-1'>
       {
           item.tech.map((item, i)=>{
               return <span key={i}  className=' m-1 text-white border bg-violet-600 font-bold p-1 px-2 rounded-md hover:scale-105 transition-all duration-150 hover:bg-white hover:text-violet-600  hover:border-violet-600'>{item}</span>
           })
       }
       </div>
   </div>
      
    ))}
      </div>
  );
}



function PaginatedItems({ itemsPerPage, items }) {
  console.log(items);
  
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className='w-full flex flex-col justify-center items-center h-full'>
    <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item m-1 rounded-lg  text-white font-bold w-10 h-10 border-2 border-violet-400 flex justify-center items-center"
        pageLinkClassName="page-link text-white "
        previousClassName="page-item m-1 font-bold text-white w-10 h-10 border-2 border-violet-400 flex justify-center items-center"
        previousLinkClassName="page-link text-white"
        nextClassName="page-item font-bold text-white w-10 h-10 border-2 border-violet-400 flex justify-center items-center m-1 "
        nextLinkClassName="page-link"
        breakLabel="... "
        breakClassName="page-item font-bold text-white m-2"
        breakLinkClassName="page-link"
        containerClassName="pagination flex justify-evenly m-5"
        activeClassName="active bg-violet-600"
      />
    </div>
      
    </>
  );
}

export default PaginatedItems