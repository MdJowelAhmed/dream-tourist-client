
import PropTypes from 'prop-types'

const SpotCard = ({ spot }) => {
    const { image, spotName, country, location, short, average, season, travel, total, userName, userEmail } = spot
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-[400px]' src={image} alt="Tourist spot" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="text-xl  ">Spot Name: <span className='text-2xl font-medium text-blue-600'>{spotName}</span> </h2>
                    <h2 className="text-xl  ">Location: <span className='text-2xl font-medium text-blue-600'>{location}</span> </h2>
                </div>
                <div className="">
                <div className='flex justify-between'>
                    <h2 className="text-xl  ">Country: <span className='text-2xl font-medium text-amber-600'>{country}</span> </h2>
                    <h2 className="text-xl  ">Cost: <span className='text-2xl font-medium text-amber-600'>{average}</span> </h2>
                </div>
               </div>
                <div className="card-actions justify-center my-6">
                    <button className="btn btn-primary  w-60 bg-slate-500">View Details</button>
                </div>
            </div>
        </div>
    )
}

SpotCard.propTypes = {
    spot: PropTypes.object.isRequired
}

export default SpotCard