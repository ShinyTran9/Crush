const textConfig = {
  text1: "He luu Dương!!",
  text2: "Tui có điều này muốn hỏi Dương mà nhớ phải trả lời thật lòng nhaaa.",
  text3: "Bữa giờ không thấy tui online Dương có nhớ tui            ^..^",
  text4: "Nếu Dương ko trả lời mà thoát ra tức là nghiện mà còn ngại haahaahaaa :v",
  text5: "Ông mơ à???",
  text6: "Nhớ ơi là nhớ luôn <3",
  text7: "Hôhohoooo, Thiệt hảaaaaa :vvvv",
  text8: "Gửi cho tui liền haaaa <3",
  text9: "Vì ông đẹp trai ahihihihihihihhihihihihihihihihihihihihihihihi.................dễ thương nữa...l",
  text10: "Tui biết mà ^^ để tui tải game lại chơi với bà nha :))",
  text11:
    "Tối nay tui lấy xe chở bà đi hết cái map Sanhok oke hông :v Còn giờ thì chờ gì nữa mà ko inbox cho tui đi nàooo",
  text12: "Okii lunn <3",
  text13: "Thiệt là hông nhóooooo luônnnn :(",
  text14: "Trời đất ơiiiiii !!",
  text15: "Ohmmm, không nhớ :)",
  text16: "Biết thế méo hỏi, huhuhu..T.T",
  text17: "Bo Xì :)",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyyyyyyyyyyyy'>",
      background: '#fff url("img/input-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/messages/t/100041404263636";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
$(document).ready(function () {  
  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text15;
    var a = Array.from(text);
    var textVal = $("#txtRe").val() ? $("#txtRe").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtRe").val("");
          n = "";
          break;
        }
      }
    }  
 
   $("#txtRe").val(n);
  }
 // show popup
 $("#kk").click(function () {
  var audio = new Audio("sound/het.mp3");
  audio.play();
  Swal.fire({
    title: textConfig.text14,
    html: true,
    width: 900,
    padding: "3em",
    html: "<input type='text' class='form-control' id='txtRe'  placeholder='Không nhớ chút nào luônnn :(('>",
    background: '#fff url("img/input-bg.jpg")',
    backdrop: `
                  rgba(0,0,456,0.4)
                  url("img/khoc.gif")
                  left top 
                  no-repeat
                `,
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonColor: "#fe8a71",
    cancelButtonColor: "#f6cd61",
    confirmButtonText: textConfig.text13,
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        width: 900,
        confirmButtonText: textConfig.text17,
        background: '#fff url("img/iput-bg.jpg")',
        imageUrl: "img/meokhoc.jpg",
        imageWidth: 500,
        imageHeight: 500,
        text: textConfig.text16,
        confirmButtonColor: "#83d0c9",
        onClose: () => {
          window.location = "https://www.youtube.com/watch?v=W8iBszF6E5g";
        },
      });
    }
  });

  $("#txtRe").focus(function () {
    var handleWriteText = setInterval(function () {
      textGenerate();
    }, 10);
    $("#txtRe").blur(function () {
      clearInterval(handleWriteText);
    });
  });
});
});
