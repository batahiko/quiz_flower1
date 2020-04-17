const introDivided = document.getElementById('intro');
const quizButton = document.getElementById('quizbutton');
const quizDivided = document.getElementById('quiz-area');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
function removeAllChildren(element){
    while (element.firstChild){//子どもの要素がある限り削除
        element.removeChild(element.firstChild);
    }
}
var answerpoint = 0;
function quizstyle(number){
    //TODOn番目を引数に渡して、正解かどうかを教える

    const header = document.createElement('h3');
    var str = String(number+1) + '問目';
    header.innerText = str;

    quizDivided.appendChild(header);

    const pict = document.createElement('img');
    pict.setAttribute("src", pictures[number]);
    pict.setAttribute("alt", "画像が見つかりません");
    pict.setAttribute("width", "50%");
    pict.setAttribute("height", "50%");
    quizDivided.appendChild(pict);

    const paragraph = document.createElement('p');
    paragraph.innerText = 'この花はなんていう名前？'
    quizDivided.appendChild(paragraph);

    const answerinput = document.createElement('input');
    answerinput.setAttribute('type',"text");
    answerinput.setAttribute('size',"40");
    answerinput.setAttribute('maxlength',"20");
    quizDivided.appendChild(answerinput);


    const clickbutton = document.createElement('button');
    clickbutton.setAttribute("id", "click");
    clickbutton.innerText = '進む';
    quizDivided.appendChild(clickbutton);
    



　　//TODO ボタンを押したら正解かどうかわかる
click.onclick = () => {
    const answername = answerinput.value;
    console.log(answername)
    explain(answername,number);
    }
}
    //正解ポイントがたまる
    //解説が出てくる
    //次へを押したら次の問題へ移る。正解ポイントはリセットされない
function explain(answername,number){
    if (answername.length != 0){
        removeAllChildren(quizDivided);
    
        var answerresult;
    
        if (answername === flowers[number]){
            answerresult = '正解！' + '\n';
            answerpoint += 1
        }else{
    answerresult = '残念！　正解は' + flowers[number] + 'でした！' + '\n';
        }
        const explain = document.createElement('p');
        explain.setAttribute("id", "explain")
        explain.innerText = answerresult + explains[number];
        quizDivided.appendChild(explain);
    
        const nextbutton = document.createElement('button');
        nextbutton.setAttribute("id", "next");
        nextbutton.innerText = '次へ進む';
        quizDivided.appendChild(nextbutton);
    
        next.onclick = () => {
            removeAllChildren(quizDivided);
            if(number < flowers.length-1){
            quizstyle(number+1);}
            else{
                //結果の画面に移る

                var coment;

                if (answerpoint <= 1){
                    coment = coments[0];
                }
                else if (answerpoint <=3){
                    coment = coments[1];
                }
                else if (answerpoint < flowers.length-1){
                    coment = coments[2];
                }
                else if (answerpoint < flowers.length){
                    coment = coments[3];
                }
                else{coment = coments[4];}
                const result = document.createElement('h2');
                result.innerText = '結果発表';

                resultDivided.appendChild(result);

                const resultscore = document.createElement('p');
                resultscoretext = 'あなたのスコアは... \n' + String(answerpoint) + '点でした！\n' + coment;
                resultscore.innerText = resultscoretext;
                resultDivided.appendChild(resultscore);


                   // ツイートエリアの作成
                removeAllChildren(tweetDivided);
                const anchor = document.createElement('a');
                const hrefValue = "https://twitter.com/intent/tweet?button_hashtag=花の名前当てクイズ&ref_src=twsrc%5Etfw"

                anchor.setAttribute('href', hrefValue);
                anchor.setAttribute('data-url', "https://batahiko.github.io/quizflower1/quizflower1.html")
                anchor.className = 'twitter-hashtag-button';
                result_twitter = "あなたのスコアは" + String(flowers.length) + "点満点中"+ String(answerpoint) + "点でした";
                anchor.setAttribute('data-text',result_twitter);
                anchor.innerText = 'Tweet #花の名前クイズ';

                tweetDivided.appendChild(anchor);

                const script = document.createElement('script');
                script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
                tweetDivided.appendChild(script)



            }
        }
            
        }

}

quizButton.onclick = () => {
    removeAllChildren(introDivided);
    console.log('スタートボタンが押されました。');
    //ここから問題
        quizstyle(0);
               
}

var flowers = [
'ジンチョウゲ',
'ヤマブキ',
'スイセン',
'ハナニラ',
'ムスカリ',
'シャガ',
'ヒメキンギョソウ',
'ツルニチニチソウ',
'オウバイモドキ',
'ヒヤシンス',
]

var explains = [
    'ときどきその辺に植えてある。写真は3月頃に撮影したもの。',
    'きれい',
    '有毒植物。にらと間違えちゃダメですよ',
    '京大周辺にめっちゃ生えてる。切ったらニラのにおいがするらしいけど有毒。',
    '地中海沿岸から来たらしい',
    'かなり古くに中国からやってきた帰化植物。日本にいるのは三倍体なので種はできない。',
    'リナリアともいうらしい（リナリアで不正解になったかたはごめんなさい。僕のせいです。）',
    'よく生えてる。観賞用によく栽培される。有毒。',
    '別名ウンナンオウバイ。つる性の常緑低木。枝がしだれるのが特徴的。3－4月ごろに黄色い花が咲く。',
    'きれい',
]

var pictures = [
    "picture/IMG_2.JPG",
    "picture/IMG_3.JPG",
    "picture/IMG_4.JPG",
    "picture/IMG_5.JPG",
    "picture/IMG_6.JPG",
    "picture/IMG_7.JPG",
    "picture/IMG_8.JPG",
    "picture/IMG_9.JPG",
    "picture/IMG_10.JPG",
    "picture/IMG_11.JPG"
]

var coments = [
    "しょぼ笑",
    "これからがんばって覚えましょう",
    "なかなかやるではないか この調子で頑張るのだぞ",
    "しゅごい",
    "なんと。パーフェクトではないか。"
]
