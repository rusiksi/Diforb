import { WebApiBase } from './webapibase';
import { BufferLoader } from './bufferLoader';
import { convolverSoundsBasePath } from './const';

export class Sound {

    Context: AudioContext;
    Playing;
    BaseFilePath: string;
    BufferLoader: BufferLoader;

    Name = "";
    Files = [];
    DelayVal = 0.001;
    SoundImg = new Image();
    SurfaceImg = new Image();
    CurrenReadingSound = null;
    Path = "";
    Source = null;
    GainNode: GainNode;
    SideGainNode: GainNode;
    NowPlaingFile = null;
    PlaybackRate = 1;
    IsMuted = false;
    IsPlaying = false;
    IsReading = false;
    Volume = 1;
    CrossFadeValue = 1;

    constructor(sideGainNode: GainNode, libGainNode?: GainNode) {

        this.GainNode = this.Context.createGain();
        this.SideGainNode = sideGainNode;
        this.GainNode.connect(this.SideGainNode);
    }

    Read = () => {
        
        if (this.CurrenReadingSound != null &&
            this.CurrenReadingSound >= this.Files.length - 1) {
            this.IsReading = false;
            
            if (this.IsPlaying) {
                this.Stop();
                this.Play();
            }
            return;
        }
        this.CurrenReadingSound = this.CurrenReadingSound == null ? 0 : this.CurrenReadingSound + 1;

        // var url = this.BaseFilePath + "/" + this.Files[this.CurrenReadingSound].id;
        var url = convolverSoundsBasePath + this.Files[this.CurrenReadingSound].id;

        // var currentSoundInst = this;

        this.IsReading = true;
       
        this.BufferLoader.loadBuffer(url, (buffer) => {
            // window.activeSpinnerSound();
            this.Files[this.CurrenReadingSound].buffer = buffer;
            // window.activeDurationSound = function () {
            //     return buffer["duration"];
            // }
            this.Read();
        });
    }

    AddFiles = (path, files) => {
        this.Path = path;
        this.CurrenReadingSound = null;
        this.Files = files;
    }

    ResetFiles = () => {
        if (!this.Files || this.Files.length <= 0) {
            return;
        }
        //this.Files.splice(0, this.Files.length);
        this.Source = null;
    }

    PrepareForPlaying = function () {
        // Check for existing files
        if (!this.Files ||
            this.Files.length <= 0) {
            return;
        }

        if (this.NowPlaingFile == null ||
            this.NowPlaingFile >= this.Files.length - 1) {
            this.NowPlaingFile = 0
        } else {
            this.NowPlaingFile++;
        }
        if (!this.Files[this.NowPlaingFile].buffer) {
            return;
        }
        // Set the buffer source
        if (this.Source) {
            this.Source.disconnect();
        }
        this.Source = this.Context.createBufferSource();
        this.Source.loop = false;
        this.Source.buffer = this.Files[this.NowPlaingFile].buffer;
        this.Source.playbackRate.value = this.PlaybackRate;

        this.Delay = this.Context.createDelay();
        this.Delay.delayTime.value = this.DelayVal;

        this.Source.connect(this.Delay);
        this.Delay.connect(this.GainNode);

        // Connect to Sound Gain Node
        this.GainNode.gain.value = this.IsMuted ? 0 : this.Volume;
        this.Source.onended = function () {
            this.Playing.Stoped++;
            this.IsPlaying = false;
            if (this.Playing.Stoped >= this.Playing.SoundsCount) {
                this.EndOfPlayingCallBack();
            }
        };
    }

    Play = () => {
        if (this.IsReading) {
            this.IsPlaying = true;
            return;
        }
        this.PrepareForPlaying();
        if (!this.Source ||
            !this.Source.buffer) {
            return;
        }
        // Play sound
        if (!this.Source.start) {
            this.IsPlaying = true;
            this.Source.noteOn(0);
        } else {
            this.IsPlaying = true;
            this.Source.start(0);
        }
        this.Playing.SoundsCount++;
    }

    Stop = () => {
        if (!this.Source) {
            return;
        }
        if (!this.Source.stop) {
            this.Source.noteOff(0);
        } else {
            this.Source.stop(0);
        }
        this.Playing.Stoped++;
    }

    SetPitch = (val) => {
        this.Source.playbackRate.value = val;
        this.PlaybackRate = val;
    }

    SetVolume = (val) => {
        this.GainNode.gain.value = val;
        //this.Volume = val;
    }

    Mute = () => {
        this.IsMuted = !this.IsMuted;
        this.ApplyMute();
    }

    ApplyMute = () => {
        if (this.IsMuted) {
            this.GainNode.connect(this.SideGainNode);

        } else {
            this.GainNode.disconnect();
        }
    }
}

Object.setPrototypeOf(Sound.prototype, new WebApiBase);


class Image {
    Img = "";
    ImgNeg = "";
    ImgCurrent = "";
    constructor(){}
}