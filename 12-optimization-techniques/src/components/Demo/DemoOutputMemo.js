import { memo } from 'react'
import MyParagraph from "./MyParagraph";

const DemoOutputMemo = props => {
  console.log('DEMOOUTPUTMEMO RUNNING')
  // will -re-evaluate (but NOT re-render) MyParagraph on every App state change
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
}

// compares props and re-evaluate the component only if props change
// trades the performance cost of re-evaluating the component with the performance cost of comparing props
export default memo(DemoOutputMemo)