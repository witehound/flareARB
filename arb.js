const valueone = document.querySelector(".flareexfi")
const valuetwo = document.querySelector(".bitrueusdt")
const valuethree = document.querySelector(".bitruesgb")
const button = document.querySelector(".btncrunch")
let sgbinit = document.querySelector(".sgbstart")
const sgbFinale = document.querySelector(".sgbinitp")
const sgbFinalep = document.querySelector(".sgbfinalep")
const displayStatus = document.querySelector(".sgbstatus")
let initexfi, initusdt, sgbfinal, endresult, sgbinitt

const valueoneback = document.querySelector(".bitrueusdtback")
const valuetwoback = document.querySelector(".bitrueexfiback")
const valuethreeback = document.querySelector(".flaresgbback")
const button2 = document.querySelector(".btncrunch2")
let sgbinitback = document.querySelector(".sgbstartback")
const sgbFinaleback = document.querySelector(".sgbinitpback")
const sgbFinalepback = document.querySelector(".sgbfinalepback")
const displayStatusback = document.querySelector(".sgbstatusback")
let initexfiback, initusdtback, sgbfinalback, endresultback, sgbinittback


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

button2.addEventListener("click", function(){
    initexfiback = sgbinitback.value * valueoneback.value
    initusdtback = initexfiback / valuetwoback.value
    let exfiDeduct = initusdtback - 0.1
    sgbfinalback = exfiDeduct * valuethreeback.value
    sgbinittback =  sgbinitback.value
    endresultback = sgbfinalback - sgbinittback
    sgbFinaleback.innerHTML = sgbinittback
    sgbFinalepback.innerHTML = sgbfinalback
    displayStatusback.innerHTML = endresultback
})

