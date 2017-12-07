'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\learn-react\\nextjs\\components\\PostLink.js';


var PostLink = function PostLink(props) {
	return _react2.default.createElement(_link2.default, { as: '/post/' + props.data.id, href: '/post?id=' + props.data.id, __source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('a', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, props.data.name));
};

exports.default = PostLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvc3RMaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJQb3N0TGluayIsInByb3BzIiwiZGF0YSIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7d0JBQ2YsQUFBQyxnQ0FBSyxlQUFhLE1BQUEsQUFBTSxLQUF6QixBQUE4QixJQUFNLG9CQUFrQixNQUFBLEFBQU0sS0FBNUQsQUFBaUU7YUFBakU7ZUFBQSxBQUNDO0FBREQ7RUFBQSxrQkFDQyxjQUFBOzthQUFBO2VBQUEsQUFBSTtBQUFKO0FBQUEsVUFBSSxBQUFNLEtBRkksQUFDZixBQUNDLEFBQWU7QUFGbEIsQUFNQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb3N0TGluay5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9sZWFybi1yZWFjdC9uZXh0anMifQ==