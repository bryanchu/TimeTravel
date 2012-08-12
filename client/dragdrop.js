Page = (function() {
	var sender;
	function newData(data) {
		data = data.data;
		console.log(data);
		if (data && data.users) {
			// new Page.DataItem(data.name
		
			// var name;
			// var list = document.getElementById('list');
			// var newEl = document.createElement('a');
			// newEl.href = data.url;
			
			// var imgEl = document.createElement('img');
			// imgEl.src = "http://1.bp.blogspot.com/-ivx8sPkrN0E/T7oWeBCAwKI/AAAAAAAAAfw/aZoBDKIIB3o/s1600/File.png";
			
			// var fileInfo = document.createElement('p');
			// fileInfo.innerHTML = 'File Name: ' + data.name + '<br>' + 'File Size: ' + data.size + '<br>' + 'File Type: ' + data.fileType;
			
			// newEl.appendChild(imgEl);
			// newEl.appendChild(fileInfo);
			
			// list.appendChild(newEl);
		}
		else if (data && data.url) {
			new Page.DataItem(data.sender, data);
		}
		else {
			//user alerting crap
		}
	}

	function attachFilepicker(id) {
		filepicker.makeDropPane($('#' + id)[0], {
		dragEnter: function() {
			console.log('enter');
			$("#" + id).css({
				//circle expansion here
	
			});
		},
		dragLeave: function() {
			$("#" + id).css({
				//circle unexpansion here

			});
		},
		progress: function(percentage) {
			var loadingText = $("#" + id + ' .loadingText');
			loadingText.show();
			loadingText.text(percentage+ "%");
		},
		done: function(data) {
			var loadingText = $('#' + id + ' .loadingText');
			setTimeout(function () { loadingText.fadeOut(300); }, 500);
			socket.emit('broadcast', { sender: sender, name: data[0].data.filename, size: data[0].data.size, fileType: data[0].data.type, type: 'file', url: data[0].url });
		}
	});
	}
	
	function setName(self, e) {
		if (e.keyCode == 13) {
			name = $('#name').value;
			localStorage.setItem('__name', $('#name').val());
			// Send a join request to the server
			
			$('#maskInput').hide();
		}
	}
	
	function createUserTooltip(id) {
		// The userlist tooltip
		// This tooltip has to have keepAlive on as well, in order for it to work for the textfield tooltip...
		$('#' + id).tipTip({ defaultPosition: 'right', maxWidth: '250' }); 
		// The textfield tooltip
		
		$('#' + id).tipTip({ 
			defaultPosition: 'bottom', 
			activation: 'click', 
			keepAlive: true
		});
	}
	
	function createSendTextFileTooltip(field, event) {
		
	}
	
	return {
		sender: sender,
		createUserTooltip: createUserTooltip,
		attachFilepicker: attachFilepicker,
		setName: setName,
		init: function() {
			// var maskInput = document.createElement('div');
			// maskInput.id = 'maskInput';
			// maskInput.innerHTML = 'Welcome to your room! What\'s your name?<input id="name" placeholder="My name is..." onkeypress="Page.setName(this, event)"></input>';
			// document.body.appendChild(maskInput);
			
			filepicker.setKey('AjB_5ggM9QMO_uSoMgHNmz');
					
			// window.addEventListener("keypress", newData);
			// socket.on('response', newData);
			var status = document.getElementById('status');
			var drop   = document.getElementById('drop');
			var list   = document.getElementById('list');
			
			createUserTooltip();	
		}
	};
})();

window.addEventListener("load", Page.init);
