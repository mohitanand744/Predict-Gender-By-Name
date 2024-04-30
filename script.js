let apiUrl = "https://api.genderize.io?name=";
let searchBtn = document.querySelector(".search-btn");
let mainContainer = document.querySelector(".txt");

let predictGender = async () => {
  let genterAvatar = document.getElementById("genderAvatar");
  let usrInput = document.getElementById("input").value;
  let fetchdata = await fetch(apiUrl + usrInput);
  let data = await fetchdata.json();

  if (usrInput.length != 0) {
    mainContainer.innerHTML = `
  <h2>Name: ${data.name}</h2>
  <h2>Gender: ${data.gender}</h2>
  `;

    if (data.gender == "male") {
      genterAvatar.src = "./img/boy-avatar.png";
    } else {
      genterAvatar.src = "./img/girl-avatar.jpg";
    }
  } else {
    mainContainer.innerHTML = `
  <h2>Name Not Found?</h2>
  `;
  }
};

searchBtn.addEventListener("click", predictGender);
