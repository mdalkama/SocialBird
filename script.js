let hamburger = document.querySelector(".material-symbols-outlined");
let cards = document.querySelectorAll(".card");
        hamburger.onclick = function(){
            let navMenu = document.querySelector(".nav_bar");
            navMenu.classList.toggle("active");
        }

        const btn = document.querySelectorAll('.question_main');
        btn.forEach(question_main => {
                const arrow = question_main.querySelector('.icon');
                const answr = question_main.querySelector('.ans');
                question_main.onclick = function(){
                arrow.classList.toggle('rotate');
                answr.classList.toggle('hide');
            }
        })


const instagramBox = document.querySelector('#instagram .crausel_wrapper .crausel')
const facebookBox = document.querySelector('#facebook .crausel_wrapper .crausel')
const youtubeBox = document.querySelector('#youtube .crausel_wrapper .crausel')
instagramBox.innerHTML = '';
facebookBox.innerHTML = '';
youtubeBox.innerHTML = '';
const products = [
    { 
        id:1,
        category:'instagram',
        price:89,
        image:'89RS.001.jpeg'
    },
    {
        id:2,
        category:'instagram',
        title:'Premium 1:1 Ratio Instagram Post Design',
        price:149,
        image:'89RS.002.jpeg'
    },
    {
        id:3,
        category:'instagram',
        price:249,
        image:'89RS.003.jpeg'
    },
    { 
        id:4,
        category:'instagram',
        price:399,
        image:'89RS.004.jpeg'
    },    
    { 
        id:5,
        category:'facebook',
        price:89,
        image:'89RS.005.jpeg'
    },
    {
        id:6,
        category:'facebook',
        price:149,
        image:'89RS.006.jpeg'
    },
    {
        id:7,
        category:'facebook',
        price:249,
        image:'89RS.007.jpeg'
    },
    { 
        id:8,
        category:'facebook',
        price:399,
        image:'89RS.008.jpeg'
    },
    { 
        id:9,
        category:'youtube',
        price:89,
        image:'89RS.009.jpeg'
    },
    {
        id:10,
        category:'youtube',
        price:149,
        image:'89RS.010.jpeg'
    },
    {
        id:11,
        category:'youtube',
        price:249,
        image:'89RS.011.jpeg'
    },
    { 
        id:12,
        category:'youtube',
        price:249,
        image:'89RS.012.jpeg'
    },
    { 
        id:13,
        category:'youtube',
        price:399,
        image:'89RS.013.jpeg'
    }
]
products.forEach((e)=>{
    if(e.category == 'instagram'){
    instagramBox.innerHTML += `<a href="/productPage.html?id=${e.id}"><div style="background-image: url(${e.image})" class="insta_card card" id="insta_card${e.id}"></div></a>`
    }
    else if(e.category == 'facebook'){
        facebookBox.innerHTML += `<a href="/productPage.html?id=${e.id}"><div style="background-image: url(${e.image})" class="facebook_card" id="facebook_card${e.id}"></div></a>`
    }
    else if(e.category == 'youtube'){
        youtubeBox.innerHTML += `<a href="/productPage.html?id=${e.id}"><div style="background-image: url(${e.image})" class="youtube_card" id="youtube_card${e.id}"></div></a>`
    }    
})
