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

    private onload: Function;

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
        this.loadBuffer(url, null, callBackFunc);
    }

    loadReverb(callBackFunc) {
        this.loadBuffer('src/sounds/reverb/irHall.ogg', this.reverSounds["Hall"],
            () => {
                this.loadBuffer('src/sounds/reverb/noise.ogg', this.reverSounds["Noise"],
                    function () {
                        this.loadBuffer('src/sounds/reverb/glass-hit.ogg', this.reverSounds["Glass_hit"],
                            callBackFunc); this.reverSound = this.reverSounds["Hall"]
                    });
            });
    }

   loadOneReverb(url, callBackFunc) {
        this.loadBuffer(url, this.reverSound, callBackFunc);
    }

    loadHallReverb(callBackFunc) {
        this.loadBuffer('src/sounds/reverb/irHall.ogg', this.reverSound, callBackFunc);
    }

    loadRight(url, callBackFunc) {
        this.loadBuffer(url, this.Right, callBackFunc);
    }

    loadBuffer(url, rever, callBackFunc) {
        var userTokenLoc = "Bearer " + this.userToken;
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        this.onload = callBackFunc;
        request.setRequestHeader("Authorization", userTokenLoc);

        var loader = this;

        request.onload = function () {
            // Asynchronously decode the audio file data in request.response
            loader.context.decodeAudioData(
                request.response,
                function (buffer) {
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.onload(buffer);
                },
                function (error) {
                    console.error('decodeAudioData error', error);
                }
            );
        }

        request.onerror = function () {
            //alert('BufferLoader: XHR error');
        }

        request.send();
    }


}





