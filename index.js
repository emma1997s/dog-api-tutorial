// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>DOG API TUTORIAL</h1>`;
appDiv.className = "dog_api_title";

//working with API
const apiClient = document.querySelector('.fetch_api');

//Select the button main div
const fetchBtn = document.querySelector('.btn_check');

//Create the button Element
const btn = document.createElement('button');

//add a className on it
btn.className = "btn";

//add innetxt to the button
btn.innerText = "Check dogs";

//Then append the button on its div
fetchBtn.appendChild(btn);

//After that, we add anevent listener on the btn
btn.addEventListener('click', btnFetchData);

//run the function
function btnFetchData(){
//Creact a function to fetch data
fetch('https://dog.ceo/api/breeds/image/random/3').then((res) => res.json())
.then((data) => {
  apiClient.innerHTML = `<img src=${data.message[0]} alt="pic"/>`;

  // console.log(apiClient);
}) 
.catch((err) => {
  console.log(err);
})
}

btnFetchData();
