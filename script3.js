var inp = document.getElementById("input");
inp.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.getElementById("btn").click();
    }
});

var trys=0;

var all_guesses="";
var last_guess="";
var correct="1434";
const classes=["false","semi","full"];

function check(){
    trys++;
    const next_hint=[0,0,0,0];
    const hint_given=[false,false,false,false];
    last_guess=document.getElementById("input").value;
    var all_true=true;
    for(let i=0; i<4; i++){
        if (last_guess[i]==correct[i]){
            hint_given[i]=true;
            next_hint[i]=2;
        }else{
            all_true=false;
        }
    }
    if(all_true==true){
        window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D";
    }
    for(let i=0; i<4; i++){
        if(hint_given[i]==false){
            for(let j=0; j<4; j++){
                if (last_guess[j]==correct[i]&&next_hint[j]==0){
                    if(hint_given[i]==false){
                    next_hint[j]=1;
                    hint_given[i]=true;
                    }
                }
            }
        }
    }
    for(let i=0; i<4; i++){
        all_guesses+="<span class="+classes[next_hint[i]]+">"+last_guess[i]+"</span>";
    }
    all_guesses+="<br>";
    document.getElementById("guessed").innerHTML=all_guesses;
    document.getElementById("input").value="";
    document.getElementById("trys").innerHTML=trys + " trys so far";
}