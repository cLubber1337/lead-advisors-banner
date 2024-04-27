<script setup>
import styles from './date-timer.module.scss'
import DateTimerItem from '@/components/date-timer-item/DateTimerItem.vue'
import { reactive, onMounted } from 'vue'

const dateTimerValues = reactive({
  dd: '00',
  hh: '00',
  mm: '00',
  ss: '00',
  isLoaded: false
})

const timeIn = {
  seconds() {
    return 1000
  },
  minutes() {
    return this.seconds() * 60
  },
  hours() {
    return this.minutes() * 60
  },
  days() {
    return this.hours() * 24
  }
}

const showRemaining = () => {
  const timer = setInterval(() => {
    const now = new Date()
    const end = new Date(2024, 6, 24, 23, 59, 59)
    const distance = end.getTime() - now.getTime()

    if (distance < 0) {
      clearInterval(timer)
      return
    }
    const dd = Math.floor(distance / timeIn.days())
    const hh = Math.floor((distance % timeIn.days()) / timeIn.hours())
    const mm = Math.floor((distance % timeIn.hours()) / timeIn.minutes())
    const ss = Math.floor((distance % timeIn.minutes()) / timeIn.seconds())

    dateTimerValues.dd = dd < 10 ? `0${dd}` : String(dd)
    dateTimerValues.hh = hh < 10 ? `0${hh}` : String(hh)
    dateTimerValues.mm = mm < 10 ? `0${mm}` : String(mm)
    dateTimerValues.ss = ss < 10 ? `0${ss}` : String(ss)
    dateTimerValues.isLoaded = true
  }, 1000)
}

onMounted(() => {
  showRemaining()
})
</script>

<template>
  <section :class="styles.dateCounterSection">
    <div class="container">
      <article :class="styles.dateCounter">
        <DateTimerItem
          date-label="dd"
          :is-loaded="dateTimerValues.isLoaded"
          :date-value="dateTimerValues.dd"
        />
        <span :class="styles.dateSeparator">:</span>
        <DateTimerItem
          date-label="hh"
          :is-loaded="dateTimerValues.isLoaded"
          :date-value="dateTimerValues.hh"
        />
        <span :class="styles.dateSeparator">:</span>
        <DateTimerItem
          date-label="mm"
          :is-loaded="dateTimerValues.isLoaded"
          :date-value="dateTimerValues.mm"
        />
        <span :class="styles.dateSeparator">:</span>
        <DateTimerItem
          date-label="ss"
          :is-loaded="dateTimerValues.isLoaded"
          :date-value="dateTimerValues.ss"
        />
      </article>
    </div>
  </section>
</template>
