<template>
  <div class="popup-failed">
    Failed
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean },
  },
  name: 'PopupFailed', 
}
</script>

<style scoped>
.popup-failed {
  position: relative;
}

.popup-failed::before {
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