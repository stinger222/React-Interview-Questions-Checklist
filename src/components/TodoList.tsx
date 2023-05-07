import { useLocalStorage } from "../hooks/useLocalStorage"
import { ITodo } from "../types"
import TodoItem from "./TodoItem"
import styles from "../styles/index.module.css"
import { LS_KEY } from "../constants"

interface IProps {
	defaultTodos: ITodo[]
}

const TodoList: React.FC<IProps> = ({ defaultTodos }) => {
	const {value: todos, setValue: setTodos} = useLocalStorage<ITodo[]>(LS_KEY, defaultTodos)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
		setTodos(todos.map(i => i.label === label ? {...i, isChecked: e.target.checked} : i))
	}

	const handleHighlight = (label: string) => {		
		setTodos(todos.map(i => i.label === label ? {...i, isImportant: !i.isImportant} : i))
	}

	const handleDelete = (label: string) => {
		setTodos(todos.filter(i => i.label !== label))
	}
	
	const handleReset = () => {
		if (!window.confirm("Are you sure you want to restore all changes?")) return
		localStorage.removeItem(LS_KEY)
		location.reload()
	}

	return (
		<div className={styles.todoList}>
			{
				todos.map(todo => (
					<TodoItem
						todo={todo}
						onCheck={handleCheck}
						onHighlight={handleHighlight}
						onDelete={handleDelete}
						key={todo.label}
					/>
				))
			}
			<span className={styles.reset} onClick={handleReset}>Reset</span>
		</div>
	)
}

export default TodoList
