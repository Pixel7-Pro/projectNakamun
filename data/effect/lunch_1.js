//配列から献立５品目を取得・イラスト表示
var elem = document.getElementById("lunch_image01");
var img_path = "data/img/common/";

// 第１品目の項目
if (hinmoku_0.indexOf('ごはん') !== -1) {

    //alert('含まれています。');
    elem.src = img_path + "gohan1.png";
    
} else if (hinmoku_0.indexOf('スライスまるパン') !== -1) {

    elem.src = img_path + "suraisumarupan1.png";
    
} else if (hinmoku_0.indexOf('ミルクパン') !== -1) {
    
    elem.src = img_path + "milkpan.png";
    
} else if (hinmoku_0.indexOf('米パン') !== -1) {
    
    elem.src = img_path + "komepan.png";
    
} else if (hinmoku_0.indexOf('バターロール') !== -1) {
    
    elem.src = img_path + "batarole.png";    
    
    
    
} else {

    elem.src = img_path + "sample.jpg";

}

//console.log(hinmoku_0);
