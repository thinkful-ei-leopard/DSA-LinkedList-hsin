

class _Node{
  constructor(value, next=null, prev=null){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList{
  constructor(){
    this.head = null; 
    this.tail=null;
  }

  insertFirst(item){
    let newNode = new _Node(item, this.head, null)
    if(this.head !== null){
      this.head.prev = newNode;
    }
    this.head = newNode;
    if(this.tail === null){
      this.tail = newNode;
    }
  }
  insertLast(item){
    let newNode = new _Node(item, null, this.tail)
    if(this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null){
      this.head = newNode;
    }
  }
  insertBefore(item, beforeItem){
    let currentNode = this.head;
    if(currentNode === null){
      this.insertFirst(item);
      return;
    }
     
    
    if(currentNode !== null){
      while(currentNode.value !== beforeItem){
        currentNode = currentNode.next;
      }
      let newNode = new _Node(item,currentNode,currentNode.prev);
     
      currentNode.prev.next =newNode; 
      currentNode.prev= newNode;  
      
    }

  }
  insertAfter(item, afterItem){
    let node =this.head;
    if(node === null){
      return;
    }
    if (node === this.tail){
      this.insertLast(item)
    }
   
    let newNode = new _Node(item, node.next.next.next , node)
    if(node!== null){
      while(node.value !== afterItem){
        node = node.next;
      }
     
      node.next.prev=newNode;
      
      node.next= newNode;
    }
    
  }

  remove(item){
    let current = this.head;

    if(!current){
      return null;
    }
    while(current.value !== item){
      current = current.next;
      if(current=== null){
        console.log('no item in the list')
        return;
      }
      if(current === this.head){
        this.haed=current.next;
      }else{
        current.next.prev=current.next;
      }
      //if the item is the last one
      if(current=== this.tail){
         this.tail = current.prev;
      }else{
        current.next.prev = current.prev;
      }
    }
  }
}



function display(ll){
  let list='';
  let node = ll.head;
  
  while(node.next !== null){
    list += node.value;
    node= node.next;
  }
  return list ;
}

function size(ll){
  let counter = 0;
  let currNode = ll.head;
  if(!currNode){
    return counter;
  }
  else
    counter++;
  while (!(currNode.next === null)) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function reverseDll(list) {
  let currNode = list.head;
  let tempNode = null;
    
  while (currNode !== null) {
    //swapping nodes
    tempNode = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = tempNode;

    currNode = tempNode;
  }
  tempNode = list.head;
  list.head = list.tail;
  list.tail = tempNode;

}

function mainDLL(){
  let ddlList = new LinkedList();
  ddlList.insertFirst('Aquaria');
  ddlList.insertFirst('Caprica');
  ddlList.insertFirst('Gemenon');
  ddlList.insertFirst('Picon');
  ddlList.insertFirst('Sagittaron');
  ddlList.insertBefore('Hello', 'Picon');
  ddlList.insertAfter('Amy', 'Picon');
  ddlList.insertAt('Jon', 3);
  console.log(display(ddlList));
  return ddlList;
}

console.log(mainDLL());