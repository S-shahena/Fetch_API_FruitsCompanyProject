


let fruitsContent = document.getElementById("fruitsContent")


// let fruits = [

//     {
//         title:"Ginger Gold Apples",
//         img:"https://scontent.fcgp29-1.fna.fbcdn.net/v/t1.6435-9/119124748_4439612596074641_5092297429214398597_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jlp3_BTeGiUQ7kNvwFMtBke&_nc_oc=AdlvLm32XJFSdkuI2DdKcUtixrQinqzTZLOD_M7CumqQemKMt0PAPzgc38bEQVuGSlo&_nc_zt=23&_nc_ht=scontent.fcgp29-1.fna&_nc_gid=SdWFt7c9vu0kObBh1kH0Rg&oh=00_AfLu2KlvoXHWj_JZGKGiq3PZyFocXpVUPzMG1mzryV7sgA&oe=684163B9",
//         description:"These particular apples are crisp, cream colored and have a sweet and mildly tart taste. Ginger Gold Apples are considered one of the best early season apples to enjoy!",
//         cost:"$34.95"
//     },

//     {
//         title:"Orange Juice",
//         img:"https://graphicsfamily.com/wp-content/uploads/edd/2023/12/Orange-Juice-Social-Media-Post-Design-Template-999x999.jpg",
//         description:"Freshen up your social media game with GraphicsFamily’s latest freebie – the “Orange Juice Social Media Post Design Template” PSD file. Crafted to perfection, this template offers a vibrant and refreshing design that’s as easy to customize as pouring a glass of your favorite citrus delight.",
//         cost:"$33.00"
//     },

//     {
//         title:"Fresh Pineapple",
//         img:"https://naturals.pk/cdn/shop/products/FreshPineapple.jpg?v=1612853880",
//         description:"Fresh ripe pineapples should have green, fresh-looking leaves in a small, compact crown, and a leaf should be easy to remove if fully ripe",
//         cost:"$39"
//     },
//     {
//         title:"Japanese Grape Varieties",
//         img:"https://int.japanesetaste.com/cdn/shop/articles/a-guide-to-the-delectable-world-of-japanese-grape-varieties-japanese-taste.jpg?v=1707915035&width=960",
//         description:"Grapes are a beloved fruit worldwide, with a rich history and countless varieties. Japan in particular is also known for its meticulous approach to fruit cultivation, especially when it comes to high-end fruits. Japan’s particular fruit cultivation has led the country to have its own vast share of unique grapes. In this article, we'll delve into the fascinating world of Japanese grapes, their varieties, flavors, and much more.",
//         cost:"$41.20"
//     },

//     {
//         title:"Watermelons at Deira Fish Market in Dubai, UAE",
//         img:"https://www.encirclephotos.com/wp-content/uploads/UAE-Dubai-Watermelons-Deira-Fish-Market-1440x828.jpg",
//         description:"I was surprised to see this watermelon display at the Deira Fish Market in Dubai, UAE, because I didn’t think the Persian Gulf was conducive to growing them. But then I learned Iran is the world’s third largest producer of the fruit, more than twice the cultivation of the United States. I was further surprised when I heard a persistent rumor that Arabian watermelons had been injected with HIV that causes AIDS.",
//         cost:"$22.90"
//     },

//     {
//         title:"Guava",
//         img:"https://bizweb.dktcdn.net/thumb/large/100/496/425/products/oi.jpg?v=1696928422427",
//         description:"XAXA Co. Ltd is located in HCMC, Vietnam and specializes in trading fruits for both domestic and oversea market.",
//         cost:"$9.67"
//     },

//     {
//         title:"Dragon Fruit 'Magenta'",
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVFkREbaBo01FzvFZ4HbBvR54PenUK1XMoA&s",
//         description:"A new and rare form of this exotic fruit that grows on a climbing epiphytic cactus in hot climates. The beautiful and bizarre fruit is shaped like a fiery dragon's breath with exquisite curls of brilliant coloured skin that covers bright magenta-coloured flesh in early summer.",
//         cost:"$ 45.09"
//     },

//     {
//         title:"Customers who viewed this item also viewed",
//         img:"https://m.media-amazon.com/images/I/518AsalVEEL._AC_UF1000,1000_QL80_.jpg",
//         description:"Healthy Vibe Lychee Fruit Plant | Live Tropical Fruit Plant | Sweet & Juicy Lychee Tree for Home Garden | Easy to Grow & Maintain",
//         cost:"$34.99"
//     },

//     {
//         title:"A Grade Fresh Pomegranate",
//         img:"https://5.imimg.com/data5/SELLER/Default/2023/1/TT/SO/IF/55952514/pomegranate-500x500.png",
//         description:"Fresh Pomegranate is one of the important fruit crops commercially grown in the state of Maharashtra. The main commercially grown varieties are Bhagwa , Arkata & Ganesh, Bhagwa is widely known for its soft seed, Dark red colour, and extremely delicious.",
//         cost:"$32.37"
//     },

//     {
//         title:"papaya",
//         img:"https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=170667a&w=is&k=20&c=3vMnM5Zo3va3fMdf6KDHphiznRb9TwZQDWUhjMt9Iu0=",
//         description:"Papayas are usually grown from seed. Their development is rapid, with fruit being produced before the end of the first year. Under favourable conditions, a plant may live five years or more.",
//         cost:"$5.47"
//     },






// ]


// let fruitsConvertedJson = JSON.stringify(fruits)

// localStorage.setItem( "FruitsData", fruitsConvertedJson)

let fruitsCompany = JSON.parse(localStorage.getItem("FruitsData"))



fruitsCompany.forEach(fruit =>{

    let div = document.createElement("div")
    div.id ="fruitsCard"
fruitsContent.appendChild(div)


    div.innerHTML = `
         <h3>${fruit.title}</h3>
            <img src="${fruit.img}" alt="">
            <p class="description">${fruit.description}</p>
            <p class="costP">${fruit.cost}</p>
    
    `


})

// /   const userString = JSON.stringify(user)
//   localStorage.setItem( "userData" ,  userString );

//   let userStr = localStorage.getItem("userData")
//   let mainData = JSON.parse(userStr)
// console.log(userStr)
