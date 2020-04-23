import { TreeNode } from '../../utils/TreeNode'

describe("TreeNode", function() {

    it("should deserialize and then serialize a tree", function() {
        let data = '[1,2,3,null,null,4,5]';
        expect(TreeNode.serialize(TreeNode.deserialize(data))).toEqual(data);
    });
});