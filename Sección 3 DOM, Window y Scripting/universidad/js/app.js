// Eliminar de Local Storage
localStorage.clear();

//DOM
    // let elemento;
    // elemento= document;
    // elemento= document.all;

    // elemento= document.images;

    // let imagenes = document.images;
    // let imagenesArr = Array.from(imagenes);
    // imagenesArr.forEach(function(imagen){
    //     console.log(imagen)
    // })
    // console.log(imagenesArr);
    // console.log(elemento);

//Seleccionar elementos especificos -getElementById
//Puede seleccionar solamente Id's
    // let elemento;
    // elemento= document.getElementById('');
    // console.log(elemento);

    // let encabezado = document.getElementById('encabezado').className;
    // encabezado= document.getElementById('encabezado').innerText;
    // encabezado= document.getElementById('encabezado');

    // //Aplicar estilos con JavaScript
    // encabezado.style.background ='#333';
    // encabezado.style.color ='#fff';
    // encabezado.style.padding ='20px';

    // encabezado.textContent ='Los mejores Cursos';
    // encabezado.innerText = 'Cursos En Línea'
    // console.log(encabezado);

//Query Selector
//Puede seleccionar Id's, Etiquetas y Clases con la sintaxis CSS # - .
    // const encabezado = document.querySelector('#encabezado');
    // //Aplicar estilo 
    // encabezado.style.background='#666';
    // encabezado.style.color='#fff';
    // encabezado.style.padding='30px';
    // console.log(encabezado);

//Seleccionado múltiples elementos en JavaScript 

    // let enlaces = document.getElementsByClassName('enlace');
    // enlaces = enlaces[3];
    // enlaces.style.background='#333';
    // enlaces.textContent='Nuevo enlace';
    // console.log(enlaces);

//Mezclar QuerySelector - GetElementByClassName
    // const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

    // console.log(listaEnlaces);

    // const links = document.getElementsByTagName('a');
    // links[18].style.color = 'red';
    // links[18].textContent= 'Nuevo Enlace';
    // // console.log(links);

    // let enlaces = Array.from(links);
    // enlaces.forEach(function(enlace){
    //     console.log(enlace.textContent)
    // })
    // console.log(enlaces)

//QuerySelectorAll
    // const enlaces = document.querySelectorAll('#principal a:nth-child(odd');
    // enlaces.forEach(function(impares){
    //     impares.style.background='#333';
    //     impares.style.color='#fff';
    // })
    // console.log(enlaces);
