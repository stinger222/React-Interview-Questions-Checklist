interface IProps {
	label: string,
	isChecked: boolean,
	onCheck: any
	onDelete?: any
}

const TodoItem: React.FC<IProps> = ({ label, isChecked, onCheck, onDelete }) => {
	return (
		<div style={{textAlign: "start"}}>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={(e) => onCheck(e, label)}
		/>
			{label}
			<button
				style={{height: '10px',width: '10px', padding:'10px'}}
				onClick={() => onDelete(label)}
			>x</button>
		</div>
	)
}

export default TodoItem
