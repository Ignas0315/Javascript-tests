/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let counterValue = parseInt(document.getElementById("btn__state").textContent);

document.getElementById('btn__element').addEventListener('click', () => {

    counterValue++;
    document.getElementById('btn__state').innerHTML = counterValue;
    
})