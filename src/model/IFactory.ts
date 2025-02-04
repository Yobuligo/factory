import { IStorage } from "./IStorage";

export interface IFactory {
  readonly isRunning: boolean;
  readonly storage: IStorage;
  start(): void;
  stop(): void;
}
