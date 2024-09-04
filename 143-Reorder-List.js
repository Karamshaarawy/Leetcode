/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return
    let slow = head, fast = head
    while (fast && fast.next) {
        slow = slow.next; 
        fast = fast.next.next; 
    }
    let prev=null
    let node=slow //3
    let next=null

    while(node){
        next=node.next //null
        node.next=prev //3
        prev=node //null
        node=next //null
    }
    let first=head , second=prev
    while(second.next){
        let temp=first.next
        let temp2=second.next
        first.next=second
        second.next=temp
        first=temp
        second=temp2
    }
};