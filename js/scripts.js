const imageArray = [
    newImage('https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg', 'Pizza', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://assets.bonappetit.com/photos/57d6e27c2e9e46792492c789/master/pass/shake-shack-2800x2000.jpg', 'Hamburger', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://upload.wikimedia.org/wikipedia/commons/2/27/Mmm..._Tacos.jpg', 'Tacos', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://www.salepepe.it/files/2022/11/AA525736_alta-1140x636.jpg', 'Piadina', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://media-assets.lacucinaitaliana.it/photos/61fb1434f6b806549a638985/3:2/w_1410,h_940,c_limit/migliori-kebab-milano1.jpg', 'Kebab', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
];


for(let i = 0; i < imageArray.length; i++){

let card = document.createElement('div');

card.classList.add('card','Myhidden')

if(i == 0){
    card.classList.add('Myactive');
    card.classList.remove('Myhidden');

}

card.innerHTML = `
    ${imageArray[i]['url']}
        
    <div class="text-style">
        <h3>${imageArray[i]['title']}</h3>
        <p>${imageArray[i]['description']}</p>
    </div>
    `;

document.getElementById('main-card-container').append(card);

};

let cardList = document.querySelectorAll('.card');




let counter = 0;

document.getElementById('next-button').addEventListener('click', function(){
    
    document.querySelector('.card.Myactive').classList.add('Myhidden');
    document.querySelector('.card.Myactive').classList.remove('Myactive');

    if(counter < imageArray.length - 1){

        counter ++;

    }else{
        counter = 0;
    }

    cardList[counter].classList.remove('Myhidden');
    cardList[counter].classList.add('Myactive'); 
})


document.getElementById('prev-button').addEventListener('click', function(){
    
    document.querySelector('.card.Myactive').classList.add('Myhidden');
    document.querySelector('.card.Myactive').classList.remove('Myactive');

    if((counter !== imageArray.length) && (counter !== 0)){

        counter -= 1 ;

    }else{
        counter += imageArray.length - 1 ;
    }

    cardList[counter].classList.remove('Myhidden');
    cardList[counter].classList.add('Myactive'); 
})


//------ FUNCTIONS ---------------------------------------------

function newImage(urlI, title, description){

    imagesElement = {
        url: 
        `
        <img src="${urlI}" class="img-fix">
        `,

        title,

        description
    };

    return imagesElement;

}