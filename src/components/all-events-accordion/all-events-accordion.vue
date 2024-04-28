<script setup>
import styles from './all-events-accordion.module.scss'
import { eventsData } from '@/shared/eventsData.js'
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

<template>
  <ul :class="styles.Accordion">
    <li v-for="(event, index) in eventsData" :key="event.title" :class="styles.AccordionItem">
      <!-- BODY --->
      <div :class="styles.AccordionBody" v-if="activeIndex === index">
        <div :class="styles.AccordionDescription">
          <h2 :class="styles.title">{{ event.title }}</h2>
          <p :class="styles.bigNumber">0{{ index + 1 }}</p>
          <p :class="styles.date">{{ event.date }}</p>
          <a href="https://www.google.com" target="_blank" :class="styles.moreButton" role="button">
            More information
          </a>
        </div>
        <img :src="event.img" alt="" />
      </div>

      <!-- TRIGGER  --->
      <div :style="{ background: `url(${event.img}) no-repeat center/cover` }">
        <div :class="styles.triggerWrapper">
          <button
            :class="[styles.trigger, activeIndex === index && styles.triggerActive]"
            @click="activeIndex = index"
          >
            <span :class="styles.triggerNumber">0{{ index + 1 }}</span>
            <span :class="styles.triggerTitle">{{ event.title }}</span>
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
