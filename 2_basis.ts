// 声明一个变量类型为number，在以后的使用过程中，该变量的类型只能是number
let a: number
a = 10
a = 22

// Type 'string' is not assignable to type 'number'.
// a = 'hello'
console.log(a);

let c: boolean
// 等效于 let c:boolean = false
console.log(c);
// Type 'number' is not assignable to type 'boolean'.
// 如果是直接声明并赋值，那么TS会自动对变量进行类型检测
c = true
// 下方括号后的 :number 的意思是,该函数的返回值是number类型
function sum(a:number, b:number):number {
    return a + b
}
let res = sum(123,456)
console.log(res);
// 但是编译会正常编译成功，是因为TS需要兼容JS开发者的编码习惯，会报错，但是依旧会编译成功
