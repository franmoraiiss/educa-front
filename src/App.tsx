import './App.scss'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login-form">
        <form onSubmit={() => navigate("/studyroom/1")}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Senha"  />
            </div>
            <a href="#" className="link">Esqueceu a senha?</a>
          </div>
          <div className="action">            
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
