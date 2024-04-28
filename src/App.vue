<script setup>
import Header from '@/components/header/Header.vue'
import Hero from '@/components/hero/Hero.vue'
import DateCounter from '@/components/date-timer/DateTimer.vue'
import CTA from '@/components/cta/CTA.vue'
import Footer from '@/components/footer/Footer.vue'
import AllEventsPage from '@/components/all-events-page/AllEventsPage.vue'
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
  <AllEventsPage />
</template>
