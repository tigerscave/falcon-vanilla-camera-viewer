const savebtn2 = document.getElementById('savebtn2');
const inputtag2 = document.createElement('input');
inputtag2.setAttribute('class','input-ip-b');
const cameraview2 = document.getElementById('iframe-2');
const ptag2 = document.createElement('p');
ptag2.setAttribute('class','p-ip-b');
const div2 = document.getElementById('insert_div2');
var ipaddress2;
div2.appendChild(ptag2);

var data2 = localStorage.getItem('data2');
if (data2 ==null){
  data2 = ''
}
inputtag2.setAttribute('value',data2);
ptag2.textContent = data2;

inputtag2.addEventListener('input', (event) => {
  
  ipaddress2 = event.target.value
})

savebtn2.addEventListener('click', () => {
  const iframe_src = `http://${ipaddress2}:7011/ImageViewer?Mode=Motion&Resolution=320x240&Quality=Standard&Interval=10`
  cameraview2.src = iframe_src
  // savebtn.textContent="NO";

  if(savebtn2.textContent=="編集"){
    savebtn2.textContent="保存";
    ptag2.remove();
    div2.appendChild(inputtag2);
  }
  else if(savebtn2.textContent=="保存"){
    savebtn2.textContent="編集";
    inputtag2.remove();
    localStorage.setItem('data2', inputtag2.value);
    var data2 = localStorage.getItem('data2');
    ptag2.textContent = data2;
    div2.appendChild(ptag2);
  
  }
})