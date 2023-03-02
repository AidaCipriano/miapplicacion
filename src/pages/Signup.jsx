import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/UseAuth";
import { ToastContainer } from 'react-toastify';
import './Login.css';

import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, storage, db} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";



const Signup = () => {
  const[err,setErr] = React.useState(false);
  const navigate = useNavigate();

  const { signup } = useAuth();
  const [datos, setDatos] = React.useState({
    typeEmailX: '',
    typePasswordX: ''
  })


  const handleSubmitFirebase = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const displayName = e.target[2].value;
    const pfp = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage,displayName);

      const uploadTask = uploadBytesResumable(storageRef,pfp);

      uploadTask.on(
        (error)=>{
          setErr(true);
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURl)=>{
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURl,
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL:downloadURl,
            });

            await setDoc(doc(db,"userChats", res.user.uid),{});
            navigate("/home/inicio");
          });
        }
      );

    
    }catch(err){
      setErr(true);
    }

  
  


  }



  const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
      console.dir(datos);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(datos);
    signup({
      email: datos.typeEmailX,
      password: datos.typePasswordX,
      name: datos.typeNameX,
      lastname: datos.typeLastnameX
    });
  };

  return (
<section className="gradient-custom">
<ToastContainer />
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card  text-white animate__animated animate__fadeInRight" id="content" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
              <form onSubmit={handleSubmitFirebase} noValidate sx={{ mt: 1 }}>
              <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
              <p className="text-white-50 mb-5">Ingresa tu información!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" name="typeEmailX" id="typeEmailX" className="form-control form-control-lg"  />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" name="typePasswordX" id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="text" name="typeNameX" id="typeNameX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeNameX">Usuario</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="file"  id="file" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="file">Foto de perfil</label>
              </div>
           

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Registrar</button>
              {err && <span>Algo salio mal</span>}
              </form>
            </div>
            <div>
              <p className="mb-0">Ya tienes una cuenta? <Link to="/login" >Login</Link>
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

export default Signup;