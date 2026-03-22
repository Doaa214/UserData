import { useState, useEffect } from "react";
interface data{
    id:number,
    name:string,
    email:string
}

function UserData() {
    const [users,setUsers]=useState<data[]>([]);
    const [input,setInput]=useState("");
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user =>{
        setUsers(user);
        setloading(false);
        })
        .catch((error)=>console.error("Errrror",error));
        
    },[]);

    const filteruser=users.filter((user)=>{
       return user.name.toLowerCase().includes(input.toLowerCase())
    })
    if (loading) return <p>Loading.......</p>

    return(
        <div className="grid justify-center">
            <h1 className="font-semibold text-amber-700 text-2xl flex justify-self-center mt-5">Inter Name</h1>
            <input type="text" value={input} placeholder="Look for a name" onChange={(e)=>setInput(e.target.value)} className="h-7 mt-5 outline-0 rounded-full border border-amber-600"/>
            <div className=" grid justify-between mt-7">
                {filteruser.map((user)=>
                
                <div className="flex gap-5 text-lg p-3 text-gray-700" key={user.id}>
                    <div className="grid">
                        <p className="bg-amber-600 rounded-full">ID</p> 
                        {user.id}
                        </div>
                    
                    <div className="grid">
                        <p className="bg-amber-500 rounded-full">Name</p> 
                        {user.name}
                        </div>

                        <div className="grid">
                        <p className="bg-amber-400 rounded-full">Email</p> 
                        {user.email}
                        </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default UserData;