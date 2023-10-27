import { Component } from "react";

import {uuid as uuidV4} from "react-uuid";

import TodoItem from "../TodoItem";
const dataList=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    }
  ]

class Todo extends Component{
    state={list:dataList, userInput:''}

    onChangeUserInput=(event)=>{
        this.setState({userInput:event.target.value})
    }

    onClickAdd=(event)=>{
        const {list, userInput}=this.state
        const newItem = {id:uuidV4, title: userInput, completed: false}

        if (userInput!==''){
            this.setState({list:[...list, newItem], userInput:''})
        }
    }

    onDeleteItem=id=>{
        const {list}= this.state

        const filteredData= list.filter(eachItem=> {
            if (eachItem.id!==id){
                return eachItem
            }
        })

        this.setState({list:filteredData})
    }

    changeStatus=id=>{
        const {list}= this.state
        const changeItem= list.filter(each=>{
            if (each.id===id){
                if (each.completed===true){
                  return each.completed=false
                }else{
                  return each.completed= true
                }
            }return null
        })
    }

    render(){
        const {userInput, list}= this.state

        
        return(
            <div>
                <h1>My Todos</h1>
                <h1>Create Your Task</h1>
                <div>
                    <input type='text' value={userInput} onChange={this.onChangeUserInput} />
                    <button onClick={this.onClickAdd}>Add</button>
                </div>
                <ul>
                    {
                    list.map(eachItem=>{
                        return <TodoItem key={eachItem.id} eachItem={eachItem} onDeleteItem={this.onDeleteItem}
                        changeStatus={this.changeStatus}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default Todo