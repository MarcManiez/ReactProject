"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentActivity: null,
      data: null // this is where we store the result of our ajax call
    };
    return _this;
  }

  _createClass(App, [{
    key: "fetch",
    value: function fetch(criteria, callback) {
      getData(criteria, callback);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.setState({
        data: data.places,
        currentActivity: data.places[0]
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetch({}, this.setData.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Search, null),
        React.createElement(MainView, null),
        React.createElement(ActivityList, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRBY3Rpdml0eSIsImRhdGEiLCJjcml0ZXJpYSIsImNhbGxiYWNrIiwiZ2V0RGF0YSIsInNldFN0YXRlIiwicGxhY2VzIiwiZmV0Y2giLCJzZXREYXRhIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQixJQUROO0FBRVhDLFlBQU0sSUFGSyxDQUVlO0FBRmYsS0FBYjtBQUZpQjtBQU1sQjs7OzswQkFDS0MsUSxFQUFVQyxRLEVBQVU7QUFDeEJDLGNBQVFGLFFBQVIsRUFBa0JDLFFBQWxCO0FBQ0Q7Ozs0QkFDT0YsSSxFQUFNO0FBQ1osV0FBS0ksUUFBTCxDQUFjO0FBQ1pKLGNBQU1BLEtBQUtLLE1BREM7QUFFWk4seUJBQWlCQyxLQUFLSyxNQUFMLENBQVksQ0FBWjtBQUZMLE9BQWQ7QUFJRDs7O3dDQUNtQjtBQUNsQixXQUFLQyxLQUFMLENBQVcsRUFBWCxFQUFlLEtBQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxPQURGO0FBRUUsNEJBQUMsUUFBRCxPQUZGO0FBR0UsNEJBQUMsWUFBRDtBQUhGLE9BREY7QUFPRDs7OztFQTVCZUMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudEFjdGl2aXR5OiBudWxsLFxuICAgICAgZGF0YTogbnVsbCAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHdoZXJlIHdlIHN0b3JlIHRoZSByZXN1bHQgb2Ygb3VyIGFqYXggY2FsbFxuICAgIH1cbiAgfVxuICBmZXRjaChjcml0ZXJpYSwgY2FsbGJhY2spIHtcbiAgICBnZXREYXRhKGNyaXRlcmlhLCBjYWxsYmFjayk7XG4gIH1cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBkYXRhLnBsYWNlcyxcbiAgICAgIGN1cnJlbnRBY3Rpdml0eTogZGF0YS5wbGFjZXNbMF1cbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoKHt9LCB0aGlzLnNldERhdGEuYmluZCh0aGlzKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgIDxNYWluVmlldyAvPlxuICAgICAgICA8QWN0aXZpdHlMaXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=