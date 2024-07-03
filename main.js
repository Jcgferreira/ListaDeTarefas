$(document).ready(function(){
    $('#btn-open-menu').click(function(){
        $('#form-tarefa').show();
    })
    $('#todo-btn-cancelar').click(function(){
        $('#form-tarefa').hide();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const addNovaTarefa = $('#new-task').val();
        const addHora = $('#hour').val();
        const addDescricao = $('#description').val();

        const novoItem = $('<li></li>');
        $(`<div class="task"><h2>${addNovaTarefa}</h2></div>`).appendTo(novoItem);
        $(`<div class="time"><h2>${addHora}</h2></div>`).appendTo(novoItem);
        $(`<div class="description"><h3>${addDescricao}</h3></div>`).appendTo(novoItem);
        $(`<button class="finish-todo">
            <i class="fa-solid fa-check">OK</i>
            </button>`).appendTo(novoItem);
        $(`<button class="remove-todo">
            <i class="fa-solid fa-xmark">X</i>
            </button>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');

        $('#new-task').val('');
        $('#hour').val('');
        $('#description').val('');
        $('#new-task').focus();
    })

    $('ul').on('click', '.finish-todo', function() {
        $(this).closest('li').toggleClass('concluido');
    })

    $('ul').on('click', '.remove-todo', function(){
        $(this).closest('li').remove();
    })
})