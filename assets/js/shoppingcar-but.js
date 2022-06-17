// 由於有用到ajax，所以導致js與檔案未同步，因此需將頁面更改為同步處理，先載入ajax 再載入js 。
$.ajax({
    type: 'POST',
    url: './shoppingcar.html',
    async: false,   //非同步
    dataType: 'html',
})
function add(num){
    let input = Number(document.getElementsByClassName("value")[num].value);
    if( input<0 || input==0 ){
        alert("請輸入正整數")
        document.getElementsByClassName("value")[num].value=1
    }
    else{
        document.getElementsByClassName("value")[num].value=input+1
    }
}
function dec(num){
    let input = Number(document.getElementsByClassName("value")[num].value);
    if( input<0 || input==0){
        alert("請輸入正整數")
        document.getElementsByClassName("value")[num].value=1
    }
    else if( input!=1 ){
        document.getElementsByClassName("value")[num].value=input-1
    }
    else{
        document.getElementsByClassName("value")[num].value=1
    }
}

function del(obj){
    var table = obj.parentNode.parentNode.parentNode;
    var tr = obj.parentNode.parentNode;
    table.removeChild(tr);
}