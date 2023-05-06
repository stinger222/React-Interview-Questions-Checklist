import { ITodo } from "../types"

interface IProps {
	todo: ITodo,
	onCheck: (e: React.ChangeEvent<HTMLInputElement>, label: string) => void
	onDelete: (label: string) => void,
	onHighlight: (label: string) => void
}

const TodoItem: React.FC<IProps> = ({todo, onCheck, onDelete, onHighlight}) => {	
	return (
		<div style={{textAlign: "start"}}>
			<input
				type="checkbox"
				checked={todo.isChecked}
				onChange={(e) => onCheck(e, todo.label)}
		/>

			<span
				style={{ color: todo.isImportant ? 'royalblue': 'black', cursor: 'pointer'}}
				onClick={() => onHighlight(todo.label)}
			>
				{todo.label}
			</span>

			<button
				style={{height: '10px',width: '10px', padding:'10px'}}
				onClick={() => onDelete(todo.label)}
			>x</button>

			<a href={todo.link} target="_blank">
			<button
				style={{height: '10px',width: '10px', padding:'10px'}}

				>?</button>
		</a>
		</div>
	)
}

export default TodoItem
