<script setup>
import styles from './button.module.scss'

defineProps({
  btnType: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <button :class="styles.button" :type="btnType">
    <slot></slot>
  </button>
</template>

<style scoped></style>
