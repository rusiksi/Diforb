import { convolverSoundsBasePath } from './const';

export class BufferLoader {

    public static instance: BufferLoader;

    context: AudioContext;
    loadCount = 0;
    Left = null;
    Right = null;
    reverSound = null;
    reverSounds: any[];
    userToken: string;
    Stack = [];

    constructor(context: AudioContext, uToken: string){

        this.context = context;
        this.reverSounds = [];
        this.reverSounds["Hall"] = null;
        this.reverSounds["Noise"] = null;
        this.reverSounds["Glass_hit"] = null;
        this.userToken = uToken;
        
        BufferLoader.instance = this;
    }


    loadLeft(url, callBackFunc) {
        this.loadBuffer(url, callBackFunc);
    }

    loadReverb(callBackFunc) {
        this.loadBuffer(convolverSoundsBasePath + 'irHall.ogg', // this.reverSounds["Hall"],
            () => {
                this.loadBuffer(convolverSoundsBasePath + 'noise.ogg', //this.reverSounds["Noise"],
                    () =>  {
                        this.loadBuffer(convolverSoundsBasePath + 'glass-hit.ogg', // this.reverSounds["Glass_hit"],
                            callBackFunc);
                        this.reverSound = this.reverSounds["Hall"]
                    });
            });
    }

   loadOneReverb(url, callBackFunc) {
        this.loadBuffer(url, callBackFunc);
    }

    loadHallReverb(callBackFunc) {
        this.loadBuffer('src/sounds/reverb/irHall.ogg', callBackFunc);
    }

    loadRight(url, callBackFunc) {
        this.loadBuffer(url, callBackFunc);
    }

    loadBuffer(url, callBackFunc) {
        let request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            console.log('Request onload callback =>>>>>>>>>>>')
            console.log(request.response);
            // Asynchronously decode the audio file data in request.response
            this.context.decodeAudioData(request.response, (buffer) => {
                    console.log('Decode audio data =>>>>>>>>>>>');
                    console.log(buffer);
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    callBackFunc(buffer);
                },
                (error) => {
                    console.error('decodeAudioData error', error);
                }
            );
        }

        request.onerror = () => {
            //alert('BufferLoader: XHR error');
        }

        request.send();
    }


}





