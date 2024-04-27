<script setup>
import styles from './subscription-result-modal.module.scss'
import UiButton from '@/components/ui-button/UiButton.vue'
import { XMarkIcon } from '@/components/icons'

defineProps({
  isOpenModal: Boolean,
  status: Number
})
</script>

<template>
  <div v-if="isOpenModal" :class="styles.modal">
    <div class="container">
      <div :class="styles.modalInner">
        <UiButton :class="styles.XButton" @click="$emit('closeModal')" variant="clear">
          <XMarkIcon />
        </UiButton>
        <h1 :class="styles.title" v-if="status === 200">SUCCESS!</h1>
        <h1 :class="[styles.title, styles.error]" v-else>ERROR!</h1>

        <p :class="styles.description" v-if="status === 200">
          You have successfully subscribed to the email newsletter
        </p>
        <p :class="styles.description" v-else>Something went wrong. Please try again</p>
        <UiButton :class="styles.closeButton" @click="$emit('closeModal')">Close</UiButton>
      </div>
    </div>
  </div>
</template>
