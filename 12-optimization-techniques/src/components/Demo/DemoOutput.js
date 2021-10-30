import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
  console.log('DEMOOUTPUT RUNNING')
  // will -re-evaluate (but NOT re-render) MyParagraph on every App state change
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
}

export default DemoOutput