// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//SUDO
const twoSum = (nums, target) => {
    
    let answer = []

    for (let i = 0; i < nums.length; i++){
        if (num[a] + num[b] = target){
            answer.push(num[a], num[b])
        } else if (num[a] + num[c] = target) {
            answer.push(num[a], num[b])
        }
    }

    return answer
};

//Solution

function twoSum(nums, target) {
    const map = new Map();

        for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
        }
    }


// https://leetcode.com/problems/merge-two-sorted-lists/solutions/2705782/js-recursion-with-exlanation/?envType=featured-list&envId=top-interview-questions
    // You are given the heads of two sorted linked lists list1 and list2.
    // Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    // Return the head of the merged linked list.


const mergeTwoLists = (listOne, listTwo) => {
    let mergedList = listOne.concat(listTwo)
    let sortedMergedList = mergedList.sort()

    return sortedMergedList
}

//SOLUTION - I did not know what a linked list was

var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};