// ----------- MENU FUNCTION ----------

const button = document.getElementById('button-menu');
const menu = document.getElementById('menu');
const background = document.getElementById('background');
const logo = document.getElementById('logo');
const logoMenu = document.getElementById('logo-menu');

button.addEventListener('click', () => {
    menu.classList.toggle('menu-show');
    logo.classList.toggle('hidden-logo');
    logoMenu.classList.toggle('logo-menu-show');
    // background.classList.toggle('background');
    // console.log('funciona');
})

// ---------- LEARN MORE FUCTION ----------

const buttonLearnMore = document.getElementById('button-learn-more');
const imgMove = document.getElementById('img-active');

buttonLearnMore.addEventListener('mouseenter', () => {
    imgMove.classList.add('learn-more-button-active');
})

buttonLearnMore.addEventListener('mouseleave', () => {
    imgMove.classList.remove('learn-more-button-active');
})

// ----------- MENU PC ----------

const icons = document.getElementById('icon-menu-container');
const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');
const li4 = document.getElementById('li4');
const li5 = document.getElementById('li5');
const li6 = document.getElementById('li6');
const li7 = document.getElementById('li7');

menu.addEventListener('mouseenter', () => {
    menu.classList.add('menu-content-open');
    icons.classList.add('icon-hidden');
    li1.classList.add('li-show');
    li2.classList.add('li-show');
    li3.classList.add('li-show');
    li4.classList.add('li-show');
    li5.classList.add('li-show');
    li6.classList.add('li-show');
    li7.classList.add('li-show');
})

menu.addEventListener('mouseleave', () => {
    menu.classList.remove('menu-content-open');
    icons.classList.remove('icon-hidden');
    li1.classList.remove('li-show');
    li2.classList.remove('li-show');
    li3.classList.remove('li-show');
    li4.classList.remove('li-show');
    li5.classList.remove('li-show');
    li6.classList.remove('li-show');
    li7.classList.remove('li-show');
})

icons.addEventListener('mouseenter', () => {
    menu.classList.add('menu-content-open');
    icons.classList.add('icon-hidden');
    li1.classList.add('li-show');
    li2.classList.add('li-show');
    li3.classList.add('li-show');
    li4.classList.add('li-show');
    li5.classList.add('li-show');
    li6.classList.add('li-show');
    li7.classList.add('li-show');
})

icons.addEventListener('mouseleave', () => {
    menu.classList.remove('menu-content-open');
    icons.classList.remove('icon-hidden');
    li1.classList.remove('li-show');
    li2.classList.remove('li-show');
    li3.classList.remove('li-show');
    li4.classList.remove('li-show');
    li5.classList.remove('li-show');
    li6.classList.remove('li-show');
    li7.classList.remove('li-show');
})

// ---------- VALID FORM ----------

const enviarForm = () => {
    document.form1.submit();
}

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const namee = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementById('button-send');
// ELEMENTS OF NAME
const checkName = document.getElementById('check-name');
const warningName = document.getElementById('warning-name');
//ELEMENTS OF EMAIL
const checkEmail = document.getElementById('check-email');
const warningEmail = document.getElementById('warning-email');
//ELEMENTS OF MESSAGE
const checkMessage = document.getElementById('check-message');
const warningMessage = document.getElementById('warning-message');

const expresions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^[a-zA-ZÀ-ÿ\s]{4,200}$/, // Letras y espacios, pueden llevar acentos.
}

const formValid = {
    name: false,
    email: false,
    message: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			if(expresions.name.test(namee.value)){
                namee.classList.add('contact-input-valid');
                checkName.classList.add('check-show');
                namee.classList.remove('contact-input-invalid');
                warningName.classList.remove('warning-show');
                formValid.name = true;
            } else{
                namee.classList.remove('contact-input-valid');
                checkName.classList.remove('check-show');
                namee.classList.add('contact-input-invalid');
                warningName.classList.add('warning-show');
                setTimeout(() => {
                    warningName.classList.remove('warning-show');
                }, 3000);
                formValid.name = false;
            }
		break;
		case "email":
			if(expresions.email.test(email.value)){
                email.classList.add('contact-input-valid');
                checkEmail.classList.add('check-show');
                email.classList.remove('contact-input-invalid');
                warningEmail.classList.remove('warning-show');
                formValid.email = true;
            } else{
                email.classList.remove('contact-input-valid');
                checkEmail.classList.remove('check-show');
                email.classList.add('contact-input-invalid');
                warningEmail.classList.add('warning-show');
                setTimeout(() => {
                    warningEmail.classList.remove('warning-show');
                }, 3000);
                formValid.email = false;
            }
		break;
		case "message":
			if(expresions.message.test(message.value)){
                message.classList.add('contact-input-valid');
                checkMessage.classList.add('check-show');
                message.classList.remove('contact-input-invalid');
                warningMessage.classList.remove('warning-show');
                formValid.message = true;
            } else{
                message.classList.remove('contact-input-valid');
                checkMessage.classList.remove('check-show');
                message.classList.add('contact-input-invalid');
                warningMessage.classList.add('warning-show');
                setTimeout(() => {
                    warningMessage.classList.remove('warning-show');
                }, 3000);
                formValid.message = false;
            }
		break;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

submit.addEventListener('submit', () => {
    if(formValid.name && formValid.email && formValid.message){
       buttonSend.innerHTML = '<a href="javascript:enviarForm()">Enviar</a>';
       form.reset();
    }
})