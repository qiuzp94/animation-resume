!function () {
  var duration = 50
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) 
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 30
        break
      case 'fast':
        duration = 10
        break
    }
  })

  function writeCss(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setTimeout(function run() {
      n += 1
      domCode.innerHTML =
        Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
      styleTag.innerHTML = prefix + code.substring(0, n)
      domCode.scrollTop = domCode.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, duration)
  }

  function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0;
    let id = setTimeout(function run() {
      n += 1
      domPaper.innerHTML = markdown.substring(0, n)
      domPaper.scrollTop = domPaper.scrollHeight
      if (n < markdown.length) {
        id = setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, duration)
  }

  var css1 = `/*
  * 面试官您好，我叫Qiuzp
  * 下面请允许我用动画的形式来介绍一下我自己
  * 只用文字介绍未免有点太单调了
  * 我就用代码来介绍吧
  * 首先准备一下CSS样式
  */
  
  *{
  transition:all 1s;
  }
  
  html{
  background:#DFFFE1;
  }
  
  #code{
    color:#2d3436;
    border:2px solid #5A815D;
    
    padding:16px;
    font-size:16px
  }
  
  /* 我需要一点代码高亮 */
  .token.selector{color:#66FF70;}
  .token.property{color:#71BEFF;}
  .token.punctuation{color:#FFBF66;} 
  .token.comment{color:#5D7181;}
  
  /* 加一个呼吸效果 */
  #code{
    animation:breath 0.5s infinite alternate-reverse;
    
  }
  
  /* 现在正式开始*/
  /* 通灵之术-白纸召唤之术*/ 
  
  
  #code-wrapper{
   width:50%;
   left:0;
   position:fixed;
   height:100%;   
  }
  #paper > .content{
    display:block;
  }
  
  /*于是我可以在白字上写字，请看右边*/
  `



  var css2 = `
  /*接下来用一个优秀的库 marked.js
  * 把Markdown 变成 HTML
  */
  `

  var md = `
  # 自我介绍
  
  我叫Qiuzp
  
  1994年8月出生 
  广东青年职业学院毕业 
  自学前端半年 
  
  希望应聘前端开发岗位
  
  ## 一、专业技能
  
  * 熟练使用HTML5&CSS3 
  * 熟练使用Javascript 
  * 熟练使用Vue.jS 
  * 掌握使用小程序开发 
  
  ## 二、个人项目
  
  *  在线简历
  [预览地址](https://qiuzp.com/resume-demo/)
  [源码地址](https://github.com/qiuzp94/resume-demo)
  
  *  微信小程序-qiuzp翻译
  [微信搜qiuzp翻译]()
  [源码地址](https://github.com/qiuzp94/translate)
  
  *  在线导航书签
  [预览地址](https://qiuzp94.github.io/myBookMark/index.html)
  [源码地址](https://github.com/qiuzp94/myBookMark)
  
  *  仿苹果风格轮播
  [预览地址](https://qiuzp94.github.io/Apple-like-Gallery-Slideshow/.)
  [源码地址](https://github.com/qiuzp94/Apple-like-Gallery-Slideshow)
  
  ## 三、技术博客
  
  ### 个人博客
   [qiuzp.com](https://qiuzp.com)
  
   ### 个人简书主页
   [简书地址](https://www.jianshu.com/nb/44513994)
  
  `


  let css3 = `
  /* 
  * 这就是我的会动的简历
  * 谢谢观看
  *
  /
  
  `


  writeCss('', css1, () => {
    createPaper(() => {
      writeMarkdown(md, () => {
        writeCss(css1, css2, () => {
          convertMarkdownToHtml(() => {
            writeCss(css1 + css2, css3, () => {
              console.log('完成')
            })
          })
        })
      })
    })
  })


  function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
  }


  function convertMarkdownToHtml(fn) {

    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
  }



}.call()

















