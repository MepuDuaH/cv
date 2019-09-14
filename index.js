window.onload = function() {
  setTimeout(function() {
    document.getElementById('preloader-id').classList.add('done');
  }, 2000);
  setTimeout(function() {
    document.getElementById('preloader-id').classList.add('none');
  }, 2500);
};


let startDate = new Date(2019, 0, 0, 0, 0, 0, 0).getTime();
let currentDate = new Date().getTime();
let substraction = currentDate - startDate;
let days = Math.floor(substraction / (1000 * 60 * 60 * 24));
let months = Math.floor(days / 30);
let years = Math.floor(days / 365);

if (months >= 1) {
  days = Math.floor(days - (months * 30));
}

if (years >= 1) {
  months = Math.floor(months - (years * 12));
}

if (months == 12) {
  months = 0;
  years++;
}

document.getElementsByClassName('days')[0].innerHTML = days;
document.getElementsByClassName('months')[0].innerHTML = months;
document.getElementsByClassName('years')[0].innerHTML = years;