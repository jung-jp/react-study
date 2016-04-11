const
	React = require('react'),
	ReactDom = require('react-dom'),

	Main = require('./components/main');


ReactDom.render(
    <Main />,
    document.getElementById('wrap')
);