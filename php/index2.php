<?php
header('content-type:text/html;charset=utf=8');
//链接数据库
$link=mysqli_connect("localhost",'root','','qwe');
mysqli_set_charset($link,'utf8');
$sql = "select * from goods1";
$result=mysqli_query($link,$sql);
$ar1=[];
while($ul1=mysqli_fetch_assoc($result)){
    array_push($ar1,$ul1);
}
echo json_encode($ar1);
?>