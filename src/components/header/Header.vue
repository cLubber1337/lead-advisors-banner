<script setup>
import styles from './header.module.scss'
import logo from '@/assets/logo.png'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import leftCloud from '@/assets/cloud-left.png'
import RightCloud from '@/assets/cloud-right.png'

const logoIcon = ref(null)
const cloudLeft = ref(null)
const cloudRight = ref(null)

onMounted(() => {
  gsap.from(logoIcon.value, { autoAlpha: 0, duration: 0.5, ease: 'none', delay: 0.3, y: -50 })
  gsap.from(cloudLeft.value, {
    autoAlpha: 0,
    duration: 0.5,
    ease: 'none',
    delay: 1,
    y: -50,
    x: -50
  })
  gsap.from(cloudRight.value, {
    autoAlpha: 0,
    duration: 0.5,
    ease: 'none',
    delay: 1,
    y: -50,
    x: 50
  })
})
</script>

<template>
  <header :class="styles.header">
    <div ref="cloudLeft" :class="[styles.cloud, styles.cloudLeft]">
      <img :src="leftCloud" alt="" />
    </div>

    <div ref="cloudRight" :class="[styles.cloud, styles.cloudRight]">
      <img :src="RightCloud" alt="" />
    </div>

    <div class="container">
      <div ref="logoIcon" :class="styles.headerInner">
        <a href="#" id="logo" :class="styles.logoLink">
          <img :src="logo" alt="LEAD ADVISORS" />
        </a>
      </div>
    </div>
  </header>
</template>
