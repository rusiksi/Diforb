import { BufferLoader } from './bufferLoader';

export class WebApiBase {
    Volume = 1;

    constructor() {}

    Context: AudioContext;
    GeneralAnalyser: AnalyserNode;
    WaveNode: ScriptProcessorNode;
    BasePath: string;
    BaseFilePath: string;
    Buffers;
    BufferLoader: BufferLoader;
    EndOfPlayingCallBack;
    Playing: { SoundsCount: number, Stoped: number };
    IsRecording: boolean;
}