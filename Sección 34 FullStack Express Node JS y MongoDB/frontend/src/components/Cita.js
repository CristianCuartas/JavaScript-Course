import React, { Fragment } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import clienteAxios from './../config/axios';
import Swal from 'sweetalert2';
const Cita = props => {
  if (!props.cita) {
    props.history.push('/');
    return null;
  }
  //Extraer por props
  const {
    cita: { nombre, propietario, telefono, fecha, hora, sintomas, _id }
  } = props;
  //Eliminar un registro
  const eliminarCita = id => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Una cita eliminada no se puede recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        //Alerta de eliminado
        Swal.fire(
          'Eliminado!',
          'Su cita ha sido eliminada exitosamente.',
          'success'
        );
        //Eliminado de la base de datos
        clienteAxios
          .delete(`/pacientes/${id}`)
          .then(respuesta => {
            props.guardarConsultar(true);
            props.history.push('/');
          })
          .catch(error => console.log(error));
      }
    });
  };
  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <Jumbotron>
          <h1 className="display-3">Mascota {nombre}</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <h4>Información del paciente</h4>
          <div className="container mt-5 py-5">
            <div className="row">
              <div className="col-12 mb-5 d-flex justify-content-center">
                <Button href="/" color="outline-danger">
                  Volver
                </Button>
              </div>
              <div className="col-md-8 mx-auto">
                <div className="p-5 list-group-item list-group-item-action flex-column aling-items-center">
                  <div className="d-flex w-100 justify-content-between mb-4">
                    <h3 className="mb-3">{nombre}</h3>
                    <small className="">
                      {fecha} - {hora}
                    </small>
                  </div>
                  <p className="mb-0">{sintomas}</p>
                  <div className="contactopy-3">
                    <p>Dueño: {propietario}</p>
                    <p>Teléfono: {telefono}</p>
                  </div>
                  <div className="d-flex">
                    <Button
                      type="button"
                      className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                      onClick={() => eliminarCita(_id)}
                    >
                      Eliminar &times;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    </Fragment>
  );
};
export default withRouter(Cita);
