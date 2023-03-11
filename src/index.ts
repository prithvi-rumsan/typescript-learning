// built-in types
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// any type
let level;
level = 1;
console.log(level);
level = 'one';
console.log(level);

function render(document: any) {
	console.log(document);
}

//arrays
let numbers: number[] = [1, 2, 3];
numbers.forEach(el => el.toExponential());
console.log(numbers);

//tuples -> fixed length array where each element has a particular type
let user: [number, string] = [1, 'Ram'];

//enums -> a list of related constants
enum size {
	small = 1,
	medium,
	large
}
let mySize: size = size.medium;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear: number = 2023): number {
	if (taxYear < 2023) return income * 1.12;
	return income * 1.3;
}

calculateTax(10_000);

//objects
let employee: Employee = {
	id: 1,
	name: 'Ram',
	retire: (date: Date) => console.log(date)
};
employee.name = 'Shyam';

//advanced types

//type alias -> can use this in multiple places
type Employee = { readonly id: number; name: string; retire: (date: Date) => void };

//union types -> give variables/function parameter more than 1 type
function kgToLbs(weight: number | string): number {
	//Narrowing
	if (typeof weight === 'number') return weight * 2.2;
	else return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');

//intersection types -> must incorporate all the properties of the intersected variables
type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {}
};

//literal (exact, specific)
type Quantity = 50 | 100; // Literal type
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let lengthUnit: Metric = 'cm';

//nullable types
function greet(name: string | null | undefined) {
	if (name) console.log(name.toUpperCase());
	// cant call this method on null object. ts compiler stops us from using null/undefined values
	else console.log('HELLO!');
}

greet(null);

type Customer = {
	birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//optional property access operator customer?.birthday
if (customer !== null && customer !== undefined) console.log(customer?.birthday?.getFullYear());
