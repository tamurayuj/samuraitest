function performDivision() {
    const numerator = document.getElementById("numerator").value;
    const denominator = document.getElementById("denominator").value;
    const resultElement = document.getElementById("result");
    

    try {
        const result = numerator / denominator;
        // if (isNaN(result)) {
        //     throw new Error("無効な計算結果です");
        // }
        // if (!isFinite(result)) {
        //     throw new Error("０で割ってはいけません");
        // }
        resultElement.textContent = `結果: ${result}`;
    } catch (error) {
        console.error("エラーが発生しました:", error.message);
        resultElement.textContent = `エラー: ${error.message}`;
    } finally {
        // 最後に必ず実行される処理
        console.log("割り算が完了しました");
    }
}