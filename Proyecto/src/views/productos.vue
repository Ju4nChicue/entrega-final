<template>
    <header class="sticky-top">
        <div>
            <Barra_Superior />
            
            <barra_filtrar_compr />
        </div> 
    </header>
    <body class="row">
        <div>
            <ventas />

        </div>
    </body>
</template>
<script>
import Barra_Superior from '../components/Componentes_generales/Barra_Superior.vue';
import barra_filtrar_compr from '../components/Busqueda/barra_filtrar_compr.vue';
import ventas from '../components/Inicio/Componentes_inicio/ventas.vue';

export default {
    components: { Barra_Superior, barra_filtrar_compr,ventas }
}
</script>
<style>

</style>