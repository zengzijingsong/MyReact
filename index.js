const MyReact={createElement};
const MyReactDom={render};

function createElement(tag,attrs,...children){
    return {
        tag,
        attrs,
        children
    }
}

let name = 'zhangsan'
function clickBtn() {
  console.log('click me')
}

let element = (
  <div className="wrapper">
    <h1 style={{color:'#f00'}}>hello {name}</h1>
    <button onClick = {clickBtn}>test</button>
  </div>
)

function render(vnode, container) { //每次调用 render 时，先把之前的清空
  container.innerHTML = ''
  _render(vnode, container)
}

function _render(vnode, container) {
  if (typeof vnode === 'string' || typeof vnode === 'number') { //如果是 string 或者 nubmer 都去创建文本节点
    return container.appendChild(document.createTextNode(vnode))
  }

  if (typeof vnode === 'object') {
    let dom = document.createElement(vnode.tag)
    setAttribute(dom, vnode.attrs)
    if (vnode.children && Array.isArray(vnode.children)) {
      vnode.children.forEach(vnodeChild => {
        _render(vnodeChild, dom) //记得这里是 _render , 这里的逻辑是不清空的
      })
    }

    container.appendChild(dom)
  }
}


function _render(vnode, container) {
  if (typeof vnode === 'string' || typeof vnode === 'number') { //如果是 string 或者 nubmer 都去创建文本节点
    return container.appendChild(document.createTextNode(vnode))
  }

  if (typeof vnode === 'object') {
    let dom = document.createElement(vnode.tag)
    setAttribute(dom, vnode.attrs)
    if (vnode.children && Array.isArray(vnode.children)) {
      vnode.children.forEach(vnodeChild => {
        _render(vnodeChild, dom) //记得这里是 _render , 这里的逻辑是不清空的
      })
    }

    container.appendChild(dom)
  }
}

function setAttribute(dom, attrs) {
  for(let key in attrs) {
    if(/^on/.test(key)) { //对事件绑定的处理，以 on 开头的，dom[onclick] = attrs[onClick]
      dom[key.toLocaleLowerCase()] = attrs[key]
    }
    if(key === 'style') { //对 style 的处理
      Object.assign(dom.style, attrs[key])
    }
  }
}

MyReactDom.render(element,document.getElementById('root'))
