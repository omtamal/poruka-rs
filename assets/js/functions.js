$( document ).ready(function() {

  changeColor();

});

function changeColor() {
	
	$('.tint-1').click(function() {
		$('.current').css('text-shadow','1px 1px 8px rgba(102,0,102,0.5), -1px -1px 8px rgba(102,0,102,0.5), 1px -1px 8px rgba(102,0,102,0.5), -1px 1px 8px rgba(102,0,102,0.5)');
		$('.btn + &:hover').css('text-shadow','1px 1px 8px rgba(102,0,102,0.5), -1px -1px 8px rgba(102,0,102,0.5), 1px -1px 8px rgba(102,0,102,0.5), -1px 1px 8px rgba(102,0,102,0.5)');
	});
}