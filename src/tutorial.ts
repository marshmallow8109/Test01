const name: string = "Ada";
console.log(name);

// const book: (string | number)[] = [2, 8, 0, "hello", "ada", 90];

// let i = 0;
// setInterval(() => {
//   if (i < book.length) {
//     console.log(book[i]);
//     i++;
//   }
// }, 2000);

type BOOK = {
  name: string;
  note: number;
};

type BBOOK = {
  name: string;
  readonly note: number;
};

const Abook = { name: "book", note: 20 };
const BBook: BBOOK = { name: "ada", note: 80 };

const list: BOOK[] = [Abook, BBook];
list[1].note = 67;
console.log(list);

const createStudent = (student: { name: string; id: number }) => {
  console.log(`welcome student ${student.name}`);
  return student;
};

const newStudent = {
  name: "Bingo",
  id: 89,
  stud: "fool",
};

const data = createStudent({ name: "Ada", id: 89 });
const data2 = createStudent(newStudent);

console.log(data2);

class Book {
  name: string;
  dept: string;
  constructor(name: string, dept: string) {
    this.name = name;
    this.dept = dept;
  }
  getBook(): void {
    console.log(`the name is ${this.name}`);
  }
}

const Book1 = new Book("ada", "sicence");
console.log(Book1);

class Book09 {
  constructor(public leafs: number) {}
}

interface Iperson {
  name: string;
  age: number;
}

class Person extends Book09 implements Iperson {
  constructor(public name: string, public age: number, leafs: number) {
    super(leafs);
  }
  getDetails() {
    return `the details are ${this.name} and the age is ${this.age} and leafs ${this.leafs}`;
  }
}

const person = new Person("Adams", 90, 1000);
console.log(person.getDetails());

type INITial = {
  name: string;
  age: number;
};

type Action = {
  type: string;
  payload: string;
};

const init: INITial = {
  name: "ada",
  age: 89,
};

const ReducerFn = (state: INITial, action: Action): INITial => {
  return state;
};

const [state, dispatch] = useReducer(ReducerFn, init);
