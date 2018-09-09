var account;
var password;

function setupRegisterForm() {
  $('#register-form input[name="account"]').blur(function() {
    var accountVal = $(this).val();
    var hasNumber = /[0-9]/.test(accountVal);
    var hasLowercase = /[a-z]/.test(accountVal);
    var hasUppercase = /[A-Z]/.test(accountVal);
    if (hasNumber && hasLowercase && hasUppercase) {
      $('#register-form .message').text('');
    } else {
      $(this).focus();
      $('#register-form .message').text('帳號必須包含大小寫英文字母和數字');
    }
  });

  $('#register-form').submit(function(e) {
    var accountVal = $('#register-form input[name="account"]').val();
    var hasNumber = /[0-9]/.test(accountVal);
    var hasLowercase = /[a-z]/.test(accountVal);
    var hasUppercase = /[A-Z]/.test(accountVal);
    if (hasNumber && hasLowercase && hasUppercase) {
      $('#register-form .message').text('');
      account = accountVal;
      password = $('#register-form input[name="password"]').val();;
      window.alert('註冊成功');
    } else {
      $(this).focus();
      $('#register-form .message').text('帳號必須包含大小寫英文字母和數字');
    }
  });
}

function setupMemberInfoForm() {
  $('#member-info-form input[name="same-address"]').change(function() {
    if ($(this).prop('checked')) {
      $('#member-info-form input[name="correspondance-address"]').val($('#member-info-form input[name="permanent-address"]').val());
      $('#member-info-form input[name="correspondance-address"]').prop('disabled', true);
    } else {
      $('#member-info-form input[name="correspondance-address"]').prop('disabled', false);
    }
  });

  $('#member-info-form input[name="permanent-address"]').keypress(function() {
    $('#member-info-form input[name="same-address"]').prop('checked', false);
    $('#member-info-form input[name="correspondance-address"]').prop('disabled', false);
  });
}

function setupLoginForm() {
  $('#login-form').keyup(function(e) {
    if (e.which === 13) {
      if ($('#login-form input[name="account"]').val() !== account) {
        window.alert('您尚未註冊');
      } else if ($('#login-form input[name="password"]').val() !== password) {
        window.alert('密碼錯誤');
      } else {
        window.alert('登入成功');
      }
    }
  });
}

function setupChangePasswordForm() {
  $('#change-password-form input[name="comfirm-new-password"]').keyup(function(e) {
    if ($(this).val() !== $('#change-password-form input[name="new-password"]').val()) {
      $('#change-password-form .message').text('兩次輸入密碼不相同');
    } else {
      $('#change-password-form .message').text('');
    }
  });

  $('#change-password-form').submit(function(e) {
    if ($('#change-password-form input[name="old-password"]').val() === password) {
      window.alert('更換密碼成功');
    } else {
      window.alert('舊密碼不符');
    }
  });
}

function setupTradeForm() {
  $('#trade-form input.card-number').keyup(function(e) {
    if ($(this).val().length === 4) {
      $(this).nextAll('input').first().focus();
    }
  });
}

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
  })

  setupRegisterForm();
  setupMemberInfoForm();
  setupLoginForm();
  setupChangePasswordForm();
  setupTradeForm();
});
