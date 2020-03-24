function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML =
      Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = 10000
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call() 
    }
  }, 10)
}

var result = `/*
* 面试官您好，我叫Qiuzp
* 下面请允许我用动画的形式来介绍一下我自己
* 只用文字介绍未免有点太单调了
* 我就用代码来介绍吧
* 首先准备一下CSS样式
*/

*{
transition:all 1s;
}

body{
background:#C7FFF9;
font-size:18px;
color:#000;
border:3px solid #333;
padding:20px;
}

/* 我需要一点代码高亮 */
.token.selector{
  color:#690;
}
.token.property{
  color:#905;
}
.token.punctuation{
  color:#999;
} 

/* 加点3D效果 */
#code{
  transform:rotate(360deg);
}

/* 下面正式介绍一下我自己吧*/
/* 通灵之术-白纸召唤之术*/ 
`

var result2 = `
#paper{
  width:100px; height:100px;
  background:white;
}
`

writeCode('', result, () => {
  createPaper(() => {
    writeCode(result, result2)
  })
})

function createPaper(fn) {
  var paper = document.createElement('pre')
  paper.id = 'paper'
  document.body.appendChild(paper)
  fn.call()
}

function fn3(preResult) {
  var n = 0
  var id = setInterval(() => {
    n += 1
    code.innerHTML = preResult + result.substring(0, 1)
    code.innerHTML =
      Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = preResult + result.substring(0, n)
    if (n >= result.length) {
      window.clearInterval(id)
    }
  }, 10)

}