<script setup>
import styles from './hero.module.scss'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const hero = ref(null)

onMounted(() => {
  gsap.from(hero.value, { autoAlpha: 0, duration: 0.5, ease: 'none', delay: 0.7, y: -70 })
})

defineProps({
  ref: Object
})
</script>

<template>
  <section :class="styles.hero">
    <div ref="hero" class="container">
      <div :class="styles.heroInner">
        <h1 class="h1" :class="[styles.title]">UNDER CONSTRUCTION</h1>
        <p :class="styles.subtitle">We're making lots of improvements and will be back soon</p>
      </div>
    </div>
  </section>
</template>
