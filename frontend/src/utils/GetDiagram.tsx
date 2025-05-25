// export const GetElements = () => {
//     return new Promise((resolve) => {
//         fetch("http://localhost:8000/graph")
//             .then((res) => res.json())
//             .then((data) => resolve(data));
//     });
// }


// export const CreateElements = () => {
//     const jsonData = {
//     nodes: [
//         { id: "伊東沙耶香", label: "伊東沙耶香\n(幼馴染)", image: "/portraits/伊東沙耶香.png" },
//         { id: "吹あゆみ", label: "吹あゆみ\n(女子大生)", image: "/portraits/吹あゆみ.png" },
//         { id: "杉下耕助", label: "杉下耕助\n(スターワッチャー)", image: "/portraits/杉下耕助.png" }
//     ],
//     edges: [
//         { from: "伊東沙耶香", to: "吹あゆみ", label: "幼なじみ" },
//         { from: "吹あゆみ", to: "杉下耕助", label: "スターワッチャー" },
//         { from: "杉下耕助", to: "伊東沙耶香", label: "知り合い" }
//     ]
//     };

//     // const jsonData = GetElements();

//     // JSONデータをCytoscape.jsの形式に変換
//     const elements = [
//     ...jsonData.nodes.map(node => ({
//         data: { id: node.id, label: node.label },
//         position: { x: Math.random() * 500, y: Math.random() * 500 }, // ランダム配置
//         style: { 'background-image': node.image, 'background-fit': 'cover' }
//     })),
//     ...jsonData.edges.map(edge => ({
//         data: { source: edge.from, target: edge.to, label: edge.label }
//     }))
//     ];

//     return elements;
// }

// utils/GetDiagram.ts

// 非同期でデータを取得
export const GetElements = async () => {
    const res = await fetch("http://localhost:8000/graph");
    if (!res.ok) throw new Error("データ取得に失敗しました");
    const jsonData = await res.json();
    return jsonData;
};

// 取得した jsonData を Cytoscape.js 用に変換
export const CreateElements = async () => {
    const jsonData = await GetElements();

    const elements = [
        ...jsonData.nodes.map((node: any) => ({
            data: { id: node.id, label: node.label },
            position: { x: Math.random() * 500, y: Math.random() * 500 }, // ランダム配置
            style: {
                'background-image': node.image,
                'background-fit': 'cover',
            },
        })),
        ...jsonData.edges.map((edge: any) => ({
            data: { source: edge.from, target: edge.to, label: edge.label },
        })),
    ];

    return elements;
};
