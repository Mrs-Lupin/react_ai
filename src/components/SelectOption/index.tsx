import './index.scss';
// 使用svg,后期更改图标颜色比较方便，还可以做悬浮变色。记得换成你自己路径下的图片
import { ReactComponent as Up } from '../../assets/icons/arrow.svg';

import { useState, useEffect } from 'react'

function SelectOption() {

  // 选项body的滚动条
  const [scrollWidth, setScrollWidth] = useState(0)

  // 选项弹窗是否显示，为了优化用户体验，控制它的opacity透明度隐藏，为了使选项点击事件能够生效，选项弹窗立即隐藏
  const [showOption, setShowOption] = useState(false)
  // 选项弹窗是否显示，控制它的div是否存在，（弹窗隐藏后元素存在，点击事件生效）需要将弹窗移除
  const [showOptionSetTimeout, setShowOptionSetTimeout] = useState(false)

  // 当前选中的选项
  const [selectedItem, setSelectedItem] = useState({
    id: '',
    item: ''
  })

  //挂载后，计算选项弹窗是否有滚动条，从而改变选项弹窗body宽度
  function changeWidth() {
    var myElement: any = document.getElementById('mySelecte');
    var widthWithBorder = myElement.offsetWidth;
    var widthWithoutBorder = myElement.clientWidth;
    setScrollWidth(widthWithBorder - widthWithoutBorder);
  }
  useEffect(() => {
    changeWidth();
  }, []);

  /**
   * input元素获得焦点以及失去焦点的事件
   */
  function showOptionBox() {
    setShowOption(true)
    setShowOptionSetTimeout(true)
  }

  /**
   * 选择框失去焦点事件的处理逻辑  
   */
  function inputBlur() {
    setShowOption(false)
    console.log(showOption, "showOption")
    setTimeout(() => {
      setShowOptionSetTimeout(false)
    }, 300);
  }

  /**
   * 用户选中了某个选项
   * @param id 区分选项的唯一标志
   * @param item 选中的名称
   */
  function selectedOption(id: number, item: string) {
    setSelectedItem({
      id: String(id), item
    });
  }

  return (
    <div className='so-all-box' >
      <input type="button" onBlur={inputBlur} className={showOption ? 'so-box borderB' : 'so-box borderA'} id="mySelecte" onClick={() => { showOptionBox() }}>
      </input>
      <div className={selectedItem.id === '' ? "lr-selected-manage-around-text textA" : "lr-selected-manage-around-text textB"}>
        {selectedItem.id === '' ? '请选择' : selectedItem.item}
      </div>

      {/* 箭头 */}
      <Up style={{cursor:'pointer'}} className={showOption ? 'lr-selected-manage-around-icon-select arrow-down' : 'lr-selected-manage-around-icon-select arrow-up'} />

      {/* 选择元素的下拉框*/}
      {showOptionSetTimeout ?
        <div className={showOption ? 'popover-box popover-box-show' : 'popover-box popover-box-hidden'} id="mySelecte" style={{ width: `calc(100% + ${scrollWidth}px)` }}>
          {['牛肉馅饼', '北京烤鸭', '蛋糕', '铁锅炖大鹅', '可乐鸡翅'].map((item, index) => (
            <div key={index} className={selectedItem.item === item ? "popover-single popover-single-selected" : "popover-single"} onClick={() => { selectedOption(index, item) }}>{item}</div>
          ))}
        </div>
        : ''}

    </div>

  );
}

export default SelectOption;