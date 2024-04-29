import { useLoaderData, useParams } from "react-router-dom";


const CountryDetails = () => {
    const countryLoaded=useLoaderData()
    // const { country } = useParams()
    // const view = countryLoaded.find(item => item.country == country)
    // console.log(countryLoaded)
    return (
        <div>
            country
           {/* <h2>{view.country} </h2> */}
        </div>
    );
};

export default CountryDetails;