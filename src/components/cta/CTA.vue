<script setup>
import styles from './cta.module.scss'
import UiButton from '@/components/ui-button/UiButton.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
</script>

<template>
  <section :class="styles.cta">
    <div class="container">
      <div :class="styles.ctaInner">
        <h2 :class="styles.title">Check our event page when you wait:</h2>
        <UiButton btn-type="submit">
          Go to the event
          <ArrowRightIcon />
        </UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
