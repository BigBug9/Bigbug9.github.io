var box= document.querySelector('#banner')
var markBox=document.querySelector('.markBox')
var imgBox=document.querySelector('.imgBox')
var btnBox=document.querySelector('.btnBox')
var imgs=imgBox.querySelectorAll('img')
var btns=btnBox.querySelectorAll('span')
var arrows=document.querySelectorAll('.a12')
var dsq1;
console.log(arrows);
       var dsq2;
       //当前图片对应的下标
       var imgIndex=1
       //获取图片对应的宽度
       var imgWidth=imgs[0].offsetWidth
       //显示第二张图片
       markBox.scrollLeft=imgIndex*imgWidth
       //设置按钮下标
       var btnIndex=0
       //自动轮播
       function autoMove(){
          imgIndex++
          if(imgIndex>6){
              imgIndex=2
              markBox.scrollLeft=600
          }
          move()
          //按钮叠加
          btnIndex++
          if(btnIndex>4){
              btnIndex=0
          }
          //清空所有按钮中class属性值
          for(var i=0;i<btns.length;i++){
              btns[i].className=''
          }
          //再给指定按钮设置class属性值
          btns[btnIndex].className='bgcolor'
       }

       //给box对象设置鼠标移入移出事件
       box.onmouseover=function(){
           clearInterval(dsq1)
       }
       box.onmouseout=function(){
         dsq1=setInterval(autoMove,3000)
       }
       dsq1=setInterval(autoMove,3000)

       //给右边按钮绑定点击事件
       arrows[1].onclick=function(){
            autoMove()
       }
       //给左边按钮绑定点击事件
       arrows[0].onclick=function(){
            imgIndex--
            if(imgIndex<0){
                imgIndex=imgs.length-3
                markBox.scrollLeft=(imgIndex+1)*imgWidth
            }
            move()
            //按钮叠加
            btnIndex--
            if(btnIndex<0){
                btnIndex=4
            }
            //清空所有按钮中class属性值
            for(var i=0;i<btns.length;i++){
                btns[i].className=''
            }
            //再给指定按钮设置class属性值
            btns[btnIndex].className='bgcolor'
       }
       //给每个按钮绑定点击事件
       for(let i=0;i<btns.length;i++){
           btns[i].onclick=function(){
               
           }
       }
       function move(){
           //获取结束的滚动距离
          var endScroll=imgIndex*parseInt(imgWidth)
          //获取起始的滚动距离
          var startScroll=markBox.scrollLeft
          //设置步长
          var speed=(endScroll-startScroll)/10
          //判断当前步长是否大于0
          speed=speed>0?Math.ceil(speed):Math.floor(speed)
          clearInterval(dsq2)
          dsq2=setInterval(function(){
              //判断剩余的滚动距离是否小于等于步长
              if(Math.abs(endScroll-startScroll)<=Math.abs(speed)){
                  clearInterval(dsq2)
                  markBox.scrollLeft=endScroll
              }else{
                  //把计算结果重新赋值给起始滚动距离
                  startScroll+=speed  
                  markBox.scrollLeft=startScroll
              }
          },30)
       }