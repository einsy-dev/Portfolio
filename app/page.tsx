"use client";
import style from "./page.module.css";
import data from "@store/index.json";
import Card from "@components/Card";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [state, setState] = useState(data.slice(0, 6));
  const [page, setPage] = useState(1);

  useEffect(() => {
    const start = (page - 1) * 6;
    const end = start + 6;
    setState(data.slice(start, end));
  }, [page]);

  return (
    <main className={style.container}>
      {state.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </main>
  );
}
