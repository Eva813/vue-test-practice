import { mount, shallowMount } from '@vue/test-utils'

const Child = {
  template: "<div>Child component</div>"
}

const Parent = {
  template: "<div><child /> <span>this is parent</span></div>",
  components: {
    Child
  }
}

describe('shallowMount example', () => {
  test('test', () => {
    const childShallowWrapper = shallowMount(Child)
    const childMountWrapper = mount(Child)
    console.log(childShallowWrapper.html())
    console.log(childMountWrapper.html())

    //主要看父層級這邊使用 shallowMount 沒有顯示子層的 html
    //mount 則會檢視全部
    const parentShallowWrapper = shallowMount(Parent)
    const parentMountWrapper = mount(Parent)
    console.log(parentShallowWrapper.html())
    console.log(parentMountWrapper.html())
  })
})
