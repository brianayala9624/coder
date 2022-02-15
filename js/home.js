/* Funcion para mostrar y ocultrar elementos */
function vermas(parrafo,boton){
    if(document.getElementById(parrafo).style.display=='block'){
        document.getElementById(parrafo).style.display='none';
        document.getElementById(boton).innerHTML='Ver mas';
    }else{
        document.getElementById(parrafo).style.display='block';
        document.getElementById(boton).innerHTML='Ocultar';
  
    }

}