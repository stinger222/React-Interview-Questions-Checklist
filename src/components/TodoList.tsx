import { useLocalStorage } from "../hooks/useLocalStorage"
import { ITodo } from "../types"
import TodoItem from "./TodoItem"
import styles from "../styles/index.module.css"

interface IProps {
	defaultTodos: ITodo[]
}

const TodoList: React.FC<IProps> = ({ defaultTodos }) => {
	const {value: todos, setValue: setTodos} = useLocalStorage<ITodo[]>('todos', defaultTodos)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
		setTodos(todos.map(i => i.label === label ? {...i, isChecked: e.target.checked} : i))
	}

	const handleHightlight = (label: string) => {		
		setTodos(todos.map(i => i.label === label ? {...i, isImportant: !i.isImportant} : i))
	}

	const handleDelete = (label: string) => {
		setTodos(todos.filter(i => i.label !== label))
	}
	
	return (
		<div className={styles.todoList}>
			{
				todos.map(todo => (
					<TodoItem
						todo={todo}
						onCheck={handleCheck}
						onHighlight={handleHightlight}
						onDelete={handleDelete}
						key={todo.label}
					/>
				))
			}
		</div>
	)
}

export default TodoList
