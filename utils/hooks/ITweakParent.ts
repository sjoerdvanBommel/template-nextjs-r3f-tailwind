import { ITweakFolder } from "./ITweakFolder";

export interface ITweakParent {
  addInput: any,
  addFolder: any,
  parent?: ITweakParent,
  folders?: ITweakFolder[],
  tweaks?: any[],
  dispose: () => void
}