"use strict"
const _ = require('lodash');

class TreeNode
{
    constructor (val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    static serialize(root)
    {
        let q = [];
        let results = [];
        q.push(root);
        while (q.length != 0)
        {
            if (q[0] == null)
            {
                results.push('x');
            }
            else
            {
                results.push(q[0].val.toString());
                q.push(q[0].left);
                q.push(q[0].right);
            }
            q.shift();
        }
        return '[' + results.toString() + ']';
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    static deserialize(data)
    {
        let elements = data.replace(/\s/g, '').substring(1, data.length - 1).split(',');
        let head = elements[0] == 'x' ? null : new TreeNode(parseInt(elements[0]));
        elements.shift();
        let q = [];
        q.push(head);
        while (q.length != 0) {
            let parent = q.shift();
            if (parent != null) {
                let leftStr = elements.shift();
                let left = leftStr == 'x' ? null : new TreeNode(parseInt(leftStr));
                let rightStr = elements.shift();
                let right = rightStr == 'x' ? null : new TreeNode(parseInt(rightStr));
                parent.left = left;
                parent.right = right;
                q.push(left);
                q.push(right);
            }
        }
        return head;
    }
}

export { TreeNode };