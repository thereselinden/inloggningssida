const signInBtn = document.getElementById('signInBtn');

//users saved in localStorage
const users = [
  {
    username: 'Fredrik',
    password: '1234',
  },
  {
    username: 'Therese',
    password: '1234',
  },
];
//JSON
//JSON.stringify method converts a JavaScript value to a JSON string,
//JSON.parse() the data becomes a JavaScript object.

// Put object to storage
localStorage.setItem(users, JSON.stringify(users));
// Retrive object from storage
const getUsers = localStorage.getItem(users);
// create JavaScript object
const parseUsers = JSON.parse(getUsers);

parseUsers.find(user => {
  console.log(user.username);
  if (user.username === 'Therese') {
    console.log('Användare finns!!!!');
  } else {
    console.log('Användaren finns INTE!!!!');
  }
});

// Hide login page and show welcome page when sign in button clicked
signInBtn.addEventListener('click', () => {
  const loginPage = document.getElementById('loginPage');
  loginPage.style.display = 'none';

  const welcomePage = document.getElementById('welcomePage');
  welcomePage.style.display = 'flex';
});

const toggleHeaderImage = () => {
  const headerImage = image.getAttribute('src');

  headerImage === '../assets/lock.png'
    ? image.setAttribute('src', '../assets/unlock.png')
    : image.setAttribute('src', '../assets/lock.png');
};

// Get input Value, capitalize first letter
// ONLY SIGN IN IF USERNAME AND PASSWORD ADDED
// and if user is created (stored in localstorage)
const signIn = () => {
  // if inputValue find i users then ... {
  //   hej usernamn + logga ut knapp
  // } else {
  //   felmeddelande
  // }
  const inputUsername = document.querySelector('#username').value;
  const capitalizeUsername =
    inputUsername.charAt(0).toUpperCase() + inputUsername.slice(1);

  document.getElementById(
    'userFirstName'
  ).innerHTML = `Hej, ${capitalizeUsername}`;

  toggleHeaderImage();
};

const signOut = () => {
  location.reload();
};
