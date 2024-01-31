/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let hMap = new Set();
  let cur = head;
  while (cur !== null) {
    if (hMap.has(cur)) {
      return true;
    }
    hMap.add(cur);
    cur = cur.next;
  }
  return false;
};
