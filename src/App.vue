<template>
    <home title="Contact App"></home>
    <div class="container mt-5 pt-3">
        <router-view></router-view>
    </div>
</template>

<script>
    // Importación corregida apuntando directamente al componente
    import home from './components/home.vue';
    
    export default{
        components: {
            home
        }
    }
</script>
