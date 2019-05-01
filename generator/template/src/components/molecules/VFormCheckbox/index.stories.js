import { mount } from '@vue/test-utils'
import VFormCheckbox from '.'

describe('Molecule - VFormCheckbox', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormCheckbox, {
      propsData: {
        value: ''
      },
      stubs: {
        VText: true,
        VLabel: {
          name: 'VLabel',
          template: '<label><slot></slot></label>'
        },
        VInputCheckbox: {
          name: 'VInputCheckbox',
          template: '<input type="checkbox" />'
        }
      }
    })
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find('.v-m-form-checkbox__question').exists()).toBe(false)

    wrapper.setProps({
      label: 'Choose your country',
      options: [
        {
          label: 'Option 1',
          value: 'option1'
        }
      ]
    })

    expect(wrapper.find('.v-m-form-checkbox__question').text()).toBe('Choose your country')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
  })

  test('Renders one checkbox if options is not passed', () => {
    const input = wrapper.findAll({ name: 'VInputCheckbox' })

    expect(input.length).toBe(1)
  })
})
