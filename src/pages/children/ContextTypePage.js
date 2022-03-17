import { Component } from "react";
import { Context, UseContext } from "../../Context";

/*
 * @Author       : wanglei
 * @Date         : 2022-03-17 14:10:35
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-17 15:22:05
 * @FilePath     : /react-lesson1/src/pages/children/ContextTypePage.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class ContextTypePage extends Component {
  static contextType = Context;
  static contextType = UseContext;

  render(){
    const {themeColor, name} = this.context;
    console.log('ContextTypePage', this.context)
    return (
      <div>
        <h2 className={themeColor}>ContextTypePage</h2>
        <h3>{name}</h3>
      </div>
    )
  }
}

