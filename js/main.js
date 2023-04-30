

let input_day = document.getElementById('day');
let input_month = document.getElementById('month');
let input_year = document.getElementById('year');
let submit = document.querySelector('.submit');

// output

let output_year = document.querySelector('.years');
let output_month = document.querySelector('.months');
let output_day = document.querySelector('.days');
let output = document.querySelector('.output');

// error

let error_day = document.querySelector('.not-valid-day')
let error_month = document.querySelector('.not-valid-month')
let error_year = document.querySelector('.not-valid-year')


let inputErrorDay = 'Must be a valid day'; 
let inputErrorMonth = 'Must be a valid month'; 
let inputErrorYear = 'Must be a valid year'; 


input_day.addEventListener('change', function(){

  if(input_day.value < 1 || input_day.value > 31) {

    error_day.innerHTML = inputErrorDay;
    submit.style.cursor = 'no-drop';
    return false;
  } else {
    error_day.innerHTML = "";
    submit.style.cursor = 'pointer';
    return true;
  }
})

input_month.addEventListener('change', function(){


  if(input_month.value < 1 || input_month.value > 12) {

    error_month.innerHTML = inputErrorMonth;
    submit.style.cursor = 'no-drop';
    return false;
  } else {
    error_month.innerHTML = "";
    submit.style.cursor = 'pointer';
    return true;
  }
})

input_year.addEventListener('change', function(){

  
  

  if(input_year.value < 1900) {

    error_year.innerHTML = inputErrorYear;
    submit.style.cursor = 'no-drop';
    return false;
  } else {
    error_year.innerHTML = "";
    submit.style.cursor = 'pointer';
    return true;
  }
})





// for test

if (input_year.value < 1900 && input_day.value < 1 && input_month.value < 1) {

    output.classList.add('not-show');

} else {
  output.classList.add('not-show');
}





submit.addEventListener('click',function(){


  let nowDate = new Date();
  let currentYear = nowDate.getFullYear() - input_year.value;
  output_year.innerHTML = currentYear;

  
  let currentMonth = (1+ nowDate.getMonth()) - input_month.value ;
  output_month.innerHTML = currentMonth;


  let currentDay = nowDate.getDate() - input_day.value;
  output_day.innerHTML = currentDay;

  // if (input_year.value > 1900) {

  //   output.classList.remove('not-show');


  // } else {
  //   output.classList.add('not-show')
  // };


  if(input_month.value > 0 && input_year.value > 1900 && input_day.value > 0) {

    output.classList.remove('not-show');

  } else {
    output.classList.add('not-show');
  }


})
