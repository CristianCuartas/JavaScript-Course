import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';
function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  //Estado de la aplicación
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);
  useEffect(() => {
    const consultarAPI = () => {
      clienteAxios
        .get('/pacientes')
        .then(respuesta => {
          guardarCitas(respuesta.data);
          guardarConsultar(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
    consultarAPI();
  }, [consultar]);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Pacientes citas={citas} />}
        ></Route>
        <Route
          exact
          path="/nuevacita"
          component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
        ></Route>
        <Route
          exact
          path="/cita/:id"
          render={props => {
            const cita = citas.filter(
              cita => cita._id === props.match.params.id
            );
            return <Cita cita={cita[0]} guardarConsultar={guardarConsultar} />;
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
