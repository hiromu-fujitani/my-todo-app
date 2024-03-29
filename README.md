## アプリケーションの概要

このアプリケーションは、タスク管理を効率的に行うためのものです。ユーザーはタスクを追加、編集、削除し、タスクのステータスを変更できます。
アプリケーションはAtomic Designパターンに基づいて設計され、BootstrapスタイルとFontAwesomeアイコンが使用されています。また、TypeScript型定義が導入されています。

## 主な実装要素

- Atomic Designパターンの採用
- Bootstrapスタイルの使用
- モーダルダイアログの利用
- FontAwesomeアイコンの使用
- TypeScript型定義

## 主な機能

- タスク管理機能（追加、編集、削除、ステータス変更）
- タスクのステータス管理（未着手、着手中、完了）
- ステータスのフィルタリング機能
- 編集と削除のモーダル


## 構成（カスタム部分のみ記載）

App.tsx

App.css

taskhub.png

types.ts

src/

  atoms/
  
    Button.tsx
    
  components/
  
    molecules/
    
      TaskForm.tsx
      
      TaskForm.tsx
      
      TaskCard.tsx
      
      TascCard.css
      
    organisms/
    
      FilterButtons.tsx
      
      TaskList.tsx
      


| ファイル名         | 概要                                                         |
| ------------------ | ------------------------------------------------------------ |
| Button.tsx         | ボタン要素を表現する`Button`コンポーネント。ボタンの表示とクリック時の処理を担当。 |
| TaskForm.tsx       | タスクの新規作成フォームを提供するコンポーネント。タスクのタイトルと説明を入力し、新しいタスクを追加できる。 |
| TaskCard.tsx       | タスク情報をカード形式で表示し、編集や削除が可能なコンポーネント。タスクの詳細情報やステータスの変更ができる。 |
| TaskCard.css       | `TaskCard`コンポーネントのスタイルを定義するCSSファイル。 |
| FilterButtons.tsx  | タスクのフィルタリングを行うボタンコンポーネント。すべてのタスク、未着手のタスク、着手中のタスク、完了したタスクの表示切り替えを提供。 |
| TaskList.tsx       | タスク一覧を表示し、タスクの操作（編集、削除、ステータス変更）を可能にするコンポーネント。 |
| App.tsx            | アプリケーションのメインコンポーネント。全体のレイアウトを提供し、各コンポーネントを組み合わせてアプリケーションを構築。 |
| App.css            | アプリケーション全体のスタイルを定義するCSSファイル。       |
| taskhub.png        | アプリケーションのロゴイメージ。                             |
| types.ts        | アプリケーションで使用される型定義を提供するファイル。Task インターフェースなど、タスク関連の型が定義されている。 |


