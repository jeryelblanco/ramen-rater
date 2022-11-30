const ramenMenu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const ramenImg = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRes = document.querySelector(".restaurant")
const ramenRating = document.getElementById("rating-display")
const ramenComment = document.getElementById("comment-display")

// const ramen = {
//     name: "noodles"
// }
// console.log(ramen.name)
// GET request
fetch("http://localhost:3000/ramens")
.then(request => request.json())
.then(data => {
    ramenImg.src = data[0].image
    ramenName.innerText = data[0].name
    ramenRes.innerText = data[0].restaurant
    ramenRating.innerText = data[0].rating
    ramenComment.innerText = data[0].comment

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