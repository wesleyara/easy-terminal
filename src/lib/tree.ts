import { TreeNode } from "primevue/treenode";

export class TreeNodesData {
  getTreeNodes(type: string) {
    switch (type) {
      case "bash":
        return this.bashNodes();
      default:
        return [];
    }
  }

  bashNodes(): TreeNode[] {
    const nodes: TreeNode[] = [
      {
        key: "Listagem",
        label: "Listagem",
        children: [
          {
            key: "ls",
            label: "ls",
            data: "bash#ls",
            type: "url",
          },
        ],
      },
    ];

    return nodes;
  }
}
