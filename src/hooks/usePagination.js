import { useEffect, useState } from "react";

 // Paginación
  // Es dividir en grupos más pequeños una lista de elementos
  // Por lo tanto minimamente se necesitan dos datos: LA LISTA y LA CANTIDAD DE ELEMENTOS QUE DEBE TENER CADA GRUPO

  //  0 1 2 3 4 5 6 7 8 9
  // [1,2,3,4,5,6,7,8,9,10]

  // Paginar en grupos de 3

  //  0 = 3x (1-1)
  // [1,2,3] -> Página 1

  //  3 = 3x (2-1)
  // [4,5,6] -> Página 2

  //  6 = 3x (3-1)
  // [7,8,9] -> Página 3

  //  9 = 3x3
  // [10] -> Página 4

  // limiteInferior = quantity * (numberPage - 1)
  // limiteSuperior = quantity * numberPage - 1

  // Lógica + Estado === Hook
  
export const usePagination = (list, quantityPerPage) => {
    const [pageNumber, setPageNumber] = useState(1);

    const lowerLimit = quantityPerPage * (pageNumber - 1);
    const upperLimit = quantityPerPage * pageNumber - 1;
    const totalPages = Math.ceil(list.length / quantityPerPage);

    const listSlice = list.slice(lowerLimit, upperLimit + 1)

    const changePageTo = (page) => {
        if(page > totalPages) setPageNumber(totalPages);
        else if (page < 1) setPageNumber(1);
        else setPageNumber(page);
      };
    
      const pages = Array(totalPages)
        .fill()
        .map((_, i) => i + 1);

    useEffect(() => {
        changePageTo(1);
    }, [quantityPerPage])

    return [pageNumber, listSlice, pages, changePageTo];
}