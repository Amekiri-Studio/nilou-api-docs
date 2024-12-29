<template><div><h1 id="米游社-hoyolab-原神-获取基本数据" tabindex="-1"><a class="header-anchor" href="#米游社-hoyolab-原神-获取基本数据"><span>米游社/HoYoLAB-原神：获取基本数据</span></a></h1>
<h2 id="接口介绍" tabindex="-1"><a class="header-anchor" href="#接口介绍"><span>接口介绍</span></a></h2>
<p>获取角色基本(初略)信息</p>
<h3 id="要求" tabindex="-1"><a class="header-anchor" href="#要求"><span>要求</span></a></h3>
<p>用户必须注册米游社/HoYoLAB，且开启了&quot;在战绩页面是否展示角色详情&quot;</p>
<p><img src="https://img.nilou.moe/images/pic1.png" alt=""></p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h3 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址"><span>请求地址</span></a></h3>
<p><code v-pre>https://api.nilou.moe/v1/bbs/genshin/BasicInfo</code></p>
<h3 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法"><span>请求方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>是否允许</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>√</td>
</tr>
<tr>
<td>POST</td>
<td>√</td>
</tr>
</tbody>
</table>
<h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>用途</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>uid</td>
<td>游戏UID</td>
<td>POST请求中允许使用长整数/整数类型，一般为9位或10位</td>
</tr>
<tr>
<td>server</td>
<td>所在服务器</td>
<td>必须在<code v-pre>cn_gf01</code> <code v-pre>cn_qd01</code> <code v-pre>os_usa</code> <code v-pre>os_euro</code> <code v-pre>os_asia</code> <code v-pre>os_cht</code>中选择，否则服务器会报500错误</td>
</tr>
</tbody>
</table>
<h3 id="附加http请求头" tabindex="-1"><a class="header-anchor" href="#附加http请求头"><span>附加HTTP请求头</span></a></h3>
<table>
<thead>
<tr>
<th>头名称</th>
<th>用途</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>X-nilou-api-cookie</td>
<td>用户Cookie</td>
<td>通过当前用户的Cookie以获得完整数据</td>
</tr>
</tbody>
</table>
<h3 id="请求案例" tabindex="-1"><a class="header-anchor" href="#请求案例"><span>请求案例</span></a></h3>
<p><code v-pre>GET</code> <code v-pre>https://api.nilou.moe/v1/bbs/genshin/BasicInfo?uid=888888888&amp;server=os_asia</code></p>
<p><code v-pre>POST</code></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">curl -X 'POST' \</span>
<span class="line">  'https<span class="token operator">:</span><span class="token comment">//api.nilou.moe/v1/bbs/genshin/BasicInfo' \</span></span>
<span class="line">  -H 'accept<span class="token operator">:</span> application/json' \</span>
<span class="line">  -H 'Content-Type<span class="token operator">:</span> application/json' \</span>
<span class="line">  -d '<span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"uid"</span><span class="token operator">:</span> <span class="token string">"888888888"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"server"</span><span class="token operator">:</span> <span class="token string">"os_asia"</span></span>
<span class="line"><span class="token punctuation">}</span>'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：UID<code v-pre>888888888</code>仅供示例，请更改为需要查询的UID</p>
<h2 id="返回数据" tabindex="-1"><a class="header-anchor" href="#返回数据"><span>返回数据</span></a></h2>
<p>米哈游的API返回数据都特别庞大，这里挑几个重点来讲：</p>
</div></template>


