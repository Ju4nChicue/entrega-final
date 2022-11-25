<template>
    <div class="border-top border-bottom border-2 border-secondary border-opacity-25 shadow" style="background-color:#E3DBD9;">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start d-md-flex container-sm py-3 ms-1 align-content-center">
            <button class="btn dropdown"><!--Cambiar ese boton-->
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ordernar por
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">A-Z</a></li>
            <li><a class="dropdown-item" href="#">Z-A</a></li>
            <li><a class="dropdown-item" href="#">Con más me gusta</a></li>
            <li><a class="dropdown-item" href="#">Más visitados</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </button>
        <button class="btn mx-1 my-1" type="button">Hoteles</button>
        <button class="btn mx-1 my-1" type="button">Pasadías</button>
        <button class="btn mx-1 my-1" type="button">Sitios recomendados</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            estado: true  
    }
}}
</script>
<style scoped>

.btn{
        --bs-btn-bg: #981D02;
        --bs-btn-color: white;
        --bs-btn-hover-bg: #A09490;
        --bs-btn-hover-border-color: black;
    }

</style>