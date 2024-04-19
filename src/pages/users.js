import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function UsersPage() {
    const [Users, Setusers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5050/users/").then(Response => {
            Setusers(Response.data);
        })
    }, []);

    const Delete = (id)=>{
       axios.delete("http://localhost:5050/users/"+id).then(()=>{
        toast.success("تم حذف العنصر بنجاح" ) ; 

        setTimeout(()=>{
            window.location.reload()  ; 
        },2000);
      
       })
    }

    return (
        <>
            <h1 className="text-center mt-5"> Users System Loged </h1>

            <div className="container mt-5">
                
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {Users.map((user , id)=>(
                       <tr key={user.id}>
                           <td> {user.id} </td>
                           <td>{user.username}</td>
                           <td> {user.email} </td>
                           <td> {user.age} </td>
                           <td>
                                <button onClick={()=>Delete(user.id)} className="btn btn-danger me-3"> <i className="fa-solid fa-trash-can"></i> </button>
                                <button className="btn btn-success"> <i className="fa-solid fa-pen-to-square"></i> </button>
                           </td>
                       </tr>
                   ))}
                </tbody>
            </table>
            </div>
            <ToastContainer />

        </>
    );
}