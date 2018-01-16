var Calculadora = {
   init: function(){


     pantalla = "0";
     xi = 1;
     coma = 0;
     noculto = 0;
     op = "no";


     function numero(num){
       if (pantalla == "0" || xi == 1  ) {
               document.getElementById('display').innerHTML = num
               pantalla=num;
                 if (num == "."){
                   document.getElementById('display').innerHTML = "0.";
                   pantalla = num;
                   coma = 1;
                 }
       }
       else {
         if(num == "." && coma == 0){
           document.getElementById('display').innerHTML += num;
           pantalla+=num;
           coma = 1;
         }
         else if(num == "." && coma == 1){}
         else{
           valida = String(pantalla)
           if(valida.length < 8){
           document.getElementById('display').innerHTML += num;
           pantalla += num;
          }
         }
       }
        xi = 0
     }

     function borrado(){
       document.getElementById('display').innerHTML = 0;
       pantalla = 0;
       coma = 0;
       noculto = 0;
       op = "no";
     }

     function opuesto(){
       nx = Number(pantalla);
       nx = -nx;
       pantalla = String(nx);
       document.getElementById('display').innerHTML = pantalla;
     }

     function operar(s){
       igualar();
       noculto = pantalla
       op = s;
       xi = 1;
       coma = 0;
       document.getElementById('display').innerHTML = ""
     }

     function igualar(){
       if(op == "no"){
         document.getElementById('display').innerHTML = pantalla;
       }
       else {
         sl = noculto + op + pantalla;
         sol = eval(sl)
         document.getElementById('display').innerHTML = sol
           pantalla = sol
           xi = 1
           valida = String(pantalla)
           if(valida.length > 8 && valida.indexOf('.') != -1){
             sub = valida.substr(0,9)
             document.getElementById('display').innerHTML = sub
           }else{
             sub = valida.substr(0,8)
             document.getElementById('display').innerHTML = sub
         }
       }
     }

     function raizc() {
         pantalla=Math.sqrt(pantalla)
         document.getElementById('display').innerHTML = pantalla
         valida = String(pantalla)
         if(valida.length > 8 && valida.indexOf('.') != -1){
           sub = valida.substr(0,9)
           document.getElementById('display').innerHTML = sub
         }else{
           sub = valida.substr(0,8)
           document.getElementById('display').innerHTML = sub
         op="no";
         xi=1;
         }
       }

     this.on.addEventListener('mousedown', function() {
     this.style.transform="scale(0.9)"
     borrado();
     });

     this.on.addEventListener('mouseup', function() {
     this.style.transform="scale(1)"
     });

     this.signo.addEventListener('mousedown', function() {
     this.style.transform="scale(0.9)"
     opuesto();
     });

     this.signo.addEventListener('mouseup', function() {
     this.style.transform="scale(1)"
     });

     this.raiz.addEventListener('mousedown', function() {
     this.style.transform="scale(0.9)"
     raizc()
     });

     this.raiz.addEventListener('mouseup', function() {
     this.style.transform="scale(1)"
     });

     this.dividido.addEventListener('mousedown', function() {
     this.style.transform="scale(0.9)"
     operar("/");
     });

     this.dividido.addEventListener('mouseup', function() {
     this.style.transform="scale(1)"
     });

    this.nueve.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("9")
    });

    this.nueve.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.ocho.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("8")
    });

    this.ocho.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.siete.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("7")
    });

    this.siete.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.multiplica.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    operar("*");
    });

    this.multiplica.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.seis.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("6")
    });

    this.seis.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.cinco.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("5")
    });

    this.cinco.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.cuatro.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("4")
    });

    this.cuatro.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.resta.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    operar("-");
    });

    this.resta.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.tres.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("3")
    });

    this.tres.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.dos.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("2")
    });

    this.dos.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.uno.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("1")
    });

    this.uno.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.cero.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero("0")
    });

    this.cero.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.punto.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    numero(".")
    });

    this.punto.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.igual.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    igualar();
    });

    this.igual.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });

    this.suma.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    operar("+");
    });

    this.suma.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
    },


    on: document.getElementById('on'),
    signo: document.getElementById('sign'),
    raiz: document.getElementById('raiz'),
    dividido: document.getElementById('dividido'),
    nueve: document.getElementById('9'),
    ocho: document.getElementById('8'),
    siete: document.getElementById('7'),
    multiplica: document.getElementById('por'),
    seis: document.getElementById('6'),
    cinco: document.getElementById('5'),
    cuatro: document.getElementById('4'),
    resta: document.getElementById('menos'),
    tres: document.getElementById('3'),
    dos: document.getElementById('2'),
    uno: document.getElementById('1'),
    cero: document.getElementById('0'),
    punto: document.getElementById('punto'),
    igual: document.getElementById('igual'),
    suma: document.getElementById('mas'),


}
Calculadora.init();
