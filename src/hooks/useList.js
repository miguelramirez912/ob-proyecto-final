const { useState } = require('react');

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);
    // Agregar un elemento a la lista
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };
    // Eliminar un elemento de la lista
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((element, i) => i !== index));
    };
    // Esta vacia la lista?
    const isEmpty = () => value.length === 0;
    // Limpiar la lista
    const clear = () => setValue([]);
    // Ordenar la Lista
    const sort = () => {
        setValue((oldValue) => [...oldValue.sort()]);
    };
    // inverir la lista
    const revertList = () => {
        setValue((oldValue) => [].concat(...oldValue).reverse());
    };
    return {
 value, setValue, push, remove, isEmpty, clear, sort, revertList,
};
};

export default useList;
