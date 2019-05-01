import { mount } from '@vue/test-utils'
import VFormRadio from '.'

describe('Molecule - VFormRadio', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormRadio, {
      propsData: {
        value: '',
        options: [
          {
            label: 'Option 1',
            value: 'option1'
          }, {
            label: 'Option 2',
            value: 'option2'
          }
        ]
      },
      stubs: {
        VInputRadio: {
          name: 'VInputRadio',
          template: '<input type="radio" />'
        },
        VLabel: {
          name: 'VLabel',
          template: '<label><slot></slot></label>'
        }
      }
    })
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find('.v-m-form-radio__question').exists()).toBe(false)

    wrapper.setProps({
      label: 'Choose your country'
    })

    expect(wrapper.find('.v-m-form-radio__question').text()).toContain('Choose your country')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
  })
})
