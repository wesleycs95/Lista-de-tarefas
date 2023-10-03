$(document).ready(function() {
    function adicionarItem() {
        const entradaDeDados = $('#entradaTexto').val();
        const novoItem = $('<li>').text(entradaDeDados);
        $('#listaTarefas').append(novoItem);
        $('#entradaTexto').val('');
    }

    function zerarLista() {
        $('#listaTarefas').empty();
    }

    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('risco-no-meio-do-texto');
    });

    $(document).ready(function() {
        $('form').on('submit', function(e) {
            e.preventDefault();
            adicionarItem();
        });

        $('#botaoCancelar').on('click', function() {
            zerarLista();
        });
    });
});
