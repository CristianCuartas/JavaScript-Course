import React, { Fragment } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const Pacientes = props => {
  if (props.citas.length === 0) return null;

  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <Jumbotron>
          <h1 className="display-3">Bienvenido a la aplicación pacientes!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <h4>Administrador de Pacientes</h4>
          <div className="container mt-5 py-5">
            <div className="row">
              <div className="col-12 mb-5 d-flex justify-content-center">
                <Button href="/nuevacita" color="primary">
                  Craer Cita
                </Button>
              </div>
              <div className="col-md-8 mx-auto">
                <div className="list-group">
                  {props.citas.map(cita => (
                    <Link
                      to={`/cita/${cita._id}`}
                      key={cita._id}
                      className="p-5 list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="d-flex w-100 justify-content-between mb-4">
                        <h3 className="mb-3">{cita.nombre}</h3>
                        <small>
                          {cita.fecha} - {cita.hora}
                        </small>
                      </div>
                      <p className="mb-0">{cita.sintomas}</p>
                      <div className="contactopy-3">
                        <p>Dueño: {cita.propietario}</p>
                        <p>Teléfono: {cita.telefono}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    </Fragment>
  );
};
export default Pacientes;
