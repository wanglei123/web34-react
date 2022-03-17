import { Component } from 'react';
import { Context, UseContext } from '../../Context';

/*
 * @Author       : wanglei
 * @Date         : 2022-03-17 15:25:28
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-17 15:29:37
 * @FilePath     : /react-lesson1/src/pages/children/ConsumerPage.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h3>ConsumerPage</h3>
        <Context.Consumer>
          {(theme) => {
            return (
              <div className={theme.themeColor}>
                omg
                <UseContext.Consumer>
                  {(user) => {
                    return <div>user.name</div>;
                  }}
                </UseContext.Consumer>
              </div>
            );
          }}
        </Context.Consumer>
      </div>
    );
  }
}
