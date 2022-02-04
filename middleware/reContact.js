export default function({ ssrContext, from, redirect }) {
  //ナビゲーションガード
  // if ( !from || from.name !== "contact" ) {//contactページからのみアクセス可能 topページからアクセスできなくなる
  if (!from || from.name === "complete") {
    //完了画面から確認画面に戻れなくする
    // pages/confirmで読み込んでいる
    redirect({ path: "/contact" });
    // console.log("成功")
  }
}
