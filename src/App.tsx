import './App.css'
import TodoList from './components/TodoList'
import { rawTodos } from './constants'
import { IRawTodo, ITodo } from './types'

const getDefaultTodos = (rawTodos: IRawTodo[]): ITodo[] => {
	return rawTodos.map((todo): ITodo => ({
		label: todo.label,
		isChecked: false,
		isImportant: false,
		link: `https://github.com/sudheerj/reactjs-interview-questions${todo.link}`
	}))
}

function App() {
  return (
		<TodoList defaultTodos={getDefaultTodos(rawTodos)}/>
  )
}

export default App
