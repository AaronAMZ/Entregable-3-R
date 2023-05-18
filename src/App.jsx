import axios from 'axios';
import { useEffect, useState } from 'react'
import { getLocationById } from './services/getLocationById';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './Components/Location/Location';
import Loader from './Components/Loader/Loader';
import ResidentList from './Components/ResidentList/ResidentList';
import SearchForm from './Components/SearchForm/SearchForm';

import './App.css'

// Promise.all()
// Si alguna falla todo el promise.all falla, es decir, lanzamos 100 peticiones y de esas fallan 2, entonces perdería los otros 98 datos.

// El valor de un input en React no puede ser null ni undefined

const getLocations = async (page) => {
  
    const res = await axios.get('https://rickandmortyapi.com/api/location', 
    {params: {page},
  });

  return res.data.results.map(x => ({id: x.id, name: x.name}))
};

function App() {
  const [location, setLocation] = useState(null);

 

  const handleMeEstoyEnviando = async (dataId) => {
    
    let locationInfo;

    if(!dataId) {
      const randomId = getRandomNumber(1, 126);
      locationInfo = await getLocationById(randomId);
    } else {
      locationInfo = await getLocationById(dataId);
    }

    setLocation(locationInfo)
  }

  useEffect(() => {
    const loadLocation = async () => {
      const randomId = getRandomNumber(1, 126);
      const locationInfo = await getLocationById(randomId);
      setLocation(locationInfo)
    };

    const loadAllLocations = async () => {
      const promisesLocations = [];

      for(let i = 1; i <= 7; i++) {
        promisesLocations.push(getLocations(i))
      }

      const locations = await Promise.allSettled(promisesLocations);
      console.log(locations.flat().map((x) => x.value));
    }

    loadLocation();
    loadAllLocations();
  }, []);

  return (
    <article className='page'>
      <div className='first_section'>
        
        <h1>Rick and Morty</h1>

      <SearchForm meEstoyEnviando={handleMeEstoyEnviando}/>
      </div>

      {location ? <Location location={location}/> : <Loader/>}

      <div className='second_section'>
      <h2>Residents</h2>
      
      <ResidentList residents={location?.residents}/>
      </div>
    </article>
  )
}

export default App
