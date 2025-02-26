function exeute() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const answer = document.getElementById("answer");
    
    try {
        const result = a / b;
        // if (isNaN(result)) {
        //     throw new Error("無効な計算結果です");
        // }
        // if (!isFinite(result)) {
        //     throw new Error("０で割ってはいけません");
        // }        
        answer.textContent = `結果: ${result}`;
    } catch (error) {
        console.error("エラーが発生しました:", error.message);
        answer.textContent = `エラー: ${error.message}`;
    } finally {
        // 最後に必ず実行される処理
        console.log("割り算が完了しました");
    }
}