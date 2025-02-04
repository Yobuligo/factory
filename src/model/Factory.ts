import { IFactory } from "./IFactory";
import { IProductMeta } from "./IProductionMeta";
import { IStorage } from "./IStorage";
import { Storage } from "./Storage";

export class Factory<TProductMeta extends IProductMeta>
  implements IFactory<TProductMeta>
{
  private _isRunning: boolean = false;
  private _storage: IStorage = new Storage();
  private intervalId: number | undefined = undefined;

  constructor(readonly productMeta: TProductMeta) {
    this.start();
  }

  get name(): string {
    return this.productMeta.name;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  get storage(): IStorage {
    return this._storage;
  }

  start(): void {
    if (this._isRunning) {
      return;
    }

    this._isRunning = true;
    this.intervalId = setInterval(
      () => this.onProduced(),
      this.productMeta.productionTime
    );
  }

  stop(): void {
    this._isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private onProduced() {
    this.storage.add(this.productMeta, 1);
    console.log(
      `Produced '${1}' unit of '${
        this.productMeta.name
      }'. Store now contains '${this.storage.findAmount(
        this.productMeta
      )}' units.`
    );
  }
}
