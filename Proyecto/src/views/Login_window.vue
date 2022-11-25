<template>
    <header>
    <Barra_Superior /> 
    </header>
    <body>
      <div class="container-sm col-6 my-3">
      <div class="card login-form">
      <div class="card-body">
          <h3 class="card-title text-center">Iniciar sesion</h3>
          <div class="card-text">
            
              <form>
                
                  <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"  v-model="email">
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <a class="my-1" style="float:right;font-size:12px;">Olvidaste tu contraseña?</a>
                      <input type="password" class="form-control form-control-sm" id="exampleInputPassword1"  v-model="contraseña">
                  </div>
                  <button class="btn btn-primary btn-block my-2" @click="ingresar">Iniciar sesion </button>
                  
                  <div class="sign-up">
                      No tienes cuenta? <a href="#">Registrase</a>
                  </div>
              </form>
          </div>
      </div>
  </div>
  </div>
    </body>
  
  </template>
  <script>
  import Barra_Superior from '../components/Componentes_generales/Barra_Superior.vue';
  export default {
      components: { Barra_Superior },
      data(){
        return{
          email: '',
          contraseña: ''
        }
      },
      methods:{
        ingresar(){
            localStorage.setItem('email', this.email);
            localStorage.setItem('contraseña', this.contraseña);
        }
      }
  }
  </script>
  <style>
  
  </style>