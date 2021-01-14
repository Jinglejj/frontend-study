import {Button, Input, List} from "antd";
import React from "react";
// 无状态组件，性能比较好，因为没有生命周期，只负责页面渲染，不处理业务逻辑
const todoListUI = (props) => {
    return (
            <div style={{margin: '16px'}}>
                <Input style={{width: '300px', marginRight: '16px'}}
                       value={props.inputValue}
                       onChange={props.handleInputChange}/>
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                <List style={{marginTop:'16px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {
                            props.handleItemDelete(index)
                        }}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
    )
}


export default todoListUI;