<template>
  <div class="p-3 absolute" style="background-color:#E3DBD9">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="../imagenes/icono.jpeg" class="bi me-2 rounded-circle" width="40" height="32" role="img"
            aria-label="Bootstrap">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link to="/" class="nav-link px-2 text-dark">Inicio</router-link>
          </li>
          <li>
            <router-link to="/search" class="nav-link px-2 text-dark">Servicios</router-link>
          </li>
          <li>
            <router-link to="/productos" class="nav-link px-2 text-dark">Productos</router-link>
          </li>
        </ul>

        <form class="col-12 col-lg-5 mb-3 mb-lg-0 me-5" role="search">
          <input type="search" class="form-control form-control-dark text-bg-light rounded-pill" placeholder="Search..."
            aria-label="Search">
        </form>

        <div class="text-end">
          <div class="nav-item dropdown">
            <div class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../icons/person-circle.svg" width="25">
            </div>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#login">
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#signup">
                  Registrarse
                </a>
              </li>

              <!--<li><router-link to="/login" class="dropdown-item" v-if="logueado">Perfil</router-link></li>
          <li><a class="dropdown-item" v-if="logueado">Ajustes</a></li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="loginLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="loginLabel">Iniciar Sesión</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <p>Correo</p>
            <input class="form-control" type="text" placeholder="Correo" aria-label="default input" v-model="correo">
            <br>
            <p>Contraseña</p>
            <input type="password" class="form-control" placeholder="Contraseña" v-model="contraseña">
          </div>
          <br>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Iniciar Sesión</button>
          </div>

        </div>
        <div class="modal-footer">
          <p>Aún no tienes una cuenta?</p>
          <button type="button" class="btn btn-primary">Registrate</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="signup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="signupLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="signupLabel">Registrarse</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <p>Nombre</p>
            <input class="form-control" type="text" placeholder="Nombre" aria-label="default input" v-model="nombre">
            <br>
            <p>Correo</p>
            <input class="form-control" type="text" placeholder="Correo" aria-label="default input" v-model="correo">
            <br>
            <p>Contraseña</p>
            <input type="text" class="form-control" placeholder="Contraseña" v-model="contraseña">
            <br>
            <p>Confirme la Contraseña</p>
            <input type="text" class="form-control" placeholder="Confirme la Contraseña" v-model="conContraseña">
          </div>
          <br>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Registrarse</button>
          </div>

        </div>
        <div class="modal-footer">
          <p>Ya tienes una cuenta?</p>
          <button type="button" class="btn btn-primary">Inicia sesión</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      usuarioLogin: [],
      correo: null,
      contraseña: null,
      conContraseña: null,
      nombre: null
    }
  },
  created(){
    this.autenticar();
  },
  methods: {
    async autenticar(){
      const res = await this.axios.get(`${this.baseURL}/api/auth`);
      console.log(res);
    }
  }
}
</script>
<style scoped>
a:hover {
  cursor: pointer;
}

.btn {
  --bs-btn-font-weight: 600;
  --bs-btn-color: white;
  --bs-btn-bg: #981D02;
  --bs-btn-border-color: white;
  --bs-btn-border-radius: .5rem;
  --bs-btn-hover-color: white;
  --bs-btn-hover-bg: #A09490;
  --bs-btn-hover-border-color: #981D02; 
  --bs-btn-active-color: white;
  --bs-btn-active-bg: #981D02;
}
</style>