import PropTypes from 'prop-types'
import "./Location.css"

const Location = ({ location }) => {
  return (
    <div>
        <div className='location'>
        <h2>{location.name}</h2>

        </div>

        <ul className='ul_section'>
          <div>
            <li><b>Type: </b>{location.type}</li>
          </div>
          <div>
            <li><b>Dimension: </b>{location.dimension}</li>
          </div>
          <div>
            <li><b>Population: </b>{location.residents.length}</li>
          </div>
        </ul>
    </div>
  );
};

Location.propTypes = {
    location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        dimension: PropTypes.string.isRequired,
        residents: PropTypes.array.isRequired,
    })
}

export default Location