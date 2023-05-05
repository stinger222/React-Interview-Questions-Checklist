import { useState } from "react"

export function useLocalStorage<T> (key: string, defalutValue: T) {
  const calculateValue = (): T => {
    const storedValue = localStorage.getItem(key)?.trim()

    return storedValue ? JSON.parse(storedValue).length > 0 ? JSON.parse(storedValue) : defalutValue : defalutValue
  }

  const [value, setValue] = useState<T>(calculateValue())

  const setLocalStorageValue = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  return { value, setValue: setLocalStorageValue }
}
