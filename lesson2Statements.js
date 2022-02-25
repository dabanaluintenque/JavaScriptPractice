

   function mycarName() {

        let d = document.getElementById('a').innerHTML = "You have just click me thank you! "

    }

    function result() {

        document.getElementById('b').innerHTML = 1e7 + "  million";
    }

    function multiplication(x, y) {

        return x * y;

    }
     let multiply = multiplication(7,7)
    document.getElementById('c').innerHTML = "This is the result when you multiply  7 x 7 =" + multiply;


    function toCelsius(fahrenheit){

     return (5/9) * (fahrenheit-32)
     }
    let inCelsius =  toCelsius(79);
    document.getElementById('d').innerHTML="Convert  79 degrees Fahereheit to Celsius ="+ inCelsius +"C";


    function toFahrenheit(celcios){

     return (celcios * 9/5) + 32;
    }

    let inFahrenheit = toFahrenheit(26.111111111111111);

    document.getElementById('e').innerHTML="Convert 25 degrees celcios to Fahereheit =" +inFahrenheit +"F";

 
   function toKelvin(celsius){

       return celsius + 273.15;
   }

   let inKelvin = toKelvin(77);

   document.getElementById('f').innerHTML="Convert 77 degrees celcios to Kelvin ="+ inKelvin+"K";
    
  

  
