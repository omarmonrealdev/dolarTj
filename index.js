//Mostrando fecha actual
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let fecha = new Date();

const fechaDom = document.getElementById('fecha');
fechaDom.innerText = dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear();;

//llamando API de banxico
const banxico = document.getElementById('banxico');

url = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43784/datos/oportuno?token=8a0cd573be5bfb15561e1df3515b83ac62f332e81f71a437916f71e3ad09c567';
url2 = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF60653/datos/oportuno?token=8a0cd573be5bfb15561e1df3515b83ac62f332e81f71a437916f71e3ad09c567';
async function llamarAPI() {
  const response = await fetch(url);
  const data = await response.json();
  banxico.innerText = (data.bmx.series[0].datos[0].dato).slice(0, 5);
}

llamarAPI();