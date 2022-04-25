const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
});
const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async regiter() {
        this.valida();
        if (this.errors.length > 0) return;

        await this.userExist();
        if (this.errors.length > 0) return;

        const salt = await bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
        console.log(e);

    }

    async login() {
        this.valida();
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({
            email: this.body.email
        });

        if (!this.user) {
            this.errors.push('Usuário ou senha inválido');
            return
        }
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Usuário ou senha inválido');
            this.user = null;
            return
        }


    }

    valida() {
        this.cleanUp();
        //Validação do usuário
        //Email precisa ser válido
        if (!validator.isEmail(this.body.email)) this.errors.push('Email Inválido!')
        //Senha precisa ter 4 caracteres
        if (this.body.password.length < 4 || this.body.password.length > 50) this.errors.push('Senha deve estar entre 4 e 50 caracters');

    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        //Força o body a ter somente esses campos
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }


    async userExist() {
        const user = await LoginModel.findOne({
            email: this.body.email
        });
        if (user) this.errors.push('Usuário já existe');

    }

}

module.exports = Login;