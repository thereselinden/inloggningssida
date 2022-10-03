// TODO: 1. IMPORTANT!!! If signed in and refresh page - stay logged in
// TODO: 3. Create user page (username, password)
// TODO: 4. Push new user to localStorage array
// TODO: 5. Create flow sign in page -> create page button -> sign in -> weclome page -> sign out
// TODO: 6. If typed wrong inputfield - error message - type wrong again - NOTHING?!
// TODO: 7. Can I create function that does'nt consider if username written with large or small letter?

const loginPage = document.querySelector('.login-page');
const welcomePage = document.querySelector('.welcome-page');
const createForm = document.getElementById('createForm');

const username = document.getElementById('username');
const password = document.getElementById('password');

const errorMessage = document.getElementById('errorMessage');

const signInBtn = document.getElementById('signInBtn');

const users = [
  {
    username: 'fredrik',
    password: '12345',
  },
];

// function to push new userobject to users array
// const addUser = (username, password) => {
//   users.push({
//     username,
//     password,
//   });
//   localStorage.setItem('users', JSON.stringify(users));

// };

// function should be called when creatusername.value & createpassword.value
//addUser('therese', 'hejhej');

localStorage.setItem('users', JSON.stringify(users));

// STOP FORM TO UPDATE ON SUBMIT, CALL SIGNIN FUNCTION ON CLICK
signInBtn.addEventListener('click', event => {
  event.preventDefault();
  signIn();
});

// SIGN IN ONLY IF USER EXISTS IN LOCALSTORAGE
const signIn = () => {
  const loginUser = username.value;
  const loginPassword = password.value;

  // if (localStorage.getItem('users')) {
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  const existUser = storedUsers.find(
    user => loginUser === user.username && loginPassword === user.password
  );

  if (existUser) {
    toggleHeaderImage();
    showWelcomePage();
  } else {
    showErrorMessage();
    clearInputField();
  }
  // }
  // else {
  //   throw 'Nothing saved in LocalStorage';
  // }
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
  welcomePage.style.display = 'flex';

  const capitalizeUsername =
    username.value.charAt(0).toUpperCase() + username.value.slice(1);

  document.getElementById(
    'userFirstName'
  ).innerHTML = `Hej, ${capitalizeUsername}`;

  createSignOutButtonElement();
};

// CREATE SIGN OUT BUTTON
const createSignOutButtonElement = () => {
  const welcomePageContainer = document.createElement('div');
  welcomePageContainer.classList.add('welcome-page-container');

  const signOutBtn = document.createElement('button');
  signOutBtn.innerText = 'Logga ut';
  signOutBtn.onclick = () => {
    signOut();
  };
  signOutBtn.classList.add('sign-out-btn');

  welcomePageContainer.append(signOutBtn);
  welcomePage.appendChild(welcomePageContainer);
};

// DIFFERENT ERROR MESSAGE, DISPLAY NONE AFTER 3 SEC
const showErrorMessage = () => {
  if (username.value === '' || password.value === '') {
    errorMessage.innerHTML = 'Information får inte vara blank';
  } else {
    errorMessage.innerHTML = 'Användaren finns inte';
  }
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
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
  // blir ett problem när man loggar ut och sidan inte refreshas, localStorage är då tomt
  localStorage.clear();
  toggleHeaderImage();
  clearInputField();
};
