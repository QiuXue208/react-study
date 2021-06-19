import React from 'react';
import CounterContainer from './CounterContainer';
import SummaryContainer from './SummaryContainer';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    console.log('parent constructor');
  }
  componentWillMount() {
    console.log('parent componentWillMount');
  }
  componentDidMount() {
    console.log('parent componentDidMount');
  }
  render() {
    console.log('parent render');
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <CounterContainer caption="First" />
          <CounterContainer caption="Second" />
          <CounterContainer caption="Third" />
          {/*  forceUpdate: 强制触发组件重新渲染，这将调用组件的render方法 */}
          <SummaryContainer />
          <button onClick={() => this.forceUpdate()}>
            click me to repaint!
          </button>
        </div>
      </>
    );
  }
}

export default ControlPanel;
