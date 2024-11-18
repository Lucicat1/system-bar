let btn_diff = document.querySelector(".set-difficulte")
console.log(btn_diff)

let diff = [document.querySelector(".Economie span"), 
    document.querySelector(".Marketing span"), 
    document.querySelector(".Chat span"), 
    document.querySelector(".Cuisine span"), 
    document.querySelector(".Service span")]

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

btn_diff.addEventListener("click", function(){
    for (let i = 0; i<5; i++) {
        diff[i].innerText = getRandomInt(4)
    }
})