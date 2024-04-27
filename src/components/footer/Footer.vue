<script setup>
import styles from './footer.module.scss'
import { ref } from 'vue'
import TextField from '@/components/text-field/TextField.vue'
import UiButton from '@/components/ui-button/UiButton.vue'
import { ArrowRightIcon } from '@/components/icons'
import SubscriptionResultModal from '@/components/subscription-result-modal/SubscriptionResultModal.vue'
import { requestSubscription } from '@/api/subscriptionApi.js'

const formData = ref({
  email: ''
})

const subscriptionResult = ref({
  status: null,
  isLoading: false
})

const isOpenModal = ref(false)

const handleSubmit = async () => {
  subscriptionResult.value.isLoading = true
  try {
    const response = await requestSubscription(formData.value.email)
    if (response.status === 200) {
      subscriptionResult.value.status = response.status
    }
  } catch (error) {
    subscriptionResult.value.status = error.status
  } finally {
    formData.value.email = ''
    isOpenModal.value = true
    subscriptionResult.value.isLoading = false
  }
}

const closeModal = () => {
  isOpenModal.value = false
  subscriptionResult.value.status = null
}
</script>

<template>
  <SubscriptionResultModal
    :isOpenModal
    @closeModal="closeModal"
    :status="subscriptionResult.status"
  />
  <footer :class="styles.footer">
    <div class="container">
      <div :class="styles.footerInner">
        <form @submit.prevent="handleSubmit" :class="styles.form">
          <TextField
            v-model="formData.email"
            placeholder="Enter your Email and get notified"
            name="email"
            type="email"
            required
          />
          <UiButton
            btn-type="submit"
            :class="styles.formButton"
            :disabled="subscriptionResult.isLoading"
          >
            <span class="loader" v-if="subscriptionResult.isLoading"></span>
            <ArrowRightIcon :class="styles.formButtonIcon" v-else />
          </UiButton>
        </form>
      </div>
    </div>
  </footer>
</template>
