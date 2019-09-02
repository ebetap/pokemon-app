<template>
  <div v-if="show" class="popup-success">
    success
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean },
  },
  name: 'PopupSuccess', 
}
</script>

<style scoped>
  .popup-success {
    position: relative;
  }

  .popup-success::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.4;
  }
</style>