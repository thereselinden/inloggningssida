const signInBtn = document.getElementById('signInBtn');

//users saved in localStorage
//removed array. kunde inte validera rätt användare.
//behöver jag göra en loop då? under sign in()?
const users = {
  username: 'Fredrik',
  password: '1234',
};

// Put object to storage
localStorage.setItem(users, JSON.stringify(users));

// TODO: Validate user login. ONLY if stored in localStorage
// TODO: Show error message if failed to log in
// TODO: Can I create a separate validation function?
const signIn = () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const getUsers = localStorage.getItem(users);
  const parseUsers = JSON.parse(getUsers);
  //const userError = document.getElementById('userError');
  //const passError = document.getElementById('passError');

  if (username === parseUsers.username && password === parseUsers.password) {
    const loginPage = document.getElementById('loginPage');
    loginPage.style.display = 'none';

    const welcomePage = document.getElementById('welcomePage');
    welcomePage.style.display = 'flex';

    const capitalizeUsername =
      username.charAt(0).toUpperCase() + username.slice(1);

    document.getElementById(
      'userFirstName'
    ).innerHTML = `Hej, ${capitalizeUsername}`;

    toggleHeaderImage();
  } else {
    alert('something wrong');
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

// const validateSignIn = () => {
//   const storedUsername = parseUsers.map(user => user.username);
//   const storedUserPassword = parseUsers.map(user => user.password);
//   console.log(storedUsername, storedUserPassword);

//   // TODO: Validate that user exist in users array
//   // TODO: Validate that user enter correct stored password
//   // TODO: Show error message if failed
//   // TODO: Separate error message depending on fail reason
// };

const showErrorMessage = () => {};

const signOut = () => {
  location.reload();
};

const createUser = () => {
  // TODO: Push new user to localStorage array
  // TODO: Create flow sign in page -> create page button -> sign in -> weclome page
};

//JSON.stringify method converts a JavaScript value to a JSON string,
//JSON.parse() the data becomes a JavaScript object.
