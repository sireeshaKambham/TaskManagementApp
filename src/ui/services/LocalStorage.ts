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

function getUserDetailsById(key: string, id: string): any {
    const stringifiedValue = localStorage.getItem(key);
    if (stringifiedValue) {
        return JSON.parse(stringifiedValue).find((item: { linkId: string }) => item.linkId === id);
    }
    return undefined;
}

export { storeLocalStorage, getLocalStorage, getUserDetailsById};