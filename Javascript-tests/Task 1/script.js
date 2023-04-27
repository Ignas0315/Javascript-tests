/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = document.getElementById('search').value;
    const output = document.getElementById('output');
    if(isNaN(inputValue)){
        if(document.getElementById('bad-input')){
            document.getElementById('bad-input').remove();
        }
        output.innerHTML= '';
        const badInput = document.createElement('div');
        badInput.setAttribute('id','bad-input');
        badInput.textContent = '* Incorrect input value';
        form.appendChild(badInput);
        
    } else {
        if(document.getElementById('bad-input')){
            document.getElementById('bad-input').remove();
        }        
        output.innerHTML = '';

        const poundsCard = document.createElement('div')
        const poundsInner = document.createElement('div')
        const poundsOutput = document.createElement('span');
        poundsCard.setAttribute('class','output-card');
        poundsInner.innerHTML = `${inputValue} kg weight in pounds (lb) is `;
        poundsOutput.innerHTML = `${inputValue * 2.2046} lb`;
        output.appendChild(poundsCard);
        poundsCard.appendChild(poundsInner);
        poundsInner.append(poundsOutput);

        const gramsCard = document.createElement('div')
        const gramsInner = document.createElement('div')
        const gramsOutput = document.createElement('span');
        gramsCard.setAttribute('class','output-card');
        gramsInner.innerHTML = `${inputValue} kg weight in grams (g) is `;
        gramsOutput.innerHTML = `${inputValue / 0.001} g`;
        output.appendChild(gramsCard);
        gramsCard.appendChild(gramsInner);
        gramsInner.append(gramsOutput);

        const ouncesCard = document.createElement('div')
        const ouncesInner = document.createElement('div')
        const ouncesOutput = document.createElement('span');
        ouncesCard.setAttribute('class','output-card');
        ouncesInner.innerHTML = `${inputValue} kg weight in ounces (oz) is `;
        ouncesOutput.innerHTML = `${inputValue * 35.274} oz`;
        output.appendChild(ouncesCard);
        ouncesCard.appendChild(ouncesInner);
        ouncesInner.append(ouncesOutput);
    }
})




