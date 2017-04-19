/// <reference path="typings/tsd.d.ts" />
/// <reference path="hello/country_select.js.ts" />
/// <reference path="hello/hello_typescript.js.ts" />"


$(() => {
    // For hello page
    var hello = new HelloTypeScript();
    hello.initial_event();
    hello.bind_add_button_event();

    // For country select page
    var country_select = new CountrySelect();
    country_select.initial_event();
    country_select.country_select_event();
    country_select.state_select_event();

});
