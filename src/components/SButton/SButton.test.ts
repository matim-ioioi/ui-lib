import { mount } from '@vue/test-utils'
import SButton from '@/components/SButton/SButton.vue'

const BUTTON_CONTENT = 'Button content'

describe('General tests for SButton', () => {
  test('Is Vue snapshot', () => {
    const wrapper = mount(SButton, {
      slots: {
        default: BUTTON_CONTENT,
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  test('Button state is "default"', () => {
    const wrapper = mount(SButton, {
      slots: {
        default: BUTTON_CONTENT,
      },
    })

    const buttonContent = wrapper.find('.s-button__content')
    expect(buttonContent.exists()).toBeTruthy()

    const buttonContentText = buttonContent.text()
    expect(buttonContentText).toBe('Button content')
  })

  test('Button state is "loading"', () => {
    const wrapper = mount(SButton, {
      props: {
        state: 'loading',
      },
      slots: {
        default: BUTTON_CONTENT,
      },
    })

    const buttonLoader = wrapper.find('.s-button__loader')
    expect(buttonLoader.exists()).toBeTruthy()
  })

  test('Button state is "disabled"', () => {
    const wrapper = mount(SButton, {
      props: {
        state: 'disabled',
      },
      slots: {
        default: BUTTON_CONTENT,
      },
    })

    const buttonDisabled = wrapper.find('.s-button--disabled')
    expect(buttonDisabled.exists()).toBeTruthy()
  })
})
