---
title: JSON入门
date: 2018/01/28
tags: JSON
categories: web笔记
---

# 什么是JSON?
- JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
- JSON 是轻量级的文本数据交换格式
- JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。

# JSON语法
- 数据在名称/值对中
- 数据由<b>逗号</b>分隔
- 大括号保存<b>对象</b>
- 中括号保存<b>数组</b>

# 实例
```
var sites = [
    { "name":"baidu" , "url":"www.baidu.com" },
    { "name":"google" , "url":"www.google.com" },
    { "name":"微博" , "url":"www.weibo.com" }
];
```
访问方法：
`sites[0].name;`//返回baidu

修改数据：
sites[0].name="网速测试";

# JSON对象
1. 访问对象值：使用(.)或([])<br>
实例：
    ```json
    var myObj, x;
    myObj = { "name":"learn", "alexa":10000, "site":null };
    x = myObj.name; //或 x = myObj["name"];
    ```
2. 循环对象：使用for-in来循环对象的属性<br>
实例：
    ```json
    var myObj = { "name":"learn", "alexa":10000, "site":null };
    for (x in myObj) {
      document.getElementById("demo").innerHTML += x + "<br>";
    }
    ```
注意：使用中括号（[]）来访问属性的值
`document.getElementById("demo").innerHTML += myObj[x] + "<br>";`
3. 修改对象值：可以使用点号(.)或中括号([])来修改 JSON 对象的值
实例：
    ```json
    myObj.sites.site1 = "www.google.com";
    myObj.sites["site1"] = "www.google.com";
    ```
4. 删除对象属性： delete 关键字可删除 JSON 对象的属性
实例：
    ```json
    delete myObj.sites.site1;
    delete myObj.sites["site1"]
    ```
# 嵌套 JSON 对象
- 实例：
  ```json
  myObj = {
      "name":"learn",
      "alexa":10000,
      "sites": {
          "site1":"www.runoob.com",
          "site2":"m.runoob.com",
          "site3":"c.runoob.com"
      }
  }
  ```
- 同样使用点号(.)或者中括号([])来访问嵌套的 JSON 对象。
  ```json
  x = myObj.sites.site1;
  // 或者
  x = myObj.sites["site1"];
  ```
