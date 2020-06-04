import { WebApiBase } from './webapibase';
import { Side } from './side';
import { Compressor } from './compressor';
import { SoundAnalizer } from './soundAnalizer';

export class Library {

    Context: AudioContext;
    Playing: { SoundsCount: number, Stoped: number };

    Name;
    
    TimePeriodPlaying = 1000;
    IsPlaying = false;
    intervalId = null;
    IsSaving = false;
    GainNode: GainNode;
    LeftSide: Side;
    RightSide: Side;
    Compressor: Compressor;
    CrossFadeValue = 1;
    RenderedBuffer = null;
    SoundAnalizer: SoundAnalizer;

    private soundNamePrefix = "";

    constructor(name) {
        Object.setPrototypeOf(this, new WebApiBase)
        
        this.Name = name;
        
        this.GainNode = this.Context.createGain();
        this.LeftSide = new Side(this.GainNode);
        this.RightSide = new Side(this.GainNode);
        this.Compressor = new Compressor();
        this.GainNode.connect(this.Compressor.Instance);
        this.Compressor.Instance.connect(this.Context.destination);

        // Connect SoundAnalizer
        this.SoundAnalizer = new SoundAnalizer();
        this.GainNode.connect(this.SoundAnalizer.Analyser);

        var libraryInst = this;


        WebApiBase.prototype.EndOfPlayingCallBack = function () {
            setTimeout(libraryInst.PlayOnce, 700);
        }

        WebApiBase.prototype.Playing = {
            SoundsCount: 0,
            Stoped: 0
        }
    }

    
    Play = () => {
        //this.GainNode.disconnect();
        this.IsPlaying = true;
        this.PlayOnce();
        // this.intervalId = setInterval(this.PlayOnce, this.TimePeriodPlaying);
    }

    Stop = () => {
        if (this.IsPlaying) {
            this.LeftSide.Stop();
            this.RightSide.Stop();
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        }
        this.IsPlaying = false;
    }

    PlayOnce = () => {
        if (!this.IsPlaying) {
            return;
        }

        this.Playing.SoundsCount = 0;
        this.Playing.Stoped = 0;

        this.LeftSide.Play();
        this.RightSide.Play();
    }

    SaveOnce = () => {
        // var recorder = this.Recorder;
        // if (libraryInst.IsPlaying &&
        //     libraryInst.IsRecording) {
        //     recorder.StartRecording();
        //     libraryInst.PlayOnce();
        // } else {
        //     // zip blobs
        //     if (recorder.SoundBlobs)
        //         var fileForDownload = null;
        //     if (recorder.SoundBlobs.length > 1) {
        //         fileForDownload = libraryInst.Zip(recorder.SoundBlobs);
        //     } else {
        //         fileForDownload = recorder.SoundBlobs[0];
        //     }
        // }
    }

    Zip = () => { }

   SetCrossfade = (val) => {
        this.CrossFadeValue = val;

        if (val > 0 && val <= 0.5) {
            this.LeftSide.DelayVal = (0.5 - val) / 0.1 * 0.14 + 0.001;
            this.RightSide.DelayVal = 0.001;
            console.log(val)
            console.log(this.LeftSide.DelayVal)
        } else {
            this.LeftSide.DelayVal = 0.01;
            this.RightSide.DelayVal = (val - 0.5) / 0.1 * 0.14 + 0.001;
            console.log(val)
            console.log(this.RightSide.DelayVal)
        }

        /*
        this.LeftSide.SetCrossFade(Math.cos(this.CrossFadeValue * 0.5 * Math.PI));
        this.RightSide.SetCrossFade(Math.cos((1.0 - this.CrossFadeValue) * 0.5 * Math.PI));
        */
    }
}

