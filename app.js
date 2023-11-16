function checkPasswordsMatch() {
  const password1 = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;
  if (password1 === password2) {
    // Passwords match
    return true;
  }
  // Passwords do not match
  return false;
}

document.querySelector('.create-account').addEventListener('click', (event) => {
  if (!checkPasswordsMatch()) {
    document.getElementById('passwordtest').innerHTML = 'passwords must match';
    document.getElementById('password').style.borderColor = '#981717';
    document.getElementById('password2').style.borderColor = '#981717';
    document.getElementById('password').style.borderRadius = '4px';
    document.getElementById('password2').style.borderRadius = '4px';
    document.getElementById('password').style.transitionProperty = 'border';
    document.getElementById('password2').style.transitionProperty = 'border';
    document.getElementById('password').style.transitionDuration = '.5s';
    document.getElementById('password2').style.transitionDuration = '.5s';
    event.preventDefault();
  } else {
    document.getElementById('passwordtest').innerHTML = '';
  }
});
