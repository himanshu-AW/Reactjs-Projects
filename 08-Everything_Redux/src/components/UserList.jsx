import React from "react";
import UserReducer, { deleteUser } from "../store/reducers/UserReducer";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const { users } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

const deleteHandlerUser = (id) =>{
  dispatch(deleteUser(id));
}

  return (
    <div className="container mx-auto bg-zinc-700 rounded-md p-6 mt-5">
      <h1 className="text-2xl text-red-500 font-bold underline">User list</h1>
      <ul>
        {users.map((user,index) => (
          <li key={user.id} className="py-1 flex gap-10">
            <h1 className="text-white text-lg ">{user.name}</h1>
            <span
            onClick={()=>deleteHandlerUser(index)}
            className="text-red-500 text-lg font-bold pointer">
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
