/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CountryInfo = ({ desh }) => {
    const {   spotName, country, location, short, average, season, travel, total,countryImage } = desh
    return (
        <Link to={`/countryDetails/${country}`}>
        <div className='border border-rose-200 rounded-lg shadow-lg p-5 hover:shadow-xl'>
            <img className='w-full h-40 object-cover rounded-t-lg' src={countryImage} alt={`${country}`} />
            <div className='p-5'>
            <h2 className='text-3xl font-semibold text-gray-800'>{country}</h2>
                <p className='text-sm text-gray-600 mt-2'>{short}</p>
                <div className='mt-5'>
                    <h3 className='text-xl font-medium text-gray-700'>Top Spot: {spotName}</h3>
                    <p className='text-sm text-gray-500'>Location: {location}</p>
                    <p className='text-sm text-gray-500'>Best Season: {season}</p>
                    <p className='text-sm text-gray-500'>Average Cost: {average} TK</p>
                    <p className='text-sm text-gray-500'>Travel Guide: {travel}</p>
                    <p className='text-sm text-gray-500'>Total Spots: {total}</p>
                </div>
            </div>
        </div>
    </Link>
    )
}

CountryInfo.propTypes = {}

export default CountryInfo