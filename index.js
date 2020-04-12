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
  let sum=0;
  if(!node ){
    return sum;
  }
  while(node.next !== null){
    sum ++;
    node=node.next;
    
  }
  return sum;
}

function isEmpty(list){
  if(list.head === null){
    console.log('List is empty');
  }
  console.log('List is not empty');
}

function findPrevious(list, item){ 
  let node = list.head;
    
  while(node.next.value !== item && node.next.value!==null){
    node = node.next;
  }
  return node;
}

function findLast(list, item){
  let currNode = list.head;
  while(currNode.next.value !== null && currNode.next.value !==item){
    currNode=currNode.next;
  }
  return currNode.next;
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
  //SLL.insertBefore('Athena', 'Boomer');
  //SLL.insertAfter('Hotdog', 'Helo');
  //SLL.insertAt('Kat', 3);
  //SLL.remove('Tauhida');
  display(SLL);
  isEmpty(SLL);
  size(SLL);
  //console.log(findPrevious(SLL, 'Helo'));
  console.log(findLast(SLL, 'Helo'));
  return SLL;
}
  
//console.log(main());

//drill 4

/*function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
          if (newNode.next.value === current.value) {
              newNode.next = newNode.next.next;
          }
          else {
              newNode = newNode.next;
          }
      }
      current = current.next;
  }
}

Answer: This program removes duplicates from a linked list. It will remove the 2nd and 
//later occurances of the linked list - will not presenve the order of the list
 */ 

//drill 5

function reverse(list){
  let node =list.head;
  let setNull = null;
  
  while(node !== null){
    //console.log(node)
    let saveNode =node.next;
    // console.log(saveNode);
    node.next = setNull;
    //console.log(node.next)
    setNull = node;
    //console.log(setNull);
    node = saveNode;
    //console.log(node)
  }
  list.head = setNull;
  return list;

} 
  


function main2(){
  let trial = new LinkedList();
  trial.insertFirst('One');
  trial.insertFirst('Two');
  trial.insertFirst('Three');
  trial.insertFirst('Four');
  trial.insertFirst('Five');
  trial.insertFirst('Six');
  trial.insertFirst('Seven');
  trial.insertFirst('eight');
  trial.insertFirst('nine');
  //console.log(reverse(trial));
  //console.log(find3rd(trial));
  console.log(findMiddle(trial));
  return trial;
}

//console.log(main2())

//drill 6
function find3rd(list){
  let end = list.head;
  
  while( end.next.next.next !== null){
    
    end = end.next;
  }
  return end.value;
}

//drill 7 
function findMiddle(list){
  let end = this.head;
  let middle =this.head;

  while(end.next.next !==null && middle.next !==null){
    end = end.next.next;
    middle = middle.next;
  }
  return middle.value;
}
//drill 8

function CycleList(){
  let newList = new LinkedList;
  //newList.insertFirst('5');
  //newList.insertFirst('4');
  newList.insertFirst('1');
  newList.insertFirst('2');
  newList.insertFirst('1');
  newList.insertFirst('2');
  newList.insertFirst('1');
  newList.insertFirst('2');
  newList.insertFirst('1');
  newList.insertFirst('2');
  console.log(ifCycle(newList));
  return newList;
}

console.log(CycleList());

function ifCycle(list){
  let first = list.head;
  let sec = list.head;
  while(first.next!== null && first !== null && sec !== null){
    sec = sec.next;
    first = first.next.next;
    if(first === sec){
      return 'Found cycle';
    }
  }
  return 'no cycle'
  
}



