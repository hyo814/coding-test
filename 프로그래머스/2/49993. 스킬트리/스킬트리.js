function solution(skill, skill_trees) {
    var answer = 0;

    for (let tree of skill_trees) {
        let filteredTree = tree.split('').filter(ch => skill.includes(ch)).join('');
        if(skill.startsWith(filteredTree)){
            answer++;
        }
    }
    return answer;
}