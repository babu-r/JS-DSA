Stack is a very useful data structure and has a wide range of application.
Stack is a linear data structure in which addition or removal of element follows a particular order 
 
i.e. LIFO(Last in First Out) AND FILO(First in Last Out).


// Stack class
class Stack {

	// Array is used to implement stack
	constructor()
	{
		this.items = [];
	}

	// Functions to be implemented
	// push(item)
	// pop()
	// peek()
	// isEmpty()
	// printStack()
}

we have created a skeleton of a stack class which contains a constructor in which we declare an array to implement stack
Hence, with the creation of an object of a stack class this constructor would be called automatically.



Push: Adds an element to the stack 

// push function
push(element) {
	// push element into the items
	this.items.push(element);
}
Method adds an element at the top of the stack.


Pop() : Removes an element from the stack, if the function is call on an empty stack it indicates “Underflow” 

// pop function
pop() {
	// return top most element in the stack and removes it from the stack Underflow if stack is empty
	if (this.items.length == 0)
		return "Underflow";
	return this.items.pop();
}
Method returns the topmost element of stack and removes it. Return underflow when called on an empty stack.

Peek() : returns the top most elements in the stack, but doesn’t delete it. 

// peek function
peek() {
	// return the top most element from the stack
	// but does'nt delete it.
	return this.items[this.items.length - 1];
}
Method return the topmost element without removing it from the stack.

isEmpty() : return true if the stack is empty 

// isEmpty function
isEmpty() {
	// return true if stack is empty
	return this.items.length == 0;
}

Returns true if the stack is empty.


printStack() : This method returns a string in which all the element of an stack is concatenated.

// printStack function
printStack() {
	var str = "";
	for (var i = 0; i < this.items.length; i++)
		str += this.items[i] + " ";
	return str;
}


Sample Program

// Performs Postfix Evaluation on a given exp
function postFixEvaluation(exp) {
	var stack = new Stack();
	for (var i = 0; i < exp.length; i++) {
		var c = exp[i];
		if (!isNaN(c))
			stack.push(c - '0');
		else {
			var val1 = stack.pop();
			var val2 = stack.pop();
			if (val1 == "Underflow" || val2 == "Underflow")
				return "Cant perform postfix evaluation";
			switch (c) {
			case '+':
				stack.push(val2 + val1);
				break;

			case '-':
				stack.push(val2 - val1);
				break;

			case '/':
				stack.push(val2 / val1);
				break;

			case '*':
				stack.push(val2 * val1);
				break;
			}
		}
	}

	return stack.pop();
}

// calling the above method
// returns 9
console.log(postFixEvaluation("235*+8-"));

// returns postfix evaluation can't be performed
console.log(postFixEvaluation("23*+"));






