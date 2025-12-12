var inp = document.getElementById("input1");

inp.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.getElementById("btn").click();
    }
});

var trys=0;

function check(){
    trys++;
    var inp_field=document.getElementById("input1");
    var inp=inp_field.value;

    if (inp=="seven"){
        window.location.href="./2_seven.html";
    }else{
        window.alert("wrong answer! The number of e's on the website changes if you type in an e")
        inp_field.value="";
    }
    document.getElementById("trys").innerHTML=trys + " trys so far";

}