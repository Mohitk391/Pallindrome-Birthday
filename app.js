var birthdate = document.querySelector("#birthDate");
var btnCheck = document.querySelector("#btnSubmit");
var output = document.querySelector("#output");

function checkPallindrome(){
    console.log("date: " + birthdate.value);
    console.log("typeof date: " + typeof birthdate.value);
    date = birthdate.value;
    var first = date.indexOf("-");
    var second = date.lastIndexOf("-");
    var strDate = date.substring(second+1,10) + date.substring(first+1,second) + date.substring(0,first);
    console.log("curDate: " + strDate);
    var revDate = strDate.split('').reverse().join('');
    console.log("reverse Date: "+ revDate);
    if(strDate == revDate){
        output.innerText = "Your birthday is a Pallindrome!!!";
    }
    else {
        output.innerText = "Alas! your birthdate is not Pallindrome";
    }
}

btnCheck.addEventListener("click", checkPallindrome);