$(document).ready(function(){
	
	var windowWidth = $( window ).width();
	
	function add3Dots(string, limit){
		var dots = " [...] ";
		if(string.length > limit){
			string = string.substring(0,limit) + dots;
		}
		return string;
	}
	
	$('.pasttalks .entry p, .upcomingtalks .entry p:not(".overview")').each(function(){
		var shortened = add3Dots($(this).text(), 200);
		$(this).text(shortened);
	})
	
	if($('.upcomingtalkinfo').length){
		$('.singlepost article.post.nextsem').not(":first").removeClass('nextsem');
	}
	
	/** TEXT SELECTION FUNCTION **/
	function selectText(node) {
		node = document.getElementById(node);
		if (document.body.createTextRange) {
			const range = document.body.createTextRange();
			range.moveToElementText(node);
			range.select();
		} else if (window.getSelection) {
			const selection = window.getSelection();
			const range = document.createRange();
			range.selectNodeContents(node);
			selection.removeAllRanges();
			selection.addRange(range);
		} else {
			console.warn("Could not select text in node: Unsupported browser.");
		}
	}
	/*
	const clickable = document.querySelector('.selectable');
	clickable.addEventListener('click', () => selectText('target'));
	*/
	/** SELECT EMAIL-ADRRESS ON HOVER **/
	$(".selectable").mouseover(function(){
		selectText('target')
	});
	

	/** TWITTER FEED **/
	var configProfile = {
		"profile": {"screenName": 'dsdsdnl'},
		"domId": 'tweets',
		"maxTweets": 3,
		"enableLinks": true, 
		"showUser": false,
		"showTime": true,
		"dateFunction": dateFormatter,
		"showImages": true,
		"lang": 'en'
	};
	twitterFetcher.fetch(configProfile);
	
	function dateFormatter(date) {
		return date.toDateString().split(' ').slice(1).join(' ');
		// var date = moment().format('MMM DD, YYYY');
		// return date
	}
	
	
	/*
	$('#tweets').tweetie({
		"url": "https://tweetie.now.sh/api/",
		"type": "timeline",
		"template": "<article class='post'><div class='date'>{{tweet.created_at}}</div><div class='tweet'><p>{{tweet.text}}</p></div></article>",
		"dateFormat": "%b %d, %Y",
		"params": {
			"count": 5,
			"screen_name": "@dsdsdnl",
			"exclude_replies": true
		}
		//"apiPath" : 'api/tweet.php'
	});
	
	
	$('.subscribe input').on('input', function() {
		var mailto = "mailto:dsdsd-list-subscribe@cwi.nl?subject=dsdsd%20newsletter&body=Please%20subscribe%20my%20email%20XXXXXXXXXX%20to%20the%20newsletter%20of%20dsdsd.";
		var inputVal = $('.subscribe input').val();
		var mailtoUpdate = mailto.replace("XXXXXXXXXX", inputVal);
		$('.subscribe a').attr('href', mailtoUpdate);
	});
	*/
	
});