import style from "./forfun.module.css";

function Forfun() {
  return (
    <div>
      <h1 className={style.titulo}>ForFun</h1>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.item1}>1</div>

          <div className={style.item2}>2</div>

          <div className={style.item3}>3</div>

          <div className={style.item4}>4</div>
        </div>
      </div>
    </div>
  );
}

export default Forfun;
