import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const demoUser = [{name: "John", email: "john@gmail.com",position:"Web Designer", image:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]
  const [users, setUsers] = useState(demoUser);

  const handleFormSubmitData = (data) =>{
    setUsers([...users, data]);
  }

  const handleRemoveUser = (id) => {
    setUsers(users.filter((item,index) => index!=id));
  }

  return (
    <div className={`flex items-center bg-zinc-100 w-full h-screen rounded-xl`}>
      <div className="container  w-[90%] h-[90%] mx-auto bg-zinc-200 shadow-lg shadow-gray-400 border-2 border-gray-300 rounded-md p-16">
      <Form handleFormSubmitData={handleFormSubmitData} />
      <Cards handleRemoveUser={handleRemoveUser}  users={users} />
      </div>
    </div>
  );
}

export default App;
