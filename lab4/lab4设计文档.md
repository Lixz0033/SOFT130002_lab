LAB 4 设计文档
======

### 主页截图

如下：

![主页截图](https://github.com/Lixz0033/SOFT130002_lab/tree/master/lab4/images/indexPrintScreen.png)

![截图备份](D:\lab\SOFT130002_lab\lab4\images\indexPrintScreen.png)

(lab4的images文件夹里也有截图；为了把导航栏和页尾全部显示出来，截图时有一定比例放缩，结果截图里头图只显示了上面一部分)

---------------------

### 布局介绍

其实跟助教给的lab4差不多(bootstrap太长，真的看不下去...)，额外多了侧边栏和头图下方的六张图片,然后利用bootstrap把较多部分原生css删了。

六张图片的摆放是用两个class=row的div排布，每张图片用一个div做容器截取一部分（截取了缩放后的大部分，底下有小部分没了；images文件夹的图其原图是middle里的）；侧边栏用position：fix固定在屏幕右侧。



