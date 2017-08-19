/*
 * navigationBar
 * */
mui.init({
//	statusBarBackground: '#ccc'

});
var _self;
mui.plusReady(function() {
	//绘制顶部图标
	
	_self = plus.webview.currentWebview();
	var titleView = _self.getNavigationbar();
	if(!titleView) {
		titleView = plus.webview.getLaunchWebview().getNavigationbar();
	}

	titleView.drawRect("#5b85aa", {
		top: "43px",
		height: "1px",
		left: "0px"
	}); //绘制底部边线

//	//开启回弹
//	_self.setStyle({
//		bounce: "vertical",
//		bounceBackground: "#efeff4"
//	});

});

//绑定点击