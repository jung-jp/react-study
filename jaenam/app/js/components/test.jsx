const
React = require('react'),
ReactDOM = require('react-dom'),
Test = React.createClass({
  handleClick() {
    // 명시적으로 텍스트 인풋에 포커스하기 위해 raw DOM API를 사용합니다.
    ReactDOM.findDOMNode(this.refs.myDiv).value += 'aaa';
  },
  render() {
    // ref 어트리뷰트는 컴포넌트가 마운트되면 
    // this.refs에 컴포넌트에 대한 참조를 추가합니다.
    return (
      <div>
        <input type="text" ref="myDiv" />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick}
        />
      </div>
    );
  }
});

module.exports = Test;