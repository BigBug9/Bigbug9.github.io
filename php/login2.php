<?php
 header("content-type:text/html;charset=utf-8");
 //获取参数
 $u=$_GET['text'];
 $p=$_GET['password'];

 //连接数据库
 $link=mysqli_connect('localhost','root','','aaa');
 //设置编码
 mysqli_set_charset($link,"utf8");
 //SQL语句
 $sql="INSERT INTO `ads` VALUES (null, '$u', '$p')";
 #执行SQL语句
 $res=mysqli_query($link,$sql); 
 mysqli_close($link);
 if($res){
     $arr=array('code'=>1);
     $json=json_encode($arr);
     echo $json;
 }else{
     $arr=array('code'=>0);
     $json=json_encode($arr);
     echo $json;
 }
?>