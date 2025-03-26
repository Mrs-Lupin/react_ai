import { Tag, Input, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import './index.scss'
import { store as chatSession } from '@/store/chatSession'
const { TextArea } = Input;


const Footer: React.FC = () => {

  const [inputValue, setInputValue] = useState<string>('')

  const exampleList = [
    '打个招呼吧，并告诉我你的名字',
    '使用中文，回答以下两个问题，分段1、你是什么模型？2、请分别使用 Vue3 和 React 编写一个 Button 组件，要求在 Vue3 中使用 Setup Composition API 语法糖，在 React 中使用 TSX 语法'
  ]

  //点击放入对话框
  const setExample = (item: string) => {
    setInputValue(item)
  }

  //点击发送消息
  const sendMes = () => {
    const item = { role: 'user', content: inputValue }
    chatSession.addMyChat(item)
    setInputValue('')
  }

  return (
    <div className='pt-5 pb-10 w-screen px-5'>
      {exampleList.map((item, index) => (<Tag key={index} className='tag' onClick={() => setExample(item)}>{item}</Tag>))}
      <div style={{ position: 'relative' }}>
        <TextArea value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ borderRadius: '20px', padding: '10px 100px 10px 12px', overflowY: 'auto' }} autoSize={{ minRows: 4, maxRows: 4 }} placeholder="输入任意问题，按Ctrl + Enter 键快速开始..." />
        <Button className='button' variant="outlined" shape="circle" icon={<RocketOutlined style={{ fontSize: '22px' }} />} size='large' onClick={sendMes} />
      </div>

    </div>
  )
}

export default Footer