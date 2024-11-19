let btn_diff = document.querySelector(".set-difficulte")
let import_save = document.querySelector(".import_save")
let diff_list = [ , , , , ]
let save_file = document.getElementById("save_file")
let reader = new FileReader();
let bar_progres = document.getElementById("money-bar")

function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    bar_progres.value = reader.result;
  };
  }

import_save.addEventListener("click", function () {
    readFile(save_file)
})

let diff = [document.querySelector(".Economie span"), 
    document.querySelector(".Marketing span"), 
    document.querySelector(".Chat span"), 
    document.querySelector(".Cuisine span"), 
    document.querySelector(".Service span")];


function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }


// Génère des difficultées aléatoire entre 1 et 4 pour les 5 domaines
btn_diff.addEventListener("click", function(){
    for (let i = 0; i<5; i++) {
        diff_list[i] = getRandomInt(4)
        diff[i].innerText = diff_list[i]
    }
})