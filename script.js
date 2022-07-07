$('.footer-year').text(new Date().getFullYear())

$("#inputOther").on("input", function(event) {
    let target = $(event.target);
    let select = false;
    if (target.val() != "") {
        select = true;
    }
    $(event.target).parent().find(".form-check-input").prop("checked", select).change();
});

$(".form-check-input").change(function(event) {
    let target = $(event.target).parent();
    selectOption($(event.target).prop("checked"), target);
})

$("form").submit(function(event) {
    event.preventDefault();
    let name = $("#inputName").val();
    let email = $("#inputEmail").val();
    var whyParticipate = [];
    $("#check5").val($("#inputOther").val());
    let checkBoxesChecked = [$("#check1").val()];
    $.each($("input[name='why']:checked"), function(){
        whyParticipate.push($(this).val());
    });
    console.log({
      "name": name,
      "email_address": email
    });
    $.ajax({
      url: "https://n8pac5bb1j.execute-api.us-west-2.amazonaws.com/dev/subscribe",
      method: "POST",
      data: '{"name": "' + name + '", "email_address": "' + email + '"}',
      dataType: "json",
      success: function(data, status) {
          if (status === "success") {
              console.log("Email successfully subscribed!")
          }
      }
    });
});

function selectOption(select, target) {
    if (target.hasClass("option")) {
      if (!select) {
        target.removeClass("active");
        target.find(".glyphicon").removeClass("glyphicon-check");
        target.find(".glyphicon").addClass("glyphicon-unchecked");
      } else {
        target.addClass("active");
        target.find(".glyphicon").removeClass("glyphicon-unchecked");
        target.find(".glyphicon").addClass("glyphicon-check")
      }
    }
}
