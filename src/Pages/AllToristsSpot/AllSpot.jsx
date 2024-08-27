
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AllSpot = ({ spot }) => {
    const { _id, image, spotName, country, location, short, average, season, travel, total, userName, userEmail } = spot
    return (
        <div>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img className='h-72 mb-7 rounded-full' src={image} alt="Tourist spot" /></figure>
                <h2 className="text-sm  ">Spot Name: <span className='text-xl font-medium text-blue-600'>{spotName}</span> </h2>
                <div className=" p-2">
                    <div className='flex justify-between'>
                        <h2 className="text-sm  ">Country: <span className='text-xl font-medium text-amber-600'>{season}</span> </h2>
                        <h2 className="text-sm  ">Country: <span className='text-xl font-medium text-amber-600'>{country}</span> </h2>

                    </div>
                    <div className="p-2 mt-3">
                        <div className='flex justify-between'>
                            <h2 className="text-sm  ">Location: <span className='text-xl font-medium text-blue-600'>{location}</span> </h2>
                            <h2 className="text-sm  ">Cost: <span className='text-xl font-medium text-amber-600'>{average}TK</span> </h2>
                        </div>
                    </div>
                    <div className="card-actions justify-center my-6">
                        <Link to={`/viewDetails/${_id}`}>
                            <button className="btn btn-primary  w-72 bg-slate-500">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

AllSpot.propTypes = {
    spot:PropTypes.object.isRequired
}

export default AllSpot