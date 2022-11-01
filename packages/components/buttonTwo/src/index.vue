<template>
  <button :class="buttonClass" :style="buttonStyle" :loading="loading" @click="handleClick">
    <slot />
  </button>
</template>
<script lang="ts" setup name="Button">
import { computed } from 'vue'
import { buttonProps, buttonEmits } from './interface'
// import { useGlobalConfig } from '@supaur-works/sa-ui'

// const globalConfig = useGlobalConfig()

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const sizeRef = computed(() => {
  const { size } = props
  return size || 'middle'
})

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}

const buttonStyle = computed(() => {
  return {
    'border-radius': props.round + 'px',
    width: props.block ? '100%' : '',
    display: props.block ? 'flex' : ''
  }
})

const buttonClass = computed(() => {
  return ['sa-button', props.plain ? 'sa-button-plain' : '', 'sa-button-' + sizeRef.value, props.disabled || props.loading ? 'sa-button-disabled' : '']
})
</script>
<style lang="scss">
.sa-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  background: #1989fa;
  color: #fff;
  border: 2px solid #1989fa;

  &-plain {
    background-color: #fff;
    border: 2px solid #1989fa;
    color: #1989fa;
  }

  &-small {
    padding: 0 24px;
    font-size: 12px;
    height: 48px;
  }

  &-middle {
    padding: 0 32px;
    font-size: 14px;
    height: 52px;
  }

  &-large {
    padding: 0 72px;
    font-size: 16px;
    height: 58px;
  }

  &-disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &::after {
    border: none;
  }
}
.page{
  color: #fff;
}
</style>
