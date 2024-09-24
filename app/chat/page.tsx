import ChatPeopleList from 'components/chat/ChatPeopleList';
import ChatScreen from 'components/chat/ChatScreen';
import { createServerSupabaseClient } from 'utils/supabase/server';

export default async function ChatPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ChatPeopleList loggedInUser={session?.user} />
      <ChatScreen />
    </div>
  );
}
