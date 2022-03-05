const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('.nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textbox = document.querySelector('#text-box');

const switchImage = (color)=>{
  image1.src= `images/undraw_investment_re_rpk5_${color}.svg`;
  image2.src = `images/undraw_file_manager_re_ms29_${color}.svg`;
  image3.src = `images/undraw_phone_call_re_hx6a_${color}.svg`;
}

//Toggle Dark n Light Mode
function toggleDarkLightMode(isDark){
  nav.style.background = isDark ? 'rgb(0 0 0 / .5)' : 'rgb(255 255 255 / .8)';
  textbox.style.background = isDark ? 'rgb( 255 255 255 / .5)' : 'rgb( 0 0 0 / .5)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') : toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
}



// Switch Theme Dynamically
const swtichTheme = (event)=>{
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme' , 'dark');
    toggleDarkLightMode(true);
    switchImage('dark');
    localStorage.setItem('theme' , 'dark');
  }else{
    document.documentElement.setAttribute('data-theme' , 'light');
    toggleDarkLightMode(false);
    switchImage('light');
    localStorage.setItem('theme' , 'light');
  }
}


// Event Listener
toggleSwitch.addEventListener('change' , swtichTheme);


//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
  document.documentElement.setAttribute('data-theme' , currentTheme);
  switchImage(currentTheme);
  if(currentTheme === 'dark'){
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
