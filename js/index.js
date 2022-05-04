// retrieve form elements
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

// form is clicked
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateInput();
});

// validate form values
const validateInput = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // check if first name is empty
    if (firstNameValue === '') {
        setError(firstName, 'First Name cannot be empty');
    } else {
        firstName.parentElement.classList.remove('error');
    }

    // check if last name is empty
    if (lastNameValue === '') {
        setError(lastName, 'Last Name cannot be empty');
    } else {
        lastName.parentElement.classList.remove('error');
    }

    // check if email is empty, then check if email is valid
    if (emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!checkEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        email.parentElement.classList.remove('error');
    }

    // check if password is empty, then check if password is at least 8 characters
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        password.parentElement.classList.remove('error');
    }
}

// check email against regular expression
const checkEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

// assign error message to small tag and add 'error' class to input
const setError = (input, message) => {
    const inputField = input.parentElement;
    const small = inputField.querySelector('small');

    small.innerText = message;
    inputField.classList.add('error');
}