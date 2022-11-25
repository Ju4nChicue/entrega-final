<template>
    <main>

<div id="myCarousel" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item">
      <!--<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>-->
        <img class="img-fluid" src="../imagenes_inicio/banner1.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <div class="container">
        <div class="carousel-caption text-start">
          <h1>Nombre del sitio</h1>
          <p>Alguna descripcion</p>
          <p><a class="btn btn-lg btn-primary" href="#">Boton</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <!--<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>-->
      <img class="img-fluid" src="../imagenes_inicio/banner1.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">

      <div class="container">
        <div class="carousel-caption">
          <h1>Otro nombre</h1>
          <p>otra descripcion</p>
          <p><a class="btn btn-lg btn-primary" href="#">Otro boton</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item active">
<!--<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>-->
<img class="img-fluid" src="../imagenes_inicio/banner1.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">

      <div class="container">
        <div class="carousel-caption text-end">
          <h1>Otro nombre</h1>
          <p>Otra descripcion</p>
          <p><a class="btn btn-lg btn-primary" href="#">Otro Boton</a></p>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Boton</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Boton</span>
  </button>
</div>



</main>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>