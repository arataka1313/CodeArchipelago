from pyvis.network import Network

def build_graph(characters, relations):
    net = Network(height="700px", width="100%", directed=True)

    # 物理エンジンでノード間の距離を適切に広げる
    net.barnes_hut(gravity=-30000, central_gravity=0.3, spring_length=250, spring_strength=0.001)

    for name, info in characters.items():
        label = name
        image_path = f"portraits/{name}.png"

        net.add_node(
            name,
            label=label,
            title=info["attribute"],  # ホバーで属性表示
            shape="circularImage",
            image=image_path,
            size=60,
            font={"size": 18, "color": "#222222", "strokeWidth": 1}
        )

    for rel in relations:
        net.add_edge(
            rel["from"],
            rel["to"],
            label=rel["label"],
            arrows="to",
            font={"size": 14, "align": "middle"},
            width=2,
            smooth={"type": "curvedCW", "roundness": 0.2}
        )

    # ここがJSON構文の正しい set_options！
    net.set_options('''
    {
      "edges": {
        "color": {
          "color": "#555555",
          "highlight": "#000000",
          "hover": "#000000"
        }
      },
      "nodes": {
        "borderWidth": 1,
        "borderWidthSelected": 2
      },
      "layout": {
        "improvedLayout": true
      },
      "physics": {
        "enabled": true,
        "barnesHut": {
          "gravitationalConstant": -30000,
          "centralGravity": 0.3,
          "springLength": 250,
          "springConstant": 0.04,
          "damping": 0.15
        }
      }
    }
    ''')

    net.save_graph("graph.html")
