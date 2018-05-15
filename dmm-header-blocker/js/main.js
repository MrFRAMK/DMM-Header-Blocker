const header = document.getElementsByClassName('dmm-ntgnavi');
const headerAdult = document.getElementsByClassName('dmm-ntgnavi  adult');

// 削除
if (header != undefined) {
	$('.dmm-ntgnavi').hide();
} else {
	$('.dmm-ntgnavi  adult').hide();
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		append();
	}
});

// 再表示or再非表示
function append() {
	if (header != undefined) {
		if ($('.dmm-ntgnavi').css('display') == 'none') {
			$('.dmm-ntgnavi').show();
		} else {
			$('.dmm-ntgnavi').hide();
		}

	} else {
		if ($('.dmm-ntgnavi  adult').css('display') == 'none') {
			$('.dmm-ntgnavi  adult').show();
		} else {
			$('.dmm-ntgnavi  adult').hide();
		}
	}
}