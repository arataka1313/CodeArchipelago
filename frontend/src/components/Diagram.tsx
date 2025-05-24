import cytoscape from "cytoscape";
import { useRef, useEffect } from "react";


function Diagram() {
    const elems = [
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


    const cyElemRef = useRef<HTMLDivElement>(null);     // グラフ(canvas)が描画される領域

    // 描画後 => useEfect 
    useEffect(()=>{

        // cytoscape に渡すオプション。複数のものがあるが代表的なものだけを述べる
        const cyInstance = cytoscape({                          
            container: cyElemRef.current,                   // 描画領域を渡す。js では `getElementById()` 等を使う
            elements: elems,
        })

        // creanup 処理
        return ()=>{
            cyInstance.destroy()
        }
    },[])

    return(
        <div ref={cyElemRef} style={{       // 描画領域を確保
            width: 500,
            height: 500
        }} />
    )
}

export default Diagram;