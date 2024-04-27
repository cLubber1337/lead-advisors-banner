<script setup>
import styles from './header.module.scss'
import { LeftCloudIcon, RightCloudIcon } from '@/components/icons'
import logo from '@/assets/logo.png'
</script>

<template>
  <header :class="styles.header">
    <LeftCloudIcon :class="[styles.cloud, styles.cloudLeft]" />
    <RightCloudIcon :class="[styles.cloud, styles.cloudRight]" />
    <div class="container">
      <div :class="styles.headerInner">
        <a href="#" :class="styles.logoLink">
          <img :src="logo" alt="LEAD ADVISORS" />
        </a>
      </div>
    </div>
  </header>
</template>
