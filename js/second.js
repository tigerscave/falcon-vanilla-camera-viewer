const savebtn2 = document.getElementById('savebtn2');
const inputtag2 = document.createElement('input');
inputtag2.setAttribute('class','input-ip-b');
const cameraview2 = document.getElementById('iframe-2');
const ptag2 = document.createElement('p');
ptag2.setAttribute('class','p-ip-b');
const div2 = document.getElementById('insert_div2');
let ipaddress2;
div2.appendChild(ptag2);
edit_btn_flag2 = false;

let IPaddress_value2 = localStorage.getItem('IPaddress_value2');
if (IPaddress_value2 ==null){
  IPaddress_value2 = ''
}
inputtag2.setAttribute('value',IPaddress_value2);
ptag2.textContent = IPaddress_value2;

inputtag2.addEventListener('input', (event) => {
  
  ipaddress2 = event.target.value
})

function edit_click_action2(){
  const iframe_src = `http://${ipaddress2}:7011/ImageViewer?Mode=Motion&Resolution=320x240&Quality=Standard&Interval=10`
  cameraview2.src = iframe_src
  // savebtn.textContent="NO";
  edit_btn_flag2 = !edit_btn_flag2;
  if(edit_btn_flag2 == true){
    savebtn2.textContent="保存";
    ptag2.remove();
    div2.appendChild(inputtag2);
  }
  else{
    savebtn2.textContent="編集";
    inputtag2.remove();
    localStorage.setItem('IPaddress_value2', inputtag2.value);
    let IPaddress_value2 = localStorage.getItem('IPaddress_value2');
    ptag2.textContent = IPaddress_value2;
    div2.appendChild(ptag2);
  
  }
}