class _Node{
  constructor(value, next){
    this.value=value;
    this.next=next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode=tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item){
    //start at the head
    let currNode = this.head;
    //check if the list is empty
    if(!this.head){
      return null;
    }

    while(currNode.value !== item){
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item){
    if(!this.head){
      return null;
    }
    // If the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode =this.head;
    while((currNode !== null) && (currNode.value !== item)){
      previousNode=currNode;
      currNode = currNode.next;
    }
    if(currNode===null){
      console.log('Item not found');
      return;
    }
    previousNode.next=currNode.next;
  }
  insertBefore(item, nextItem){
    //if the list is empty
    if(!this.head){
      this.insertFirst(item);
    }
    let tempNode = this.head;
    let previousNode = this.head;
    while(tempNode.next.value !== nextItem){
      previousNode=tempNode;
      tempNode = tempNode.next;
    }
    previousNode.next = new _Node(item, tempNode.next);
  }
  insertAfter(item, prevItem){
    //if the list is empty
    if(!this.head){
      this.insertFirst(item)
      return;
    }
    let nextNode = this.head;
    let previousNode = this.head;
    
    while(previousNode.value !== prevItem){
      if(nextNode.next === null){
        return null;
      }else{
        previousNode = nextNode;
     
        nextNode= previousNode.next;
      } 
    }
    previousNode.next = new _Node(item, previousNode.next)
  }
  insertAt(item, index){
    //if empty list
    if(index ===0 ){
      this.insertFirst(item);
    } 
    let currNode=this.head;
    let i =0;
    while((currNode !== null) && (i < index-1)){
      currNode= currNode.next;
      i++;
    }
    if(currNode === null){
      return 'no position '
    }else{
      currNode.next =new _Node(item, currNode.next)
    }
  }
  print(){
    let result = '';
    if(! this.head){
      return result;
    }else{
      let currNode = this.head;
      while(currNode){
        result += currNode.value+' ';
        currNode = currNode.next;
      }
      return result;   

    }
    
  }
}

//Create a singly linked list


function display(list){
  let node = list.head;
  while(node){
    console.log(node.value)
    node = node.next;
  }
   
}

function size(list){
  let node = list.head;
  let sum=1;
  if(node === null ){
    sum=0;
  }
  while(node.next !== null){
    node=node.next;
    sum ++;
  }
  return sum;
}



function main(){
  let SLL= new LinkedList();
  SLL.insertFirst('Appollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  // SLL.remove('squirrel');  ---Item not found
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  display(SLL);
  console.log(size(SLL));
  return SLL;
}
  
console.log(main());
  