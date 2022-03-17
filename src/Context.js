/*
 * @Author       : wanglei
 * @Date         : 2022-03-17 11:35:31
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-17 15:35:09
 * @FilePath     : /react-lesson1/src/Context.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from "react";

// 组件的跨层级通信-Context
// * 如何使用Context *
// 步骤
// step1：创建一个Context对象
// step2: 创建Provider, 传递value
// step3: 子组件消费value, 有三种途径： contextType, useContext, Consumer

// 创建一个Context对象
 export const Context = React.createContext()

 // 用hook创建Context对象

 export const UseContext = React.createContext()

 // contextType 与useContext的区别


 // contextType: 
 // 只能用在类组件中，只能订阅单一的Context来源，只能接收一个Context,多次赋值的话，只会用最后一现代战争Context


 // useContext: 只能用在函数式组件中或者用在自定义hook中，可以订阅多个Context

 // Consumer: 不限于函数或者类组件，可订阅多个Context