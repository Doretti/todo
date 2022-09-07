import { observer } from 'mobx-react';
import Board from './components/Board/Board';
import Sidebar from './components/Sidebar/Sidebar';
import './global.scss'
import { useState } from 'react';
import { Store } from './Store';

const App = observer(() => {

  const [state] = useState(() => new Store())

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setCollection={(cat: string) => { state.category = cat }}/>
      <Board todos={state.getTodos()} toggleTodo={state.toggleTodo.bind(state)} delete={state.removeTodo.bind(state)} createTodo={state.addTodo.bind(state)} category={state.category}/>
    </div>
  )
})

export default App;
