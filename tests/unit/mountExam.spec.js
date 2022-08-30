import { mount } from '@vue/test-utils'


const ComponentWithProps = {
  template: '<div>{{ msg }}</div>',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
const Component = {
  template: '<div>Hello world</div>',
}



describe('Mount example', () => {
  test('mounts a component', () => {
    const wrapper = mount(Component)

    expect(wrapper.html()).toContain('Hello world')
  })

  //mount 的第一個參數是欲被測試的元件，第二個參數是可以用來定義元件的狀態 (state) 配置，例如 props, data, attrs 等等。
  test('mounts a component with props', () => {
    const wrapper = mount(ComponentWithProps, {
      propsData: {
        msg: 'Hello world'
      }
    })
    expect(wrapper.html()).toContain('Hello world')
  })
})
