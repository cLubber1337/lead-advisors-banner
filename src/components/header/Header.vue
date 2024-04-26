<script setup>
import styles from './header.module.scss'
import { LogoIcon, LeftCloudIcon, RightCloudIcon } from '@/components/icons'
</script>

<template>
  <header :class="styles.header">
    <LeftCloudIcon :class="[styles.cloud, styles.cloudLeft]" />
    <RightCloudIcon :class="[styles.cloud, styles.cloudRight]" />
    <div class="container">
      <div :class="styles.headerInner">
        <a :class="styles.logoLink" href="#">
          <LogoIcon />
        </a>
      </div>
    </div>
  </header>
</template>
