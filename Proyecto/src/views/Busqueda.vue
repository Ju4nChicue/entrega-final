<template>
    <header class="sticky-top">
        <div>
            <Barra_Superior />
            
            <Barra_filtros />
        </div> 
    </header>

    <body class="row">
        <div class="row my-3 mx-2 col-md-7">
            <Lista />
        </div>
        <div class="col-md-4 my-4">
            <Mapa />
        </div>
    </body>
</template>
<script>
import Barra_Superior from '../components/Componentes_generales/Barra_Superior.vue';
import Barra_filtros from '../components/Busqueda/Barra_filtros.vue';
import Lista from '../components/Busqueda/Lista.vue';
import Mapa from '../components/Componentes_generales/Mapa.vue'

export default {
    components: { Barra_Superior, Barra_filtros, Lista,  Mapa }
}
</script>
<style scoped>
    
</style>