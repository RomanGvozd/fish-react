export const ACTION_ADD = "ACTION_ADD";
export const ACTION_DELETE = "ACTION_DELETE";

export function deleteItem(id) {
    return { type: ACTION_DELETE, payload: id }
}
export function createItem(title, prise, weight) {
    return { type: ACTION_ADD, title: title, prise: prise, weight: weight}
}
