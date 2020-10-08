import MyReact from './MyReact' 
import MyReactDOM from './MyReactDom'

//得到了 Component 中的 props,render方法
// new App 时，就会去渲染组件
class App extends MyReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三',
      job: '后端工程师',
      hobby: '看电影'
    }
  }
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">hello <span>{ this.state.name }</span></h1>
        <p>hobby: { this.state.hobby }</p>
        <Job job={ this.state.job } onModifyJob = { this.onModifyJob.bind(this) }></Job>
        <Hobby hobby={ this.state.hobby }></Hobby>
      </div>
    )
  }
  onModifyJob(newJob) {
    this.setState({job: newJob})
  }
}

class Job extends MyReact.Component {
  render() {
    return (
      <div className="job">
        我的工作是{ this.props.job }
        <button onClick = { this.modifyJob.bind(this) }>修改工作</button>
      </div>
    )
  }
  modifyJob() {
    this.props.onModifyJob('React工程师')
  }
}

function Hobby(props) {
  return (
    <p>我的兴趣是{ props.hobby }</p>
  )
}

MyReactDOM.render(<App/>, document.querySelector('#app'))