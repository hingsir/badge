### bagde 仿QQ未读提醒
> 拖动徽章可消除未读，拖动至初始位置则不消除。

#### 使用方法
```html
<script src="../index.js"></script>
<script>
    new Badge({
        container: '.msg-badge',
        count: 8,
        overflowCount: 99, // 超过此数字显示+号，默认99
        background: '#f50', // 背景色
        color: '#fff' // 前景色
    })
</script>
```

**扫一扫看[demo](http://hingsir.com/badge/samples/browser.html)**

![二维码](http://qr.liantu.com/api.php?w=256&m=10&bg=f7f7f7&text=hhttp://hingsir.com/badge/samples/browser.html)
