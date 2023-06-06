class Cat {

    constructor(name, color, age){

        this.name = name;
        this.color = color;
        this.age = age;

    }

    eat(){
        this.food = "Tuna";
        console.log(`The cat is eating ${this.food}`);
    }

    indoor(){
        this.inside = true;
        console.log(`The cat is an indoor cat`);
    }

    bath(){
        this.bath = "hates";
        console.log(`The cat ${this.bath} bath time`);
    }


}

const cat1 = new Cat("Gizmo", "Orange", 4);
const cat2 = new Cat("Buttons", "Gray", 7);
const cat3 = new Cat();

console.log(cat1);

console.log(cat1.eat());
console.log(cat1.indoor());
console.log(cat1.bath());


console.log(cat2);

console.log(cat1.name);
console.log(cat2.age);

cat3.age = 5;
console.log(cat3);



class Pirates {

    constructor(name, age, ship){
        this.name = name;
        this.age = age;
        this.ship = ship;
    }

    money(){
        this.money = "poor";
        console.log(`This is a ${this.money} pirate!`);
    }

    pegLeg(){
        this.pegLeg = true;
        console.log(`This pirate has a peg leg`);
    }

    glassEye(){
        this.glassEye = false;
        console.log("This pirate does NOT have a glass eye");
    }

}

let flyingDuchman = [new Pirates("bob", 35, "Flying Duchman"), new Pirates("fred", 45, "Black Pearl"), new Pirates("george", 22, "Queen Anne's Revenge")];
let blackPearl = [new Pirates("randy", 40, "The Wicked Wench"), new Pirates("anthony", 29, "The Jolly Roger"), new Pirates("billy", 17, "Jackdaw")];

flyingDuchman.forEach((pirate) => {
        console.log(pirate);
});

blackPearl.forEach((pirate) => {
    console.log(pirate);
});


// console.log("my cant's name is", cat2.name);
// console.log("my cant's name is " + cat2.name);

// console.log('my cants name is', cat2.name);
// console.log('my cants name is ' + cat2.name + " so there");

// console.log(`my cants name is ${cat2.name}`);

// let test = "cat";

// console.log("Cat backwards is ");
// console.log(test.split("").reverse().join(""));