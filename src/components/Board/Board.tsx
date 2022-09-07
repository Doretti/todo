import { observer } from 'mobx-react'
import { RefObject, createRef } from 'react';
import { Store } from '../../Store';
import { Todo } from '../Todo/Todo';
import TodoComponent from '../Todo/TodoComponent'
import styles from './Board.module.scss'

interface IProps {
  category: string
  todos: Todo[]
  createTodo: Function
  toggleTodo: Function
  delete: Function
}

export default observer(function Board(props: IProps) {
  const text = createRef() as RefObject<HTMLInputElement>

  const complited = props.todos?.filter((todo: Todo) => todo.isComplited)
  const ncomplited = props.todos?.filter((todo: Todo) => !todo.isComplited)

  const createTodo = (event: any) => {
    event.preventDefault()
    if (text?.current?.value) {
      props.createTodo(new Todo(Store.id, String(text.current.value), props.category))
      text.current.value = ''
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2>{props.category}</h2>
      <form onSubmit={createTodo} className={styles.createButton}>
        <button onClick={createTodo}>+</button>
        <input autoFocus ref={text} type="text" placeholder='Add a todo' />
      </form>
      <p>Tasks - {ncomplited.length}</p>
      <div className={styles.board}>
        {
          ncomplited?.map((todo: Todo) => <TodoComponent delete={() => props.delete(todo.id)} toggle={props.toggleTodo} key={todo.id} todo={todo}/>)
        }
      </div>
      <p>Complited - {complited.length}</p>
      <div className={styles.board}>
        {
          complited?.map((todo: Todo) => <TodoComponent delete={() => props.delete(todo.id)} toggle={props.toggleTodo} key={todo.id} todo={todo}/>)
        }
      </div>
    </div>
  )
})  
