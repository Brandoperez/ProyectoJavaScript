function cuotas_intereses(monto, cuota){
    if(cuota == 3){
        let interes = monto * 0.10;
        return interes;
    }
    else if(cuota == 6){
        let interes = monto * 0.20;
        return interes;
    }
    else if(cuota == 9){
        let interes = monto * 0.45;
        return interes;
    }
    else if(cuota == 12){
        let interes = monto * 0.70;
        return interes;
    }
}

class usuarios{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

class autos{
    constructor(marca, modelo, anio, color, patente, valor,){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
        this.patente = patente;
        this.valor = valor;
        this.cuotas = 0;
        this.valor_cuota = 0;
    }
    get_datos(){
        console.log("Datos del Auto");
        console.log("Marca: ", this.marca);
        console.log("Modelo: ", this.modelo);
        console.log("Año: ", this.anio);
        console.log("Color: ", this.color);
        console.log("Patente: ", this.patente);
        console.log("Valor Total: ", this.valor);
        console.log(""); //Salto de linea.
    }
    set_cuotas(cuotas){
        if(typeof(cuotas) == "number" && cuotas == 18){
            this.valor_cuota = (this.valor * 0.15);
            this.cuotas = cuotas;
            
        } 
        else if(typeof(cuotas) == "number" && cuotas == 24){
            this.valor_cuota = (this.valor * 0.25);
            this.cuotas = cuotas;
           
        }
    }
    get_total(){
        console.log("Datos del auto", this.modelo);
        console.log("Valor ", this.valor);
        console.log("Cantidad de cuotas: ", this.cuotas);
        console.log("Valor de cuotas: ", this.valor_cuota);
        console.log("");}
}



let entrada = prompt("Opcion 1: Préstamo" + "\n" +
                     "Opcion 2: Cotizá el auto de tus sueños" + "\n" +
                     "Opcion 3: Salir para continuar");


    while(entrada == "1" || entrada == "2" || entrada != "3"){
        if(entrada == "1"){
            alert("Es hora de simular tu préstamo personal");
            break
        }
        else if( entrada == "2"){
            alert("Es hora de cotizar el auto de tus sueños");
            break
        }
        else if(entrada == "3"){
            alert("Esperamos verte en otra oportunidad");
        };

        entrada = prompt("Opcion 1: Préstamo" + "\n" +
                     "Opcion 2: Cotizá el auto de tus sueños" + "\n" +
                     "Opcion 3: Salir para continuar");
    }

    let listado_usuarios = [];
        for(i = 0; i < 1; i++){
            let nombre = prompt("Ingrese su Nombre:");
            let apellido = prompt("Ingrese su Apellido");
            let edad = prompt("Ingrese su Edad");
        
                let nuevo_usuario = new usuarios(nombre,apellido,edad);
                listado_usuarios.push(nuevo_usuario);
        } 
        console.log(listado_usuarios);


        for(let obj_usuario of listado_usuarios){
            console.log(obj_usuario);
            
            if(obj_usuario.edad >= 18){
            alert("Bienvenido al sistema: " + obj_usuario.nombre);
        }else{
            alert("No podes continuar con la solicitud, todavía no eres mayor de edad");
        }
        }

        if(entrada == "1"){
            let monto = prompt("¿Cuanto dinero necesitas?");
            monto = parseInt(monto);

            let cuota = prompt("¿Cuantas cuotas vas a utilizar 3,6,9,12 ?");
            let total = monto + cuotas_intereses(monto, cuota);

            cuotas_intereses(monto, cuota);

            alert( listado_usuarios[0].nombre + " " + "Gracias por simular con Cash al instante" + "\n" +
                  "Pediste: " + monto + "\n" +
                  "Cantidad de cuotas: " + cuota + "\n" +
                  "Total con intereses: " + total + "\n" +
                  "Pagas por cuotas: " + total/cuota);
        }

        if(entrada == "2"){
            alert("Estos son los autos que tenemos disponible para ofrecerte");
            alert("Es hora de abrir la consola jejeje");


            let auto_uno = new autos("Ford", "Fiesta", "2018", "Azul", "ABC123", 50000);
            let auto_dos = new autos("Ford", "Yaris", "2020", "Naranja", "DEF456", 150000);

            
            auto_uno.get_datos();
            auto_uno.set_cuotas(18);
            auto_uno.get_total();

            auto_dos.get_datos();   
            auto_dos.set_cuotas(24);
            auto_dos.get_total();
            
        }

        let date = new Date();
        console.log("Cotización para: ", listado_usuarios[0].nombre + " " + listado_usuarios[0].apellido );
        console.log(date);
        


        

        
        
        
        
             
            