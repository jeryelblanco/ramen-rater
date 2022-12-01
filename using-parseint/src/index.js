const ramenMenu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const ramenImg = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRes = document.querySelector(".restaurant")
const ramenRating = document.getElementById("rating-display")
const ramenComment = document.getElementById("comment-display")
const increaseBtn = document.getElementById("increase-btn")

// const ramen = {
//     name: "noodles"
// }
// console.log(ramen.name)
// GET request




const image = document.createElement("img")
ramenMenu.append(image)
image.src = "https://thewoksoflife.com/wp-content/uploads/2015/05/vegetable-ramen.jpg"
image.addEventListener("click", ()=>{
ramenImg.src = "https://thewoksoflife.com/wp-content/uploads/2015/05/vegetable-ramen.jpg"
ramenName.innerText = "New Ramen"
ramenRes.innerText = "Ramen Restaurant"
ramenRating.innerText = 0
ramenComment.innerText = "Love this"
})
console.log(typeof(parseInt(increaseBtn.innerText)))
console.log(typeof(parseInt(ramenRating.innerText)))


fetch("http://localhost:3000/ramens")
.then(request => request.json())
.then(data => {
    // ramenImg.src = data[0].image
    // ramenName.innerText = data[0].name
    // ramenRes.innerText = data[0].restaurant
    // ramenRating.innerText = data[0].rating
    // ramenComment.innerText = data[0].comment

    data.forEach((ramen, index) => {
        const img = document.createElement("img")
        ramenMenu.append(img)
        img.src = ramen.image
        img.addEventListener("click", ()=>{
        ramenImg.src = ramen.image
        ramenName.innerText = ramen.name
        ramenRes.innerText = ramen.restaurant
        ramenRating.innerText = ramen.rating
        ramenComment.innerText = ramen.comment
        })
    })

})
// const firstInt = parseInt(increaseBtn.innerText)
let count = 0;
increaseBtn.addEventListener("click", ()=>{
    if(count < 10){
    count++
    console.log(count)
    ramenRating.innerText = count
    increaseBtn.innerText = parseInt(increaseBtn.innerText) + count
    }
})








const newRamenForm = document.getElementById("new-ramen")
const newName = document.getElementById("new-name")
const newRes = document.getElementById("new-restaurant")
const newImg = document.getElementById("new-image")
const newRating = document.getElementById("new-rating")
const newComment = document.getElementById("new-comment")

newRamenForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName.value,
            restaurant: newRes.value,
            image: newImg.value,
            rating: newRating.value,
            comment: newComment.value
        })
    })
})

