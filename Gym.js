function home(){
    document.getElementById("homes").style.color="rgb(20, 251, 20)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}

function program(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="rgb(20, 251, 20)";

}
function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(20, 251, 20)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}
function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(20, 251, 20)";
    document.getElementById("programs").style.color="white";

}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(20, 251, 20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}

// submit

function submit(){
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    if (number.value.length==0)
    {
        alert('Mobile number is mandatory.')
    }
    else if(number.value.length>10 || number.value.length<10)
    {

        alert('Kindly enter mobile number of exact 10 digit.')
    }
    else
    {
    if(name.value == ""){
        alert("Please Enter Name")
    }else if(number.value == ""){
        alert("Please Enter Number")
    }else{
        alert("Thanks For Join : " + name.value+"You have entered mobile number: "+number.value)
    }
}
}