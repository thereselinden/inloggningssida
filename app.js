// TODO: ShowErrorMessage() when creating account does not show

const loginPage = document.querySelector('.login-page');
const welcomePage = document.querySelector('.welcome-page');
const username = document.getElementById('username');
const password = document.getElementById('password');

//eventlistener
const signInBtn = document.getElementById('signInBtn');
const createAccountLink = document.getElementById('createAccountLink');
const createBtn = document.getElementById('createBtn');
const signInLink = document.getElementById('signInLink');

// DEFAULT USERS STORED IN LOCALSTORAGE
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

// IF NO USERS KEY, CREATE ONE
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(users));
}
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
  if (username.value === '' || password.value === '') {
    showErrorMessage('Information får inte vara blank');
  } else {
    showErrorMessage('Har du angett korrekta uppgifter?');
  }
  clearInputField();
};

// CHANGE HEADER IMG DEPENDING ON SIGNED IN OR NOT
function toggleHeaderImage() {
  const headerImage = image.getAttribute('src');

  headerImage === 'assets/lock.png'
    ? image.setAttribute('src', 'assets/unlock.png')
    : image.setAttribute('src', 'assets/lock.png');
}

// CHANGE PAGE CONTENT DEPENDING ON SIGNED IN OR NOT
function showWelcomePage() {
  loginPage.style.display = 'none';
  welcomePage.style.display = 'flex';

  createSignOutButtonElement();
  capitalizeName();
}

// MAKE FIRST LETTER IN USERNAME TOUPPERCASE
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
function showErrorMessage(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;

  setTimeout(() => {
    errorMessage.textContent = '';
  }, 3000);
}

// CLEAR INPUT FIELD IF NOT CORRECT
const clearInputField = () => {
  const inputs = document.querySelectorAll(
    '#username, #password, #createUsername, #createPassword'
  );

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

// Called when user click create account link from startpage
createAccountLink.addEventListener('click', () => {
  const createPage = document.getElementById('createPage');
  loginPage.style.display = 'none';
  createPage.style.display = 'flex';
});

createBtn.addEventListener('click', event => {
  event.preventDefault();
  createNewUser();
});

function createNewUser() {
  const users = JSON.parse(localStorage.getItem('users'));

  const createUsername = document.getElementById('createUsername');
  const createPassword = document.getElementById('createPassword');

  const duplicateUsers = users.find(
    user => user.username === createUsername.value
  );

  if (duplicateUsers) {
    //meddelandet visas inte!
    showErrorMessage('Användarnamnet är tyvärr upptaget!');
    clearInputField();
    if (createUsername.value === '' || createPassword.value === '') {
      showErrorMessage('Uppgifter får inte vara tomma');
    }
  } else {
    users.push({
      username: createUsername.value,
      password: createPassword.value,
    });
    const createPage = document.getElementById('createPage');
    loginPage.style.display = 'flex';
    createPage.style.display = 'none';
  }
  localStorage.setItem('users', JSON.stringify(users));
}

// Called when user click create account link from startpage
signInLink.addEventListener('click', () => {
  const createPage = document.getElementById('createPage');
  loginPage.style.display = 'flex';
  createPage.style.display = 'none';
});
