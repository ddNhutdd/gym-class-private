class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }

    get() {
        return this.#name;
    }

    set (name) {
        this.#name = name;
    }

    walk() {
        console.log(`${this.#name} is walking.`);
    }
}

const person1 = new Person('Văn Phúc');
person1.walk();
person1.set("Hoài Thương");
person1.walk();
console.log(person1.get());

class Programmer extends Person {
    #programmingLanguage;
    constructor(name, programmingLanguage) {
        super(name);
        this.#programmingLanguage = programmingLanguage;
    }

    get programmingLanguage() {
        return this.#programmingLanguage;
    }

    set programmingLanguage(language) {
        this.#programmingLanguage = language;
    }

    writeCode() {
        console.log(`${this.get()} is coding in ${this.#programmingLanguage}.`);
    }
}

const programmer1 = new Programmer("Alice", "JavaScript");
programmer1.writeCode();
programmer1.walk();