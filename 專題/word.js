var q=['繁','中','麗','僑',
        '吃','果','酸','勁',
        '奉','文','祭','花',
        '集','完','麗','國',
        '檢','抽','明','詢',
        '農','山','園','重',
        '準','預','份','忘',
        '裝','大','頭','味',
        '聖','先','能','慧',
        '低','下','睡','默'];
var ans=['華','醋','獻','美','查','莊','備','蒜','賢','沉'];
var ran,x,temp,temp1;
var sc=0;count=0;
var p=[0,4,8,12,16,20,24,28,32,36];
var response=[0,0,0,0,0,0,0,0,0,0];
var idn='w';
function question(){
    var z=0;y=0;
    for(var i=0;i<=p.length;i++){
        z=Math.floor(Math.random()*(p.length));
        y=Math.floor(Math.random()*(p.length));
        temp=p[z];
        p[z]=p[y];
        p[y]=temp;
        temp1=ans[z];
        ans[z]=ans[y];
        ans[y]=temp1;
    }
    ran=0;
    x=ans[ran];
    document.getElementById('b').disabled=true;
    for(var i=p[ran],j=0;i<(p[ran]+4);i++,j++){
        document.getElementById(idn+j).innerHTML=q[i];
    }
}
function check(){
    if(document.getElementById('ip').value==x){
        if(response[ran]==0){
            response[ran]=1;
            sc+=10;
            document.getElementById('fb1').innerHTML="答對了！！！"+" 你的分數："+sc;
            document.getElementById('ans').innerHTML="<font color=red>"+x;
        }
        else{
            document.getElementById('ans').innerHTML="<font color=red>"+x;
            document.getElementById('fb1').innerHTML=+"答過了！"+" 你的分數："+sc;
        }
    }
    else{
        document.getElementById('fb1').innerHTML="答錯了！！！"+" 你的分數："+sc;
        document.getElementById('ans').innerHTML="<font color=red>"+x;
    }
}
function show(){
    document.getElementById('fb2').innerHTML="此題答案是："+x;
    document.getElementById('ans').innerHTML="<font color=red>"+x;
}
function before(){
    ran-=1;
    document.getElementById('n').disabled=false;
    document.getElementById('ans').innerHTML="";
    if(ran==0){
        document.getElementById('b').disabled=true;
    }
    x=ans[ran];
    for(var i=p[ran],j=0;i<(p[ran]+4);i++,j++){
        document.getElementById(idn+j).innerHTML=q[i];
    }
}
function next(){
    ran+=1;
    document.getElementById('b').disabled=false;
    document.getElementById('ans').innerHTML="";
    if(ran==9){
        document.getElementById('n').disabled=true;
        if(count==0){
            count=1;
            document.getElementById('fb3').innerHTML+='<h2>'+"沒有題目了！ 你的總分是："+sc+'</h2>';
            if(sc==100)
                document.getElementById('fb3').innerHTML+='<h2>'+"十分優秀！"+'</h2>'+'<img src="100.jpg" width=300 height=300>';
            else if(sc>60 && sc<100)
                document.getElementById('fb3').innerHTML+='<h2>'+"很棒！"+'</h2>'+'<img src="一級棒.jpg" width=300 height=300>';
            else
                document.getElementById('fb3').innerHTML+='<h2>'+"繼續努力！"+'</h2>'+'<img src="再加油.jpeg" width=300 height=300>';
        }
    }
    x=ans[ran];
    for(var i=p[ran],j=0;i<(p[ran]+4);i++,j++){
        document.getElementById(idn+j).innerHTML=q[i];
    }
}