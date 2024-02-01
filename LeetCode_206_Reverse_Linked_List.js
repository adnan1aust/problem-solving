var reverseList = function (head) {
  if (!head) return head;

  const arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }

  let newHead = arr.pop();
  let cur = newHead;

  while (arr.length > 0) {
    cur.next = arr.pop();
    cur = cur.next;
  }

  cur.next = null; // Set the next of the last node to null
  return newHead;
};
