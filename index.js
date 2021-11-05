// 
$(() => {
  $("#submit-button").on("click", (event) => {
    // preventDefault()でbuttonタグのデフォルトの挙動を妨げている。
    // これがないとページ遷移をしようとする。
    event.preventDefault()
    // for文というもので正答数を数えている。
    let count = 0
    for (let i = 1; i < 11; i ++) {
      // $('input[name="quiz1"]:checked').val() で
      // 'quiz1'というnameをもつformのcheckがついた要素のvalueを取得できる。
      if($('input[name="quiz' + i + '"]:checked').val() === "correct"){
        count ++
      }
    }
    const txt = count + "問正解！"
    // 一度要素を空にしてから、中身を入れている。
    // 要素を空にしないとtxtが何度も出力される。
    $("#result").empty()
    $("#result").append(txt)
    $("#tweet").empty()
    /* 
      Tweetするボタン
      雛形は以下のサイトで取得できる。
      https://publish.twitter.com/#
      urlをいじることで、ツイート内容をカスタマイズできる。
      一文が長い場合は適当なところで改行しても良い。
    */
    $("#tweet").append(`
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw&text=ソースコードからプログラミング言語を当てるクイズ！　` +
      txt +
      `" class="twitter-share-button"
        data-show-count="false">
          結果をツイート
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
    )
  })
})