// 星座判定の簡単な例
function getZodiacSign(date) {
  const month = date.getMonth() + 1; // 1〜12
  const day = date.getDate();

  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) return "gemini";
  if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) return "cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) return "libra";
  if ((month == 10 && day >= 24) || (month == 11 && day <= 22))
    return "scorpio";
  if ((month == 11 && day >= 23) || (month == 12 && day <= 21))
    return "sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19))
    return "capricorn";
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "pisces";
}

// ボタン押したときの処理
document.getElementById("submit-btn").addEventListener("click", async () => {
  const birthdayInput = document.getElementById("birthday").value;
  if (!birthdayInput) {
    alert("誕生日を入力してください");
    return;
  }

  const birthday = new Date(birthdayInput);
  const sign = getZodiacSign(birthday);

  // 推しの選択を取得
  const oshiRadio = document.querySelector('input[name="oshi"]:checked');
  if (!oshiRadio) {
    alert("推しを選んでください");
    return;
  }
  const oshiValue = oshiRadio.value;

  // 推しごとの写真URL（例）
  const oshiPhotos = {
    oshi1: "images/jw2.png",
    oshi2: "images/hs2.png",
    oshi3: "images/js2.png",
    oshi4: "images/jy2.png",
    oshi5: "images/sh2.png",
    oshi6: "images/sn2.png",
    oshi7: "images/nk2.png",
    oshi8: "images/en2.png",
  };

  try {
    // API呼び出し
    const res = await fetch("/.netlify/functions/horoscope", {
      method: "POST",
      body: JSON.stringify({ sign }),
    });
    const data = await res.json();

    // 結果表示
    document.getElementById("result-photo").src = oshiPhotos[oshiValue];
    document.getElementById("result-message").textContent = data.fortune;
    document.getElementById("result").style.display = "block";

    // 自動スクロール！
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
  } catch (e) {
    console.error(e); // ←追加しておくと便利！
    alert("エラーが発生しました。もう一度試してください。");
  }
});
