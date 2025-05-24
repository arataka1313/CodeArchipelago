// `@/consts.ts`

export const elems = [
    // Nodes
    {
        data: {
            id: "node-a",
            label: "Node A"
        },
    },
    {
        data: {
            id: "node-b",
            label: "Node B"
        }
    },
    {
        data: {
            id: "node-c",
            label: "Node C",
        }
    },
    {
        data: {
            id: "node-d",
            label: "Node D"
        }
    },
    {
        data: {
            id: "node-e",
            label: "Node E"
        }
    },
    // Edges
    // color というカスタムプロパティを追加
    {
        data: {
            id: "edge-a",
            source: "node-a",
            target: "node-b",
            label: "Edge A",
            color: "#ee827c"    // カスタムプロパティ
        }
    },
    {
        data: {
            id: "edge-b",
            source: "node-c",
            target: "node-b",
            label: "Edge B",
            color: "#38b48b"    // カスタムプロパティ
        }
    },
    {
        data:{
            id: "edge-c",
            source: "node-e",
            target: "node-d",
            label: "Edge C",
            color: "#89c3eb"    // カスタムプロパティ
        }
    }
] 
