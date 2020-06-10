class Animal {
    age: number
    constructor(age: number) {
        this.age = age
    }
    move(distance: number = 0) {
        console.log(`animal moved ${distance}m`)
    }
}


// User 已经继承了 Animal的age，在User属性中不用再生命，只需要调用即可
class User extends Animal {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lasetName: string, age: number) {
        super(age)
        this.firstName = firstName
        this.lastName = lasetName
        this.fullName = firstName + lasetName
    }
    sayHi() {
        return this.fullName + ' ' + 'Hi!' + ' age: ' +this.age
    }

    // 静态方法无法直接访问class的属性，需要外部传参
    static welcome(name: string):string {
        return 'no instance ,welcome by class '+ name
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greater(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('Yuan', 'Wenlai', 23)

console.log(greater(user))
console.log(user.sayHi())
console.log(User.welcome(user.fullName))

