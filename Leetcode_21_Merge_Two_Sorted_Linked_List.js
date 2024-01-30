var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let head;
  let curNode;

  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  curNode = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curNode.next = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      list2 = list2.next;
    }
    curNode = curNode.next;
  }

  if (list1) {
    curNode.next = list1;
  } else if (list2) {
    curNode.next = list2;
  }

  return head;
};
