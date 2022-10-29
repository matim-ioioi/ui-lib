<template>
  <button
    :class="[
      's-button',
      `s-button--${mode}`,
      {
        's-button--circle': circle,
        's-button--rounded': rounded && !circle,
        [`s-button--${componentSize}`]: componentSize,
      },
      stateClass,
    ]"
    :type="type"
    :disabled="componentState.isDisabled || componentState.isLoading"
  >
    <span v-if="componentState.isLoading" class="s-button__loader">
      <s-circular-loader />
    </span>
    <span v-if="$slots.prepend" class="s-button__prepend">
      <!-- @slot Slot for `prepend` elements -->
      <slot name="prepend" />
    </span>
    <span v-if="$slots.default" :class="['s-button__content', contentClass]">
      <!-- @slot Slot for content -->
      <slot />
    </span>
    <s-badge v-if="$slots.badge || badge" :class="['s-button__badge', badgeClass]">
      <slot name="badge">
        {{ badge }}
      </slot>
    </s-badge>
    <span v-if="$slots.append" class="s-button__append">
      <!-- @slot Slot for `append` elements -->
      <slot name="append" />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { SButtonMode, SButtonType } from '@/components/SButton/SButton.type'
import { SSize } from '@/utils/size/type'
import { getClassOfState, getState } from '@/utils/state'
import { SState } from '@/utils/state/type'
import { ComponentState } from '@/utils/state/type'
import SCircularLoader from '@/components/SCircularLoader/SCircularLoader.vue'
import SBadge from '@/components/SBadge/SBadge'
import { getSize } from '@/utils/size'

/** Button */
export default defineComponent({
  name: 'SButton',
  components: {
    SCircularLoader,
    SBadge,
  },
  props: {
    /** Button mode */
    mode: {
      type: String as PropType<SButtonMode>,
      default: 'primary',
    },

    /** Button type */
    type: {
      type: String as PropType<SButtonType>,
      default: 'button',
    },

    /** Button state */
    state: {
      type: String as PropType<SState>,
      default: '',
    },

    /** Button rounding */
    rounded: {
      type: Boolean as PropType<boolean>,
      default: true,
    },

    /** Circle mode */
    circle: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    /** The size of the button */
    size: {
      type: String as PropType<SSize>,
      default: '',
    },

    /** Additional information in the upper right corner */
    badge: {
      type: [String, Number] as PropType<string | number | undefined>,
    },

    /** Classes for button content */
    contentClass: {
      type: String as PropType<string | undefined>,
    },

    /** Classes for button badge */
    badgeClass: {
      type: String as PropType<string | undefined>,
    },
  },
  setup(props) {
    const stateClass = computed(() => getClassOfState('s-button', props.state))
    const componentState = computed<ComponentState>(() => getState(props.state))
    const componentSize = computed(() => getSize(props.size))

    return {
      componentState,
      stateClass,
      componentSize,
    }
  },
})
</script>
