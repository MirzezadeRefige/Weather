let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let myDiv = document.querySelector(".my-area");
let dateTime = document.querySelector(".date-time");
let mainDiv = document.querySelector(".mainDiv");
let inputsDiv = document.querySelector("#inputs");

function hideinp() {
  if (input.value != "") {
    // inputsDiv.style.marginTop = "1%";
    inputsDiv.style.marginLeft = "66%";
    inputsDiv.style.width = "33%";

    btn.style.padding = "10px 20px 0 130px";
  }
}
const KEY_API = "382895bf2c50af5dc405b17fdb2b85f4";

async function data() {
  const city = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${KEY_API}`;
  try {
    const response = await fetch(url);
    const mydata = await response.json();
    if (!response.ok) {
      console.error("don't work");
    }
    console.log(mydata);
    showInf(mydata);
    showInf(updateDateTime);
  } catch (err) {
    console.error(err.message);
  }
}

function showInf(data) {
  

  // cityName.innerHTML=input.value
  mainDiv.innerHTML = `
  <h1 id="city-name">${data.main.temp}°<span id="city-temp">${data.name}</span></h1> 
  `;
  // <div class="mainDiv"><h1 id="city-name"></h1>        </div>

  myDiv.innerHTML = `
  
  <img id="img" src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png" alt="">

        <h1>${data.name}</h1>
        <h2>${data.main.temp} °C</h2>
        <div class="other-elements">
                <p id="p">Temp max <span id="spans">${data.main.temp_max}<i class="fa-solid fa-temperature-three-quarters"></i></span></p>
                <p id="p">Temp min <span id="spans">${data.main.temp_min}<i class="fa-solid fa-temperature-low"></i></span></p>
                                <p id="p">Wind <span id="spans">${data.wind.speed} m/s  <i class="fa-solid fa-wind"></i></span></p>

                                <p id="p">Humidity <span id="spans" >${data.main.humidity} <i class="fa-solid fa-water"></i></span></p>





</div>
        
                  `;
}

// btn.addEventListener("click", function(){
//   inputsDiv.setAttribute("style", "color: red");

// data()
// showInf()
// })
// function hideinp(){
//   inputsDiv.style.display = "none"

// }
btn.addEventListener("click", function () {
  data();
  hideinp();
});


