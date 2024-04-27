<script setup>
import styles from './button.module.scss'

defineProps({
  btnType: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})
</script>

<template>
  <button
    :class="[styles.button, { [styles.clear]: variant === 'clear' }]"
    :type="btnType"
    :disabled
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
