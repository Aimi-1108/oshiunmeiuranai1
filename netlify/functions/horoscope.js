// horoscope.js

export async function handler(event, context) {
  const { sign } = JSON.parse(event.body);

  const fortunes = {
    aries: "推しが夢に出てくる予感🔮💜",
    taurus: "意外な場所で推しを見れるかも🎤🤍",
    gemini: "推しの以外な一面が見れるかも🪄🩷",
    cancer: "推しに気持ちが届く日かも📩🩵",
    leo: "推しがウィバースライブをするかも📸💛",
    virgo: "推しの可愛さに気づくかも💎🩵",
    libra: "推しの意外なケミを見れるかも🫂💕",
    scorpio: "気の合うENGENEに出会えるかも👩🏼‍❤️‍👩🏻",
    sagittarius: "トレカを自引き出来るかも🃏💖",
    capricorn: "推し運がう良い日かも💚🍀",
    aquarius: "推しケミでウィバースライブをするかも💓🧑🏼‍❤️‍💋‍🧑🏻",
    pisces: "コメントを読んでくれるかも📝💝",
  };

  const signLower = sign.toLowerCase();
  const message = fortunes[signLower] || "星座を正しく入力してください";

  return {
    statusCode: 200,
    body: JSON.stringify({ fortune: message }),
  };
}
