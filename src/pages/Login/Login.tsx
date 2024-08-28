import { FormLogin } from "../../Components/FormLogin/FormLogin"
import './styles.css'

export const Login = () => {
  return (
    <div className='loginPageWrap'>
      <div className='loginPageContent'>
        <h1>Login</h1>
        <p>Entre com seu usuário e senha</p>
        <FormLogin/>
      </div>
    </div>
  )
}