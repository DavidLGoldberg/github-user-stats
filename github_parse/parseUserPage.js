var links = [];
$('.commits code a').each(function() {
    links.push($(this).attr('href'));
});

var changeSets = [];

var numberPattern = /[0-9]+/g;

$.each(links, function (index, value) {
    $('<p>').load(value + ' ' + '#toc .explain', function() {
        var $changeSet = $(this).find('strong');

        changeSets.push(
            {
                'changed': $($changeSet[0]).text().match(numberPattern)[0],
                'additions': $($changeSet[1]).text().match(numberPattern)[0],
                'deletions': $($changeSet[2]).text().match(numberPattern)[0]
            }
        );
    });
});
