import { useEffect, useState } from "react";
import { IProductMeta } from "../../model/IProductionMeta";
import styles from "./Factory.module.scss";
import { IFactoryProps } from "./IFactoryProps";

export function Factory<TProductMeta extends IProductMeta>(
  props: IFactoryProps<TProductMeta>
) {
  const [amount, setAmount] = useState<number>(props.factory.storage.amount);

  useEffect(() => {
    setAmount(props.factory.storage.amount);
  }, [props.factory.storage.amount]);

  const onStart = () => props.factory.start();

  const onStop = () => props.factory.stop();

  const title = `Units of '${props.factory.productMeta.name}'`;

  return (
    <div className={styles.factory}>
      <div>{props.factory.name}</div>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <div>{title}</div>
      <div className={styles.amount}>{amount}</div>
    </div>
  );
}
