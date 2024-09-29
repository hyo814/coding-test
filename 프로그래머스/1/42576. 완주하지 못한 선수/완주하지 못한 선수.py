def solution(participant, completion):
    participant.sort() #participant 정렬
    completion.sort() #completion 정렬

    for i in range (len(completion)): #범위 - completion : len을 이용
        if participant[i] != completion[i]: #index가 같지 않으면
            return participant[i]; #해당되는 participant이 return
    
    return participant[len(completion)]; #맨 뒤의 값을 return