const listaTweets = document.getElementById('lista-tweets');

//Agregar el contenido al DOM
function eventListener (){
    document.querySelector('#formulario').addEventListener('submit', sendTweet);
    listaTweets.addEventListener('click', deleteTweet);
    
    //Cargar contenido
    document.addEventListener('DOMContentLoaded', showLocalStorage) 
}
eventListener();
function sendTweet(e){
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    const botonBorrrar = document.createElement('a');
    botonBorrrar.classList='borrar-tweet';
    botonBorrrar.textContent='X';

    const li = document.createElement('li');
    li.textContent = tweet;
    li.appendChild(botonBorrrar);
    listaTweets.appendChild(li);

    //Añadir al Local Storage
    addLocalStorage(tweet);
}

function deleteTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        (e.target.parentElement.remove());
        deleteLocalStorage(e.target.parentElement.textContent);
    } 
}

function addLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetLocalStorgae();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function obtenerTweetLocalStorgae(){
    let tweets;
    //Revisar valores del LStorage
    if(localStorage.getItem('tweets') === null){
        tweets = []
    } else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function showLocalStorage(){
    let tweets;
    tweets = obtenerTweetLocalStorgae();
    tweets.forEach(function(tweet){
        const botonBorrrar = document.createElement('a');
        botonBorrrar.classList='borrar-tweet';
        botonBorrrar.textContent='X';
    
        const li = document.createElement('li');
        li.textContent = tweet;
        li.appendChild(botonBorrrar);
        listaTweets.appendChild(li);
    });
}

function deleteLocalStorage(tweet){
    let tweets, tweetBorrar;
    tweetBorrar=tweet.substring(0,tweet.length - 1);
    tweets = obtenerTweetLocalStorgae();
    tweets.forEach(function(tweet, idx){
       if (tweetBorrar === tweet ){
           tweets.splice(idx, 1);
       }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));

    console.log(tweets);
}