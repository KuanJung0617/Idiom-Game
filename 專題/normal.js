//題目二維陣列
var q = [['心', '花', '怒', '放'],
        ['一', '視', '同', '仁'],
        ['口', '是', '心', '非'],
        ['黃', '道', '吉', '日'],
        ['草', '菅', '人', '命'],
        ['一', '網', '打', '盡'],
        ['異', '口', '同', '聲'],
        ['愛', '不', '釋', '手'],
        ['風', '調', '雨', '順'],
        ['守', '口', '如', '瓶']];


//宣告整個表格
var whole = new Array(49);

var ans = '';
var idn = 'w';

//暫存出過的成語
var pre = new Array();

//計算總題數
var count = 0;

//計算當前題數
var now = 1;

//存放出過的所有題目
var num = new Array(10);

function question(){
    num[count] = new Array();
    var ran, position;

    //成語亂數
    ran = Math.floor(Math.random()*(q.length));

    pre[count] = ran;
    if(count != 0){
        for(var i = 0; i < count; i++){
            if(pre[count] == pre[i]){
                ran = Math.floor(Math.random()*(q.length));
                i = -1;
                pre[count] = ran;
            }
        }
    }
    //存答案
    for (var i=0;i<4;i++){
        ans += q[ran][i];
    }
    num[count][0] = ans;
    ans = "";

    var x = Math.floor(Math.random() * 7);
    var y = 0;
    if(x > 3){
        y = Math.floor(Math.random() * 4);

        //直(0) 斜(1) 亂數
        position = Math.floor(Math.random() * 2);

        if(position == 0){
            for (var j = 0, i = x + y * 7 ; j < 4; j++, i = i + 7){
                document.getElementById(idn+i).innerHTML=q[ran][j];
                whole[i]=q[ran][j];
            }  
        }
        else{
            for (var j = 0, i = x + y * 7 ; j < 4; j++, i = i + 6){
                document.getElementById(idn+i).innerHTML=q[ran][j];
                whole[i]=q[ran][j];
            }
        }
    }
    else{
        y = Math.floor(Math.random() * 7);

        if(y > 3){
            //only 橫
            for (var j = 0, i = x + y * 7 ; j < 4; j++, i = i + 1){
                document.getElementById(idn+i).innerHTML=q[ran][j];
                whole[i]=q[ran][j];
            } 
        }
        else{
            //橫(0) 直(1) 斜(2) 亂數
            position = Math.floor(Math.random() * 3);

            if(position == 0){
                for (var j = 0, i = x + y * 7 ; j < 4; j++, i = i + 1){
                    document.getElementById(idn+i).innerHTML=q[ran][j];
                    whole[i]=q[ran][j];
                } 
            }
            else if(position == 1){
                for (var j = 0, i = x + y * 7 ; j < 4; j++, i = i + 7){
                    document.getElementById(idn+i).innerHTML=q[ran][j];
                    whole[i]=q[ran][j];
                }
            }
            else{
                for (var j = 0, i = x + y * 7 ; j < 4; j++, i = i + 8){
                    document.getElementById(idn+i).innerHTML=q[ran][j];
                    whole[i]=q[ran][j];
                }
            }
        }
        
    }

    //填上隨機字
    for (var i = 0; i < 49; i++){
        if (whole[i] == null){
            var a = Math.floor(Math.random()*(q.length));
            var b = Math.floor(Math.random()*4);
            whole[i] = q[a][b];
            document.getElementById(idn+i).innerHTML = q[a][b];
        }
    }

    //紀錄
    for (var i = 1; i <= 49; i++){
        num[count][i] = whole[i - 1];
    }
}

function check(){
    if (document.getElementById('in1').value ==""){
        alert("答案不可空白");
    }
    else{
        if(document.getElementById('in1').value == num[count][0]){
            document.getElementById('fb').innerHTML = "答對了！！！"
            // alert(count);
            if (now > 9){
                document.getElementById('n').disabled=true;
            }
            else{
                document.getElementById('n').disabled=false;
            }
        // alert(num);
        }
        else{
            document.getElementById('fb').innerHTML = "答錯了！！！"
            document.getElementById('s').disabled=false;
        }
    }
}

function show(){
    document.getElementById('fb1').innerHTML = num[now-1][0];
}

function next(){
    document.getElementById('in1').innerHTML == "";
    for (var i = 0; i < 49; i++){
        document.getElementById(idn+i).innerHTML = null;
        whole[i] = null;
    }
    if (now <= 10 && count == now-1){
        now += 1;
        //alert("當前題數："+now);

        document.getElementById('fb1').innerHTML = "";
        document.getElementById('fb').innerHTML = "";
        document.getElementById('n').disabled = true;
        document.getElementById('b').disabled = false;
        count += 1;
        question();
    }
    else if (now <= 10 && count != now - 1){
        document.getElementById('fb').innerHTML = "";
        now += 1;
        //alert("當前題數："+now);
        for (var i = 0; i < 49; i++){
            document.getElementById(idn+i).innerHTML = num[now-1][i+1];
        }
    }
}

function before(){
    document.getElementById('n').disabled=false;
    document.getElementById('fb1').innerHTML ="";
    document.getElementById('fb').innerHTML = ""
    now -= 1;
    if (now == 1){
        document.getElementById('b').disabled = false;
    }
    //alert("當前題數："+now);
    for (var i = 0; i < 49; i++){
        document.getElementById(idn+i).innerHTML = num[now-1][i+1];
    }
}