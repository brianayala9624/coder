$(()=>{

    /// animacion del formulario 
    
    $("#boton-M").on("click",function(){
        $("#formulario").toggle(3000);
        
    })

   const comidas=[
        {nombre: "Manzana",calorias:52 ,tipo:"fruta" ,id:1 , icon:"icon-dieta-1.png" },
        {nombre: "Frutilla",calorias:33,id:2 ,tipo:"fruta" , icon:"icon-dieta-2.png" },
        {nombre: "Zanahoria",calorias:35 ,id:3 ,tipo:"verdura" , icon:"icon-dieta-3.png" },
        {nombre: "Apio",calorias:5 ,id:4 ,tipo:"verdura" , icon:"icon-dieta-4.png" },
        {nombre: "Piña",calorias:50 ,id:5 ,tipo:"fruta" , icon:"icon-dieta-5.png" },
        {nombre: "Aguacate",calorias:160 ,id:6 ,tipo:"fruta" , icon:"icon-dieta-6.png" },
        {nombre: "Mango",calorias:60 ,id:7 ,tipo:"fruta" , icon:"icon-dieta-7.png" },
        {nombre: "Limon",calorias:29 ,id:8 ,tipo:"fruta" , icon:"icon-dieta-8.png" },
        {nombre: "Sandia",calorias:30 ,id:9 ,tipo:"fruta" , icon:"icon-dieta-9.png" },
        {nombre: "Pomelo",calorias:42 ,id:10 ,tipo:"fruta" , icon:"icon-dieta-10.png" },
        {nombre: "Acelga",calorias:38 ,id:11 ,tipo:"verdura" , icon:"icon-dieta-11.png" },
        {nombre: "Rabano",calorias:16,id:12 ,tipo:"verdura" , icon:"icon-dieta-12.png" },
        {nombre: "Pepino",calorias:15 ,id:13 ,tipo:"verdura" , icon:"icon-dieta-13.png" },
        {nombre: "Brocoli",calorias:34 ,id:14 ,tipo:"verdura" , icon:"icon-dieta-14.png" },
    ]
    
  
    for(comidaSaludable of comidas){
        $("#contenedor-comidas").append(`
              <div class="caja-comida ${comidaSaludable.tipo}" id="${comidaSaludable.id}">
                      <img src="../imgs/${comidaSaludable.icon}" alt="comida">
                      <h4>Fruta/Verdura</h4>
                      <p>${comidaSaludable.nombre}</p>
                      <p>Calorias:${comidaSaludable.calorias}</p>
  
                  </div>   
        `)
    }


    ///// se muestra segun el filtrado entre frutas y verduras 
    $(".caja-comida").on("click",function(){
        $(this).toggleClass("seleccionado");
    })

    $("#borrar-frutas").on("dblclick",function(){
        $(".fruta").toggleClass("hide");
      })
      $("#borrar-verduras").on("dblclick",function(){
        $(".verdura").toggleClass("hide");
      })
  });


/// imprimo el formulario  con los datos nuevos cargados

  $("#form").submit(function(e){
    e.preventDefault();
    const comidaNro = $(".caja-comida").length;
    let img=$("url");
    $("#contenedor-comidas").append(`
    <div class="caja-comida ${comidaNro.tipo}" id="${comidaNro.id + 1}">
            <img src="${$("#url").val()}" alt="comida">
            <h4>Fruta/Verdura</h4>
            <p>${$("#nombre").val()}</p>
            <p>Calorias:${$("#calorias").val()}</p>

        </div>   
`)
    $(this)[0].reset();


})