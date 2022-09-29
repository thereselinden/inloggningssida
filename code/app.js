//JSON.stringify method converts a JavaScript value to a JSON string,
//JSON.parse() the data becomes a JavaScript object.

// TODO: IMPORTANT!!! If signed in and refresh page - stay logged in
// TODO: Show error message if failed to log in
// TODO: Can I create a separate validation function?
// TODO: Can I create function that does'nt consider if username written with large or small letter?
// TODO: Create function that throw specific message depending on whats failed
// TODO: Create user page (username, password)
// TODO: Push new user to localStorage array
// TODO: Create flow sign in page -> create page button -> sign in -> weclome page

const signInBtn = document.getElementById('signInBtn');

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

// SIGN IN ONLY IF USER EXISTS IN LOCALSTORAGE
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

  // IF TRUE EXECUTE OTHERWISE ERROR
  if (existsUser) {
    toggleHeaderImage();
    togglePageContent();
  } else {
    alert('something went wrong');
    clearInputField();
  }
};

// STOP FORM TO UPDATE ON SUBMIT, CALL SIGNIN FUNCTION ON CLICK
signInBtn.addEventListener('click', event => {
  event.preventDefault();
  signIn();
});

// CHANGE HEADER IMG DEPENDING ON SIGNED IN OR NOT
const toggleHeaderImage = () => {
  const headerImage = image.getAttribute('src');

  headerImage === '../assets/lock.png'
    ? image.setAttribute('src', '../assets/unlock.png')
    : image.setAttribute('src', '../assets/lock.png');
};

// CHANGE PAGE CONTENT DEPENDING ON SIGNED IN OR NOT
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

// CLEAR INPUT FIELD IF NOT CORRECT
const clearInputField = () => {
  const inputs = document.querySelectorAll('#username, #password');

  inputs.forEach(input => {
    input.value = '';
  });
};

// RELOAD CURRENT DOCUMENT
const signOut = () => {
  location.reload();
};

// THIS IS NOT IN USE - HOW CAN I USE IT?
const showErrorMessage = () => {
  const userError = document.getElementById('userError');
  const passError = document.getElementById('passError');
};

// THIS IS NOT IN USE
const createUser = () => {};
