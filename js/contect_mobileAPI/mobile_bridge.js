//js调用Android方法：接收Android传递过来的数据，并做处理

		function Android_contetc(){
			window.WebViewJavascriptBridge.callHandler(
				'submitFromWeb', {
					'param': "JS成功接收到数据---"
				},
				function(responseData) {
					alert(responseData)
				}
			);
		}

        	//参数一：调用java中的方法   submitFromWeb是方法名，必须和Android中注册时候的方法名称保持一致
        	//参数二：返回给Android端的数据，可以为字符串，json等信息
        	//参数三：js接收到Android传递过来的数据之后的相应处理逻辑

        //JS注册事件监听
        function connectWebViewJavascriptBridge(callback) {
        	if (window.WebViewJavascriptBridge) {
        		callback(WebViewJavascriptBridge)
        	} else {
        		document.addEventListener(
        			'WebViewJavascriptBridgeReady',
        			function() {
        				callback(WebViewJavascriptBridge)
        			},
        			false
        		);
        	}
        }

        //注册回调函数，第一次连接时调用 初始化函数
        connectWebViewJavascriptBridge(function(bridge) {
        	//初始化
        	bridge.init(function(message, responseCallback) {
        		var data = {
        			'Javascript Responds': 'Wee!'
        		};
        		alert("jasdashjd");
        		responseCallback(data);
        	});


        	//Android调用js方法：functionInJs方法名称需要保持一致 ，并返回给Android通知

        	bridge.registerHandler("functionInJs", function(data, responseCallback) {
        		alert(data);
        		var data2 = document.getElementById("text1").value;
        		var responseData = "我是Android调用js方法返回的数据---" + data2;
        		responseCallback(responseData);
        	});
        })
