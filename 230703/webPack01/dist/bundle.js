(() => {
  var e = {
      726: (e) => {
        e.exports = { name: "문자임" };
      },
    },
    r = {};
  function t(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var a = (r[o] = { exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (() => {
    const e = t(726);
    console.log(e.name),
      ReactDOM.createRoot(document.querySelector("#root")).render(
        React.createElement("div", null, e.name)
      );
  })();
})();
