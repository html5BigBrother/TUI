import type { ExtractPropTypes, PropType } from 'vue'
import type Button from './index.vue'

export const buttonProps = {
  plain: {
    type: Boolean,
    default: false
  },
  size: String,
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type: [Number, String],
    default: 0,
    validator: (val: string | number) => {
      const n = Number(val)
      return !isNaN(n)
    }
  },
  block: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonInstance = InstanceType<typeof Button>

export const buttonEmits = {
  click: null
}

export type ButtonEmits = typeof buttonEmits
