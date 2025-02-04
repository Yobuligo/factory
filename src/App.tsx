import { useState } from "react";
import styles from "./App.module.scss";
import { AppContext } from "./context/AppContext";
import { Factory } from "./features/factory/Factory";
import { createFactory } from "./model/createFactory";
import { IFactory } from "./model/IFactory";
import { IProductMeta } from "./model/IProductionMeta";
import { IronPlateMeta } from "./model/IronPlateMeta";

export const App: React.FC = () => {
  const [factories] = useState<IFactory<IProductMeta>[]>([]);
  const [ironPlateFactory] = useState<IFactory<IronPlateMeta>>(
    createFactory(new IronPlateMeta())
  );

  return (
    <AppContext.Provider value={{ factories, factory: ironPlateFactory }}>
      <div className={styles.app}>
        <Factory factory={ironPlateFactory} />
      </div>
    </AppContext.Provider>
  );
};
