import cytoscape from "cytoscape";
import { useRef } from "react";
import { CreateElements } from "../utils/GetDiagram.tsx";

function Diagram() {
  const cyElemRef = useRef<HTMLDivElement>(null);     // 描画領域
  const cyInstanceRef = useRef<cytoscape.Core | null>(null); // Cytoscapeインスタンス

  const styles = [
    {
      selector: "node",
      style: {
        width: "160px",
        height: "160px",
        label: "data(label)",
        "border-width": 2,
        "text-valign": "bottom",
        "text-wrap": "wrap",
        "text-max-width": "100px",
        "shape": "round-rectangle",
        "text-margin-y": -35,
      } as const,
    },
    {
      selector: "edge",
      style: {
        width: 2,
        label: "data(label)",
        "line-color": "data(color)",
        "text-background-color": "#e8ecef",
        "text-background-shape": "rectangle",
        "text-background-opacity": 1,
      } as const,
    },
  ];

  const GetNewDiagram = async () => {
    // 既存のインスタンスがあれば破棄
    if (cyInstanceRef.current) {
      cyInstanceRef.current.destroy();
    }

    try {
      const elems = await CreateElements();

      const cy = cytoscape({
        container: cyElemRef.current,
        elements: elems,
        style: styles,
      });

      cyInstanceRef.current = cy;
    } catch (err) {
      console.error("描画エラー:", err);
      alert("描画データの取得に失敗しました。");
    }
  };

  return (
    <>
      <button onClick={GetNewDiagram}>更新</button>
      <div
        ref={cyElemRef}
        style={{
          width: 600,
          height: 600,
        }}
      />
    </>
  );
}

export default Diagram;