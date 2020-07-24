import { WebApiBase } from './webapibase';

export class SoundAnalizer {

    Context: AudioContext;

    Analyser: AnalyserNode;
    ScriptProcessor: ScriptProcessorNode;

    private visualizers: Function[];

    constructor() {

        this.Analyser = this.Context.createAnalyser();
        this.Analyser.fftSize = 1024;
        this.Analyser.smoothingTimeConstant = 0.5;
        this.ScriptProcessor = this.Context.createScriptProcessor(1024, 2, 2);
        this.Analyser.connect(this.ScriptProcessor);
        this.ScriptProcessor.connect(this.Context.destination);
        this.visualizers = [];

        // var SoundAnalizerInst = this;
        // Возможно стоит сохранять контекст
        this.ScriptProcessor.onaudioprocess = (e) => {
            var channelData = e.inputBuffer.getChannelData(0);
            this.visualizers.forEach((visualizer) => {
                visualizer(channelData);
            });
        }
    }

    AddVisualizer = (visualizer) => {
        this.visualizers.push(visualizer);
    }

    UnSubscribe = (vizualizer) => {
        let indexVizualizer = this.visualizers.indexOf(vizualizer);
        if (~indexVizualizer) this.visualizers.splice(indexVizualizer, 1);
    }

}

Object.setPrototypeOf(SoundAnalizer.prototype, new WebApiBase);

