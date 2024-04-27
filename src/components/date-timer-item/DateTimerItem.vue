<script setup>
import styles from './date-timer-item.module.scss'

defineProps({
  dateValue: String,
  dateLabel: String,
  isLoaded: Boolean
})
</script>

<template>
  <div :class="styles.dateCounterItem">
    <p :style="isLoaded ? { opacity: 1 } : { opacity: 0.1 }" :class="styles.dateValue">
      {{ dateValue }}
    </p>
    <div :class="styles.dateLabel" :data-date-label="dateLabel"></div>
  </div>
</template>
