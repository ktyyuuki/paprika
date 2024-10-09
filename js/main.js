const menu = [];

// Leer json
async function consumirJSON() {
    if (menu.length === 0) { 
        const response = await fetch("../json/menu.json");
        const data = await response.json();
        data.forEach(item => {
            menu.push(item);
        });
    }
    return menu;
}
// console.log(consumirJSON());
// console.log(menu);



// Estructura menu
function renderMenu(menu){ 
    let productoHTML = "";

    for (const item of menu) {
        productoHTML += `<article class="col-lg-6">
            <div class="menu-item">`
            if(item.img){
                productoHTML += `<img src="${item.img}" width="100" height="100" alt="${item.name}" title="${item.name}">`
            }
            productoHTML += `<div class="descripcion-menu">
                    <div class="header-menu">
                        <h3 class="titulo-menu">${item.name}</h3>
                        <p class="precio-menu">$${item.price}</p>
                    </div>
                    <p>${item.description}</p>
                </div>
            </div>
        </article>`;
        // document.getElementById("smallplates").innerHTML = productoHTML;
    }  
    return productoHTML;
}
// renderMenu(menu);

async function filtrarMenu(categoria, containerId){
    let menu = await consumirJSON();
    // console.log(menu);
    const productosFiltrados = menu.filter(item => item.category == categoria);
    console.log(productosFiltrados);

    const container = document.getElementById(containerId);
    const productosHTML = renderMenu(productosFiltrados);
    container.innerHTML = productosHTML;
    
}

// Ejecutar la función filtrarMenu para cada categoría una sola vez
document.addEventListener('DOMContentLoaded', () => {
    filtrarMenu('Small plates', 'smallplates');  
    filtrarMenu('Entrees', 'entreess');
    filtrarMenu('Desserts', 'dessert');
    filtrarMenu('Wine', 'wines');
    filtrarMenu('Beer', 'beers');
});
