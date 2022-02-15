/***************** 
 * OBJETO CONSTUCTOR
 *****************/
function Personas (dni,edad,sexo,altura,peso,actividadFisica,caloriasT){
    this.dni=dni;
    this.edad=edad;
    this.sexo=sexo;
    this.altura=altura;
    this.peso=peso;
    this.actividadFisica=actividadFisica;
    this.caloriasT= caloriasT;
}


/************************* 
        VARIABLES Y ARRAYS
 *************************/

let listaPersona=[];/// array para la carga de datos.
let sexo;
let actividadFisica;


/************************* 
        FUNCIONES
 *************************/


  // Se calcula el Tbm sin importar el sexo todavia
function calcularTbm(edad,altura,peso){
    let tbm=(10 * peso) + (6.25 * altura) - (5 * edad);
    return tbm;
}

/// calculo las calorias dependiendo del sexo elegido
function calcularCalorias(tbm,sexo){
    let calorias=0;

    if(sexo == 'M' || sexo == 'm'){
        
        calorias= tbm-161;
        
    } else if(sexo == 'H' || sexo == 'h'){
        calorias= tbm + 5;
    }

    return calorias;
}
///tbm segun el sexo
const tbmSexo=(edad,altura,peso, sexo)=>{ 
    
    let tbm= calcularTbm(edad, altura, peso);
    let  caloriasT = calcularCalorias(tbm, sexo);

 
 return caloriasT;
};

///// Funcion para tomar los datos y cargarlos en el array
const cargarDatos=()=>{
      
    let dni= parseInt( document.getElementById("dni").value);
    let edad= parseInt( document.getElementById("edad").value);
    
    let altura= parseInt( document.getElementById("altura").value);
    let peso= parseInt( document.getElementById("peso").value);
    //let actividadFisica= parseInt( document.getElementById("actividadFisica").value);
    
  

    let caloriasT=tbmSexo(edad,altura, peso, sexo);
    const persona= new Personas(dni,edad,sexo,altura,peso,actividadFisica,caloriasT);
       
    let lista;
    if(localStorage.getItem("listaPersona") != null) {
        lista = JSON.parse(localStorage.getItem("listaPersona"));
        lista.push(persona)
        localStorage.setItem("listaPersona",JSON.stringify(lista))
    }
    listaPersona.push(persona)
    return persona;
   
}


//PARA VERIFICAR EL  STORAGE
const verificarStorage = () => {
    let dato = [];
    if (localStorage.getItem("listaPersona") != null) {
        dato = JSON.parse(localStorage.getItem("listaPersona"));
        return dato;
    } 
}

//GUARDO
const guardar = ()=> {
    cargarDatos();
    if(verificarStorage() != undefined) {
        localStorage.setItem("listaPersona",JSON.stringify(verificarStorage()));
    } else {
        localStorage.setItem("listaPersona",JSON.stringify(listaPersona));
    }
}


///// SE MUESTRA EL ULTIMO CARGADO CON EL CALCULO

const mostrarCalculo= ()=>{    
   
    let nro;
               
    if (verificarStorage() != undefined) {
        verificarStorage().forEach(obj => {
            
            switch(obj.actividadFisica){
                
                case 1:{
                    nro=1.2;
                    
                
                }
                break
                case 2:{
                    nro=1.375;
                    
                    
                }
                break
                case 3:{
                    nro=1.55;
                    
                    
                }
                break
                case 4:{
                    nro=1.75;
                    
                    
                }
                break
                case 5:{
                    nro=1.9;
                                
                }
                break
                default: ;  
            }
        
            document.getElementById("informacion").innerHTML =`
                                                            <div class="contaniner centrar">
                                                                <div class="card-form">
                                                                <p>Usted de dni :${obj.dni}
                                                                <br>
                                                                Calorias sin importar actividad fisica: "${obj.caloriasT}"
                                                                <br>
                                                                Calorias  que necesita segun su actividad fisica "${obj.caloriasT * nro}" calorias
                                                                </p>
                                                                </div>
                                                            </div>`  
                                    
        })
    }
}

//eliminar persona
const eliminarPersona = (dni)=> {
    let listaVieja = JSON.parse(localStorage.getItem("listaPersona"));
    let listaNueva = listaVieja.filter(e => e.dni != dni);

    localStorage.setItem("listaPersona", JSON.stringify(listaNueva));
    location.reload();
}

const guardarDniBuscado= ()=>{
    let dniBuscado= parseInt( document.getElementById("dniBuscado").value);
    return dniBuscado;
}
////// MUESTRO LOS DATOS DEL DNI A BUSCAR SIN CALCULAR LAS CALORIAS CON SU ACTIVIDAD FISICA
const mostrarInfo= ()=>{
    if (verificarStorage() != undefined) {
        let listaStorage = JSON.parse(localStorage.getItem("listaPersona"));
        let dniBuscado = guardarDniBuscado();
        let listaFiltro = listaStorage.find(e => e.dni == dniBuscado);
        
        
        if( listaFiltro == undefined){
            document.getElementById("filtro").innerHTML=`<p> ESA PERSONA NO EXISTE`;
            

        }else{
            document.getElementById("filtro").innerHTML=`<p><br>
                                                            DNI: ${listaFiltro.dni}
                                                            <br>
                                                            Sexo: ${listaFiltro.sexo}
                                                            <br>
                                                            Edad: ${listaFiltro.edad}
                                                            <br>
                                                            Altura: ${listaFiltro.altura}
                                                            <br> 
                                                            Peso: ${listaFiltro.peso}
                                                            <br>
                                                            Calorias sin actividad Fisica:${listaFiltro.caloriasT} 
                                                            <br> 
                                                            <button class="btn btn-lg btn-secondary fw-bold border-white " onclick='eliminarPersona(${listaFiltro.dni})'>Eliminar</button> 
                                                                                                              
                                                        </p>`
                                                        
                                                        ;
        }
        
    }

}


/************************
    EVENTOS
************************/
// asigno el evento al boton
document.getElementById("btn-enviar").addEventListener("click",(e)=>{
    guardar();//borrar agregar
    mostrarCalculo();
})
    
 
document.getElementById("btn-hombre").addEventListener("click",()=>{
    esHombre();
    console.log(sexo);
})
document.getElementById("btn-mujer").addEventListener("click",()=>{
    esMujer();
    console.log(sexo);
})
document.getElementById("btn-poco").addEventListener("click",()=>{
    actividadFisica=1;
    console.log(actividadFisica);
})
document.getElementById("btn-moderado").addEventListener("click",()=>{
    actividadFisica=2;
    console.log(actividadFisica);
})
document.getElementById("btn-dias").addEventListener("click",()=>{
    actividadFisica=3;
    console.log(actividadFisica);
})
document.getElementById("btn-deportista").addEventListener("click",()=>{
    actividadFisica=4;
    console.log(actividadFisica);
})
document.getElementById("btn-atleta").addEventListener("click",()=>{
    actividadFisica=5;
    console.log(actividadFisica);
})


//// FUNCIONES DE BOTONES ANTES DE ENVIAR
const esHombre=()=>{
    sexo='H';
}
const esMujer=()=>{
    sexo='M';
}


