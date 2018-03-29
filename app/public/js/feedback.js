$( document ).ready(function() {
    $(function () {
        $.get('api', updateFeedback);
    
        $('.feedback-form').submit(function(e) {
            e.preventDefault();
            $.post('api', {
                name: $('#form-name').val(),
                title: $('#form-title').val(),
                message: $('#form-message').val()
            }, updateFeedback);
        });

        $('.feedback-messages').on('click', function(e) {
            if (e.target.className == 'remove-item') {
                $.ajax({
                    url: 'api/' + e.target.id,
                    type: 'DELETE',
                    success: updateFeedback
                });
                console.log(e.target.className);
                console.log(e.target.id);
            }
        });
    
        function updateFeedback(data) {
            var output = '';
            $.each(data, function(key, item) {
                output += ' <div class="feedback-item">';
                output += '     <div class="feedback-head">';
                output += '         <h4>' + item.title + '</h4>';
                output += '         <div class="feedback-message">' + item.message + '</div>';
                output += '     </div>';
                output += '     <p class="message-text"><b>-' + item.name + '</b></p>';
                output += '     <button type="submit" class="remove-item" id="' + key + '">Remove</button>';
                output += '     <hr>';
                output += ' </div>';
            });
            $('.feedback-messages').html(output); 
        }
    });
});

