// Código anterior
/*

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

*/

// Mi intento

const baseEndpoint = "https://api.github.com"; // Se cambio a comillas dobles
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se agrego el . para llamar a la clase
const $b = document.querySelector('.#blog'); // Se agrego el . para llamar a la clase
const $l = document.querySelector('.location'); // Se agrego el . para llamar a la clase y se llamó la clase location

async function displayUser(username) { // Se agregó el async
  $n.textContent = 'cargando...';
  
  /*
  fetch(`${usersEndpoint}/${username}`); // Se define aparte, no seguido del await porque es async
  response.json().then(data => { // Se llamo adecuadamente el fetch convirtiendolo en objeto JSON */
  
    try{
      const response = await fetch(`${usersEndpoint}/${username}`);
      const data = await response.json(); // Se declaró la variable data para que se llame correctamente.
      console.log(response);

  $n.textContent = data.name; // Se llamó correctamente el objeto
  $b.textContent = data.blog; // Se llamó correctamente el objeto
  $l.textContent = data.location; // Se llamó correctamente el objeto
 }catch (err){ 
    handleError(err);
    }
  }
function handleError(err) {
  console.log("OH NO!"); // Se cambio a comillas dobles
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Se le agregó ; y $
}

displayUser("Stolinski"); // Se cambio a comillas dobles y se quito el catch para llamar correctamente la función
