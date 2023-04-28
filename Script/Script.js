const items = [];


$(".add-button").click(function () {
    var input = $(".input__field").val();
    var this_ = this;

    // Shake
    if (input.length == 0) {
        $(this).removeClass("from-blue-500");
        $(this).removeClass("via-blue-600");
        $(this).removeClass("to-blue-700");
        $(this).removeClass("focus:ring-blue-300");
        $(this).removeClass("dark:focus:ring-blue-800");
        $(this).removeClass("shadow-blue-500/50");
        $(this).removeClass("dark:shadow-blue-800/80");
        console.log("blue removed");

        $(this).addClass("from-red-500");
        $(this).addClass("via-red-600");
        $(this).addClass("to-red-700");
        $(this).addClass("focus:ring-red-300");
        $(this).addClass("dark:focus:ring-red-800");
        $(this).addClass("shadow-red-500/50");
        $(this).addClass("dark:shadow-red-800/80");
        $(this).addClass("shake-button");
        console.log("red & shake added");

        setTimeout(function () {
            $(this_).removeClass("from-red-500");
            $(this_).removeClass("via-red-600");
            $(this_).removeClass("to-red-700");
            $(this_).removeClass("focus:ring-red-300");
            $(this_).removeClass("dark:focus:ring-red-800");
            $(this_).removeClass("shadow-red-500/50");
            $(this_).removeClass("dark:shadow-red-800/80");
            $(this_).removeClass("shake-button");
            console.log("red & shake removed");

            $(this_).addClass("from-blue-500");
            $(this_).addClass("via-blue-600");
            $(this_).addClass("to-blue-700");
            $(this_).addClass("focus:ring-blue-300");
            $(this_).addClass("dark:focus:ring-blue-800");
            $(this_).addClass("shadow-blue-500/50");
            $(this_).addClass("dark:shadow-blue-800/80");
            console.log("blue removed");
        }, 1000);
    } else {
        items.push(input);

        render();

        $(".input__field").val('');
    }
});

function render() {
    $('#list').html('');
    for (let i = 0; i < items.length; i++) {
        $('#list').append(`
        <div class="text-center text-gray-500 dark:text-gray-400 list-item">
            <p>${items[i]}</p>
            <button id="${i}" class="delete-button text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 text-right">Delete</button>
        </div>
        <br>
        `);
    }
}

$("#list").on('click', 'div > .delete-button', function(){
    if ($(this).get(0).id > -1) { 
        items.splice($(this).get(0).id, 1);
    }
    render();
});