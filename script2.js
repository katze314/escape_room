
let pos = (1<<5) - 1;
let pos_new = 0;

var trys=0;

function box(i){
    trys++;
    if (pos==1<<(i-1)){
        window.location.href="./3_parity.html";
    }else{
        pos_new=0;
        if((pos & 1<<(i-1))>0){
            pos-=1<<(i-1);
        }
        for(let j=0; j<5; j++ ){
            if ((1<<j & pos)>0){
                if(j>0){
                    if ((pos_new & 1<<(j-1)) == 0){
                        pos_new += 1<<(j-1);

                    }
                }
                if (j<4){
                    if ((pos_new & 1<<(j+1)) == 0){
                        pos_new += 1<<(j+1);

                    }
                }

            }
        }
        pos=pos_new;
        document.getElementById("text").innerHTML="the working button was not button number " + i;

    }
    document.getElementById("trys").innerHTML=trys + " trys so far";
}