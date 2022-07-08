const API_ENDPOINT = "https://n8pac5bb1j.execute-api.us-west-2.amazonaws.com/dev";
const API_PATH = "unsubscribe";

$("form").submit(function(event) {
    event.preventDefault();
    let reason = $("#inputReason").val();
    let searchParams = new URLSearchParams(window.location.search);
    let email_id = searchParams.get('id')
    $('#subscribe-btn').prop("disabled",true);
    $('.loader').css("opacity", 1);
    console.log('{"email_id": "' + email_id + '", "reason": "' + reason + '"}');
    $.ajax({
      url: API_ENDPOINT + "/" + API_PATH,
      method: "POST",
      data: '{"email_id": "' + email_id + '", "reason": "' + reason + '"}',
      dataType: "json",
    })
    .done(function (jqXHR) {
      window.location.href = "unsubscribed.html";
    })
    .fail(function (jqXHR) {
      $('#error-text').css("display", "block");
    })
    .always(function (jqXHR) {
      $('.loader').css("opacity", 0);
    });
});
