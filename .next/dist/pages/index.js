'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _PostLink = require('../components/PostLink');

var _PostLink2 = _interopRequireDefault(_PostLink);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\learn-react\\nextjs\\pages\\index.js?entry';


var Index = function Index(props) {
	return _react2.default.createElement(_Layout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('p', {
		className: 'jsx-18725696',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, 'My Blog Posts'), _react2.default.createElement('ul', {
		className: 'jsx-18725696',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, props.shows.map(function (_ref) {
		var show = _ref.show;
		return _react2.default.createElement('li', { key: show.id, className: 'jsx-18725696',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}, _react2.default.createElement(_PostLink2.default, { data: show, __source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		}));
	})), _react2.default.createElement(_style2.default, {
		styleId: '18725696',
		css: 'h1.jsx-18725696,a.jsx-18725696{font-family:"Arial";}ul.jsx-18725696{padding:0;}li.jsx-18725696{list-style:none;margin:5px 0;}a.jsx-18725696{text-decoration:none;color:blue;}a.jsx-18725696:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjaUIsQUFHOEIsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLENBYWEsUUFKYixHQUtBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9sZWFybi1yZWFjdC9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgUG9zdExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0TGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcblx0PExheW91dD5cclxuXHRcdDxwPk15IEJsb2cgUG9zdHM8L3A+XHJcblx0XHQ8dWw+XHJcblx0XHRcdHtwcm9wcy5zaG93cy5tYXAoKHtzaG93fSkgPT4gKFxyXG5cdFx0XHRcdDxsaSBrZXk9e3Nob3cuaWR9PlxyXG5cdFx0XHRcdFx0PFBvc3RMaW5rIGRhdGE9e3Nob3d9IC8+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L3VsPlxyXG5cdCAgICA8c3R5bGUganN4PntgXHJcblx0ICAgICAgaDEsIGEge1xyXG5cdCAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHVsIHtcclxuXHQgICAgICAgIHBhZGRpbmc6IDA7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBsaSB7XHJcblx0ICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cdCAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIGEge1xyXG5cdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdCAgICAgICAgY29sb3I6IGJsdWU7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBhOmhvdmVyIHtcclxuXHQgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuXHQgICAgICB9XHJcblx0ICAgIGB9PC9zdHlsZT5cclxuXHQ8L0xheW91dD5cclxuKVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cdGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZCwgQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHNob3dzOmRhdGFcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages\\index.js?entry */'
	}));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	var res, data;
	return _regenerator2.default.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

				case 2:
					res = _context.sent;
					_context.next = 5;
					return res.json();

				case 5:
					data = _context.sent;

					console.log('Show data fetched, Count: ' + data.length);

					return _context.abrupt('return', {
						shows: data
					});

				case 8:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJQb3N0TGluayIsImZldGNoIiwiSW5kZXgiLCJwcm9wcyIsInNob3dzIiwibWFwIiwic2hvdyIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFEO3dCQUNiLEFBQUM7O2FBQUQ7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQURELEFBQ0MsQUFDQSxrQ0FBQSxjQUFBO2FBQUE7O2FBQUE7ZUFBQSxBQUNFO0FBREY7QUFBQSxVQUNFLEFBQU0sTUFBTixBQUFZLElBQUksZ0JBQUE7TUFBQSxBQUFFLFlBQUYsQUFBRTt5QkFDbEIsY0FBQSxRQUFJLEtBQUssS0FBVCxBQUFjLGVBQWQ7O2NBQUE7Z0JBQUEsQUFDQztBQUREO0dBQUEsa0JBQ0MsQUFBQyxvQ0FBUyxNQUFWLEFBQWdCO2NBQWhCO2dCQUZlLEFBQ2hCLEFBQ0M7QUFBQTs7QUFMSixBQUVDLEFBQ0U7V0FISDtPQURhLEFBQ2I7QUFBQTtBQUREOztBQW9DQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1VBQUE7K0RBQUE7WUFBQTtvQ0FBQTtTQUFBO3FCQUFBO1lBQ0wsaUNBREssQUFDTCxBQUFNOztTQUFsQjtBQURpQixvQkFBQTtxQkFBQTtZQUVKLElBRkksQUFFSixBQUFJOztTQUFqQjtBQUZpQixxQkFHdkI7O2FBQUEsQUFBUSxtQ0FBaUMsS0FIbEIsQUFHdkIsQUFBOEM7OzthQUh2QixBQUtoQixBQUNBO0FBREEsQUFDTjs7U0FOc0I7U0FBQTtxQkFBQTs7QUFBQTthQUFBO0FBQXhCLEFBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvbGVhcm4tcmVhY3QvbmV4dGpzIn0=