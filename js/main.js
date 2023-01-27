const savebtn = document.getElementById('savebtn');
const inputtag = document.createElement('input');
inputtag.setAttribute('class','input-ip-a');
const ptag = document.createElement('p');
ptag.setAttribute('class','p-ip-a');
const div = document.getElementById('insert_div');
var ipaddress;
div.appendChild(ptag);
const cameraview = document.getElementById('iframe-1');

var data = localStorage.getItem('data');
if (data ==null){
  data = ''
}
inputtag.setAttribute('value',data);
ptag.textContent = data;

inputtag.addEventListener('input', (event) => {
  
  ipaddress = event.target.value
})

savebtn.addEventListener('click', () => {
  const iframe_src = `http://${ipaddress}:7011/ImageViewer?Mode=Motion&Resolution=320x240&Quality=Standard&Interval=10`
  cameraview.src = iframe_src
  // savebtn.textContent="NO";

  if(savebtn.textContent=="編集"){
    savebtn.textContent="保存";
    ptag.remove();
    div.appendChild(inputtag);
  }
  else if(savebtn.textContent=="保存"){
    savebtn.textContent="編集";
    inputtag.remove();
    localStorage.setItem('data', inputtag.value);
    var data = localStorage.getItem('data');
    ptag.textContent = data;
    div.appendChild(ptag);
  
  }
})