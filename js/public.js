//首页 选择id
$(function(){
	$('.Form-index-id-select').click(function(){
		$('.Form-index-id-select ul').slideToggle();
	})
	$('.Form-index-id-select-list li').click(function(){
		var Text = $(this).html();
		$('#Form-index-id-select-m').html(Text);
		$(this).addClass('Form-index-id-select-list-m').siblings().removeClass('Form-index-id-select-list-m');
	})
})












