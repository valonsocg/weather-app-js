let apiKey = "YOUR API KEY GOES HERE";
let difKelvin = 273.15;
let ciudad = "Londres";
let urlBase = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((response) => mostrarDatos(response));
}

function mostrarDatos(response) {
  const divDatosClima = document.getElementById("datosClima");

  divDatosClima.innerHTML = "";
  const ciudadNombre = response.name;
  const temperatura = response.main.temp;
  const descripcion = response.weather[0].description;
  const pais = response.sys.country;
  const icono = response.weather[0].icon;
  const humedad = response.main.humidity;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${pais}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(
    temperatura - difKelvin
  )}°C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es del: ${humedad}%`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion metereologica es ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
