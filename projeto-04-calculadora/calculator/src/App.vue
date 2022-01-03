<template>
  <div id="app">
      <div>Calculadora</div>
      <Calculator/>
  </div>
</template>
<script>
import Calculator from '@/main/Calculator'

export default {
  components: { Calculator },
}
</script>

<style>
  * {
    font-family: 'monospace';
  }

  body {
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }  
</style>
