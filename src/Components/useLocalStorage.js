import { useState } from 'react';

/**
 * 
 * @param {*la llave} key 
 * @param {*valor inicial si es la primeraa vez} initialValue 
 * @returns retorna el valor inicial si no habia nada, importante que se usan los nombres que se le da a las variables que normalmente se usarian con el useState
 */


export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue]
}