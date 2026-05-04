// Hyperclass — GoKollab 커뮤니티 한글화
// Version: 1.0.0
// Translations: 50
// 적용 위치: Communities > Settings > Custom Code

(function() {
  var t = {
    "Login": "로그인",
    "Or, sign in with your email": "또는 이메일로 로그인",
    "Forgot password?": "비밀번호를 잊으셨나요?",
    "Login with secure code": "보안 코드로 로그인",
    "New user?": "새로운 사용자인가요?",
    "Sign up": "회원가입",
    "Sign Up": "회원가입",
    "Email": "이메일",
    "Password": "비밀번호",
    "Or, sign up with your email": "또는 이메일로 회원가입",
    "Full name": "이름",
    "Full Name": "이름",
    "Create Account": "계정 만들기",
    "Already have an account?": "이미 계정이 있으신가요?",
    "Sign in": "로그인",
    "Reset Password": "비밀번호 재설정",
    "Back to Login": "로그인으로 돌아가기",
    "Back to login": "로그인으로 돌아가기",
    "Send Reset Link": "재설정 링크 보내기",
    "Send link": "링크 보내기",
    "Enter your email": "이메일을 입력하세요",
    "Enter your email address": "이메일 주소를 입력하세요",
    "The password you picked": "비밀번호를 입력하세요",
    "Continue with Google": "Google 계정으로 계속하기",
    "Forgot Password": "비밀번호 재설정",
    "We will send you a link to reset your password": "비밀번호 재설정 링크를 보내드릴게요",
    "Verify Email": "이메일 인증",
    "Enter verification code": "인증 코드를 입력하세요",
    "Resend Code": "코드 재전송",
    "Resend code": "코드 재전송",
    "Verify": "인증하기",
    "A verification code has been sent to your email": "인증 코드가 이메일로 발송됐어요",
    "Confirm Password": "비밀번호 확인",
    "I agree to the": "동의합니다:",
    "Terms of Service": "서비스 이용약관",
    "Privacy Policy": "개인정보처리방침",
    "and": "및",
    "or": "또는",
    "Or": "또는",
    "Submit": "제출",
    "Continue": "계속하기",
    "Cancel": "취소",
    "Loading": "로딩 중",
    "Please wait": "잠시만 기다려주세요",
    "Error": "오류",
    "Success": "성공",
    "Invalid email or password": "이메일 또는 비밀번호가 올바르지 않아요",
    "Please enter a valid email": "올바른 이메일을 입력해주세요",
    "Password is required": "비밀번호를 입력해주세요",
    "Email is required": "이메일을 입력해주세요"
  };

  function translate() {
    var walker = document.createTreeWalker(
      document.body, NodeFilter.SHOW_TEXT, null, false
    );
    while (walker.nextNode()) {
      var node = walker.currentNode;
      var text = node.textContent.trim();
      if (t[text]) {
        node.textContent = node.textContent.replace(text, t[text]);
      }
    }
    document.querySelectorAll('div').forEach(function(el) {
      if (el.children.length === 0 && el.textContent.indexOf('8 characters') > -1) {
        el.textContent = '비밀번호는 8자 이상이며, 대소문자, 숫자, 특수문자(!$%)를 포함해야 해요.';
      }
    });
    document.querySelectorAll('.n-input__placeholder span').forEach(function(span) {
      var text = span.textContent.trim();
      if (t[text]) span.textContent = t[text];
    });
    document.querySelectorAll('input[placeholder]').forEach(function(input) {
      var ph = input.placeholder.trim();
      if (t[ph]) input.placeholder = t[ph];
    });
    document.querySelectorAll('.n-divider__title').forEach(function(el) {
      var text = el.textContent.trim();
      if (t[text]) el.textContent = t[text];
    });
  }

  function init() {
    translate();
    new MutationObserver(function() {
      clearTimeout(window._hcCT);
      window._hcCT = setTimeout(translate, 200);
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 300);
  }
})();
