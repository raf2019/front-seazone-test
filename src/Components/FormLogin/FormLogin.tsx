import { useNavigate } from "react-router-dom";
import './styles.css'

export const FormLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log(data);
    navigate('/property'); // Add your route name
  }

  return (
    <form className='formContainer'>
      <input placeholder="Username" />
      <input placeholder="Password" type="password" />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}