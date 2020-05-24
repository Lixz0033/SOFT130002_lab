## Lab08 设计文档

##### 轮播图的实现

用index记录当前的图片序号，图片序号取余（5张就取5的余数）值为index

切换上一张就 index= (index + 4) % 5;

切换下一张就 index= (index + 1) % 5；

改变  left = index * -600 + “px”   实现图片切换

右下角红色的数值变化是通过index寻找id实现的，通过给予class=“on”变红

2秒间隔切换是通过setInterval()实现的，直接调用切换下一张里的方法

点击数值按钮切换是通过 getAttribute()得到id再改变index实现的

##### 表格内容修改

设计原理就是点击td时，添加input标签并得到焦点，失去焦点时把内容赋给td并移除input










