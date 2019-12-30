var name = '';
var btn = document.getElementById('btn');

function welcomeGame() {
  swal.fire({ // 遊戲前輸入名字
    imageUrl: `img/name.jpg`,
    imageHeight: 300,
    imageAlt: `Oops!~image is broken!`,
    title: `河神過五關`,
    text: `請先輸入闖關暱稱`,
    input: `text`,
    inputValue:`聰明勝過神`,
    confirmButtonText: `確定`,
    cancelButtonText: `懶得取`,
    showCancelButton: true,
    allowOutsideClick: false
  }).then((ans) => {
    if (ans.dismiss === 'cancel') { //不輸入名字，使用noName
      name = '聰明勝過神';
      swal.fire({
        imageUrl: `img/lazyname.jpg`,
        imageHeight: 300,
        imageAlt: `Oops!~image is broken!`,
        title: `懶得取名？`,
        text: `那就稱你為${name}吧～`,
        confirmButtonText: `開始遊戲`,
        cancelButtonText: `反悔自己取`,
        showCancelButton: true,
        allowOutsideClick: false
      }).then((ans) => { //再次確認是否更名
        if (ans.dismiss === 'cancel') { //更名重整頁面
          location.reload();
        } else { //不更名進入遊戲
          gameOn();
        }
      });
    } else { //自己輸入，抓value
      name = ans.value;
      swal.fire({
        imageUrl: `img/nameyourself.jpg`,
        imageHeight: 300,
        imageAlt: `Oops!~image is broken!`,
        title: `勇士${name}你好！`,
        text:`名字確定了嗎？`,
        confirmButtonText: `開始遊戲`,
        cancelButtonText: `重新命名`,
        showCancelButton: true,
        allowOutsideClick: false
      }).then((ans) => { //再次確認是否更名
        if (ans.dismiss === 'cancel') { //更名重整頁面
          location.reload();
        } else { //不更名進入遊戲
          gameOn();
        }
      });
    };
  });
}

function gameOn() { //開始遊戲
  swal.fire({ //遊戲前言，是否準備好開始
    imageUrl: `img/mysterious.jpg`,
    imageHeight: 300,
    imageAlt: `Oops!~image is broken!`,
    title: `歡迎來到神秘河神叢林`,
    text: `這裡有五個不同的河，各住著不同神力、個性的河神，只要選對丟進河的物品就能帶著滿滿的寶藏回家喔！`,
    confirmButtonText: `開始闖關`,
    cancelButtonText: `先緩緩`,
    showCancelButton: true,
    allowOutsideClick: false
  }).then((ans) => {
    if (ans.dismiss === 'cancel') { //還沒準備好，遊戲跳出
      swal.fire({
        imageUrl: `img/byebye.jpg`,
        imageHeight: 300,
        imageAlt: `Oops!~image is broken!`,
        title: `我們會想你～`,
        text: `沒關係！寶藏永遠在這，期盼你的回頭～`,
        allowOutsideClick: false
      });
    } else {
        swal.fire({
          imageUrl: `img/chicken&duck.jpg`,
          imageHeight: 300,
          imageAlt: `Oops!~image is broken!`,
          title: `一進入叢林就看到動物河`,
          text: `你看到旁邊有雞＆鴨，殘忍的你有個念頭，決定丟其中一隻下去，是...？`,
          confirmButtonText: `雞`,
          cancelButtonText: `鴨`,
          showCancelButton: true,
          allowOutsideClick: false
        }).then((ans) => {
          if (ans.dismiss === 'cancel') {
            swal.fire({
              imageUrl: `img/gameOver.png`,
              imageHeight: 300,
              imageAlt: `Oops!~image is broken!`,
              title: `Game over！`,
              text: `糟糕！鴨會游泳，被河神撿到前先自己游走了`,
              allowOutsideClick: false
            }).then(()=>{gameOver(1)});
          } else {
            swal.fire({
              imageUrl: `img/goldenChicken.jpg`,
              imageHeight: 300,
              imageAlt: `Oops!~image is broken!`,
              title: `獲得了一隻金雞！`,
              text: `河神把雞煮了，為了賠你送你一隻金雞；繼續前往下一個河...`,
              allowOutsideClick: false
            }).then(() => {
              swal.fire({
                imageUrl: `img/car.jpg`,
                imageHeight: 300,
                imageAlt: `Oops!~image is broken!`,
                title: `此時你走到了車車河`,
                text: `旁邊停了兩台車，丟哪台車才不會雷到自己呢？`,
                confirmButtonText: `最新法拉利`,
                cancelButtonText: `20年快報廢老車`,
                showCancelButton: true,
                allowOutsideClick: false
              }).then((ans) => {
                if (ans.dismiss != 'cancel') {
                  swal.fire({
                    imageUrl: `img/gameOver.png`,
                    imageHeight: 300,
                    imageAlt: `Oops!~image is broken!`,
                    title: `Game over！`,
                    text: `車車河河神是車奴，看到最新法拉利決定自己收編，假裝河神不在家不出現。`,
                    allowOutsideClick: false
                  }).then(()=>{gameOver(1)});
                } else {
                  swal.fire({
                    imageUrl: `img/getNewCar.jpg`,
                    imageHeight: 300,
                    imageAlt: `Oops!~image is broken!`,
                    title: `獲得最新BMW`,
                    text: `車車河河神覺得你很可憐只能丟爛車，可憐你把他最不愛的車送給你。`,
                    allowOutsideClick: false
                  }).then(() => {
                    swal.fire({
                      imageUrl: `img/goldenRiver.jpg`,
                      imageHeight: 300,
                      imageAlt: `Oops!~image is broken!`,
                      title: `開著得到的新車來到黃金河`,
                      text: `你看到河邊放著黃金＆鑽石你想用哪個換寶物呢？`,
                      confirmButtonText: `黃金`,
                      cancelButtonText: `鑽石`,
                      showCancelButton: true,
                      allowOutsideClick: false
                    }).then((ans) => {
                      if (ans.dismiss != 'cancel') {
                        swal.fire({
                          imageUrl: `img/gameOver.png`,
                          imageHeight: 300,
                          imageAlt: `Oops!~image is broken!`,
                          title: `Game over！`,
                          text: `黃金河有太多黃金了，河神以為是自己的黃金，所以沒發現你丟東西下去。`,
                          allowOutsideClick: false
                        }).then(()=>{gameOver(1)});
                      } else {
                        swal.fire({
                          imageUrl: `img/goldBox.jpg`,
                          imageHeight: 300,
                          imageAlt: `Oops!~image is broken!`,
                          title: `恭喜獲得一箱黃金`,
                          text: `黃金河河神沒看過鑽石，決定用一箱黃金跟你交換；繼續趕路去下一個河...`,
                          allowOutsideClick: false
                        }).then(() => {
                          swal.fire({
                            imageUrl: `img/magicRiver.jpg`,
                            imageHeight: 300,
                            imageAlt: `Oops!~image is broken!`,
                            title: `此時你走到充滿著魔法的魔幻河`,
                            text: `你看到地上有兩樣垃圾，決定丟一個下去，是哪個呢？`,
                            confirmButtonText: `枯老樹枝`,
                            cancelButtonText: `老舊油燈`,
                            showCancelButton: true,
                            allowOutsideClick: false
                          }).then((ans) => {
                            if (ans.dismiss === 'cancel') {
                              swal.fire({
                                imageUrl: `img/gameOver.png`,
                                imageHeight: 300,
                                imageAlt: `Oops!~image is broken!`,
                                title: `Game over！`,
                                text: `原來是神燈！魔幻河河神覺得你是讓神燈精靈來搶地盤，一氣之下把你over了。`,
                                allowOutsideClick: false
                              }).then(()=>{gameOver(1)});
                            } else {
                              swal.fire({
                                imageUrl: `img/magicwand.jpg`,
                                imageHeight: 300,
                                imageAlt: `Oops!~image is broken!`,
                                title: `意外獲得一支魔杖`,
                                text: `魔幻河河神要把樹枝還你時，誤拿成自己收藏已久的枯枝魔杖還你。`,
                                allowOutsideClick: false
                              }).then(() => {
                                swal.fire({
                                  imageUrl: `img/noNameRiver.jpg`,
                                  imageHeight: 300,
                                  imageAlt: `Oops!~image is broken!`,
                                  title: `終於走到最後一個無名河`,
                                  text: `此時地板上沒有任何東西可以丟，你決定...`,
                                  confirmButtonText: `不丟直接閃人`,
                                  cancelButtonText: `隨便丟剛剛拿到的寶物`,
                                  showCancelButton: true,
                                  allowOutsideClick: false
                                }).then((ans) => {
                                  if (ans.dismiss != 'cancel') {
                                    swal.fire({
                                      imageUrl: `img/gameOver.png`,
                                      imageHeight: 300,
                                      imageAlt: `Oops!~image is broken!`,
                                      title: `Game over！`,
                                      text: `因為沒人想丟東西，無名河神被冷落太久，氣噗噗自己跑出來把你的寶物都搶走。`,
                                      allowOutsideClick: false
                                    });
                                  } else {
                                    swal.fire({
                                      imageUrl: `img/godbackhomewithyou.jpg`,
                                      imageHeight: 300,
                                      imageAlt: `Oops!~image is broken!`,
                                      title: `恭喜獲得河神`,
                                      text: `因為無名河河邊沒有東西可丟，河神被冷落已久，只有你願意丟寶物，河神覺得你是直得託付終身的人，決定跟你回家。`,
                                      allowOutsideClick: false
                                    }).then(() => {
                                      completed(1);
                                    })
                                  };
                                });
                              });
                            };
                          });
                        });
                      };
                    });
                  });
                };
              });
            });
          };
        });
    };
  });
}
function completed(e) {
  document.body.style.backgroundImage = "url('https://i.pinimg.com/474x/c5/21/15/c52115827e95d4a29e5729e29983653a.jpg')";
  btn.textContent = "恭喜過關";


  btn.removeEventListener("click", welcomeGame);
  btn.addEventListener("click", function () {
    location.reload();
   })
   
}

function gameOver(e) {
  document.body.style.backgroundImage = "url('img/bgDie.jpg')"; 
  btn.textContent = "再試一次";
}

welcomeGame();