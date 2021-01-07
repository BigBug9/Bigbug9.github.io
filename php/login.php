<?php
header('content-type:text/html;charsrt=utf-8');
$u=$_GET['text'];
$p=$_GET['password'];
$conn=mysqli_connect('localhost','root','','aaa');
$sql="SELECT * FROM `ads` WHERE `name`='$u' AND `pass`='$p'";
mysqli_set_charset($conn,"utf8");
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){
    $arr=array('code'=>1);
    $json=json_encode($arr);
    setcookie('name1',$n);
    echo $json;
}else{
    $arr=array('code'=>0);
    $json=json_encode($arr);
    echo $json;
}
?>