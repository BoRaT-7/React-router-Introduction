import { useLoaderData } from "react-router-dom";
import User from "../User/User";  

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Our Users: {users.length}</h1>
      <div>
        {users.map(user => (
         <User key={user.id} user={user}></User>
        ))}
      </div>
      <h2>This is our users </h2>
      <h1>we are bangladeshi</h1>
      <div>
        {
          users.map(user => <User key={user.id} user={user}></User>) 
        }
      </div>
    </div>
  );
};

export default Users;
