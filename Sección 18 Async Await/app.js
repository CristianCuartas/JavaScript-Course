async function obtenerClientes(){
    const clientes = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Clientes descargados');
        },2000);
    });
    const error = false;
    if(!error){
        const repuesta = await clientes;
        return repuesta;
    } else{
        await Promise.reject(`Hubo un error`);
    }
}
obtenerClientes()
.then(res  => console.log(res))
.catch(error => console.log(error));

async function leerTodos(){
    const respuesta = await fetch
    ('https://jsonplaceholder.typicode.com/todos');
    const datos = await respuesta.json();
    return datos;
}
leerTodos()
.then(res => console.log(res));