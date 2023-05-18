import PropTypes from "prop-types";
import ResidentCard from '../ResidentCard/ResidentCard';
import { useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import "./ResidentList.css"


const ResidentList = ({ residents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(6);
  // const {currentPage: numberPage, listSlice: residentsSlice, pages, changePageTo} = usePagination(residents, quantityPagination);

  const [numberPage, residentsSlice, pages, changePageTo] = usePagination(
    residents, quantityPagination
  )
  //* FORMA 1
  // const getPageButtons = () => {
  //   const buttons = [];

  //   for(let i = 1; i <= totalPages; i++){
  //     const button = <button onClick={() => changePageTo(i)}>{i}</button>;

  //     buttons.push(button);
  //   }

  //   return buttons;
  // };

  return (
    <article className="container">
     <div className="buttons_section">
      <button className="first_button left" onClick={() => changePageTo(numberPage - 1)}>Back</button>
      {/* {getPageButtons()} */}
      {pages.map((i) => 
      <button className="buttons_mid" key={i} onClick={() => changePageTo(i)} style={{color: numberPage === i ? "red" : undefined}}>{i}</button>)}

      <button className="first_button right" onClick={() => changePageTo(numberPage + 1)}>Next</button>
      </div>

      <select className="value"
      value={quantityPagination} 
      onChange={(e) => setQuantityPagination(Number(e.target.value))} name="quantity_per_pages">
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>


    {!residentsSlice.length && <p>No hay residentes en esta ubicación</p> }

    

    <div>
    {Boolean(residentsSlice.length) && (
      <ul className="countries_container">
        {residentsSlice.map((residentUrl) => (
          <li key={residentUrl}>
            <ResidentCard url={residentUrl}/>
          </li>
        ))}
    </ul>
    )}
    </div>
   

   
    </article>
  )
};

ResidentList.proptypes = {
    residents: PropTypes.array.isRequired,
}

export default ResidentList