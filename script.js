function compute()
{
    p = document.getElementById("principal").value;
    
}
var principal = document.getElementsById("principal").value;
var rate = document.getElementsById("rate").value;
var years = document.getElementsById("years").value;
var interest = principal * years * rate /100;
var years = new Date().getFullYear()+parseInt(years);
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"