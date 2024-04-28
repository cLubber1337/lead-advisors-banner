<script setup>
import styles from './hero.module.scss'
</script>

<template>
  <section :class="styles.hero">
    <div class="container">
      <div :class="styles.heroInner">
        <h1 class="h1" :class="[styles.title]">UNDER CONSTRUCTION</h1>
        <p :class="styles.subtitle">We're making lots of improvements and will be back soon</p>
      </div>
    </div>
  </section>
</template>
