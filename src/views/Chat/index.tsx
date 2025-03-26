import { store as chatSession } from '@/store/chatSession'
import { observer } from 'mobx-react-lite'


const Chat: React.FC = () => {


  return (
    <div className="flex flex-1 flex-col px-40 py-8 w-screen overflow-y-auto overflow-x-hidden ">
      {chatSession.myChat.map(item => (item.role === 'AI' ? <div key={item.index} className="bg-white rounded-lg mb-5 px-2 py-2 "><h1 className="text-2xl">AI:</h1><span>{item.content}</span></div> :
        <div key={item.index} className="bg-blue-600 text-white rounded-lg mb-5 px-2 py-2"><h1 className="text-2xl">你:</h1><span>{item.content}</span></div>))}
    </div>
  )
}

export default observer(Chat)