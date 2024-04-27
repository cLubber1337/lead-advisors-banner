<script setup>
import styles from './text-field.module.scss'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <input
    :class="styles.textField"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :value="modelValue"
    :required="required"
    autocomplete="off"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
