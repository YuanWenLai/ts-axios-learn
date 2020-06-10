
// 类型断言
interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish){
    return (animal as Cat).name
}

let animal = {
    name: 'kiki'
}
console.log('test1: '+getName(animal))
