def solution(record):
    answer = []
    userDB = dict() # 데이터에 기록
    actions = [] # "Enter", "Leave", "Change"
    
    for event in record:
        info = event.split()
        action, userid = info[0], info[1]
        if action in ("Enter", "Change"): # 두가지 행동으로 처리
            nickname = info[2]
            userDB[userid] = nickname # 닉네임은 따로 저장 할 수 있도록 dict
        actions.append((action, userid))
        
    for actionInfo in actions:
        action, userid = actionInfo[0], actionInfo[1]
        if action == 'Enter': # enter 가 들어가는 조건이라면 
            answer.append(f'{userDB[userid]}님이 들어왔습니다.')
        elif action == 'Leave': #leave 가 들어가는 조건이라면
            answer.append(f'{userDB[userid]}님이 나갔습니다.')
    
    return answer