function main() {
    itemChecked();
    itemDelete();
}
    function itemChecked() {
        $('.shopping-item-toggle').click(function () {
            $(this).closest('li','.shopping-item').toggleClass('shopping-item__checked'); }); 
        }

    function itemDelete() {
        $('.shopping-item-delete').click(function () {
           $(this).closest('li').remove() });
    }

$(document).ready(function () {
    $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault(); 
    let newItem = $('#shopping-list-entry').val(); console.log(newItem);
    $('ul').prepend(`<li><span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>\
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div></li>`);
    });
});

$(main);