import React from "react";
function Weather() {
  const weatherAPI = "f2e372b4806f6707e14b1e99a6e89464";
  const apiCall = `api.openweathermap.org/data/2.5/forecast?lat={47.6062}&lon={122.3321}&appid=${weatherAPI}`;
  fetch(apiCall)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
