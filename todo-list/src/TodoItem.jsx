import React, {Component  } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    // 当一个组件从父组件接受参数
    // 只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件已经存在于父组件中，才会执行
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('child componentWillReceiveProps')
    }

    //当这个组件即将被从页面中剔除时执行
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.content !== this.props.content;
    }

    render(){
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

TodoItem.propTypes={
    content:PropTypes.oneOfType(PropTypes.number,PropTypes.string),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps={
    test:'Hello World'
}


export default TodoItem;