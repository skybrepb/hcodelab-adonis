'use strict'

const User = use('App/Models/User')

class UserController {

    async store ({ request }) { //Dados que usuário quer cadastrar
        const data = request.only(['name','email','photo','birth_at','level','password'])

        const user = await User.create(data)

        return user
    }

    async index () {    // Lista todos os usuários
        return await User.all()
    }

    async show({ params }) {    // Lista um usuário pelo ID
        const user = await User.findOrFail(params.id)

        return user
    }

    async destroy({ params, auth, response}){
        const user = await User.findOrFail(params.id)

        if(user.id !== auth.user.id) {
            return response.status(401).send({ error: 'Not Autorized'})
        }
        await user.delete()
    }

}

module.exports = UserController
