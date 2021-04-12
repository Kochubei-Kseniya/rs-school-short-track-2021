function removeKFromList(l, k) {
  let newL = l;

  while (newL.next !== null) {
    if (newL.value === k) {
      newL.value = newL.next.value;
      newL.next = newL.next.next;
    }
    newL = newL.next;
  }
  return l;
}
module.exports = removeKFromList;
