import { MimicTypos } from "../enums/MimicTypos";
import { IAction } from "@fullstackcraftllc/codevideo-types";
import { VirtualEditor } from "@fullstackcraftllc/codevideo-virtual-editor";
import { transcode } from "./transcode";

export const transcodeActions = async (
  canvas: HTMLCanvasElement,
  fps: number,
  mimeType: string,
  codec: string,
  actions: Array<IAction>,
  language: string,
  mimicTypos: MimicTypos
): Promise<string> => {
  // using virtual-code-block, get final resulting code from actions
  const virtualCodeBlock = new VirtualEditor([]);
  const resultingCode = virtualCodeBlock.applyActions(actions);
  return await transcode(canvas, fps, mimeType, codec, resultingCode, language, mimicTypos);
};
