let key = Math.round(Math.random() * 10000);

function signbtn() {
  let id = document.querySelector("#joinid").value;
  let password = document.querySelector("#joinpw").value;

  const obj = {
    id,
    password,
  };
  
  if (document.querySelector("#joinid").value == "" && document.querySelector("#joinpw").value == "") {
    alert("정보를 입력해주세요.");
  } else {
    localStorage.setItem(key, JSON.stringify(obj));
    alert("회원가입을 환영합니다.");
    location.reload();
  }
}

function login() {
  let id = document.querySelector("#idinput").value;
  let password = document.querySelector("#pwinput").value;

  const obj = {
    id,
    password,
  };
  console.log(JSON.parse(localStorage.getitem(key)))

  if (document.querySelector("#idinput").value == "" && document.querySelector("#pwinput").value == "") {
    
    alert("아이디를 입력해주세요!");
  } else if (obj.password == "") {
    alert("비밀번호를 입력해주세요!");
  }

  // 로그인 필터 사용
}
// if(obj==obj){}

function save() {
  let comment = document.querySelector("#comment").value;
  localStorage.setItem("comment", JSON.stringify(comment));
}
