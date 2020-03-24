var result = `/*
* 面试官您好，我叫Qiuzp
* 下面请允许我用动画的形式来介绍一下我自己
* 只用文字介绍未免有点太单调了
* 我就用代码来介绍吧
* 首先准备一下CSS样式
*/

*{
transition:all 1s;
margin:0;
padding:0;
box-sizing:border-box;
}

body{
background:#C7FFF9;
color:#000;
border:3px solid #45BEB1;
padding:20px;
}
`

var n = 0
var id = setInterval(()=>{
  n += 1 
  code.innerHTML = result.substring(0,n)
  code.innerHTML = 
    Prism.highlight(code.innerHTML, Prism.languages.css,'css');
  styleTag.innerHTML = result.substring(0,n)
  if(n >= result.length){
      window.clearInterval(id)
  }  
},10)

