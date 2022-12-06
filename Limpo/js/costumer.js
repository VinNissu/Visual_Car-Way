
// JAVASCRIPT DA TELA FEED
function modal() {
    alert("Você está indo para o upload");
}


function modalComu() {
    alert("Você está indo para aba comunidade");
}






// JAVASCRIPT DA TELA DE LOGIN
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >=8) {
        button.removeAttribute('disabled');

    }else{
        button.setAttribute('disabled','');
    }
}

const handleFocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');  
}
const handleFocusOut = ({ target }) =>{

    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active')

    }

    

}
inputs.forEach((input) =>  input.addEventListener('focus', handleFocus));
inputs.forEach((input) =>  input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) =>  input.addEventListener('input', handleChange));


AOS.init();