var fc = {};
//fc.post = 'http://location.zhijiasoft.com/';
//高德地图web服务请求域名   web服务key: e00e7ed74876f674fa2f01bf36f429c8
fc.post = 'http://restapi.amap.com/';
//调试 post
//fc.urlPost = 'http://172.10.10.130:8000/';
//线上 post
fc.urlPost = 'https://cxgy.zhijiasoft.com/';
//jQuery ajax
fc.ajax = function(url, param, type) {
	var url = fc.post + url;
	return $.ajax(url,param, type).then(function(data) {
		console.log(data.infocode);
		if(data.results || data.infocode ==  '10000') {
			return data;
		} else {
			mui.toast('服务错误');
		}
	}, function(err) {
		mui.toast('连接失败');
	})
}
fc.commonAjax = function(connectInfo, callback) {
	var callback = callback || '';
	var url = fc.urlPost + connectInfo.url || postUrl;
	var param = connectInfo.param || {};
	var type = connectInfo.type || 'get';
	var dataType = connectInfo.dataType || '';
	$.ajax({
		type:type,
		url:url,
		async:true,
		data: param,
		dataType: dataType,
		beforeSend: function() {},
		success: function(data) {
			if(data.results) {
				return callback(data.results);
			} else {
				if(data.message) {
					mui.toast(data.message);
					return;
				} else {
					return callback(JSON.parse(data));
				}
				
			}
		},
		error: function(data) {
			mui.toast('连接失败');
			return;
		}
	});
}
//用户的登录
fc.userInfo = {
	userId: localStorage.getItem('userId'),
	userName: localStorage.getItem('userName')
}

//预加载页面
fc.preLoadPagesTab = function() {
	var pageUrl = './pages/busHtmls/';
	mui.init({
		//预加载
		preloadPages: [{
			url: pageUrl + 'nowTakeBus.html',     //公交乘车
			id: 'nowTakeBus'
		},{
			url: pageUrl + 'busTake.html',    //公交查询
			id: 'busTake'
		},{
			url: pageUrl + 'busSelfOrder.html',  //公交定制
			id: 'busSelfOrder'
		},{
			url: pageUrl + 'tourBus.html',     // 旅游包车
			id: 'tourBus'
		},{
			url: pageUrl + 'makeSelfBus.html',    // 定制包车
			id: 'makeSelfBus'
		},{
			url: pageUrl + 'longDistanceTicket.html',    //长途售票
			id: 'longDistanceTicket'
		},{
			url: pageUrl + 'longDistanceSearch.html',    //长途查询
			id: 'longDistanceSearch'
		},{
			url: pageUrl + 'complaint.html',         //投诉
			id: 'complaint'
		}]
	})
	
}
//公交乘车
fc.preLoadPagesTake = function() {
	var pageUrl = './';
	mui.init({
		//预加载
		preloadPages: []
	})
	
}
//公交查询
fc.preLoadPagesSearch = function() {
	var pageUrl = './';
	mui.init({
		//预加载
		preloadPages: [{
			url: pageUrl + 'search.html',    //公交查询-搜索
			id: 'search'
		},{
			url: pageUrl + 'userCollList.html',  // 公交查询 - 收藏
			id: 'userCollList'
		},{
			url: pageUrl + 'noticeMsg.html',    //公交查询 - 公告
			id: 'noticeMsg'
		}]
	})
}
//公交定制
fc.preLoadPagesMake = function() {
	var pageUrl = './';
	mui.init({
		//预加载
		preloadPages: [{
			url: pageUrl + 'makeSelfOrder.html',  //公交定制 - 发起
			id: 'makeSelfOrder'
		},{
			url: pageUrl + 'busMakeInfo.html',  //公交定制 - 列表详情
			id: 'busMakeInfo'
		}]
	})
}
//打开页面  （截图）
fc.openWebView = function() {
	ws=plus.webview.currentWebview();
	// 截图
	bitmap1 = new plus.nativeObj.Bitmap();
	// 将webview内容绘制到Bitmap对象中
	ws.draw(bitmap1,function(){
		console.log('bitmap1绘制图片成功');
	},function(e){
		console.log('bitmap1绘制图片失败：'+JSON.stringify(e));
	});
	// 预创建新Webview窗口
	wn=plus.webview.create('nowTakeBus.html');
	wn.addEventListener('loaded', function(){
//		bitmap2 = new plus.nativeObj.Bitmap();
		bitmap2 = new plus.nativeObj.Bitmap();
		wn.draw(bitmap2, function(){
			console.log('bitmap2截图成功');
		}, function(e){
			console.log('bitmap2截图失败：'+JSON.stringify(e));
		});
	},false);
	setTimeout(function() {
		wn.show('pop-in', 300, function(){
					// 动画完成，销毁截图
					bitmap1.clear();
					bitmap2.clear();
				}, {capture:bitmap2,otherCapture:bitmap1});
	}, 500)
}
