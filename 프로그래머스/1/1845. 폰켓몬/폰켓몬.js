function solution(nums) {
    const numTypes = new Set(nums).size; // 폰켓몬 종류 수
    const maxSelect = nums.length / 2;   // 최대로 선택할 수 있는 폰켓몬 수

    return Math.min(numTypes, maxSelect);
}
