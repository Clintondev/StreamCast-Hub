// public/js/spectrum.js

document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.getElementById("audio-player");
    const canvas = document.getElementById("spectrumCanvas");
    const canvasCtx = canvas.getContext("2d");
  
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
  
    const source = audioCtx.createMediaElementSource(audioElement);
    const analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
  
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
  
    function draw() {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        
        const gradient = canvasCtx.createLinearGradient(x, canvas.height - barHeight, x, canvas.height);
        gradient.addColorStop(0, "rgba(255,0,150,1)");   
        gradient.addColorStop(0.5, "rgba(255,200,0,1)");  
        gradient.addColorStop(1, "rgba(0,150,255,1)");     
  
        canvasCtx.fillStyle = gradient;
        canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
  
        x += barWidth + 1;
      }
    }
    
    draw();
  });
  