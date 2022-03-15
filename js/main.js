const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },

    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": null,
        "author": {
            "name": "Roberto Lupetti",
            "image": "https://unsplash.it/300/300?image=218"
        },
        "likes": 35,
        "created": "2021-03-05"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=654",
        "author": {
            "name": "Davide Meneghini",
            "image": "https://unsplash.it/300/300?image=444"
        },
        "likes": 77,
        "created": "2021-03-05"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=987",
        "author": {
            "name": "Vanessa Spina",
            "image": "https://unsplash.it/300/300?image=870"
        },
        "likes": 12,
        "created": "2021-03-05"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=322",
        "author": {
            "name": "Alice Caprotti",
            "image": "https://unsplash.it/300/300?image=777"
        },
        "likes": 110,
        "created": "2021-03-05"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Gianmarco Sarcone",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 114,
        "created": "2021-03-05"
    },
];

const containerPosts = document.getElementById("container");

//!Ciclo con il foreach i vari oggetti e per ognuno genero il post con le sue proprietà e lo inserisco nel HTML
posts.forEach(Element => {
    containerPosts.innerHTML += generatePostContent(Element);
});


//!Funzione che ritorna il codice strutturale del HTML e che tramite destrutturazione di un oggetto ci permette di compilare DINAMICAMENTE
//!i campi che ci servono per ogni post.
function generatePostContent(postElement){

    const {id, content, media, author, likes, created} = postElement;

    return `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${author.image}" alt="${author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${author.name}</div>
                <div class="post-meta__time">${created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${content}</div>
    <div class="post__image">
        <img src="${media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" data-postid="${id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
};

const postIdArray = [];

const likeButtons = document.getElementsByClassName("js-like-button");
// console.log(likeButtons);
const likeCounters = document.getElementsByClassName("js-likes-counter");
// console.log(likeCounters);

for (let i = 0; i < likeButtons.length; i = i + 1){
    //!Element è come dire likeButtons[i]
    const Element = likeButtons[i];
    const counter = likeCounters[i];
    
    //!Aggiungo eventlistner a likebuttons[i] e aggiungo funzione event per togliere la funzionalita di base del bottone (event.preventdefault)
    //! quella che ogni volte che cliccao per mettere like mi portava a inizio pagina
    Element.addEventListener("click", (Event) => {
        Event.preventDefault();

        if(Element.classList.contains("like-button--liked")){

            Element.classList.remove("like-button--liked");
            counter.innerHTML = parseInt(counter.innerHTML) - 1;
            postIdArray.splice(postIdArray.indexOf(Element.getAttribute("data-postid")));

        }else{

            Element.classList.add("like-button--liked");
            counter.innerHTML = parseInt(counter.innerHTML) + 1;

            postIdArray.push(Element.getAttribute("data-postid"));
            console.log(postIdArray);
        }

    })
};


