const signInBtn = document.getElementById('signInBtn');
// const headerImage = document.getElementById('image');
// console.log('headerImage', headerImage);

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

// Hide login-page and show welcome page
signInBtn.addEventListener('click', () => {
  const loginPage = document.getElementById('loginPage');
  loginPage.style.display = 'none';

  const welcomePage = document.getElementById('welcomePage');
  welcomePage.style.display = 'flex';
});

const toggleHeaderImage = () => {
  console.log('inside toggle function');
  let displayImage = document.getElementById('image');
  console.log(displayImage);

  if (displayImage.src.match('../assets/lock.png')) {
    displayImage.src = '../assets/unlock.png';
  } else {
    displayImage.src = '../assets/lock.png';
  }
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
  console.log('logged out');
};
