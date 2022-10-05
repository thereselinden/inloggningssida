// TODO: 1. If sign out and logged in button showed 2 times. After page refresh correct... something in signout function?
// TODO: 2. Create user page (username, password)
// TODO: 3. Push new user to localStorage array
// TODO: 4. Create flow sign in page -> create page button -> sign in -> weclome page -> sign out
// TODO: 5. Can I create function that does'nt consider if username written with large or small letter?

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
  {
    username: 'therese',
    password: 'hejsan',
  },
];

const userJson = localStorage.setItem('users', JSON.stringify(users));

// CHECK IF isLoggedIn value exist (true) in localStorage. If true call signInSucessful to show welcomePage content
const init = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const currentSignedIn = JSON.parse(
    localStorage.getItem('currentSignedInUser')
  );

  if (isLoggedIn && currentSignedIn) {
    signInSucessful();
  }
};
init();

// STOP FORM TO UPDATE ON SUBMIT, CALL EXISTUSER FUNCTION ON CLICK
signInBtn.addEventListener('click', event => {
  event.preventDefault();
  existUserInLS();
});

// CHECK IF USER EXIST IN LOCALSTORAGE IF SO CALL SUCESS else FAIL
const existUserInLS = () => {
  const getStoredUsers = JSON.parse(localStorage.getItem('users'));
  const existUser = getStoredUsers.find(
    user => user.username === username.value && user.password === password.value
  );

  if (existUser) {
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    const isUserLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    localStorage.setItem('currentSignedInUser', JSON.stringify(username.value));
    const currentLoggedInUser = JSON.parse(
      localStorage.getItem('currentSignedInUser')
    );

    if (isUserLoggedIn && currentLoggedInUser) {
      signInSucessful();
    }
  } else {
    signInFail();
  }
};

function signInSucessful() {
  toggleHeaderImage();
  showWelcomePage();
}

const signInFail = () => {
  showErrorMessage();
  clearInputField();
};

// CHANGE HEADER IMG DEPENDING ON SIGNED IN OR NOT
function toggleHeaderImage() {
  const headerImage = image.getAttribute('src');

  headerImage === '../assets/lock.png'
    ? image.setAttribute('src', '../assets/unlock.png')
    : image.setAttribute('src', '../assets/lock.png');
}

// CHANGE PAGE CONTENT DEPENDING ON SIGNED IN OR NOT
function showWelcomePage() {
  loginPage.style.display = 'none';
  welcomePage.style.display = 'flex';

  createSignOutButtonElement();
  capitalizeName();
}

function capitalizeName() {
  const loggedInUser = JSON.parse(localStorage.getItem('currentSignedInUser'));

  const capitalizeUsername =
    loggedInUser.charAt(0).toUpperCase() + loggedInUser.slice(1);

  document.getElementById(
    'userFirstName'
  ).innerHTML = `Hej, ${capitalizeUsername}`;
}

// CREATE SIGN OUT BUTTON
function createSignOutButtonElement() {
  const welcomePageContainer = document.createElement('div');
  console.log('welcomePageContainer', welcomePageContainer);
  welcomePageContainer.classList.add('welcome-page-container');

  const signOutBtn = document.createElement('button');
  signOutBtn.innerText = 'Logga ut';
  signOutBtn.onclick = () => {
    welcomePageContainer.remove();
    signOut();
  };
  signOutBtn.classList.add('sign-out-btn');

  welcomePageContainer.append(signOutBtn);
  welcomePage.appendChild(welcomePageContainer);
}

// DIFFERENT ERROR MESSAGE, DISPLAY NONE AFTER 3 SEC
const showErrorMessage = () => {
  if (username.value === '' || password.value === '') {
    errorMessage.innerHTML = 'Information får inte vara blank';
  } else {
    errorMessage.innerHTML = 'Användaren finns inte';
  }
  setTimeout(() => {
    errorMessage.innerHTML = '';
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
function signOut() {
  loginPage.style.display = 'flex';
  welcomePage.style.display = 'none';
  document.getElementById('userFirstName').innerHTML = '';
  toggleHeaderImage();
  clearInputField();
  localStorage.setItem('isLoggedIn', JSON.stringify(false));
  localStorage.removeItem('currentSignedInUser');
}

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

//Only save all users username in localStorage, not password
// const json = localStorage.setItem(
//   'users',
//   JSON.stringify(users.map(user => user.username))
// );
