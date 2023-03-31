const form = document.querySelector('form');
const ul = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = form.elements.product;
    const quantity = form.elements.qty;
    grocery(product.value, quantity.value);
})

const grocery = (product, qty) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `${qty} ${product}`
    form.reset();
}

// const form = document.querySelector('form');

// const ul = document.querySelector('ul');

// const pdtInput = document.querySelector('#product');

// const qtyInput = document.querySelector('#qty');

// let product = 0;

// let quantity = 0;



// form.addEventListener('submit', (e) => {

//     e.preventDefault();



//     product = pdtInput.value;

//     quantity = qtyInput.value;



//     const li = document.createElement('li');

//     li.innerText = `product: ${product} quantity: ${quantity}`;

//     ul.appendChild(li);



//     form.reset();

// })