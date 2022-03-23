console.log("Welcome to Employee Wage Computation Program using Java Script")

const IS_ABSENT=0;
let empcheck = Math.floor(Math.random()*10)%2;
if(empcheck==IS_ABSENT)
{
    console.log("Employee is absent");
}
else
{
console.log("Employee is present");
}