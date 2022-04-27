import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (this.form) return;
        this.form.addEventListener('submint', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validade(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;
        if (!validator.isEmail(emailInput.value)) {
            alert('Email inválido!');
            error = true;
        }

        if (passwordInput.value.length < 3) {
            alert('Senha inválida');
            error = true;
        }

    }
}