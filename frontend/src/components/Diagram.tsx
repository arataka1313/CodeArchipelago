import cytoscape from "cytoscape";
import { useRef, useEffect, } from "react";
import { CreateElements } from "../utils/GetDiagram.tsx";


function Diagram() {
    const elems = CreateElements();

    const styles = [
        {
            selector: "node",   // すべてのノードに適用
            style: {
                width: "160px",
                height: "160px",
                label: "data(label)",   // このようにして data にアクセスすることで label を指示する
                "border-width": 2,
                "text-valign": "bottom", // ノードの縦方向に中心に
                "text-wrap": "wrap",
                "text-max-width": "100px",
                "shape": "round-rectangle",
                "text-margin-y": -35
            } as const      // ts の場合は as const を付けないとエラーになる場合がある
        },
        {
            selector: "edge",
            style: {
                width: 2,
                label: "data(label)",
                "line-color": "data(color)",    // カスタムプロパティにもアクセスできる => カスタムプロパティで色指定
                "text-background-color": "#e8ecef",
                "text-background-shape": "rectangle",
                "text-background-opacity": 1,       // 初期値で0に設定されているので 1 にしないとラベルのテキストボックスは見えない
            } as const 
        }
    ]


    const cyElemRef = useRef<HTMLDivElement>(null);     // グラフ(canvas)が描画される領域

    // 描画後 => useEfect 
    useEffect(()=>{

        // cytoscape に渡すオプション。複数のものがあるが代表的なものだけを述べる
        const cyInstance = cytoscape({                          
            container: cyElemRef.current,                   // 描画領域を渡す。js では `getElementById()` 等を使う
            elements: elems,
            style: styles,
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