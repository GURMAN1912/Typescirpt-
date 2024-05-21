"use strict";
const year = document.getElementById("year");
const ThisYear = new Date().getFullYear().toString();
console.log(ThisYear);
year.setAttribute("datetime", ThisYear);
year.textContent = ThisYear;
