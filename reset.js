let reset = document.querySelector(".reset")

reset.addEventListener("click", function() {
    for (let i=0; i < succes.length; i++) {
        succes[i].value = 0
    }
})