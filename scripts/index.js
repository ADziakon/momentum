import playList from './playList.js';
//console.log(playList);

let randomNum;
let greeting;
let playButton = document.querySelector('.play');
let isPlay = false;
let isNextPrev = false;
let li;
let greets;
const name = document.querySelector('.name');
const city = document.querySelector('.city');
const changeQuote = document.querySelector('.change-quote');
const audio = document.querySelector('audio');
const playListContainer = document.querySelector('.play-list');
const playNextButton = document.querySelector('.play-next');
const playPrevButton = document.querySelector('.play-prev');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const greetingTranslation = { 
                              'ru':'Добрый',
                              'en':'Good'
                            };

let playNum = 0;

const selectLang = document.querySelector('.choose-lang');
let language = 'en';


//language = getLocalStorage();
function chooseLang (){
  switch (selectLang.value) {
      case "en":
        language = 'en';
        selectLang.value = 'en'
        break
      case "ru":
        language = 'ru';
        selectLang.value = 'ru'
        break
      case "be":
        language = 'be';
        selectLang.value = 'be'
        break
  }

return language;
}

selectLang.addEventListener('change', chooseLang);
selectLang.addEventListener('change', getWeather);
selectLang.addEventListener('change', getQuotes);
selectLang.addEventListener('change', changeSettingsLang);

//window.addEventListener('load',changeSettingsLang);

const selectImage = document.querySelector('.choose-image');
let imageBackground = 'file';

//language = getLocalStorage();
function chooseImage (){
  switch (selectImage.value) {
      case "file":
        imageBackground = 'file';
        break
      case "unsplash":
        imageBackground = 'unsplash';
        break
      case "flick":
        imageBackground = 'flick';
        break
  }

return imageBackground;
}

  function showDate() {
// нужно в формате Saturday, May 15
    const currentDate = new Date();
    const dateAtr = document.querySelector('.date');
    let days =["Sunday", "Monday", "Tuesday", "Wendsday", "Thersday", "Friday", "Saturday"];
    let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysRu =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "СУббота"];
    let monthsRu =["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
   
    let daysBel =["Нядзеля", "Панядзелак", "Ауторак", "Серада", "Чацвер", "Пятнiца", "Субота"];
    let monthsBel =["Студзень", "Люты", "Сакавiк", "Красавiк", "Май", "Чэрвень", "Лiпень", "August", "September", "October", "November", "December"];
   
    let month = months[currentDate.getMonth()]; // 02
    let date = currentDate.getDate(); // 
    let day = days[currentDate.getDay()];

    let monthRu = monthsRu[currentDate.getMonth()]; // 02
    let dayRu = daysRu[currentDate.getDay()];

    let monthBel = monthsBel[currentDate.getMonth()]; // 02
    let dayBel = daysBel[currentDate.getDay()];
    //selectLang.addEventListener('change', e => {
      //console.log("language: " + language);
      if (language == 'en'){
        dateAtr.textContent = day + ", " + month + " " + date;
      }else if (language == 'ru'){
        dateAtr.textContent = dayRu+ ", " + monthRu + " " + date;
      }else if (language == 'be'){
        dateAtr.textContent = dayBel+ ", " + monthBel + " " + date;
      }
    //});

  }

  function getTimeOfDay(){
    const date = new Date();
    const hours = date.getHours();
    const greetingRu = ['Доброго времени суток', 'Доброе утро', 'Добрый день', 'Добрый вечер'];
    const greetingEng = ['Good time', 'Good morning', 'Good afternoon', 'Good evening'];
    if (hours > 3 && hours <= 6) {
        greeting = 'day';
    } else if (hours <= 12) {
        greeting = 'morning';
    } else if (hours < 18) {
        greeting = 'afternoon';
    } else {
        greeting = 'evening';
    }
    return greeting;
  }
  greeting = getTimeOfDay();

  function getGreeting(){
    const date = new Date();
    const hours = date.getHours();
    const greetingRu = ['Доброго времени суток', 'Доброе утро', 'Добрый день', 'Добрый вечер'];
    const greetingEng = ['Good time', 'Good morning', 'Good afternoon', 'Good evening'];
    const greetingBel = ['Добрага часу', 'Добрай ранiцы', 'Добрый дзень', 'Добрый вечар'];
    
    if(language =='en'){
      switch(greeting){
        case 'day':
          greets = greetingEng[0];
          break;
        case 'morning':
          greets = greetingEng[1];
          break;
        case 'afternoon':
          greets = greetingEng[2];
          break;
        case 'evening':
          greets = greetingEng[3];
          break;
      }
    }else if (language =='ru'){
      switch(greeting){
        case 'day':
          greets = greetingRu[0];
          break;
        case 'morning':
          greets = greetingRu[1];
          break;
        case 'afternoon':
          greets = greetingRu[2];
          break;
        case 'evening':
          greets = greetingRu[3];
          break;
      }
    }else if (language =='be'){
      switch(greeting){
        case 'day':
          greets = greetingBel[0];
          break;
        case 'morning':
          greets = greetingBel[1];
          break;
        case 'afternoon':
          greets = greetingBel[2];
          break;
        case 'evening':
          greets = greetingBel[3];
          break;
      }
    }
    
    return greets;
  }
  greets = getGreeting();

  function showGreeting(){
    const greetingAtr = document.querySelector('.greeting');
    const name = document.querySelector('.name');
    if(language == 'en'){
      name.placeholder = "[Enter name]";
    }else if(language == 'ru'){
      name.placeholder = "[Введите имя]";
    }else if(language == 'be'){
      name.placeholder = "[Увядзіце імя]";
    }
    
    greetingAtr.textContent = `${greets}` + ", ";
    
  }

  function changeSettingsLang(){
    const titleSet = document.querySelector('.title-settings');
    const langLabel = document.querySelector('.language-label');
    const imageLabel = document.querySelector('.image-label');
    //getLocalStorage();
    if(language == 'en'){
      titleSet.textContent = "Settings";
      langLabel.textContent = "Select Language";
      imageLabel.textContent = "Select image API";
    }else if(language == 'ru'){
      titleSet.textContent = "Настройки";
      langLabel.textContent = "Выберите язык";
      imageLabel.textContent = "Выберите API";
    }else if(language == 'be'){
      titleSet.textContent = "Налады";
      langLabel.textContent = "Абярыце мову";
      imageLabel.textContent = "Абярыце API";
    }
    
  }

  function showTime() {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const time = document.querySelector('.time');
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    greets = getGreeting();
    showGreeting();
  }
  showTime();

  function setLocalStorage() {
    localStorage.setItem('language', language);
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);
  
  function getLocalStorage() {
    //const name = document.querySelector('.name');
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }

    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    } 
    
    if(localStorage.getItem('language')) {
      language = localStorage.getItem('language');
      selectLang.value = language;
    } 
  }

  window.addEventListener('load', getLocalStorage);

  async function getQuotes() { 
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author'); 
    const quotes = './scripts/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    let index = Math.floor(Math.random() * data.length);
    console.log("test: " + language);
    if(language == 'en'){
      quote.textContent = data[index].textEn;
      author.textContent = data[index].authorEn;
    }else if (language == 'ru'){
      quote.textContent = data[index].text;
      author.textContent = data[index].author;
    }else if (language == 'be'){
      quote.textContent = data[index].textBe;
      author.textContent = data[index].authorBe;
    }


  }
  getQuotes();

  changeQuote.addEventListener('click', getQuotes);
  //console.log("city: " + city.value);
  async function getWeather() {  
    //console.log("city1: " + city.value);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=d9af0a61607770775084a35da0e415db&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    const weatherError = document.querySelector('.weather-error');
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    let windText = 'Wind speed: ';
    let humidityText = 'Нumidity: ';
    weatherError.textContent = '';
try{
   if(city.value == ''){
    weatherError.textContent = 'Enter city/Введите город';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    weatherIcon.style.display = 'none';
   }else{
    city.value = data.name;
    if(language == 'en'){
      windText = 'Wind speed: ';
      humidityText = 'Нumidity: ';
    }else if(language == 'ru'){
      windText = 'Скорость ветра: ';
      humidityText = 'Влажность: ';
    }else if(language == 'be'){
      windText = 'Скорасць ветра: ';
      humidityText = 'Вiльготнасць: ';
    }
    
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = windText + data.wind.speed.toFixed(0) + "m/s";
    humidity.textContent = humidityText + data.main.humidity + "%";
   }
  } catch(err){
    if (res.status > 400 && res.status< 500 ){
      weatherError.textContent = `Город "${city.value}" не найден. Введите верное название.`;
    }
    if (res.status >= 500 && res.status < 600 ){
      weatherError.textContent = `Ошибка сервера, попробуйте позже!`;
    }

    //weatherIcon.classList.remove(`owf-${data.weather[0].id}`);
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    weatherIcon.style.display = 'none';
  }
  }
  window.addEventListener('load', getWeather);
  city.addEventListener('change', getWeather);
  city.addEventListener('change', setLocalStorage);

  function getRandomNum(){
    let min = 1;
    let max = 21;
    randomNum = Math.floor(Math.random() * (Math.floor(max) - Math.floor(min))) + Math.floor(min);
    return randomNum;
  }
  randomNum = getRandomNum();
  const timeOfDay = getTimeOfDay();

  console.log("sfds: " + imageBackground);
selectImage.addEventListener('change', chooseImage);
selectImage.addEventListener('change', setBg);

async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.urls.regular);
    const urlImage = data.urls.full;
    const img = new Image();
    img.src = urlImage; 
    img.onload = () => {      
      document.body.style.backgroundImage = `url('${urlImage}')`;
    };
 }

 async function getLinkToImageF() {
  const urlF = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=nature&extras=url_l&format=json&nojsoncallback=1';
  const resF = await fetch(urlF);
  const dataF = await resF.json();
  //console.log("ttt: " + dataF.photos.photo[1].url_l);
  const urlImageF = dataF.photos.photo[1].url_l;
  const img = new Image();
  img.src = urlImageF; 
  img.onload = () => {      
    document.body.style.backgroundImage = `url('${urlImageF}')`;
  };
}

  function setBg(){
    
      if(randomNum<10)
      randomNum = '0'+randomNum;
      const img = new Image();
      if(imageBackground == 'file'){
        console.log("test: ");
        img.src = 'assets/img/bg.jpg'; 
        img.onload = () => {      
          document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/adziakon/stage1-tasks/assets/images/${greeting}/${randomNum}.jpg')`;
        }; 
      }else if(imageBackground == 'unsplash'){
        console.log("test22: ");
        getLinkToImage();
      }else if(imageBackground == 'flick'){
        console.log("test23: ");
        getLinkToImageF();
      }
  }

setBg();

function getSlideNext(){

  if(randomNum<=20){
    randomNum++ 
  }
  if(randomNum == 21){
    randomNum=1;
  }
  setBg();
}

slideNext.addEventListener('click', getSlideNext);

function getSlidePrev(){
  
  if(randomNum>=1){
    randomNum-- 
  }
  if(randomNum == 0){
    randomNum=20;
  }
  setBg();
}

slidePrev.addEventListener('click', getSlidePrev);

function playAudio() {
  let liList = document.querySelectorAll('.play-item');
  if(!isPlay || isNextPrev){
    //console.log("Playlist: " +  playNum + " " + playList[playNum].src);
    audio.src = playList[playNum].src;
    audio.title = playList[playNum].title;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    isNextPrev = false;
    playButton.classList.add('pause');
    for(let i=0;i<liList.length;i++){
      if(liList[i].textContent == audio.title){
        liList[i].style.color = '#7FFF00';
        liList[i].style.border = '2px solid #FFFFFF';
      }else{
        liList[i].style.color = '#FFFFFF';
        liList[i].style.border = 'none';
      }
    }
    
  }else{
    audio.src = playList[playNum].src;
    audio.pause();
    isPlay = false;
    
    playButton.classList.remove('pause');
  }

}
audio.addEventListener('ended', playNext);

playButton.addEventListener('click', playAudio);

function playNext() {
  playNum++;
  if (playNum == playList.length){
    playNum = 0;
  }
  isNextPrev = true;
  playAudio();
}
function playPrev(){
  playNum--;
  if (playNum < 0){
    playNum = playList.length-1;
  }
  isNextPrev = true;
  playAudio()
}
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);

for(let i = 0; i < playList.length; i++) {
  li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  playListContainer.append(li);
 // console.log("test0: " + i + " " + playList[i].title)
}





