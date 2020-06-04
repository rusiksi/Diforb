import { Injectable, Inject } from '@angular/core';
import { Library } from './library';
import { WebApiBase } from './webapibase';
import { BufferLoader } from './bufferLoader';

const DiforbConstans = { baseApiUrl: '' },
    AuthService = { authentication: { token: '' }};

@Injectable({providedIn: 'root'})
export class WebAudioApiService {

    audioCtxt: AudioContext;
    library: Library = null;
    soundNamePrefix = "";

    constructor() {
        
        this.audioCtxt = new AudioContext();
       
        // this.addLeftSound = addLeftSound;
        // this.addRightSound = addRightSound;
        // this.setSoundNamePrefix = setSoundNamePrefix;


        //---- Init BASE parameters for Audio API
        WebApiBase.prototype.Context = this.audioCtxt;
        WebApiBase.prototype.BasePath = "src/Sounds";
        WebApiBase.prototype.BaseFilePath = DiforbConstans.baseApiUrl + '/api/file/bufferbyid';

        //--- Create Buffer Loader
        WebApiBase.prototype.BufferLoader = new BufferLoader(this.audioCtxt, AuthService.authentication.token);
    }

    setLibrary = (name) =>  {
        //---- Set Library and it's sides
        this.library = new Library(name);
		//---- Set Visualazer for vawe
    }
}