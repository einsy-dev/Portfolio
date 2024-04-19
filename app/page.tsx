import style from "./page.module.css";

export default function MainPage() {
  return (
    <main className={style.container}>
      <canvas className={style.canvas} id="canvas" />
    </main>
  );
}
