const signInBtn = document.getElementById('signInBtn');

// Kan jag skapa en en funktion som tar hänsyn till ifall men
// råkar skriva fredrik med litet f?
//USERS SAVED IN LOCALSTORAGE
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

// SET VALUE OF SPECIFIC STORAGE OBJECT ITEM
localStorage.setItem(users, JSON.stringify(users));

// TODO: Show error message if failed to log in
// TODO: Can I create a separate validation function?
const signIn = () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const getUsers = localStorage.getItem(users);
  const parseUsers = JSON.parse(getUsers);

  const existsUser = parseUsers.find(
    user => user.username === username && user.password === password
  );

  if (existsUser) {
    console.log('Yes');
  } else {
    console.log('no');
  }

  if (existsUser) {
    toggleHeaderImage();
    togglePageContent();
  } else {
    alert('something went wrong');
    clearInputField();
  }
};

// Hide login page and show welcome page when sign in button clicked
signInBtn.addEventListener('click', event => {
  event.preventDefault();
  signIn();
});

const toggleHeaderImage = () => {
  const headerImage = image.getAttribute('src');

  headerImage === '../assets/lock.png'
    ? image.setAttribute('src', '../assets/unlock.png')
    : image.setAttribute('src', '../assets/lock.png');
};

const togglePageContent = () => {
  const username = document.getElementById('username').value;
  const loginPage = document.getElementById('loginPage');
  loginPage.style.display = 'none';

  const welcomePage = document.getElementById('welcomePage');
  welcomePage.style.display = 'flex';

  const capitalizeUsername =
    username.charAt(0).toUpperCase() + username.slice(1);

  document.getElementById(
    'userFirstName'
  ).innerHTML = `Hej, ${capitalizeUsername}`;
};

// if wrong username & password entered, clear inputfields
const clearInputField = () => {
  const inputs = document.querySelectorAll('#username, #password');

  inputs.forEach(input => {
    input.value = '';
  });
};

// TODO: Throw specific message depending on whats failed
const showErrorMessage = () => {
  const userError = document.getElementById('userError');
  const passError = document.getElementById('passError');
};

const signOut = () => {
  location.reload();
};

const createUser = () => {
  // TODO: Push new user to localStorage array
  // TODO: Create flow sign in page -> create page button -> sign in -> weclome page
};

//JSON.stringify method converts a JavaScript value to a JSON string,
//JSON.parse() the data becomes a JavaScript object.
