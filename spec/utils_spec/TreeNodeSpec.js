import { TreeNode } from '../../utils/TreeNode'
const _ = require('lodash');

describe("TreeNode", function() {
    let tree = null;

    beforeAll(() => {
        console.log('\nCreating test tree\n');
        let values = [1, 
                    2, 3, 
            null, null, 4, 5, 
        null, null, null, null, null, null, 6, 7,
 null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        let nodes  = _.map(values, (value) => {
            if (value != null) {
                return new TreeNode(value);
            } else {
                return null;
            }
        });
        for (let i = 0; i < (values.length - 2) / 2; i++) {
            if (nodes[i] != null) {
                nodes[i].left = nodes[i * 2 + 1];
                nodes[i].right = nodes[i * 2 + 2]
            }
        }
        tree = nodes[0];

    });

    afterAll(() => {
        console.log('\nErasing test tree\n');
        tree = null;
    });

    it("should serialize and then deserialize a tree", function() {
        let processedTree = TreeNode.deserialize(TreeNode.serialize(tree));
        expect(processedTree).toEqual(tree);
    });
});