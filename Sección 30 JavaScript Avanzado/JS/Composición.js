// La composición es escribir una serie de funciones y asignarlas al objeto deseado.

const obtenerNombre = info => ({
  mostrarNombre() {
    console.log(`Nombre: ${info.nombre}`);
  }
});

const guardarEmail = info => ({
  email(email) {
    console.log(`Guardando email en: ${info.nombre}`);
    info.email = email;
  }
});

const obtenerEmail = info => ({
  mostrarEmail() {
    console.log(`Email: ${info.email}`);
  }
});

const obtenerEmpresa = info => ({
  mostrarEmpresa() {
    console.log(`Empresa: ${info.empresa}`);
  }
});

const obtenerPuesto = info => ({
  mostrarPuesto() {
    console.log(`Puesto: ${info.puesto}`);
  }
});

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa
  };
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerEmpresa(info)
  );
}

function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto
  };
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerPuesto(info)
  );
}

const cliente = Cliente('Cristian', null, 'Lexco S.A');
cliente.mostrarNombre();
cliente.email('cliente@email.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('David', null, 'Analista de sistemas');
empleado.mostrarNombre();
empleado.email('empleado@email.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();
