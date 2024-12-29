# 米游社/HoYoLAB-原神：获取基本数据

## 接口介绍

获取角色基本(初略)信息

### 要求

用户必须注册米游社/HoYoLAB，且开启了"在战绩页面是否展示角色详情"

![](https://img.nilou.moe/images/pic1.png)

## 使用方法

### 请求地址

`https://api.nilou.moe/v1/bbs/genshin/BasicInfo`

### 请求方法

|方法|是否允许|
|---|---|
|GET|√|
|POST|√|

### 参数

|参数名称|用途|备注|
|---|---|---|
|uid|游戏UID|POST请求中允许使用长整数/整数类型，一般为9位或10位|
|server|所在服务器|必须在`cn_gf01` `cn_qd01` `os_usa` `os_euro` `os_asia` `os_cht`中选择，否则服务器会报500错误|

### 附加HTTP请求头

|头名称|用途|备注|
|---|---|---|
|X-nilou-api-cookie|用户Cookie|通过当前用户的Cookie以获得完整数据|

### 请求案例

`GET` `https://api.nilou.moe/v1/bbs/genshin/BasicInfo?uid=888888888&server=os_asia`


`POST`
```json
curl -X 'POST' \
  'https://api.nilou.moe/v1/bbs/genshin/BasicInfo' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "uid": "888888888",
  "server": "os_asia"
}'
```

其中：UID`888888888`仅供示例，请更改为需要查询的UID

## 返回数据

米哈游的API返回数据都特别庞大，这里挑几个重点来讲：