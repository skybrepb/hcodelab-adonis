'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/admin/users', 'UserController.store') // Cadastra Usuários
Route.post('/auths', 'AuthController.store') // Autentica Usuário
Route.post('/users', 'userController.store') // Cadastra Usuário
// Route.get('/admin/users', 'UserController.index') //Lista usuários
// Route.get('/admin/users/:id', 'UserController.show') //Lista usuário
// Route.delete('/admin/users/:id', 'UserController.destroy').middleware('auth') //deleta usuário
// Route.post('/admin/users', 'UserController.store') // Cadastra Usuários

Route.post('/admin/users/:id/uploads', 'UserController.changePhoto')
Route.get('/admin/users/:id/photo', 'UserController.photo')

Route.group(()=> {
  Route.resource('users','UserController').apiOnly()
}).prefix('admin')
//.middleware(['auth'])               // Agrupa todas as rotas