import { useLocalStorage } from "../hooks/useLocalStorage"
import { ITodo } from "../types"
import TodoItem from "./TodoItem"

interface IProps {
	defaultTodos: ITodo[]
}

const TodoList: React.FC<IProps> = ({ defaultTodos }) => {
	const [todos, setTodos] = useLocalStorage('todos', defaultTodos)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
		console.log(label);
		setTodos(todos.map(i => i.label === label ? {...i, isChecked: e.target.checked} : i))
	}


	const handleDelete = (label: string) => {
		setTodos(todos.filter(i => i.label !== label))
	}

	return (
		<div>
			{
				todos.map(i => <TodoItem {...i} onCheck={handleCheck} onDelete={handleDelete} key={i.label}/>)
			}
		</div>
	)
}

export default TodoList
