import React from 'react';
import ReactDom from 'react-dom';

// コンポーネントを作る
class App extends React.Component {
    render() {
        return <p> Hello React!</p>;
    }
}

// マウントする
document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(<App />, document.getElementById('app'));
});