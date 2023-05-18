import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getCharacterByUrl } from '../../services/getCharacterByUrl'
import "./ResidentCard.css"

const ResidentCard = ({ url }) => {
    const [resident, setResident] = useState(null);

    useEffect(() => {
        const loadResident = async() => {
            const residentData = await getCharacterByUrl(url);
            setResident(residentData)
        };

        loadResident();
    }, [url])

  return (
    <article className='resident_list'>
    {!resident ? <p>Loading Character</p> : (
        <article className='sect_image'>
            <div className='image'>
                <img src={resident.image} alt={resident.name} />
            </div>
    
            <h3>{resident.name}</h3>
            <hr />
            <ul className='contain_card'>
                <li>
                    <b>Specie: </b>
                    {resident.species}
                </li>
                <li>
                    <b>Origin: </b>
                    {resident.origin.name}
                </li>
                <li>
                    <b>Status: </b>
                    {resident.status}
                </li>
                <li>
                    <b>Appearances: </b>
                    {resident.episode.length}
                </li>
            </ul>
        </article>

    )}
    </article>
  );
}

ResidentCard.propTypes = {
    url: PropTypes.string.isRequired,

}

export default ResidentCard