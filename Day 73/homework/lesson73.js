class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    get getName() {
        return this.name;
    }
    get getSpecies() {
        return this.species;
    }
    makeSound() {
        return "Some sound";
    }
    static info() {
        return "Animals are living organisms that feed on organic matter.";
    }
}
class Dog extends Animal {
    makeSound() {
        return "Bark";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow";
    }
}
class Bird extends Animal {
    makeSound() {
        return "Chirp";
    }
}
class Fish extends Animal {
    makeSound() {
        return "Blub";
    }
}
class Elephant extends Animal {
    makeSound() {
        return "Trumpet";
    }
}
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    get getBrand() {
        return this.brand;
    }

    get getModel() {
        return this.model;
    }
    honk() {
        return "Beep!";
    }
    static info() {
        return "Cars are vehicles that are primarily used for transportation.";
    }
}
class Sedan extends Car {
    honk() {
        return "Sedan beep!";
    }
}
class SUV extends Car {
    honk() {
        return "SUV honk!";
    }
}
class Truck extends Car {
    honk() {
        return "Truck horn!";
    }
}
class SportsCar extends Car {
    honk() {
        return "Vroom!";
    }
}
class ElectricCar extends Car {
    honk() {
        return "Silent beep!";
    }
}
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    speak() {
        return "Hello!";
    }

    static info() {
        return "Humans are a species of bipedal primates.";
    }
}
class Teacher extends Human {
    speak() {
        return "I teach!";
    }
}
class Student extends Human {
    speak() {
        return "I learn!";
    }
}
class Doctor extends Human {
    speak() {
        return "I heal!";
    }
}
class Engineer extends Human {
    speak() {
        return "I build!";
    }
}
class Artist extends Human {
    speak() {
        return "I create!";
    }
}
class Knowledge {
    constructor(field, level) {
        this.field = field;
        this.level = level;
    }
    get getField() {
        return this.field;
    }
    get getLevel() {
        return this.level;
    }
    explain() {
        return `I have knowledge in ${this.field} at a ${this.level} level.`;
    }

    static info() {
        return "Knowledge is information, understanding, or skill obtained from experience or education.";
    }
}

class Science extends Knowledge {
    explain() {
        return "I explain natural phenomena through observation and experimentation.";
    }
}

class Art extends Knowledge {
    explain() {
        return "I explore creativity through various forms of expression.";
    }
}

class Technology extends Knowledge {
    explain() {
        return "I use scientific principles to solve practical problems.";
    }
}
const dog = new Dog("Buddy", "Dog");
console.log(dog.getName);
console.log(dog.makeSound());

const sedan = new Sedan("Toyota", "Camry");
console.log(sedan.getBrand); 
console.log(sedan.honk());

const teacher = new Teacher("Alice", 30);
console.log(teacher.getName); 
console.log(teacher.speak()); 

const scienceKnowledge = new Science("Biology", "Expert");
console.log(scienceKnowledge.getField);
console.log(scienceKnowledge.explain());
