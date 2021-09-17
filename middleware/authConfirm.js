export default function({ssrContext,from, redirect }) {
  //ナビゲーションガード
  // if ( !from || from.name !== "contact" ) {//contactページからのみアクセス可能 topページからアクセスできなくなる
  if ( !from || from.name === "complete") {//完了画面から戻れなくする
    redirect({ path: '/contact'});
    // console.log("成功")
  }
}
