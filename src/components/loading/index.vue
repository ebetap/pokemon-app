<template>
  <div class="wrapper">
     <div class="loader" id="loader-1"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style scoped>
  /* ALL LOADERS */

.loader{
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* LOADER 1 */

#loader-1:before, #loader-1:after{
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 7px solid transparent;
  border-top-color: #0d4a68;
}

#loader-1:before{
  z-index: 100;
  animation: spin 1s infinite;
}

#loader-1:after{
  border: 7px solid #ccc;
}

@keyframes spin{
  0%{
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100%{
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>