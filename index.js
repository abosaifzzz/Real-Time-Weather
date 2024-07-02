// ////////////////////////////////////////////////
let searchInput = document.getElementById("search");
let resultDay1 = document.getElementById("day");
let resultDay2 = document.getElementById("day2");
let resultDay3 = document.getElementById("day3");

let allTemp = [];
async function getTemp(searchValue) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=61e846cbe7f14cb8bdb182821242206&q=${searchValue}&days=5&aqi=yes&alerts=no`
    // `https://api.weatherapi.com/v1/search.json?key=61e846cbe7f14cb8bdb182821242206&q=${searchValue}`
  );

  var data = await response.json();
  allTemp = data;
  console.log(allTemp);
  displayResults(allTemp);
}
resultDay1.innerHTML = `   <div class="day-details d-flex justify-content-between align-items-center">
                        <div class="day-name">
                            Friday
                        </div>
                        <div class="day-date">
                            28 June
                        </div>

                    </div>

                    <div class="location">Cairo</div>
                    <div class="temp d-lg-block d-md-flex justify-content-evenly align-items-center d-sm-block">
                        <h2> 33.2&deg;C</h2>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="">

                    </div>
                    <div class="status">Clear</div>
                    <div class="temp-details w-75 d-flex justify-content-between">
                        <i class="fa-solid fa-umbrella"> <span> 20%</span></i>
                        <i class="fa-solid fa-wind"> <span>18 Km/h</span></i>
                        <i class="fa-solid fa-cloud-sun-rain"> <span> East</span> </i>
                    </div>
`;
resultDay2.innerHTML = `<div class="day-details2 d-flex justify-content-center align-items-center ">
                        <div class="day2-name">
                            Suterday
                        </div>


                    </div>

                    <div class="temp h-100  d-flex justify-content-center align-items-center flex-column ">
                        <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="">
                        <h3> 33.2&deg;C</h3>

                        <h4> 22.2&deg;C</h4>

                        <div class="status2">Clear</div>

                    </div>`;

resultDay3.innerHTML = ` <div class="day-details3 d-flex justify-content-center align-items-center ">
                        <div class="day3-name">
                            Sunday
                        </div>


                    </div>

                    <div class="temp h-100  d-flex justify-content-center align-items-center flex-column ">
                        <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="">
                        <h3> 33.2&deg;C</h3>

                        <h4> 22.2&deg;C</h4>

                        <div class="status3">Clear</div>

                    </div>`;

function displayResults(allTemp) {
  let forecastDate2 = new Date(allTemp.forecast.forecastday[1].date);

  // Get the day of the week
  let options2 = { weekday: "long" };
  let dayName2 = forecastDate2.toLocaleDateString(undefined, options2);

  let forecastDate3 = new Date(allTemp.forecast.forecastday[2].date);

  // Get the day of the week
  let options3 = { weekday: "long" };
  let dayName3 = forecastDate3.toLocaleDateString(undefined, options3);

  let forecastDate1 = new Date(allTemp.forecast.forecastday[0].date);

  // Get the day of the week
  let options = { weekday: "long" };
  let dayName = forecastDate1.toLocaleDateString(undefined, options);
  let optionsDate = { month: "long", day: "numeric" };
  let dayDate = forecastDate1.toLocaleDateString(undefined, optionsDate);

  resultDay1.innerHTML = ` <div class="day-details d-flex justify-content-between align-items-center">
  <div class="day-name">
        ${dayName}

  </div>
  <div class="day-date">
            ${dayDate}

  </div>

</div>

<div class="location">${allTemp.location.name}</div>
<div class="temp d-lg-block d-md-flex justify-content-evenly align-items-center d-sm-block">
  <h2> ${allTemp.forecast.forecastday[0].day.maxtemp_c}&deg;C</h2>
                    <img src="${allTemp.forecast.forecastday[0].day.condition.icon}" alt="">

</div>
<div class="status">${allTemp.forecast.forecastday[0].day.condition.text}</div>
<div class="temp-details w-75 d-flex justify-content-between">
  <i class="fa-solid fa-umbrella"> <span> 20%</span></i>
                        <i class="fa-solid fa-wind"> <span>18 Km/h</span></i>
                        <i class="fa-solid fa-cloud-sun-rain"> <span> East</span> </i>
</div> `;

  resultDay2.innerHTML = `<div class="day-details2 d-flex justify-content-center align-items-center ">
                        <div class="day2-name">
                            ${dayName2}
                        </div>


                    </div>

                    <div class="temp h-100  d-flex justify-content-center align-items-center flex-column ">
                        <img src="${allTemp.forecast.forecastday[1].day.condition.icon}" alt="">
                        <h3> ${allTemp.forecast.forecastday[1].day.maxtemp_c}&deg;C</h3>

                        <h4> ${allTemp.forecast.forecastday[1].day.mintemp_c}&deg;</h4>

                        <div class="status2">${allTemp.forecast.forecastday[1].day.condition.text}</div>

                    </div>`;

  resultDay3.innerHTML = `<div class="day-details3 d-flex justify-content-center align-items-center ">
                        <div class="day3-name">
                            ${dayName3}
                        </div>


                    </div>

                    <div class="temp h-100  d-flex justify-content-center align-items-center flex-column ">
                        <img src="${allTemp.forecast.forecastday[2].day.condition.icon}" alt="">
                        <h3> ${allTemp.forecast.forecastday[2].day.maxtemp_c}&deg;C</h3>

                        <h4> ${allTemp.forecast.forecastday[2].day.mintemp_c}&deg;</h4>

                        <div class="status3">${allTemp.forecast.forecastday[2].day.condition.text}</div>

                    </div>`;
}
searchInput.addEventListener("input", async function () {
  let searchValue = searchInput.value;
  console.log(searchValue);
  await getTemp(searchValue);
});

// let searchInput = document.getElementById("search");
// let resultsContainer = document.getElementById("day");

// let allTemp = [];
// async function getTemp(searchValue) {
//   let response = await fetch(
//     `https://api.weatherapi.com/v1/search.json?key=61e846cbe7f14cb8bdb182821242206&q=${searchValue}`
//   );

//   let data = await response.json();
//   allTemp = data;
//   console.log(data);
//   displayResults(data);
// }
