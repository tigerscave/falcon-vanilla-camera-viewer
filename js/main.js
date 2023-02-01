const savebtn = document.getElementById('savebtn');
const inputtag = document.createElement('input');
inputtag.setAttribute('class','input-ip-a');
const ptag = document.createElement('p');
ptag.setAttribute('class','p-ip-a');
const div = document.getElementById('insert_div');
let ipaddress;
div.appendChild(ptag);
const cameraview = document.getElementById('iframe-1');
edit_btn_flag = false;

let IPaddress_value = localStorage.getItem('IPaddress_value');
if (IPaddress_value ==null){
  IPaddress_value = ''
}
inputtag.setAttribute('value',IPaddress_value);
ptag.textContent = IPaddress_value;

inputtag.addEventListener('input', (event) => {
  ipaddress = event.target.value
})

function edit_click_action(){
  const iframe_src = `http://${ipaddress}:7011/ImageViewer?Mode=Motion&Resolution=320x240&Quality=Standard&Interval=10`
  cameraview.src = iframe_src
  // savebtn.textContent="NO";
  edit_btn_flag = !edit_btn_flag;
  if(edit_btn_flag == true){
    savebtn.textContent="保存";
    ptag.remove();
    div.appendChild(inputtag);
  }
  else{
    savebtn.textContent="編集";
    inputtag.remove();
    localStorage.setItem('IPaddress_value', inputtag.value);
    let IPaddress_value = localStorage.getItem('IPaddress_value');
    ptag.textContent = IPaddress_value;
    div.appendChild(ptag);
  
  }
}