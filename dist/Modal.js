"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Modal = function Modal(_ref) {
  var _children$body, _children$body2;
  var modalId = _ref.modalId,
    modalName = _ref.modalName,
    ariaLabel = _ref.ariaLabel,
    headerBackground = _ref.headerBackground,
    headerTitle = _ref.headerTitle,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children,
    draggable = _ref.draggable,
    innerBackground = _ref.innerBackground,
    innerColor = _ref.innerColor;
  var _useState = (0, _react.useState)(isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dragging = _useState4[0],
    setDragging = _useState4[1];
  var _useState5 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    pos = _useState6[0],
    setPos = _useState6[1];
  var _useState7 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    offset = _useState8[0],
    setOffset = _useState8[1];
  (0, _react.useEffect)(function () {
    setShow(isOpen);
  }, [isOpen]);
  var handleClose = function handleClose() {
    setShow(false);
    onClose();
  };
  var handleMouseDown = function handleMouseDown(e) {
    if (draggable) {
      setDragging(true);
      setOffset({
        x: e.clientX - pos.x,
        y: e.clientY - pos.y
      });
    }
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (dragging) {
      setPos({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      });
    }
  };
  var handleMouseUp = function handleMouseUp() {
    if (draggable) {
      setDragging(false);
    }
  };
  if (!show) return null;
  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: modalId,
    className: "modal ".concat(modalName),
    tabIndex: -1,
    role: "dialog",
    "aria-hidden": "false",
    "aria-label": ariaLabel,
    style: {
      transform: "translate(".concat(pos.x, "px, ").concat(pos.y, "px)")
    },
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-inner",
    tabIndex: 0,
    style: {
      background: innerBackground,
      color: innerColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header",
    style: {
      background: headerBackground
    }
  }, headerTitle && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, headerTitle), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close-button",
    "data-dismiss": "modal",
    "aria-label": "Dismiss the modal",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, (children === null || children === void 0 ? void 0 : (_children$body = children.body) === null || _children$body === void 0 ? void 0 : _children$body.icon) && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-icon ".concat(children.body.icon)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-message"
  }, children === null || children === void 0 ? void 0 : (_children$body2 = children.body) === null || _children$body2 === void 0 ? void 0 : _children$body2.children)), (children === null || children === void 0 ? void 0 : children.footer) && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer clearfix"
  }, children.footer)))), document.body);
};
var _default = Modal;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNb2RhbCIsIm1vZGFsSWQiLCJtb2RhbE5hbWUiLCJhcmlhTGFiZWwiLCJoZWFkZXJCYWNrZ3JvdW5kIiwiaGVhZGVyVGl0bGUiLCJpc09wZW4iLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJkcmFnZ2FibGUiLCJpbm5lckJhY2tncm91bmQiLCJpbm5lckNvbG9yIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJ4IiwieSIsInBvcyIsInNldFBvcyIsIm9mZnNldCIsInNldE9mZnNldCIsInVzZUVmZmVjdCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlTW91c2VEb3duIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwidHJhbnNmb3JtIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9keSIsImljb24iLCJmb290ZXIiLCJkb2N1bWVudCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBcIi4vTW9kYWwuY3NzXCI7XG5cbmludGVyZmFjZSBNb2RhbFByb3BzIHtcbiAgbW9kYWxJZDogc3RyaW5nO1xuICBtb2RhbE5hbWU6IHN0cmluZztcbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuICBoZWFkZXJCYWNrZ3JvdW5kPzogc3RyaW5nO1xuICBoZWFkZXJUaXRsZT86IHN0cmluZztcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBjaGlsZHJlbjoge1xuICAgIGJvZHk6IHtcbiAgICAgIGljb24/OiBzdHJpbmc7XG4gICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICAgICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICB9O1xuICAgIGZvb3Rlcj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgfTtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgaW5uZXJCYWNrZ3JvdW5kPzogc3RyaW5nO1xuICBpbm5lckNvbG9yPzogc3RyaW5nO1xufVxuXG5jb25zdCBNb2RhbDogUmVhY3QuRkM8TW9kYWxQcm9wcz4gPSAoe1xuICBtb2RhbElkLFxuICBtb2RhbE5hbWUsXG4gIGFyaWFMYWJlbCxcbiAgaGVhZGVyQmFja2dyb3VuZCxcbiAgaGVhZGVyVGl0bGUsXG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbiAgY2hpbGRyZW4sXG4gIGRyYWdnYWJsZSxcbiAgaW5uZXJCYWNrZ3JvdW5kLFxuICBpbm5lckNvbG9yLFxufSkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShpc09wZW4pO1xuICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bvcywgc2V0UG9zXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNob3coaXNPcGVuKTtcbiAgfSwgW2lzT3Blbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldFNob3coZmFsc2UpO1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZHJhZ2dhYmxlKSB7XG4gICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgIHNldE9mZnNldCh7IHg6IGUuY2xpZW50WCAtIHBvcy54LCB5OiBlLmNsaWVudFkgLSBwb3MueSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBzZXRQb3MoeyB4OiBlLmNsaWVudFggLSBvZmZzZXQueCwgeTogZS5jbGllbnRZIC0gb2Zmc2V0LnkgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgaWYgKGRyYWdnYWJsZSkge1xuICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXttb2RhbElkfVxuICAgICAgICBjbGFzc05hbWU9e2Btb2RhbCAke21vZGFsTmFtZX1gfVxuICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtwb3MueH1weCwgJHtwb3MueX1weClgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWlubmVyXCJcbiAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBpbm5lckJhY2tncm91bmQsIGNvbG9yOiBpbm5lckNvbG9yIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogaGVhZGVyQmFja2dyb3VuZCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJUaXRsZSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgxPntoZWFkZXJUaXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEaXNtaXNzIHRoZSBtb2RhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge2NoaWxkcmVuPy5ib2R5Py5pY29uICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbC1pY29uICR7Y2hpbGRyZW4uYm9keS5pY29ufWB9PjwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtbWVzc2FnZVwiPntjaGlsZHJlbj8uYm9keT8uY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Y2hpbGRyZW4/LmZvb3RlciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciBjbGVhcmZpeFwiPntjaGlsZHJlbi5mb290ZXJ9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4sXG4gICAgZG9jdW1lbnQuYm9keVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJyQixJQUFNQSxLQUEyQixHQUFHLFNBQTlCQSxLQUEyQixPQVkzQjtFQUFBO0VBQUEsSUFYSkMsT0FBTyxRQUFQQSxPQUFPO0lBQ1BDLFNBQVMsUUFBVEEsU0FBUztJQUNUQyxTQUFTLFFBQVRBLFNBQVM7SUFDVEMsZ0JBQWdCLFFBQWhCQSxnQkFBZ0I7SUFDaEJDLFdBQVcsUUFBWEEsV0FBVztJQUNYQyxNQUFNLFFBQU5BLE1BQU07SUFDTkMsT0FBTyxRQUFQQSxPQUFPO0lBQ1BDLFFBQVEsUUFBUkEsUUFBUTtJQUNSQyxTQUFTLFFBQVRBLFNBQVM7SUFDVEMsZUFBZSxRQUFmQSxlQUFlO0lBQ2ZDLFVBQVUsUUFBVkEsVUFBVTtFQUVWLGdCQUF3QixJQUFBQyxlQUFRLEVBQUNOLE1BQU0sQ0FBQztJQUFBO0lBQWpDTyxJQUFJO0lBQUVDLE9BQU87RUFDcEIsaUJBQWdDLElBQUFGLGVBQVEsRUFBQyxLQUFLLENBQUM7SUFBQTtJQUF4Q0csUUFBUTtJQUFFQyxXQUFXO0VBQzVCLGlCQUFzQixJQUFBSixlQUFRLEVBQUM7TUFBRUssQ0FBQyxFQUFFLENBQUM7TUFBRUMsQ0FBQyxFQUFFO0lBQUUsQ0FBQyxDQUFDO0lBQUE7SUFBdkNDLEdBQUc7SUFBRUMsTUFBTTtFQUNsQixpQkFBNEIsSUFBQVIsZUFBUSxFQUFDO01BQUVL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