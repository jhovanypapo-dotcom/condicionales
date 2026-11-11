function calcular(){
// crear variable para el input de productos
let productos = document.getElementById("producto").value;

if (productos ==="") {
    alert("Ingrese el producto");
    document.getElementById("producto").style.borderColor="red";
    return;
}
else {
    document.getElementById("producto").style.borderColor="green";
   }
   let cantidad = parseInt(document.getElementById("cantidad").value);

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingrese una cantidad válida");
    document.getElementById("cantidad").style.borderColor="red";
    return;
}    

else{
    document.getElementById("cantidad").style.borderColor="green";
    
}
  let precio = parseFloat(document.getElementById("precio").value);

if (isNaN(precio) || precio <= 0) {
    alert("Ingrese un precio válido");
    document.getElementById("precio").style.borderColor="red";
    return;
}    

else{
    document.getElementById("precio").style.borderColor="green";
}
if (cantidad <= 0) {
    alert("cantidad invalida");
    document.getElementById("cantidad").style.borderColor="red";
    return;
}
else {
    document.getElementById("cantidad").style.borderColor="green";}


if (precio <= 0) {
    alert("precio invalido");
    document.getElementById("precio").style.borderColor="red";
    return;
}
else {
    document.getElementById("precio").style.borderColor="green";}

    //mostra el subtotal
  let subtotal = cantidad * precio;
    document.getElementById("subtotal").value = subtotal.toLocaleString();

    //calcular el descuento
  let descuento = 0;
    if (subtotal < 100000) {
        descuento = 0;
    } else if (subtotal < 300000) {
        descuento = subtotal * 0.1;
    } else if (subtotal < 500000) {
        descuento = subtotal * 0.2;
    } else {
        descuento = subtotal * 0.3;
    }
    document.getElementById("descuento").value = descuento.toLocaleString();

    //calcular el iva 
  let iva = subtotal * 0.19;
if (producto.value === "huevos" || producto.value === "leche" || producto.value === "pan"){
    document.getElementById("iva").style.background = "green";
}

else{
    document.getElementById("iva").style.background = "white";
}
document.getElementById("iva").value = iva.toLocaleString();

//calcular el total
let total = subtotal - descuento + iva;
document.getElementById("total").value = total.toLocaleString();

}

