//JSON.stringify method converts a JavaScript value to a JSON string,
//JSON.parse() the data becomes a JavaScript object.

// TODO: 1. IMPORTANT!!! If signed in and refresh page - stay logged in
// TODO: 2. Create function that throw specific message depending on whats failed
// TODO: 3. Create user page (username, password)
// TODO: 4. Push new user to localStorage array
// TODO: 5. Create flow sign in page -> create page button -> sign in -> weclome page
// TODO: 6. Can I create a separate validation function?
// TODO: 7. Can I create function that does'nt consider if username written with large or small letter?

const loginPage = document.querySelector('.login-page');
const welcomePage = document.querySelector('.welcome-page');

const username = document.getElementById('username');
const password = document.getElementById('password');

const errorMessage = document.getElementById('errorMessage');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

//USERS SAVED IN LOCALSTORAGE
const users = [
  {
    username: 'fredrik',
    password: '12345',
  },
  {
    username: 'therese',
    password: '12345',
  },
];

// SET VALUE OF SPECIFIC STORAGE OBJECT ITEM
localStorage.setItem('users', JSON.stringify(users));
const getUsers = localStorage.getItem(users);
const parseUsers = JSON.parse(getUsers);

// STOP FORM TO UPDATE ON SUBMIT, CALL SIGNIN FUNCTION ON CLICK
signInBtn.addEventListener('click', event => {
  event.preventDefault();
  signIn();
});

/// DENNA FUNKAR INTE, BYTER INTE IMAGE... VARFÖR??
// signOutBtn.addEventListener('click', () => {
//   signOut();
// });

// SIGN IN ONLY IF USER EXISTS IN LOCALSTORAGE
const signIn = () => {
  const existsUser = parseUsers.find(
    user => user.username === username.value && user.password === password.value
  );

  // IF TRUE EXECUTE OTHERWISE ERROR
  if (existsUser) {
    toggleHeaderImage();
    showWelcomePage();
    localStorage.setItem(username, password);
  } else {
    showErrorMessage();
    clearInputField();
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  }
};

// CHANGE HEADER IMG DEPENDING ON SIGNED IN OR NOT
const toggleHeaderImage = () => {
  const headerImage = image.getAttribute('src');

  headerImage === '../assets/lock.png'
    ? image.setAttribute('src', '../assets/unlock.png')
    : image.setAttribute('src', '../assets/lock.png');
};

// CHANGE PAGE CONTENT DEPENDING ON SIGNED IN OR NOT
const showWelcomePage = () => {
  loginPage.style.display = 'none';

  const welcomePage = document.getElementById('welcomePage');
  welcomePage.style.display = 'flex';

  const capitalizeUsername =
    username.value.charAt(0).toUpperCase() + username.value.slice(1);

  //Kan jag byta ut innerHTML (farligt att använda då hackare kan skriva in vad som)
  document.getElementById(
    'userFirstName'
  ).innerHTML = `Hej, ${capitalizeUsername}`;

  // HUR PLACERAR JAG DENNA I MIN welcome-page klass???
  // const signOutBtn = document.createElement('button');
  // signOutBtn.innerHTML = 'Logga ut';
  // signOutBtn.onclick = () => {
  //   signOut();
  // };
  // document.body.appendChild(signOutBtn);
};

const showErrorMessage = () => {
  if (username.value == '' || password.value == '') {
    errorMessage.innerHTML = 'Information får inte vara blank';
  } else {
    errorMessage.innerHTML = 'Användaren finns inte';
  }
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
  loginPage.style.display = 'flex';
  welcomePage.style.display = 'none';
  document.getElementById('userFirstName').innerHTML = '';
  toggleHeaderImage();
  clearInputField();
};

// THIS IS NOT IN USE
const createUser = () => {
  //kolla så användaren inte redan finns
  // push till localstorage
};
