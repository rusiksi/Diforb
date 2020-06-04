import { WebApiBase } from './webapibase';

export class Compressor {

    Context: AudioContext;
    Instance: DynamicsCompressorNode;

    private compressor: DynamicsCompressorNode;

    constructor(){
        
        this.compressor = this.Context.createDynamicsCompressor();
        this.compressor.threshold.value = -1.4;
        this.compressor.knee.value = 12;
        this.compressor.ratio.value = 1;
        // this.compressor.reduction.value = 0;
        // узнать почему ругается TS
        this.compressor.attack.value = 0.03;
        this.compressor.release.value = 15.5;

        this.Instance = this.compressor;
    }
}

Object.setPrototypeOf(Compressor.prototype, new WebApiBase);