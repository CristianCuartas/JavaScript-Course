const Paciente = require('../models/Paciente');

//Cuando se crea un nuevo cleinte
exports.nuevoCliente = async (req, res, next) => {
  //TOD
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.json({ mensaje: 'El cliente se agregó correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }
};

//Obtiene todos los pacientes
exports.obtnerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerPacienteById = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actuzalizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true
      }
    );
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: 'El paciente se ha eliminado con éxito.' });
  } catch (error) {
    console.log(error);
    next();
  }
};
