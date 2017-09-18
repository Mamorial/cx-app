var fc = {};
//fc.post = 'http://location.zhijiasoft.com/';
//高德地图web服务请求域名   web服务key: e00e7ed74876f674fa2f01bf36f429c8
fc.post = 'http://restapi.amap.com/';
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
