
//make a event listner for onclick 
document.querySelector('button').addEventListener('click',getAnime)

function getAnime(){
    fetch('https://api.jikan.moe/v4/random/characters')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.data.name
        document.querySelector('img').src = data.data.images.jpg.image_url
        document.querySelector('h3').innerText = data.data.about
    })
}



// fetch('https://api.jikan.moe/v4/random/characters')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     document.querySelector('h2').innerText = data.data.name
//     document.querySelector('img').src = data.data.images.webp.small_image_url
//     document.querySelector('h3').innerText = data.data.about
// })