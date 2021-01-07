var pagination=document.querySelector('.Pagination');
var divRow=document.querySelector('.ul1');
(async function(){
    var p1=await promiseAjax({
        url:'../php/index3adidas.php'
    })
    var dt=eval('('+p1+')')
    var obj={
        pageInfo:{
            pagenum:1,
            pagesize:10, 
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/12)
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:'下一页',
            last:"尾页"
        },
        change(m){
            let ar2=dt.slice((m-1)*12,m*12)
            console.log(ar2)
            var str=''
            for(var attr in ar2){
                str+=`
                    <li class="li1">
                        <a href="./demon4adidas.html">
                        <img src="${ar2[attr].img}" alt="">
                        <p>¥<span>${ar2[attr].money}</span><i>¥${ar2[attr].money2}</i></p>
                        <em>${ar2[attr].spmc}</em><br>
                        <em>${ar2[attr].xiaoliang}</em><br>
                        <em class="em2">${ar2[attr].size}</em>
                        </a>
                    </li>
                `
            }
            divRow.innerHTML=str
        }
    }
    new Pagination(pagination,obj)
})()
