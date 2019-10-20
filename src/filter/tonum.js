export default function tonum(n){
    var oDate = new Date(n),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMin = oDate.getMinutes(),
    oSec = oDate.getSeconds(),
    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSec)
  return oTime;
}
function getzf(num){  
  if(parseInt(num) < 10){  
      num = '0'+num;  
  }  
  return num;  
}