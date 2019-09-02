<template>
  <div v-if="open" class="popup">
    <div class="content-popup">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    open: { type: Boolean, default: false }
  },
  name: 'Popup'
}
</script>

<style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.3;
  }

  .content-popup {
    padding-top: 70px;
    position: relative;
  }
</style>