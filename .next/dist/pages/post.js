'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\learn-react\\nextjs\\pages\\post.js?entry';


var Content = function Content(postTitle) {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, postTitle.show.name), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, 'This is the blog post content.'));
};

var Post = function Post(props) {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_Layout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, props.show.name), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	})));
};

Post.getInitialProps = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
		var id, res, show;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						id = context.query.id;
						_context.next = 3;
						return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

					case 3:
						res = _context.sent;
						_context.next = 6;
						return res.json();

					case 6:
						show = _context.sent;

						console.log('fetched show: ' + show.name);

						return _context.abrupt('return', { show: show });

					case 9:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiQ29udGVudCIsInBvc3RUaXRsZSIsInNob3ciLCJuYW1lIiwiUG9zdCIsInByb3BzIiwic3VtbWFyeSIsInJlcGxhY2UiLCJpbWFnZSIsIm1lZGl1bSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxXQUFEO3dCQUNmLGNBQUE7O2FBQUE7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLGNBQUE7O2FBQUE7ZUFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQVUsS0FEaEIsQUFDQyxBQUFvQixBQUNwQix1QkFBQSxjQUFBOzthQUFBO2VBQUE7QUFBQTtBQUFBLElBSGMsQUFDZixBQUVDO0FBSEY7O0FBT0EsSUFBTSxPQUFPLFNBQVAsQUFBTyxLQUFBLEFBQUMsT0FBRDt3QkFDWixjQUFBOzthQUFBO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxrQkFDQyxBQUFDOzthQUFEO2VBQUEsQUFDQztBQUREO0FBQUEsb0JBQ0MsY0FBQTs7YUFBQTtlQUFBLEFBQUs7QUFBTDtBQUFBLFVBQUssQUFBTSxLQURaLEFBQ0MsQUFBZ0IsQUFDaEIsdUJBQUEsY0FBQTs7YUFBQTtlQUFBLEFBQUk7QUFBSjtBQUFBLFVBQUksQUFBTSxLQUFOLEFBQVcsUUFBWCxBQUFtQixRQUFuQixBQUEyQixZQUZoQyxBQUVDLEFBQUksQUFBdUMsQUFDM0MsNkNBQUssS0FBSyxNQUFBLEFBQU0sS0FBTixBQUFXLE1BQXJCLEFBQTJCO2FBQTNCO2VBTFUsQUFDWixBQUNDLEFBR0M7QUFBQTs7QUFMSDs7QUFVQSxLQUFBLEFBQUssOEJBQUw7cUZBQXVCLGlCQUFBLEFBQWUsU0FBZjtlQUFBO2dFQUFBO2FBQUE7cUNBQUE7VUFDZjtBQURlLFdBQ1QsUUFEUyxBQUNELE1BREMsQUFDZjtzQkFEZTthQUVKLG1FQUZJLEFBRUosQUFBc0M7O1VBQWxEO0FBRmdCLHFCQUFBO3NCQUFBO2FBR0gsSUFIRyxBQUdILEFBQUk7O1VBQWpCO0FBSGdCLHNCQUt0Qjs7Y0FBQSxBQUFRLHVCQUFxQixLQUxQLEFBS3RCLEFBQWtDOzt1Q0FFM0IsRUFBQyxNQVBjLEFBT2Y7O1VBUGU7VUFBQTtzQkFBQTs7QUFBQTtjQUFBO0FBQXZCOztzQkFBQTswQkFBQTtBQUFBO0FBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9sZWFybi1yZWFjdC9uZXh0anMifQ==