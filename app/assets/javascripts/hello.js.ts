/// <reference path="typings/tsd.d.ts" />

class HelloTypeScript {
    initial_event() {
      $('#hello').text("Welcome in TypeScript");
    }

    bind_add_button_event() {
      $('#add').click(function() {
        $('#hello').text("Welcome in TypeScript Again....click again.....");
      })
    }
}

$(() => {
    var hello = new HelloTypeScript();
    hello.initial_event();
    hello.bind_add_button_event()
});
