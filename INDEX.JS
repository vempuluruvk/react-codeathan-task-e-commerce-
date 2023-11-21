let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'MUTTON BIRYANI',
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 350
    },
    {
        id: 2,
        name: 'MOMOS',
        image: 'https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg',
        price: 199
    },
    {
        id: 3,
        name: 'CHOCO CAKE',
        image: 'https://cakewithname.net/thumbnail/Chaco/120/oreo-birthday-cake-for-Chaco.jpg',
        price: 120
    },
    {
        id: 4,
        name: 'PIZZA',
        image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        price: 250
    },
    {
        id: 5,
        name: 'MUTTON KABAB',
        image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 299
    },
    {
        id: 6,
        name: 'SOUP',
        image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
        price: 129
    },
    {
        id: 7,
        name: 'NOODLES',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 180
    },
    {
        id: 8,
        name: 'TONA FISH',
        image: 'https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 180
    },
    {
        id: 9,
        name: 'CHICKEN BIRYANI',
        image: 'https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=',
        price: 250
    },
    {
        id: 10,
        name: 'MOTTON SOUP',
        image: 'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price: 150
    },
    {
        id: 11,
        name: 'GOBI MANCHURIAN',
        image: 'https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.jpg?s=612x612&w=0&k=20&c=lZvW1lWr03mQszDbx4v59IAnxWacQ_Ti275hjj18hcE=',
        price: 120
    },
    {
        id: 12,
        name: 'FRIED RICE',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price: 180
    },
    {
        
        id: 13,
        name: 'OREO MILKSHAKE',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlsayUyMHNoYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price: 120
    },
    {
        id: 14,
        name: 'GRAPE JUICE',
        image: 'https://media.istockphoto.com/id/171252820/photo/grape-juice.jpg?s=612x612&w=0&k=20&c=89XNYSxmQ5NER4GplazMFQTD0b5wE40qHcQCgN9pDKM=',
        price: 120
    },
    {
        id: 14,
        name: 'WATER BOTTLES',
        image: 'https://media.istockphoto.com/id/1146317176/photo/several-drinking-water-bottles-on-white-background.jpg?s=612x612&w=0&k=20&c=yCiJhK3-E9PCD0hcFHG7Sr1PgtdubHqAZR5FNf3IoJE=',
        price: 50
    }


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}     
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function printContent() {
    window.print();
}

