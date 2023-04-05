// Hice el ejercicio con el primer orden que encontre en google :D
let n = parseInt(prompt("Ingrese el numero de un apóstol",1))
const apostoles = ["no existe","Pedro","Santiago","Juan","Andrés","Felipe","Judas","Iscariote","Mateo","Tomás","Bartolomé","Judas Tameo","Simón"]
if (0<=n &&n<=12) console.log(`El nombre del apóstol numero ${n} es ${apostoles[n]}`)
else (console.log("Solo existen 12 apóstoles"))