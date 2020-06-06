##　lab 10


##### exercise7
exercise7-pdo中 先搜索Artists中所有内容并按LastName顺序排序再将ArtistID和LastName以“ArtistID-LastName”的格式打印；
exercise7-mysqli中 先搜索Genres中所有内容并按GenreName顺序排序再将GenreName作为select的option，每个GenreName所在的option的value为GenreID

![exercise7-pdo.jpg](https://i.loli.net/2020/06/06/4oLJMRhQXq3iVZT.jpg)

![exercise7-mysqli.jpg](https://i.loli.net/2020/06/06/8LTVYxAWUFwOmyf.jpg)

##### exercise8

outputArtists()负责从数据库获得30个Artists信息（按LastName顺序第0~29项打印列表并实现点击某一个LastName就记录一个ArtistID

outputPaintings()主要负责根据ArtistID从数据库获得所需的打印图片及内容

由outputSinglePainting()负责实现单个图片及其相关内容的打印




![exercise8.jpg](https://i.loli.net/2020/06/06/KWSHnRPaTUoYmjd.jpg)

##### exercise9



可以使用三种方式来执行SQL语句，分别是 exec()方法，query方法，以及预处理语句prepare()和execute()方法：

exec()方法返回执行SQL 语句后受影响的行数

query()方法用于返回执行查询后的结果集

PreparedStatement通过prepare()方法做查询准备工作，然后通过execute()方法执行查询，并且还可以通过bindParam()方法来绑定参数给execute()方法



使用PreparedStatement好处：

PreparedStatement预编译SQL语句，性能更好，执行更快；

PreparedStatement常用于执行多条结构相同、仅值不同的SQL 语句，可使代码更简捷；

PreparedStatement可以防止SQL 注入，安全性更好。



![exercise9.jpg](https://i.loli.net/2020/06/06/AEkJ5wTmBUNpHcd.jpg)