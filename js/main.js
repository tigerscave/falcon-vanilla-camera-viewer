const savebtn = document.getElementById('savebtn');
const inputtag = document.getElementById('input-ip-a');
const cameraview = document.getElementById('iframe-1');
var ipaddress;

inputtag.addEventListener('input', (event) => {
  
  ipaddress = event.target.value
})

savebtn.addEventListener('click', () => {
  const iframe_src = `http://${ipaddress}:7011/ImageViewer?Mode=Motion&Resolution=320x240&Quality=Standard&Interval=10`
  cameraview.src = iframe_src
  console.log(cameraview.src)
  // savebtn.textContent="NO";

  if(savebtn.textContent=="編集"){
    savebtn.textContent="保存";}
  else if(savebtn.textContent=="保存"){
    savebtn.textContent="編集";}
})