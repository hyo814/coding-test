def solution(n, computers):
    answer = 0
    start = []
    is_visited = [0 for i in range(n)]

    while 0 in is_visited:
        x = is_visited.index(0)
        start.append(x)
        is_visited[x] = 1

        while start:
            node = start.pop(0)
            is_visited[node] = 1
            for i in range(n):
                if is_visited[i] == 0 and computers[node][i] == 1:
                    start.append(i)
                    is_visited[i] = 1
        answer += 1
    return answer