# Linked List Assignment

This is a solution to the Odin Project LinkedList assignment, it is to implementing a Linked List data structure using two classes or factories: `LinkedList` and `Node`. The `LinkedList` class will represent the full list, and the `Node` class will contain a `value` property and a link to the next node, both set as null by default.

## Linked List Class

### Functions to Implement:

1. **append(value):** Adds a new node containing `value` to the end of the list.

2. **prepend(value):** Adds a new node containing `value` to the start of the list.

3. **size():** Returns the total number of nodes in the list.

4. **head():** Returns the first node in the list.

5. **tail():** Returns the last node in the list.

6. **at(index):** Returns the node at the given index.

7. **pop():** Removes the last element from the list.

8. **contains(value):** Returns true if the passed-in `value` is in the list; otherwise, returns false.

9. **find(value):** Returns the index of the node containing `value`, or null if not found.

10. **toString():** Represents your `LinkedList` objects as strings. The format should be: `( value ) -> ( value ) -> ( value ) -> null`

### Extra Credit

11. **insertAt(value, index):** Inserts a new node with the provided `value` at the given index.

12. **removeAt(index):** Removes the node at the given index.

**Extra Credit Tip:** When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their `nextNode` link updated.

## Example

```javascript
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.prepend(0);

console.log(myList.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> null
console.log(myList.size()); // Output: 3
console.log(myList.head().value); // Output: 0
console.log(myList.tail().value); // Output: 2
console.log(myList.at(1).value); // Output: 1
console.log(myList.contains(2)); // Output: true
console.log(myList.find(1)); // Output: 1
myList.pop();
console.log(myList.toString()); // Output: ( 0 ) -> ( 1 ) -> null
```

## Author

- Twitter - [Nurudeen Abdul-Majeed](https://twitter.com/ABDULMAJEEDNUR3)
- Linkedin - [Nurudeen Abdul-Majeed](https://www.linkedin.com/in/abdul-majeed-nurudeen-78266a182/)

## Acknowledgments

- Thanks to [The Odin Project](https://www.theodinproject.com/)

- All praised to Allah.
