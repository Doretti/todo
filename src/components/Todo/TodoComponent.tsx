import { Todo } from './Todo'
import styles from './Todo.module.scss'
import { observer } from 'mobx-react';
import {ReactComponent as TrashSVG} from '../../assets/trash.svg'

interface IProps {
  todo: Todo
  toggle: Function
  delete: Function
}

export default observer(function TodoComponent(props: IProps) {
  return (
    <label htmlFor={'checkbox__' + props.todo.id} className={styles.wrapper}>
      <input onChange={() => props.toggle(props.todo.id)} id={'checkbox__' + props.todo.id} defaultChecked={props.todo.isComplited} type="checkbox" />
      <label htmlFor={'checkbox__' + props.todo.id} className={styles.checkmark}></label>
      {props.todo.title}
      <div onClick={() => props.delete()} className={styles.deleteButton}>
        <TrashSVG />
      </div>
    </label>
  )
})
