var filename=["q1.jpg","q2.jpg","q3.jpg","q4.jpg","q5.jpg","q6.jpg","q7.jpg","q8.jpg"];
var answer=["欲哭無淚","十全十美","呼之欲出","得心應手","五光十色","心心相印","男女老少","手舞足蹈"];
var ans=["欲哭無淚:想哭卻哭不出來。比喻極度哀痛或無奈","十全十美:比喻圓滿美好毫無缺陷的境界。"
        ,"呼之欲出:形容人物描繪十分逼真。或形容人、事即將揭曉。","得心應手:形容做事順利或技藝純熟。"
        ,"五光十色:形容色彩鮮麗，光耀奪目。","心心相印:比喻彼此心靈互通，情意相合。"
        ,"男女老少:泛指所有的人","手舞足蹈:揮手舉足，舞動跳躍。形容高興到了極點。"]
var ran;
var temp,temp1,temp2;
var sc=0;count=0;a=0;
function start(){
    var z=0;y=0;
    for(var i=0;i<=filename.length;i++){
        z=Math.floor(Math.random()*(filename.length));
        y=Math.floor(Math.random()*(filename.length));
        temp=filename[z];
        filename[z]=filename[y];
        filename[y]=temp;
        temp1=answer[z];
        answer[z]=answer[y];
        answer[y]=temp1;
        temp2=ans[z];
        ans[z]=ans[y];
        ans[y]=temp2;
    }
    ran=0;
    document.getElementById('b').disabled=true;
    document.getElementById('q').innerHTML='<img src="'+filename[ran]+'">';
}
function check(){
    if(document.getElementById('ip1').value==answer[ran]){
        sc+=10;
        document.getElementById('fb1').innerHTML="答對了！！！"+"score:"+sc;
    }
    else
        document.getElementById('fb1').innerHTML="答錯了！！！"+"score:"+sc;
}
function before(){
    ran-=1;
    document.getElementById('n').disabled=false;
    if(ran==0){
        document.getElementById('b').disabled=true;
    }
    document.getElementById('q').innerHTML='<img src="'+filename[ran]+'">';
}
function next(){
    ran+=1;
    document.getElementById('b').disabled=false;
    if(ran==7){
        document.getElementById('n').disabled=true;
        if(count==0){
            count=1;
            document.getElementById('fb2').innerHTML+='<h2>'+"沒有題目了！ 你的總分是："+sc+'</h2>';
            if(sc==104)
                document.getElementById('fb2').innerHTML+='<h2>'+"十分優秀！"+'</h2>'+'<img src="100.jpg" width=300 height=300>';
            else if(sc>60 && sc<100)
                document.getElementById('fb2').innerHTML+='<h2>'+"很棒！"+'</h2>'+'<img src="一級棒.jpg" width=300 height=300>';
            else
                document.getElementById('fb2').innerHTML+='<h2>'+"繼續努力！"+'</h2>'+'<img src="再加油.jpeg" width=300 height=300>';
        }
    }
    document.getElementById('q').innerHTML='<img src="'+filename[ran]+'">';
}
function show(){
    document.getElementById('fb2').innerHTML="";
    if(a==0){
        a++;
        for(var i=0;i<8;i++){
            document.getElementById('fb3').innerHTML+='<img src="'+filename[i]+'">'+ans[i]+'<br>';
        }
    }
    else{
        a--;
        document.getElementById('fb3').innerHTML="";
    }
}