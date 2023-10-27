import {AiFillDelete} from 'react-icons/ai'

import './index.css'


const TodoItem =props=>{
    const {eachItem, onDeleteItem, changeStatus} = props
    const {id, title, completed}= eachItem

    const onClickDeleteItem=()=>{
        onDeleteItem(id)
    }

    const onChangeSatus=()=>{
        changeStatus(id)
    }

    return (
        <li className={completed? "complete": "not-complete"}>
            <input type='button' onClick={onChangeSatus} value={title}
            />
            <button type='button' onClick={onClickDeleteItem}> <AiFillDelete/></button>
        </li>
    )
}

export default TodoItem