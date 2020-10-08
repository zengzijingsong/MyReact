import MyReactDom from "./MyReactDom";

function createElement(tag, attrs, ...children) { 
  return {
    tag,
    attrs,
    children
  }
}

class Component { 
  constructor(props) {
    this.props = props //构造组件时，需要一些属性
    this.state = {} //组件内部有些状态/变量
  }

  setState(state) {
    this.state = Object.assign(this.state, state) //额外的新增或修改，不是覆盖，所以用 Object.assign
    MyReactDom.renderComponent(this)
  }
}

export default {
  createElement,
  Component
}