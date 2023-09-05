let click=0;
document.getElementById("a").onclick=function(){
    click=click+1;
    if(click==1){
        document.getElementById("con").style="background-image: repeating-radial-gradient(circle,white 3%, black 10%, blue 10%);"
    }
    else if(click==2){
        document.getElementById("con").style="background-image: conic-gradient(pink  3%,yellow 38%, black);"
    }
    else if(click==3){
        document.getElementById("con").style="background-image: linear-gradient(black  3%,yellow 38%, pink);"
    }
   else if(click==4){
        document.getElementById("con").style="background-image: radial-gradient(circle, blue  3%,brown 38%, red);"
    }
    else{
        document.getElementById("con").style="background-image: repeating-radial-gradient(green  3%,pink 10%, red  10%);"
        // document.getElementById("con").style="background-image: "
        click=0;
    }
}
let clic=0;
document.getElementById("b").onclick=function(){
    clic=clic+1;
    if(clic==1){
        document.getElementById("con").style="background-image: url('pexels-james-wheeler-417074.jpg'); background-size:100% 100%";
    } 
   else if(clic==2){
        document.getElementById("con").style="background-image: url('white-male-1874801_1280.jpg'); background-size:100% 100%";
    }
    else if(clic==3){
        document.getElementById("con").style="background-image: url('pexels-kartikey-das-413279.jpg'); background-size:100% 100%";
    } 
    else if(clic==4){
        document.getElementById("con").style="background-image: url('pexels-ella-olsson-1640774.jpg'); background-size:100% 100%";
    }
    else{
        document.getElementById("con").style="background-image: url('camera-7859402_1920.jpg'); background-size:100% 100%";
        clic=0;
    }
}
let cli=0;
document.getElementById("c").onclick=function(){
    cli+=1;
     if(cli==1){
        document.getElementById("con").style="background-image: url('pexels-kartikey-das-413279.jpg'); ; background-size:100% 100%";
    } 
    else if(cli==2){
        document.getElementById("con").style="background-image: radial-gradient(black  3%,yellow 38%, pink);"
    }
   else if(cli==3){
        document.getElementById("con").style="background-image: radial-gradient(green  3%,white 38%, red);"
    }
    else if(cli==4){
        document.getElementById("con").style="background-image: url('camera-7859402_1920.jpg'); background-size:100% 100%";
    }
    
    else if(cli==5){
        document.getElementById("con").style="background-image: radial-gradient(blue  3%,brown 38%, red);"
    }
    else if(cli==6){
        document.getElementById("con").style="background-image: radial-gradient(green  3%,pink 38%, red);"
    }
    else if(cli==7){
        document.getElementById("con").style="background-image: url('pexels-james-wheeler-417074.jpg'); background-size:100% 100%";
    } 
    else if(cli==8){
        document.getElementById("con").style="background-image: radial-gradient(pink  3%,yellow 38%, black);"
    }
   else if(cli==9){
        document.getElementById("con").style="background-image: url('white-male-1874801_1280.jpg'); background-size:100% 100%";
    }
   
    else{
        document.getElementById("con").style="background-image: url('pexels-ella-olsson-1640774.jpg'); background-size:100% 100%";
        cli=0;
    }
}