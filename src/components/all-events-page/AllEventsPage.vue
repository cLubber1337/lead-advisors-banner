<script setup>
import styles from './all-events-page.module.scss'
import AllEventsAccordion from '@/components/all-events-accordion/all-events-accordion.vue'
</script>

<template>
  <div :class="styles.pageWrapper">
    <header :class="styles.header">
      <h1 id="all-events" class="h1" :class="styles.title">ALL EVENTS</h1>
    </header>
    <section :class="styles.body">
      <AllEventsAccordion />
    </section>
  </div>
</template>

<style scoped></style>
