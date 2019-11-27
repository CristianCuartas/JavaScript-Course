const express = require('express');
const router = express.Router();
const pacienteController = require('./../controllers/pacienteController');
module.exports = function() {
  //Agrega nuevos pacientes vía POST
  router.post('/pacientes', pacienteController.nuevoCliente);

  //Obtiene todo los registros de pacientes en la bd
  router.get('/pacientes', pacienteController.obtnerPacientes);

  //Obtiene un oaciente en especifico
  router.get('/pacientes/:id', pacienteController.obtenerPacienteById);

  //Actualizar un registro
  router.put('/pacientes/:id', pacienteController.actuzalizarPaciente);

  //Eliminar un paciente
  router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

  return router;
};
