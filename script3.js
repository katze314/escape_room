var all_guesses="";
var last_guess="";
var correct="1434";
const next_hint=[0,0,0,0];
const hint_given=[false,false,false,false];
function check(){
    last_guess=document.getElementById("input").innerHTML;
    for(let i=0; i<4; i++){
        if (last_guess[i]==correct[i]){
            hint_given[i]=true;
            next_hint[i]=2;
        }
    }
    for(let i=0; i<4; i++){
        if(hint_given[i]==false){
            for(let j=0; j<4; j++){
                if (last_guess[j]==correct[i]&&next_hint[j]==0){
                    next_hint[i]=1;
                    hint_given[i]=true;
                }
            }
        }
    }

}