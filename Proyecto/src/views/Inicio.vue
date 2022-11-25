<template>
    <header class="sticky-top">
        <Barra_Superior />
    </header>  
    <body>
        <main>
            <Chat_Contacto />
            <Banner />

            <Descripcion_Pagina />

            <Servicios />

            <Carrusel_destacados />
            

            <Pie_pagina />
        </main>
    </body>
</template>
<script>

import Barra_Superior from '../components/Componentes_generales/Barra_Superior.vue';
import Banner from '../components/Inicio/Componentes_inicio/Banner.vue';
import Descripcion_Pagina from '../components/Inicio/Componentes_inicio/Descripcion_Pagina.vue';
import Servicios from '../components/Inicio/Componentes_inicio/Servicios.vue';
import Pie_pagina from '../components/Componentes_generales/pie_pagina.vue';
import Carrusel_destacados from '../components/Inicio/Componentes_inicio/Carrusel_destacados.vue';
import Chat_Contacto from '../components/Componentes_generales/Chat_Contacto.vue';

export default {
    components: {
    Barra_Superior,
    Banner,
    Descripcion_Pagina,
    Servicios,
    Pie_pagina,
    Carrusel_destacados,
    Chat_Contacto
}
}
</script>
<style scoped>

</style>