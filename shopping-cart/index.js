
let shoppingCart = [];
let products = document.getElementsByTagName('button');
let cartProducts = '';

function renderTheCards() {
    for (let i = 0; i < products.length; i++) {
        products[i].addEventListener('click', function (event) {
            let product = event.target.parentNode.getAttribute('product');

            //checking if the product is Existing in the array 
            if (!isExist(shoppingCart, product)) {
                shoppingCart.push(product);
            } else {

                articleWarning(products[i].parentNode);
                toolTip(products[i], product)
            }

            updateCart();

        });
    }
}

renderTheCards();
//Function declarations, add code inside {}
function updateCart() {
    listProductsInCart();
    document.getElementById('products').innerHTML = cartProducts;
    document.getElementById('productsInCart').innerHTML = shoppingCart.length;
    renderDeleteButton();
}

function listProductsInCart() {
    cartProducts = '';
    for (let i = 0; i < shoppingCart.length; i++) {
        cartProducts += '<li><p data-items = "' + shoppingCart[i] + '"> &#128465; </p><span class="product-title">Title: </span>' + shoppingCart[i] + '</li>';

    }

}
//<span>&#128465;</span>
document.getElementById('open-cart').addEventListener('click', function () {
    document.getElementById('cart').classList.toggle('hide');
});

function renderDeleteButton() {
    let items = document.querySelectorAll('#products > li');
    if (items !== undefined && items !== null) {
        items.forEach((element) => {
            let figure = element.childNodes[0];
            let text = element.childNodes[0].getAttribute('data-items');

            figure.addEventListener('click', () => {
                let articles = document.querySelectorAll('.cards > .card');
                deleteListing(shoppingCart, text);

                articles.forEach(article => {

                    if (article.getAttribute('product') === text && shoppingCart.includes(text) == false) {
                        deleteWarning(article);
                        article.querySelector('button').classList.remove('tooltip');
                        article.querySelector('button').innerHTML = ' Add to cart ';

                    }
                });
                listProductsInCart();
                updateCart();
            });
        });
    }
}

// deleting the items from the shop cart
function deleteListing(arr, item) {
    if (arr.includes(item)) {
        let itemsIndex = arr.indexOf(item);
        arr.splice(itemsIndex, 1);
    }
}
//
function isExist(arr, object) {
    let obj = arr.includes(object) ? true : false;
    return obj;
}


function toolTip(button, title) {
    if (!button.classList.contains('tooltip')) {
        let span = document.createElement('span');
        span.classList.add('tooltiptext');
        span.textContent = `'${title}' already Added!`;
        button.classList.add('tooltip');
        button.appendChild(span);
    }
}

function articleWarning(article) {
    let exist = article.querySelector('.already_exist');
    let createText = document.createElement('p');
    if (exist == null) {
        createText.textContent = 'Already exists in the cart! ';
        createText.classList.add('already_exist');
        article.appendChild(createText);
    }
}


function deleteWarning(article) {

    if (article.querySelector('.already_exist') !== null) {
        article.querySelector('.already_exist').remove();
    }
}