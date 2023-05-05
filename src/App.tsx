import './App.css'
import TodoList from './components/TodoList'
import { rawTodos } from './constants'
import { ITodo } from './types'

const getDefaultTodos = (rawTodos: string[]): ITodo[] => {
	return rawTodos.map((todo): ITodo => ({
		label: todo,
		isChecked: false,
		isImportant: false
	}))
}

function App() {
  return (
		<div>
			<TodoList defaultTodos={getDefaultTodos(rawTodos)}/>
		</div>
  )
}

export default App
