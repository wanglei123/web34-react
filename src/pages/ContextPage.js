import { Component } from 'react';
import { Context, UseContext } from '../Context';
import ContextTypePage from './children/ContextTypePage';
import UseContextPage from './children/UseContextPage';
import ConsumerPage from './children/ConsumerPage';

/*
 * @Author       : wanglei
 * @Date         : 2022-03-17 14:04:25
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-17 15:36:57
 * @FilePath     : /react-lesson1/src/pages/ContextPage.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red',
      },
      user: { name: '小明' },
    };
  }
  changeColor = () => {
    const { theme } = this.state;
    this.setState({ theme: { themeColor: theme.themeColor === 'red' ? 'green' : 'red' } });
  };

  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>改变颜色</button>
        <Context.Provider value={theme}>
          <UseContext.Provider value={user}>
            <ContextTypePage />
            <UseContextPage />
            <ConsumerPage />
          </UseContext.Provider>
        </Context.Provider>
      </div>
    );
  }
}
