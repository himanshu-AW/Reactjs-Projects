import { createContext , useState, useEffect} from "react";
import axios from "../utils/axios";

export const UserContext = createContext();

const Context = (probs) => {
    const [users,setUsers] =  useState([])
  
    const getUsers = () =>{
        axios.get('/users').then(users=>{
        setUsers(users.data);
        }).catch(err => console.error(err));
    }

  useEffect(()=>{
    getUsers()
  },[])

//   console.log(users)

  return <UserContext.Provider value={users} >{probs.children}</UserContext.Provider>;
};

export default Context;
