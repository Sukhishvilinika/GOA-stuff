const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  console.log("Make:", car.make);
  console.log("Model:", car.model);
  console.log("Year:", car.year);
  
  person.age = 31;
  person.hobby = "Reading";
  delete person.city;
  
  const calculator = {
    a: 5,
    b: 3,
    add: function() {
      return this.a + this.b;
    }
  };
  
  console.log("Sum:", calculator.add());
  
  const book1 = {
    title: "1984",
    author: "George Orwell",
    pages: 328
  };
  
  const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
  };
  
  const book3 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
  };
  
  function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
      console.log(this.sound);
    };
    this.changeName = function(newName) {
      this.name = newName;
    };
  }
  
  const cat = new Animal("Cat", "Meow");
  const dog = new Animal("Dog", "Bark");
  
  cat.makeSound();
  dog.makeSound();
  
  cat.changeName("Kitty");
  console.log(cat.name);
  