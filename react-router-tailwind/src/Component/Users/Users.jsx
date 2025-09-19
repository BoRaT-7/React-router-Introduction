import { useLoaderData } from "react-router-dom";
import './User';

const Users = () => {

    const users= useLoaderData();
    return (
        <div>
            <h1>Our Users:{users.length}</h1>
            <h2>This is our users </h2>
            <div>
                {
                    users.map(user =><user key={user.id} user={user}></user>)
                }
            </div>
         <User></User>
        </div>
    );
};

export default Users;