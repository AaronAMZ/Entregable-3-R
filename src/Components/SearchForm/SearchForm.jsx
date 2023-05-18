import "./SearchForm.css"
import { useState } from "react";

const SearchForm = ({meEstoyEnviando}) => {
    const [searchLocation, setSearchLocation] = useState("")
  const [errorSearchLocation, setErrorSearchLocation] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Valida que desde el principio hasta el final del string solo hayan números
    // if(/^\d$/.test(newValue)) {
      if (newValue && isNaN(Number(newValue))) {
      // Si el valor no es vacío y no es número válido
    setErrorSearchLocation("El id debe ser un número");
    } else if (newValue && Number(newValue) < 1) {
      // Si el valor no es vacío y el número es menor que 1
      setErrorSearchLocation("El menor id existente es 1")
    } else if (newValue && Number(newValue) > 126) {
      setErrorSearchLocation("El id máximo es de 126");
    } else {
      setErrorSearchLocation("");
    }

    setSearchLocation(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si el valor tiene un error, no vamos a hacer nada.
    if(errorSearchLocation) return;

    meEstoyEnviando(searchLocation);
  }

  return (
    <form className="search_form" onSubmit={handleSubmit}>
    <input type="text" value={searchLocation} onChange={handleChange}/>
    <p style={{color: "red"}}>{errorSearchLocation}</p>
    <button type='submit'>Search</button>
  </form>
  )
}

export default SearchForm