$(document).ready(() => {
    $(".form").submit(e => {
        e.preventDefault();
        let value = $("[name ='email']").val();
        value && validate(value, "on");
    })

    $(".dismiss").on({
        click: () => validate("", "off")
    })

    function validate(value, condition) {
        if(condition == "on") {
            $(".thanks").removeClass("d-none");
            $(".child-wrap").addClass("d-none");
            $(".your-email").text(value);
        }else {
            $(".thanks").addClass("d-none");
            $(".child-wrap").removeClass("d-none");
            $(".your-email").text("");
            $("[name ='email']").val("")
        }
    }
})