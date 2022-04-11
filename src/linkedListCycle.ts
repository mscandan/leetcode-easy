interface ListNode {
  val: number;
  next: ListNode | null;
}

export const hasCycle = (head: ListNode | null): boolean => {
  let fast = head;
  let slow = head;

  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};
