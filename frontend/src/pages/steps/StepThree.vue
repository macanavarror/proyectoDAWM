<template>
    <div @mouseenter="continuar()" class="step-content">
        Espera que nosotros te contactemos mediante tu correo electronico. Si no recibes nuestro correo en 2 horas vuelve a intentarlo.
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