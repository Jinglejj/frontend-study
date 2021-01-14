import React ,{Fragment}from 'react'
import store from './store'
import {getAddTodoItem, getDeleteTodoItem, getUpdateInputValue} from "./store/action";
import TodoListUI from "./TodoListUI";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }


    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        return (
            <Fragment>
                <TodoListUI
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    handleItemDelete={this.handleItemDelete}
                />
            </Fragment>

        )
    }

    //组件挂载之后执行
    componentDidMount() {
        //在这里 Ajax获取数据
        console.log('componentDidMount')
    }

    //组件更新之前，自动执行
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return true
    }

    //组件更新之前执行，如果shouldComponentUpdate返回true时才会执行，
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate')
    }

    //组件更新之前执行
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    //当这个组件即将被从页面中剔除时执行
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


    handleInputChange(e) {
        const action = getUpdateInputValue(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick() {
        const action = getAddTodoItem()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteTodoItem(index)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(() => (store.getState()))
    }


}


export default TodoList;