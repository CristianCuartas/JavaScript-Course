import React, { Fragment, useState } from 'react';
import {
  Jumbotron,
  Button,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import clienteAxios from './../config/axios';
import { withRouter } from 'react-router-dom';

const NuevaCita = props => {
  const [cita, guardarCita] = useState({
    nombre: '',
    propietario: '',
    fecha: '',
    hora: '',
    telefono: '',
    sintomas: ''
  });

  //Leer los datos del form
  const actualizarState = e => {
    guardarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  //Enviar petición a al API
  const crearNuevaCita = e => {
    e.preventDefault();
    //Enviar peticion por axios
    clienteAxios.post('/pacientes', cita).then(respuesta => {
      console.log(respuesta);
      props.guardarConsultar(true);
      props.history.push('/');
    });
  };

  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <Jumbotron>
          <h3 className="display-3">Crear nueva cita</h3>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <h4>Asignación de citas</h4>
          <div className="container mt-5 py-5">
            <div className="row">
              <div className="col-12 mb-5 d-flex justify-content-center">
                <Button href="/" color="outline-danger">
                  Volver
                </Button>
              </div>
              <div className="col-md-8 mx-auto">
                <Form onSubmit={crearNuevaCita}>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="mascota">Nombre mascota</Label>
                        <Input
                          type="text"
                          name="nombre"
                          id="mascota"
                          placeholder="Nombre de la mascota"
                          onChange={actualizarState}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="propietario">Nombre propietario</Label>
                        <Input
                          type="text"
                          name="propietario"
                          id="propietario"
                          placeholder="Nombre del propietario"
                          onChange={actualizarState}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="telefono">Teléfono</Label>
                        <Input
                          type="number"
                          name="telefono"
                          id="telefono"
                          placeholder="Teléfono"
                          onChange={actualizarState}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="fecha">Fecha de alta</Label>
                        <Input
                          type="Date"
                          name="fecha"
                          id="fecha"
                          onChange={actualizarState}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="hora">Hora de alta</Label>
                        <Input
                          type="time"
                          name="hora"
                          id="hora"
                          onChange={actualizarState}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="sintomas">Síntomas</Label>
                        <Input
                          type="textarea"
                          name="sintomas"
                          id="sintomas"
                          placeholder=""
                          onChange={actualizarState}
                        />
                      </FormGroup>
                      <Button type="submit" color="primary">
                        Asignar cita
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    </Fragment>
  );
};
export default withRouter(NuevaCita);
