// netlify/functions/horoscope.js

exports.handler = async function (event, context) {
  const { sign } = JSON.parse(event.body);

  const fortunes = {
    aries:
      "お互いに気を使いすぎて、恋人よりも“親友”って感じ。でも、その距離感が心地いいかもね💬💙",
    taurus:
      "ケンカしちゃうこともあるかもだけど、それも含めて恋。まるでツンデレなドラマの主人公みたいにね🫶🔥",
    gemini:
      "一緒にいると自然体でいられる。恋人というより“癒し系コンビ”な関係が合うかもね🧸☁️",
    cancer:
      "ちょっと大胆なアプローチにドキドキ…♡ でも、振り回されるのも悪くないかもね🙈💓",
    leo: "一緒にいると自然体でいられる関係。恋よりも深い安心感って...大事にしてみて☁️🌿",
    virgo: "たくさん話さなくても伝わる、そんな感覚を共有できるかもね🌙🌌",
    libra: "違うところがあるからこそたくさん支え合える関係になれるかもね🍀💚",
    scorpio: "そっと隣にいるだけで、気持ちが安らぐ関係になっていくかもね💐♡",
    sagittarius:
      "相手を知ろうとする気持ちを忘れなければ、この関係も深くなっていくかもね🤞🏻💛",
    capricorn: "たくさん気が合う運命の人なのかもね・・・❤️🪄",
    aquarius:
      "今はまだ近づくタイミングを探している途中かも。でも、その慎重さが恋を特別なものに変えていくかもね⛅️🫧",
    pisces:
      "まるで青春漫画のヒロインみたいな気持ちになれる恋ができるかもね🎥🎓",
  };

  const signLower = sign.toLowerCase();
  const message = fortunes[signLower] || "星座を正しく入力してください";

  return {
    statusCode: 200,
    body: JSON.stringify({ fortune: message }),
  };
};
