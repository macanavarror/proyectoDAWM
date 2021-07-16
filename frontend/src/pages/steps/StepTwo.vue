<template>
    <div @mouseenter="continuar()" class="step-content">
        Completa el formulario que se muestra en la pantalla con tus datos reales.
    </div>
</template>

<script>

export default {
    mounted(){
        this.$emit('can-continue', {value: true});
    },
    methods: {
        continuar(){
            this.$emit('can-continue', {value: true});
        }
    }
}
</script>

<style>
.step-content{
    width: 100%;
    min-height: 150px;
    font-size: large;
    text-align: center;
    padding: 100px 250px;
}
</style>