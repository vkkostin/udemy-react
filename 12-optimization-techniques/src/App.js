import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import DemoOutputMemo from './components/Demo/DemoOutputMemo';
import UseMemoDemo from './components/Demo/UseMemoDemo';

const App = () => {
  // useState comes from React, so React makes sure state is only initiliazed on the first evaluation
  // on subsequent evaluations, React makes sure to use the same state

  // state-changing functions are SCHEDULED, not immediately evaluated
  // however, the order of state-changing functions is preserved
  // because of this, if we change state based on previous state, we should use the function argument
  // multiple synchronous calls to state-changing functions will be batched
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  // will re-run with every state change
  console.log('APP RUNNING')

  // this function is re-created on every App evalution (state change)
  // const toggleParagraphHandler = () => setShowParagraph(prevState => !prevState)

  // this function is stored in-memory and re-used on every App evaluation (state change)
  // allowToggle is stored as false (its default value)
  // the function is stored, but is re-created every time allowToggle changes
  const toggleParagraphHandlerStored = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevState => !prevState)
    }
  }, [allowToggle])

  const allowToggleHandler = () => setAllowToggle(true)

  // will RE-EVALUATED with every showParagraph state change
  // but will only RE-RENDER elements and child components that depend on the showParagraph state
  return (
    <div className="app">
      <UseMemoDemo />
      {/* will re-evaluate every time because a new function (non-primitive value) is created on every re-evaluation of App */}
      {/* <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button> */}

      {/* will not re-evaluate since the handler is stored across re-evaluations of App */}
      {/* <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandlerStored}>Toggle Paragraph</Button> */}

      <h1>Hi there!</h1>

      {/* will no re-evaluate since it uses memo */}
      <DemoOutputMemo show={showParagraph} />

      {/* Will re-evaluate the component, but will not re-render anything */}
      {/* <DemoOutput show={false} />
      <DemoOutput /> */}

      {/* Will pass showParagraph into this as a prop, and will only re-render what is inside */}
      {/* <DemoOutput show={showParagraph} /> */}

      {/* Only this is rendered on showParagraph state changes */}
      {/* {showParagraph ? <p>This is new!</p> : null} */}
    </div>
  );
}

export default App;
