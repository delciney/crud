// Depois que carregar a pagina executa a função
window.onload = function() {
    listaCategorias(criaSelectCategoria)
  };

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

const baseUrl = 'http://localhost:3000/v1';

// Produtos

// Get
function listaProdutos(callback){
    $.get(`${baseUrl}/products`,true).done((data)=>{
        const result = JSON.parse(data);

        if(result?.status === "sucesso"){    
            callback(result.products);
        }else{
            alert("erro ao buscar produtos");
        }
    });
}

// Post
function cadastraProduto(data){}

// Put
function alteraProduto(data){}

// Delete
function removeProduto(data){}

// Categorias

// Get
function listaCategorias(callback){
    $.get(`${baseUrl}/categories`,true).done((data)=>{
        const result = JSON.parse(data);

        if(result?.status === "sucesso"){    
            callback(result.categories);
        }else{
            alert("erro ao buscar categorias");
        }
    });
}

// Post
function cadastraCategoria(data){}

// Put
function alteraCategoria(data){}

// Delete
function removeCategoria(data){}

//Compartilhado
function criaSelectCategoria(data){
    const element = document.getElementById("selectCategoria");

    var elementoOption = null;
    
    data.forEach(item => {

        elementoOption = document.createElement("option");

        elementoOption.value = item.Id;
        elementoOption.appendChild(document.createTextNode(item.Nome));

        element.appendChild(elementoOption);
    });
    
}

