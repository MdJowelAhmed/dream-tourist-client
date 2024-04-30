
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CountryInfo = ({ desh }) => {
    const { country, countryImage } = desh
    return (
        <Link to={`/countryDetails/${country}`}>
            <div className=' border-rose-200 border-2  p-5'>
                <img className='h-72 rounded-full' src={countryImage} alt="" />
                <div>
                    <h2 className='text-3xl font-semibold mt-3'>{country} </h2>
                    <p className='text-sm'>{desh.short} </p>
                </div>
            </div>
        </Link>
    )
}

CountryInfo.propTypes = {}

export default CountryInfo