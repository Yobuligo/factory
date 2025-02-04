import styles from "./App.module.scss";
import { Factory } from "./features/factory/Factory";
import { BananenbrotMeta } from "./model/BananenbortMeta";
import { createFactory } from "./model/createFactory";
import { IronPlateMeta } from "./model/IronPlateMeta";

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Factory factory={createFactory(new IronPlateMeta())} />
      <Factory factory={createFactory(new BananenbrotMeta())} />
    </div>
  );
};
