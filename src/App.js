import React, { useContext } from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Test from './pages/Test';
import Grupo from './pages/pagGrupo';
import HomeChats from './pages/HomeChats';
import { useAuth } from "./Hooks/UseAuth";
import { HomeLayout } from './Components/HomeLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './Context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/"/>
    }

    return children;
  }


  // const { user } = useAuth();
  // const funcionPrueba = ()=>{
  //   console.dir("Fuera del componente");
  // }

 
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/inicio" element={<Login />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    
      
      <Route path="/home" element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
        <Route path="HomeChats" element={<HomeChats />} />
        <Route path="inicio" element={<Test />} />
        <Route path="start" element={<Home />} />
        <Route path="settings" element={<Home />} />
        <Route path="grupo" element={<Grupo />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" />}
      />
        </Routes>
  );
}

export default App;