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
