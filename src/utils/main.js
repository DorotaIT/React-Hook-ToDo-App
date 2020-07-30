export const toggleIsDoneStatusById = (toDos, id) => {
    const cloneToDos = JSON.parse(JSON.stringify(toDos));

    const searchedIndex = toDos.findIndex((item) => item.id === id);

    const clonedItem = cloneToDos[searchedIndex];
    cloneToDos[searchedIndex].isDone = !clonedItem.isDone;

    return cloneToDos;
}

export const deleteItem = (toDos, id) => {
    const cloneToDos = JSON.parse(JSON.stringify(toDos));
        
    const withoutDeletedId = cloneToDos.filter((item) => item.id !== id);

    return withoutDeletedId;
}