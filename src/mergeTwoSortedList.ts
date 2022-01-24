interface ListNode {
  val: number;
  next: ListNode | null;
}

const mergeTwoSortedList = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  if (!list1 && list2) return list2;
  if (!list2 && list1) return list1;
  if (!list1 && !list2) return null;

  if (list1 && list2) {
    if (list1?.val > list2?.val) {
      list2.next = mergeTwoSortedList(list2.next, list1);
      return list2;
    } else {
      list1.next = mergeTwoSortedList(list1.next, list2);
      return list1;
    }
  }
  return null;
};
