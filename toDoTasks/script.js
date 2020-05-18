var countTask = 0;

$('.search-box .fa-plus-circle').click(function(){


    if($('#input-task').val() === "") {
        alert("please enter some task");
        return;
    }

    countTask++;
        var task = $('<div class="task"></div').text($('#input-task').val());
        var del = $('<i class="fas fa-trash"></i>').click(function(){
            var ev = $(this).parent();
            ev.fadeOut(function(){
                ev.remove();

                // To count numbers of task remaning
                countTask--;
               $('#count').text(countTask);
            });
        });
        var check = $('<i class="fas fa-check"></i>').click(function(){
            var ev = $(this).parent();
            ev.fadeOut(function(){
                $('.com').append(ev);
                ev.fadeIn();
            });
            $(this).remove();
            // To count numbers of task remaning
            countTask--;
            $('#count').text(countTask);
        });

        task.append(del, check);
        $('.notcom').append(task);
        $('#input-task').val("");

        // To count numbers of task remaning
        $('#count').text(countTask);

});


// clear all tasks
$('#clear-complete').click(function(){
    var tasks = $('.task');
    for(let i of tasks) {
        i.remove();
    }
    countTask = 0;
    $('#count').text(countTask);
})

// complete-all-tasks

// $('#complete-all-tasks').click(function(){
//     var tasks = $('.task');
//     for(let i of tasks) {
//             i.fadeOut(function(){
//                 $('.com').append(i);
//                 i.fadeIn();
//             });
//     }
//     countTask = 0;
//     $('#count').text(countTask);
// });



// for taking input by enter key 

$('#input-task').on("keyup", function(event){
    if(event.keyCode == 13 && $('#input-task').val() != "") {
        // alert("hey");

        countTask++;
        var task = $('<div class="task"></div').text($('#input-task').val());
        var del = $('<i class="fas fa-trash"></i>').click(function(){
            var ev = $(this).parent();
            ev.fadeOut(function(){
                ev.remove();

                // To count numbers of task remaning
                countTask--;
               $('#count').text(countTask);
            });
        });
        var check = $('<i class="fas fa-check"></i>').click(function(){
            var ev = $(this).parent();
            ev.fadeOut(function(){
                $('.com').append(ev);
                ev.fadeIn();
            });
            $(this).remove();
            // To count numbers of task remaning
            countTask--;
            $('#count').text(countTask);
        });

        task.append(del, check);
        $('.notcom').append(task);
        $('#input-task').val("");

        // To count numbers of task remaning
        $('#count').text(countTask);
    }
});


