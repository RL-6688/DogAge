document.getElementById("calcBtn").addEventListener("click", function () {
    const birthStr = document.getElementById("dogBirth").value;
    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = "";

    if (!birthStr) {
        resultBox.innerHTML = "請點選日期做計算";
        return;
    }

    const birthDate = new Date(birthStr);
    const today = new Date();

    // 檢查日期是否大於今天
    if (birthDate > today) {
        resultBox.innerHTML = "日期選取錯誤，這是未來狗!";
        return;
    }

    // 計算年齡差異
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // -----------------------------------------------------------
    // ➤ 第一段結果：狗狗實際年齡
    // -----------------------------------------------------------
    let dogAgeText = "";

    if (years === 0 && months === 0) {
        dogAgeText = "狗狗的年紀為不足一個月";
    } else {
        dogAgeText = `狗狗的年紀為 ${years} 年 ${months} 月`;
    }

    resultBox.innerHTML = dogAgeText;

    // -----------------------------------------------------------
    // ➤ 第二段結果：換算人類年齡
    // -----------------------------------------------------------
    let totalDogYears = years + months / 12;

    if (years === 0 && (months === 0 || months === 1)) {
        resultBox.innerHTML += `<br>狗狗滿兩個月才能正確計算人類的年紀`;
        return;
    }

    // 使用自然對數公式：人類年齡 = 16 * ln(狗狗年齡) + 31
    const humanAge = Math.round(16 * Math.log(totalDogYears) + 31);

    resultBox.innerHTML += `<br>狗狗年紀對應人類的年紀為 ${humanAge} 歲`;
});

// -----------------------------------------------------------
// ➤ 重新選取日期按鈕
// -----------------------------------------------------------
document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("dogBirth").value = "";
    document.getElementById("resultBox").innerHTML = "";
});
