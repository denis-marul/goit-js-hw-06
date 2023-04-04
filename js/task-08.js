const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === '' || password === '') {
    alert('Fill in the fields of the form, please.');
  } else {
    const formData = { email, password };
    console.log(formData);
    form.reset();
  }
});
