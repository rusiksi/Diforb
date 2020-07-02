// var SMOOTHING = 0.8,
//     FFT_SIZE = 2048,
//     PIXEL_RATIO = window.devicePixelRatio || (screen as any).deviceXDPI / (screen as any).logicalXDPI;

// // Get audioContext
// var audioContext = new window.AudioContext;

// // requestAnimationFrame shim layer with setTimeout fallback
// window.requestAnimFrame =
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function (callback) { window.setTimeout(callback, 1000 / 60); };

// //+--------------------------------------------------------
// //| VISUALIZER OBJECT
// //+--------------------------------------------------------

// /**
//  * Display visualization of music buffer
//  * @param DOMElement canvas
//  * @param string type - oscillator, waveform
//  */
// function Visualizer(canvas, type) {

//     // Waveform add wrapper
//     if (type == "waveform") {
//         var wrapper = document.createElement('div');
//         wrapper.setAttribute("class", "wrapper");
//         wrapper.style.position = "relative";

//         canvas.parentNode.replaceChild(wrapper, canvas);
//         wrapper.appendChild(canvas);
//     }

//     // Canvas context
//     var drawContext = canvas.getContext('2d'),
//         width = canvas.width,
//         height = canvas.height;

//     // Audio analyzer
//     var analyser = audioContext.createAnalyser();
//     analyser.connect(audioContext.destination);
//     analyser.minDecibels = -140;
//     analyser.maxDecibels = 0;
//     analyser.smoothingTimeConstant = SMOOTHING;
//     analyser.fftSize = FFT_SIZE;

//     var freqs = new Uint8Array(analyser.frequencyBinCount),
//         times = new Uint8Array(analyser.frequencyBinCount);

//     // Play/pause variables
//     var source = false,
//         buffer = false,
//         startTime = 0,
//         startOffset = 0,
//         isPlaying = false;

//     /**
//      * Connect source to analyser
//      * Whenever we want to play a song
//      */
//     function loadSource() {
//         source = audioContext.createBufferSource();
//         source.buffer = buffer;
//         source.loop = true;
//         source.start = source.start || source.noteGrainOn;
//         source.stop = source.stop || source.noteOff;
//         source.connect(analyser);
//     }

//     /**
//      * Type "oscillator"
//      * Draw the current playing buffer
//      * Called by this.play()
//      *
//      * Source: http://webaudioapi.com/samples/visualizer/
//      */
//     function drawOscillator() {
//         drawContext.clearRect(0, 0, width, height);

//         var x = 0,
//             n = analyser.frequencyBinCount,
//             barWidth = width / n;

//         if (freqs) {
//             analyser.getByteFrequencyData(freqs);

//             for (var i = 0; i < n; i++) {
//                 var percent = freqs[i] / 256,
//                     barHeight = height * percent,
//                     hue = i / n * 360;

//                 drawContext.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
//                 drawContext.fillRect(x, height - barHeight - 1, barWidth, barHeight);
//                 x += barWidth;
//             }
//         }

//         if (times) {
//             analyser.getByteTimeDomainData(times);
//             x = 0;

//             for (var i = 0; i < n; i++) {
//                 var percent = times[i] / 256,
//                     barHeight = height * percent;

//                 drawContext.fillStyle = 'white';
//                 drawContext.fillRect(x, height - barHeight - 1, barWidth, 2);
//                 x += barWidth;
//             }
//             if (isPlaying) {
//                 requestAnimFrame(drawOscillator);
//             }
//         }
//     }

//     /**
//      * Type "waveform"
//      * Draw the current position of buffer
//      * Called by this.play()
//      */
//     function drawWaveformCursor() {
//         startOffset += audioContext.currentTime - startTime;
//         startTime = audioContext.currentTime;

//         var timeOffset = startOffset % buffer.duration,
//             offset = timeOffset * width / buffer.duration;

//         drawContext.clearRect(0, 0, width, height);
//         drawContext.fillStyle = "#0275d8";
//         drawContext.fillRect(offset, 0, 3, height);

//         if (isPlaying) {
//             requestAnimFrame(drawWaveformCursor);
//         }
//     }

//     /**
//      * Get peaks of track
//      * Called by drawWaveform()
//      *
//      * Source: https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.js
//      * @param integer length
//      * @param integer first
//      * @param integer last
//      */
//     function getPeaks(length, first, last) {
//         var sampleSize = buffer.length / length,
//             sampleStep = ~~(sampleSize / 10) || 1,
//             channels = buffer.numberOfChannels;

//         var mergedPeaks = [];
//         mergedPeaks[2 * (length - 1)] = 0;
//         mergedPeaks[2 * (length - 1) + 1] = 0;

//         for (var c = 0; c < channels; c++) {
//             var chan = buffer.getChannelData(c);

//             for (var i = first; i <= last; i++) {
//                 var start = ~~(i * sampleSize),
//                     end = ~~(start + sampleSize),
//                     min = 0,
//                     max = 0;

//                 for (var j = start; j < end; j += sampleStep) {
//                     var value = chan[j];
//                     if (value > max) { max = value; }
//                     if (value < min) { min = value; }
//                 }
//                 if (c == 0 || max > mergedPeaks[2 * i]) { mergedPeaks[2 * i] = max; }
//                 if (c == 0 || min < mergedPeaks[2 * i + 1]) { mergedPeaks[2 * i + 1] = min; }
//             }
//         }
//         return mergedPeaks;
//     }

//     /**
//      * Display waveform of current music buffer
//      * Called by this.setBuffer()
//      *
//      * Source: https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.js
//      */
//     function drawWaveform() {
//         var first = 0,
//             last = width,
//             peaks = getPeaks(width, first, last);

//         // Bar wave draws the bottom only as a reflection of the top, so we don't need negative values
//         // Skip every other value if there are negatives.
//         var hasMinVals = [].some.call(peaks, function (val) { return val < 0; }),
//             peakIndexScale = hasMinVals ? 2 : 1,
//             length = peaks.length / peakIndexScale,
//             scale = length / width;

//         var BAR_WIDTH = 3,
//             BAR_HEIGHT = 1,

//             $ = 0.5 / PIXEL_RATIO,
//             absmax = 1 / BAR_HEIGHT,

//             middleH = height / 2,
//             barWidth = BAR_WIDTH * PIXEL_RATIO,
//             gap = Math.max(PIXEL_RATIO, ~~(barWidth / 2)),
//             step = barWidth + gap;

//         // Background
//         drawContext.fillStyle = "#444";
//         drawContext.fillRect(0, 0, width, height);

//         drawContext.fillStyle = "white";
//         drawContext.fillRect(0, middleH, width, 1);

//         // Waveform bars
//         for (var i = (first / scale); i < (last / scale); i += step) {
//             var peak = peaks[Math.floor(i * scale * peakIndexScale)] || 0;

//             var h = Math.round(peak / absmax * middleH);
//             drawContext.fillRect(i + $, middleH - h, barWidth + $, h * 2);
//         }
//         addCursor();
//     }

//     /**
//      * Add a cursor to waveform to view current position
//      * Called by drawWaveform()
//      */
//     function addCursor() {

//         // Add a new canvas to draw cursor on top of waveform
//         var canvasCursor = document.createElement("canvas");
//         canvasCursor.width = width;
//         canvasCursor.height = height;
//         canvasCursor.style.position = "absolute";
//         canvasCursor.style.top = "0";
//         canvasCursor.style.left = "0";
//         canvasCursor.style.pointerEvents = "none";

//         wrapper.appendChild(canvasCursor);
//         drawContext = canvasCursor.getContext('2d');
//     }

//     //+------------------------
//     //| PUBLIC METHODS
//     //+------------------------

//     /**
//      * Set the current music buffer to play/display
//      * @param buffer
//      */
//     this.setBuffer = function (b) {
//         if (isPlaying) return;

//         buffer = b;

//         if (type == "waveform") {
//             drawWaveform();
//         }
//     }

//     /**
//      * Play current buffer
//      * @param buffer
//      */
//     this.play = function () {
//         if (isPlaying || !buffer) return;

//         loadSource();
//         startTime = audioContext.currentTime;
//         isPlaying = true;
//         source.start(0, startOffset % buffer.duration);

//         switch (type) {
//             case "oscillator": drawOscillator(); break;
//             case "waveform": drawWaveformCursor(); break;
//         }
//     }

//     /**
//      * Pause
//      */
//     this.pause = function () {
//         if (!isPlaying) return;

//         source.stop(0);
//         startOffset += audioContext.currentTime - startTime;
//         isPlaying = false;
//     }

//     /**
//      * Play or pause
//      * @param buffer
//      */
//     this.toggle = function () {
//         if (isPlaying) {
//             this.pause();
//         } else {
//             this.play();
//         }
//     }
// }

// //+--------------------------------------------------------
// //| MUSIC LOADER
// //+--------------------------------------------------------

// /**
//  * Load music buffer
//  * @param object opts {
//  *    url: string
//  *    success: function(buffer)
//  *    error: function(string)
//  *  }
//  */
// function loadBuffer(opts) {
//     var request = new XMLHttpRequest();
//     request.open("GET", opts.url, true);
//     request.responseType = "arraybuffer";

//     request.onload = function () {
//         audioContext.decodeAudioData(request.response, opts.success, opts.error);
//     };
//     request.onerror = opts.error.bind(this, 'BufferLoader: XHR error');
//     request.send();
// }

// //+--------------------------------------------------------
// //| INIT PAGE
// //+--------------------------------------------------------

// // Load mp3
// loadBuffer({
//     //url: 'https://cdn.rawgit.com/a-mt/90efa43338186178b318adeb3ab344ea/raw/3a0f0d8207b2f30c389ec8d336439cd4eacf3753/chrono.mp3',
//     url: 'https://cdn.rawgit.com/a-mt/34c3a550ee2d638095797bdef052118e/raw/8d7c326d04d0e0e326f7f9abe0adae537b225ddd/Arilena%20-%20Nentori%20cut.mp3',
//     success: function (buffer) {

//         // Get canvas
//         var canvas = document.querySelector('canvas');
//         canvas.width = window.innerWidth > 500 ? 500 : window.innerWidth;
//         canvas.height = 100;
//         canvas.style.marginTop = "30px";

//         // Init visualizer
//         var visualizer = new Visualizer(canvas, "waveform");
//         visualizer.setBuffer(buffer);

//         // Add play/pause listener
//         var btn = document.getElementById("toggle");
//         btn.removeAttribute("disabled");
//         btn.addEventListener("click", function () {
//             visualizer.toggle();
//         });
//     },
//     error: function (error) {
//         alert(error);
//     }
// });



// ////////////////////////////////////////////////
// const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// window.requestAnimationFrame = requestAnimationFrame;

// const SETTINGS = {
//     width: 256,
//     height: 128,
//     step: 8,
//     strokeStyle: '#eb26ed',
//     fillStyle: '#101010',
//     lineWidth: 2
// };

// const AUDIO = {
//     audio: null,
//     audioContext: null,
//     source: null,
//     analyser: null,
//     dataArray: null,
//     bufferLength: null
// };

// const canvas = document.querySelector('canvas');
// const canvasCtx = canvas.getContext('2d');
// canvasCtx.strokeStyle = SETTINGS.strokeStyle;
// canvasCtx.lineWidth = SETTINGS.lineWidth;

// canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
// canvasCtx.fillStyle = SETTINGS.fillStyle;
// canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
// canvasCtx.beginPath();
// canvasCtx.moveTo(0, canvas.height / 2);
// canvasCtx.lineTo(canvas.width, canvas.height / 2);
// canvasCtx.stroke();

// let frame = 0;

// const getPoints = (() => {

//     AUDIO.analyser.getByteTimeDomainData(AUDIO.dataArray);


//     const sliceWidth = SETTINGS.width * 1.2 / AUDIO.bufferLength;
//     let x = 0;
//     let arr = [];

//     for (let i = 0; i < AUDIO.bufferLength; i++) {

//         let v = AUDIO.dataArray[i] / 128.0;
//         let y = v * SETTINGS.height / 2;

//         if (i % 64 == 0) {
//             //console.log((bufferLength / 2) / i);
//             arr.push({
//                 "x": x,
//                 "y": y * 2 - 56
//             });
//         };

//         x += sliceWidth;
//     };

//     return arr;
// });

// const draw = (() => {

//     if (frame % SETTINGS.step == 0) {
//         newarr = getPoints();
//     };

//     if (frame == 0) {
//         arr = getPoints();
//     };

//     canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//     canvasCtx.fillStyle = SETTINGS.fillStyle;
//     canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

//     canvasCtx.beginPath();

//     canvasCtx.moveTo(0, canvas.height / 2);


//     for (i = 1; i < arr.length - 2; i++) {
//         if (newarr.length > 0) {
//             if (arr[i].y > newarr[i].y) {
//                 const diff1 = (arr[i].y - newarr[i].y) / SETTINGS.step;
//                 arr[i].y -= diff1;
//             };
//             if (arr[i].y < newarr[i].y) {
//                 const diff2 = (newarr[i].y - arr[i].y) / SETTINGS.step;
//                 arr[i].y += diff2;
//             };
//             if (arr[i + 1].y > newarr[i + 1].y) {
//                 const diff3 = (arr[i + 1].y - newarr[i + 1].y) / SETTINGS.step;
//                 arr[i + 1].y -= diff3;
//             };
//             if (arr[i + 1].y < newarr[i + 1].y) {
//                 const diff4 = (newarr[i + 1].y - arr[i + 1].y) / SETTINGS.step;
//                 arr[i + 1].y += diff4;
//             };
//         };

//         const xc = (arr[i].x + arr[i + 1].x) / 2;
//         const yc = (arr[i].y + arr[i + 1].y) / 2;
//         canvasCtx.quadraticCurveTo(arr[i].x, arr[i].y, xc, yc);

//     };

//     canvasCtx.quadraticCurveTo(arr[i].x, arr[i].y, canvas.width, canvas.height / 2);
//     canvasCtx.stroke();

//     frame++;
//     requestAnimationFrame(draw);
// });

// const play = (() => {

//     AUDIO.audio.play();

//     btn.innerHTML = 'STOP';

//     btn.removeEventListener("click", play);
//     btn.addEventListener("click", stop);
// });

// const stop = (() => {

//     AUDIO.audio.pause();

//     btn.innerHTML = 'PLAY';

//     btn.removeEventListener("click", stop);
//     btn.addEventListener("click", play);
// });

// const init = (() => {

//     AUDIO.audio = document.querySelector('audio');
//     AUDIO.audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     AUDIO.source = AUDIO.audioContext.createMediaElementSource(AUDIO.audio);
//     AUDIO.analyser = AUDIO.audioContext.createAnalyser();

//     AUDIO.source.connect(AUDIO.analyser);
//     AUDIO.analyser.connect(AUDIO.audioContext.destination);

//     AUDIO.analyser.fftSize = 2048;
//     AUDIO.bufferLength = AUDIO.analyser.frequencyBinCount;
//     AUDIO.dataArray = new Uint8Array(AUDIO.bufferLength);
//     AUDIO.analyser.getByteTimeDomainData(AUDIO.dataArray);

//     play();
//     draw();

//     btn.removeEventListener("click", init);
// });

// const btn = document.querySelector('button');
// btn.addEventListener("click", init);