// const dismiss = () => {
// 	console.log(this.className);
// 	$('.alert').alert('close');
// };

$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus');
});
