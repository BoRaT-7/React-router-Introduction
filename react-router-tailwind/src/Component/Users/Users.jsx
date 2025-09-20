import { useLoaderData } from "react-router-dom";
import User from "../User/User";  

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Our Users: {users.length}</h1>
      <h2>This is our users </h2>
      <div>
        {
          users.map(user => <User key={user.id} user={user}></User>) 
        }
      </div>
    </div>
  );
};

export default Users;
