import { useNavigate } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
    const navigate = useNavigate();
  const handleShowdetails = () =>{
       navigate(`/User/${id}`)
  }
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px"}}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={handleShowdetails}>Click to see details</button>
    </div>
  );
};

export default User;
