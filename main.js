//1.
//style.textDecoration = 'line-through' // strikethrough

function strikeThrough(){
    // let listItem = document.querySelector('li'); //selects the li in your HTML
    let listItem = document.querySelector('#arguments li'); //selects the first li from the #arguments list
    listItem.style.textDecoration = 'line-through';
}

strikeThrough();

//2.

//3.
/*
function seImage(id, url)
id: 'string'
url: 'string'

*/

function setImage(id, url){
    let img = document.querySelector(`#${id}`)
    img.src = url;
    img.style.height = '200px';
}


//4.
setImage("image-1", "https://surlybikes.com/uploads/bikes/_medium_image/Lowside_BK0534_Background-2000x1333.jpg");


setImage("image-2", "https://cdn.shopify.com/s/files/1/0773/9113/products/raw-xl-wythe-fixie-bike-28030031626320_2000x.jpg?v=1651579463");


setImage("image-3", "https://media.wired.com/photos/61afb905d184762c75e00411/master/pass/Gear-Jackbrabbit-Bike-Yellow-top.jpg");


//5.
function remover(){
    let li = document.querySelector('li');
    li.remove();
}

//6.
remover();
remover();

/*
function
2 parameters
fontSize : string
id : string
*/

function setTextSize(fontSize, id){
    let text = document.querySelector(id);
    text.style.fontSize = fontSize;
}

setTextSize('50px', 'h1');
setTextSize('40px', '#heading');
setTextSize('50px', '#thing-1');

//PART 2
//1.

function addChild(element){
    let list = document.querySelector("#arguments");
    list.appendChild(element);
}

let newElement = document.createElement('li');
newElement.innerText = "Woah, it's a list item!";
addChild(newElement);

//use addChild function to add image element

/*

textCreator()
1 parameter
text : string

create list item with text that is parameter of function

return li //HTML element

*/
//PART 3

//1.
function textCreator(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

let testItem = textCreator("Hi globe");

addChild(testItem);


function createheader(hSize, text){

    //let header = document.createElement('h' + 'hSize'); //same thing with concatenation

    let header = document.createElement(`h${hSize}`);
    header.innerText = text;
    return header;

    
}

let headerTest = createHeader('2', 'some text');
addChild(headerTest);


