/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const getCarsData = async () => {
    try {

        const response = await fetch(ENDPOINT);

        const carsData = await response.json();

        return carsData;
    } catch (error) {
        console.error(error);
    }
}

const generateCarBrandCards = (carBrands) => {

    const output = document.getElementById('output');

    carBrands.forEach((carBrand) => {
        
        const brandCard = document.createElement('div');
        const brandHeading = document.createElement('h2');
        const brandModels = document.createElement('p');
        const modelHolder = document.createElement('ul');
        brandHeading.innerHTML = carBrand.brand;
        carBrand.models.forEach((model) => {
            const modelEl = document.createElement('li');
            modelEl.innerHTML = model;
            modelHolder.appendChild(modelEl);
        });

        brandCard.setAttribute('class','brand-card');
        brandModels.setAttribute('class','models');
        
        brandModels.innerHTML= "Available models:";
        
        output.appendChild(brandCard);
        brandCard.appendChild(brandHeading);
        brandCard.appendChild(brandModels);
        brandCard.appendChild(modelHolder);

    })
}

const main = async () => {

    const carsData = await getCarsData();
  
    generateCarBrandCards(carsData);
  }

main();

