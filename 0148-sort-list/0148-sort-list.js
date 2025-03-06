/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) return head

    let arr = []
    let current = head
    while(current) {
        arr.push(current.val) 
        current = current.next
    }

    arr.sort((a,b) => a - b)

    current = head
    for(let item of arr) {
        current.val = item
        current = current.next
    }
    return head
};