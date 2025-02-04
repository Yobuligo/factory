import { useState } from "react";
import { useInitialize } from "../../hooks/useInitialize";
import { IProductMeta } from "../../model/IProductionMeta";
import styles from "./Factory.module.scss";
import { IFactoryProps } from "./IFactoryProps";

export function Factory<TProductMeta extends IProductMeta>(
  props: IFactoryProps<TProductMeta>
) {
  const [amount, setAmount] = useState<number>(
    props.factory.storage.findAmount(props.factory.productMeta)
  );
  const [intervalId, setIntervalId] = useState(0);

  const onStart = () => {
    // check if factory is already running
    if (intervalId) {
      return;
    }

    props.factory.start();
    const newIntervalId = setInterval(
      () =>
        setAmount(props.factory.storage.findAmount(props.factory.productMeta)),
      100
    );
    setIntervalId(newIntervalId);
  };

  useInitialize(() => {
    onStart();
  });

  const onStop = () => {
    props.factory.stop();
    clearInterval(intervalId);
  };

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
