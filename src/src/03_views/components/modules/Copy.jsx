export default function Copy () {
    const outputEle = document.getElementById("outputname");
    if (outputEle) {
      // テキストエリアの値を取得してクリップボードにコピー
      navigator.clipboard.writeText(outputEle.value)
        .then(() => {
          alert("コピーしました！");
        })
        .catch((err) => {
          console.error("コピーに失敗しました:", err);
        });
    } 
}