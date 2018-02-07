function fibonacci(num) {
    if (num == 1) return 0 //caso base
    if (num == 2) return 1 //caso base

    return fibonacci(num - 1) + fibonacci(num -2)
}
fibonacci(8)
console.log("hola")