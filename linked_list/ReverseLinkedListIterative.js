  //Reverse linked list (Iteratively) -> O(n) time & O(1) space
  function lReverseI(ll) {

    if(ll.head == null) {
      return "Empty linked list";
    } else {

      let previous = null;
      let current = ll.head;
      let nextTemporary = null;
      
      while(current !== null) {
        //Save next node's reference before changing pointer
        nextTemporary = current.next;
        //Reverse the pointer of the current node to its previous node
        current.next = previous; 
        //Move forward in list
        previous = current;
        //The previous node becomes the node we are currently at.
        current = nextTemporary;
      }
      //Previous is the reversed list, so set the head to previous
      ll.head = previous;
      //Return the altered linked list
      return ll;
    }
  };

  module.exports = { lReverseI };