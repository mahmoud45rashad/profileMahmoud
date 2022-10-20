let productsDom = document.querySelector('.img-1');

let products = [
    {
        id: 1,
        title: 'item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 3,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: '1 item',
        imageUrl: 'images/Untitled-3.png'
    }
]

function printAll (){
    for(let i =0; i <products.length;i++ ){
        productsDom.innerHTML += `<div class="col-md-4 col-6">
        <div class="articles-box ">
            <article>
                <img src="${products[i].imageUrl}" alt="">
                <h4>${products[i].title}</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit</p>
            </article>
            <div class="read-more">
               <a href="">live</a>
                
            </div>
        </div>
      </div>`
    }
}

printAll();
//----------------------------------------------------------------------------------------------------------------------------
let productsDom_2 = document.querySelector('.img-2');

let products_1 = [
    {
        id: 1,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 3,
        title: 'item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    },
    {
        id: 2,
        title: ' item',
        imageUrl: 'images/Untitled-3.png'
    }
]

function printAll_1 (){
    for(let i =0; i <products_1.length;i++ ){
        productsDom_2.innerHTML += `<div class="col-md-4 col-6">
        <div class="articles-box ">
            <article>
                <img src="${products_1[i].imageUrl}" alt="">
                <h4>${products_1[i].title}</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit</p>
            </article>
            <div class="read-more">
               <a href="">live</a>
                
            </div>
        </div>
      </div>`
    }
}

printAll_1();