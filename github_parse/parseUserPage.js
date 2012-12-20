var links = $('.commits code a')
    .map(function(){
        return $(this).attr('href');
    }).get();

var changeSets = [];

function getNumber (changeSetPart) {
    var numberPattern = /[0-9]+/g;
    return $(changeSetPart).text().replace(',', '').match(numberPattern)[0];
}

$.each(links, function (index, value) {
    $('<p>').load(value + ' ' + '#toc .explain', function() {
        var $changeSet = $(this).find('strong');

        changeSets.push(
            {
                'changed': getNumber($changeSet[0]),
                'additions': getNumber($changeSet[1]),
                'deletions': getNumber($changeSet[2])
            }
        );
    });
});
