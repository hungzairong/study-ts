// any 類型
let a: any 
a = 123;
let x : string = a; // 任意類型可以賦值給任何類型
console.log('x:', typeof x); 

// unknown 類型 安全的any
let b: unknown 
b = 'school'; 
(b as string).toUpperCase(); // 未知類型不能調用方法 as string 斷言
console.log('b:', b);

// never 類型 永遠不會有值的類型 , 通常用於限制函數返回值
function neverReturn(): never {
    throw new Error('never');
}
console.log('neverReturn:', neverReturn());

// void 類型 沒有值的類型 , 通常用於限制函數返回值 ,返回值為空 undefined
function voidReturn(): void {
    console.log('void');
}
console.log('voidReturn:', voidReturn());

// null 類型 沒有值的類型 , 通常用於限制變量賦值
let e: null = null;
console.log('e:', e);

// undefined 類型 沒有值的類型 , 通常用於限制變量賦值
let f: undefined = undefined;
console.log('f:', f);

// symbol 類型 唯一值的類型 , 通常用於限制變量賦值
let g: symbol = Symbol('symbol');
console.log('g:', g);