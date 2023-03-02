import * as React from "react";
import { useAuth } from "../Hooks/UseAuth";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './Login.css';
import { disconnectSocket } from '../SocketService'


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../firebase";

const Login = () => {
  const[err,setErr] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmitFirebase = async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home/inicio");
    }catch(err){
      setErr(true);
    }

  }

  const { login } = useAuth();
  const [datos, setDatos] = React.useState({
    typeEmailX: '',
    typePasswordX: ''
  })

  const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    disconnectSocket();
    login({
      email: datos.typeEmailX,
      password: datos.typePasswordX
    });
  };

  return (
<section className="gradient-custom">
<ToastContainer />
  <div className="container h-100 py-5 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div className="card text-white shadow animate__animated animate__fadeInLeft" id="content">
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
              <form onSubmit={handleSubmitFirebase} noValidate sx={{ mt: 1 }}>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Ingresa tu correo electrónico y contraseña</p>

              <div className="form-outline form-white mb-4">
                <input type="email" name="typeEmailX" id="typeEmailX" className="form-control form-control-lg"  onChange={handleInputChange} />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" name="typePasswordX" id="typePasswordX" className="form-control form-control-lg" onChange={handleInputChange}/>
                <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Ingresar</button>
              {err && <span>Algo salio mal</span>}
              </form>
            </div>
            <div>
              <p className="mb-0">No tienes una cuenta? <Link to="/signup">Regístrate</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
  );
};

export default Login;