const valueone = document.querySelector(".flareexfi")
const valuetwo = document.querySelector(".bitrueusdt")
const valuethree = document.querySelector(".bitruesgb")
const button = document.querySelector(".btncrunch")
let sgbinit = document.querySelector(".sgbstart")
const sgbFinale = document.querySelector(".sgbinitp")
const sgbFinalep = document.querySelector(".sgbfinalep")
const displayStatus = document.querySelector(".sgbstatus")
let initexfi
let initusdt
let sgbfinal
let endresult
let sgbinitt


button.addEventListener("click", function(){
    initexfi = sgbinit.value * valueone.value
    initusdt = initexfi * valuetwo.value
    sgbfinal = initusdt/valuethree.value
    sgbinitt =  sgbinit.value
    endresult = sgbfinal - sgbinitt
    sgbFinale.innerHTML = sgbinitt
    sgbFinalep.innerHTML = sgbfinal
    displayStatus.innerHTML = endresult
})

