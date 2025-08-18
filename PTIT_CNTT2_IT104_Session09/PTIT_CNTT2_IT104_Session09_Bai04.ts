const withDefault=<T>(input?: T): string | T=>{
    if (input) return input;
    else return "default";
}

console.log(withDefault(), withDefault(42), withDefault(true))