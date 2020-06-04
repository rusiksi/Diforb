import { WebApiBase } from './webapibase';
import { Convolver } from './convolver';
import { Sound } from './sound';

export class Side {

    Volume: number;
    LibGainNode: GainNode;
    Context: AudioContext;
    GainNode: GainNode;
    Convolver: Convolver;

    CrossFadeValue = 1;
    DelayVal = 0.1;
    PitchValue = 1.0;
    IsMuted = false;
    Sounds: any[];

    reseted: boolean;

    constructor(libGainNode: GainNode) {

        this.LibGainNode = libGainNode;
        this.GainNode = this.Context.createGain();
        this.Convolver = new Convolver();
        this.Sounds = [];
        this.GainNode.connect(libGainNode);
        this.reseted = false;
    }

    AddSound = (name) => {
        this.Sounds.push(name);
        this.Sounds[name] = new Sound(this.GainNode, this.LibGainNode);
    }

    ResetSounds = (name) => {
        this.reseted = !this.reseted;
        if ((!this.Sounds || this.Sounds.length <= 0) ||
            !this.reseted) {
            return;
        }

        this.Stop();
        this.Sounds.forEach((soundName, i, arr) => {
            arr[soundName].ResetFiles();
        });
    }

    Play = () => {
        if (this.reseted) {
            return;
        }

        
        this.Sounds.forEach((soundName, i, arr) => {
            arr[soundName].DelayVal = this.DelayVal;
            arr[soundName].Play();
        });
    }

    Stop = () => {
        this.Sounds.forEach((soundName, i, arr) => {
            arr[soundName].Stop();
        });
    }

    SetPitch = (val) => {
        this.PitchValue = val;
        this.Sounds.forEach((soundName, i, arr) => {
            arr[soundName].SetPitch(val);
        });
    }

    SetVolume = (val) => {
        this.Volume = val;
        this.UpdateVolume();
    }

    UpdateVolume = () => {
        this.GainNode.gain.value = this.Volume;

        return;

        var soundVolume = this.ApplyCrossfade(this.Volume);

        this.Sounds.forEach((soundName, i, arr) => {
            arr[soundName].SetVolume(soundVolume);
        });
    }

    ApplyCrossfade = (val) => {

        return val * this.CrossFadeValue;
    }

    SetCrossFade = (val) => {
        this.CrossFadeValue = val;
        this.UpdateVolume();
    }

    SetConvolver = (name) => {
        this.Convolver.SetBuffer(name);
        if (this.Convolver &&
            this.Convolver.IsOn &&
            this.Convolver.Instance &&
            this.Convolver.Instance.buffer) {
            this.GainNode.connect(this.Convolver.Instance);
            this.Convolver.GainNode.connect(this.LibGainNode);
        } else {
            if (this.Convolver &&
                this.Convolver.Instance) {
                this.Convolver.GainNode.disconnect();
            }
        }
    }
}

Object.setPrototypeOf(Side.prototype, new WebApiBase);