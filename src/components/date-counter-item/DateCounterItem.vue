<script setup>
import styles from './date-counter-item.module.scss'

defineProps({
  dateValue: String,
  dateLabel: String
})
</script>

<template>
  <div :class="styles.dateCounterItem">
    <p class="color" :class="styles.dateValue">{{ dateValue }}</p>
    <div :class="styles.dateLabel" :data-date-label="dateLabel"></div>
  </div>
</template>
