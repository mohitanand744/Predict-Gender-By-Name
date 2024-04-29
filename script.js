let apiUrl = "https://api.genderize.io?name=";
let searchBtn = document.querySelector(".search-btn");
let mainContainer = document.querySelector(".txt");

let predictGender = async () => {
  let genterAvatar = document.getElementById("genderAvatar");
  let genterLogo = document.getElementById("genderLogo");
  let usrInput = document.getElementById("input").value;
  let fetchdata = await fetch(apiUrl + usrInput);
  let data = await fetchdata.json();

  if (usrInput.length != 0) {
    mainContainer.innerHTML = `
  <h2>${data.name}</h2>
  <h2>${data.gender}</h2>
  `;

    if (data.gender == "male") {
      genterLogo.src = "./img/boy.webp";
      genterAvatar.src = "./img/boy-avatar.png";
    }else{
      genterLogo.src = "./img/girl.webp";
      genterAvatar.src = "./img/girl-avatar.jpg";
    }
  } else {
    mainContainer.innerHTML = `
  <h2>Name Not Found?</h2>
  `;
  }
};

searchBtn.addEventListener("click", predictGender);
