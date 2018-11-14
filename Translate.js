

$(document).ready(function () {
	// console.clear();

	$("#gt-swap").html("<i class='material-icons'>swap_horiz</i>");
	$("#gt-swap").attr("id", 'iii').appendTo("#gt-langs")[0].classList = ['shown'];
	$(".goog-flat-menu-button-dropdown").parent().html("<i class='material-icons'>expand_more</i>");

	$("#gt-clear").addClass('gt-diff').attr("id", '').html("<i class='material-icons'>clear</i>");
	$("#t-served-community-button").html("<i class='material-icons'>check</i>").children().css("color", '#4caf50').css("font-weight", "bold");


	$(".jfk-button-standard.goog-inline-block").on("DOMSubtreeModified", function () {
		if (this.innerHTML.split("-").length > 1) {
			this.innerHTML = this.innerHTML.split("-")[0];
		}
	});

	resize();

	setInterval(resize, 500);

	$("<img>")
	.attr("src", 'https://stannl.github.io/gtranslate_logo_transp.png')
	.attr("id", 'logo_img')
	.prependTo("body");

	$("#gt-langs, #gt-src-p, #gt-res-p, #gt-langs *, textarea, .material-icons, #gt-res-data, #gt-res-data *").addClass("white")
});


function resize(){
	$("*").attr("data-tooltip", '');

	el = $('#gt-lang-tgt')[0];
	rct = el.getBoundingClientRect();
	a = (innerWidth*3/4) - (rct.left + (rct.width-16)/2);
	$(el).css("left", (+$(el).css("left").split("px")[0] + Math.round(a)) + 'px');
	
	el = $("#gt-lang-src")[0];
	
	rct = el.getBoundingClientRect();
	a = (innerWidth/4) - (rct.left + (rct.width-16)/2);
	$(el).css("left", (+$(el).css("left").split("px")[0] + Math.round(a)) + 'px');
	$("#gt-langs, #gt-src-p, #gt-res-p, #gt-langs *, textarea, .material-icons, #gt-res-data, #gt-res-data *").addClass("white")
}
