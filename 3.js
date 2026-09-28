function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed != "number" || tokensUsed < 0) {
        return "Invalid";
    }
    if (tokensUsed <= 500) {
        return 0;
    }
    let extraTokens = tokensUsed - 500;
    let blocks = Math.floor(extraTokens / 100);
    let cost = blocks * 5;
    return cost;
}