// IMPORTANT!
// If signed in and page refresh - log out
// If typed wrong inputfield - error message - type wrong again - NOTHING?!
// If I want to create signOut btn using javascript, can I place it inside HTML created class? And not .body???

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

//convert users array to JSON string
const json = JSON.stringify(users);
//save to localStorage
localStorage.setItem('users', json);

// STOP FORM TO UPDATE ON SUBMIT, CALL SIGNIN FUNCTION ON CLICK
signInBtn.addEventListener('click', event => {
  event.preventDefault();
  signIn();
});

/// DENNA FUNKAR INTE, BYTER INTE IMAGE... VARFÖR??
// signOutBtn.addEventListener('click', () => {
//   signOut ();
// });

// SIGN IN ONLY IF USER EXISTS IN LOCALSTORAGE
const signIn = () => {
  // VARFÖR SPARAS INTE UPPGIFTER OM JAG UPPDATERAR SIDAN????
  const loginUser = document.getElementById('username').value;
  const loginPassword = document.getElementById('password').value;

  if (localStorage.getItem('users')) {
    // get string from localstorage and convert to valid object
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const existUser = storedUsers.find(
      user => loginUser === user.username && loginPassword === user.password
    );

    if (existUser) {
      console.log('exist', existUser);
      // localStorage.setItem();
      toggleHeaderImage();
      showWelcomePage();
    } else {
      console.log('in else');
      showErrorMessage();
      clearInputField();
    }
  } else {
    throw 'Nothing saved in LocalStorage';
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
  welcomePage.style.display = 'flex';

  const capitalizeUsername =
    username.value.charAt(0).toUpperCase() + username.value.slice(1);

  //Kan jag byta ut innerHTML (farligt att använda då hackare kan skriva in vad som)
  document.getElementById(
    'userFirstName'
  ).innerHTML = `Hej, ${capitalizeUsername}`;

  createSignOutButtonElement();
};

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
  toggleHeaderImage();
  clearInputField();
};

// THIS IS NOT IN USE
const createUser = () => {
  //kolla så användaren inte redan finns
  // push till localstorage
};
