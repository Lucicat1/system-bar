
let input_fin = document.querySelector(".fin")
let succes = [document.getElementById("Succes-eco"), 
    document.getElementById("Succes-mark"), 
    document.getElementById("Succes-chat"), 
    document.getElementById("Succes-cuisine"), 
    document.getElementById("Succes-service")];

let bar_progres = document.getElementById("money-bar")
let bonus_argent = 1
let bonus_client = 4


input_fin.addEventListener("click", function () {
    let roll_result = getSuccesTotal(succes)
    let argent = getMoneyGained(roll_result)
    console.log(argent)
    bar_progres.value = argent
})

function getSuccesTotal (list) {
    let succes_tot = 0
    for (let i=0; i < list.length; i++) {
        succes_tot += succes[i].value - diff_list[i]
    }
    succes_tot += 4
    console.log(succes_tot)
    return succes_tot
}

function getMoneyGained (reussite) {
    return reussite * bonus_argent * 75
}