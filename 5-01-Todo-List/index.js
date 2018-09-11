$(function() {
  var buttonComplete = $('<button></button>').addClass('mark-as-complete').text('Mark as Complete');
  var buttonDelete = $('<button></button>').addClass('delete').text('Delete');
  var todoTemplate = $('<div></div>').append(buttonComplete).append(buttonDelete);
  
  $('input.new-todo').keyup(function(e) {
    if (e.which === 13 ) {
      var newTodo = $(this).val();

      if (newTodo !== '') {
        
        $('.todos').append(todoTemplate.clone().addClass('todo').prepend(newTodo));
        $(this).val('');
      }
    }
  });

  $('.todos').on('click', '.todo > button.delete', function() {
    $(this).parent().remove();
  });

  $('.todos').on('click', '.todo > button.mark-as-complete', function() {
    $(this).parent().appendTo('.completed');
    $(this).remove();
  });

  $('.completed').on('click', '.todo > button.delete', function() {
    $(this).parent().remove();
  });
});