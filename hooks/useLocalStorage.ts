import { useState } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initial);

  const updateValue: SetValue<T> = (newValue) => {
    if (typeof newValue === 'function') {
      // Cast newValue to a function and call it with the current value
      const computedValue = (newValue as (prevValue: T) => T)(value);
      setValue(computedValue);
      localStorage.setItem(key, JSON.stringify(computedValue));
    } else {
      // If newValue is a plain value, set it directly
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, updateValue];
}

export default useLocalStorage;
