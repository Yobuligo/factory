import styles from "./Factory.module.scss";
import { IFactoryProps } from "./IFactoryProps";

export const Factory: React.FC<IFactoryProps> = (props) => {
  return <div className={styles.factory}>
    Hello World
  </div>;
};
