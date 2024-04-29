import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../ShareComponents/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const MyList = () => {
    const loadedData = useLoaderData()
    // console.log(loadedData)
    const { user } = useContext(AuthContext);
    const[users,setUsers]=useState(loadedData)
    const [item, setItem] = useState([]);
    // console.log(item)

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setItem(data)

            });
    }, [user]);
    const handleDelete=id=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addSpot/${id}`,{
                    method: 'DELETE',
                })
                .then(res =>res.json())
                .then(data=>{
                    // console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remainingUsers=item.filter(p=>p._id!==id)
                          setItem(remainingUsers)
                        }
                    })
                 
                }
              });
    }

    return (
        <div>
            <Navbar></Navbar>
            {
                item?.map((p,index) => (
                    <div key={p._id}>
                        <div>
                            {
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr className="text-center">
                                                <th>Sl No</th>
                                                <th>Spot Name</th>
                                                <th>Country</th>
                                                <th>Location</th>
                                                <th>Average Cost</th>
                                                <th>Action</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            <tr className="text-center ">
                                                <th>{index+1}</th>
                                                <td>{p.spotName}</td>
                                                <td>{p.country}</td>
                                                <td>{p.location} </td>
                                                <td>{p.average} </td>
                                                <td><Link to={`/update/${p._id}`}><button className="btn mr-2">Update</button></Link>  
                                                <button onClick={()=> handleDelete(p._id)} className="btn">Delete</button>  </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default MyList;