class Animal {
    constructor(n) {
        this.n = n;
    }

    sound() {
        return "animal sound?";
    }
}

class Mammal extends Animal {
    constructor(n) {
        super(n);
    }

    sound() {
        return "mammal noises";
    }
}

class Dog extends Mammal {
    constructor(n, b) {
        super(n);
        this.b = b;
    }

    sound() {
        return "woof";
    }
}
class Cat extends Mammal {
    constructor(n, c) {
        super(n);
        this.c = c;
    }

    sound() {
        return "meow";
    }
}

class Labrador extends Dog {
    constructor(n, b, a) {
        super(n, b);
        this.a = a;
    }

    sound() {
        return "woof loudly!";
    }
}

class Siamese extends Cat {
    constructor(n, c, o) {
        super(n, c);
        this.o = o;
    }

    sound() {
        return "weird meow";
    }
}

class Puppy extends Labrador {
    constructor(n, b, a, e) {
        super(n, b, a);
        this.e = e;
    }

    sound() {
        return "yip yip!";
    }
}

let a1 = new Animal("Animal");
let m1 = new Mammal("Mammal");
let d1 = new Dog("Buddy", "Golden");
let c1 = new Cat("Whiskers", "Black");
let l1 = new Labrador("Max", "Lab", 5);
let s1 = new Siamese("Luna", "Cream", "Thailand");
let p1 = new Puppy("Bella", "Lab", 1, "High");

console.log(a1.sound());  // animal sound?
console.log(m1.sound());  // mammal noises
console.log(d1.sound());  // woof
console.log(c1.sound());  // meow
console.log(l1.sound());  // woof loudly!
console.log(s1.sound());  // weird meow
console.log(p1.sound());  // yip yip!
