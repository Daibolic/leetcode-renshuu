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
                results.push('null');
            }
            else
            {
                results.push(q[0].val.toString());
                q.push(q[0].left);
                q.push(q[0].right);
            }
            q.shift();
        }

        while (results[results.length - 1] == 'null')
        {
            results.pop();
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
        let nodes = _.map(elements, (element) => 
        {
            if (element == 'null')
            {
                return null;
            }
            else
            {
                return new TreeNode(parseInt(element));
            }
        });
        
        for (let i = 0; i < nodes.length; i++)
        {
            if (nodes[i] != null)
            {
                let leftIndex = i * 2 + 1;
                let rightIndex = i * 2 + 2;
                if (leftIndex < nodes.length)
                {
                    nodes[i].left = nodes[leftIndex];
                }
                if (rightIndex < nodes.length)
                {
                    nodes[i].right = nodes[rightIndex];
                }
            }
        }
        return nodes.length > 0 ? nodes[0] : null;
    }
}

export { TreeNode };