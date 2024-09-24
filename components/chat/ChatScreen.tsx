'use client';

import { useRecoilValue } from 'recoil';
import { selectedIndexState } from 'utils/recoil/atoms';
import Message from './Message';
import Person from './Person';

export default function ChatScreen() {
  const selectedIndex = useRecoilValue(selectedIndexState);

  return selectedIndex !== null ? (
    <div className="w-full h-screen flex flex-col">
      {/* 액티브 유저 */}
      <Person
        index={selectedIndex}
        isActive={false}
        name={'wook'}
        onChatScreen={true}
        onlineAt={new Date().toISOString()}
        userId={'iasdonfiodakn'}
      />

      {/* 채팅 */}
      <div className="w-full flex flex-col p-4 gap-3">
        <Message isFromMe={true} message={'안녕하세용'} />
        <Message isFromMe={false} message={'네?'} />
        <Message isFromMe={false} message={'네?'} />
        <Message isFromMe={true} message={'반가워요'} />
        <Message isFromMe={false} message={'저도요'} />
      </div>

      {/* 채팅창 */}
      <div className="flex">
        <input
          className="p-3 w-full border-2 border-light-blue-600"
          placeholder="메시지를 입력하세요."
        />
        <button
          className="min-w-20 p-3 bg-light-blue-600 text-white"
          color="light-blue"
        >
          <span>전송</span>
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full"></div>
  );
}
