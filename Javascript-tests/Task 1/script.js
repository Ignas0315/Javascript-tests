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

        const units = ['pounds (lb)', 'grams (g)', 'ounces (oz)'];

        units.forEach((unit) => {
            const outputCard = document.createElement('div')
            const outputInner = document.createElement('div')
            const outputValue = document.createElement('span');
            outputCard.setAttribute('class','output-card');

            outputInner.innerHTML = `${inputValue} kg weight in ${unit} is `;

            if(unit === 'pounds (lb)'){
                outputValue.innerHTML = `${inputValue * 2.2046} lb`;
            } else if (unit === 'grams (g)'){
                outputValue.innerHTML = `${inputValue / 0.001} g`;
            } else if (unit === 'ounces (oz)'){
                outputValue.innerHTML = `${inputValue * 35.274} oz`;
            }

            output.appendChild(outputCard);
            outputCard.appendChild(outputInner);
            outputInner.append(outputValue);

        })
    }
})




