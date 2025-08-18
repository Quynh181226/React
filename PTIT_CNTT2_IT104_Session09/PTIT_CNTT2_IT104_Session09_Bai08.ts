const createObject=<K extends string, V>(keys: K[], values: V[]): Record<K, V> =>{
    const result = {} as Record<K, V>

    keys.forEach((key, index) => {
        result[key] = values[index] as V
    });
    return result
}

const keys = ['name', 'age', 'email'];
const values = ['Quynh', 18, 'quynh2682@icloud.com'];
console.log(createObject(keys, values));