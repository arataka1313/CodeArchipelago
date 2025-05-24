import streamlit as st
from utils.graph_builder import build_graph
from utils.io_handler import load_data, save_data
import os

st.set_page_config(page_title="人物相関図 Viewer")

# データ読み込み
characters = load_data("data/characters.json")
relations = load_data("data/relations.json")

# 入力フォーム
st.sidebar.title("人物登録")
with st.sidebar.form(key="character_form"):
    name = st.text_input("名前")
    attribute = st.text_input("属性")
    submitted = st.form_submit_button("追加")
    if submitted and name:
        characters[name] = {"attribute": attribute, "image": f"portraits/{name}.png"}
        save_data("data/characters.json", characters)
        st.success(f"{name} を登録しました")

# 関係性入力
st.sidebar.title("関係性登録")
with st.sidebar.form(key="relation_form"):
    from_name = st.selectbox("誰から", options=list(characters.keys()))
    to_name = st.selectbox("誰へ", options=list(characters.keys()))
    relation = st.text_input("関係性")
    rel_submit = st.form_submit_button("登録")
    if rel_submit and from_name and to_name and relation:
        relations.append({"from": from_name, "to": to_name, "label": relation})
        save_data("data/relations.json", relations)
        st.success(f"{from_name} → {to_name} に関係 '{relation}' を追加しました")

# 相関図の描画
if st.button("相関図を表示"):
    build_graph(characters, relations)
    st.components.v1.html(open("graph.html", "r", encoding="utf-8").read(), height=600)
