// console.log("librerías")

// // SWEET ALERT ES UNA LIBRERÍA QUE SIRVE PARA ENVIAR ALERTAS
// // LA UTILIZAMOS A TRAVÉS DE CDN
// // RECIBE ARGUMENTOS PARA PODER HACER LAS ALERTAS

// swal("sweet alert")

// // si pasamos dos argumentos, el primero es un título y el segundo un subtitulo

// swal("Gracias por tu compra", "Da click para continuar")

// // si pasamos tres argumentos, el último es un icono
// // warning, error, success e info
// // le pasamos los tres argumentos como si fuesen string

// swal("Gracias por tu compra", "Da click para continuar", "success")

// // sweet alert también puede recibir un objeto como parámetro

// swal({
//     title: "Buen trabajo",
//     text: "Haz click para continuar",
//     icon: "success",
//     button: "Genial"
// })

// enviamos un formulario y recibimos una alerta exitosa del mismo

const formularioNombre = document.querySelector("#form-nombre")

formularioNombre.onsubmit = (e) => {
    e.preventDefault()
    swal({
        title: "Se ha enviado exitosamente",
        text: "Haz click en continuar",
        icon: "success",
        button: "Continuar"
    })
}

// sweet alert utiliza promesas para realizar un seguimiento de cómo el usuario interactúa con la alerta

// swal({
//     title: "Moria Casán está en la mesaza: ¿Qué le va a contestar a Mirtha?",
//     buttons: {
//         frase1: "Ay pero par favaaar",
//         frase2: "¿Vos perdonaste infidelidades de tu marido?",
//         frase3: "Comen mortadela y eructan caviar"
//     }
// })
// .then( (value) => {
//     switch(value) {
//         case "frase1":
//             swal("Mirtha: ¿Pero qué tiene de malo la pregunta?")
//             break;
//         case "frase2":
//             swal("Mirthar: No voy a contestar eso.")
//             break;
//         case "frase3":
//             swal("Mirtha: No te lo tomes personal")
//             break;
//     }
// })

// TOASTIFY
// LIBRERÍA QUE ME PERMITE IMPLEMENTAR NOTIFICACIONES EN NUESTRO NAVEGADOR

const botonGeneradorDeNotis = document.querySelector("#noti-generator")
console.log(botonGeneradorDeNotis)

// ligo evento onclick para generar una notificación
// toastify recibe como argumento un objeto

botonGeneradorDeNotis.onclick = () => {

    Toastify({
        text: "Esto es una notificación",
        close: true,
        duration: 6000
    }).showToast()
}

// luxon 
// LIBRERÍA QUE ME PERMITE MANIPULAR FECHAS Y HORAS

const DateTime = luxon.DateTime
console.log(DateTime)

// DATETIME REPRESENTA A UN MILISEGUNDO ESPECÍFICO EN EL TIEMPO, JUNTO CON UNA ZONA HORARIA Y UNA CONFIGURACION REGIONAL

//DateTime.local()
// .local() acepta un argumento optativo

const fechaDeCumpleaños = DateTime.local(1992,4,21, 16, 10, 10, 5)
console.log(fechaDeCumpleaños)

// podemos utilizar .toLocaleString()

console.log(fechaDeCumpleaños.toString())

//DateTime.now() // nos devuelve la fecha actual de donde estemos utilizando el servicio o librería

const diaDeHoy = DateTime.now()
console.log(diaDeHoy)
console.log(diaDeHoy.toLocaleString())

// boton que genera fecha actual

const botonFechaActual = document.querySelector("#button-fecha")

botonFechaActual.onclick = () => {
    console.log(`${diaDeHoy.c.day}, ${diaDeHoy.c.month}, ${diaDeHoy.c.year}`)
    document.querySelector(".caja").innerHTML = diaDeHoy.toLocaleString()
}

//.fromObject // este método puede recibir dos objetos como parámetro

const fechaPorObjeto = DateTime.fromObject (
    {
        day: 15,
        hour:13,
        month: 5,
        year: 1990
    },
    {
        zona: "America/Buenos_Aires",
        numberingSystem: 'beng'
    }
)

console.log(fechaPorObjeto.toString())

// PODEMOS RELACIONAR A LAS FECHAS CON LAS NORMAS ISO

console.log(DateTime.fromISO("1999-10-01").toString())

// ACCEDER A LOS ELEMENTOS QUE SE ENCUENTRAN EN NUESTROS DATOS FECHA

const fechaDeHoy = DateTime.now ()

console.log(fechaDeHoy.year)
console.log(fechaDeHoy.month)
console.log(fechaDeHoy.day)
//.second, .weekday, .zoneName, daysInMonth
console.log(fechaDeCumpleaños.zoneName)

// PODEMOS DARLE FORMATO A LA FECHA
// LUXON OFRECE UNA LISTA DE PRE-SETS QUE NOS VAN A PERMITIR PASARLE A toLocalString() un argumento

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_HUGE)) //FECHA COMPLETA CON DÍA DE SEMANA Y MES SUPER DETALLADO
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_SHORT)) // FECHA CORTA
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_FULL)) // FECHA COMPLETA

// DATE_FULL || TIME_SIMPLE || DATE_MED || ETC, ETC LEERR LA DOCU

// TRANSFORMAR ESTAS FECHAS

// LOS OBJETOS EN LUXON SON INMUTABLES (NO CAMBIA SU ESTADO NI SU VALOR), LOS MÉTODOS DE TRANSFORMACIÓN QUE SE EJERZAN SOBRE ELLOS GENERAN NUEVOS VALORES ALTERADOS DE LOS MISMOS
// utilizamos .plus() para pasarle un objeto

const sumarDiasAFechaDeHoy = fechaDeHoy.plus({
    hours: 1000000,
    year: 1000,
    second: 10000000,
})

console.log(sumarDiasAFechaDeHoy.toLocaleString(DateTime.DATE_HUGE))

// utilizamos .minus()

const restarDiasAFechaDeHoy = fechaDeHoy.minus({
    year: 20000
})

console.log(restarDiasAFechaDeHoy.toLocaleString(DateTime.DATE_HUGE))

// INTERVAL

// PODEMOS ENVIAR DOS FECHAS Y NOS DEVUELVE EL INTERVALO ENTRE ELLAS

const Interval = luxon.Interval

const fechaAhoraYa = DateTime.now()
const fechaDiezAniosAdelante = DateTime.local(2032, 08, 08)

const intervaloEntreDosFechas = Interval.fromDateTimes(fechaAhoraYa, fechaDiezAniosAdelante)
console.log(intervaloEntreDosFechas)
console.log(intervaloEntreDosFechas.length("day"))

