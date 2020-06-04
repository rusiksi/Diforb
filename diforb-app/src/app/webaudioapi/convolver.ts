import { WebApiBase } from './webapibase'

export class Convolver {

    Context: AudioContext;
    Buffers;

    Source = null;
    Volume = 1.0;
    IsMuted = false;
    GainNode: GainNode = null;
    IsOn = false;
    BufferName = false;
    Instance = null;

    muted: boolean;

    constructor(){

        Object.setPrototypeOf(this, new WebApiBase);

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
