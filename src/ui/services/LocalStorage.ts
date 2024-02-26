// Local storage to get/update data

function storeLocalStorage(key: string, value: any): void {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
}

function getLocalStorage<T>(key: string): any | [] {
    const stringifiedValue = localStorage.getItem(key);
    if (stringifiedValue) {
        return JSON.parse(stringifiedValue) as T;
    }
    return [];
}
export { storeLocalStorage, getLocalStorage};