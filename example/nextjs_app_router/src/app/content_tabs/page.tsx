import MdxLexer from "@/util/MarkdownLexer"
import { compileAndProcessMdx, processMdx } from "@/util/processMdx"
import styles from "./page.module.css";
import { compile_mdx } from "@/crates/mdxjs-rs/pkg/mdxjs_rs";
import { Editor } from "@/components/Editor";


export default async function ContentTabs() {
  // TODO
  // 未定義の jsx コンポーネントを md のトップレベルで定義すると MarkdownLexer.tsx
  // でコンパイルエラーとなる
  // エラーにならないようにしたい。例えば、未定義であればそれは文字列として扱うようにする
  // 例 . <Tomato /> これは未定義のため "<Tomato />"として使う
  const mdx = [
    '# Content tabs',
    '## 概要',
    'Markdown の AST（抽象構文木）を走査し、以下の形式で書かれた「タブ記法」を検出して MDX のカスタム要素に変換。',
    '',
    '### Hedding',
    '=== "タブ1"',
    '  ## ほげ1',
    '===',
    '',
    '=== "タブ2"',
    '  ## ほげ2',
    '===',
    '',
    '### リスト',
    '=== "Unordered list"',
    '* ほげ',
    '* ほげ',
    '* ほげ',
    '',
    '===',
    '',
    '=== "Ordered list"',
    '1. ほげ',
    '2. ほげ',
    '3. ほげ',
    '',
    '===',
    '',
    '### コードブロック',
    '=== "hello.ts"',
    '```ts',
    'import type {NextApiRequest, NextApiResponse} from "next"',
    'type Data = {',
    '  name: string',
    '}',
    '',
    'export default function handler(',
    '  request: NextApiRequest,',
    '  res: NextApiResponse<Data>',
    ') {',
    '  res.status(200).json({name: "John Doe"})',
    '}',
    '',
    '```',
    '===',
    '',
    '=== "hello.js"',
    '```js',
    '"use strict"',
    'Object.defineProperty(exports, "__esModule", {value: true})',
    'exports.default = handler',
    'function handler(request, res) {',
    '  res.status(200).json({name: "John Doe"})',
    '}',
    '```',
    '===',
    '',
  ].join('\n')

  const mdxModule = await processMdx(mdx);
  return (
    <div className={styles.page}>
      <MdxLexer Component={mdxModule.default} />
      {/* <Editor value={mdx} /> */}
    </div>
  )
}
