
// initializers
$(document).ready(function () {
    setTimeout(function () {

        if ($('.ui.dropdown').length > 0) {
            $('.ui.dropdown').dropdown();
        }

        if ($('.leftMenu').length > 0) {
            $(document.body).on('click', '.leftMenu', function () {
                $('.leftMenuMenu.sidebar')
                    .sidebar('setting', 'transition', 'overlay')
                    .sidebar('toggle');

            })
        }


    }, 1000)
})



// Examples
$(document).ready(function () {

    // buscador del menu princiapl navbar
    $('#findMenu').search({
        apiSettings: {

            url: 'https://api.github.com/search/repositories?q={query}'
        },
        fields: {
            results: 'items',
            title: 'name',
            url: 'html_url'
        },
        minCharacters: 3
    })
    
    $('#findLeftMenu').search({
        apiSettings: {

            url: 'https://api.github.com/search/repositories?q={query}'
        },
        fields: {
            results: 'items',
            title: 'name',
            url: 'html_url'
        },
        minCharacters: 3
    })


})