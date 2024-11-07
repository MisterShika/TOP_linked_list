class Node{
    constructor(theVal = null){
        this.value = theVal;
        this.next = null;
        this.prev = null;
    }

    setNext(node){
        this.next = node;
    }

    setPrev(node){
        this.prev = node;
    }

    getNext(){
        return this.next;
    }

    getPrev(){
        return this.prev;
    }

    getValue(){
        return this.value;
    }

}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.setHead(newNode);
            this.setTail(newNode);
        }else{
            newNode.setPrev(this.getTail());
            this.getTail().setNext(newNode);
            this.setTail(newNode);
        }
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.tail == null){
            this.setHead(newNode);
            this.setTail(newNode);
        }else{
            newNode.setNext(this.getHead());
            this.getHead().setPrev(newNode);
            this.setHead(newNode);
        }
    }

    getTail(){
        return this.tail;
    }

    getHead(){
        return this.head;
    }

    setHead(node){
        this.head = node;
    }

    setTail(node){
        this.tail = node;
    }

    toString(){
        let currentPosition = this.getHead();
        let theString = `( ${currentPosition.getValue()} ) -> `;
        while (currentPosition.getNext() != null){
            currentPosition = currentPosition.getNext();
            theString += `( ${currentPosition.getValue()} ) -> `;
        }
        theString += `${currentPosition.getNext()}`;
        return theString;
    }

    getSize(){
        if(this.getHead() == null){
            return 0;
        }
        let size = 1;
        let currentPosition = this.getHead();
        while (currentPosition.getNext() != null){
            size++;
            currentPosition = currentPosition.getNext();
        }
        return size;
    }

    getAt(index){
        if(this.getHead() == null){
            return 0;
        }
        let size = 1;
        let currentPosition = this.getHead();
        while (currentPosition.getNext() != null && index != size){
            size++;
            currentPosition = currentPosition.getNext();
        }
        return currentPosition;
    }

    popList(){
        let theTail = this.getTail();
        this.setTail(theTail.getPrev());
        this.getTail().setNext(null);
        theTail = null;
    }

    listContains(value){
        if(this.getHead() == null){
            return false;
        }
        let index = 1;
        let currentPosition = this.getHead();
        while (currentPosition.getNext() != null && currentPosition.getValue() != value){
            index++;
            currentPosition = currentPosition.getNext();
        }
        if(currentPosition.getValue() == value) {
            return index;
        }
        return false;
    }

    findValue(value){
        if(this.getHead() == null){
            return null;
        }
        let index = 1;
        let currentPosition = this.getHead();
        while (currentPosition.getNext() != null && currentPosition.getValue() != value){
            index++;
            currentPosition = currentPosition.getNext();
        }
        if(currentPosition.getValue() == value) {
            return currentPosition;
        }
        return null;
    }

    insertAt(value, index){
        let currentIndex = 1;
        let currentPosition = this.getHead();
        while (currentPosition.getNext() != null && index != currentIndex){
            currentIndex++;
            currentPosition = currentPosition.getNext();
        }
        if(index == currentIndex){
            const newNode = new Node(value);
            newNode.setPrev(currentPosition.getPrev());
            newNode.setNext(currentPosition);
            currentPosition.getPrev().setNext(newNode);
            currentPosition.setPrev(newNode);
        }else if(index > currentIndex){
            throw new Error("Index given too high.");
        }
    }
    
    removeAt(index){
        let currentIndex = 1;
        let currentPosition = this.getHead();
        while(currentPosition.getNext() != null && index != currentIndex){
            currentIndex++;
            currentPosition = currentPosition.getNext();
        }
        if(index == currentIndex){
            let prevNode = currentPosition.getPrev();
            let nextNode = currentPosition.getNext();
            prevNode.setNext(nextNode);
            nextNode.setPrev(prevNode);
            currentIndex = null;
        }else if(index > currentIndex){
            throw new Error("Index given too high.");
        }  
    }

}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// list.popList();

// list.insertAt("lizard", 3);
list.removeAt(3);

console.log(list.toString());
