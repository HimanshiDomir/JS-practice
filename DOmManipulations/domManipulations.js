

// 1. 

let AshHoodie = document.querySelector('.art-1 > h3'); 
    AshHoodie.innerText = 'Potato';
// Tips
// 2. 
let menu = document.querySelectorAll('header nav a'); 
    menu[0].innerText = "Start"; 
// 3. 
    menu[2].innerText = "Mail Us "; 
// 4.
let fireHoodie = document.querySelector('.art-2 h3');
let fireHoodieParagraph = document.querySelector('.art-2 p');
fireHoodie.innerText = 'Apple';
fireHoodieParagraph.innerText = "Sinus Apple"
// 5. 
let fireHoodieBtn = document.querySelector('.art-2 button');
fireHoodieBtn.style.backgroundColor = "orange";
// Tips
// 6. 
let waterProduct = document.getElementsByClassName('art-3')[0];
waterProduct.style.backgroundColor = "lightBlue";

// 7. 
    let adress = document.querySelectorAll('footer > section > article');
        adress[1].lastElementChild.innerHTML = "Vasaparken 60389 <br> Norrköping "
// 8. 
        let allParagraph  = document.getElementsByTagName('P'); 

            for (let i = 0; i < allParagraph.length; i++) {
                const element = allParagraph[i];
                    element.style.color = "#f55";
            }   

// Tips
// 9. 
            let allButtons = document.getElementsByTagName('BUTTON'); 
            for(let i = 0; i < allButtons.length; i++){
                const button = allButtons[i]; 
                button.innerText = "Add to cart";
            }
// 10. 
let menuItem = document.querySelectorAll('header nav a'); 
    menu[0].classList.add('active');
// Tips
// 11. 
let logo = document.querySelector('header > img'); 
        logo.classList.remove('logo');
            
// Tips
// Add Content
// 12. 
let headerMeny = document.querySelector('header nav a'); 
headerMeny.insertAdjacentHTML('afterend', '<a href="#">nytt Alternative</a> '); 
// 13. 
      

let main = document.querySelector('main');
let newProduct = document.createElement('article');
            newProduct.setAttribute('class', 'art-4');
            main.appendChild(newProduct);

    newProduct.insertAdjacentHTML('beforeend', '<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>');
    newProduct.insertAdjacentHTML('beforeend', '<h2>Sinus Hoodie</h2>');
    newProduct.insertAdjacentHTML('beforeend', '<h3>Forrest</h3>');
    newProduct.insertAdjacentHTML('beforeend', '<p>	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>');
    newProduct.insertAdjacentHTML('beforeend', '<button>buy</button>');

// Tips
// Events
// 14. 
let logotypen = document.querySelector('header > img'); 
logotypen.addEventListener('click', ()=>{
    console.log('found you!');
}); 
// 15. 
let articles = document.querySelectorAll('main > article');
articles.forEach(article => {
    let title = article.querySelector('h3'); 
    article.addEventListener('click', ()=> {
        console.log(`Hi, Im article ${title.innerText}`);
    });

});