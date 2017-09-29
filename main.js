!function(){
	var set1 = [
		"Chciałbym powiedzieć moim fanom, że ",
		"Praca sprawia, że ",
		"Pierdolę takie życie, bo ",
		"Chuj wam w papę, bo ",
		"Wciskam chuja gdzie popadnie i ",
		"Ojebałbym bronksa i ",
		"Jak to jest, że ",
		"Zastanawia mnie, czemu ",
		"Wpierdalam kepsy z Amrita, ale "
	];

	var set2 = [
		"mam najlepsze pomysły ",
		"idzie ochujać ",
		"'ding dong nie pojedziesz tą windą' ",
		"kocham ciasne szparagi ",
		"pozdrawiam największych fanów ",
		"długość snu rośnie wprost proporcjonalnie ",
		"Gang ST00LEYA się rozrasta ",
		"brudasy i tak nie będą Polakami "
	];

	var set3 = [
		"będąc na kacu.",
		"kiedy jest gówno na stole.",
		"jak lecę w melo.",
		"bo Emil jest cwelem.",
		"pykając se w LoL'a.",
		"wpierdalając kebaba.",
		"nagrywając snapa."
	];

	const placeholder = document.getElementById('placeholder'),
		  button	  = document.getElementById('generator'),
		  sets 		  = [set1, set2, set3],
		  tweetThis   = document.getElementById('tweetThis'),
		  toFb		  = document.getElementById('toFb');

		  function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
	const generatePhrase = function(el) {
		var fullPhrase = [];
		sets.forEach(function(el, index){
			fullPhrase.push(el[Math.floor(Math.random() * el.length)])
		});
		el.innerHTML = concatenate(fullPhrase);
		placeholder.classList.add('active');
	}

	generator.addEventListener('click', function(e){
		e.preventDefault();
		placeholder.classList.remove('active');
		setTimeout(function() {
			generatePhrase(placeholder);
		}, 150)
	}, false);

	concatenate = function(arr){
		return arr.join('');
	};


	tweetThis.addEventListener('click', function(){
		openURL('https://twitter.com/intent/tweet?hashtags=fifi&text=' + encodeURIComponent(placeholder.innerHTML));
	});
	toFb.addEventListener('click', function(){
		openURL('https://www.facebook.com/sharer/sharer.php?u=fifigen.pl&title=Fifi&quote=' + encodeURIComponent(placeholder.innerHTML));
	});
}();