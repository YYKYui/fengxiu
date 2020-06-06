  //rem为html的字体大小 通过改变html的字体大小达到适配的效果
    remChange();
    //监听屏幕改变resize事件 触发remChange方法
    window.addEventListener("resize", remChange)
    function remChange() {
      const html = document.querySelector("html");
      const width = html.getBoundingClientRect().width; //拿到适配器的宽度值
       //若屏幕宽为375px则1rem = 100px 若不是则按比例增大或减小
      html.style.fontSize = width / 3.75 + 'px';
    }


    //页面加载后执行
      var mySwiper = new Swiper('.swiper-container', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        //分页器小圆点
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 1000, //自动轮播时间
          disableOnInteraction: true  //用户操作后不轮播
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
