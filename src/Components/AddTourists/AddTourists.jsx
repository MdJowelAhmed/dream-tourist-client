import Swal from "sweetalert2";
import Footer from "../ShareComponents/Footer/Footer";
import Navbar from "../ShareComponents/Navbar";


const AddTourists = () => {

    const handleAddSpot=e=>{
        e.preventDefault()
        const form=e.target;
        const image=form.image.value;
        const country=form.country.value;
        const location=form.location.value;
        const short=form.short.value;
        const average=form.average.value;
        const season=form.season.value;
        const travel=form.travel.value;
        const total=form.total.value;
        const userName=form.userName.value;
        const userEmail=form.userEmail.value;
        const addSpot={image,country,location,short,average,season,travel,total,userName,userEmail}
        console.log(addSpot)

        // send server
        fetch('http://localhost:5000/addSpot',{
            method: "POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(addSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data. insertedId){
                Swal.fire({
                    title: "Tourists Spot Added!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                  form.reset()
            }
        })
      
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="bg-amber-50">
                <form  onSubmit={handleAddSpot}>
                    {/* image and spot name */}
                    <div className="flex gap-10 px-10 ">
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500"> Image </span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500">Tourists spot name</span>
                            </label>
                            <input type="text" name="spotName" placeholder="Tourists spot name" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* country and location */}
                    <div className="flex gap-10 px-10 ">
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500"> Country Name </span>
                            </label>
                            <input type="text" name="country" placeholder="Country Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* short description and average cost */}
                    <div className="flex gap-10 px-10 ">
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500"> Short Description </span>
                            </label>
                            <input type="text" name="short" placeholder="Short Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full flex-1 ">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500">Average Cost</span>
                            </label>
                            <input type="text" name="average" placeholder="Average Cost" className="input input-bordered " required />
                        </div>
                    </div>
                    {/*  Seasonality like  and  travel time */}
                    <div className="flex gap-10 px-10 ">
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500">  Seasonality like  </span>
                            </label>
                            <input type="text" name="season" placeholder=" Seasonality like " className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full flex-1 ">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500"> travel time</span>
                            </label>
                            <input type="text" name="travel" placeholder=" travel time" className="input input-bordered " required />
                        </div>
                    </div>
                    {/*  totalVisitorsPerYear and User name */}
                    <div className="flex gap-10 px-10 ">
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500">  totalVisitorsPerYear </span>
                            </label>
                            <input type="text" name="total" placeholder="totalVisitorsPerYear" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full flex-1 ">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500">User Name</span>
                            </label>
                            <input type="text" name="userName" placeholder="User Name" className="input input-bordered " required />
                        </div>
                    </div>
                    <div className="flex gap-10 px-10 ">
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-rose-500">  User Email </span>
                            </label>
                            <input type="email" name="userEmail" placeholder="User Email" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="p-10">
                        <input type="submit" value="Add Tourists spot" className="btn mb-7 w-full text-xl font-semibold bg-cyan-900 text-white" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddTourists;