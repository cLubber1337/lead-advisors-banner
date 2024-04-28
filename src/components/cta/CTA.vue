<script setup>
import styles from './cta.module.scss'
import UiButton from '@/components/ui-button/UiButton.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const cta = ref(null)

onMounted(() => {
  gsap.from(cta.value, { autoAlpha: 0, duration: 0.5, ease: 'none', delay: 1.1, y: -70 })
})
</script>

<template>
  <section :class="styles.cta">
    <div class="container">
      <div ref="cta" :class="styles.ctaInner">
        <h2 :class="styles.title">Check our event page when you wait:</h2>
        <a href="https://google.com" target="_blank">
          <UiButton btn-type="submit">
            Go to the event
            <ArrowRightIcon />
          </UiButton>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
