
function cuotas_intereses(monto, cuotas){
    if(cuotas == 3){
        let interes = monto * 0.10;
        return interes;
    }
    else if(cuotas == 6){
        let interes = monto * 0.20;
        return interes;
    }
    else if(cuotas == 9){
        let interes = monto * 0.45;
        return interes;
    }
    else if(cuotas == 12){
        let interes = monto * 0.70;
        return interes;
    }
}


let nombre_usuario = prompt("Ingrese su Nombre");
let prestamo = prompt("Ingrese la palabra prestamo para iniciar la simulación.");

        while ( prestamo != "prestamo" && nombre_usuario != "") {
            alert("Bienvenido al sistema " + nombre_usuario);
            prestamo = prompt ("Ingrese la palabra prestamo para simular tu prestamo personal");
        }

        if(prestamo == "prestamo"){
            alert("Es hora de simular tu prestamo personal");
        }

    let monto = prompt("Ingresa Cuanto dinero quieres");
    monto = parseInt(monto);

    let cuotas = prompt("¿Cuantas cuotas vas a necesitar: 3, 6, 9, 12?")
    let total = monto + cuotas_intereses(monto, cuotas);

    cuotas_intereses(monto, cuotas);

    console.log(nombre_usuario, "Gracias por simular con Cash al instante");
    console.log("Pediste: ", monto);
    console.log("Cantidad de cuotas: ", cuotas);
    console.log("Total con intereses: ", total);
    console.log("Pagas por cuotas: ", total/cuotas);

