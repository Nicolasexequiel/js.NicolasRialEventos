//formulario

function datos (evento){
    evento.preventDefault ();
 let nombre= document.querySelector("#nombre").value;
 let edad = document.querySelector("#edad").value;
 let años = 2022 - edad;
 let bienvenida = document.querySelector("#bienvenida");
 let mensajeEdad ;
 let mensaje;

 if ( años > 40){
    mensajeEdad= " hola señor";
 } else if (años < 40){
    mensajeEdad= " hola joven"
 }

 mensaje = "hola " + nombre + " usted tiene "+ años + " años "+ mensajeEdad;
 bienvenida.textContent= mensaje;


}

let miForm =document.querySelector("#formulario");
miForm.addEventListener("submit",datos);


let total= 0 ;

class articulos {
    constructor(id, articulo, cantidad, precio) {
        this.id= id;
        this.articulo= articulo;
        this.cantidad= cantidad;
        this.precio= precio;
    }
}


const elegido = [];
elegido.push(new articulos(01,"remera", 10, 2000))
elegido.push(new articulos(02,"remera manga larga", 10, 2600))
elegido.push(new articulos(03,"musculosa", 10, 1800))
elegido.push(new articulos(04,"buzo", 10, 4500))
elegido.push(new articulos(05,"short", 10, 2000))
elegido.push(new articulos(06,"jean", 10, 4500))
elegido.push(new articulos(07,"joggin", 10, 4000))



let recibo =  document.createElement("p");
recibo.innerHTML= "<h3> tu compra ASG </h3> <br> <h3> tu pedido es : </h3> "
document.body.appendChild(recibo);

let ropa = parseInt(prompt("ingrese el numero de la prenda que desea \n 1- remera \n 2-remera manga larga \n 3- musculosa \n 4- buzo \n 5-short \n 6- jean \n 7- joggin \n presione 0 para finalizar "));
while ( ropa != "0"){
    switch(ropa){
        case 1: total = total + elegido[0].precio 
        alert("añadiste a tu compra " + elegido[0].articulo + " "  + elegido[0].cantidad + " $" + elegido[0].precio );

        let prime = document.createElement("p");
        prime.innerHTML= elegido[0].articulo + " " + elegido[0].cantidad;
        document.body.appendChild(prime);
        break;


        case 2: total = total + elegido[1].precio 
        alert("añadiste a tu compra " + elegido[1].articulo + " "  + elegido[1].cantidad + " $" + elegido[1].precio );

        let sec = document.createElement("p");
        sec.innerHTML= elegido[1].articulo + " " + elegido[1].cantidad;
        document.body.appendChild(sec);
        break;


        case 3: total = total + elegido[2].precio 
        alert("añadiste a tu compra " + elegido[2].articulo + " "  + elegido[2].cantidad + " $" + elegido[2].precio );

        let ter = document.createElement("p");
        ter.innerHTML= elegido[2].articulo + " " + elegido[2].cantidad;
        document.body.appendChild(ter);
        break;


        case 4: total = total + elegido[3].precio 
        alert("añadiste a tu compra " + elegido[3].articulo + " "  + elegido[3].cantidad + " $" + elegido[3].precio );

        let cuar = document.createElement("p");
        cuar.innerHTML= elegido[3].articulo + " " + elegido[3].cantidad;
        document.body.appendChild(cuar);
        break;


        case 5: total = total + elegido[4].precio 
        alert("añadiste a tu compra " + elegido[4].articulo + " "  + elegido[4].cantidad + " $" + elegido[4].precio );

        let cin = document.createElement("p");
        cin.innerHTML= elegido[4].articulo + " " + elegido[4].cantidad;
        document.body.appendChild(cin);
        break;


        case 6: total = total + elegido[5].precio 
        alert("añadiste a tu compra " + elegido[5].articulo + " "  + elegido[5].cantidad + " $" + elegido[5].precio );

        let sext = document.createElement("p");
        sext.innerHTML= elegido[5].articulo + " " + elegido[5].cantidad;
        document.body.appendChild(sext);
        break;

        case 7: total = total + elegido[6].precio 
        alert("añadiste a tu compra " + elegido[6].articulo + " "  + elegido[6].cantidad + " $" + elegido[6].precio );

        let set = document.createElement("p");
        set.innerHTML= elegido[6].articulo + " " + elegido[6].cantidad;
        document.body.appendChild(set);
        break;
        
        default:alert("no ingresaste ningun producto valido");


    }
    ropa = parseInt(prompt("ingrese el numero de la prenda que desea \n 1- remera \n 2-remera manga larga \n 3- musculosa \n 4- buzo \n 5-short \n 6- jean \n 7- joggin \n presione 0 para finalizar "));
    
   

}


let recibo1 = document.getElementById("total");
recibo1.innerHTML= "<h2> el total de su compra es: </h2> " + "$ " + total ;
document.body.appendChild(recibo1);
























