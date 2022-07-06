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
    alert("Handler for .submit() called: " + whyParticipate.join(", "));

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