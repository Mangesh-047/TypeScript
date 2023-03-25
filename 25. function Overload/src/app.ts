let cl = console.log;

type combinable = string | number;

function combine(n1: number, n2: number): number;
function combine(n1: string, n2: string): string;
function combine(n1: number, n2: string): string;
function combine(n1: string, n2: number): string;
function combine(n1: combinable, n2: combinable) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        return n1 + n2.toString()
    }
}




let add = combine(10, 10)
let conn1 = combine('hello', 'ts')
let conn2 = combine(10, 'ts')
let conn3 = combine('ts', 10)