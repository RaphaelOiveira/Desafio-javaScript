 window.onload = function(){

    


     let produto = [
         
         {descricao: 'Laranja', preco: 4.55 },
         {descricao: 'Banana', preco: 1.52},
         {descricao: 'Mamão', preco:2.38 },
         {descricao: 'Maçã', preco:2.46  },
         {descricao: 'Uva', preco: 3.19 },
         
     ]  
    
     const listaProdutos = document.querySelector("#produtos");

     (()=>{

        for( let pro of produto){
            const filhoLI = document.createElement('li');

            for( listaP in pro){

                if(listaP == "preco"){

                    listaProdutos.appendChild(filhoLI).setAttribute("data-preco", pro[listaP]);

                } else {

                    listaProdutos.appendChild(filhoLI).textContent = ` ${pro[listaP]} `;
                }

            }

        }

     })(produto);

     let cestaDoCliente = [];
     let selecionarItem = document.querySelectorAll("#produtos > li");
     let compraDoCliente = document.querySelector("#cestaDoCliente");
     let totalCompra = document.querySelector("#mostraTotalCompra");
     let total = 0;

     selecionarItem.forEach(function(item){

        item.addEventListener('click', function(){

           
           if(cestaDoCliente.indexOf(item.textContent) != -1){ 
                
            alert("Este item já está na lista");

           } else{
               total += Number(item.dataset.preco);
                cestaDoCliente.push(item.textcontent);
                    let itemCesta = document.createElement('li');
                        compraDoCliente.appendChild(itemCesta).textContent = item.textContent;
                            totalCompra.value = total.toFixed(2);
           }
            
        })

     })

  }




