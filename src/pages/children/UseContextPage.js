/*
 * @Author       : wanglei
 * @Date         : 2022-03-17 14:20:56
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-03-17 15:23:51
 * @FilePath     : /react-lesson1/src/pages/children/UseContextPage.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from "react"
import { Context, UseContext } from "../../Context"

export default function UseContextPage(props){

  const theme = React.useContext(Context)
  const user = React.useContext(UseContext)
  return (
    <div>
      <h3 className={theme.themeColor}>UseContextPage</h3>
      <h4>{user.name}</h4>
    </div>
  )
}