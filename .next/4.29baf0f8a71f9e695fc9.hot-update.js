webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent__ = __webpack_require__("./node_modules/superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_superagent__);
var _jsxFileName = "/Users/cr/Documents/GitHub/street/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      photos: [],
      slideCount: 0
    };
    _this.nextImage = _this.nextImage.bind(_assertThisInitialized(_this));
    _this.previousImage = _this.previousImage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchPhotos();
    }
  }, {
    key: "fetchPhotos",
    value: function fetchPhotos() {
      var _this2 = this;

      var access_token = '3437315836.709c521.fb10cbf083df485b85c08d5b9ecc86fb';
      __WEBPACK_IMPORTED_MODULE_1_superagent___default.a.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token).then(function (res) {
        _this2.setState({
          photos: res.body.data
        });
      });
    }
  }, {
    key: "nextImage",
    value: function nextImage() {
      this.setState({
        slideCount: this.state.slideCount + 1
      });
    }
  }, {
    key: "previousImage",
    value: function previousImage() {
      this.setState({
        slideCount: this.state.slideCount - 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var BackArrow = function BackArrow(props) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          onClick: props.previousImage,
          style: {
            fontSize: '2em',
            marginRight: '12px',
            height: '40px',
            width: '40px',
            background: 'black'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      };

      var NextArrow = function NextArrow(props) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          onClick: props.nextImage,
          style: {
            fontSize: '2em',
            marginLeft: '12px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.state.slideCount !== 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BackArrow, {
        previousImage: this.previousImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }) : '', this.state.photos.map(function (photo, key) {
        if (_this3.state.photos.indexOf(photo) === _this3.state.slideCount) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            key: photo.id,
            style: {
              margin: '0 auto'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            src: photo.images.standard_resolution.url,
            alt: photo.caption,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              width: '600px',
              margin: '24px auto',
              fontStyle: 'italic'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }, photo.caption !== null ? photo.caption.text : ''));
        }

        return '';
      }), this.state.slideCount !== this.state.photos.length - 1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NextArrow, {
        nextImage: this.nextImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }) : '', console.log(this.state.photos), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BackArrow, {
        previousImage: this.previousImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NextArrow, {
        nextImage: this.nextImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.29baf0f8a71f9e695fc9.hot-update.js.map