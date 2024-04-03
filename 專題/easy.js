//題目二維陣列
var q = [['三', '言', '兩', '語'],
        ['歪', '七', '扭', '八'],
        ['一', '舉', '兩', '得'],
        ['一', '石', '二', '鳥'],
        ['興', '高', '采', '烈'],
        ['喜', '出', '望', '外'],
        ['九', '牛', '二', '虎'],
        ['一', '毛', '不', '拔'],
        ['流', '言', '緋', '語'],
        ['妙', '手', '回', '春']];

//字首擺放位子
var c = [0, 1, 2, 3, 4, 8, 12];

//宣告整個表格
var whole = new Array(16);
var ans = '';
var idn='w';

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
    var ran, location, position;

    //成語亂數
    ran = Math.floor(Math.random()*(q.length));

    pre[count] = ran;
    if(count != 0){
        for(var i = 0; i < count; i++){
            if(pre[count] == pre[i]){
                ran = Math.floor(Math.random()*(q.length));
                i -= 1;
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

    //橫(0) 直(1) 斜(2) 亂數
    position=Math.floor(Math.random()*3);

    if (position==0){
        location=Math.floor(Math.random()*4);
        if (location > 0){
            location += 3;
        }

        for (var j = 0, i = c[location]; j < 4; j++, i = i + 1){
            document.getElementById(idn+i).innerHTML=q[ran][j];
            whole[i]=q[ran][j];
        }   

    }

    else if (position==1){
        location=Math.floor(Math.random()*4);
        for (var j = 0, i = c[location]; j < 4; j++, i = i + 4){
            document.getElementById(idn+i).innerHTML=q[ran][j];
            whole[i]=q[ran][j];
        }
        
    }

    else{
        location=Math.floor(Math.random()*2);
        if (location == 0){
            for (var j = 0,i = c[location]; j < 4; j++, i = i + 5){
                document.getElementById(idn+i).innerHTML=q[ran][j];
                whole[i]=q[ran][j];
            }

        }
        else{
            for (var j = 0, i = c[3]; j < 4; j++, i = i + 3){
                document.getElementById(idn+i).innerHTML=q[ran][j];
                whole[i]=q[ran][j];
            }

        }
    }

    //填上隨機字
    for (var i = 0; i < 16; i++){
        if (whole[i] == null){
            var x = Math.floor(Math.random()*(q.length));
            var y = Math.floor(Math.random()*4);
            whole[i] = q[x][y];
            document.getElementById(idn+i).innerHTML = q[x][y];
        }
    }

    //紀錄
    for (var i = 1; i <= 16; i++){
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
    for (var i = 0; i < 16; i++){
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
        for (var i = 0; i < 16; i++){
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
    for (var i = 0; i < 16; i++){
        document.getElementById(idn+i).innerHTML = num[now-1][i+1];
    }
}