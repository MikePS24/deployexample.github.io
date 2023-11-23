/* Autor: Miguel Ángel Piña Salas    
    Fecha: 28/09/2023 */
    'use strict'
    
    function btnSumar(){
        //Declaración de variables
        //Hacer conexion con el dom
        var val1 = document.getElementById("txtval1").value;//Se obtiene el valor por id del input en html
        var val2 = document.getElementById("txtval2").value;// se reciben strings
        var suma = 0;
        //alert(typeof val1)
        //Proceso
        suma = parseInt(val1) + parseInt(val2);
        //var suma2 = suma+""

        document.form1.txtRes.value=suma;
    }
