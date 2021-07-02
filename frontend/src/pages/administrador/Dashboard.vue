<template>
  <div>
    
    
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  },
  mounted(){
      console.log(localStorage.token)
  }
};
</script>
<style></style>
