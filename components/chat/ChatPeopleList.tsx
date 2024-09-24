'use client';

import Person from 'components/chat/Person';
import { useRecoilState } from 'recoil';
import { selectedIndexState } from 'utils/recoil/atoms';

export default function ChatPeopleList() {
  const [selectedIndex, setselectedIndex] = useRecoilState(selectedIndexState);

  return (
    <div className="h-screen w-60 flex flex-col bg-gray-50">
      <Person
        onClick={() => setselectedIndex(0)}
        index={0}
        isActive={selectedIndex === 0}
        name={'wook'}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={'iasdonfiodakn'}
      />
      <Person
        onClick={() => setselectedIndex(1)}
        index={1}
        isActive={selectedIndex === 1}
        name={'bilad'}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={'dafioqekl'}
      />
    </div>
  );
}
