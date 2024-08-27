import { useLoaderData } from "react-router-dom";
import CountryInfo from "./CountryInfo";


const Countries = () => {
    const loaderCountry = useLoaderData()
    // console.log(loaderCountry)
    return (
        <div>

            <h2 className="text-center text-5xl font-bold mb-4">Countries</h2>
            <p className="text-center text-sm">We organize travel to many countries in South Asia. For example,
                we have services in many countries <br /> including Bangladesh,
                India, Thailand, Indonesia, Pakistan, Malaysia.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                {
                    loaderCountry.slice(0,6).map(desh=> <CountryInfo key={desh._id} desh={desh}></CountryInfo>)
                }
            </div>
        </div>
    );
};

export default Countries;