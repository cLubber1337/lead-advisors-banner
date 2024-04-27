<script setup>
import Header from '@/components/header/Header.vue'
import Hero from '@/components/hero/Hero.vue'
import DateCounter from '@/components/date-counter/DateCounter.vue'
import CTA from '@/components/cta/CTA.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<template>
  <div class="page-wrapper">
    <Header />
    <main class="main">
      <Hero />
      <DateCounter />
      <CTA />
    </main>
    <Footer />
  </div>
</template>
