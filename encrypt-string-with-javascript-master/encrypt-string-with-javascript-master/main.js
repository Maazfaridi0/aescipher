function attachEncryptForm(){
  $("#encrypt-set").on("submit", function(e){
    e.preventDefault();

    var stringToEncrypt = $("#encrypt-plain-string").val();
    var password = $("#encrypt-password").val();

    if (stringToEncrypt.length && password.length) {
      var encryptedResult = CryptoJS.AES.encrypt(stringToEncrypt, password);
      var encryptedString = encryptedResult.toString();

      $("#encrypted-result").text(encryptedString);
      $(".encryption-result-section").addClass("is-primary");
    }
  });
}

function attachDecryptForm(){
  $("#decrypt-set").on("submit", function(e){
    e.preventDefault();

    var stringToDecrypt = $("#decrypt-plain-string").val();
    var password = $("#decrypt-password").val();

    if (stringToDecrypt.length && password.length) {
      var decryptedResult = CryptoJS.AES.decrypt(stringToDecrypt, password);
      var decryptedString = decryptedResult.toString(CryptoJS.enc.Utf8);

      $("#decrypted-result").text(decryptedString);
      $(".decryption-result-section").addClass("is-info");
    }
  });
}

function attachClearForm(){
  $(".clear-form").on("click", function(e){
    e.stopImmediatePropagation();

    var form = $(this).parent().parent().parent();
    $(form).find(".input-string").val("");
    $(form).parent().find(".result-section").text("");

    $(form).parent().find(".notification").removeClass("is-primary");
    $(form).parent().find(".notification").removeClass("is-info")
  });
}

$(document).ready(function(e){
  attachEncryptForm();
  attachDecryptForm();
  attachClearForm();
});
