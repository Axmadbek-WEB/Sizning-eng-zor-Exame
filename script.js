// const  headerSelect1=document.getElementById("header_select1")
// const  headerSelect2=document.getElementById("header_select2");
// const  input=document.getElementById("input");
// const  carts=document.getElementById("carts");
// const  cart=document.getElementById("cart");

// const n1 = document.getElementById("n1");
// const n2 = document.getElementById("n2");
// const inp = document.getElementById("search");
// let totalPrice = 0;

// async function gg() {
//         const mahsulotlar = await fetch('https://fakestoreapi.com/products');
//         const mahsulot = await mahsulotlar.json();
//         display(mahsulot);
// }


// input.addEventListener("input", ()=>{
//     const mahsulotla = mahsulotlar.filter((e) =>
//         e.title.toLo
//     )
// })

// function display(mahsulotlar) {
//     const cardsContainer = document.getElementById('cards');
//     cardsContainer.innerHTML = '';
//     mahsulotlar.forEach(data => {
//         const card = document.createElement('div');
//         card.className = 'card';

//         card.innerHTML = `
//             <img src="${data.image}" alt="" width="200">
//             <h2>${data.title}</h2>
//             <p>Kategoriya: ${data.category}</p>
//             <h4>Narxi: ${data.price}</h4>
//         `;
//         cardsContainer.appendChild(card);
//     });
// }
// gg();


// const n1 = document.getElementById("n1");
// const n2 = document.getElementById("n2");
// const inp = document.getElementById("search");
// let totalPrice = 0;

// async function fetchA() {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const prod = await response.json();
//         // console.log(prod);
//         display(prod);
// }


// inp.addEventListener("input", ()=>{
//     const ser = prod.filter((e) =>
//         e.title.toLo
//     )
// })

// function display(prod) {
//     const cardsContainer = document.getElementById('cards');
//     cardsContainer.innerHTML = '';
//     prod.forEach(data => {
//         const card = document.createElement('div');
//         card.className = 'card';

//         card.innerHTML = `
//             <img src="${data.image}" alt="" width="200" class="img">
//             <h2>${data.title}</h2>
//             <p>Kategoriya: ${data.category}</p>
//             <h4>Narxi: ${data.price}</h4>
//         `;
//         cardsContainer.appendChild(card);
//     });
// }
// fetchA();



const kategoriya = document.getElementById("kategoriya");
const saralash = document.getElementById("saralash");
const search = document.getElementById("search");
let things;


fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => {
        things = json;
        productsView(json);
    });


function productsView(product) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    product.forEach((gg) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `

            <img src="${gg.image}" alt="${gg.title}" class="img">
            
            <h3>${gg.title}</h3>

            <h4>Kategoriya: ${gg.category}</h4>

            <p>Narxi: ${gg.price}$</p>

        `;
        cardsContainer.appendChild(card);
    });
}


search.addEventListener("input", () => {
    const searchResult = things.filter((e) =>
        e.title.toLowerCase().includes(search.value.toLowerCase().trim())
    );
    productsView(searchResult);
});


kategoriya.addEventListener("change", () => {
    if (kategoriya.value === "Hama Kategoriyalar") {
        productsView(things); 
    } else {
        const filtered = things.filter((e) =>
            e.category.toLowerCase().includes(kategoriya.value.toLowerCase())
        );
        productsView(filtered); 
    }
});

saralash.addEventListener("change", () => {
    let sorted = [];
    if (saralash.value === "Kotarilish boyicha") {
        sorted = [...things].sort((a, b) => a.price - b.price);
    } else if (saralash.value === "Kamayish boyicha") {
        sorted = [...things].sort((a, b) => b.price - a.price);
    } else {
        sorted = things; 
    }
    productsView(sorted);
});
