// Primitives
let age: number

age = 12

let userName: string

userName = 'Max'

let isInstructor: boolean

isInstructor = true

// Complex
let hobbies: string[]

hobbies = ['Sports', 'Cooking']

type Person = {
  name: string,
  age: number,
}

let person: Person

person = {
  name: 'Max',
  age: 32,
}

let people: Person[]

people = [person]

// Type Inference
let course: string|number = 'React'

course = 12

// Functions
function add(a: number, b: number) {
  return a + b
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]

  return newArray
}

const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1)