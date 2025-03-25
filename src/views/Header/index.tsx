import React from 'react';
import { Tooltip } from 'antd';
import SelectOption from '../../components/SelectOption';
import {
  QuestionCircleOutlined
} from '@ant-design/icons';

const Header: React.FC = () => {



  return (
    <div className="h-28 bg-sky-200 w-screen flex flex-col items-center justify-center">
      <h3 className='text-xl font-bold'>大模型单轮AI对话</h3>
      <div className='flex items-center justify-between'><span>当前模型：</span>
        {/* <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
          getPopupContainer={triggerNode => triggerNode.parentElement}
        /> */}
       
        <SelectOption></SelectOption>
        {/* <Button onClick={() => handleChange()}>按钮</Button> */}
        <Tooltip className='ml-5 cursor-pointer' title="注意:
                        演示环境仅支持 “模拟数据模型”
                        如需测试其他模型请克隆本仓库到本地运行">
          <QuestionCircleOutlined />
        </Tooltip>
      </div>
    </div>
  )
}

export default Header
