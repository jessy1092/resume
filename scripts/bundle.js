webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(171),_reactDom2=_interopRequireDefault(_reactDom),_src=__webpack_require__(494),_src2=_interopRequireDefault(_src),_store=__webpack_require__(498),_store2=_interopRequireDefault(_store);_reactDom2.default.render(_react2.default.createElement(_src2.default,{store:(0,_store2.default)(window.__state__)}),document.getElementById("content"));

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function resiveResume(e){return{type:RESIVE_RESUME,resume:e}}function fetchResume(){return function(e){return(0,_isomorphicFetch2.default)("/data/resume.json").then(function(e){return e.json()},function(e){return console.log(e)}).then(function(t){return e(resiveResume(t))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.RESIVE_RESUME=void 0,exports.resiveResume=resiveResume,exports.fetchResume=fetchResume;var _isomorphicFetch=__webpack_require__(169),_isomorphicFetch2=_interopRequireDefault(_isomorphicFetch),RESIVE_RESUME=exports.RESIVE_RESUME="RESIVE_RESUME";

/***/ },

/***/ 388:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___13K1V","name":"index__name___3xAuI","summary":"index__summary___4U2hs","profileSection":"index__profileSection___20vUX"};

/***/ },

/***/ 389:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___wj9Sk"};

/***/ },

/***/ 390:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___3QuKh","name":"index__name___3uVM_","detailSection":"index__detailSection___2AHCk","studyType":"index__studyType___2mgJg","institution":"index__institution___eczwN"};

/***/ },

/***/ 391:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___3Ox7S"};

/***/ },

/***/ 392:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___2jECM","name":"index__name___2m9v4","detailSection":"index__detailSection___2Q0sm","projectName":"index__projectName___36167","category":"index__category___3IIBe"};

/***/ },

/***/ 393:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___2qJnI","name":"index__name___1Kmyz","detailSection":"index__detailSection___TdYIU","skillName":"index__skillName___1uqY4","keyword":"index__keyword___1yUAI"};

/***/ },

/***/ 394:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___2YKFP","name":"index__name___2WSJ6","detailSection":"index__detailSection___3uz4u","position":"index__position___2D1W_","organization":"index__organization___1yV4b"};

/***/ },

/***/ 395:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___3vmnZ","name":"index__name___2wKQq","detailSection":"index__detailSection___1x3H-","detailContentSection":"index__detailContentSection___kwFFl","keyword":"index__keyword___2Z2Vl","position":"index__position___1oIwh","company":"index__company___1QOhb"};

/***/ },

/***/ 396:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 397:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"section":"index__section___2h2Ze"};

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(388),_index2=_interopRequireDefault(_index),socialIcon={github:"fa fa-github",linkedin:"fa fa-linkedin",twitter:"fa fa-twitter"},ProfileSection=function(e){var t=e.profiles,a=void 0===t?[]:t;return _react2.default.createElement("div",{className:_index2.default.profileSection},a.map(function(e){return _react2.default.createElement("div",{key:e.network},_react2.default.createElement("a",{href:e.url,target:"_blank"},e.username)," @ ",_react2.default.createElement("i",{className:socialIcon[e.network]}))}),_react2.default.createElement("div",null,_react2.default.createElement("a",{href:"mailto:jessy1092@gmail.com"},"jessy1092")," @ gmail.com"))},About=function(e){var t=e.data;return _react2.default.createElement("section",{className:_index2.default.section},_react2.default.createElement("div",null,_react2.default.createElement("h2",{className:_index2.default.name},"關於")),_react2.default.createElement("div",null,_react2.default.createElement("div",{className:_index2.default.summary},t.summary),_react2.default.createElement(ProfileSection,t)))};exports.default=About;

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(389),_index2=_interopRequireDefault(_index),Divider=function(){return _react2.default.createElement("div",{className:_index2.default.section})};exports.default=Divider;

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(390),_index2=_interopRequireDefault(_index),EducationDetail=function(e){var t=e.studyType,a=e.institution,l=e.startDate,n=e.endDate,r=e.area;return _react2.default.createElement("div",null,_react2.default.createElement("section",{className:_index2.default.detailSection},_react2.default.createElement("div",{className:_index2.default.studyType},t),_react2.default.createElement("div",{className:_index2.default.institution},a)),_react2.default.createElement("div",null,l+" ~ "+n),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,r)))},EducationSection=function(e){var t=e.data;return _react2.default.createElement("section",{className:_index2.default.section},_react2.default.createElement("div",null,_react2.default.createElement("h2",{className:_index2.default.name},"學歷")),_react2.default.createElement("div",null,t.length>0?_react2.default.createElement(EducationDetail,t[1]):""))};exports.default=EducationSection;

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(391),_index2=_interopRequireDefault(_index),Header=function(){return _react2.default.createElement("div",{className:_index2.default.section},_react2.default.createElement("h1",null,"李俊緯 Jessy Lee"))};exports.default=Header;

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},_react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(392),_index2=_interopRequireDefault(_index),ProjectDetail=function(e){var t=e.name,a=e.category,r=e.website,l=e.startDate,n=e.endDate,c=e.highlights,u=e.summary;return _react2.default.createElement("div",null,_react2.default.createElement("section",{className:_index2.default.detailSection},_react2.default.createElement("div",null,_react2.default.createElement("a",{className:_index2.default.projectName,href:r},t)),_react2.default.createElement("div",{className:_index2.default.category},a)),_react2.default.createElement("div",null,l+" ~ "+n),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,"簡介： "+u),_react2.default.createElement("li",null,"貢獻： "+c)))},ProjectSection=function(e){var t=e.data;return _react2.default.createElement("section",{className:_index2.default.section},_react2.default.createElement("div",null,_react2.default.createElement("h2",{className:_index2.default.name},"專案")),_react2.default.createElement("div",null,t.map(function(e,t){return _react2.default.createElement(ProjectDetail,_extends({key:e.name},e))})))};exports.default=ProjectSection;

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(393),_index2=_interopRequireDefault(_index),SkillDetail=function(e){var t=e.data;return _react2.default.createElement("section",{className:_index2.default.detailSection},t.map(function(e){return _react2.default.createElement("div",{key:e.name},_react2.default.createElement("div",{className:_index2.default.skillName},e.name),_react2.default.createElement("div",null,e.level),e.keywords.map(function(e){return _react2.default.createElement("div",{key:e,className:_index2.default.keyword},e)}))}))},SkillSection=function(e){var t=e.data;return _react2.default.createElement("section",{className:_index2.default.section},_react2.default.createElement("div",null,_react2.default.createElement("h2",{className:_index2.default.name},"技能")),_react2.default.createElement("div",null,_react2.default.createElement(SkillDetail,{data:t})))};exports.default=SkillSection;

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},_react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(394),_index2=_interopRequireDefault(_index),VolunteerDetail=function(e){var t=e.organization,a=e.position,r=e.startDate,n=e.endDate,l=e.highlights,i=e.website;return _react2.default.createElement("div",null,_react2.default.createElement("section",{className:_index2.default.detailSection},_react2.default.createElement("div",{className:_index2.default.position},a),_react2.default.createElement("div",{className:_index2.default.organization},_react2.default.createElement("a",{href:i,target:"_blank"},t))),_react2.default.createElement("div",null,r+" ~ "+n),_react2.default.createElement("ul",null,l.map(function(e,t){if(t<3)return _react2.default.createElement("li",{key:t},e)})))},VolunteerSection=function(e){var t=e.data;return _react2.default.createElement("section",{className:_index2.default.section},_react2.default.createElement("div",null,_react2.default.createElement("h2",{className:_index2.default.name},"社群")),_react2.default.createElement("div",null,t.map(function(e){return _react2.default.createElement(VolunteerDetail,_extends({key:e.organization},e))})))};exports.default=VolunteerSection;

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_index=__webpack_require__(395),_index2=_interopRequireDefault(_index),WorkDetail=function(e){var t=e.company,a=e.position,n=e.startDate,l=e.endDate,r=e.highlights;return _react2.default.createElement("div",null,_react2.default.createElement("section",{className:_index2.default.detailSection},_react2.default.createElement("div",{className:_index2.default.position},a),_react2.default.createElement("div",{className:_index2.default.company},t)),_react2.default.createElement("div",null,n+" ~ "+l),r.map(function(e,t){if(t<=3)return _react2.default.createElement("section",{className:_index2.default.detailContentSection,key:t},_react2.default.createElement("div",null,_react2.default.createElement("ul",null,_react2.default.createElement("li",{key:t},e.content))),_react2.default.createElement("div",null,e.label.map(function(e,t){return _react2.default.createElement("div",{className:_index2.default.keyword,key:t},e)})))}))},WorkSection=function(e){var t=e.data;return _react2.default.createElement("section",{className:_index2.default.section},_react2.default.createElement("div",null,_react2.default.createElement("h2",{className:_index2.default.name},"經歷")),_react2.default.createElement("div",null,t.length>0?_react2.default.createElement(WorkDetail,_extends({key:t[0].company},t[0])):""))};exports.default=WorkSection;

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_IndexPage=__webpack_require__(495),_IndexPage2=_interopRequireDefault(_IndexPage),_Provider=__webpack_require__(499),_Provider2=_interopRequireDefault(_Provider),_index=__webpack_require__(396),_index2=_interopRequireDefault(_index),App=function(e){var r=e.store;return _react2.default.createElement(_Provider2.default,{store:r},_react2.default.createElement(_IndexPage2.default,null))};exports.default=App;

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(24),_react2=_interopRequireDefault(_react),_actions=__webpack_require__(205),_WorkSection=__webpack_require__(493),_WorkSection2=_interopRequireDefault(_WorkSection),_ProjectSection=__webpack_require__(490),_ProjectSection2=_interopRequireDefault(_ProjectSection),_VolunteerSection=__webpack_require__(492),_VolunteerSection2=_interopRequireDefault(_VolunteerSection),_EducationSection=__webpack_require__(488),_EducationSection2=_interopRequireDefault(_EducationSection),_SkillSection=__webpack_require__(491),_SkillSection2=_interopRequireDefault(_SkillSection),_Header=__webpack_require__(489),_Header2=_interopRequireDefault(_Header),_Divider=__webpack_require__(487),_Divider2=_interopRequireDefault(_Divider),_About=__webpack_require__(486),_About2=_interopRequireDefault(_About),_index=__webpack_require__(397),_index2=_interopRequireDefault(_index),IndexPage=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"componentDidMount",value:function(){var e=this,t=this.context.store;this.unsubscribe=t.subscribe(function(){return e.forceUpdate()}),t.dispatch((0,_actions.fetchResume)())}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.context.store,t=e.getState().resume,r=t.work,n=void 0===r?[]:r,o=t.projects,i=void 0===o?[]:o,a=t.volunteer,u=void 0===a?[]:a,c=t.education,l=void 0===c?[]:c,_=t.skills,d=void 0===_?[]:_,s=t.basics,f=void 0===s?{}:s;return _react2.default.createElement("section",{className:_index2.default.section},_react2.default.createElement(_Header2.default,null),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_About2.default,{data:f}),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_WorkSection2.default,{data:n}),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_ProjectSection2.default,{data:i}),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_VolunteerSection2.default,{data:u}),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_EducationSection2.default,{data:l}),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_SkillSection2.default,{data:d}))}}]),t}(_react2.default.Component);IndexPage.contextTypes={store:_react2.default.PropTypes.object},exports.default=IndexPage;

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _redux=__webpack_require__(136),_resume=__webpack_require__(497),_resume2=_interopRequireDefault(_resume),reducers=(0,_redux.combineReducers)({resume:_resume2.default});exports.default=reducers;

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function resume(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case _actions.RESIVE_RESUME:return t.resume;default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=resume;var _actions=__webpack_require__(205);

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function configureStore(e){return(0,_redux.createStore)(_reducers2.default,e,(0,_redux.applyMiddleware)(_reduxThunk2.default))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=configureStore;var _redux=__webpack_require__(136),_reduxThunk=__webpack_require__(201),_reduxThunk2=_interopRequireDefault(_reduxThunk),_reducers=__webpack_require__(496),_reducers2=_interopRequireDefault(_reducers);

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(24),_react2=_interopRequireDefault(_react),Provider=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"getChildContext",value:function(){return{store:this.props.store}}},{key:"render",value:function(){return this.props.children}}]),t}(_react2.default.Component);Provider.childContextTypes={store:_react2.default.PropTypes.object},exports.default=Provider;

/***/ }

});
//# sourceMappingURL=bundle.js.map