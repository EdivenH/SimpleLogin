$(function() {
  
  $("form").on({
    focus: focusOrBlur_input,
    blur: focusOrBlur_input,
    
    // function(){
    //   if($(this).attr("type") === "text"){
    //     if (!$(this).val()) {
    //       $("input+label").removeClass("userId");
    //     }
    //   }
    //   if($(this).attr("type") === "password"){
    //     if (!$(this).val()) {
    //       $("input+label").removeClass("password");
    //     }
    //   }
    // }
  }, "input");



    $("#btn_sign").click(function(event){
      event.preventDefault(); 
      window.location.href = "./login/sign-up.html"
    });
});

function focusOrBlur_input(event){
  if(event.type === "focusin"){
    if($(this).is("[type='text']")){
      $("input+label").addClass("userId");
    }
    if($(this).is(".origin_password")){
      $("input+label").addClass("password");
    }
    if($(this).is(".origin_newpassword")){
      $(".origin_newpassword+label").addClass("newpassword");
    }
  }
  if(event.type === "focusout"){
    if($(this).attr("type") === "text"){
      if (!$(this).val()) {
        $("input+label").removeClass("userId");
      }
    }
    if($(this).is(".origin_password")){
      if (!$(this).val()) {
        $(".origin_password + label").removeClass("password");
      }
    }
    if($(this).is(".origin_newpassword")){
      if (!$(this).val()) {
        $(".origin_newpassword + label").removeClass("newpassword");
      }
    }
  }
};
