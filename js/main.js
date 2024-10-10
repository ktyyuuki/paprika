// RENDER PRODUCTOS
async function filtroProductos(categoria){
    const response = await fetch("../json/menu.json");
    const data = await response.json();

    let filtro = [];
    data.forEach(item => {
        if(item.category === categoria){
            filtro.push(item);
        }
    });
    // console.log(filtro);
    return filtro;
}

async function render(cat, containerId){
    const productosFiltrados = await filtroProductos(cat);
    console.log(productosFiltrados); 

    const container = document.getElementById(containerId);
    let contenidoHTML = "";

    productosFiltrados.forEach(item => {
        contenidoHTML += `<article class="col-lg-6">
            <div class="menu-item">`
            if(item.img){
                contenidoHTML += `<img src="${item.img}" width="100" height="100" alt="${item.name}" title="${item.name}">`
            }
            contenidoHTML += `<div class="descripcion-menu">
                    <div class="header-menu">
                        <h3 class="titulo-menu">${item.name}</h3>
                        <p class="precio-menu">$${item.price}</p>
                    </div>
                    <p>${item.description}</p>
                </div>
            </div>
        </article>`;
        console.log(contenidoHTML);
        container.innerHTML = contenidoHTML;   
    })
}

render('Small plates', 'smallplates');
render('Entrees', 'entreess');
render('Desserts', 'dessert');
render('Wine', 'wines');
render('Beer', 'beers');