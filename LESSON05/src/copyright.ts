const year=document.getElementById("year")!
const ThisYear:string=new Date().getFullYear().toString();
console.log(ThisYear)
year.setAttribute("datetime",ThisYear);
year.textContent=ThisYear;