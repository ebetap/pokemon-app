<template>
  <div class="container" :class="handleAlign">
    <button 
      class="btn btn-primary"
      :class="handleWidth"
      @click="onClick"
    >
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: { type: String },
    onClick: { type: Function },
    fullWidth: { type: Boolean },
    align: { type: String }
  },
  computed: {
    handleAlign() {
      return {
        'center': this.align === 'center',
        'left': this.align === 'left',
        'right': this.align === 'right',
      }
    },

    handleWidth() {
      return {
        'width-100': this.fullWidth === true,
      }
    }
  },
}
</script>

<style scoped>
  .btn {
  position: relative;
  border-radius: 25px;
  background: linear-gradient(to left,#0fa399 0,#0d4a68 100%);
  text-transform: uppercase;
  transition: all .5s;
  -webkit-transition: all .5s;
  padding: 13px 25px;
  color: #ffffff;
  font-size: 16px;
  border: 0;
}

.btn:active,
.btn:focus {
  outline: none;
}

.container {
  display: flex;
}

.center {
  justify-content: center;
}

.left {
  justify-content: start;
}

.right {
  justify-content: end;
}

.width-100 {
  width: 100%;
}
</style>