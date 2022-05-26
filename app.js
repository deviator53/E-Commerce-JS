const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
 
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 45000,
        description: "Nike Air Force Footware, It feels like you are in the military.",
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 42000,
        description: "Nike Air Jordan Footware, The perfect pair for your feet.",
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 35000,
        description: "Nike Blazer Footware, Feel like a high blazer.",
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 34000,
        description: "Nike Crater Footware, The perfect pair for your feet.",
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 32000,
        description: "Nike Hippie, Makes you feel hippie.",
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuItems.forEach((item,index) =>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the chosen products
        choosenProduct = products[index]

        //change text of current product
         currentProductTitle.textContent = choosenProduct.title;
         currentProductDesc.textContent = choosenProduct.description;
         currentProductPrice.textContent = "N" + choosenProduct.price;
         currentProductImg.src = choosenProduct.colors[0].img;

         currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
         });
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src= choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{ 
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});
