import { ITodo } from "../types"
import styles from "../styles/index.module.css"

interface IProps {
	todo: ITodo,
	onCheck: (e: React.ChangeEvent<HTMLInputElement>, label: string) => void
	onDelete: (label: string) => void,
	onHighlight: (label: string) => void
}

const TodoItem: React.FC<IProps> = ({todo, onCheck, onDelete, onHighlight}) => {	
	return (
		<div className={styles.todoItem}>
			<input
				type="checkbox"
				checked={todo.isChecked}
				onChange={(e) => onCheck(e, todo.label)}
			/>

			<span className={`${styles.todoLabel} ${todo.isImportant ? styles.highlighted : ''}`} onClick={() => onHighlight(todo.label)}>
				{todo.label}
			</span>


			<span className={styles.controls}>
				<button onClick={() => onDelete(todo.label)}>x</button>

				<a href={todo.link} target="_blank">
					<button>?</button>
				</a>
			</span>
		</div>
	)
}

export default TodoItem
