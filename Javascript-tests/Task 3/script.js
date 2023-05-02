/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsers = document.getElementById('btn');

const getUserData = async () => {
  try {
    const response = await fetch(ENDPOINT);

    const userData = await response.json();

    return userData;

  } catch (error) {
    console.error(error);
  }
}

const generateUserCards = (users) => {

  const output = document.getElementById('output');
  
  users.forEach((user) => {
    const userId = user.login
    const userImage = user.avatar_url
    const userCard = document.createElement('div');
    const userName = document.createElement('h2');
    const userAvatar = document.createElement('img');

    userCard.setAttribute('class','user-card');
    userAvatar.setAttribute('class','user-avatar');
    userName.setAttribute('class','user-name');
    userAvatar.setAttribute('alt','Picture of a user');

    userName.innerHTML = userId;
    userAvatar.src = userImage;
    
    output.appendChild(userCard);
    userCard.appendChild(userName);
    userCard.appendChild(userAvatar);

})
  document.getElementById('message').remove();
  showUsers.setAttribute('disabled','disabled');
}

const main = async () => {

  const githubUsers = await getUserData();

  generateUserCards(githubUsers);
}

showUsers.addEventListener('click',main)
