import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllSpot = ({ spot }) => {
    const { _id, image, spotName, country, location, short, average, season } = spot;

    const styles = {
        image: {
            animation: 'imageFadeIn 0.6s ease-in-out',
            transition: 'transform 0.3s ease-in-out',
            height: '18rem',
            marginBottom: '1.25rem',
            borderRadius: '20%',
        },
        card: {
            backgroundColor: '#F3F4F6', // Tailwind's bg-base-100 equivalent
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', // Tailwind's shadow-xl equivalent
        },
    };

    return (
        <div>
            <div className="card" style={styles.card}>
                <figure>
                    <img
                        className="rounded-xl"
                        src={image}
                        alt="Tourist spot"
                        style={styles.image}
                        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </figure>
                <h2 className="text-sm text-center mb-5">
                    Spot Name: <span className='text-3xl font-medium text-blue-600'>{spotName}</span>
                </h2>
                <div className="p-2">
                    <div className='flex justify-between'>
                        <h2 className="text-sm">Season: <span className='text-xl font-medium text-amber-600'>{season}</span></h2>
                        <h2 className="text-sm">Country: <span className='text-xl font-medium text-amber-600'>{country}</span></h2>
                    </div>
                    <div className="p-2 mt-3">
                        <div className='flex justify-between'>
                            <h2 className="text-sm">Location: <span className='text-xl font-medium text-amber-600'>{location}</span></h2>
                            <h2 className="text-sm">Cost: <span className='text-xl font-medium text-amber-600'>{average}TK</span></h2>
                        </div>
                    </div>
                    <h2 className="description">Description: <span className='text-amber-600 text-sm'>{short?.slice(0, 120)}....</span></h2>
                    <div className="card-actions justify-center my-6">
                        <Link to={`/viewDetails/${_id}`}>
                            <button className="btn btn-primary w-72 bg-slate-500">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllSpot.propTypes = {
    spot: PropTypes.object.isRequired,
};

export default AllSpot;
