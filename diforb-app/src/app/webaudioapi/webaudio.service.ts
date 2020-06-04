import { Injectable, Inject } from '@angular/core';
import { Library } from './library';
import { WebApiBase } from './webapibase';
import { BufferLoader } from './bufferLoader';
import { Convolver } from './convolver';
import { ConvolverBuffer } from './convolverBuffer';
import { DiforbConstans, AuthService } from './const';


@Injectable({providedIn: 'root'})
export class WebAudioApiService {

    audioCtxt: AudioContext;
    library: Library = null;
    soundNamePrefix = "";

    constructor() {
       
        this.audioCtxt = new AudioContext();
        //---- Init BASE parameters for Audio API
        WebApiBase.prototype.Context = this.audioCtxt;
        WebApiBase.prototype.BasePath = "src/Sounds";
        WebApiBase.prototype.BaseFilePath = DiforbConstans.baseApiUrl + '/api/file/bufferbyid';

        //--- Create Buffer Loader
        WebApiBase.prototype.BufferLoader = new BufferLoader(this.audioCtxt, AuthService.authentication.token);

        // Set Analizer
        var locAnalyser: AnalyserNode = this.audioCtxt.createAnalyser();
        locAnalyser.fftSize = 1024;
        locAnalyser.smoothingTimeConstant = 0.5;
        WebApiBase.prototype.GeneralAnalyser = locAnalyser;

        //Set JavascriptNode for picture the wave
        WebApiBase.prototype.WaveNode = this.audioCtxt.createScriptProcessor(1024, 2, 2);
        WebApiBase.prototype.IsRecording = false;


        // Saver.prototype.DownlodProgress = refreshDownlodProgressBar;

        //.library.SoundAnalizer.AddVisualizer(drawAudioWave);

        //--- Set Convolver base sounds
        // Object.setPrototypeOf(Convolver.prototype, new WebApiBase);
        
        Convolver.prototype.Buffers = {
            Stadium: new ConvolverBuffer(DiforbConstans.ConvolverBufferPath.stadium),
            Hall: new ConvolverBuffer(DiforbConstans.ConvolverBufferPath.hall),
            Room: new ConvolverBuffer(DiforbConstans.ConvolverBufferPath.room)
        };

        Convolver.prototype.FillBuffers = function () {
            // var instance = this;
            
            this.BufferLoader.loadBuffer(this.Buffers.Stadium.Url, (buffer) => {
                this.Buffers.Stadium.Buffer = buffer;
                this.BufferLoader.loadBuffer(this.Buffers.Hall.Url, (buffer) => {
                    this.Buffers.Hall.Buffer = buffer;
                    this.BufferLoader.loadBuffer(this.Buffers.Room.Url, (buffer) => {
                        this.Buffers.Room.Buffer = buffer;

                        /*
                                            if(LIBRARY.LeftSide.Sounds.MainSound.Files &&
                                               LIBRARY.LeftSide.Sounds.MainSound.Files.length > 0)
                                            {
                                                LIBRARY.LeftSide.Sounds.MainSound.Read();
                                            }
                        */

                    });
                });
            });
        };

        Convolver.prototype.FillBuffers();

		//--- End of Convolver base sounds
        return this;
    }

    SetLibrary = (name) =>  {
        //---- Set Library and it's sides
        this.library = new Library(name);
		//---- Set Visualazer for vawe
    }

    AddLeftSound = (name) => {
        this.library.LeftSide.AddSound(name);
    }

    AddRightSound = (name) => {
        this.library.RightSide.AddSound(name);
    }
    
    SetSoundNamePrefix = (soumdNamePrefix) =>  {
        this.soundNamePrefix = soumdNamePrefix;
    }

}