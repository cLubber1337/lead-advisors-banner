<script setup>
import styles from './footer.module.scss'
import { ref } from 'vue'
import TextField from '@/components/text-field/TextField.vue'
import UiButton from '@/components/ui-button/UiButton.vue'
import { ArrowRightIcon } from '@/components/icons'

const formData = ref({
  email: ''
})

const handleSubmit = () => {
  console.log('submit')
  formData.value.email = ''
}
</script>

<template>
  <footer :class="styles.footer">
    <div class="container">
      <div :class="styles.footerInner">
        <form @submit.prevent="handleSubmit" :class="styles.form">
          <TextField
            v-model="formData.email"
            placeholder="Enter your Email and get notified"
            name="email"
            type="email"
            :required="true"
          />
          <UiButton :class="styles.formButton" type="submit">
            <ArrowRightIcon :class="styles.formButtonIcon" />
          </UiButton>
        </form>
      </div>
    </div>
  </footer>
</template>
