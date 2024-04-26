<script setup>
import styles from './date-counter.module.scss'
import DateCounterItem from '@/components/date-counter-item/DateCounterItem.vue'
</script>

<template>
  <div class="container">
    <article :class="styles.dateCounter">
      <DateCounterItem date-label="dd" date-value="96" />

      <span :class="styles.dateSeparator">:</span>

      <DateCounterItem date-label="hh" date-value="96" />

      <span :class="styles.dateSeparator">:</span>

      <DateCounterItem date-label="mm" date-value="96" />

      <span :class="styles.dateSeparator">:</span>

      <DateCounterItem date-label="ss" date-value="96" />
    </article>
  </div>
</template>

<style scoped></style>
