$(()=>{
//1 - esconder el carrito
    $("#cart-items").slideUp();
//2 - cuando hacemos click en la canasta se abre o cierra el carrito
    $(".cart").on("click", function(){
        $("#cart-items").slideToggle();
    })
//3 - en click de cada producto agregamos al carrito
    $(".item").on("click",function(){
        $("#cart-items").slideDown();

        //busquemos los datos que necesitamos
        let name = $(this).find("h5").text();
        let price = parseFloat($(this).find(".price").text());
        
        
        $("#list-item").append(
            `
                <li> ${name} - $<span class="eachPrice">${price}</span> 
                <svg class="remove" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
                </li>
            
            `
        )
        itemsCarrito();
        precioTotal();
        
        //6 - borrar items del carrito
        $(".remove").on("click",function(){
            $(this).parent().remove();
            itemsCarrito();
            precioTotal();
        })
    })


//4 - agregar el nuemro de items
    const itemsCarrito = ()=>{
        $("#items-basket").text(`(${$("#list-item").children().length})`);
    }
//5 - calcular el precio final
    const precioTotal = ()=> {
        let totalPrice = 0;
        $(".eachPrice").each(function(){
            let precioItem = parseFloat($(this).text());
            totalPrice += precioItem;
           
        });
        $("#total-price").text(`$${totalPrice}`);
        console.log(precioFinal);
    }



})



