import {type Code, type Node, type Parent} from 'mdast'

export type Section = {lang: string; title: string; codeLines: string[]}

export type CodeGroupNode = {
  type: 'codeGroup'
  data: {
    hName: string
    hProperties: {
      group: string
      label: string
    }
  }
} & Parent

// 型ガード：Code ノードかどうか
export function isCode(node: Node): node is Code {
  return node.type === 'code'
}

// 型ガード：CodeGroupNode かどうか
export function isCodeGroupNode(node: Node): node is CodeGroupNode {
  return node.type === 'codeGroup'
}

// React の Setter 用ヘルパー（あなたの提示したもの）
// import { Dispatch, SetStateAction } from "react";

// export type Setter<T> = Dispatch<SetStateAction<T>>;
// export const Setter = (() => {
//   const toValue = <T>(setStateAction: SetStateAction<T>, prev: T) =>
//     setStateAction instanceof Function ? setStateAction(prev) : setStateAction;
//   return {
//     toValue,
//     from: <T>(
//       use: (getNext: (prev: T) => T) => void
//     ): Setter<T> => (setStateAction) =>
//       use((prev) => toValue(setStateAction, prev)),
//   };
// })();
