interface ListNode {
  val: number;
  next: ListNode | null;
}

export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

const testCases = [
  {
    list: {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },
    },
    expected: {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    },
  },
];

testCases.forEach(testCase => {
  const res = deleteDuplicates(testCase.list);
  if (res !== testCase.expected) {
    console.log('Failed\n exp: ', testCase.expected, '\ngot: ', res);
  }
});
