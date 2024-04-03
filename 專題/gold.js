var q=['（ ）全十美-','（ ）手八腳','=（ ）顧茅廬',
        '（ ）光十色-','（ ）事無成','=（ ）面八方',
        '（ ）嘴八舌-','（ ）親不認','=（ ）言為定',
        '（ ）死一生-','（ ）分五裂','=（ ）湖四海',
        '（ ）體投地-','（ ）長兩短','=（ ）敗俱傷',
        '（ ）仙過海-','（ ）字千金','=（ ）上八下',
        '（ ）面威風-','（ ）光十色','=（ ）頭六臂',
        '（ ）顏六色-','（ ）海為家','=（ ）絲不苟'];
var ans=['三','四','一','五','一','七','三','一'];
var hint1=['十全十美:比喻圓滿美好毫無缺陷的境界。','五光十色:形容色彩鮮麗，光耀奪目。','七嘴八舌:形容人多口雜，議論紛亂。'
            ,'九死一生:比喻歷經極大的險境而能倖存。','五體投地:比喻非常欽佩。','八仙過海:比喻為達目的，各自施展本領。'
            ,'八面威風:比喻聲勢浩大、神氣十足的樣子。','五顏六色:形容色彩繁多。'];
var hint2=['七手八腳:形容人多動作紛亂又沒條理。','一事無成:指事業毫無成就。','六親不認:形容不留情面或不講情義。'
            ,'四分五裂:形容分散而不完整、不團結。','三長兩短:原指說長道短。後比喻意外的變故。'
            ,'一字千金:比喻文辭精當，結構嚴謹。或用來形容價值極高的作品。亦可以用以指書法上一字價值千金。','五光十色:形容色彩鮮麗，光耀奪目。'
            ,'四海為家:比喻人四處漂泊、居無定所。'];
var hint3=['三顧茅廬：比喻對賢才真心誠意的邀請、拜訪。','四面八方：周圍各方。','一言為定：比喻事情既然已經談妥，便信守諾言，不再改變。'
            ,'五湖四海：指全國各地，有時也指世界各地。現有時也比喻廣泛的團結。','兩敗俱傷：雙方相爭，同受損害。'
            ,'七上八下：形容心情起伏不定、忐忑不安。或形容普通而不出眾。','三頭六臂：比喻人本領大，力強可畏。'
            ,'一絲不苟：形容做事認真，一點也不馬虎。']
var p=[0,3,6,9,12,15,18,21];
var response=[0,0,0,0,0,0,0,0];
var ran,temp,temp1,temp2,temp3,temp4;
var count=0;count1=0;
var sc=0;
function question(){
    var z=0;y=0;x='';
    document.getElementById('b').disabled=true;
    for(var i=0;i<=p.length;i++){
        z=Math.floor(Math.random()*(p.length));
        y=Math.floor(Math.random()*(p.length));
        temp=p[z];
        p[z]=p[y];
        p[y]=temp;
        temp1=ans[z];
        ans[z]=ans[y];
        ans[y]=temp1;
        temp2=hint1[z];
        hint1[z]=hint1[y];
        hint1[y]=temp2;
        temp3=hint2[z];
        hint2[z]=hint2[y];
        hint2[y]=temp3;
        temp4=hint3[z];
        hint3[z]=hint3[y];
        hint3[y]=temp4;
    }
    ran=0;
    for(var i=p[ran];i<(p[ran]+3);i++){
        x+=q[i];    
        document.getElementById('fb').innerHTML='<font size=6>'+x;
    }
}
function check(){
    if(document.getElementById('ip').value==ans[ran]){
        if(response[ran]==0){
            response[ran]=1;
            sc+=13;
            document.getElementById('fb1').innerHTML="答對了！！！"+" 你的分數："+sc;
        }
        else
            document.getElementById('fb1').innerHTML="答過了！"+" 你的分數："+sc;
    }
    else{
        document.getElementById('fb1').innerHTML="答錯了！！！"+" 你的分數："+sc;
    }
}
function before(){
    var x='';
    document.getElementById('fb3').innerHTML="";
    count=0;
    ran-=1;
    document.getElementById('n').disabled=false;
    document.getElementById('h').disabled=false;
    if(ran==0){
        document.getElementById('b').disabled=true;
    }
    for(var i=p[ran];i<(p[ran]+3);i++){
        x+=q[i]; 
        document.getElementById('fb').innerHTML='<font size=6>'+x;
    }
}
function next(){
    var x='';
    document.getElementById('fb3').innerHTML="";
    document.getElementById('b').disabled=false;
    count=0;
    ran+=1;
    if(ran==8){
        document.getElementById('n').disabled=true;
        document.getElementById('h').disabled=true;
        if(count1==0){
            document.getElementById('fb3').innerHTML+='<h2>'+"沒有題目了！ 你的總分是："+sc+'</h2>';
            count1=1;
            if(sc==104)
                document.getElementById('fb3').innerHTML+='<h2>'+"十分優秀！"+'</h2>'+'<img src="100.jpg" width=300 height=300>';
            else if(sc>60 && sc<100)
                document.getElementById('fb3').innerHTML+='<h2>'+"很棒！"+'</h2>'+'<img src="一級棒.jpg" width=300 height=300>';
            else
                document.getElementById('fb3').innerHTML+='<h2>'+"繼續努力！"+'</h2>'+'<img src="再加油.jpeg" width=300 height=300>';
        }
    }
    for(var i=p[ran];i<(p[ran]+3);i++){
        x+=q[i]; 
        document.getElementById('fb').innerHTML='<font size=6>'+x;
    }
}
function show(){
    document.getElementById('fb2').innerHTML="此題答案是："+ans[ran];
}
function hint(){
    if(count==0){
        count++;
        document.getElementById('fb3').innerHTML=hint1[ran];
    }
    else if(count==1){
        count++;
        document.getElementById('fb3').innerHTML+='<br>'+hint2[ran];
    }
    else{
        document.getElementById('fb3').innerHTML+='<br>'+hint3[ran];
        count=0;
    }
}