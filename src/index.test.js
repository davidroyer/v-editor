import { mount } from 'vue-test-utils'
import VEditor from './'

test('it works', () => {
  const wrapper = mount(VEditor)
  expect(wrapper.isVueInstance()).toBe(true)
})
