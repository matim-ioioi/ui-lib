<template>
  <div :class="['empty-block', { 'empty-block--compact': compact }]">
    <div v-if="$slots.icon" class="empty-block__icon" aria-hidden="true">
      <!-- @slot Slot for icon -->
      <slot name="icon" />
    </div>
    <div v-if="$slots.title || title" class="empty-block__title" role="none">
      <!-- @slot Slot for title -->
      <slot name="title">
        <span class="text-l bold">{{ title }}</span>
      </slot>
    </div>
    <div v-if="$slots.description || description" class="empty-block__description text-sm">
      <!-- @slot Slot for description -->
      <slot name="description">{{ description }}</slot>
    </div>
    <div v-if="$slots.default" class="empty-block__content">
      <!-- @slot Slot for other content -->
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/** Empty block */
export default defineComponent({
  name: 'EmptyBlock',
  props: {
    /** Title */
    title: {
      type: String,
      default: 'Нет данных',
    },

    /** Description */
    description: String,

    /** Compact mode */
    compact: Boolean,
  },
})
</script>
