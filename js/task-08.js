const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleFormSubmint);

function handleFormSubmint(evt) {
    evt.preventDefault();

    const {
        elements: { email, password },
    } = evt.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені!');
    }
    console.log({ Email: email.value, Password: password.value });
        
    evt.currentTarget.reset();
}

