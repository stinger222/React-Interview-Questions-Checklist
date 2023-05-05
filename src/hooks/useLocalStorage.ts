import { useEffect, useState } from "react"

export const useLocalStorage = (key: string, defalutValue: any) => {
	const calculateDick = () => {
		const storedValue = localStorage.getItem(key)?.trim()

		return storedValue ? JSON.parse(storedValue).length > 0 ? JSON.parse(storedValue) : defalutValue : defalutValue
	}

	const [value, setValue] = useState(calculateDick())


	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value])
	
	return [value, setValue]
}