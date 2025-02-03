



let BMIWeight = 0;
let BMIFat = 0;
let ageTemp = 0;
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let age = document.getElementById("age");
let small1 = document.getElementById("small1");
let small2 = document.getElementById("small2");
let btn = document.getElementById("btn");
let bar = document.getElementById("bar");






btn.onclick = function CalculateBMI(){
    weightValue = weight.value;
    heightValue = height.value;
    ageValue = age.value;
    genderValue = gender.value;

    if( genderValue === "Male"){
        genderValue = 1; 
    }
    if( genderValue === "Female"){
        genderValue = 0; 
    }

    BMIWeight = Number(weightValue/ ((heightValue/100)**2)) ;
    small1.innerHTML = BMIWeight.toFixed(1);

    BMIFat = Number((1.2 *BMIWeight ) +(0.23 *ageValue )  - (10.8* genderValue) -5.4 )
    small2.innerHTML = BMIFat.toFixed(1);


    if(ageValue >= 18 && BMIWeight < 18.5){
        $(document).ready(function(){
            $("#yellow").animate({
                width: "100%"
                

        },1000);
        $("#yellow").css("z-index", "1")
        $("#yellow").css("border-radius", "10px")


 
   
        });
        

    }



    if(ageValue >= 18 && BMIWeight >= 18.5 && BMIWeight <24.9 ){
        $(document).ready(function(){
            $("#green").animate({
                width: "100%"
                

        },1000);
        $("#green").css("z-index", "99")
        $("#green").css("border-radius", "10px")
        $("#green").css("left", "0px" )
        $("#green").css("top", "45%" )
        $("#red").hide()
        $("#yellow").hide()
 
   
        });
        

    }
 
    if(ageValue >= 18 && BMIWeight > 25 && BMIWeight <29.9 ){
        $(document).ready(function(){
            $("#green").animate({
                width: "70px"
                

        },1000);
            $("#red").animate({
                width: "67%"
            

        },1000);
        $("#green").css("z-index", "99")
        $("#green").css("border-radius", "10px")
        $("#green").css("border-bottom-right-radius", "0px")
        $("#green").css("border-top-right-radius", "0px")

        $("#green").css("left", "0px" )
        $("#green").css("top", "44%" )
        $("#red").css("top", "-12px" )
        $("#red").css("left", "70px" )

    

        $("#yellow").hide()
 
   
        });
        

    }

    if(ageValue >= 18 && BMIWeight >= 30 ){
        $(document).ready(function(){
            $("#red").animate({
                width: "100%"
                

        },1000);
        $("#red").css("z-index", "99")
        $("#red").css("border-radius", "10px")
        $("#red").css("left", "0px" )
        $("#red").css("top", "45%" )
        $("#green").hide()
        $("#yellow").hide()
 
   
        });
        

    }
 
    

    if(ageValue < 18 && BMIWeight < 14 ){
        $(document).ready(function(){
            $("#yellow").animate({
                width: "100%"
                

        },1000);
        $("#yellow").css("z-index", "1")
        $("#yellow").css("border-radius", "10px")


 
   
        });
        

    }



    if(ageValue < 18 && BMIWeight >= 14 && BMIWeight <18.4 ){
        $(document).ready(function(){
            $("#green").animate({
                width: "100%"
                

        },1000);
        $("#green").css("z-index", "99")
        $("#green").css("border-radius", "10px")
        $("#green").css("left", "0px" )
        $("#green").css("top", "45%" )
        $("#red").hide()
        $("#yellow").hide()
 
   
        });
        

    }



    if(ageValue < 18 && BMIWeight >= 18.5 && BMIWeight <24.9 ){
        $(document).ready(function(){
            $("#green").animate({
                width: "70px"
                

        },1000);
            $("#red").animate({
                width: "67%"
            

        },1000);
        $("#green").css("z-index", "99")
        $("#green").css("border-radius", "10px")
        $("#green").css("border-bottom-right-radius", "0px")
        $("#green").css("border-top-right-radius", "0px")

        $("#green").css("left", "0px" )
        $("#green").css("top", "44%" )
        $("#red").css("top", "-12px" )
        $("#red").css("left", "70px" )

    

        $("#yellow").hide()
 
   
        });
        

    }

    if(ageValue < 18 && BMIWeight >= 25 ){
        $(document).ready(function(){
            $("#red").animate({
                width: "100%"
                

        },1000);
        $("#red").css("z-index", "99")
        $("#red").css("border-radius", "10px")
        $("#red").css("left", "0px" )
        $("#red").css("top", "45%" )
        $("#green").hide()
        $("#yellow").hide()
 
   
        });
        

    }
 
 



}


















