import { WebApiBase } from './webapibase';
import { ConvolverBuffer } from './convolverBuffer';

export class Convolver {

    Context: AudioContext;
    Buffers: { Stadium: ConvolverBuffer, Hall: ConvolverBuffer, Room: ConvolverBuffer };
    FillBuffers;

    Source = null;
    Volume = 1.0;
    IsMuted = false;
    GainNode: GainNode = null;
    IsOn = false;
    BufferName = false;
    Instance = null;

    private muted: boolean;

    constructor(){
        //Init
        this.Instance = this.Context.createConvolver();
        this.GainNode = this.Context.createGain();
        this.Instance.connect(this.GainNode);
    }

    SetBuffer = (bufferName) => {
        if (bufferName === "" ||
            !this.Instance) {
            this.Instance.buffer = null;
            this.IsOn = false;
            return;
        }

        this.Instance.BufferName = bufferName;
        var buffer = this.Buffers[bufferName].Buffer;
        this.IsOn = true;
        this.Instance.buffer = buffer;
    }

    Mute = () => {
        this.muted = true;
        this.setGainVolume();
    }

    Unmute = () => {
        this.muted = false;
        this.setGainVolume();
    }

    SetVolume = (val) => {
        this.Volume = val;
        this.setGainVolume();
    }

    setGainVolume = () => {
        if (this.GainNode) {
            this.GainNode.gain.value = this.muted ? 0 : this.Volume;
        }
    }
}

Object.setPrototypeOf(Convolver.prototype, new WebApiBase);
