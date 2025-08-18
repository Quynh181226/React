const identity = <T>(e: T): T => e;

console.log(identity(5), identity("helloo"), identity({a: 1}))