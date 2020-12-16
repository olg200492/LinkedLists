class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head,
        this.size = 0; 
    }

    size() {
      return this.size;
    }

    add(element){ 
    let node = new Node(element);
    let current; 
    if (this.head === null) 
        this.head = node; 
    else { 
        current = this.head; 
        while (current.next) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.size++; 
    }

    clear() {
    this.head = null;
    }



  getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
  }
  getFirst() {
    return this.head;
  }

}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)