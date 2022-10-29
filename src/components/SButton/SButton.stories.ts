import { Meta, Story } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import { getDecorators, getStoryParams } from '@/storybook/utils/config'
import { assetsIcons, componentStates } from '@/storybook/types'
import SButton from '@/components/SButton/SButton.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

export default {
  title: 'DESIGN SYSTEM/Atom/Button',
  component: SButton,
  decorators: getDecorators(),
  parameters: getStoryParams('84%3A1958'),
  argTypes: {
    content: { control: 'text' },
    append: {
      control: { type: 'select' },
      options: assetsIcons,
    },
    prepend: {
      control: { type: 'select' },
      options: assetsIcons,
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    mode: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'light', 'icon', 'link'],
    },
    circle: { control: 'boolean', if: { arg: 'rounded', truthy: false } },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm'],
    },
    badge: { control: 'text' },
    rounded: { control: 'boolean', if: { arg: 'circle', truthy: false } },
    state: {
      control: { type: 'select' },
      options: componentStates,
    },
    contentClass: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => ({
  components: { SButton, SvgIcon },
  setup() {
    const handleClickOnButton = () => action('button-click')(args)
    return {
      args,
      handleClickOnButton,
    }
  },
  template: `
    <s-button v-bind="args" @click="handleClickOnButton">
      {{ args.content }}
      <template v-if="args.prepend" #prepend>
        <svg-icon :name="args.prepend" />
      </template>
      <template v-if="args.append" #append>
        <svg-icon :name="args.append" />
      </template>
    </s-button>
  `,
})

const TemplateIcon: Story = (args) => ({
  components: { SButton, SvgIcon },
  setup() {
    const handleClickOnButton = () => action('button-click')(args)
    return {
      args,
      handleClickOnButton,
    }
  },
  template: `
    <s-button v-bind="args" @click="handleClickOnButton">
      <svg-icon name="search" />
    </s-button>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  content: 'Primary',
  append: 'arrow-right',
  prepend: 'arrow-left',
  test: '',
}

export const Secondary = Template.bind({})
Secondary.args = {
  content: 'Secondary',
  mode: 'secondary',
  append: 'arrow-right',
  prepend: 'arrow-left',
}

export const Outline = Template.bind({})
Outline.args = {
  content: 'Outline',
  mode: 'outline',
  append: 'arrow-right',
  prepend: 'arrow-left',
}

export const Light = Template.bind({})
Light.args = {
  content: 'Light',
  mode: 'light',
  append: 'arrow-right',
  prepend: 'arrow-left',
}

export const Link = Template.bind({})
Link.args = {
  content: 'Link',
  mode: 'link',
  append: 'arrow-right',
}

export const Badge = Template.bind({})
Badge.args = {
  content: 'Button',
  badge: 'Badge',
}

export const Circle = TemplateIcon.bind({})
Circle.args = {
  content: 'Button',
  circle: true,
}
