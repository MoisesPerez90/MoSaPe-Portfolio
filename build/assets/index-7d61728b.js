(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
var Ih =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pf = { exports: {} },
  Ei = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var cc = Object.getOwnPropertySymbols,
  zh = Object.prototype.hasOwnProperty,
  Rh = Object.prototype.propertyIsEnumerable;
function Fh(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function $h() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var i = Object.getOwnPropertyNames(t).map(function (s) {
      return t[s];
    });
    if (i.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (s) {
        o[s] = s;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Lf = $h()
    ? Object.assign
    : function (e, t) {
        for (var n, i = Fh(e), o, s = 1; s < arguments.length; s++) {
          n = Object(arguments[s]);
          for (var a in n) zh.call(n, a) && (i[a] = n[a]);
          if (cc) {
            o = cc(n);
            for (var c = 0; c < o.length; c++)
              Rh.call(n, o[c]) && (i[o[c]] = n[o[c]]);
          }
        }
        return i;
      },
  Af = { exports: {} },
  te = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bs = Lf,
  hr = 60103,
  Df = 60106;
te.Fragment = 60107;
te.StrictMode = 60108;
te.Profiler = 60114;
var Mf = 60109,
  If = 60110,
  zf = 60112;
te.Suspense = 60113;
var Rf = 60115,
  Ff = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var dt = Symbol.for;
  (hr = dt("react.element")),
    (Df = dt("react.portal")),
    (te.Fragment = dt("react.fragment")),
    (te.StrictMode = dt("react.strict_mode")),
    (te.Profiler = dt("react.profiler")),
    (Mf = dt("react.provider")),
    (If = dt("react.context")),
    (zf = dt("react.forward_ref")),
    (te.Suspense = dt("react.suspense")),
    (Rf = dt("react.memo")),
    (Ff = dt("react.lazy"));
}
var fc = typeof Symbol == "function" && Symbol.iterator;
function Uh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fc && e[fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function ki(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $f = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Uf = {};
function mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || $f);
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(ki(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bf() {}
Bf.prototype = mr.prototype;
function Hs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || $f);
}
var Vs = (Hs.prototype = new Bf());
Vs.constructor = Hs;
Bs(Vs, mr.prototype);
Vs.isPureReactComponent = !0;
var Ws = { current: null },
  Hf = Object.prototype.hasOwnProperty,
  Vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var i,
    o = {},
    s = null,
    a = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Hf.call(t, i) && !Vf.hasOwnProperty(i) && (o[i] = t[i]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var d = Array(c), y = 0; y < c; y++) d[y] = arguments[y + 2];
    o.children = d;
  }
  if (e && e.defaultProps)
    for (i in ((c = e.defaultProps), c)) o[i] === void 0 && (o[i] = c[i]);
  return {
    $$typeof: hr,
    type: e,
    key: s,
    ref: a,
    props: o,
    _owner: Ws.current,
  };
}
function Bh(e, t) {
  return {
    $$typeof: hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hr;
}
function Hh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dc = /\/+/g;
function Ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Hh("" + e.key)
    : t.toString(36);
}
function uo(e, t, n, i, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hr:
          case Df:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = i === "" ? "." + Ll(a, 0) : i),
      Array.isArray(o)
        ? ((n = ""),
          e != null && (n = e.replace(dc, "$&/") + "/"),
          uo(o, t, n, "", function (y) {
            return y;
          }))
        : o != null &&
          (Qs(o) &&
            (o = Bh(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(dc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (i = i === "" ? "." : i + ":"), Array.isArray(e)))
    for (var c = 0; c < e.length; c++) {
      s = e[c];
      var d = i + Ll(s, c);
      a += uo(s, t, n, d, o);
    }
  else if (((d = Uh(e)), typeof d == "function"))
    for (e = d.call(e), c = 0; !(s = e.next()).done; )
      (s = s.value), (d = i + Ll(s, c++)), (a += uo(s, t, n, d, o));
  else if (s === "object")
    throw (
      ((t = "" + e),
      Error(
        ki(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return a;
}
function Gi(e, t, n) {
  if (e == null) return e;
  var i = [],
    o = 0;
  return (
    uo(e, i, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    i
  );
}
function Vh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 &&
            ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var Qf = { current: null };
function Mt() {
  var e = Qf.current;
  if (e === null) throw Error(ki(321));
  return e;
}
var Wh = {
  ReactCurrentDispatcher: Qf,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Ws,
  IsSomeRendererActing: { current: !1 },
  assign: Bs,
};
te.Children = {
  map: Gi,
  forEach: function (e, t, n) {
    Gi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qs(e)) throw Error(ki(143));
    return e;
  },
};
te.Component = mr;
te.PureComponent = Hs;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
te.cloneElement = function (e, t, n) {
  if (e == null) throw Error(ki(267, e));
  var i = Bs({}, e.props),
    o = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Ws.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (d in t)
      Hf.call(t, d) &&
        !Vf.hasOwnProperty(d) &&
        (i[d] = t[d] === void 0 && c !== void 0 ? c[d] : t[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) i.children = n;
  else if (1 < d) {
    c = Array(d);
    for (var y = 0; y < d; y++) c[y] = arguments[y + 2];
    i.children = c;
  }
  return { $$typeof: hr, type: e.type, key: o, ref: s, props: i, _owner: a };
};
te.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: If,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: Mf, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = Wf;
te.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return (t.type = e), t;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: zf, render: e };
};
te.isValidElement = Qs;
te.lazy = function (e) {
  return { $$typeof: Ff, _payload: { _status: -1, _result: e }, _init: Vh };
};
te.memo = function (e, t) {
  return { $$typeof: Rf, type: e, compare: t === void 0 ? null : t };
};
te.useCallback = function (e, t) {
  return Mt().useCallback(e, t);
};
te.useContext = function (e, t) {
  return Mt().useContext(e, t);
};
te.useDebugValue = function () {};
te.useEffect = function (e, t) {
  return Mt().useEffect(e, t);
};
te.useImperativeHandle = function (e, t, n) {
  return Mt().useImperativeHandle(e, t, n);
};
te.useLayoutEffect = function (e, t) {
  return Mt().useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return Mt().useMemo(e, t);
};
te.useReducer = function (e, t, n) {
  return Mt().useReducer(e, t, n);
};
te.useRef = function (e) {
  return Mt().useRef(e);
};
te.useState = function (e) {
  return Mt().useState(e);
};
te.version = "17.0.2";
Af.exports = te;
var jt = Af.exports;
const kn = Of(jt);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh = jt,
  Yf = 60103;
Ei.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var pc = Symbol.for;
  (Yf = pc("react.element")), (Ei.Fragment = pc("react.fragment"));
}
var Yh =
    Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kh = Object.prototype.hasOwnProperty,
  Xh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
  var i,
    o = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (i in t) Kh.call(t, i) && !Xh.hasOwnProperty(i) && (o[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) o[i] === void 0 && (o[i] = t[i]);
  return {
    $$typeof: Yf,
    type: e,
    key: s,
    ref: a,
    props: o,
    _owner: Yh.current,
  };
}
Ei.jsx = Kf;
Ei.jsxs = Kf;
Pf.exports = Ei;
var _ = Pf.exports,
  Xf = { exports: {} },
  at = {},
  qf = { exports: {} },
  Gf = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, i, o;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      c = a.now();
    e.unstable_now = function () {
      return a.now() - c;
    };
  }
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var d = null,
      y = null,
      T = function () {
        if (d !== null)
          try {
            var O = e.unstable_now();
            d(!0, O), (d = null);
          } catch (F) {
            throw (setTimeout(T, 0), F);
          }
      };
    (t = function (O) {
      d !== null ? setTimeout(t, 0, O) : ((d = O), setTimeout(T, 0));
    }),
      (n = function (O, F) {
        y = setTimeout(O, F);
      }),
      (i = function () {
        clearTimeout(y);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var $ = window.setTimeout,
      k = window.clearTimeout;
    if (typeof console < "u") {
      var L = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof L != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var z = !1,
      I = null,
      h = -1,
      p = 5,
      g = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= g;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (O) {
        0 > O || 125 < O
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (p = 0 < O ? Math.floor(1e3 / O) : 5);
      });
    var x = new MessageChannel(),
      E = x.port2;
    (x.port1.onmessage = function () {
      if (I !== null) {
        var O = e.unstable_now();
        g = O + p;
        try {
          I(!0, O) ? E.postMessage(null) : ((z = !1), (I = null));
        } catch (F) {
          throw (E.postMessage(null), F);
        }
      } else z = !1;
    }),
      (t = function (O) {
        (I = O), z || ((z = !0), E.postMessage(null));
      }),
      (n = function (O, F) {
        h = $(function () {
          O(e.unstable_now());
        }, F);
      }),
      (i = function () {
        k(h), (h = -1);
      });
  }
  function B(O, F) {
    var X = O.length;
    O.push(F);
    e: for (;;) {
      var de = (X - 1) >>> 1,
        ge = O[de];
      if (ge !== void 0 && 0 < V(ge, F)) (O[de] = F), (O[X] = ge), (X = de);
      else break e;
    }
  }
  function j(O) {
    return (O = O[0]), O === void 0 ? null : O;
  }
  function U(O) {
    var F = O[0];
    if (F !== void 0) {
      var X = O.pop();
      if (X !== F) {
        O[0] = X;
        e: for (var de = 0, ge = O.length; de < ge; ) {
          var Ce = 2 * (de + 1) - 1,
            Ye = O[Ce],
            be = Ce + 1,
            ut = O[be];
          if (Ye !== void 0 && 0 > V(Ye, X))
            ut !== void 0 && 0 > V(ut, Ye)
              ? ((O[de] = ut), (O[be] = X), (de = be))
              : ((O[de] = Ye), (O[Ce] = X), (de = Ce));
          else if (ut !== void 0 && 0 > V(ut, X))
            (O[de] = ut), (O[be] = X), (de = be);
          else break e;
        }
      }
      return F;
    }
    return null;
  }
  function V(O, F) {
    var X = O.sortIndex - F.sortIndex;
    return X !== 0 ? X : O.id - F.id;
  }
  var R = [],
    _e = [],
    xr = 1,
    Me = null,
    we = 3,
    sn = !1,
    mt = !1,
    It = !1;
  function an(O) {
    for (var F = j(_e); F !== null; ) {
      if (F.callback === null) U(_e);
      else if (F.startTime <= O)
        U(_e), (F.sortIndex = F.expirationTime), B(R, F);
      else break;
      F = j(_e);
    }
  }
  function Er(O) {
    if (((It = !1), an(O), !mt))
      if (j(R) !== null) (mt = !0), t(Ln);
      else {
        var F = j(_e);
        F !== null && n(Er, F.startTime - O);
      }
  }
  function Ln(O, F) {
    (mt = !1), It && ((It = !1), i()), (sn = !0);
    var X = we;
    try {
      for (
        an(F), Me = j(R);
        Me !== null &&
        (!(Me.expirationTime > F) || (O && !e.unstable_shouldYield()));

      ) {
        var de = Me.callback;
        if (typeof de == "function") {
          (Me.callback = null), (we = Me.priorityLevel);
          var ge = de(Me.expirationTime <= F);
          (F = e.unstable_now()),
            typeof ge == "function" ? (Me.callback = ge) : Me === j(R) && U(R),
            an(F);
        } else U(R);
        Me = j(R);
      }
      if (Me !== null) var Ce = !0;
      else {
        var Ye = j(_e);
        Ye !== null && n(Er, Ye.startTime - F), (Ce = !1);
      }
      return Ce;
    } finally {
      (Me = null), (we = X), (sn = !1);
    }
  }
  var C = o;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      mt || sn || ((mt = !0), t(Ln));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return we;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return j(R);
    }),
    (e.unstable_next = function (O) {
      switch (we) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = we;
      }
      var X = we;
      we = F;
      try {
        return O();
      } finally {
        we = X;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = C),
    (e.unstable_runWithPriority = function (O, F) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var X = we;
      we = O;
      try {
        return F();
      } finally {
        we = X;
      }
    }),
    (e.unstable_scheduleCallback = function (O, F, X) {
      var de = e.unstable_now();
      switch (
        (typeof X == "object" && X !== null
          ? ((X = X.delay), (X = typeof X == "number" && 0 < X ? de + X : de))
          : (X = de),
        O)
      ) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return (
        (ge = X + ge),
        (O = {
          id: xr++,
          callback: F,
          priorityLevel: O,
          startTime: X,
          expirationTime: ge,
          sortIndex: -1,
        }),
        X > de
          ? ((O.sortIndex = X),
            B(_e, O),
            j(R) === null &&
              O === j(_e) &&
              (It ? i() : (It = !0), n(Er, X - de)))
          : ((O.sortIndex = ge), B(R, O), mt || sn || ((mt = !0), t(Ln))),
        O
      );
    }),
    (e.unstable_wrapCallback = function (O) {
      var F = we;
      return function () {
        var X = we;
        we = F;
        try {
          return O.apply(this, arguments);
        } finally {
          we = X;
        }
      };
    });
})(Gf);
qf.exports = Gf;
var qh = qf.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vo = jt,
  pe = Lf,
  Se = qh;
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!Vo) throw Error(b(227));
var Zf = new Set(),
  ai = {};
function Nn(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (ai[e] = t, e = 0; e < t.length; e++) Zf.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hc = Object.prototype.hasOwnProperty,
  mc = {},
  gc = {};
function Zh(e) {
  return hc.call(gc, e)
    ? !0
    : hc.call(mc, e)
    ? !1
    : Gh.test(e)
    ? (gc[e] = !0)
    : ((mc[e] = !0), !1);
}
function Jh(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function em(e, t, n, i) {
  if (t === null || typeof t > "u" || Jh(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, i, o, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ys = /[\-:]([a-z])/g;
function Ks(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ys, Ks);
    Oe[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ys, Ks);
    Oe[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ys, Ks);
  Oe[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xs(e, t, n, i) {
  var o = Oe.hasOwnProperty(t) ? Oe[t] : null,
    s =
      o !== null
        ? o.type === 0
        : i
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  s ||
    (em(t, n, o, i) && (n = null),
    i || o === null
      ? Zh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (i = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var jn = Vo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wr = 60103,
  yn = 60106,
  $t = 60107,
  qs = 60108,
  qr = 60114,
  Gs = 60109,
  Zs = 60110,
  Wo = 60112,
  Gr = 60113,
  xo = 60120,
  Qo = 60115,
  Js = 60116,
  ea = 60121,
  ta = 60128,
  Jf = 60129,
  na = 60130,
  ns = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ke = Symbol.for;
  (Wr = ke("react.element")),
    (yn = ke("react.portal")),
    ($t = ke("react.fragment")),
    (qs = ke("react.strict_mode")),
    (qr = ke("react.profiler")),
    (Gs = ke("react.provider")),
    (Zs = ke("react.context")),
    (Wo = ke("react.forward_ref")),
    (Gr = ke("react.suspense")),
    (xo = ke("react.suspense_list")),
    (Qo = ke("react.memo")),
    (Js = ke("react.lazy")),
    (ea = ke("react.block")),
    ke("react.scope"),
    (ta = ke("react.opaque.id")),
    (Jf = ke("react.debug_trace_mode")),
    (na = ke("react.offscreen")),
    (ns = ke("react.legacy_hidden"));
}
var vc = typeof Symbol == "function" && Symbol.iterator;
function Ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vc && e[vc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Al;
function Qr(e) {
  if (Al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Al = (t && t[1]) || "";
    }
  return (
    `
` +
    Al +
    e
  );
}
var Dl = !1;
function Zi(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var i = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          i = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        i = d;
      }
      e();
    }
  } catch (d) {
    if (d && i && typeof d.stack == "string") {
      for (
        var o = d.stack.split(`
`),
          s = i.stack.split(`
`),
          a = o.length - 1,
          c = s.length - 1;
        1 <= a && 0 <= c && o[a] !== s[c];

      )
        c--;
      for (; 1 <= a && 0 <= c; a--, c--)
        if (o[a] !== s[c]) {
          if (a !== 1 || c !== 1)
            do
              if ((a--, c--, 0 > c || o[a] !== s[c]))
                return (
                  `
` + o[a].replace(" at new ", " at ")
                );
            while (1 <= a && 0 <= c);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Qr(e) : "";
}
function tm(e) {
  switch (e.tag) {
    case 5:
      return Qr(e.type);
    case 16:
      return Qr("Lazy");
    case 13:
      return Qr("Suspense");
    case 19:
      return Qr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zi(e.type, !1)), e;
    case 11:
      return (e = Zi(e.type.render, !1)), e;
    case 22:
      return (e = Zi(e.type._render, !1)), e;
    case 1:
      return (e = Zi(e.type, !0)), e;
    default:
      return "";
  }
}
function er(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $t:
      return "Fragment";
    case yn:
      return "Portal";
    case qr:
      return "Profiler";
    case qs:
      return "StrictMode";
    case Gr:
      return "Suspense";
    case xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zs:
        return (e.displayName || "Context") + ".Consumer";
      case Gs:
        return (e._context.displayName || "Context") + ".Provider";
      case Wo:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case Qo:
        return er(e.type);
      case ea:
        return er(e._render);
      case Js:
        (t = e._payload), (e = e._init);
        try {
          return er(e(t));
        } catch {}
    }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function ed(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function nm(e) {
  var t = ed(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (i = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (a) {
          i = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ji(e) {
  e._valueTracker || (e._valueTracker = nm(e));
}
function td(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = ed(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Eo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function rs(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function yc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  (n = Jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function nd(e, t) {
  (t = t.checked), t != null && Xs(e, "checked", t, !1);
}
function is(e, t) {
  nd(e, t);
  var n = Jt(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? os(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && os(e, t.type, Jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _c(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function os(e, t, n) {
  (t !== "number" || Eo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function rm(e) {
  var t = "";
  return (
    Vo.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function ls(e, t) {
  return (
    (e = pe({ children: void 0 }, t)),
    (t = rm(t.children)) && (e.children = t),
    e
  );
}
function tr(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && i && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), i && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ss(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function rd(e, t) {
  var n = Jt(t.value),
    i = Jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i);
}
function xc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var as = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function id(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function us(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? id(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var eo,
  od = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== as.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        eo = eo || document.createElement("div"),
          eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = eo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ui(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zr = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  im = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zr).forEach(function (e) {
  im.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zr[t] = Zr[e]);
  });
});
function ld(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zr.hasOwnProperty(e) && Zr[e])
    ? ("" + t).trim()
    : t + "px";
}
function sd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        o = ld(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, o) : (e[n] = o);
    }
}
var om = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function cs(e, t) {
  if (t) {
    if (om[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function fs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ds = null,
  nr = null,
  rr = null;
function Ec(e) {
  if ((e = Ci(e))) {
    if (typeof ds != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = Zo(t)), ds(e.stateNode, e.type, t));
  }
}
function ad(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function ud() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), Ec(e), t)) for (e = 0; e < t.length; e++) Ec(t[e]);
  }
}
function ia(e, t) {
  return e(t);
}
function cd(e, t, n, i, o) {
  return e(t, n, i, o);
}
function oa() {}
var fd = ia,
  _n = !1,
  Ml = !1;
function la() {
  (nr !== null || rr !== null) && (oa(), ud());
}
function lm(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return fd(e, t, n);
  } finally {
    (Ml = !1), la();
  }
}
function ci(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = Zo(n);
  if (i === null) return null;
  n = i[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var ps = !1;
if (Dt)
  try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", {
      get: function () {
        ps = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr);
  } catch {
    ps = !1;
  }
function sm(e, t, n, i, o, s, a, c, d) {
  var y = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, y);
  } catch (T) {
    this.onError(T);
  }
}
var Jr = !1,
  ko = null,
  So = !1,
  hs = null,
  am = {
    onError: function (e) {
      (Jr = !0), (ko = e);
    },
  };
function um(e, t, n, i, o, s, a, c, d) {
  (Jr = !1), (ko = null), sm.apply(am, arguments);
}
function cm(e, t, n, i, o, s, a, c, d) {
  if ((um.apply(this, arguments), Jr)) {
    if (Jr) {
      var y = ko;
      (Jr = !1), (ko = null);
    } else throw Error(b(198));
    So || ((So = !0), (hs = y));
  }
}
function On(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 1026 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function kc(e) {
  if (On(e) !== e) throw Error(b(188));
}
function fm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = On(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((i = o.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return kc(o), e;
        if (s === i) return kc(o), t;
        s = s.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== i.return) (n = o), (i = s);
    else {
      for (var a = !1, c = o.child; c; ) {
        if (c === n) {
          (a = !0), (n = o), (i = s);
          break;
        }
        if (c === i) {
          (a = !0), (i = o), (n = s);
          break;
        }
        c = c.sibling;
      }
      if (!a) {
        for (c = s.child; c; ) {
          if (c === n) {
            (a = !0), (n = s), (i = o);
            break;
          }
          if (c === i) {
            (a = !0), (i = s), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!a) throw Error(b(189));
      }
    }
    if (n.alternate !== i) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function pd(e) {
  if (((e = fm(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Sc(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var hd,
  sa,
  md,
  gd,
  ms = !1,
  wt = [],
  Vt = null,
  Wt = null,
  Qt = null,
  fi = new Map(),
  di = new Map(),
  Mr = [],
  Cc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gs(e, t, n, i, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: o,
    targetContainers: [i],
  };
}
function bc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      fi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      di.delete(t.pointerId);
  }
}
function Ir(e, t, n, i, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = gs(t, n, i, o, s)),
      t !== null && ((t = Ci(t)), t !== null && sa(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function dm(e, t, n, i, o) {
  switch (t) {
    case "focusin":
      return (Vt = Ir(Vt, e, t, n, i, o)), !0;
    case "dragenter":
      return (Wt = Ir(Wt, e, t, n, i, o)), !0;
    case "mouseover":
      return (Qt = Ir(Qt, e, t, n, i, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return fi.set(s, Ir(fi.get(s) || null, e, t, n, i, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), di.set(s, Ir(di.get(s) || null, e, t, n, i, o)), !0
      );
  }
  return !1;
}
function pm(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = On(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dd(n)), t !== null)) {
          (e.blockedOn = t),
            gd(e.lanePriority, function () {
              Se.unstable_runWithPriority(e.priority, function () {
                md(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function co(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = Ci(n)), t !== null && sa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tc(e, t, n) {
  co(e) && n.delete(t);
}
function hm() {
  for (ms = !1; 0 < wt.length; ) {
    var e = wt[0];
    if (e.blockedOn !== null) {
      (e = Ci(e.blockedOn)), e !== null && hd(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && wt.shift();
  }
  Vt !== null && co(Vt) && (Vt = null),
    Wt !== null && co(Wt) && (Wt = null),
    Qt !== null && co(Qt) && (Qt = null),
    fi.forEach(Tc),
    di.forEach(Tc);
}
function zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ms ||
      ((ms = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, hm)));
}
function vd(e) {
  function t(o) {
    return zr(o, e);
  }
  if (0 < wt.length) {
    zr(wt[0], e);
    for (var n = 1; n < wt.length; n++) {
      var i = wt[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    Vt !== null && zr(Vt, e),
      Wt !== null && zr(Wt, e),
      Qt !== null && zr(Qt, e),
      fi.forEach(t),
      di.forEach(t),
      n = 0;
    n < Mr.length;
    n++
  )
    (i = Mr[n]), i.blockedOn === e && (i.blockedOn = null);
  for (; 0 < Mr.length && ((n = Mr[0]), n.blockedOn === null); )
    pm(n), n.blockedOn === null && Mr.shift();
}
function to(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kn = {
    animationend: to("Animation", "AnimationEnd"),
    animationiteration: to("Animation", "AnimationIteration"),
    animationstart: to("Animation", "AnimationStart"),
    transitionend: to("Transition", "TransitionEnd"),
  },
  Il = {},
  yd = {};
Dt &&
  ((yd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kn.animationend.animation,
    delete Kn.animationiteration.animation,
    delete Kn.animationstart.animation),
  "TransitionEvent" in window || delete Kn.transitionend.transition);
function Yo(e) {
  if (Il[e]) return Il[e];
  if (!Kn[e]) return e;
  var t = Kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yd) return (Il[e] = t[n]);
  return e;
}
var _d = Yo("animationend"),
  wd = Yo("animationiteration"),
  xd = Yo("animationstart"),
  Ed = Yo("transitionend"),
  kd = new Map(),
  aa = new Map(),
  mm = [
    "abort",
    "abort",
    _d,
    "animationEnd",
    wd,
    "animationIteration",
    xd,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Ed,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function ua(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var i = e[n],
      o = e[n + 1];
    (o = "on" + (o[0].toUpperCase() + o.slice(1))),
      aa.set(i, t),
      kd.set(i, o),
      Nn(o, [i]);
  }
}
var gm = Se.unstable_now;
gm();
var ue = 8;
function Qn(e) {
  if (1 & e) return (ue = 15), 1;
  if (2 & e) return (ue = 14), 2;
  if (4 & e) return (ue = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((ue = 12), t)
    : e & 32
    ? ((ue = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((ue = 10), t)
        : e & 256
        ? ((ue = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((ue = 8), t)
            : e & 4096
            ? ((ue = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((ue = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((ue = 5), t)
                    : e & 67108864
                    ? ((ue = 4), 67108864)
                    : e & 134217728
                    ? ((ue = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((ue = 2), t)
                        : 1073741824 & e
                        ? ((ue = 1), 1073741824)
                        : ((ue = 8), e))))));
}
function vm(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function ym(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(b(358, e));
  }
}
function pi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (ue = 0);
  var i = 0,
    o = 0,
    s = e.expiredLanes,
    a = e.suspendedLanes,
    c = e.pingedLanes;
  if (s !== 0) (i = s), (o = ue = 15);
  else if (((s = n & 134217727), s !== 0)) {
    var d = s & ~a;
    d !== 0
      ? ((i = Qn(d)), (o = ue))
      : ((c &= s), c !== 0 && ((i = Qn(c)), (o = ue)));
  } else
    (s = n & ~a),
      s !== 0 ? ((i = Qn(s)), (o = ue)) : c !== 0 && ((i = Qn(c)), (o = ue));
  if (i === 0) return 0;
  if (
    ((i = 31 - en(i)),
    (i = n & (((0 > i ? 0 : 1 << i) << 1) - 1)),
    t !== 0 && t !== i && !(t & a))
  ) {
    if ((Qn(t), o <= ue)) return t;
    ue = o;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - en(t)), (o = 1 << n), (i |= e[n]), (t &= ~o);
  return i;
}
function Sd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Co(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = Yn(24 & ~t)), e === 0 ? Co(10, t) : e;
    case 10:
      return (e = Yn(192 & ~t)), e === 0 ? Co(8, t) : e;
    case 8:
      return (
        (e = Yn(3584 & ~t)),
        e === 0 && ((e = Yn(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = Yn(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(b(358, e));
}
function Yn(e) {
  return e & -e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ko(e, t, n) {
  e.pendingLanes |= t;
  var i = t - 1;
  (e.suspendedLanes &= i),
    (e.pingedLanes &= i),
    (e = e.eventTimes),
    (t = 31 - en(t)),
    (e[t] = n);
}
var en = Math.clz32 ? Math.clz32 : xm,
  _m = Math.log,
  wm = Math.LN2;
function xm(e) {
  return e === 0 ? 32 : (31 - ((_m(e) / wm) | 0)) | 0;
}
var Em = Se.unstable_UserBlockingPriority,
  km = Se.unstable_runWithPriority,
  fo = !0;
function Sm(e, t, n, i) {
  _n || oa();
  var o = ca,
    s = _n;
  _n = !0;
  try {
    cd(o, e, t, n, i);
  } finally {
    (_n = s) || la();
  }
}
function Cm(e, t, n, i) {
  km(Em, ca.bind(null, e, t, n, i));
}
function ca(e, t, n, i) {
  if (fo) {
    var o;
    if ((o = (t & 4) === 0) && 0 < wt.length && -1 < Cc.indexOf(e))
      (e = gs(null, e, t, n, i)), wt.push(e);
    else {
      var s = fa(e, t, n, i);
      if (s === null) o && bc(e, i);
      else {
        if (o) {
          if (-1 < Cc.indexOf(e)) {
            (e = gs(s, e, t, n, i)), wt.push(e);
            return;
          }
          if (dm(s, e, t, n, i)) return;
          bc(e, i);
        }
        zd(e, t, i, null, n);
      }
    }
  }
}
function fa(e, t, n, i) {
  var o = ra(i);
  if (((o = wn(o)), o !== null)) {
    var s = On(o);
    if (s === null) o = null;
    else {
      var a = s.tag;
      if (a === 13) {
        if (((o = dd(s)), o !== null)) return o;
        o = null;
      } else if (a === 3) {
        if (s.stateNode.hydrate)
          return s.tag === 3 ? s.stateNode.containerInfo : null;
        o = null;
      } else s !== o && (o = null);
    }
  }
  return zd(e, t, i, o, n), null;
}
var Ut = null,
  da = null,
  po = null;
function Cd() {
  if (po) return po;
  var e,
    t = da,
    n = t.length,
    i,
    o = "value" in Ut ? Ut.value : Ut.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (i = 1; i <= a && t[n - i] === o[s - i]; i++);
  return (po = o.slice(e, 1 < i ? 1 - i : void 0));
}
function ho(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function no() {
  return !0;
}
function Nc() {
  return !1;
}
function Ze(e) {
  function t(n, i, o, s, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(s) : s[c]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? no
        : Nc),
      (this.isPropagationStopped = Nc),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = no));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = no));
      },
      persist: function () {},
      isPersistent: no,
    }),
    t
  );
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pa = Ze(gr),
  Si = pe({}, gr, { view: 0, detail: 0 }),
  bm = Ze(Si),
  Rl,
  Fl,
  Rr,
  Xo = pe({}, Si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ha,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Rr &&
            (Rr && e.type === "mousemove"
              ? ((Rl = e.screenX - Rr.screenX), (Fl = e.screenY - Rr.screenY))
              : (Fl = Rl = 0),
            (Rr = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fl;
    },
  }),
  jc = Ze(Xo),
  Tm = pe({}, Xo, { dataTransfer: 0 }),
  Nm = Ze(Tm),
  jm = pe({}, Si, { relatedTarget: 0 }),
  $l = Ze(jm),
  Om = pe({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pm = Ze(Om),
  Lm = pe({}, gr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Am = Ze(Lm),
  Dm = pe({}, gr, { data: 0 }),
  Oc = Ze(Dm),
  Mm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Im = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zm[e]) ? !!t[e] : !1;
}
function ha() {
  return Rm;
}
var Fm = pe({}, Si, {
    key: function (e) {
      if (e.key) {
        var t = Mm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ho(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Im[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ha,
    charCode: function (e) {
      return e.type === "keypress" ? ho(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ho(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $m = Ze(Fm),
  Um = pe({}, Xo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pc = Ze(Um),
  Bm = pe({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ha,
  }),
  Hm = Ze(Bm),
  Vm = pe({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wm = Ze(Vm),
  Qm = pe({}, Xo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ym = Ze(Qm),
  Km = [9, 13, 27, 32],
  ma = Dt && "CompositionEvent" in window,
  ei = null;
Dt && "documentMode" in document && (ei = document.documentMode);
var Xm = Dt && "TextEvent" in window && !ei,
  bd = Dt && (!ma || (ei && 8 < ei && 11 >= ei)),
  Lc = String.fromCharCode(32),
  Ac = !1;
function Td(e, t) {
  switch (e) {
    case "keyup":
      return Km.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xn = !1;
function qm(e, t) {
  switch (e) {
    case "compositionend":
      return Nd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ac = !0), Lc);
    case "textInput":
      return (e = t.data), e === Lc && Ac ? null : e;
    default:
      return null;
  }
}
function Gm(e, t) {
  if (Xn)
    return e === "compositionend" || (!ma && Td(e, t))
      ? ((e = Cd()), (po = da = Ut = null), (Xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Dc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zm[e.type] : t === "textarea";
}
function jd(e, t, n, i) {
  ad(i),
    (t = bo(t, "onChange")),
    0 < t.length &&
      ((n = new pa("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t }));
}
var ti = null,
  hi = null;
function Jm(e) {
  Dd(e, 0);
}
function qo(e) {
  var t = Gn(e);
  if (td(t)) return e;
}
function eg(e, t) {
  if (e === "change") return t;
}
var Od = !1;
if (Dt) {
  var Ul;
  if (Dt) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var Mc = document.createElement("div");
      Mc.setAttribute("oninput", "return;"),
        (Bl = typeof Mc.oninput == "function");
    }
    Ul = Bl;
  } else Ul = !1;
  Od = Ul && (!document.documentMode || 9 < document.documentMode);
}
function Ic() {
  ti && (ti.detachEvent("onpropertychange", Pd), (hi = ti = null));
}
function Pd(e) {
  if (e.propertyName === "value" && qo(hi)) {
    var t = [];
    if ((jd(t, hi, e, ra(e)), (e = Jm), _n)) e(t);
    else {
      _n = !0;
      try {
        ia(e, t);
      } finally {
        (_n = !1), la();
      }
    }
  }
}
function tg(e, t, n) {
  e === "focusin"
    ? (Ic(), (ti = t), (hi = n), ti.attachEvent("onpropertychange", Pd))
    : e === "focusout" && Ic();
}
function ng(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qo(hi);
}
function rg(e, t) {
  if (e === "click") return qo(t);
}
function ig(e, t) {
  if (e === "input" || e === "change") return qo(t);
}
function og(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : og,
  lg = Object.prototype.hasOwnProperty;
function mi(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++)
    if (!lg.call(t, n[i]) || !rt(e[n[i]], t[n[i]])) return !1;
  return !0;
}
function zc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rc(e, t) {
  var n = zc(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zc(n);
  }
}
function Ld(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ld(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Fc() {
  for (var e = window, t = Eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Eo(e.document);
  }
  return t;
}
function vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var sg = Dt && "documentMode" in document && 11 >= document.documentMode,
  qn = null,
  ys = null,
  ni = null,
  _s = !1;
function $c(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _s ||
    qn == null ||
    qn !== Eo(i) ||
    ((i = qn),
    "selectionStart" in i && vs(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (ni && mi(ni, i)) ||
      ((ni = i),
      (i = bo(ys, "onSelect")),
      0 < i.length &&
        ((t = new pa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = qn))));
}
ua(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
ua(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
ua(mm, 2);
for (
  var Uc =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    Hl = 0;
  Hl < Uc.length;
  Hl++
)
  aa.set(Uc[Hl], 0);
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ad = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function Bc(e, t, n) {
  var i = e.type || "unknown-event";
  (e.currentTarget = n), cm(i, t, void 0, e), (e.currentTarget = null);
}
function Dd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      o = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = i.length - 1; 0 <= a; a--) {
          var c = i[a],
            d = c.instance,
            y = c.currentTarget;
          if (((c = c.listener), d !== s && o.isPropagationStopped())) break e;
          Bc(o, c, y), (s = d);
        }
      else
        for (a = 0; a < i.length; a++) {
          if (
            ((c = i[a]),
            (d = c.instance),
            (y = c.currentTarget),
            (c = c.listener),
            d !== s && o.isPropagationStopped())
          )
            break e;
          Bc(o, c, y), (s = d);
        }
    }
  }
  if (So) throw ((e = hs), (So = !1), (hs = null), e);
}
function ce(e, t) {
  var n = Fd(t),
    i = e + "__bubble";
  n.has(i) || (Id(t, e, 2, !1), n.add(i));
}
var Hc = "_reactListening" + Math.random().toString(36).slice(2);
function Md(e) {
  e[Hc] ||
    ((e[Hc] = !0),
    Zf.forEach(function (t) {
      Ad.has(t) || Vc(t, !1, e, null), Vc(t, !0, e, null);
    }));
}
function Vc(e, t, n, i) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    s = n;
  if (
    (e === "selectionchange" && n.nodeType !== 9 && (s = n.ownerDocument),
    i !== null && !t && Ad.has(e))
  ) {
    if (e !== "scroll") return;
    (o |= 2), (s = i);
  }
  var a = Fd(s),
    c = e + "__" + (t ? "capture" : "bubble");
  a.has(c) || (t && (o |= 4), Id(s, e, o, t), a.add(c));
}
function Id(e, t, n, i) {
  var o = aa.get(t);
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = Sm;
      break;
    case 1:
      o = Cm;
      break;
    default:
      o = ca;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ps ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    i
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function zd(e, t, n, i, o) {
  var s = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var a = i.tag;
      if (a === 3 || a === 4) {
        var c = i.stateNode.containerInfo;
        if (c === o || (c.nodeType === 8 && c.parentNode === o)) break;
        if (a === 4)
          for (a = i.return; a !== null; ) {
            var d = a.tag;
            if (
              (d === 3 || d === 4) &&
              ((d = a.stateNode.containerInfo),
              d === o || (d.nodeType === 8 && d.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; c !== null; ) {
          if (((a = wn(c)), a === null)) return;
          if (((d = a.tag), d === 5 || d === 6)) {
            i = s = a;
            continue e;
          }
          c = c.parentNode;
        }
      }
      i = i.return;
    }
  lm(function () {
    var y = s,
      T = ra(n),
      $ = [];
    e: {
      var k = kd.get(e);
      if (k !== void 0) {
        var L = pa,
          z = e;
        switch (e) {
          case "keypress":
            if (ho(n) === 0) break e;
          case "keydown":
          case "keyup":
            L = $m;
            break;
          case "focusin":
            (z = "focus"), (L = $l);
            break;
          case "focusout":
            (z = "blur"), (L = $l);
            break;
          case "beforeblur":
          case "afterblur":
            L = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            L = jc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            L = Nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            L = Hm;
            break;
          case _d:
          case wd:
          case xd:
            L = Pm;
            break;
          case Ed:
            L = Wm;
            break;
          case "scroll":
            L = bm;
            break;
          case "wheel":
            L = Ym;
            break;
          case "copy":
          case "cut":
          case "paste":
            L = Am;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            L = Pc;
        }
        var I = (t & 4) !== 0,
          h = !I && e === "scroll",
          p = I ? (k !== null ? k + "Capture" : null) : k;
        I = [];
        for (var g = y, x; g !== null; ) {
          x = g;
          var E = x.stateNode;
          if (
            (x.tag === 5 &&
              E !== null &&
              ((x = E),
              p !== null && ((E = ci(g, p)), E != null && I.push(gi(g, E, x)))),
            h)
          )
            break;
          g = g.return;
        }
        0 < I.length &&
          ((k = new L(k, z, null, n, T)), $.push({ event: k, listeners: I }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((k = e === "mouseover" || e === "pointerover"),
          (L = e === "mouseout" || e === "pointerout"),
          k &&
            !(t & 16) &&
            (z = n.relatedTarget || n.fromElement) &&
            (wn(z) || z[vr]))
        )
          break e;
        if (
          (L || k) &&
          ((k =
            T.window === T
              ? T
              : (k = T.ownerDocument)
              ? k.defaultView || k.parentWindow
              : window),
          L
            ? ((z = n.relatedTarget || n.toElement),
              (L = y),
              (z = z ? wn(z) : null),
              z !== null &&
                ((h = On(z)), z !== h || (z.tag !== 5 && z.tag !== 6)) &&
                (z = null))
            : ((L = null), (z = y)),
          L !== z)
        ) {
          if (
            ((I = jc),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((I = Pc),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (h = L == null ? k : Gn(L)),
            (x = z == null ? k : Gn(z)),
            (k = new I(E, g + "leave", L, n, T)),
            (k.target = h),
            (k.relatedTarget = x),
            (E = null),
            wn(T) === y &&
              ((I = new I(p, g + "enter", z, n, T)),
              (I.target = x),
              (I.relatedTarget = h),
              (E = I)),
            (h = E),
            L && z)
          )
            t: {
              for (I = L, p = z, g = 0, x = I; x; x = Wn(x)) g++;
              for (x = 0, E = p; E; E = Wn(E)) x++;
              for (; 0 < g - x; ) (I = Wn(I)), g--;
              for (; 0 < x - g; ) (p = Wn(p)), x--;
              for (; g--; ) {
                if (I === p || (p !== null && I === p.alternate)) break t;
                (I = Wn(I)), (p = Wn(p));
              }
              I = null;
            }
          else I = null;
          L !== null && Wc($, k, L, I, !1),
            z !== null && h !== null && Wc($, h, z, I, !0);
        }
      }
      e: {
        if (
          ((k = y ? Gn(y) : window),
          (L = k.nodeName && k.nodeName.toLowerCase()),
          L === "select" || (L === "input" && k.type === "file"))
        )
          var B = eg;
        else if (Dc(k))
          if (Od) B = ig;
          else {
            B = ng;
            var j = tg;
          }
        else
          (L = k.nodeName) &&
            L.toLowerCase() === "input" &&
            (k.type === "checkbox" || k.type === "radio") &&
            (B = rg);
        if (B && (B = B(e, y))) {
          jd($, B, n, T);
          break e;
        }
        j && j(e, k, y),
          e === "focusout" &&
            (j = k._wrapperState) &&
            j.controlled &&
            k.type === "number" &&
            os(k, "number", k.value);
      }
      switch (((j = y ? Gn(y) : window), e)) {
        case "focusin":
          (Dc(j) || j.contentEditable === "true") &&
            ((qn = j), (ys = y), (ni = null));
          break;
        case "focusout":
          ni = ys = qn = null;
          break;
        case "mousedown":
          _s = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_s = !1), $c($, n, T);
          break;
        case "selectionchange":
          if (sg) break;
        case "keydown":
        case "keyup":
          $c($, n, T);
      }
      var U;
      if (ma)
        e: {
          switch (e) {
            case "compositionstart":
              var V = "onCompositionStart";
              break e;
            case "compositionend":
              V = "onCompositionEnd";
              break e;
            case "compositionupdate":
              V = "onCompositionUpdate";
              break e;
          }
          V = void 0;
        }
      else
        Xn
          ? Td(e, n) && (V = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (V = "onCompositionStart");
      V &&
        (bd &&
          n.locale !== "ko" &&
          (Xn || V !== "onCompositionStart"
            ? V === "onCompositionEnd" && Xn && (U = Cd())
            : ((Ut = T),
              (da = "value" in Ut ? Ut.value : Ut.textContent),
              (Xn = !0))),
        (j = bo(y, V)),
        0 < j.length &&
          ((V = new Oc(V, e, null, n, T)),
          $.push({ event: V, listeners: j }),
          U ? (V.data = U) : ((U = Nd(n)), U !== null && (V.data = U)))),
        (U = Xm ? qm(e, n) : Gm(e, n)) &&
          ((y = bo(y, "onBeforeInput")),
          0 < y.length &&
            ((T = new Oc("onBeforeInput", "beforeinput", null, n, T)),
            $.push({ event: T, listeners: y }),
            (T.data = U)));
    }
    Dd($, t);
  });
}
function gi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bo(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = ci(e, n)),
      s != null && i.unshift(gi(e, s, o)),
      (s = ci(e, t)),
      s != null && i.push(gi(e, s, o))),
      (e = e.return);
  }
  return i;
}
function Wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wc(e, t, n, i, o) {
  for (var s = t._reactName, a = []; n !== null && n !== i; ) {
    var c = n,
      d = c.alternate,
      y = c.stateNode;
    if (d !== null && d === i) break;
    c.tag === 5 &&
      y !== null &&
      ((c = y),
      o
        ? ((d = ci(n, s)), d != null && a.unshift(gi(n, d, c)))
        : o || ((d = ci(n, s)), d != null && a.push(gi(n, d, c)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
function To() {}
var Vl = null,
  Wl = null;
function Rd(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function ws(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qc = typeof setTimeout == "function" ? setTimeout : void 0,
  ag = typeof clearTimeout == "function" ? clearTimeout : void 0;
function ga(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function ir(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Yc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ql = 0;
function ug(e) {
  return { $$typeof: ta, toString: e, valueOf: e };
}
var Go = Math.random().toString(36).slice(2),
  Bt = "__reactFiber$" + Go,
  No = "__reactProps$" + Go,
  vr = "__reactContainer$" + Go,
  Kc = "__reactEvents$" + Go;
function wn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vr] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yc(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = Yc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ci(e) {
  return (
    (e = e[Bt] || e[vr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function Zo(e) {
  return e[No] || null;
}
function Fd(e) {
  var t = e[Kc];
  return t === void 0 && (t = e[Kc] = new Set()), t;
}
var xs = [],
  Zn = -1;
function on(e) {
  return { current: e };
}
function fe(e) {
  0 > Zn || ((e.current = xs[Zn]), (xs[Zn] = null), Zn--);
}
function me(e, t) {
  Zn++, (xs[Zn] = e.current), (e.current = t);
}
var tn = {},
  De = on(tn),
  We = on(!1),
  Cn = tn;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Qe(e) {
  return (e = e.childContextTypes), e != null;
}
function jo() {
  fe(We), fe(De);
}
function Xc(e, t, n) {
  if (De.current !== tn) throw Error(b(168));
  me(De, t), me(We, n);
}
function $d(e, t, n) {
  var i = e.stateNode;
  if (((e = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var o in i) if (!(o in e)) throw Error(b(108, er(t) || "Unknown", o));
  return pe({}, n, i);
}
function mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (Cn = De.current),
    me(De, e),
    me(We, We.current),
    !0
  );
}
function qc(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(b(169));
  n
    ? ((e = $d(e, t, Cn)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      fe(We),
      fe(De),
      me(De, e))
    : fe(We),
    me(We, n);
}
var va = null,
  Sn = null,
  cg = Se.unstable_runWithPriority,
  ya = Se.unstable_scheduleCallback,
  Es = Se.unstable_cancelCallback,
  fg = Se.unstable_shouldYield,
  Gc = Se.unstable_requestPaint,
  ks = Se.unstable_now,
  dg = Se.unstable_getCurrentPriorityLevel,
  Jo = Se.unstable_ImmediatePriority,
  Ud = Se.unstable_UserBlockingPriority,
  Bd = Se.unstable_NormalPriority,
  Hd = Se.unstable_LowPriority,
  Vd = Se.unstable_IdlePriority,
  Yl = {},
  pg = Gc !== void 0 ? Gc : function () {},
  Nt = null,
  go = null,
  Kl = !1,
  Zc = ks(),
  Le =
    1e4 > Zc
      ? ks
      : function () {
          return ks() - Zc;
        };
function dr() {
  switch (dg()) {
    case Jo:
      return 99;
    case Ud:
      return 98;
    case Bd:
      return 97;
    case Hd:
      return 96;
    case Vd:
      return 95;
    default:
      throw Error(b(332));
  }
}
function Wd(e) {
  switch (e) {
    case 99:
      return Jo;
    case 98:
      return Ud;
    case 97:
      return Bd;
    case 96:
      return Hd;
    case 95:
      return Vd;
    default:
      throw Error(b(332));
  }
}
function bn(e, t) {
  return (e = Wd(e)), cg(e, t);
}
function vi(e, t, n) {
  return (e = Wd(e)), ya(e, t, n);
}
function Ct() {
  if (go !== null) {
    var e = go;
    (go = null), Es(e);
  }
  Qd();
}
function Qd() {
  if (!Kl && Nt !== null) {
    Kl = !0;
    var e = 0;
    try {
      var t = Nt;
      bn(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (Nt = null);
    } catch (n) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), ya(Jo, Ct), n);
    } finally {
      Kl = !1;
    }
  }
}
var hg = jn.ReactCurrentBatchConfig;
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Oo = on(null),
  Po = null,
  Jn = null,
  Lo = null;
function _a() {
  Lo = Jn = Po = null;
}
function wa(e) {
  var t = Oo.current;
  fe(Oo), (e.type._context._currentValue = t);
}
function Yd(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function or(e, t) {
  (Po = e),
    (Lo = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ht = !0), (e.firstContext = null));
}
function lt(e, t) {
  if (Lo !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((Lo = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Jn === null)
    ) {
      if (Po === null) throw Error(b(308));
      (Jn = t),
        (Po.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Jn = Jn.next = t;
  return e._currentValue;
}
var Ft = !1;
function xa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Kd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kt(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function Jc(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function yi(e, t, n, i) {
  var o = e.updateQueue;
  Ft = !1;
  var s = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var d = c,
      y = d.next;
    (d.next = null), a === null ? (s = y) : (a.next = y), (a = d);
    var T = e.alternate;
    if (T !== null) {
      T = T.updateQueue;
      var $ = T.lastBaseUpdate;
      $ !== a &&
        ($ === null ? (T.firstBaseUpdate = y) : ($.next = y),
        (T.lastBaseUpdate = d));
    }
  }
  if (s !== null) {
    ($ = o.baseState), (a = 0), (T = y = d = null);
    do {
      c = s.lane;
      var k = s.eventTime;
      if ((i & c) === c) {
        T !== null &&
          (T = T.next =
            {
              eventTime: k,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var L = e,
            z = s;
          switch (((c = t), (k = n), z.tag)) {
            case 1:
              if (((L = z.payload), typeof L == "function")) {
                $ = L.call(k, $, c);
                break e;
              }
              $ = L;
              break e;
            case 3:
              L.flags = (L.flags & -4097) | 64;
            case 0:
              if (
                ((L = z.payload),
                (c = typeof L == "function" ? L.call(k, $, c) : L),
                c == null)
              )
                break e;
              $ = pe({}, $, c);
              break e;
            case 2:
              Ft = !0;
          }
        }
        s.callback !== null &&
          ((e.flags |= 32),
          (c = o.effects),
          c === null ? (o.effects = [s]) : c.push(s));
      } else
        (k = {
          eventTime: k,
          lane: c,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          T === null ? ((y = T = k), (d = $)) : (T = T.next = k),
          (a |= c);
      if (((s = s.next), s === null)) {
        if (((c = o.shared.pending), c === null)) break;
        (s = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (1);
    T === null && (d = $),
      (o.baseState = d),
      (o.firstBaseUpdate = y),
      (o.lastBaseUpdate = T),
      (Ti |= a),
      (e.lanes = a),
      (e.memoizedState = $);
  }
}
function ef(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        o = i.callback;
      if (o !== null) {
        if (((i.callback = null), (i = n), typeof o != "function"))
          throw Error(b(191, o));
        o.call(i);
      }
    }
}
var Xd = new Vo.Component().refs;
function Ao(e, t, n, i) {
  (t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var el = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? On(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = Ge(),
      o = Xt(e),
      s = Yt(i, o);
    (s.payload = t), n != null && (s.callback = n), Kt(e, s), qt(e, o, i);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = Ge(),
      o = Xt(e),
      s = Yt(i, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      Kt(e, s),
      qt(e, o, i);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ge(),
      i = Xt(e),
      o = Yt(n, i);
    (o.tag = 2), t != null && (o.callback = t), Kt(e, o), qt(e, i, n);
  },
};
function tf(e, t, n, i, o, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mi(n, i) || !mi(o, s)
      : !0
  );
}
function qd(e, t, n) {
  var i = !1,
    o = tn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = lt(s))
      : ((o = Qe(t) ? Cn : De.current),
        (i = t.contextTypes),
        (s = (i = i != null) ? fr(e, o) : tn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = el),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function nf(e, t, n, i) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && el.enqueueReplaceState(t, t.state, null);
}
function Ss(e, t, n, i) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Xd), xa(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = lt(s))
    : ((s = Qe(t) ? Cn : De.current), (o.context = fr(e, s))),
    yi(e, n, o, i),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ao(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && el.enqueueReplaceState(o, o.state, null),
      yi(e, n, o, i),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4);
}
var ro = Array.isArray;
function Fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(b(147, e));
      var o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === Xd && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function io(e, t) {
  if (e.type !== "textarea")
    throw Error(
      b(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function Gd(e) {
  function t(h, p) {
    if (e) {
      var g = h.lastEffect;
      g !== null
        ? ((g.nextEffect = p), (h.lastEffect = p))
        : (h.firstEffect = h.lastEffect = p),
        (p.nextEffect = null),
        (p.flags = 8);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function i(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = rn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, p, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((h.flags = 2), p) : g)
            : ((h.flags = 2), p))
        : p
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags = 2), h;
  }
  function c(h, p, g, x) {
    return p === null || p.tag !== 6
      ? ((p = Jl(g, h.mode, x)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function d(h, p, g, x) {
    return p !== null && p.elementType === g.type
      ? ((x = o(p, g.props)), (x.ref = Fr(h, p, g)), (x.return = h), x)
      : ((x = wo(g.type, g.key, g.props, null, h.mode, x)),
        (x.ref = Fr(h, p, g)),
        (x.return = h),
        x);
  }
  function y(h, p, g, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = es(g, h.mode, x)), (p.return = h), p)
      : ((p = o(p, g.children || [])), (p.return = h), p);
  }
  function T(h, p, g, x, E) {
    return p === null || p.tag !== 7
      ? ((p = ur(g, h.mode, x, E)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function $(h, p, g) {
    if (typeof p == "string" || typeof p == "number")
      return (p = Jl("" + p, h.mode, g)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Wr:
          return (
            (g = wo(p.type, p.key, p.props, null, h.mode, g)),
            (g.ref = Fr(h, null, p)),
            (g.return = h),
            g
          );
        case yn:
          return (p = es(p, h.mode, g)), (p.return = h), p;
      }
      if (ro(p) || Ar(p))
        return (p = ur(p, h.mode, g, null)), (p.return = h), p;
      io(h, p);
    }
    return null;
  }
  function k(h, p, g, x) {
    var E = p !== null ? p.key : null;
    if (typeof g == "string" || typeof g == "number")
      return E !== null ? null : c(h, p, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Wr:
          return g.key === E
            ? g.type === $t
              ? T(h, p, g.props.children, x, E)
              : d(h, p, g, x)
            : null;
        case yn:
          return g.key === E ? y(h, p, g, x) : null;
      }
      if (ro(g) || Ar(g)) return E !== null ? null : T(h, p, g, x, null);
      io(h, g);
    }
    return null;
  }
  function L(h, p, g, x, E) {
    if (typeof x == "string" || typeof x == "number")
      return (h = h.get(g) || null), c(p, h, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Wr:
          return (
            (h = h.get(x.key === null ? g : x.key) || null),
            x.type === $t ? T(p, h, x.props.children, E, x.key) : d(p, h, x, E)
          );
        case yn:
          return (h = h.get(x.key === null ? g : x.key) || null), y(p, h, x, E);
      }
      if (ro(x) || Ar(x)) return (h = h.get(g) || null), T(p, h, x, E, null);
      io(p, x);
    }
    return null;
  }
  function z(h, p, g, x) {
    for (
      var E = null, B = null, j = p, U = (p = 0), V = null;
      j !== null && U < g.length;
      U++
    ) {
      j.index > U ? ((V = j), (j = null)) : (V = j.sibling);
      var R = k(h, j, g[U], x);
      if (R === null) {
        j === null && (j = V);
        break;
      }
      e && j && R.alternate === null && t(h, j),
        (p = s(R, p, U)),
        B === null ? (E = R) : (B.sibling = R),
        (B = R),
        (j = V);
    }
    if (U === g.length) return n(h, j), E;
    if (j === null) {
      for (; U < g.length; U++)
        (j = $(h, g[U], x)),
          j !== null &&
            ((p = s(j, p, U)), B === null ? (E = j) : (B.sibling = j), (B = j));
      return E;
    }
    for (j = i(h, j); U < g.length; U++)
      (V = L(j, h, U, g[U], x)),
        V !== null &&
          (e && V.alternate !== null && j.delete(V.key === null ? U : V.key),
          (p = s(V, p, U)),
          B === null ? (E = V) : (B.sibling = V),
          (B = V));
    return (
      e &&
        j.forEach(function (_e) {
          return t(h, _e);
        }),
      E
    );
  }
  function I(h, p, g, x) {
    var E = Ar(g);
    if (typeof E != "function") throw Error(b(150));
    if (((g = E.call(g)), g == null)) throw Error(b(151));
    for (
      var B = (E = null), j = p, U = (p = 0), V = null, R = g.next();
      j !== null && !R.done;
      U++, R = g.next()
    ) {
      j.index > U ? ((V = j), (j = null)) : (V = j.sibling);
      var _e = k(h, j, R.value, x);
      if (_e === null) {
        j === null && (j = V);
        break;
      }
      e && j && _e.alternate === null && t(h, j),
        (p = s(_e, p, U)),
        B === null ? (E = _e) : (B.sibling = _e),
        (B = _e),
        (j = V);
    }
    if (R.done) return n(h, j), E;
    if (j === null) {
      for (; !R.done; U++, R = g.next())
        (R = $(h, R.value, x)),
          R !== null &&
            ((p = s(R, p, U)), B === null ? (E = R) : (B.sibling = R), (B = R));
      return E;
    }
    for (j = i(h, j); !R.done; U++, R = g.next())
      (R = L(j, h, U, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && j.delete(R.key === null ? U : R.key),
          (p = s(R, p, U)),
          B === null ? (E = R) : (B.sibling = R),
          (B = R));
    return (
      e &&
        j.forEach(function (xr) {
          return t(h, xr);
        }),
      E
    );
  }
  return function (h, p, g, x) {
    var E =
      typeof g == "object" && g !== null && g.type === $t && g.key === null;
    E && (g = g.props.children);
    var B = typeof g == "object" && g !== null;
    if (B)
      switch (g.$$typeof) {
        case Wr:
          e: {
            for (B = g.key, E = p; E !== null; ) {
              if (E.key === B) {
                switch (E.tag) {
                  case 7:
                    if (g.type === $t) {
                      n(h, E.sibling),
                        (p = o(E, g.props.children)),
                        (p.return = h),
                        (h = p);
                      break e;
                    }
                    break;
                  default:
                    if (E.elementType === g.type) {
                      n(h, E.sibling),
                        (p = o(E, g.props)),
                        (p.ref = Fr(h, E, g)),
                        (p.return = h),
                        (h = p);
                      break e;
                    }
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            g.type === $t
              ? ((p = ur(g.props.children, h.mode, x, g.key)),
                (p.return = h),
                (h = p))
              : ((x = wo(g.type, g.key, g.props, null, h.mode, x)),
                (x.ref = Fr(h, p, g)),
                (x.return = h),
                (h = x));
          }
          return a(h);
        case yn:
          e: {
            for (E = g.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = es(g, h.mode, x)), (p.return = h), (h = p);
          }
          return a(h);
      }
    if (typeof g == "string" || typeof g == "number")
      return (
        (g = "" + g),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, g)), (p.return = h), (h = p))
          : (n(h, p), (p = Jl(g, h.mode, x)), (p.return = h), (h = p)),
        a(h)
      );
    if (ro(g)) return z(h, p, g, x);
    if (Ar(g)) return I(h, p, g, x);
    if ((B && io(h, g), typeof g > "u" && !E))
      switch (h.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(b(152, er(h.type) || "Component"));
      }
    return n(h, p);
  };
}
var Do = Gd(!0),
  Zd = Gd(!1),
  bi = {},
  kt = on(bi),
  _i = on(bi),
  wi = on(bi);
function xn(e) {
  if (e === bi) throw Error(b(174));
  return e;
}
function Cs(e, t) {
  switch ((me(wi, t), me(_i, e), me(kt, bi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : us(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = us(t, e));
  }
  fe(kt), me(kt, t);
}
function pr() {
  fe(kt), fe(_i), fe(wi);
}
function rf(e) {
  xn(wi.current);
  var t = xn(kt.current),
    n = us(t, e.type);
  t !== n && (me(_i, e), me(kt, n));
}
function Ea(e) {
  _i.current === e && (fe(kt), fe(_i));
}
var he = on(0);
function Mo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 64) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pt = null,
  Ht = null,
  St = !1;
function Jd(e, t) {
  var n = it(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.type = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function of(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function bs(e) {
  if (St) {
    var t = Ht;
    if (t) {
      var n = t;
      if (!of(e, t)) {
        if (((t = ir(n.nextSibling)), !t || !of(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (St = !1), (Pt = e);
          return;
        }
        Jd(Pt, n);
      }
      (Pt = e), (Ht = ir(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (St = !1), (Pt = e);
  }
}
function lf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pt = e;
}
function oo(e) {
  if (e !== Pt) return !1;
  if (!St) return lf(e), (St = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !ws(t, e.memoizedProps)))
    for (t = Ht; t; ) Jd(e, t), (t = ir(t.nextSibling));
  if ((lf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ht = ir(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ht = null;
    }
  } else Ht = Pt ? ir(e.stateNode.nextSibling) : null;
  return !0;
}
function Xl() {
  (Ht = Pt = null), (St = !1);
}
var lr = [];
function ka() {
  for (var e = 0; e < lr.length; e++)
    lr[e]._workInProgressVersionPrimary = null;
  lr.length = 0;
}
var ri = jn.ReactCurrentDispatcher,
  ot = jn.ReactCurrentBatchConfig,
  xi = 0,
  ye = null,
  Pe = null,
  Ne = null,
  Io = !1,
  ii = !1;
function He() {
  throw Error(b(321));
}
function Sa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function Ca(e, t, n, i, o, s) {
  if (
    ((xi = s),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ri.current = e === null || e.memoizedState === null ? gg : vg),
    (e = n(i, o)),
    ii)
  ) {
    s = 0;
    do {
      if (((ii = !1), !(25 > s))) throw Error(b(301));
      (s += 1),
        (Ne = Pe = null),
        (t.updateQueue = null),
        (ri.current = yg),
        (e = n(i, o));
    } while (ii);
  }
  if (
    ((ri.current = $o),
    (t = Pe !== null && Pe.next !== null),
    (xi = 0),
    (Ne = Pe = ye = null),
    (Io = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function En() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function Pn() {
  if (Pe === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Ne === null ? ye.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (Pe = e);
  else {
    if (e === null) throw Error(b(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function xt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $r(e) {
  var t = Pn(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var i = Pe,
    o = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = s.next), (s.next = a);
    }
    (i.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (o = o.next), (i = i.baseState);
    var c = (a = s = null),
      d = o;
    do {
      var y = d.lane;
      if ((xi & y) === y)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              eagerReducer: d.eagerReducer,
              eagerState: d.eagerState,
              next: null,
            }),
          (i = d.eagerReducer === e ? d.eagerState : e(i, d.action));
      else {
        var T = {
          lane: y,
          action: d.action,
          eagerReducer: d.eagerReducer,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((a = c = T), (s = i)) : (c = c.next = T),
          (ye.lanes |= y),
          (Ti |= y);
      }
      d = d.next;
    } while (d !== null && d !== o);
    c === null ? (s = i) : (c.next = a),
      rt(i, t.memoizedState) || (ht = !0),
      (t.memoizedState = i),
      (t.baseState = s),
      (t.baseQueue = c),
      (n.lastRenderedState = i);
  }
  return [t.memoizedState, n.dispatch];
}
function Ur(e) {
  var t = Pn(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== o);
    rt(s, t.memoizedState) || (ht = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function sf(e, t, n) {
  var i = t._getVersion;
  i = i(t._source);
  var o = t._workInProgressVersionPrimary;
  if (
    (o !== null
      ? (e = o === i)
      : ((e = e.mutableReadLanes),
        (e = (xi & e) === e) &&
          ((t._workInProgressVersionPrimary = i), lr.push(t))),
    e)
  )
    return n(t._source);
  throw (lr.push(t), Error(b(350)));
}
function ep(e, t, n, i) {
  var o = Ue;
  if (o === null) throw Error(b(349));
  var s = t._getVersion,
    a = s(t._source),
    c = ri.current,
    d = c.useState(function () {
      return sf(o, t, n);
    }),
    y = d[1],
    T = d[0];
  d = Ne;
  var $ = e.memoizedState,
    k = $.refs,
    L = k.getSnapshot,
    z = $.source;
  $ = $.subscribe;
  var I = ye;
  return (
    (e.memoizedState = { refs: k, source: t, subscribe: i }),
    c.useEffect(
      function () {
        (k.getSnapshot = n), (k.setSnapshot = y);
        var h = s(t._source);
        if (!rt(a, h)) {
          (h = n(t._source)),
            rt(T, h) ||
              (y(h), (h = Xt(I)), (o.mutableReadLanes |= h & o.pendingLanes)),
            (h = o.mutableReadLanes),
            (o.entangledLanes |= h);
          for (var p = o.entanglements, g = h; 0 < g; ) {
            var x = 31 - en(g),
              E = 1 << x;
            (p[x] |= h), (g &= ~E);
          }
        }
      },
      [n, t, i]
    ),
    c.useEffect(
      function () {
        return i(t._source, function () {
          var h = k.getSnapshot,
            p = k.setSnapshot;
          try {
            p(h(t._source));
            var g = Xt(I);
            o.mutableReadLanes |= g & o.pendingLanes;
          } catch (x) {
            p(function () {
              throw x;
            });
          }
        });
      },
      [t, i]
    ),
    (rt(L, n) && rt(z, t) && rt($, i)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: T,
      }),
      (e.dispatch = y = Na.bind(null, ye, e)),
      (d.queue = e),
      (d.baseQueue = null),
      (T = sf(o, t, n)),
      (d.memoizedState = d.baseState = T)),
    T
  );
}
function tp(e, t, n) {
  var i = Pn();
  return ep(i, e, t, n);
}
function Br(e) {
  var t = En();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: e,
      }),
    (e = e.dispatch = Na.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function zo(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function af(e) {
  var t = En();
  return (e = { current: e }), (t.memoizedState = e);
}
function Ro() {
  return Pn().memoizedState;
}
function Ts(e, t, n, i) {
  var o = En();
  (ye.flags |= e),
    (o.memoizedState = zo(1 | t, n, void 0, i === void 0 ? null : i));
}
function ba(e, t, n, i) {
  var o = Pn();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (Pe !== null) {
    var a = Pe.memoizedState;
    if (((s = a.destroy), i !== null && Sa(i, a.deps))) {
      zo(t, n, s, i);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = zo(1 | t, n, s, i));
}
function uf(e, t) {
  return Ts(516, 4, e, t);
}
function Fo(e, t) {
  return ba(516, 4, e, t);
}
function np(e, t) {
  return ba(4, 2, e, t);
}
function rp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ip(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ba(4, 2, rp.bind(null, t, e), n)
  );
}
function Ta() {}
function op(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Sa(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function lp(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Sa(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mg(e, t) {
  var n = dr();
  bn(98 > n ? 98 : n, function () {
    e(!0);
  }),
    bn(97 < n ? 97 : n, function () {
      var i = ot.transition;
      ot.transition = 1;
      try {
        e(!1), t();
      } finally {
        ot.transition = i;
      }
    });
}
function Na(e, t, n) {
  var i = Ge(),
    o = Xt(e),
    s = {
      lane: o,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    a = t.pending;
  if (
    (a === null ? (s.next = s) : ((s.next = a.next), (a.next = s)),
    (t.pending = s),
    (a = e.alternate),
    e === ye || (a !== null && a === ye))
  )
    ii = Io = !0;
  else {
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var c = t.lastRenderedState,
          d = a(c, n);
        if (((s.eagerReducer = a), (s.eagerState = d), rt(d, c))) return;
      } catch {
      } finally {
      }
    qt(e, o, i);
  }
}
var $o = {
    readContext: lt,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useMutableSource: He,
    useOpaqueIdentifier: He,
    unstable_isNewReconciler: !1,
  },
  gg = {
    readContext: lt,
    useCallback: function (e, t) {
      return (En().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: uf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Ts(4, 2, rp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ts(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = En();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var i = En();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = i.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = Na.bind(null, ye, e)),
        [i.memoizedState, e]
      );
    },
    useRef: af,
    useState: Br,
    useDebugValue: Ta,
    useDeferredValue: function (e) {
      var t = Br(e),
        n = t[0],
        i = t[1];
      return (
        uf(
          function () {
            var o = ot.transition;
            ot.transition = 1;
            try {
              i(e);
            } finally {
              ot.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = Br(!1),
        t = e[0];
      return (e = mg.bind(null, e[1])), af(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var i = En();
      return (
        (i.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        ep(i, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (St) {
        var e = !1,
          t = ug(function () {
            throw (
              (e || ((e = !0), n("r:" + (Ql++).toString(36))), Error(b(355)))
            );
          }),
          n = Br(t)[1];
        return (
          !(ye.mode & 2) &&
            ((ye.flags |= 516),
            zo(
              5,
              function () {
                n("r:" + (Ql++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (Ql++).toString(36)), Br(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  vg = {
    readContext: lt,
    useCallback: op,
    useContext: lt,
    useEffect: Fo,
    useImperativeHandle: ip,
    useLayoutEffect: np,
    useMemo: lp,
    useReducer: $r,
    useRef: Ro,
    useState: function () {
      return $r(xt);
    },
    useDebugValue: Ta,
    useDeferredValue: function (e) {
      var t = $r(xt),
        n = t[0],
        i = t[1];
      return (
        Fo(
          function () {
            var o = ot.transition;
            ot.transition = 1;
            try {
              i(e);
            } finally {
              ot.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = $r(xt)[0];
      return [Ro().current, e];
    },
    useMutableSource: tp,
    useOpaqueIdentifier: function () {
      return $r(xt)[0];
    },
    unstable_isNewReconciler: !1,
  },
  yg = {
    readContext: lt,
    useCallback: op,
    useContext: lt,
    useEffect: Fo,
    useImperativeHandle: ip,
    useLayoutEffect: np,
    useMemo: lp,
    useReducer: Ur,
    useRef: Ro,
    useState: function () {
      return Ur(xt);
    },
    useDebugValue: Ta,
    useDeferredValue: function (e) {
      var t = Ur(xt),
        n = t[0],
        i = t[1];
      return (
        Fo(
          function () {
            var o = ot.transition;
            ot.transition = 1;
            try {
              i(e);
            } finally {
              ot.transition = o;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = Ur(xt)[0];
      return [Ro().current, e];
    },
    useMutableSource: tp,
    useOpaqueIdentifier: function () {
      return Ur(xt)[0];
    },
    unstable_isNewReconciler: !1,
  },
  _g = jn.ReactCurrentOwner,
  ht = !1;
function Ve(e, t, n, i) {
  t.child = e === null ? Zd(t, null, n, i) : Do(t, e.child, n, i);
}
function cf(e, t, n, i, o) {
  n = n.render;
  var s = t.ref;
  return (
    or(t, o),
    (i = Ca(e, t, n, i, s, o)),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : ((t.flags |= 1), Ve(e, t, i, o), t.child)
  );
}
function ff(e, t, n, i, o, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Da(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), sp(e, t, a, i, o, s))
      : ((e = wo(n.type, null, i, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (a = e.child),
    !(o & s) &&
    ((o = a.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : mi),
    n(o, i) && e.ref === t.ref)
      ? Lt(e, t, s)
      : ((t.flags |= 1),
        (e = rn(a, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function sp(e, t, n, i, o, s) {
  if (e !== null && mi(e.memoizedProps, i) && e.ref === t.ref)
    if (((ht = !1), (s & o) !== 0)) e.flags & 16384 && (ht = !0);
    else return (t.lanes = e.lanes), Lt(e, t, s);
  return Ns(e, t, n, i, s);
}
function ql(e, t, n) {
  var i = t.pendingProps,
    o = i.children,
    s = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden" || i.mode === "unstable-defer-without-hiding")
    if (!(t.mode & 4)) (t.memoizedState = { baseLanes: 0 }), so(t, n);
    else if (n & 1073741824)
      (t.memoizedState = { baseLanes: 0 }), so(t, s !== null ? s.baseLanes : n);
    else
      return (
        (e = s !== null ? s.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        so(t, e),
        null
      );
  else
    s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
      so(t, i);
  return Ve(e, t, o, n), t.child;
}
function ap(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.flags |= 128);
}
function Ns(e, t, n, i, o) {
  var s = Qe(n) ? Cn : De.current;
  return (
    (s = fr(t, s)),
    or(t, o),
    (n = Ca(e, t, n, i, s, o)),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : ((t.flags |= 1), Ve(e, t, n, o), t.child)
  );
}
function df(e, t, n, i, o) {
  if (Qe(n)) {
    var s = !0;
    mo(t);
  } else s = !1;
  if ((or(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      qd(t, n, i),
      Ss(t, n, i, o),
      (i = !0);
  else if (e === null) {
    var a = t.stateNode,
      c = t.memoizedProps;
    a.props = c;
    var d = a.context,
      y = n.contextType;
    typeof y == "object" && y !== null
      ? (y = lt(y))
      : ((y = Qe(n) ? Cn : De.current), (y = fr(t, y)));
    var T = n.getDerivedStateFromProps,
      $ =
        typeof T == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    $ ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== i || d !== y) && nf(t, a, i, y)),
      (Ft = !1);
    var k = t.memoizedState;
    (a.state = k),
      yi(t, i, a, o),
      (d = t.memoizedState),
      c !== i || k !== d || We.current || Ft
        ? (typeof T == "function" && (Ao(t, n, T, i), (d = t.memoizedState)),
          (c = Ft || tf(t, n, c, i, k, d, y))
            ? ($ ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = i),
              (t.memoizedState = d)),
          (a.props = i),
          (a.state = d),
          (a.context = y),
          (i = c))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4),
          (i = !1));
  } else {
    (a = t.stateNode),
      Kd(e, t),
      (c = t.memoizedProps),
      (y = t.type === t.elementType ? c : pt(t.type, c)),
      (a.props = y),
      ($ = t.pendingProps),
      (k = a.context),
      (d = n.contextType),
      typeof d == "object" && d !== null
        ? (d = lt(d))
        : ((d = Qe(n) ? Cn : De.current), (d = fr(t, d)));
    var L = n.getDerivedStateFromProps;
    (T =
      typeof L == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== $ || k !== d) && nf(t, a, i, d)),
      (Ft = !1),
      (k = t.memoizedState),
      (a.state = k),
      yi(t, i, a, o);
    var z = t.memoizedState;
    c !== $ || k !== z || We.current || Ft
      ? (typeof L == "function" && (Ao(t, n, L, i), (z = t.memoizedState)),
        (y = Ft || tf(t, n, y, i, k, z, d))
          ? (T ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(i, z, d),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(i, z, d)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof a.componentDidUpdate != "function" ||
              (c === e.memoizedProps && k === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && k === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = i),
            (t.memoizedState = z)),
        (a.props = i),
        (a.state = z),
        (a.context = d),
        (i = y))
      : (typeof a.componentDidUpdate != "function" ||
          (c === e.memoizedProps && k === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && k === e.memoizedState) ||
          (t.flags |= 256),
        (i = !1));
  }
  return js(e, t, n, i, s, o);
}
function js(e, t, n, i, o, s) {
  ap(e, t);
  var a = (t.flags & 64) !== 0;
  if (!i && !a) return o && qc(t, n, !1), Lt(e, t, s);
  (i = t.stateNode), (_g.current = t);
  var c =
    a && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Do(t, e.child, null, s)), (t.child = Do(t, null, c, s)))
      : Ve(e, t, c, s),
    (t.memoizedState = i.state),
    o && qc(t, n, !0),
    t.child
  );
}
function pf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xc(e, t.context, !1),
    Cs(e, t.containerInfo);
}
var lo = { dehydrated: null, retryLane: 0 };
function hf(e, t, n) {
  var i = t.pendingProps,
    o = he.current,
    s = !1,
    a;
  return (
    (a = (t.flags & 64) !== 0) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        i.fallback === void 0 ||
        i.unstable_avoidThisFallback === !0 ||
        (o |= 1),
    me(he, o & 1),
    e === null
      ? (i.fallback !== void 0 && bs(t),
        (e = i.children),
        (o = i.fallback),
        s
          ? ((e = mf(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = lo),
            e)
          : typeof i.unstable_expectedLoadTime == "number"
          ? ((e = mf(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = lo),
            (t.lanes = 33554432),
            e)
          : ((n = Ma({ mode: "visible", children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? s
        ? ((i = vf(e, t, i.children, i.fallback, n)),
          (s = t.child),
          (o = e.child.memoizedState),
          (s.memoizedState =
            o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
          (s.childLanes = e.childLanes & ~n),
          (t.memoizedState = lo),
          i)
        : ((n = gf(e, t, i.children, n)), (t.memoizedState = null), n)
      : s
      ? ((i = vf(e, t, i.children, i.fallback, n)),
        (s = t.child),
        (o = e.child.memoizedState),
        (s.memoizedState =
          o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = lo),
        i)
      : ((n = gf(e, t, i.children, n)), (t.memoizedState = null), n)
  );
}
function mf(e, t, n, i) {
  var o = e.mode,
    s = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    !(o & 2) && s !== null
      ? ((s.childLanes = 0), (s.pendingProps = t))
      : (s = Ma(t, o, 0, null)),
    (n = ur(n, o, i, null)),
    (s.return = e),
    (n.return = e),
    (s.sibling = n),
    (e.child = s),
    n
  );
}
function gf(e, t, n, i) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = rn(o, { mode: "visible", children: n })),
    !(t.mode & 2) && (n.lanes = i),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function vf(e, t, n, i, o) {
  var s = t.mode,
    a = e.child;
  e = a.sibling;
  var c = { mode: "hidden", children: n };
  return (
    !(s & 2) && t.child !== a
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = c),
        (a = n.lastEffect),
        a !== null
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = a),
            (a.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = rn(a, c)),
    e !== null ? (i = rn(e, i)) : ((i = ur(i, s, o, null)), (i.flags |= 2)),
    (i.return = t),
    (n.return = t),
    (n.sibling = i),
    (t.child = n),
    i
  );
}
function yf(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Yd(e.return, t);
}
function Gl(e, t, n, i, o, s) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: o,
        lastEffect: s,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = i),
      (a.tail = n),
      (a.tailMode = o),
      (a.lastEffect = s));
}
function _f(e, t, n) {
  var i = t.pendingProps,
    o = i.revealOrder,
    s = i.tail;
  if ((Ve(e, t, i.children, n), (i = he.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && e.flags & 64)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yf(e, n);
        else if (e.tag === 19) yf(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    i &= 1;
  }
  if ((me(he, i), !(t.mode & 2))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Mo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Gl(t, !1, o, n, s, t.lastEffect);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Mo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Gl(t, !0, n, null, s, t.lastEffect);
        break;
      case "together":
        Gl(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ti |= t.lanes),
    n & t.childLanes)
  ) {
    if (e !== null && t.child !== e.child) throw Error(b(153));
    if (t.child !== null) {
      for (
        e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = rn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var up, Os, cp, fp;
up = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Os = function () {};
cp = function (e, t, n, i) {
  var o = e.memoizedProps;
  if (o !== i) {
    (e = t.stateNode), xn(kt.current);
    var s = null;
    switch (n) {
      case "input":
        (o = rs(e, o)), (i = rs(e, i)), (s = []);
        break;
      case "option":
        (o = ls(e, o)), (i = ls(e, i)), (s = []);
        break;
      case "select":
        (o = pe({}, o, { value: void 0 })),
          (i = pe({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = ss(e, o)), (i = ss(e, i)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = To);
    }
    cs(n, i);
    var a;
    n = null;
    for (y in o)
      if (!i.hasOwnProperty(y) && o.hasOwnProperty(y) && o[y] != null)
        if (y === "style") {
          var c = o[y];
          for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          y !== "dangerouslySetInnerHTML" &&
            y !== "children" &&
            y !== "suppressContentEditableWarning" &&
            y !== "suppressHydrationWarning" &&
            y !== "autoFocus" &&
            (ai.hasOwnProperty(y)
              ? s || (s = [])
              : (s = s || []).push(y, null));
    for (y in i) {
      var d = i[y];
      if (
        ((c = o != null ? o[y] : void 0),
        i.hasOwnProperty(y) && d !== c && (d != null || c != null))
      )
        if (y === "style")
          if (c) {
            for (a in c)
              !c.hasOwnProperty(a) ||
                (d && d.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in d)
              d.hasOwnProperty(a) &&
                c[a] !== d[a] &&
                (n || (n = {}), (n[a] = d[a]));
          } else n || (s || (s = []), s.push(y, n)), (n = d);
        else
          y === "dangerouslySetInnerHTML"
            ? ((d = d ? d.__html : void 0),
              (c = c ? c.__html : void 0),
              d != null && c !== d && (s = s || []).push(y, d))
            : y === "children"
            ? (typeof d != "string" && typeof d != "number") ||
              (s = s || []).push(y, "" + d)
            : y !== "suppressContentEditableWarning" &&
              y !== "suppressHydrationWarning" &&
              (ai.hasOwnProperty(y)
                ? (d != null && y === "onScroll" && ce("scroll", e),
                  s || c === d || (s = []))
                : typeof d == "object" && d !== null && d.$$typeof === ta
                ? d.toString()
                : (s = s || []).push(y, d));
    }
    n && (s = s || []).push("style", n);
    var y = s;
    (t.updateQueue = y) && (t.flags |= 4);
  }
};
fp = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function Hr(e, t) {
  if (!St)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function wg(e, t, n) {
  var i = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Qe(t.type) && jo(), null;
    case 3:
      return (
        pr(),
        fe(We),
        fe(De),
        ka(),
        (i = t.stateNode),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (oo(t) ? (t.flags |= 4) : i.hydrate || (t.flags |= 256)),
        Os(t),
        null
      );
    case 5:
      Ea(t);
      var o = xn(wi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        cp(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(b(166));
          return null;
        }
        if (((e = xn(kt.current)), oo(t))) {
          (i = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((i[Bt] = t), (i[No] = s), n)) {
            case "dialog":
              ce("cancel", i), ce("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", i);
              break;
            case "video":
            case "audio":
              for (e = 0; e < Yr.length; e++) ce(Yr[e], i);
              break;
            case "source":
              ce("error", i);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", i), ce("load", i);
              break;
            case "details":
              ce("toggle", i);
              break;
            case "input":
              yc(i, s), ce("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                ce("invalid", i);
              break;
            case "textarea":
              wc(i, s), ce("invalid", i);
          }
          cs(n, s), (e = null);
          for (var a in s)
            s.hasOwnProperty(a) &&
              ((o = s[a]),
              a === "children"
                ? typeof o == "string"
                  ? i.textContent !== o && (e = ["children", o])
                  : typeof o == "number" &&
                    i.textContent !== "" + o &&
                    (e = ["children", "" + o])
                : ai.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  ce("scroll", i));
          switch (n) {
            case "input":
              Ji(i), _c(i, s, !0);
              break;
            case "textarea":
              Ji(i), xc(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = To);
          }
          (i = e), (t.updateQueue = i), i !== null && (t.flags |= 4);
        } else {
          switch (
            ((a = o.nodeType === 9 ? o : o.ownerDocument),
            e === as.html && (e = id(n)),
            e === as.html
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                ? (e = a.createElement(n, { is: i.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    i.multiple
                      ? (a.multiple = !0)
                      : i.size && (a.size = i.size)))
              : (e = a.createElementNS(e, n)),
            (e[Bt] = t),
            (e[No] = i),
            up(e, t, !1, !1),
            (t.stateNode = e),
            (a = fs(n, i)),
            n)
          ) {
            case "dialog":
              ce("cancel", e), ce("close", e), (o = i);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", e), (o = i);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yr.length; o++) ce(Yr[o], e);
              o = i;
              break;
            case "source":
              ce("error", e), (o = i);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", e), ce("load", e), (o = i);
              break;
            case "details":
              ce("toggle", e), (o = i);
              break;
            case "input":
              yc(e, i), (o = rs(e, i)), ce("invalid", e);
              break;
            case "option":
              o = ls(e, i);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!i.multiple }),
                (o = pe({}, i, { value: void 0 })),
                ce("invalid", e);
              break;
            case "textarea":
              wc(e, i), (o = ss(e, i)), ce("invalid", e);
              break;
            default:
              o = i;
          }
          cs(n, o);
          var c = o;
          for (s in c)
            if (c.hasOwnProperty(s)) {
              var d = c[s];
              s === "style"
                ? sd(e, d)
                : s === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0), d != null && od(e, d))
                : s === "children"
                ? typeof d == "string"
                  ? (n !== "textarea" || d !== "") && ui(e, d)
                  : typeof d == "number" && ui(e, "" + d)
                : s !== "suppressContentEditableWarning" &&
                  s !== "suppressHydrationWarning" &&
                  s !== "autoFocus" &&
                  (ai.hasOwnProperty(s)
                    ? d != null && s === "onScroll" && ce("scroll", e)
                    : d != null && Xs(e, s, d, a));
            }
          switch (n) {
            case "input":
              Ji(e), _c(e, i, !1);
              break;
            case "textarea":
              Ji(e), xc(e);
              break;
            case "option":
              i.value != null && e.setAttribute("value", "" + Jt(i.value));
              break;
            case "select":
              (e.multiple = !!i.multiple),
                (s = i.value),
                s != null
                  ? tr(e, !!i.multiple, s, !1)
                  : i.defaultValue != null &&
                    tr(e, !!i.multiple, i.defaultValue, !0);
              break;
            default:
              typeof o.onClick == "function" && (e.onclick = To);
          }
          Rd(n, i) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) fp(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(b(166));
        (n = xn(wi.current)),
          xn(kt.current),
          oo(t)
            ? ((i = t.stateNode),
              (n = t.memoizedProps),
              (i[Bt] = t),
              i.nodeValue !== n && (t.flags |= 4))
            : ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
              (i[Bt] = t),
              (t.stateNode = i));
      }
      return null;
    case 13:
      return (
        fe(he),
        (i = t.memoizedState),
        t.flags & 64
          ? ((t.lanes = n), t)
          : ((i = i !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && oo(t)
              : (n = e.memoizedState !== null),
            i &&
              !n &&
              t.mode & 2 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              he.current & 1
                ? je === 0 && (je = 3)
                : ((je === 0 || je === 3) && (je = 4),
                  Ue === null ||
                    (!(Ti & 134217727) && !(_r & 134217727)) ||
                    sr(Ue, Ae))),
            (i || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return pr(), Os(t), e === null && Md(t.stateNode.containerInfo), null;
    case 10:
      return wa(t), null;
    case 17:
      return Qe(t.type) && jo(), null;
    case 19:
      if ((fe(he), (i = t.memoizedState), i === null)) return null;
      if (((s = (t.flags & 64) !== 0), (a = i.rendering), a === null))
        if (s) Hr(i, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 64))
            for (e = t.child; e !== null; ) {
              if (((a = Mo(e)), a !== null)) {
                for (
                  t.flags |= 64,
                    Hr(i, !1),
                    s = a.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    i.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = i.lastEffect,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = i),
                    (s.flags &= 2),
                    (s.nextEffect = null),
                    (s.firstEffect = null),
                    (s.lastEffect = null),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return me(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Le() > Is &&
            ((t.flags |= 64), (s = !0), Hr(i, !1), (t.lanes = 33554432));
        }
      else {
        if (!s)
          if (((e = Mo(a)), e !== null)) {
            if (
              ((t.flags |= 64),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !St)
            )
              return (
                (t = t.lastEffect = i.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * Le() - i.renderingStartTime > Is &&
              n !== 1073741824 &&
              ((t.flags |= 64), (s = !0), Hr(i, !1), (t.lanes = 33554432));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.lastEffect = t.lastEffect),
          (i.renderingStartTime = Le()),
          (n.sibling = null),
          (t = he.current),
          me(he, s ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        Aa(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          i.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(b(156, t.tag));
}
function xg(e) {
  switch (e.tag) {
    case 1:
      Qe(e.type) && jo();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((pr(), fe(We), fe(De), ka(), (t = e.flags), t & 64))
        throw Error(b(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return Ea(e), null;
    case 13:
      return (
        fe(he),
        (t = e.flags),
        t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return fe(he), null;
    case 4:
      return pr(), null;
    case 10:
      return wa(e), null;
    case 23:
    case 24:
      return Aa(), null;
    default:
      return null;
  }
}
function ja(e, t) {
  try {
    var n = "",
      i = t;
    do (n += tm(i)), (i = i.return);
    while (i);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o };
}
function Ps(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Eg = typeof WeakMap == "function" ? WeakMap : Map;
function dp(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = t.value;
  return (
    (n.callback = function () {
      Bo || ((Bo = !0), (zs = i)), Ps(e, t);
    }),
    n
  );
}
function pp(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var o = t.value;
    n.payload = function () {
      return Ps(e, t), i(o);
    };
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof i != "function" &&
          (Et === null ? (Et = new Set([this])) : Et.add(this), Ps(e, t));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
var kg = typeof WeakSet == "function" ? WeakSet : Set;
function wf(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        Gt(e, n);
      }
    else t.current = null;
}
function Sg(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          i = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : pt(t.type, n),
            i
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && ga(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(b(163));
}
function Cg(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var i = e.create;
            e.destroy = i();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var o = e;
          (i = o.next),
            (o = o.tag),
            o & 4 && o & 1 && (Ep(n, e), Ag(n, e)),
            (e = i);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((i =
                n.elementType === n.type
                  ? t.memoizedProps
                  : pt(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                i,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = n.updateQueue),
        t !== null && ef(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        ef(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && Rd(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && vd(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(b(163));
}
function xf(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var i = n.stateNode;
      if (t)
        (i = i.style),
          typeof i.setProperty == "function"
            ? i.setProperty("display", "none", "important")
            : (i.display = "none");
      else {
        i = n.stateNode;
        var o = n.memoizedProps.style;
        (o = o != null && o.hasOwnProperty("display") ? o.display : null),
          (i.style.display = ld("display", o));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Ef(e, t) {
  if (Sn && typeof Sn.onCommitFiberUnmount == "function")
    try {
      Sn.onCommitFiberUnmount(va, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var i = n,
            o = i.destroy;
          if (((i = i.tag), o !== void 0))
            if (i & 4) Ep(t, n);
            else {
              i = t;
              try {
                o();
              } catch (s) {
                Gt(i, s);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (wf(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (s) {
          Gt(t, s);
        }
      break;
    case 5:
      wf(t);
      break;
    case 4:
      hp(e, t);
  }
}
function kf(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Sf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cf(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Sf(t)) break e;
      t = t.return;
    }
    throw Error(b(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var i = !1;
      break;
    case 3:
      (t = t.containerInfo), (i = !0);
      break;
    case 4:
      (t = t.containerInfo), (i = !0);
      break;
    default:
      throw Error(b(161));
  }
  n.flags & 16 && (ui(t, ""), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Sf(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  i ? Ls(e, n, t) : As(e, n, t);
}
function Ls(e, t, n) {
  var i = e.tag,
    o = i === 5 || i === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = To));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Ls(e, t, n), e = e.sibling; e !== null; ) Ls(e, t, n), (e = e.sibling);
}
function As(e, t, n) {
  var i = e.tag,
    o = i === 5 || i === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (i !== 4 && ((e = e.child), e !== null))
    for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), (e = e.sibling);
}
function hp(e, t) {
  for (var n = t, i = !1, o, s; ; ) {
    if (!i) {
      i = n.return;
      e: for (;;) {
        if (i === null) throw Error(b(160));
        switch (((o = i.stateNode), i.tag)) {
          case 5:
            s = !1;
            break e;
          case 3:
            (o = o.containerInfo), (s = !0);
            break e;
          case 4:
            (o = o.containerInfo), (s = !0);
            break e;
        }
        i = i.return;
      }
      i = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var a = e, c = n, d = c; ; )
        if ((Ef(a, d), d.child !== null && d.tag !== 4))
          (d.child.return = d), (d = d.child);
        else {
          if (d === c) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === c) break e;
            d = d.return;
          }
          (d.sibling.return = d.return), (d = d.sibling);
        }
      s
        ? ((a = o),
          (c = n.stateNode),
          a.nodeType === 8 ? a.parentNode.removeChild(c) : a.removeChild(c))
        : o.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (o = n.stateNode.containerInfo),
          (s = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((Ef(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (i = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Zl(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var i = (n = n.next);
        do
          (i.tag & 3) === 3 &&
            ((e = i.destroy), (i.destroy = void 0), e !== void 0 && e()),
            (i = i.next);
        while (i !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        i = t.memoizedProps;
        var o = e !== null ? e.memoizedProps : i;
        e = t.type;
        var s = t.updateQueue;
        if (((t.updateQueue = null), s !== null)) {
          for (
            n[No] = i,
              e === "input" && i.type === "radio" && i.name != null && nd(n, i),
              fs(e, o),
              t = fs(e, i),
              o = 0;
            o < s.length;
            o += 2
          ) {
            var a = s[o],
              c = s[o + 1];
            a === "style"
              ? sd(n, c)
              : a === "dangerouslySetInnerHTML"
              ? od(n, c)
              : a === "children"
              ? ui(n, c)
              : Xs(n, a, c, t);
          }
          switch (e) {
            case "input":
              is(n, i);
              break;
            case "textarea":
              rd(n, i);
              break;
            case "select":
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!i.multiple),
                (s = i.value),
                s != null
                  ? tr(n, !!i.multiple, s, !1)
                  : e !== !!i.multiple &&
                    (i.defaultValue != null
                      ? tr(n, !!i.multiple, i.defaultValue, !0)
                      : tr(n, !!i.multiple, i.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(b(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), vd(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((La = Le()), xf(t.child, !0)), bf(t);
      return;
    case 19:
      bf(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      xf(t, t.memoizedState !== null);
      return;
  }
  throw Error(b(163));
}
function bf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kg()),
      t.forEach(function (i) {
        var o = Ig.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(o, o));
      });
  }
}
function bg(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var Tg = Math.ceil,
  Uo = jn.ReactCurrentDispatcher,
  Oa = jn.ReactCurrentOwner,
  Q = 0,
  Ue = null,
  xe = null,
  Ae = 0,
  Tn = 0,
  Ds = on(0),
  je = 0,
  tl = null,
  yr = 0,
  Ti = 0,
  _r = 0,
  Pa = 0,
  Ms = null,
  La = 0,
  Is = 1 / 0;
function wr() {
  Is = Le() + 500;
}
var M = null,
  Bo = !1,
  zs = null,
  Et = null,
  nn = !1,
  oi = null,
  Kr = 90,
  Rs = [],
  Fs = [],
  At = null,
  li = 0,
  $s = null,
  vo = -1,
  Ot = 0,
  yo = 0,
  si = null,
  _o = !1;
function Ge() {
  return Q & 48 ? Le() : vo !== -1 ? vo : (vo = Le());
}
function Xt(e) {
  if (((e = e.mode), !(e & 2))) return 1;
  if (!(e & 4)) return dr() === 99 ? 1 : 2;
  if ((Ot === 0 && (Ot = yr), hg.transition !== 0)) {
    yo !== 0 && (yo = Ms !== null ? Ms.pendingLanes : 0), (e = Ot);
    var t = 4186112 & ~yo;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = dr()),
    Q & 4 && e === 98 ? (e = Co(12, Ot)) : ((e = vm(e)), (e = Co(e, Ot))),
    e
  );
}
function qt(e, t, n) {
  if (50 < li) throw ((li = 0), ($s = null), Error(b(185)));
  if (((e = nl(e, t)), e === null)) return null;
  Ko(e, t, n), e === Ue && ((_r |= t), je === 4 && sr(e, Ae));
  var i = dr();
  t === 1
    ? Q & 8 && !(Q & 48)
      ? Us(e)
      : (st(e, n), Q === 0 && (wr(), Ct()))
    : (!(Q & 4) ||
        (i !== 98 && i !== 99) ||
        (At === null ? (At = new Set([e])) : At.add(e)),
      st(e, n)),
    (Ms = e);
}
function nl(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function st(e, t) {
  for (
    var n = e.callbackNode,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      s = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var c = 31 - en(a),
      d = 1 << c,
      y = s[c];
    if (y === -1) {
      if (!(d & i) || d & o) {
        (y = t), Qn(d);
        var T = ue;
        s[c] = 10 <= T ? y + 250 : 6 <= T ? y + 5e3 : -1;
      }
    } else y <= t && (e.expiredLanes |= d);
    a &= ~d;
  }
  if (((i = pi(e, e === Ue ? Ae : 0)), (t = ue), i === 0))
    n !== null &&
      (n !== Yl && Es(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== Yl && Es(n);
    }
    t === 15
      ? ((n = Us.bind(null, e)),
        Nt === null ? ((Nt = [n]), (go = ya(Jo, Qd))) : Nt.push(n),
        (n = Yl))
      : t === 14
      ? (n = vi(99, Us.bind(null, e)))
      : ((n = ym(t)), (n = vi(n, mp.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function mp(e) {
  if (((vo = -1), (yo = Ot = 0), Q & 48)) throw Error(b(327));
  var t = e.callbackNode;
  if (ln() && e.callbackNode !== t) return null;
  var n = pi(e, e === Ue ? Ae : 0);
  if (n === 0) return null;
  var i = n,
    o = Q;
  Q |= 16;
  var s = _p();
  (Ue !== e || Ae !== i) && (wr(), ar(e, i));
  do
    try {
      Og();
      break;
    } catch (c) {
      yp(e, c);
    }
  while (1);
  if (
    (_a(),
    (Uo.current = s),
    (Q = o),
    xe !== null ? (i = 0) : ((Ue = null), (Ae = 0), (i = je)),
    yr & _r)
  )
    ar(e, 0);
  else if (i !== 0) {
    if (
      (i === 2 &&
        ((Q |= 64),
        e.hydrate && ((e.hydrate = !1), ga(e.containerInfo)),
        (n = Sd(e)),
        n !== 0 && (i = Xr(e, n))),
      i === 1)
    )
      throw ((t = tl), ar(e, 0), sr(e, n), st(e, Le()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), i)
    ) {
      case 0:
      case 1:
        throw Error(b(345));
      case 2:
        vn(e);
        break;
      case 3:
        if (
          (sr(e, n), (n & 62914560) === n && ((i = La + 500 - Le()), 10 < i))
        ) {
          if (pi(e, 0) !== 0) break;
          if (((o = e.suspendedLanes), (o & n) !== n)) {
            Ge(), (e.pingedLanes |= e.suspendedLanes & o);
            break;
          }
          e.timeoutHandle = Qc(vn.bind(null, e), i);
          break;
        }
        vn(e);
        break;
      case 4:
        if ((sr(e, n), (n & 4186112) === n)) break;
        for (i = e.eventTimes, o = -1; 0 < n; ) {
          var a = 31 - en(n);
          (s = 1 << a), (a = i[a]), a > o && (o = a), (n &= ~s);
        }
        if (
          ((n = o),
          (n = Le() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * Tg(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = Qc(vn.bind(null, e), n);
          break;
        }
        vn(e);
        break;
      case 5:
        vn(e);
        break;
      default:
        throw Error(b(329));
    }
  }
  return st(e, Le()), e.callbackNode === t ? mp.bind(null, e) : null;
}
function sr(e, t) {
  for (
    t &= ~Pa,
      t &= ~_r,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - en(t),
      i = 1 << n;
    (e[n] = -1), (t &= ~i);
  }
}
function Us(e) {
  if (Q & 48) throw Error(b(327));
  if ((ln(), e === Ue && e.expiredLanes & Ae)) {
    var t = Ae,
      n = Xr(e, t);
    yr & _r && ((t = pi(e, t)), (n = Xr(e, t)));
  } else (t = pi(e, 0)), (n = Xr(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((Q |= 64),
      e.hydrate && ((e.hydrate = !1), ga(e.containerInfo)),
      (t = Sd(e)),
      t !== 0 && (n = Xr(e, t))),
    n === 1)
  )
    throw ((n = tl), ar(e, 0), sr(e, t), st(e, Le()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vn(e),
    st(e, Le()),
    null
  );
}
function Ng() {
  if (At !== null) {
    var e = At;
    (At = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), st(t, Le());
      });
  }
  Ct();
}
function gp(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && (wr(), Ct());
  }
}
function vp(e, t) {
  var n = Q;
  (Q &= -2), (Q |= 8);
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && (wr(), Ct());
  }
}
function so(e, t) {
  me(Ds, Tn), (Tn |= t), (yr |= t);
}
function Aa() {
  (Tn = Ds.current), fe(Ds);
}
function ar(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ag(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var i = n;
      switch (i.tag) {
        case 1:
          (i = i.type.childContextTypes), i != null && jo();
          break;
        case 3:
          pr(), fe(We), fe(De), ka();
          break;
        case 5:
          Ea(i);
          break;
        case 4:
          pr();
          break;
        case 13:
          fe(he);
          break;
        case 19:
          fe(he);
          break;
        case 10:
          wa(i);
          break;
        case 23:
        case 24:
          Aa();
      }
      n = n.return;
    }
  (Ue = e),
    (xe = rn(e.current, null)),
    (Ae = Tn = yr = t),
    (je = 0),
    (tl = null),
    (Pa = _r = Ti = 0);
}
function yp(e, t) {
  do {
    var n = xe;
    try {
      if ((_a(), (ri.current = $o), Io)) {
        for (var i = ye.memoizedState; i !== null; ) {
          var o = i.queue;
          o !== null && (o.pending = null), (i = i.next);
        }
        Io = !1;
      }
      if (
        ((xi = 0),
        (Ne = Pe = ye = null),
        (ii = !1),
        (Oa.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (tl = t), (xe = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          c = n,
          d = t;
        if (
          ((t = Ae),
          (c.flags |= 2048),
          (c.firstEffect = c.lastEffect = null),
          d !== null && typeof d == "object" && typeof d.then == "function")
        ) {
          var y = d;
          if (!(c.mode & 2)) {
            var T = c.alternate;
            T
              ? ((c.updateQueue = T.updateQueue),
                (c.memoizedState = T.memoizedState),
                (c.lanes = T.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var $ = (he.current & 1) !== 0,
            k = a;
          do {
            var L;
            if ((L = k.tag === 13)) {
              var z = k.memoizedState;
              if (z !== null) L = z.dehydrated !== null;
              else {
                var I = k.memoizedProps;
                L =
                  I.fallback === void 0
                    ? !1
                    : I.unstable_avoidThisFallback !== !0
                    ? !0
                    : !$;
              }
            }
            if (L) {
              var h = k.updateQueue;
              if (h === null) {
                var p = new Set();
                p.add(y), (k.updateQueue = p);
              } else h.add(y);
              if (!(k.mode & 2)) {
                if (
                  ((k.flags |= 64),
                  (c.flags |= 16384),
                  (c.flags &= -2981),
                  c.tag === 1)
                )
                  if (c.alternate === null) c.tag = 17;
                  else {
                    var g = Yt(-1, 1);
                    (g.tag = 2), Kt(c, g);
                  }
                c.lanes |= 1;
                break e;
              }
              (d = void 0), (c = t);
              var x = s.pingCache;
              if (
                (x === null
                  ? ((x = s.pingCache = new Eg()), (d = new Set()), x.set(y, d))
                  : ((d = x.get(y)),
                    d === void 0 && ((d = new Set()), x.set(y, d))),
                !d.has(c))
              ) {
                d.add(c);
                var E = Mg.bind(null, s, y, c);
                y.then(E, E);
              }
              (k.flags |= 4096), (k.lanes = t);
              break e;
            }
            k = k.return;
          } while (k !== null);
          d = Error(
            (er(c.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        je !== 5 && (je = 2), (d = ja(d, c)), (k = a);
        do {
          switch (k.tag) {
            case 3:
              (s = d), (k.flags |= 4096), (t &= -t), (k.lanes |= t);
              var B = dp(k, s, t);
              Jc(k, B);
              break e;
            case 1:
              s = d;
              var j = k.type,
                U = k.stateNode;
              if (
                !(k.flags & 64) &&
                (typeof j.getDerivedStateFromError == "function" ||
                  (U !== null &&
                    typeof U.componentDidCatch == "function" &&
                    (Et === null || !Et.has(U))))
              ) {
                (k.flags |= 4096), (t &= -t), (k.lanes |= t);
                var V = pp(k, s, t);
                Jc(k, V);
                break e;
              }
          }
          k = k.return;
        } while (k !== null);
      }
      xp(n);
    } catch (R) {
      (t = R), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function _p() {
  var e = Uo.current;
  return (Uo.current = $o), e === null ? $o : e;
}
function Xr(e, t) {
  var n = Q;
  Q |= 16;
  var i = _p();
  (Ue === e && Ae === t) || ar(e, t);
  do
    try {
      jg();
      break;
    } catch (o) {
      yp(e, o);
    }
  while (1);
  if ((_a(), (Q = n), (Uo.current = i), xe !== null)) throw Error(b(261));
  return (Ue = null), (Ae = 0), je;
}
function jg() {
  for (; xe !== null; ) wp(xe);
}
function Og() {
  for (; xe !== null && !fg(); ) wp(xe);
}
function wp(e) {
  var t = kp(e.alternate, e, Tn);
  (e.memoizedProps = e.pendingProps),
    t === null ? xp(e) : (xe = t),
    (Oa.current = null);
}
function xp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 2048)) {
      if (((n = xg(t)), n !== null)) {
        (n.flags &= 2047), (xe = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    } else {
      if (((n = wg(n, t, Tn)), n !== null)) {
        xe = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          Tn & 1073741824 ||
          !(n.mode & 4))
      ) {
        for (var i = 0, o = n.child; o !== null; )
          (i |= o.lanes | o.childLanes), (o = o.sibling);
        n.childLanes = i;
      }
      e !== null &&
        !(e.flags & 2048) &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function vn(e) {
  var t = dr();
  return bn(99, Pg.bind(null, e, t)), null;
}
function Pg(e, t) {
  do ln();
  while (oi !== null);
  if (Q & 48) throw Error(b(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  e.callbackNode = null;
  var i = n.lanes | n.childLanes,
    o = i,
    s = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  for (var a = e.eventTimes, c = e.expirationTimes; 0 < s; ) {
    var d = 31 - en(s),
      y = 1 << d;
    (o[d] = 0), (a[d] = -1), (c[d] = -1), (s &= ~y);
  }
  if (
    (At !== null && !(i & 24) && At.has(e) && At.delete(e),
    e === Ue && ((xe = Ue = null), (Ae = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect))
        : (i = n)
      : (i = n.firstEffect),
    i !== null)
  ) {
    if (
      ((o = Q), (Q |= 32), (Oa.current = null), (Vl = fo), (a = Fc()), vs(a))
    ) {
      if ("selectionStart" in a)
        c = { start: a.selectionStart, end: a.selectionEnd };
      else
        e: if (
          ((c = ((c = a.ownerDocument) && c.defaultView) || window),
          (y = c.getSelection && c.getSelection()) && y.rangeCount !== 0)
        ) {
          (c = y.anchorNode),
            (s = y.anchorOffset),
            (d = y.focusNode),
            (y = y.focusOffset);
          try {
            c.nodeType, d.nodeType;
          } catch {
            c = null;
            break e;
          }
          var T = 0,
            $ = -1,
            k = -1,
            L = 0,
            z = 0,
            I = a,
            h = null;
          t: for (;;) {
            for (
              var p;
              I !== c || (s !== 0 && I.nodeType !== 3) || ($ = T + s),
                I !== d || (y !== 0 && I.nodeType !== 3) || (k = T + y),
                I.nodeType === 3 && (T += I.nodeValue.length),
                (p = I.firstChild) !== null;

            )
              (h = I), (I = p);
            for (;;) {
              if (I === a) break t;
              if (
                (h === c && ++L === s && ($ = T),
                h === d && ++z === y && (k = T),
                (p = I.nextSibling) !== null)
              )
                break;
              (I = h), (h = I.parentNode);
            }
            I = p;
          }
          c = $ === -1 || k === -1 ? null : { start: $, end: k };
        } else c = null;
      c = c || { start: 0, end: 0 };
    } else c = null;
    (Wl = { focusedElem: a, selectionRange: c }),
      (fo = !1),
      (si = null),
      (_o = !1),
      (M = i);
    do
      try {
        Lg();
      } catch (R) {
        if (M === null) throw Error(b(330));
        Gt(M, R), (M = M.nextEffect);
      }
    while (M !== null);
    (si = null), (M = i);
    do
      try {
        for (a = e; M !== null; ) {
          var g = M.flags;
          if ((g & 16 && ui(M.stateNode, ""), g & 128)) {
            var x = M.alternate;
            if (x !== null) {
              var E = x.ref;
              E !== null &&
                (typeof E == "function" ? E(null) : (E.current = null));
            }
          }
          switch (g & 1038) {
            case 2:
              Cf(M), (M.flags &= -3);
              break;
            case 6:
              Cf(M), (M.flags &= -3), Zl(M.alternate, M);
              break;
            case 1024:
              M.flags &= -1025;
              break;
            case 1028:
              (M.flags &= -1025), Zl(M.alternate, M);
              break;
            case 4:
              Zl(M.alternate, M);
              break;
            case 8:
              (c = M), hp(a, c);
              var B = c.alternate;
              kf(c), B !== null && kf(B);
          }
          M = M.nextEffect;
        }
      } catch (R) {
        if (M === null) throw Error(b(330));
        Gt(M, R), (M = M.nextEffect);
      }
    while (M !== null);
    if (
      ((E = Wl),
      (x = Fc()),
      (g = E.focusedElem),
      (a = E.selectionRange),
      x !== g && g && g.ownerDocument && Ld(g.ownerDocument.documentElement, g))
    ) {
      for (
        a !== null &&
          vs(g) &&
          ((x = a.start),
          (E = a.end),
          E === void 0 && (E = x),
          ("selectionStart" in g)
            ? ((g.selectionStart = x),
              (g.selectionEnd = Math.min(E, g.value.length)))
            : ((E =
                ((x = g.ownerDocument || document) && x.defaultView) || window),
              E.getSelection &&
                ((E = E.getSelection()),
                (c = g.textContent.length),
                (B = Math.min(a.start, c)),
                (a = a.end === void 0 ? B : Math.min(a.end, c)),
                !E.extend && B > a && ((c = a), (a = B), (B = c)),
                (c = Rc(g, B)),
                (s = Rc(g, a)),
                c &&
                  s &&
                  (E.rangeCount !== 1 ||
                    E.anchorNode !== c.node ||
                    E.anchorOffset !== c.offset ||
                    E.focusNode !== s.node ||
                    E.focusOffset !== s.offset) &&
                  ((x = x.createRange()),
                  x.setStart(c.node, c.offset),
                  E.removeAllRanges(),
                  B > a
                    ? (E.addRange(x), E.extend(s.node, s.offset))
                    : (x.setEnd(s.node, s.offset), E.addRange(x)))))),
          x = [],
          E = g;
        (E = E.parentNode);

      )
        E.nodeType === 1 &&
          x.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
      for (typeof g.focus == "function" && g.focus(), g = 0; g < x.length; g++)
        (E = x[g]),
          (E.element.scrollLeft = E.left),
          (E.element.scrollTop = E.top);
    }
    (fo = !!Vl), (Wl = Vl = null), (e.current = n), (M = i);
    do
      try {
        for (g = e; M !== null; ) {
          var j = M.flags;
          if ((j & 36 && Cg(g, M.alternate, M), j & 128)) {
            x = void 0;
            var U = M.ref;
            if (U !== null) {
              var V = M.stateNode;
              switch (M.tag) {
                case 5:
                  x = V;
                  break;
                default:
                  x = V;
              }
              typeof U == "function" ? U(x) : (U.current = x);
            }
          }
          M = M.nextEffect;
        }
      } catch (R) {
        if (M === null) throw Error(b(330));
        Gt(M, R), (M = M.nextEffect);
      }
    while (M !== null);
    (M = null), pg(), (Q = o);
  } else e.current = n;
  if (nn) (nn = !1), (oi = e), (Kr = t);
  else
    for (M = i; M !== null; )
      (t = M.nextEffect),
        (M.nextEffect = null),
        M.flags & 8 && ((j = M), (j.sibling = null), (j.stateNode = null)),
        (M = t);
  if (
    ((i = e.pendingLanes),
    i === 0 && (Et = null),
    i === 1 ? (e === $s ? li++ : ((li = 0), ($s = e))) : (li = 0),
    (n = n.stateNode),
    Sn && typeof Sn.onCommitFiberRoot == "function")
  )
    try {
      Sn.onCommitFiberRoot(va, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((st(e, Le()), Bo)) throw ((Bo = !1), (e = zs), (zs = null), e);
  return Q & 8 || Ct(), null;
}
function Lg() {
  for (; M !== null; ) {
    var e = M.alternate;
    _o ||
      si === null ||
      (M.flags & 8
        ? Sc(M, si) && (_o = !0)
        : M.tag === 13 && bg(e, M) && Sc(M, si) && (_o = !0));
    var t = M.flags;
    t & 256 && Sg(e, M),
      !(t & 512) ||
        nn ||
        ((nn = !0),
        vi(97, function () {
          return ln(), null;
        })),
      (M = M.nextEffect);
  }
}
function ln() {
  if (Kr !== 90) {
    var e = 97 < Kr ? 97 : Kr;
    return (Kr = 90), bn(e, Dg);
  }
  return !1;
}
function Ag(e, t) {
  Rs.push(t, e),
    nn ||
      ((nn = !0),
      vi(97, function () {
        return ln(), null;
      }));
}
function Ep(e, t) {
  Fs.push(t, e),
    nn ||
      ((nn = !0),
      vi(97, function () {
        return ln(), null;
      }));
}
function Dg() {
  if (oi === null) return !1;
  var e = oi;
  if (((oi = null), Q & 48)) throw Error(b(331));
  var t = Q;
  Q |= 32;
  var n = Fs;
  Fs = [];
  for (var i = 0; i < n.length; i += 2) {
    var o = n[i],
      s = n[i + 1],
      a = o.destroy;
    if (((o.destroy = void 0), typeof a == "function"))
      try {
        a();
      } catch (d) {
        if (s === null) throw Error(b(330));
        Gt(s, d);
      }
  }
  for (n = Rs, Rs = [], i = 0; i < n.length; i += 2) {
    (o = n[i]), (s = n[i + 1]);
    try {
      var c = o.create;
      o.destroy = c();
    } catch (d) {
      if (s === null) throw Error(b(330));
      Gt(s, d);
    }
  }
  for (c = e.current.firstEffect; c !== null; )
    (e = c.nextEffect),
      (c.nextEffect = null),
      c.flags & 8 && ((c.sibling = null), (c.stateNode = null)),
      (c = e);
  return (Q = t), Ct(), !0;
}
function Tf(e, t, n) {
  (t = ja(n, t)),
    (t = dp(e, t, 1)),
    Kt(e, t),
    (t = Ge()),
    (e = nl(e, 1)),
    e !== null && (Ko(e, 1, t), st(e, t));
}
function Gt(e, t) {
  if (e.tag === 3) Tf(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Tf(n, e, t);
        break;
      } else if (n.tag === 1) {
        var i = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (Et === null || !Et.has(i)))
        ) {
          e = ja(t, e);
          var o = pp(n, e, 1);
          if ((Kt(n, o), (o = Ge()), (n = nl(n, 1)), n !== null))
            Ko(n, 1, o), st(n, o);
          else if (
            typeof i.componentDidCatch == "function" &&
            (Et === null || !Et.has(i))
          )
            try {
              i.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function Mg(e, t, n) {
  var i = e.pingCache;
  i !== null && i.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ue === e &&
      (Ae & n) === n &&
      (je === 4 || (je === 3 && (Ae & 62914560) === Ae && 500 > Le() - La)
        ? ar(e, 0)
        : (Pa |= n)),
    st(e, t);
}
function Ig(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      t & 2
        ? t & 4
          ? (Ot === 0 && (Ot = yr),
            (t = Yn(62914560 & ~Ot)),
            t === 0 && (t = 4194304))
          : (t = dr() === 99 ? 1 : 2)
        : (t = 1)),
    (n = Ge()),
    (e = nl(e, t)),
    e !== null && (Ko(e, t, n), st(e, n));
}
var kp;
kp = function (e, t, n) {
  var i = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) ht = !0;
    else if (n & i) ht = !!(e.flags & 16384);
    else {
      switch (((ht = !1), t.tag)) {
        case 3:
          pf(t), Xl();
          break;
        case 5:
          rf(t);
          break;
        case 1:
          Qe(t.type) && mo(t);
          break;
        case 4:
          Cs(t, t.stateNode.containerInfo);
          break;
        case 10:
          i = t.memoizedProps.value;
          var o = t.type._context;
          me(Oo, o._currentValue), (o._currentValue = i);
          break;
        case 13:
          if (t.memoizedState !== null)
            return n & t.child.childLanes
              ? hf(e, t, n)
              : (me(he, he.current & 1),
                (t = Lt(e, t, n)),
                t !== null ? t.sibling : null);
          me(he, he.current & 1);
          break;
        case 19:
          if (((i = (n & t.childLanes) !== 0), e.flags & 64)) {
            if (i) return _f(e, t, n);
            t.flags |= 64;
          }
          if (
            ((o = t.memoizedState),
            o !== null &&
              ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            me(he, he.current),
            i)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), ql(e, t, n);
      }
      return Lt(e, t, n);
    }
  else ht = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((i = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (o = fr(t, De.current)),
        or(t, n),
        (o = Ca(null, t, i, e, o, n)),
        (t.flags |= 1),
        typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), Qe(i))
        ) {
          var s = !0;
          mo(t);
        } else s = !1;
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
          xa(t);
        var a = i.getDerivedStateFromProps;
        typeof a == "function" && Ao(t, i, a, e),
          (o.updater = el),
          (t.stateNode = o),
          (o._reactInternals = t),
          Ss(t, i, e, n),
          (t = js(null, t, i, !0, s, n));
      } else (t.tag = 0), Ve(null, t, o, n), (t = t.child);
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (s = o._init),
          (o = s(o._payload)),
          (t.type = o),
          (s = t.tag = Rg(o)),
          (e = pt(o, e)),
          s)
        ) {
          case 0:
            t = Ns(null, t, o, e, n);
            break e;
          case 1:
            t = df(null, t, o, e, n);
            break e;
          case 11:
            t = cf(null, t, o, e, n);
            break e;
          case 14:
            t = ff(null, t, o, pt(o.type, e), i, n);
            break e;
        }
        throw Error(b(306, o, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : pt(i, o)),
        Ns(e, t, i, o, n)
      );
    case 1:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : pt(i, o)),
        df(e, t, i, o, n)
      );
    case 3:
      if ((pf(t), (i = t.updateQueue), e === null || i === null))
        throw Error(b(282));
      if (
        ((i = t.pendingProps),
        (o = t.memoizedState),
        (o = o !== null ? o.element : null),
        Kd(e, t),
        yi(t, i, null, n),
        (i = t.memoizedState.element),
        i === o)
      )
        Xl(), (t = Lt(e, t, n));
      else {
        if (
          ((o = t.stateNode),
          (s = o.hydrate) &&
            ((Ht = ir(t.stateNode.containerInfo.firstChild)),
            (Pt = t),
            (s = St = !0)),
          s)
        ) {
          if (((e = o.mutableSourceEagerHydrationData), e != null))
            for (o = 0; o < e.length; o += 2)
              (s = e[o]),
                (s._workInProgressVersionPrimary = e[o + 1]),
                lr.push(s);
          for (n = Zd(t, null, i, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else Ve(e, t, i, n), Xl();
        t = t.child;
      }
      return t;
    case 5:
      return (
        rf(t),
        e === null && bs(t),
        (i = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = o.children),
        ws(i, o) ? (a = null) : s !== null && ws(i, s) && (t.flags |= 16),
        ap(e, t),
        Ve(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && bs(t), null;
    case 13:
      return hf(e, t, n);
    case 4:
      return (
        Cs(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = Do(t, null, i, n)) : Ve(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : pt(i, o)),
        cf(e, t, i, o, n)
      );
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (i = t.type._context),
          (o = t.pendingProps),
          (a = t.memoizedProps),
          (s = o.value);
        var c = t.type._context;
        if ((me(Oo, c._currentValue), (c._currentValue = s), a !== null))
          if (
            ((c = a.value),
            (s = rt(c, s)
              ? 0
              : (typeof i._calculateChangedBits == "function"
                  ? i._calculateChangedBits(c, s)
                  : 1073741823) | 0),
            s === 0)
          ) {
            if (a.children === o.children && !We.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (c = t.child, c !== null && (c.return = t); c !== null; ) {
              var d = c.dependencies;
              if (d !== null) {
                a = c.child;
                for (var y = d.firstContext; y !== null; ) {
                  if (y.context === i && y.observedBits & s) {
                    c.tag === 1 &&
                      ((y = Yt(-1, n & -n)), (y.tag = 2), Kt(c, y)),
                      (c.lanes |= n),
                      (y = c.alternate),
                      y !== null && (y.lanes |= n),
                      Yd(c.return, n),
                      (d.lanes |= n);
                    break;
                  }
                  y = y.next;
                }
              } else a = c.tag === 10 && c.type === t.type ? null : c.child;
              if (a !== null) a.return = c;
              else
                for (a = c; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((c = a.sibling), c !== null)) {
                    (c.return = a.return), (a = c);
                    break;
                  }
                  a = a.return;
                }
              c = a;
            }
        Ve(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (i = s.children),
        or(t, n),
        (o = lt(o, s.unstable_observedBits)),
        (i = i(o)),
        (t.flags |= 1),
        Ve(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (s = pt(o, t.pendingProps)),
        (s = pt(o.type, s)),
        ff(e, t, o, s, i, n)
      );
    case 15:
      return sp(e, t, t.type, t.pendingProps, i, n);
    case 17:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : pt(i, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Qe(i) ? ((e = !0), mo(t)) : (e = !1),
        or(t, n),
        qd(t, i, o),
        Ss(t, i, o, n),
        js(null, t, i, !0, e, n)
      );
    case 19:
      return _f(e, t, n);
    case 23:
      return ql(e, t, n);
    case 24:
      return ql(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function zg(e, t, n, i) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function it(e, t, n, i) {
  return new zg(e, t, n, i);
}
function Da(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rg(e) {
  if (typeof e == "function") return Da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wo)) return 11;
    if (e === Qo) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = it(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function wo(e, t, n, i, o, s) {
  var a = 2;
  if (((i = e), typeof e == "function")) Da(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case $t:
        return ur(n.children, o, s, t);
      case Jf:
        (a = 8), (o |= 16);
        break;
      case qs:
        (a = 8), (o |= 1);
        break;
      case qr:
        return (
          (e = it(12, n, t, o | 8)),
          (e.elementType = qr),
          (e.type = qr),
          (e.lanes = s),
          e
        );
      case Gr:
        return (
          (e = it(13, n, t, o)),
          (e.type = Gr),
          (e.elementType = Gr),
          (e.lanes = s),
          e
        );
      case xo:
        return (e = it(19, n, t, o)), (e.elementType = xo), (e.lanes = s), e;
      case na:
        return Ma(n, o, s, t);
      case ns:
        return (e = it(24, n, t, o)), (e.elementType = ns), (e.lanes = s), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gs:
              a = 10;
              break e;
            case Zs:
              a = 9;
              break e;
            case Wo:
              a = 11;
              break e;
            case Qo:
              a = 14;
              break e;
            case Js:
              (a = 16), (i = null);
              break e;
            case ea:
              a = 22;
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = it(a, n, t, o)), (t.elementType = e), (t.type = i), (t.lanes = s), t
  );
}
function ur(e, t, n, i) {
  return (e = it(7, e, i, t)), (e.lanes = n), e;
}
function Ma(e, t, n, i) {
  return (e = it(23, e, i, t)), (e.elementType = na), (e.lanes = n), e;
}
function Jl(e, t, n) {
  return (e = it(6, e, null, t)), (e.lanes = n), e;
}
function es(e, t, n) {
  return (
    (t = it(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Fg(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function $g(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ho(e, t, n, i) {
  var o = t.current,
    s = Ge(),
    a = Xt(o);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (On(n) !== n || n.tag !== 1) throw Error(b(170));
      var c = n;
      do {
        switch (c.tag) {
          case 3:
            c = c.stateNode.context;
            break t;
          case 1:
            if (Qe(c.type)) {
              c = c.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        c = c.return;
      } while (c !== null);
      throw Error(b(171));
    }
    if (n.tag === 1) {
      var d = n.type;
      if (Qe(d)) {
        n = $d(n, d, c);
        break e;
      }
    }
    n = c;
  } else n = tn;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(s, a)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    Kt(o, t),
    qt(o, a, s),
    a
  );
}
function ts(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Nf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ia(e, t) {
  Nf(e, t), (e = e.alternate) && Nf(e, t);
}
function Ug() {
  return null;
}
function za(e, t, n) {
  var i =
    (n != null &&
      n.hydrationOptions != null &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new Fg(e, t, n != null && n.hydrate === !0)),
    (t = it(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    xa(t),
    (e[vr] = n.current),
    Md(e.nodeType === 8 ? e.parentNode : e),
    i)
  )
    for (e = 0; e < i.length; e++) {
      t = i[e];
      var o = t._getVersion;
      (o = o(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, o])
          : n.mutableSourceEagerHydrationData.push(t, o);
    }
  this._internalRoot = n;
}
za.prototype.render = function (e) {
  Ho(e, this._internalRoot, null, null);
};
za.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  Ho(null, e, null, function () {
    t[vr] = null;
  });
};
function Ni(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bg(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new za(e, 0, t ? { hydrate: !0 } : void 0);
}
function rl(e, t, n, i, o) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s._internalRoot;
    if (typeof o == "function") {
      var c = o;
      o = function () {
        var y = ts(a);
        c.call(y);
      };
    }
    Ho(t, a, e, o);
  } else {
    if (
      ((s = n._reactRootContainer = Bg(n, i)),
      (a = s._internalRoot),
      typeof o == "function")
    ) {
      var d = o;
      o = function () {
        var y = ts(a);
        d.call(y);
      };
    }
    vp(function () {
      Ho(t, a, e, o);
    });
  }
  return ts(a);
}
hd = function (e) {
  if (e.tag === 13) {
    var t = Ge();
    qt(e, 4, t), Ia(e, 4);
  }
};
sa = function (e) {
  if (e.tag === 13) {
    var t = Ge();
    qt(e, 67108864, t), Ia(e, 67108864);
  }
};
md = function (e) {
  if (e.tag === 13) {
    var t = Ge(),
      n = Xt(e);
    qt(e, n, t), Ia(e, n);
  }
};
gd = function (e, t) {
  return t();
};
ds = function (e, t, n) {
  switch (t) {
    case "input":
      if ((is(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var o = Zo(i);
            if (!o) throw Error(b(90));
            td(i), is(i, o);
          }
        }
      }
      break;
    case "textarea":
      rd(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
ia = gp;
cd = function (e, t, n, i, o) {
  var s = Q;
  Q |= 4;
  try {
    return bn(98, e.bind(null, t, n, i, o));
  } finally {
    (Q = s), Q === 0 && (wr(), Ct());
  }
};
oa = function () {
  !(Q & 49) && (Ng(), ln());
};
fd = function (e, t) {
  var n = Q;
  Q |= 2;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && (wr(), Ct());
  }
};
function Sp(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ni(t)) throw Error(b(200));
  return $g(e, t, null, n);
}
var Hg = { Events: [Ci, Gn, Zo, ad, ud, ln, { current: !1 }] },
  Vr = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  Vg = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Ug,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ao.isDisabled && ao.supportsFiber)
    try {
      (va = ao.inject(Vg)), (Sn = ao);
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hg;
at.createPortal = Sp;
at.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : Error(b(268, Object.keys(e)));
  return (e = pd(t)), (e = e === null ? null : e.stateNode), e;
};
at.flushSync = function (e, t) {
  var n = Q;
  if (n & 48) return e(t);
  Q |= 1;
  try {
    if (e) return bn(99, e.bind(null, t));
  } finally {
    (Q = n), Ct();
  }
};
at.hydrate = function (e, t, n) {
  if (!Ni(t)) throw Error(b(200));
  return rl(null, e, t, !0, n);
};
at.render = function (e, t, n) {
  if (!Ni(t)) throw Error(b(200));
  return rl(null, e, t, !1, n);
};
at.unmountComponentAtNode = function (e) {
  if (!Ni(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (vp(function () {
        rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vr] = null);
        });
      }),
      !0)
    : !1;
};
at.unstable_batchedUpdates = gp;
at.unstable_createPortal = function (e, t) {
  return Sp(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
at.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Ni(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return rl(e, t, n, !1, i);
};
at.version = "17.0.2";
function Cp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cp);
    } catch (e) {
      console.error(e);
    }
}
Cp(), (Xf.exports = at);
var Wg = Xf.exports;
const Qg = Of(Wg);
function Yg({ currentPage: e, handlePageChange: t }) {
  return _.jsxs("header", {
    children: [
      _.jsx("h1", { children: "Moises Perez Portfolio" }),
      _.jsx("nav", {
        children: _.jsxs("ul", {
          className: "nav nav-tabs",
          children: [
            _.jsx("li", {
              className: "nav-item",
              children: _.jsx("a", {
                href: "#about-me",
                onClick: () => t("AboutMe"),
                className: e === "AboutMe" ? "nav-link active" : "nav-link",
                children: "About Me",
              }),
            }),
            _.jsx("li", {
              className: "nav-item",
              children: _.jsx("a", {
                href: "#portfolio",
                onClick: () => t("Portfolio"),
                className: e === "Portfolio" ? "nav-link active" : "nav-link",
                children: "Portfolio",
              }),
            }),
            _.jsx("li", {
              className: "nav-item",
              children: _.jsx("a", {
                href: "#resume",
                onClick: () => t("Resume"),
                className: e === "Resume" ? "nav-link active" : "nav-link",
                children: "Resume",
              }),
            }),
            _.jsx("li", {
              className: "nav-item",
              children: _.jsx("a", {
                href: "#contact",
                onClick: () => t("Contact"),
                className: e === "Contact" ? "nav-link active" : "nav-link",
                children: "Contact",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Kg() {
  return _.jsxs("div", {
    children: [
      _.jsx("h2", { className: "m-5", children: "About Page" }),
      _.jsx("img", {
        src: "images/Me.jpg",
        className: "img-fluid rounded mx-auto d-flex w-25",
      }),
      _.jsx("div", {
        className: "container text-bg-light p-2 m-5",
        children: _.jsx("p", {
          children:
            "I'm a hardworking engineer with adaptability in adverse situations, with abilities to work under pressure and deliver projects on time. A big fan of solving problems and learning about my professional areas of interest such as automation, data science, cloud computing, and IT. As a fresh engineer, I love to learn, and I consider myself a very passionate professional that enjoys developing technological challenges and making them grow. Today, I'm looking to develop my coding skills through the Tecnologico de Monterrey Coding Bootcamp. I understand the day-to-day changing trends in industrial technology, so I'm seeking to develop my knowledge to have a greater impact in Industry 4.0.",
        }),
      }),
    ],
  });
}
function Xg(e) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(e).toLowerCase()
  );
}
function qg() {
  const [e, t] = jt.useState(""),
    [n, i] = jt.useState(""),
    [o, s] = jt.useState(""),
    [a, c] = jt.useState(""),
    [d, y] = jt.useState("");
  function T(z) {
    const { target: I } = z,
      h = I.name,
      p = I.value;
    h === "email" ? t(p) : h === "userName" && i(p);
  }
  function $() {
    e ? (Xg(e) ? s("") : s("Email is not valid")) : s("Email is required");
  }
  function k() {
    c(n ? "" : "Username is required");
  }
  function L(z) {
    if ((z.preventDefault(), o || a)) {
      y("Please fill out all required fields");
      return;
    }
    window.alert(
      `Thank you for your message ${n}, I'll looking forward to contact you later `
    ),
      t(""),
      i("");
  }
  return _.jsxs("div", {
    className: "container d-flex flex-column m-5",
    children: [
      _.jsx("h2", { children: "Contact Form" }),
      _.jsxs("p", { children: ["Hello ", n] }),
      _.jsxs("form", {
        children: [
          _.jsx("br", {}),
          _.jsxs("div", {
            className: "mb-3",
            children: [
              _.jsxs("label", {
                htmlFor: "exampleFormControlInput1",
                className: "form-label",
                children: ["Email address:", " "],
              }),
              _.jsx("input", {
                value: e,
                name: "email",
                onChange: T,
                onBlur: $,
                type: "email",
                placeholder: "name@example.com",
                className: "form-control",
              }),
              o && _.jsx("div", { className: "error-text", children: o }),
            ],
          }),
          _.jsxs("div", {
            className: "mb-3",
            children: [
              _.jsxs("label", {
                htmlFor: "exampleFormControlInput1",
                className: "form-label",
                children: ["Username:", " "],
              }),
              _.jsx("input", {
                value: n,
                name: "userName",
                onChange: T,
                onBlur: k,
                type: "text",
                placeholder: "Username",
                className: "form-control",
              }),
              a && _.jsx("div", { className: "error-text", children: a }),
            ],
          }),
          _.jsxs("div", {
            className: "mb-3",
            children: [
              _.jsxs("label", {
                htmlFor: "exampleFormControlTextarea1",
                className: "form-label",
                children: ["Message:", " "],
              }),
              _.jsx("textarea", { className: "form-control", rows: "3" }),
            ],
          }),
          _.jsx("button", {
            type: "button",
            className: "btn btn-outline-secondary",
            onClick: L,
            children: "Submit",
          }),
        ],
      }),
      d &&
        _.jsx("div", {
          children: _.jsx("p", { className: "error-text", children: d }),
        }),
    ],
  });
}
var Gg = { exports: {} };
/*!
 * Bootstrap v5.2.3 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
  (function (n, i) {
    e.exports = i();
  })(Ih, function () {
    const n = "transitionend",
      i = (u) => {
        let r = u.getAttribute("data-bs-target");
        if (!r || r === "#") {
          let l = u.getAttribute("href");
          if (!l || (!l.includes("#") && !l.startsWith("."))) return null;
          l.includes("#") && !l.startsWith("#") && (l = `#${l.split("#")[1]}`),
            (r = l && l !== "#" ? l.trim() : null);
        }
        return r;
      },
      o = (u) => {
        const r = i(u);
        return r && document.querySelector(r) ? r : null;
      },
      s = (u) => {
        const r = i(u);
        return r ? document.querySelector(r) : null;
      },
      a = (u) => {
        u.dispatchEvent(new Event(n));
      },
      c = (u) =>
        !(!u || typeof u != "object") &&
        (u.jquery !== void 0 && (u = u[0]), u.nodeType !== void 0),
      d = (u) =>
        c(u)
          ? u.jquery
            ? u[0]
            : u
          : typeof u == "string" && u.length > 0
          ? document.querySelector(u)
          : null,
      y = (u) => {
        if (!c(u) || u.getClientRects().length === 0) return !1;
        const r =
            getComputedStyle(u).getPropertyValue("visibility") === "visible",
          l = u.closest("details:not([open])");
        if (!l) return r;
        if (l !== u) {
          const f = u.closest("summary");
          if ((f && f.parentNode !== l) || f === null) return !1;
        }
        return r;
      },
      T = (u) =>
        !u ||
        u.nodeType !== Node.ELEMENT_NODE ||
        !!u.classList.contains("disabled") ||
        (u.disabled !== void 0
          ? u.disabled
          : u.hasAttribute("disabled") &&
            u.getAttribute("disabled") !== "false"),
      $ = (u) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof u.getRootNode == "function") {
          const r = u.getRootNode();
          return r instanceof ShadowRoot ? r : null;
        }
        return u instanceof ShadowRoot
          ? u
          : u.parentNode
          ? $(u.parentNode)
          : null;
      },
      k = () => {},
      L = (u) => {
        u.offsetHeight;
      },
      z = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      I = [],
      h = () => document.documentElement.dir === "rtl",
      p = (u) => {
        var r;
        (r = () => {
          const l = z();
          if (l) {
            const f = u.NAME,
              m = l.fn[f];
            (l.fn[f] = u.jQueryInterface),
              (l.fn[f].Constructor = u),
              (l.fn[f].noConflict = () => ((l.fn[f] = m), u.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (I.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const l of I) l();
                }),
              I.push(r))
            : r();
      },
      g = (u) => {
        typeof u == "function" && u();
      },
      x = (u, r, l = !0) => {
        if (!l) return void g(u);
        const f =
          ((w) => {
            if (!w) return 0;
            let { transitionDuration: S, transitionDelay: N } =
              window.getComputedStyle(w);
            const A = Number.parseFloat(S),
              D = Number.parseFloat(N);
            return A || D
              ? ((S = S.split(",")[0]),
                (N = N.split(",")[0]),
                1e3 * (Number.parseFloat(S) + Number.parseFloat(N)))
              : 0;
          })(r) + 5;
        let m = !1;
        const v = ({ target: w }) => {
          w === r && ((m = !0), r.removeEventListener(n, v), g(u));
        };
        r.addEventListener(n, v),
          setTimeout(() => {
            m || a(r);
          }, f);
      },
      E = (u, r, l, f) => {
        const m = u.length;
        let v = u.indexOf(r);
        return v === -1
          ? !l && f
            ? u[m - 1]
            : u[0]
          : ((v += l ? 1 : -1),
            f && (v = (v + m) % m),
            u[Math.max(0, Math.min(v, m - 1))]);
      },
      B = /[^.]*(?=\..*)\.|.*/,
      j = /\..*/,
      U = /::\d+$/,
      V = {};
    let R = 1;
    const _e = { mouseenter: "mouseover", mouseleave: "mouseout" },
      xr = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function Me(u, r) {
      return (r && `${r}::${R++}`) || u.uidEvent || R++;
    }
    function we(u) {
      const r = Me(u);
      return (u.uidEvent = r), (V[r] = V[r] || {}), V[r];
    }
    function sn(u, r, l = null) {
      return Object.values(u).find(
        (f) => f.callable === r && f.delegationSelector === l
      );
    }
    function mt(u, r, l) {
      const f = typeof r == "string",
        m = f ? l : r || l;
      let v = Ln(u);
      return xr.has(v) || (v = u), [f, m, v];
    }
    function It(u, r, l, f, m) {
      if (typeof r != "string" || !u) return;
      let [v, w, S] = mt(r, l, f);
      r in _e &&
        (w = ((Y) =>
          function (W) {
            if (
              !W.relatedTarget ||
              (W.relatedTarget !== W.delegateTarget &&
                !W.delegateTarget.contains(W.relatedTarget))
            )
              return Y.call(this, W);
          })(w));
      const N = we(u),
        A = N[S] || (N[S] = {}),
        D = sn(A, w, v ? l : null);
      if (D) return void (D.oneOff = D.oneOff && m);
      const P = Me(w, r.replace(B, "")),
        G = v
          ? (function (H, Y, W) {
              return function K(oe) {
                const ae = H.querySelectorAll(Y);
                for (let { target: J } = oe; J && J !== this; J = J.parentNode)
                  for (const ne of ae)
                    if (ne === J)
                      return (
                        O(oe, { delegateTarget: J }),
                        K.oneOff && C.off(H, oe.type, Y, W),
                        W.apply(J, [oe])
                      );
              };
            })(u, l, w)
          : (function (H, Y) {
              return function W(K) {
                return (
                  O(K, { delegateTarget: H }),
                  W.oneOff && C.off(H, K.type, Y),
                  Y.apply(H, [K])
                );
              };
            })(u, w);
      (G.delegationSelector = v ? l : null),
        (G.callable = w),
        (G.oneOff = m),
        (G.uidEvent = P),
        (A[P] = G),
        u.addEventListener(S, G, v);
    }
    function an(u, r, l, f, m) {
      const v = sn(r[l], f, m);
      v && (u.removeEventListener(l, v, !!m), delete r[l][v.uidEvent]);
    }
    function Er(u, r, l, f) {
      const m = r[l] || {};
      for (const v of Object.keys(m))
        if (v.includes(f)) {
          const w = m[v];
          an(u, r, l, w.callable, w.delegationSelector);
        }
    }
    function Ln(u) {
      return (u = u.replace(j, "")), _e[u] || u;
    }
    const C = {
      on(u, r, l, f) {
        It(u, r, l, f, !1);
      },
      one(u, r, l, f) {
        It(u, r, l, f, !0);
      },
      off(u, r, l, f) {
        if (typeof r != "string" || !u) return;
        const [m, v, w] = mt(r, l, f),
          S = w !== r,
          N = we(u),
          A = N[w] || {},
          D = r.startsWith(".");
        if (v === void 0) {
          if (D) for (const P of Object.keys(N)) Er(u, N, P, r.slice(1));
          for (const P of Object.keys(A)) {
            const G = P.replace(U, "");
            if (!S || r.includes(G)) {
              const H = A[P];
              an(u, N, w, H.callable, H.delegationSelector);
            }
          }
        } else {
          if (!Object.keys(A).length) return;
          an(u, N, w, v, m ? l : null);
        }
      },
      trigger(u, r, l) {
        if (typeof r != "string" || !u) return null;
        const f = z();
        let m = null,
          v = !0,
          w = !0,
          S = !1;
        r !== Ln(r) &&
          f &&
          ((m = f.Event(r, l)),
          f(u).trigger(m),
          (v = !m.isPropagationStopped()),
          (w = !m.isImmediatePropagationStopped()),
          (S = m.isDefaultPrevented()));
        let N = new Event(r, { bubbles: v, cancelable: !0 });
        return (
          (N = O(N, l)),
          S && N.preventDefault(),
          w && u.dispatchEvent(N),
          N.defaultPrevented && m && m.preventDefault(),
          N
        );
      },
    };
    function O(u, r) {
      for (const [l, f] of Object.entries(r || {}))
        try {
          u[l] = f;
        } catch {
          Object.defineProperty(u, l, { configurable: !0, get: () => f });
        }
      return u;
    }
    const F = new Map(),
      X = {
        set(u, r, l) {
          F.has(u) || F.set(u, new Map());
          const f = F.get(u);
          f.has(r) || f.size === 0
            ? f.set(r, l)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(f.keys())[0]
                }.`
              );
        },
        get: (u, r) => (F.has(u) && F.get(u).get(r)) || null,
        remove(u, r) {
          if (!F.has(u)) return;
          const l = F.get(u);
          l.delete(r), l.size === 0 && F.delete(u);
        },
      };
    function de(u) {
      if (u === "true") return !0;
      if (u === "false") return !1;
      if (u === Number(u).toString()) return Number(u);
      if (u === "" || u === "null") return null;
      if (typeof u != "string") return u;
      try {
        return JSON.parse(decodeURIComponent(u));
      } catch {
        return u;
      }
    }
    function ge(u) {
      return u.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
    }
    const Ce = {
      setDataAttribute(u, r, l) {
        u.setAttribute(`data-bs-${ge(r)}`, l);
      },
      removeDataAttribute(u, r) {
        u.removeAttribute(`data-bs-${ge(r)}`);
      },
      getDataAttributes(u) {
        if (!u) return {};
        const r = {},
          l = Object.keys(u.dataset).filter(
            (f) => f.startsWith("bs") && !f.startsWith("bsConfig")
          );
        for (const f of l) {
          let m = f.replace(/^bs/, "");
          (m = m.charAt(0).toLowerCase() + m.slice(1, m.length)),
            (r[m] = de(u.dataset[f]));
        }
        return r;
      },
      getDataAttribute: (u, r) => de(u.getAttribute(`data-bs-${ge(r)}`)),
    };
    class Ye {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(r) {
        return (
          (r = this._mergeConfigObj(r)),
          (r = this._configAfterMerge(r)),
          this._typeCheckConfig(r),
          r
        );
      }
      _configAfterMerge(r) {
        return r;
      }
      _mergeConfigObj(r, l) {
        const f = c(l) ? Ce.getDataAttribute(l, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof f == "object" ? f : {}),
          ...(c(l) ? Ce.getDataAttributes(l) : {}),
          ...(typeof r == "object" ? r : {}),
        };
      }
      _typeCheckConfig(r, l = this.constructor.DefaultType) {
        for (const m of Object.keys(l)) {
          const v = l[m],
            w = r[m],
            S = c(w)
              ? "element"
              : (f = w) == null
              ? `${f}`
              : Object.prototype.toString
                  .call(f)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(v).test(S))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${m}" provided type "${S}" but expected type "${v}".`
            );
        }
        var f;
      }
    }
    class be extends Ye {
      constructor(r, l) {
        super(),
          (r = d(r)) &&
            ((this._element = r),
            (this._config = this._getConfig(l)),
            X.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        X.remove(this._element, this.constructor.DATA_KEY),
          C.off(this._element, this.constructor.EVENT_KEY);
        for (const r of Object.getOwnPropertyNames(this)) this[r] = null;
      }
      _queueCallback(r, l, f = !0) {
        x(r, l, f);
      }
      _getConfig(r) {
        return (
          (r = this._mergeConfigObj(r, this._element)),
          (r = this._configAfterMerge(r)),
          this._typeCheckConfig(r),
          r
        );
      }
      static getInstance(r) {
        return X.get(d(r), this.DATA_KEY);
      }
      static getOrCreateInstance(r, l = {}) {
        return (
          this.getInstance(r) || new this(r, typeof l == "object" ? l : null)
        );
      }
      static get VERSION() {
        return "5.2.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(r) {
        return `${r}${this.EVENT_KEY}`;
      }
    }
    const ut = (u, r = "hide") => {
      const l = `click.dismiss${u.EVENT_KEY}`,
        f = u.NAME;
      C.on(document, l, `[data-bs-dismiss="${f}"]`, function (m) {
        if (
          (["A", "AREA"].includes(this.tagName) && m.preventDefault(), T(this))
        )
          return;
        const v = s(this) || this.closest(`.${f}`);
        u.getOrCreateInstance(v)[r]();
      });
    };
    class kr extends be {
      static get NAME() {
        return "alert";
      }
      close() {
        if (C.trigger(this._element, "close.bs.alert").defaultPrevented) return;
        this._element.classList.remove("show");
        const r = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, r);
      }
      _destroyElement() {
        this._element.remove(),
          C.trigger(this._element, "closed.bs.alert"),
          this.dispose();
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = kr.getOrCreateInstance(this);
          if (typeof r == "string") {
            if (l[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            l[r](this);
          }
        });
      }
    }
    ut(kr, "close"), p(kr);
    const Ra = '[data-bs-toggle="button"]';
    class Sr extends be {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = Sr.getOrCreateInstance(this);
          r === "toggle" && l[r]();
        });
      }
    }
    C.on(document, "click.bs.button.data-api", Ra, (u) => {
      u.preventDefault();
      const r = u.target.closest(Ra);
      Sr.getOrCreateInstance(r).toggle();
    }),
      p(Sr);
    const q = {
        find: (u, r = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(r, u)),
        findOne: (u, r = document.documentElement) =>
          Element.prototype.querySelector.call(r, u),
        children: (u, r) =>
          [].concat(...u.children).filter((l) => l.matches(r)),
        parents(u, r) {
          const l = [];
          let f = u.parentNode.closest(r);
          for (; f; ) l.push(f), (f = f.parentNode.closest(r));
          return l;
        },
        prev(u, r) {
          let l = u.previousElementSibling;
          for (; l; ) {
            if (l.matches(r)) return [l];
            l = l.previousElementSibling;
          }
          return [];
        },
        next(u, r) {
          let l = u.nextElementSibling;
          for (; l; ) {
            if (l.matches(r)) return [l];
            l = l.nextElementSibling;
          }
          return [];
        },
        focusableChildren(u) {
          const r = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((l) => `${l}:not([tabindex^="-"])`)
            .join(",");
          return this.find(r, u).filter((l) => !T(l) && y(l));
        },
      },
      Np = { endCallback: null, leftCallback: null, rightCallback: null },
      jp = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class ji extends Ye {
      constructor(r, l) {
        super(),
          (this._element = r),
          r &&
            ji.isSupported() &&
            ((this._config = this._getConfig(l)),
            (this._deltaX = 0),
            (this._supportPointerEvents = !!window.PointerEvent),
            this._initEvents());
      }
      static get Default() {
        return Np;
      }
      static get DefaultType() {
        return jp;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        C.off(this._element, ".bs.swipe");
      }
      _start(r) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(r) && (this._deltaX = r.clientX)
          : (this._deltaX = r.touches[0].clientX);
      }
      _end(r) {
        this._eventIsPointerPenTouch(r) &&
          (this._deltaX = r.clientX - this._deltaX),
          this._handleSwipe(),
          g(this._config.endCallback);
      }
      _move(r) {
        this._deltaX =
          r.touches && r.touches.length > 1
            ? 0
            : r.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const r = Math.abs(this._deltaX);
        if (r <= 40) return;
        const l = r / this._deltaX;
        (this._deltaX = 0),
          l &&
            g(l > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (C.on(this._element, "pointerdown.bs.swipe", (r) => this._start(r)),
            C.on(this._element, "pointerup.bs.swipe", (r) => this._end(r)),
            this._element.classList.add("pointer-event"))
          : (C.on(this._element, "touchstart.bs.swipe", (r) => this._start(r)),
            C.on(this._element, "touchmove.bs.swipe", (r) => this._move(r)),
            C.on(this._element, "touchend.bs.swipe", (r) => this._end(r)));
      }
      _eventIsPointerPenTouch(r) {
        return (
          this._supportPointerEvents &&
          (r.pointerType === "pen" || r.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const Cr = "next",
      An = "prev",
      Dn = "left",
      Oi = "right",
      ol = "slid.bs.carousel",
      Fa = "carousel",
      Pi = "active",
      Op = { ArrowLeft: Oi, ArrowRight: Dn },
      Pp = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      Lp = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class Mn extends be {
      constructor(r, l) {
        super(r, l),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = q.findOne(
            ".carousel-indicators",
            this._element
          )),
          this._addEventListeners(),
          this._config.ride === Fa && this.cycle();
      }
      static get Default() {
        return Pp;
      }
      static get DefaultType() {
        return Lp;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Cr);
      }
      nextWhenVisible() {
        !document.hidden && y(this._element) && this.next();
      }
      prev() {
        this._slide(An);
      }
      pause() {
        this._isSliding && a(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? C.one(this._element, ol, () => this.cycle())
            : this.cycle());
      }
      to(r) {
        const l = this._getItems();
        if (r > l.length - 1 || r < 0) return;
        if (this._isSliding)
          return void C.one(this._element, ol, () => this.to(r));
        const f = this._getItemIndex(this._getActive());
        if (f === r) return;
        const m = r > f ? Cr : An;
        this._slide(m, l[r]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(r) {
        return (r.defaultInterval = r.interval), r;
      }
      _addEventListeners() {
        this._config.keyboard &&
          C.on(this._element, "keydown.bs.carousel", (r) => this._keydown(r)),
          this._config.pause === "hover" &&
            (C.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
            C.on(this._element, "mouseleave.bs.carousel", () =>
              this._maybeEnableCycle()
            )),
          this._config.touch &&
            ji.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const l of q.find(".carousel-item img", this._element))
          C.on(l, "dragstart.bs.carousel", (f) => f.preventDefault());
        const r = {
          leftCallback: () => this._slide(this._directionToOrder(Dn)),
          rightCallback: () => this._slide(this._directionToOrder(Oi)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval
              )));
          },
        };
        this._swipeHelper = new ji(this._element, r);
      }
      _keydown(r) {
        if (/input|textarea/i.test(r.target.tagName)) return;
        const l = Op[r.key];
        l && (r.preventDefault(), this._slide(this._directionToOrder(l)));
      }
      _getItemIndex(r) {
        return this._getItems().indexOf(r);
      }
      _setActiveIndicatorElement(r) {
        if (!this._indicatorsElement) return;
        const l = q.findOne(".active", this._indicatorsElement);
        l.classList.remove(Pi), l.removeAttribute("aria-current");
        const f = q.findOne(
          `[data-bs-slide-to="${r}"]`,
          this._indicatorsElement
        );
        f && (f.classList.add(Pi), f.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const r = this._activeElement || this._getActive();
        if (!r) return;
        const l = Number.parseInt(r.getAttribute("data-bs-interval"), 10);
        this._config.interval = l || this._config.defaultInterval;
      }
      _slide(r, l = null) {
        if (this._isSliding) return;
        const f = this._getActive(),
          m = r === Cr,
          v = l || E(this._getItems(), f, m, this._config.wrap);
        if (v === f) return;
        const w = this._getItemIndex(v),
          S = (P) =>
            C.trigger(this._element, P, {
              relatedTarget: v,
              direction: this._orderToDirection(r),
              from: this._getItemIndex(f),
              to: w,
            });
        if (S("slide.bs.carousel").defaultPrevented || !f || !v) return;
        const N = !!this._interval;
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(w),
          (this._activeElement = v);
        const A = m ? "carousel-item-start" : "carousel-item-end",
          D = m ? "carousel-item-next" : "carousel-item-prev";
        v.classList.add(D),
          L(v),
          f.classList.add(A),
          v.classList.add(A),
          this._queueCallback(
            () => {
              v.classList.remove(A, D),
                v.classList.add(Pi),
                f.classList.remove(Pi, D, A),
                (this._isSliding = !1),
                S(ol);
            },
            f,
            this._isAnimated()
          ),
          N && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return q.findOne(".active.carousel-item", this._element);
      }
      _getItems() {
        return q.find(".carousel-item", this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(r) {
        return h() ? (r === Dn ? An : Cr) : r === Dn ? Cr : An;
      }
      _orderToDirection(r) {
        return h() ? (r === An ? Dn : Oi) : r === An ? Oi : Dn;
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = Mn.getOrCreateInstance(this, r);
          if (typeof r != "number") {
            if (typeof r == "string") {
              if (l[r] === void 0 || r.startsWith("_") || r === "constructor")
                throw new TypeError(`No method named "${r}"`);
              l[r]();
            }
          } else l.to(r);
        });
      }
    }
    C.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      function (u) {
        const r = s(this);
        if (!r || !r.classList.contains(Fa)) return;
        u.preventDefault();
        const l = Mn.getOrCreateInstance(r),
          f = this.getAttribute("data-bs-slide-to");
        return f
          ? (l.to(f), void l._maybeEnableCycle())
          : Ce.getDataAttribute(this, "slide") === "next"
          ? (l.next(), void l._maybeEnableCycle())
          : (l.prev(), void l._maybeEnableCycle());
      }
    ),
      C.on(window, "load.bs.carousel.data-api", () => {
        const u = q.find('[data-bs-ride="carousel"]');
        for (const r of u) Mn.getOrCreateInstance(r);
      }),
      p(Mn);
    const ll = "show",
      Li = "collapse",
      Ai = "collapsing",
      sl = '[data-bs-toggle="collapse"]',
      Ap = { parent: null, toggle: !0 },
      Dp = { parent: "(null|element)", toggle: "boolean" };
    class In extends be {
      constructor(r, l) {
        super(r, l), (this._isTransitioning = !1), (this._triggerArray = []);
        const f = q.find(sl);
        for (const m of f) {
          const v = o(m),
            w = q.find(v).filter((S) => S === this._element);
          v !== null && w.length && this._triggerArray.push(m);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Ap;
      }
      static get DefaultType() {
        return Dp;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let r = [];
        if (
          (this._config.parent &&
            (r = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing"
            )
              .filter((m) => m !== this._element)
              .map((m) => In.getOrCreateInstance(m, { toggle: !1 }))),
          (r.length && r[0]._isTransitioning) ||
            C.trigger(this._element, "show.bs.collapse").defaultPrevented)
        )
          return;
        for (const m of r) m.hide();
        const l = this._getDimension();
        this._element.classList.remove(Li),
          this._element.classList.add(Ai),
          (this._element.style[l] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const f = `scroll${l[0].toUpperCase() + l.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Ai),
              this._element.classList.add(Li, ll),
              (this._element.style[l] = ""),
              C.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[l] = `${this._element[f]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          C.trigger(this._element, "hide.bs.collapse").defaultPrevented
        )
          return;
        const r = this._getDimension();
        (this._element.style[r] = `${
          this._element.getBoundingClientRect()[r]
        }px`),
          L(this._element),
          this._element.classList.add(Ai),
          this._element.classList.remove(Li, ll);
        for (const l of this._triggerArray) {
          const f = s(l);
          f && !this._isShown(f) && this._addAriaAndCollapsedClass([l], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[r] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(Ai),
                this._element.classList.add(Li),
                C.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      _isShown(r = this._element) {
        return r.classList.contains(ll);
      }
      _configAfterMerge(r) {
        return (r.toggle = !!r.toggle), (r.parent = d(r.parent)), r;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const r = this._getFirstLevelChildren(sl);
        for (const l of r) {
          const f = s(l);
          f && this._addAriaAndCollapsedClass([l], this._isShown(f));
        }
      }
      _getFirstLevelChildren(r) {
        const l = q.find(":scope .collapse .collapse", this._config.parent);
        return q.find(r, this._config.parent).filter((f) => !l.includes(f));
      }
      _addAriaAndCollapsedClass(r, l) {
        if (r.length)
          for (const f of r)
            f.classList.toggle("collapsed", !l),
              f.setAttribute("aria-expanded", l);
      }
      static jQueryInterface(r) {
        const l = {};
        return (
          typeof r == "string" && /show|hide/.test(r) && (l.toggle = !1),
          this.each(function () {
            const f = In.getOrCreateInstance(this, l);
            if (typeof r == "string") {
              if (f[r] === void 0)
                throw new TypeError(`No method named "${r}"`);
              f[r]();
            }
          })
        );
      }
    }
    C.on(document, "click.bs.collapse.data-api", sl, function (u) {
      (u.target.tagName === "A" ||
        (u.delegateTarget && u.delegateTarget.tagName === "A")) &&
        u.preventDefault();
      const r = o(this),
        l = q.find(r);
      for (const f of l) In.getOrCreateInstance(f, { toggle: !1 }).toggle();
    }),
      p(In);
    var Ie = "top",
      Ke = "bottom",
      Xe = "right",
      ze = "left",
      Di = "auto",
      zn = [Ie, Ke, Xe, ze],
      un = "start",
      Rn = "end",
      $a = "clippingParents",
      al = "viewport",
      Fn = "popper",
      Ua = "reference",
      ul = zn.reduce(function (u, r) {
        return u.concat([r + "-" + un, r + "-" + Rn]);
      }, []),
      cl = [].concat(zn, [Di]).reduce(function (u, r) {
        return u.concat([r, r + "-" + un, r + "-" + Rn]);
      }, []),
      Ba = "beforeRead",
      Ha = "read",
      Va = "afterRead",
      Wa = "beforeMain",
      Qa = "main",
      Ya = "afterMain",
      Ka = "beforeWrite",
      Xa = "write",
      qa = "afterWrite",
      Ga = [Ba, Ha, Va, Wa, Qa, Ya, Ka, Xa, qa];
    function gt(u) {
      return u ? (u.nodeName || "").toLowerCase() : null;
    }
    function Je(u) {
      if (u == null) return window;
      if (u.toString() !== "[object Window]") {
        var r = u.ownerDocument;
        return (r && r.defaultView) || window;
      }
      return u;
    }
    function cn(u) {
      return u instanceof Je(u).Element || u instanceof Element;
    }
    function et(u) {
      return u instanceof Je(u).HTMLElement || u instanceof HTMLElement;
    }
    function fl(u) {
      return (
        typeof ShadowRoot < "u" &&
        (u instanceof Je(u).ShadowRoot || u instanceof ShadowRoot)
      );
    }
    const dl = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (u) {
        var r = u.state;
        Object.keys(r.elements).forEach(function (l) {
          var f = r.styles[l] || {},
            m = r.attributes[l] || {},
            v = r.elements[l];
          et(v) &&
            gt(v) &&
            (Object.assign(v.style, f),
            Object.keys(m).forEach(function (w) {
              var S = m[w];
              S === !1
                ? v.removeAttribute(w)
                : v.setAttribute(w, S === !0 ? "" : S);
            }));
        });
      },
      effect: function (u) {
        var r = u.state,
          l = {
            popper: {
              position: r.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(r.elements.popper.style, l.popper),
          (r.styles = l),
          r.elements.arrow && Object.assign(r.elements.arrow.style, l.arrow),
          function () {
            Object.keys(r.elements).forEach(function (f) {
              var m = r.elements[f],
                v = r.attributes[f] || {},
                w = Object.keys(
                  r.styles.hasOwnProperty(f) ? r.styles[f] : l[f]
                ).reduce(function (S, N) {
                  return (S[N] = ""), S;
                }, {});
              et(m) &&
                gt(m) &&
                (Object.assign(m.style, w),
                Object.keys(v).forEach(function (S) {
                  m.removeAttribute(S);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function vt(u) {
      return u.split("-")[0];
    }
    var fn = Math.max,
      Mi = Math.min,
      $n = Math.round;
    function pl() {
      var u = navigator.userAgentData;
      return u != null && u.brands
        ? u.brands
            .map(function (r) {
              return r.brand + "/" + r.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function Za() {
      return !/^((?!chrome|android).)*safari/i.test(pl());
    }
    function Un(u, r, l) {
      r === void 0 && (r = !1), l === void 0 && (l = !1);
      var f = u.getBoundingClientRect(),
        m = 1,
        v = 1;
      r &&
        et(u) &&
        ((m = (u.offsetWidth > 0 && $n(f.width) / u.offsetWidth) || 1),
        (v = (u.offsetHeight > 0 && $n(f.height) / u.offsetHeight) || 1));
      var w = (cn(u) ? Je(u) : window).visualViewport,
        S = !Za() && l,
        N = (f.left + (S && w ? w.offsetLeft : 0)) / m,
        A = (f.top + (S && w ? w.offsetTop : 0)) / v,
        D = f.width / m,
        P = f.height / v;
      return {
        width: D,
        height: P,
        top: A,
        right: N + D,
        bottom: A + P,
        left: N,
        x: N,
        y: A,
      };
    }
    function hl(u) {
      var r = Un(u),
        l = u.offsetWidth,
        f = u.offsetHeight;
      return (
        Math.abs(r.width - l) <= 1 && (l = r.width),
        Math.abs(r.height - f) <= 1 && (f = r.height),
        { x: u.offsetLeft, y: u.offsetTop, width: l, height: f }
      );
    }
    function Ja(u, r) {
      var l = r.getRootNode && r.getRootNode();
      if (u.contains(r)) return !0;
      if (l && fl(l)) {
        var f = r;
        do {
          if (f && u.isSameNode(f)) return !0;
          f = f.parentNode || f.host;
        } while (f);
      }
      return !1;
    }
    function bt(u) {
      return Je(u).getComputedStyle(u);
    }
    function Mp(u) {
      return ["table", "td", "th"].indexOf(gt(u)) >= 0;
    }
    function zt(u) {
      return (
        (cn(u) ? u.ownerDocument : u.document) || window.document
      ).documentElement;
    }
    function Ii(u) {
      return gt(u) === "html"
        ? u
        : u.assignedSlot || u.parentNode || (fl(u) ? u.host : null) || zt(u);
    }
    function eu(u) {
      return et(u) && bt(u).position !== "fixed" ? u.offsetParent : null;
    }
    function br(u) {
      for (
        var r = Je(u), l = eu(u);
        l && Mp(l) && bt(l).position === "static";

      )
        l = eu(l);
      return l &&
        (gt(l) === "html" || (gt(l) === "body" && bt(l).position === "static"))
        ? r
        : l ||
            (function (f) {
              var m = /firefox/i.test(pl());
              if (/Trident/i.test(pl()) && et(f) && bt(f).position === "fixed")
                return null;
              var v = Ii(f);
              for (
                fl(v) && (v = v.host);
                et(v) && ["html", "body"].indexOf(gt(v)) < 0;

              ) {
                var w = bt(v);
                if (
                  w.transform !== "none" ||
                  w.perspective !== "none" ||
                  w.contain === "paint" ||
                  ["transform", "perspective"].indexOf(w.willChange) !== -1 ||
                  (m && w.willChange === "filter") ||
                  (m && w.filter && w.filter !== "none")
                )
                  return v;
                v = v.parentNode;
              }
              return null;
            })(u) ||
            r;
    }
    function ml(u) {
      return ["top", "bottom"].indexOf(u) >= 0 ? "x" : "y";
    }
    function Tr(u, r, l) {
      return fn(u, Mi(r, l));
    }
    function tu(u) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, u);
    }
    function nu(u, r) {
      return r.reduce(function (l, f) {
        return (l[f] = u), l;
      }, {});
    }
    const ru = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (u) {
        var r,
          l = u.state,
          f = u.name,
          m = u.options,
          v = l.elements.arrow,
          w = l.modifiersData.popperOffsets,
          S = vt(l.placement),
          N = ml(S),
          A = [ze, Xe].indexOf(S) >= 0 ? "height" : "width";
        if (v && w) {
          var D = (function (le, ie) {
              return tu(
                typeof (le =
                  typeof le == "function"
                    ? le(
                        Object.assign({}, ie.rects, { placement: ie.placement })
                      )
                    : le) != "number"
                  ? le
                  : nu(le, zn)
              );
            })(m.padding, l),
            P = hl(v),
            G = N === "y" ? Ie : ze,
            H = N === "y" ? Ke : Xe,
            Y =
              l.rects.reference[A] +
              l.rects.reference[N] -
              w[N] -
              l.rects.popper[A],
            W = w[N] - l.rects.reference[N],
            K = br(v),
            oe = K ? (N === "y" ? K.clientHeight || 0 : K.clientWidth || 0) : 0,
            ae = Y / 2 - W / 2,
            J = D[G],
            ne = oe - P[A] - D[H],
            Z = oe / 2 - P[A] / 2 + ae,
            ee = Tr(J, Z, ne),
            re = N;
          l.modifiersData[f] =
            (((r = {})[re] = ee), (r.centerOffset = ee - Z), r);
        }
      },
      effect: function (u) {
        var r = u.state,
          l = u.options.element,
          f = l === void 0 ? "[data-popper-arrow]" : l;
        f != null &&
          (typeof f != "string" || (f = r.elements.popper.querySelector(f))) &&
          Ja(r.elements.popper, f) &&
          (r.elements.arrow = f);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Bn(u) {
      return u.split("-")[1];
    }
    var Ip = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function iu(u) {
      var r,
        l = u.popper,
        f = u.popperRect,
        m = u.placement,
        v = u.variation,
        w = u.offsets,
        S = u.position,
        N = u.gpuAcceleration,
        A = u.adaptive,
        D = u.roundOffsets,
        P = u.isFixed,
        G = w.x,
        H = G === void 0 ? 0 : G,
        Y = w.y,
        W = Y === void 0 ? 0 : Y,
        K = typeof D == "function" ? D({ x: H, y: W }) : { x: H, y: W };
      (H = K.x), (W = K.y);
      var oe = w.hasOwnProperty("x"),
        ae = w.hasOwnProperty("y"),
        J = ze,
        ne = Ie,
        Z = window;
      if (A) {
        var ee = br(l),
          re = "clientHeight",
          le = "clientWidth";
        ee === Je(l) &&
          bt((ee = zt(l))).position !== "static" &&
          S === "absolute" &&
          ((re = "scrollHeight"), (le = "scrollWidth")),
          (m === Ie || ((m === ze || m === Xe) && v === Rn)) &&
            ((ne = Ke),
            (W -=
              (P && ee === Z && Z.visualViewport
                ? Z.visualViewport.height
                : ee[re]) - f.height),
            (W *= N ? 1 : -1)),
          (m !== ze && ((m !== Ie && m !== Ke) || v !== Rn)) ||
            ((J = Xe),
            (H -=
              (P && ee === Z && Z.visualViewport
                ? Z.visualViewport.width
                : ee[le]) - f.width),
            (H *= N ? 1 : -1));
      }
      var ie,
        ve = Object.assign({ position: S }, A && Ip),
        qe =
          D === !0
            ? (function (ft) {
                var Re = ft.x,
                  tt = ft.y,
                  Fe = window.devicePixelRatio || 1;
                return { x: $n(Re * Fe) / Fe || 0, y: $n(tt * Fe) / Fe || 0 };
              })({ x: H, y: W })
            : { x: H, y: W };
      return (
        (H = qe.x),
        (W = qe.y),
        N
          ? Object.assign(
              {},
              ve,
              (((ie = {})[ne] = ae ? "0" : ""),
              (ie[J] = oe ? "0" : ""),
              (ie.transform =
                (Z.devicePixelRatio || 1) <= 1
                  ? "translate(" + H + "px, " + W + "px)"
                  : "translate3d(" + H + "px, " + W + "px, 0)"),
              ie)
            )
          : Object.assign(
              {},
              ve,
              (((r = {})[ne] = ae ? W + "px" : ""),
              (r[J] = oe ? H + "px" : ""),
              (r.transform = ""),
              r)
            )
      );
    }
    const gl = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (u) {
        var r = u.state,
          l = u.options,
          f = l.gpuAcceleration,
          m = f === void 0 || f,
          v = l.adaptive,
          w = v === void 0 || v,
          S = l.roundOffsets,
          N = S === void 0 || S,
          A = {
            placement: vt(r.placement),
            variation: Bn(r.placement),
            popper: r.elements.popper,
            popperRect: r.rects.popper,
            gpuAcceleration: m,
            isFixed: r.options.strategy === "fixed",
          };
        r.modifiersData.popperOffsets != null &&
          (r.styles.popper = Object.assign(
            {},
            r.styles.popper,
            iu(
              Object.assign({}, A, {
                offsets: r.modifiersData.popperOffsets,
                position: r.options.strategy,
                adaptive: w,
                roundOffsets: N,
              })
            )
          )),
          r.modifiersData.arrow != null &&
            (r.styles.arrow = Object.assign(
              {},
              r.styles.arrow,
              iu(
                Object.assign({}, A, {
                  offsets: r.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: N,
                })
              )
            )),
          (r.attributes.popper = Object.assign({}, r.attributes.popper, {
            "data-popper-placement": r.placement,
          }));
      },
      data: {},
    };
    var zi = { passive: !0 };
    const vl = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (u) {
        var r = u.state,
          l = u.instance,
          f = u.options,
          m = f.scroll,
          v = m === void 0 || m,
          w = f.resize,
          S = w === void 0 || w,
          N = Je(r.elements.popper),
          A = [].concat(r.scrollParents.reference, r.scrollParents.popper);
        return (
          v &&
            A.forEach(function (D) {
              D.addEventListener("scroll", l.update, zi);
            }),
          S && N.addEventListener("resize", l.update, zi),
          function () {
            v &&
              A.forEach(function (D) {
                D.removeEventListener("scroll", l.update, zi);
              }),
              S && N.removeEventListener("resize", l.update, zi);
          }
        );
      },
      data: {},
    };
    var zp = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Ri(u) {
      return u.replace(/left|right|bottom|top/g, function (r) {
        return zp[r];
      });
    }
    var Rp = { start: "end", end: "start" };
    function ou(u) {
      return u.replace(/start|end/g, function (r) {
        return Rp[r];
      });
    }
    function yl(u) {
      var r = Je(u);
      return { scrollLeft: r.pageXOffset, scrollTop: r.pageYOffset };
    }
    function _l(u) {
      return Un(zt(u)).left + yl(u).scrollLeft;
    }
    function wl(u) {
      var r = bt(u),
        l = r.overflow,
        f = r.overflowX,
        m = r.overflowY;
      return /auto|scroll|overlay|hidden/.test(l + m + f);
    }
    function lu(u) {
      return ["html", "body", "#document"].indexOf(gt(u)) >= 0
        ? u.ownerDocument.body
        : et(u) && wl(u)
        ? u
        : lu(Ii(u));
    }
    function Nr(u, r) {
      var l;
      r === void 0 && (r = []);
      var f = lu(u),
        m = f === ((l = u.ownerDocument) == null ? void 0 : l.body),
        v = Je(f),
        w = m ? [v].concat(v.visualViewport || [], wl(f) ? f : []) : f,
        S = r.concat(w);
      return m ? S : S.concat(Nr(Ii(w)));
    }
    function xl(u) {
      return Object.assign({}, u, {
        left: u.x,
        top: u.y,
        right: u.x + u.width,
        bottom: u.y + u.height,
      });
    }
    function su(u, r, l) {
      return r === al
        ? xl(
            (function (f, m) {
              var v = Je(f),
                w = zt(f),
                S = v.visualViewport,
                N = w.clientWidth,
                A = w.clientHeight,
                D = 0,
                P = 0;
              if (S) {
                (N = S.width), (A = S.height);
                var G = Za();
                (G || (!G && m === "fixed")) &&
                  ((D = S.offsetLeft), (P = S.offsetTop));
              }
              return { width: N, height: A, x: D + _l(f), y: P };
            })(u, l)
          )
        : cn(r)
        ? (function (f, m) {
            var v = Un(f, !1, m === "fixed");
            return (
              (v.top = v.top + f.clientTop),
              (v.left = v.left + f.clientLeft),
              (v.bottom = v.top + f.clientHeight),
              (v.right = v.left + f.clientWidth),
              (v.width = f.clientWidth),
              (v.height = f.clientHeight),
              (v.x = v.left),
              (v.y = v.top),
              v
            );
          })(r, l)
        : xl(
            (function (f) {
              var m,
                v = zt(f),
                w = yl(f),
                S = (m = f.ownerDocument) == null ? void 0 : m.body,
                N = fn(
                  v.scrollWidth,
                  v.clientWidth,
                  S ? S.scrollWidth : 0,
                  S ? S.clientWidth : 0
                ),
                A = fn(
                  v.scrollHeight,
                  v.clientHeight,
                  S ? S.scrollHeight : 0,
                  S ? S.clientHeight : 0
                ),
                D = -w.scrollLeft + _l(f),
                P = -w.scrollTop;
              return (
                bt(S || v).direction === "rtl" &&
                  (D += fn(v.clientWidth, S ? S.clientWidth : 0) - N),
                { width: N, height: A, x: D, y: P }
              );
            })(zt(u))
          );
    }
    function au(u) {
      var r,
        l = u.reference,
        f = u.element,
        m = u.placement,
        v = m ? vt(m) : null,
        w = m ? Bn(m) : null,
        S = l.x + l.width / 2 - f.width / 2,
        N = l.y + l.height / 2 - f.height / 2;
      switch (v) {
        case Ie:
          r = { x: S, y: l.y - f.height };
          break;
        case Ke:
          r = { x: S, y: l.y + l.height };
          break;
        case Xe:
          r = { x: l.x + l.width, y: N };
          break;
        case ze:
          r = { x: l.x - f.width, y: N };
          break;
        default:
          r = { x: l.x, y: l.y };
      }
      var A = v ? ml(v) : null;
      if (A != null) {
        var D = A === "y" ? "height" : "width";
        switch (w) {
          case un:
            r[A] = r[A] - (l[D] / 2 - f[D] / 2);
            break;
          case Rn:
            r[A] = r[A] + (l[D] / 2 - f[D] / 2);
        }
      }
      return r;
    }
    function Hn(u, r) {
      r === void 0 && (r = {});
      var l = r,
        f = l.placement,
        m = f === void 0 ? u.placement : f,
        v = l.strategy,
        w = v === void 0 ? u.strategy : v,
        S = l.boundary,
        N = S === void 0 ? $a : S,
        A = l.rootBoundary,
        D = A === void 0 ? al : A,
        P = l.elementContext,
        G = P === void 0 ? Fn : P,
        H = l.altBoundary,
        Y = H !== void 0 && H,
        W = l.padding,
        K = W === void 0 ? 0 : W,
        oe = tu(typeof K != "number" ? K : nu(K, zn)),
        ae = G === Fn ? Ua : Fn,
        J = u.rects.popper,
        ne = u.elements[Y ? ae : G],
        Z = (function (Re, tt, Fe, Te) {
          var yt =
              tt === "clippingParents"
                ? (function (se) {
                    var $e = Nr(Ii(se)),
                      nt =
                        ["absolute", "fixed"].indexOf(bt(se).position) >= 0 &&
                        et(se)
                          ? br(se)
                          : se;
                    return cn(nt)
                      ? $e.filter(function (Rt) {
                          return cn(Rt) && Ja(Rt, nt) && gt(Rt) !== "body";
                        })
                      : [];
                  })(Re)
                : [].concat(tt),
            _t = [].concat(yt, [Fe]),
            Vn = _t[0],
            Ee = _t.reduce(function (se, $e) {
              var nt = su(Re, $e, Te);
              return (
                (se.top = fn(nt.top, se.top)),
                (se.right = Mi(nt.right, se.right)),
                (se.bottom = Mi(nt.bottom, se.bottom)),
                (se.left = fn(nt.left, se.left)),
                se
              );
            }, su(Re, Vn, Te));
          return (
            (Ee.width = Ee.right - Ee.left),
            (Ee.height = Ee.bottom - Ee.top),
            (Ee.x = Ee.left),
            (Ee.y = Ee.top),
            Ee
          );
        })(cn(ne) ? ne : ne.contextElement || zt(u.elements.popper), N, D, w),
        ee = Un(u.elements.reference),
        re = au({
          reference: ee,
          element: J,
          strategy: "absolute",
          placement: m,
        }),
        le = xl(Object.assign({}, J, re)),
        ie = G === Fn ? le : ee,
        ve = {
          top: Z.top - ie.top + oe.top,
          bottom: ie.bottom - Z.bottom + oe.bottom,
          left: Z.left - ie.left + oe.left,
          right: ie.right - Z.right + oe.right,
        },
        qe = u.modifiersData.offset;
      if (G === Fn && qe) {
        var ft = qe[m];
        Object.keys(ve).forEach(function (Re) {
          var tt = [Xe, Ke].indexOf(Re) >= 0 ? 1 : -1,
            Fe = [Ie, Ke].indexOf(Re) >= 0 ? "y" : "x";
          ve[Re] += ft[Fe] * tt;
        });
      }
      return ve;
    }
    function Fp(u, r) {
      r === void 0 && (r = {});
      var l = r,
        f = l.placement,
        m = l.boundary,
        v = l.rootBoundary,
        w = l.padding,
        S = l.flipVariations,
        N = l.allowedAutoPlacements,
        A = N === void 0 ? cl : N,
        D = Bn(f),
        P = D
          ? S
            ? ul
            : ul.filter(function (Y) {
                return Bn(Y) === D;
              })
          : zn,
        G = P.filter(function (Y) {
          return A.indexOf(Y) >= 0;
        });
      G.length === 0 && (G = P);
      var H = G.reduce(function (Y, W) {
        return (
          (Y[W] = Hn(u, {
            placement: W,
            boundary: m,
            rootBoundary: v,
            padding: w,
          })[vt(W)]),
          Y
        );
      }, {});
      return Object.keys(H).sort(function (Y, W) {
        return H[Y] - H[W];
      });
    }
    const uu = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (u) {
        var r = u.state,
          l = u.options,
          f = u.name;
        if (!r.modifiersData[f]._skip) {
          for (
            var m = l.mainAxis,
              v = m === void 0 || m,
              w = l.altAxis,
              S = w === void 0 || w,
              N = l.fallbackPlacements,
              A = l.padding,
              D = l.boundary,
              P = l.rootBoundary,
              G = l.altBoundary,
              H = l.flipVariations,
              Y = H === void 0 || H,
              W = l.allowedAutoPlacements,
              K = r.options.placement,
              oe = vt(K),
              ae =
                N ||
                (oe !== K && Y
                  ? (function (se) {
                      if (vt(se) === Di) return [];
                      var $e = Ri(se);
                      return [ou(se), $e, ou($e)];
                    })(K)
                  : [Ri(K)]),
              J = [K].concat(ae).reduce(function (se, $e) {
                return se.concat(
                  vt($e) === Di
                    ? Fp(r, {
                        placement: $e,
                        boundary: D,
                        rootBoundary: P,
                        padding: A,
                        flipVariations: Y,
                        allowedAutoPlacements: W,
                      })
                    : $e
                );
              }, []),
              ne = r.rects.reference,
              Z = r.rects.popper,
              ee = new Map(),
              re = !0,
              le = J[0],
              ie = 0;
            ie < J.length;
            ie++
          ) {
            var ve = J[ie],
              qe = vt(ve),
              ft = Bn(ve) === un,
              Re = [Ie, Ke].indexOf(qe) >= 0,
              tt = Re ? "width" : "height",
              Fe = Hn(r, {
                placement: ve,
                boundary: D,
                rootBoundary: P,
                altBoundary: G,
                padding: A,
              }),
              Te = Re ? (ft ? Xe : ze) : ft ? Ke : Ie;
            ne[tt] > Z[tt] && (Te = Ri(Te));
            var yt = Ri(Te),
              _t = [];
            if (
              (v && _t.push(Fe[qe] <= 0),
              S && _t.push(Fe[Te] <= 0, Fe[yt] <= 0),
              _t.every(function (se) {
                return se;
              }))
            ) {
              (le = ve), (re = !1);
              break;
            }
            ee.set(ve, _t);
          }
          if (re)
            for (
              var Vn = function (se) {
                  var $e = J.find(function (nt) {
                    var Rt = ee.get(nt);
                    if (Rt)
                      return Rt.slice(0, se).every(function (Ki) {
                        return Ki;
                      });
                  });
                  if ($e) return (le = $e), "break";
                },
                Ee = Y ? 3 : 1;
              Ee > 0 && Vn(Ee) !== "break";
              Ee--
            );
          r.placement !== le &&
            ((r.modifiersData[f]._skip = !0),
            (r.placement = le),
            (r.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function cu(u, r, l) {
      return (
        l === void 0 && (l = { x: 0, y: 0 }),
        {
          top: u.top - r.height - l.y,
          right: u.right - r.width + l.x,
          bottom: u.bottom - r.height + l.y,
          left: u.left - r.width - l.x,
        }
      );
    }
    function fu(u) {
      return [Ie, Xe, Ke, ze].some(function (r) {
        return u[r] >= 0;
      });
    }
    const du = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (u) {
          var r = u.state,
            l = u.name,
            f = r.rects.reference,
            m = r.rects.popper,
            v = r.modifiersData.preventOverflow,
            w = Hn(r, { elementContext: "reference" }),
            S = Hn(r, { altBoundary: !0 }),
            N = cu(w, f),
            A = cu(S, m, v),
            D = fu(N),
            P = fu(A);
          (r.modifiersData[l] = {
            referenceClippingOffsets: N,
            popperEscapeOffsets: A,
            isReferenceHidden: D,
            hasPopperEscaped: P,
          }),
            (r.attributes.popper = Object.assign({}, r.attributes.popper, {
              "data-popper-reference-hidden": D,
              "data-popper-escaped": P,
            }));
        },
      },
      pu = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (u) {
          var r = u.state,
            l = u.options,
            f = u.name,
            m = l.offset,
            v = m === void 0 ? [0, 0] : m,
            w = cl.reduce(function (D, P) {
              return (
                (D[P] = (function (G, H, Y) {
                  var W = vt(G),
                    K = [ze, Ie].indexOf(W) >= 0 ? -1 : 1,
                    oe =
                      typeof Y == "function"
                        ? Y(Object.assign({}, H, { placement: G }))
                        : Y,
                    ae = oe[0],
                    J = oe[1];
                  return (
                    (ae = ae || 0),
                    (J = (J || 0) * K),
                    [ze, Xe].indexOf(W) >= 0 ? { x: J, y: ae } : { x: ae, y: J }
                  );
                })(P, r.rects, v)),
                D
              );
            }, {}),
            S = w[r.placement],
            N = S.x,
            A = S.y;
          r.modifiersData.popperOffsets != null &&
            ((r.modifiersData.popperOffsets.x += N),
            (r.modifiersData.popperOffsets.y += A)),
            (r.modifiersData[f] = w);
        },
      },
      El = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (u) {
          var r = u.state,
            l = u.name;
          r.modifiersData[l] = au({
            reference: r.rects.reference,
            element: r.rects.popper,
            strategy: "absolute",
            placement: r.placement,
          });
        },
        data: {},
      },
      hu = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (u) {
          var r = u.state,
            l = u.options,
            f = u.name,
            m = l.mainAxis,
            v = m === void 0 || m,
            w = l.altAxis,
            S = w !== void 0 && w,
            N = l.boundary,
            A = l.rootBoundary,
            D = l.altBoundary,
            P = l.padding,
            G = l.tether,
            H = G === void 0 || G,
            Y = l.tetherOffset,
            W = Y === void 0 ? 0 : Y,
            K = Hn(r, {
              boundary: N,
              rootBoundary: A,
              padding: P,
              altBoundary: D,
            }),
            oe = vt(r.placement),
            ae = Bn(r.placement),
            J = !ae,
            ne = ml(oe),
            Z = ne === "x" ? "y" : "x",
            ee = r.modifiersData.popperOffsets,
            re = r.rects.reference,
            le = r.rects.popper,
            ie =
              typeof W == "function"
                ? W(Object.assign({}, r.rects, { placement: r.placement }))
                : W,
            ve =
              typeof ie == "number"
                ? { mainAxis: ie, altAxis: ie }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, ie),
            qe = r.modifiersData.offset
              ? r.modifiersData.offset[r.placement]
              : null,
            ft = { x: 0, y: 0 };
          if (ee) {
            if (v) {
              var Re,
                tt = ne === "y" ? Ie : ze,
                Fe = ne === "y" ? Ke : Xe,
                Te = ne === "y" ? "height" : "width",
                yt = ee[ne],
                _t = yt + K[tt],
                Vn = yt - K[Fe],
                Ee = H ? -le[Te] / 2 : 0,
                se = ae === un ? re[Te] : le[Te],
                $e = ae === un ? -le[Te] : -re[Te],
                nt = r.elements.arrow,
                Rt = H && nt ? hl(nt) : { width: 0, height: 0 },
                Ki = r.modifiersData["arrow#persistent"]
                  ? r.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Zu = Ki[tt],
                Ju = Ki[Fe],
                Xi = Tr(0, re[Te], Rt[Te]),
                Nh = J
                  ? re[Te] / 2 - Ee - Xi - Zu - ve.mainAxis
                  : se - Xi - Zu - ve.mainAxis,
                jh = J
                  ? -re[Te] / 2 + Ee + Xi + Ju + ve.mainAxis
                  : $e + Xi + Ju + ve.mainAxis,
                jl = r.elements.arrow && br(r.elements.arrow),
                Oh = jl
                  ? ne === "y"
                    ? jl.clientTop || 0
                    : jl.clientLeft || 0
                  : 0,
                ec = (Re = qe == null ? void 0 : qe[ne]) != null ? Re : 0,
                Ph = yt + jh - ec,
                tc = Tr(
                  H ? Mi(_t, yt + Nh - ec - Oh) : _t,
                  yt,
                  H ? fn(Vn, Ph) : Vn
                );
              (ee[ne] = tc), (ft[ne] = tc - yt);
            }
            if (S) {
              var nc,
                Lh = ne === "x" ? Ie : ze,
                Ah = ne === "x" ? Ke : Xe,
                gn = ee[Z],
                qi = Z === "y" ? "height" : "width",
                rc = gn + K[Lh],
                ic = gn - K[Ah],
                Ol = [Ie, ze].indexOf(oe) !== -1,
                oc = (nc = qe == null ? void 0 : qe[Z]) != null ? nc : 0,
                lc = Ol ? rc : gn - re[qi] - le[qi] - oc + ve.altAxis,
                sc = Ol ? gn + re[qi] + le[qi] - oc - ve.altAxis : ic,
                ac =
                  H && Ol
                    ? (function (Dh, Mh, Pl) {
                        var uc = Tr(Dh, Mh, Pl);
                        return uc > Pl ? Pl : uc;
                      })(lc, gn, sc)
                    : Tr(H ? lc : rc, gn, H ? sc : ic);
              (ee[Z] = ac), (ft[Z] = ac - gn);
            }
            r.modifiersData[f] = ft;
          }
        },
        requiresIfExists: ["offset"],
      };
    function $p(u, r, l) {
      l === void 0 && (l = !1);
      var f,
        m,
        v = et(r),
        w =
          et(r) &&
          (function (P) {
            var G = P.getBoundingClientRect(),
              H = $n(G.width) / P.offsetWidth || 1,
              Y = $n(G.height) / P.offsetHeight || 1;
            return H !== 1 || Y !== 1;
          })(r),
        S = zt(r),
        N = Un(u, w, l),
        A = { scrollLeft: 0, scrollTop: 0 },
        D = { x: 0, y: 0 };
      return (
        (v || (!v && !l)) &&
          ((gt(r) !== "body" || wl(S)) &&
            (A =
              (f = r) !== Je(f) && et(f)
                ? { scrollLeft: (m = f).scrollLeft, scrollTop: m.scrollTop }
                : yl(f)),
          et(r)
            ? (((D = Un(r, !0)).x += r.clientLeft), (D.y += r.clientTop))
            : S && (D.x = _l(S))),
        {
          x: N.left + A.scrollLeft - D.x,
          y: N.top + A.scrollTop - D.y,
          width: N.width,
          height: N.height,
        }
      );
    }
    function Up(u) {
      var r = new Map(),
        l = new Set(),
        f = [];
      function m(v) {
        l.add(v.name),
          []
            .concat(v.requires || [], v.requiresIfExists || [])
            .forEach(function (w) {
              if (!l.has(w)) {
                var S = r.get(w);
                S && m(S);
              }
            }),
          f.push(v);
      }
      return (
        u.forEach(function (v) {
          r.set(v.name, v);
        }),
        u.forEach(function (v) {
          l.has(v.name) || m(v);
        }),
        f
      );
    }
    var mu = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function gu() {
      for (var u = arguments.length, r = new Array(u), l = 0; l < u; l++)
        r[l] = arguments[l];
      return !r.some(function (f) {
        return !(f && typeof f.getBoundingClientRect == "function");
      });
    }
    function Fi(u) {
      u === void 0 && (u = {});
      var r = u,
        l = r.defaultModifiers,
        f = l === void 0 ? [] : l,
        m = r.defaultOptions,
        v = m === void 0 ? mu : m;
      return function (w, S, N) {
        N === void 0 && (N = v);
        var A,
          D,
          P = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, mu, v),
            modifiersData: {},
            elements: { reference: w, popper: S },
            attributes: {},
            styles: {},
          },
          G = [],
          H = !1,
          Y = {
            state: P,
            setOptions: function (K) {
              var oe = typeof K == "function" ? K(P.options) : K;
              W(),
                (P.options = Object.assign({}, v, P.options, oe)),
                (P.scrollParents = {
                  reference: cn(w)
                    ? Nr(w)
                    : w.contextElement
                    ? Nr(w.contextElement)
                    : [],
                  popper: Nr(S),
                });
              var ae,
                J,
                ne = (function (Z) {
                  var ee = Up(Z);
                  return Ga.reduce(function (re, le) {
                    return re.concat(
                      ee.filter(function (ie) {
                        return ie.phase === le;
                      })
                    );
                  }, []);
                })(
                  ((ae = [].concat(f, P.options.modifiers)),
                  (J = ae.reduce(function (Z, ee) {
                    var re = Z[ee.name];
                    return (
                      (Z[ee.name] = re
                        ? Object.assign({}, re, ee, {
                            options: Object.assign({}, re.options, ee.options),
                            data: Object.assign({}, re.data, ee.data),
                          })
                        : ee),
                      Z
                    );
                  }, {})),
                  Object.keys(J).map(function (Z) {
                    return J[Z];
                  }))
                );
              return (
                (P.orderedModifiers = ne.filter(function (Z) {
                  return Z.enabled;
                })),
                P.orderedModifiers.forEach(function (Z) {
                  var ee = Z.name,
                    re = Z.options,
                    le = re === void 0 ? {} : re,
                    ie = Z.effect;
                  if (typeof ie == "function") {
                    var ve = ie({
                      state: P,
                      name: ee,
                      instance: Y,
                      options: le,
                    });
                    G.push(ve || function () {});
                  }
                }),
                Y.update()
              );
            },
            forceUpdate: function () {
              if (!H) {
                var K = P.elements,
                  oe = K.reference,
                  ae = K.popper;
                if (gu(oe, ae)) {
                  (P.rects = {
                    reference: $p(oe, br(ae), P.options.strategy === "fixed"),
                    popper: hl(ae),
                  }),
                    (P.reset = !1),
                    (P.placement = P.options.placement),
                    P.orderedModifiers.forEach(function (ie) {
                      return (P.modifiersData[ie.name] = Object.assign(
                        {},
                        ie.data
                      ));
                    });
                  for (var J = 0; J < P.orderedModifiers.length; J++)
                    if (P.reset !== !0) {
                      var ne = P.orderedModifiers[J],
                        Z = ne.fn,
                        ee = ne.options,
                        re = ee === void 0 ? {} : ee,
                        le = ne.name;
                      typeof Z == "function" &&
                        (P =
                          Z({ state: P, options: re, name: le, instance: Y }) ||
                          P);
                    } else (P.reset = !1), (J = -1);
                }
              }
            },
            update:
              ((A = function () {
                return new Promise(function (K) {
                  Y.forceUpdate(), K(P);
                });
              }),
              function () {
                return (
                  D ||
                    (D = new Promise(function (K) {
                      Promise.resolve().then(function () {
                        (D = void 0), K(A());
                      });
                    })),
                  D
                );
              }),
            destroy: function () {
              W(), (H = !0);
            },
          };
        if (!gu(w, S)) return Y;
        function W() {
          G.forEach(function (K) {
            return K();
          }),
            (G = []);
        }
        return (
          Y.setOptions(N).then(function (K) {
            !H && N.onFirstUpdate && N.onFirstUpdate(K);
          }),
          Y
        );
      };
    }
    var Bp = Fi(),
      Hp = Fi({ defaultModifiers: [vl, El, gl, dl] }),
      kl = Fi({ defaultModifiers: [vl, El, gl, dl, pu, uu, hu, ru, du] });
    const vu = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            popperGenerator: Fi,
            detectOverflow: Hn,
            createPopperBase: Bp,
            createPopper: kl,
            createPopperLite: Hp,
            top: Ie,
            bottom: Ke,
            right: Xe,
            left: ze,
            auto: Di,
            basePlacements: zn,
            start: un,
            end: Rn,
            clippingParents: $a,
            viewport: al,
            popper: Fn,
            reference: Ua,
            variationPlacements: ul,
            placements: cl,
            beforeRead: Ba,
            read: Ha,
            afterRead: Va,
            beforeMain: Wa,
            main: Qa,
            afterMain: Ya,
            beforeWrite: Ka,
            write: Xa,
            afterWrite: qa,
            modifierPhases: Ga,
            applyStyles: dl,
            arrow: ru,
            computeStyles: gl,
            eventListeners: vl,
            flip: uu,
            hide: du,
            offset: pu,
            popperOffsets: El,
            preventOverflow: hu,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ),
      yu = "dropdown",
      Vp = "ArrowUp",
      _u = "ArrowDown",
      wu = "click.bs.dropdown.data-api",
      xu = "keydown.bs.dropdown.data-api",
      jr = "show",
      dn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Wp = `${dn}.show`,
      $i = ".dropdown-menu",
      Qp = h() ? "top-end" : "top-start",
      Yp = h() ? "top-start" : "top-end",
      Kp = h() ? "bottom-end" : "bottom-start",
      Xp = h() ? "bottom-start" : "bottom-end",
      qp = h() ? "left-start" : "right-start",
      Gp = h() ? "right-start" : "left-start",
      Zp = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      Jp = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class ct extends be {
      constructor(r, l) {
        super(r, l),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            q.next(this._element, $i)[0] ||
            q.prev(this._element, $i)[0] ||
            q.findOne($i, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return Zp;
      }
      static get DefaultType() {
        return Jp;
      }
      static get NAME() {
        return yu;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (T(this._element) || this._isShown()) return;
        const r = { relatedTarget: this._element };
        if (!C.trigger(this._element, "show.bs.dropdown", r).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const l of [].concat(...document.body.children))
              C.on(l, "mouseover", k);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(jr),
            this._element.classList.add(jr),
            C.trigger(this._element, "shown.bs.dropdown", r);
        }
      }
      hide() {
        if (T(this._element) || !this._isShown()) return;
        const r = { relatedTarget: this._element };
        this._completeHide(r);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(r) {
        if (!C.trigger(this._element, "hide.bs.dropdown", r).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const l of [].concat(...document.body.children))
              C.off(l, "mouseover", k);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(jr),
            this._element.classList.remove(jr),
            this._element.setAttribute("aria-expanded", "false"),
            Ce.removeDataAttribute(this._menu, "popper"),
            C.trigger(this._element, "hidden.bs.dropdown", r);
        }
      }
      _getConfig(r) {
        if (
          typeof (r = super._getConfig(r)).reference == "object" &&
          !c(r.reference) &&
          typeof r.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${yu.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return r;
      }
      _createPopper() {
        if (vu === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let r = this._element;
        this._config.reference === "parent"
          ? (r = this._parent)
          : c(this._config.reference)
          ? (r = d(this._config.reference))
          : typeof this._config.reference == "object" &&
            (r = this._config.reference);
        const l = this._getPopperConfig();
        this._popper = kl(r, this._menu, l);
      }
      _isShown() {
        return this._menu.classList.contains(jr);
      }
      _getPlacement() {
        const r = this._parent;
        if (r.classList.contains("dropend")) return qp;
        if (r.classList.contains("dropstart")) return Gp;
        if (r.classList.contains("dropup-center")) return "top";
        if (r.classList.contains("dropdown-center")) return "bottom";
        const l =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return r.classList.contains("dropup") ? (l ? Yp : Qp) : l ? Xp : Kp;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: r } = this._config;
        return typeof r == "string"
          ? r.split(",").map((l) => Number.parseInt(l, 10))
          : typeof r == "function"
          ? (l) => r(l, this._element)
          : r;
      }
      _getPopperConfig() {
        const r = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (Ce.setDataAttribute(this._menu, "popper", "static"),
            (r.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          {
            ...r,
            ...(typeof this._config.popperConfig == "function"
              ? this._config.popperConfig(r)
              : this._config.popperConfig),
          }
        );
      }
      _selectMenuItem({ key: r, target: l }) {
        const f = q
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          )
          .filter((m) => y(m));
        f.length && E(f, l, r === _u, !f.includes(l)).focus();
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = ct.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (l[r] === void 0) throw new TypeError(`No method named "${r}"`);
            l[r]();
          }
        });
      }
      static clearMenus(r) {
        if (r.button === 2 || (r.type === "keyup" && r.key !== "Tab")) return;
        const l = q.find(Wp);
        for (const f of l) {
          const m = ct.getInstance(f);
          if (!m || m._config.autoClose === !1) continue;
          const v = r.composedPath(),
            w = v.includes(m._menu);
          if (
            v.includes(m._element) ||
            (m._config.autoClose === "inside" && !w) ||
            (m._config.autoClose === "outside" && w) ||
            (m._menu.contains(r.target) &&
              ((r.type === "keyup" && r.key === "Tab") ||
                /input|select|option|textarea|form/i.test(r.target.tagName)))
          )
            continue;
          const S = { relatedTarget: m._element };
          r.type === "click" && (S.clickEvent = r), m._completeHide(S);
        }
      }
      static dataApiKeydownHandler(r) {
        const l = /input|textarea/i.test(r.target.tagName),
          f = r.key === "Escape",
          m = [Vp, _u].includes(r.key);
        if ((!m && !f) || (l && !f)) return;
        r.preventDefault();
        const v = this.matches(dn)
            ? this
            : q.prev(this, dn)[0] ||
              q.next(this, dn)[0] ||
              q.findOne(dn, r.delegateTarget.parentNode),
          w = ct.getOrCreateInstance(v);
        if (m) return r.stopPropagation(), w.show(), void w._selectMenuItem(r);
        w._isShown() && (r.stopPropagation(), w.hide(), v.focus());
      }
    }
    C.on(document, xu, dn, ct.dataApiKeydownHandler),
      C.on(document, xu, $i, ct.dataApiKeydownHandler),
      C.on(document, wu, ct.clearMenus),
      C.on(document, "keyup.bs.dropdown.data-api", ct.clearMenus),
      C.on(document, wu, dn, function (u) {
        u.preventDefault(), ct.getOrCreateInstance(this).toggle();
      }),
      p(ct);
    const Eu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      ku = ".sticky-top",
      Ui = "padding-right",
      Su = "margin-right";
    class Sl {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const r = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - r);
      }
      hide() {
        const r = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, Ui, (l) => l + r),
          this._setElementAttributes(Eu, Ui, (l) => l + r),
          this._setElementAttributes(ku, Su, (l) => l - r);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, Ui),
          this._resetElementAttributes(Eu, Ui),
          this._resetElementAttributes(ku, Su);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(r, l, f) {
        const m = this.getWidth();
        this._applyManipulationCallback(r, (v) => {
          if (v !== this._element && window.innerWidth > v.clientWidth + m)
            return;
          this._saveInitialAttribute(v, l);
          const w = window.getComputedStyle(v).getPropertyValue(l);
          v.style.setProperty(l, `${f(Number.parseFloat(w))}px`);
        });
      }
      _saveInitialAttribute(r, l) {
        const f = r.style.getPropertyValue(l);
        f && Ce.setDataAttribute(r, l, f);
      }
      _resetElementAttributes(r, l) {
        this._applyManipulationCallback(r, (f) => {
          const m = Ce.getDataAttribute(f, l);
          m !== null
            ? (Ce.removeDataAttribute(f, l), f.style.setProperty(l, m))
            : f.style.removeProperty(l);
        });
      }
      _applyManipulationCallback(r, l) {
        if (c(r)) l(r);
        else for (const f of q.find(r, this._element)) l(f);
      }
    }
    const Cu = "show",
      bu = "mousedown.bs.backdrop",
      eh = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      th = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class Tu extends Ye {
      constructor(r) {
        super(),
          (this._config = this._getConfig(r)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return eh;
      }
      static get DefaultType() {
        return th;
      }
      static get NAME() {
        return "backdrop";
      }
      show(r) {
        if (!this._config.isVisible) return void g(r);
        this._append();
        const l = this._getElement();
        this._config.isAnimated && L(l),
          l.classList.add(Cu),
          this._emulateAnimation(() => {
            g(r);
          });
      }
      hide(r) {
        this._config.isVisible
          ? (this._getElement().classList.remove(Cu),
            this._emulateAnimation(() => {
              this.dispose(), g(r);
            }))
          : g(r);
      }
      dispose() {
        this._isAppended &&
          (C.off(this._element, bu),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const r = document.createElement("div");
          (r.className = this._config.className),
            this._config.isAnimated && r.classList.add("fade"),
            (this._element = r);
        }
        return this._element;
      }
      _configAfterMerge(r) {
        return (r.rootElement = d(r.rootElement)), r;
      }
      _append() {
        if (this._isAppended) return;
        const r = this._getElement();
        this._config.rootElement.append(r),
          C.on(r, bu, () => {
            g(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(r) {
        x(r, this._getElement(), this._config.isAnimated);
      }
    }
    const Nu = ".bs.focustrap",
      ju = "backward",
      nh = { autofocus: !0, trapElement: null },
      rh = { autofocus: "boolean", trapElement: "element" };
    class Ou extends Ye {
      constructor(r) {
        super(),
          (this._config = this._getConfig(r)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return nh;
      }
      static get DefaultType() {
        return rh;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          C.off(document, Nu),
          C.on(document, "focusin.bs.focustrap", (r) => this._handleFocusin(r)),
          C.on(document, "keydown.tab.bs.focustrap", (r) =>
            this._handleKeydown(r)
          ),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), C.off(document, Nu));
      }
      _handleFocusin(r) {
        const { trapElement: l } = this._config;
        if (r.target === document || r.target === l || l.contains(r.target))
          return;
        const f = q.focusableChildren(l);
        f.length === 0
          ? l.focus()
          : this._lastTabNavDirection === ju
          ? f[f.length - 1].focus()
          : f[0].focus();
      }
      _handleKeydown(r) {
        r.key === "Tab" &&
          (this._lastTabNavDirection = r.shiftKey ? ju : "forward");
      }
    }
    const Pu = "hidden.bs.modal",
      Lu = "show.bs.modal",
      Au = "modal-open",
      Du = "show",
      Cl = "modal-static",
      ih = { backdrop: !0, focus: !0, keyboard: !0 },
      oh = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class pn extends be {
      constructor(r, l) {
        super(r, l),
          (this._dialog = q.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new Sl()),
          this._addEventListeners();
      }
      static get Default() {
        return ih;
      }
      static get DefaultType() {
        return oh;
      }
      static get NAME() {
        return "modal";
      }
      toggle(r) {
        return this._isShown ? this.hide() : this.show(r);
      }
      show(r) {
        this._isShown ||
          this._isTransitioning ||
          C.trigger(this._element, Lu, { relatedTarget: r }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(Au),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(r)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (C.trigger(this._element, "hide.bs.modal").defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(Du),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            )));
      }
      dispose() {
        for (const r of [window, this._dialog]) C.off(r, ".bs.modal");
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Tu({
          isVisible: !!this._config.backdrop,
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new Ou({ trapElement: this._element });
      }
      _showElement(r) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const l = q.findOne(".modal-body", this._dialog);
        l && (l.scrollTop = 0),
          L(this._element),
          this._element.classList.add(Du),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                C.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: r,
                });
            },
            this._dialog,
            this._isAnimated()
          );
      }
      _addEventListeners() {
        C.on(this._element, "keydown.dismiss.bs.modal", (r) => {
          if (r.key === "Escape")
            return this._config.keyboard
              ? (r.preventDefault(), void this.hide())
              : void this._triggerBackdropTransition();
        }),
          C.on(window, "resize.bs.modal", () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          C.on(this._element, "mousedown.dismiss.bs.modal", (r) => {
            C.one(this._element, "click.dismiss.bs.modal", (l) => {
              this._element === r.target &&
                this._element === l.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(Au),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              C.trigger(this._element, Pu);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (C.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const r =
            this._element.scrollHeight > document.documentElement.clientHeight,
          l = this._element.style.overflowY;
        l === "hidden" ||
          this._element.classList.contains(Cl) ||
          (r || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(Cl),
          this._queueCallback(() => {
            this._element.classList.remove(Cl),
              this._queueCallback(() => {
                this._element.style.overflowY = l;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const r =
            this._element.scrollHeight > document.documentElement.clientHeight,
          l = this._scrollBar.getWidth(),
          f = l > 0;
        if (f && !r) {
          const m = h() ? "paddingLeft" : "paddingRight";
          this._element.style[m] = `${l}px`;
        }
        if (!f && r) {
          const m = h() ? "paddingRight" : "paddingLeft";
          this._element.style[m] = `${l}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(r, l) {
        return this.each(function () {
          const f = pn.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (f[r] === void 0) throw new TypeError(`No method named "${r}"`);
            f[r](l);
          }
        });
      }
    }
    C.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (u) {
        const r = s(this);
        ["A", "AREA"].includes(this.tagName) && u.preventDefault(),
          C.one(r, Lu, (f) => {
            f.defaultPrevented ||
              C.one(r, Pu, () => {
                y(this) && this.focus();
              });
          });
        const l = q.findOne(".modal.show");
        l && pn.getInstance(l).hide(), pn.getOrCreateInstance(r).toggle(this);
      }
    ),
      ut(pn),
      p(pn);
    const Mu = "show",
      Iu = "showing",
      zu = "hiding",
      Ru = ".offcanvas.show",
      Fu = "hidePrevented.bs.offcanvas",
      $u = "hidden.bs.offcanvas",
      lh = { backdrop: !0, keyboard: !0, scroll: !1 },
      sh = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class Tt extends be {
      constructor(r, l) {
        super(r, l),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return lh;
      }
      static get DefaultType() {
        return sh;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(r) {
        return this._isShown ? this.hide() : this.show(r);
      }
      show(r) {
        this._isShown ||
          C.trigger(this._element, "show.bs.offcanvas", { relatedTarget: r })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new Sl().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(Iu),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(Mu),
                this._element.classList.remove(Iu),
                C.trigger(this._element, "shown.bs.offcanvas", {
                  relatedTarget: r,
                });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (C.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(zu),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(Mu, zu),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new Sl().reset(),
                  C.trigger(this._element, $u);
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const r = !!this._config.backdrop;
        return new Tu({
          className: "offcanvas-backdrop",
          isVisible: r,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: r
            ? () => {
                this._config.backdrop !== "static"
                  ? this.hide()
                  : C.trigger(this._element, Fu);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new Ou({ trapElement: this._element });
      }
      _addEventListeners() {
        C.on(this._element, "keydown.dismiss.bs.offcanvas", (r) => {
          r.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : C.trigger(this._element, Fu));
        });
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = Tt.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (l[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            l[r](this);
          }
        });
      }
    }
    C.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (u) {
        const r = s(this);
        if (
          (["A", "AREA"].includes(this.tagName) && u.preventDefault(), T(this))
        )
          return;
        C.one(r, $u, () => {
          y(this) && this.focus();
        });
        const l = q.findOne(Ru);
        l && l !== r && Tt.getInstance(l).hide(),
          Tt.getOrCreateInstance(r).toggle(this);
      }
    ),
      C.on(window, "load.bs.offcanvas.data-api", () => {
        for (const u of q.find(Ru)) Tt.getOrCreateInstance(u).show();
      }),
      C.on(window, "resize.bs.offcanvas", () => {
        for (const u of q.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(u).position !== "fixed" &&
            Tt.getOrCreateInstance(u).hide();
      }),
      ut(Tt),
      p(Tt);
    const ah = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      uh = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      ch =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      fh = (u, r) => {
        const l = u.nodeName.toLowerCase();
        return r.includes(l)
          ? !ah.has(l) || !!(uh.test(u.nodeValue) || ch.test(u.nodeValue))
          : r.filter((f) => f instanceof RegExp).some((f) => f.test(l));
      },
      Uu = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      dh = {
        allowList: Uu,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      ph = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      hh = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class mh extends Ye {
      constructor(r) {
        super(), (this._config = this._getConfig(r));
      }
      static get Default() {
        return dh;
      }
      static get DefaultType() {
        return ph;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((r) => this._resolvePossibleFunction(r))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(r) {
        return (
          this._checkContent(r),
          (this._config.content = { ...this._config.content, ...r }),
          this
        );
      }
      toHtml() {
        const r = document.createElement("div");
        r.innerHTML = this._maybeSanitize(this._config.template);
        for (const [m, v] of Object.entries(this._config.content))
          this._setContent(r, v, m);
        const l = r.children[0],
          f = this._resolvePossibleFunction(this._config.extraClass);
        return f && l.classList.add(...f.split(" ")), l;
      }
      _typeCheckConfig(r) {
        super._typeCheckConfig(r), this._checkContent(r.content);
      }
      _checkContent(r) {
        for (const [l, f] of Object.entries(r))
          super._typeCheckConfig({ selector: l, entry: f }, hh);
      }
      _setContent(r, l, f) {
        const m = q.findOne(f, r);
        m &&
          ((l = this._resolvePossibleFunction(l))
            ? c(l)
              ? this._putElementInTemplate(d(l), m)
              : this._config.html
              ? (m.innerHTML = this._maybeSanitize(l))
              : (m.textContent = l)
            : m.remove());
      }
      _maybeSanitize(r) {
        return this._config.sanitize
          ? (function (l, f, m) {
              if (!l.length) return l;
              if (m && typeof m == "function") return m(l);
              const v = new window.DOMParser().parseFromString(l, "text/html"),
                w = [].concat(...v.body.querySelectorAll("*"));
              for (const S of w) {
                const N = S.nodeName.toLowerCase();
                if (!Object.keys(f).includes(N)) {
                  S.remove();
                  continue;
                }
                const A = [].concat(...S.attributes),
                  D = [].concat(f["*"] || [], f[N] || []);
                for (const P of A) fh(P, D) || S.removeAttribute(P.nodeName);
              }
              return v.body.innerHTML;
            })(r, this._config.allowList, this._config.sanitizeFn)
          : r;
      }
      _resolvePossibleFunction(r) {
        return typeof r == "function" ? r(this) : r;
      }
      _putElementInTemplate(r, l) {
        if (this._config.html) return (l.innerHTML = ""), void l.append(r);
        l.textContent = r.textContent;
      }
    }
    const gh = new Set(["sanitize", "allowList", "sanitizeFn"]),
      bl = "fade",
      Bi = "show",
      Bu = ".modal",
      Hu = "hide.bs.modal",
      Hi = "hover",
      Vu = "focus",
      vh = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: h() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: h() ? "right" : "left",
      },
      yh = {
        allowList: Uu,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      _h = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class hn extends be {
      constructor(r, l) {
        if (vu === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(r, l),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return yh;
      }
      static get DefaultType() {
        return _h;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          C.off(this._element.closest(Bu), Hu, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title")
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const r = C.trigger(this._element, this.constructor.eventName("show")),
          l = (
            $(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (r.defaultPrevented || !l) return;
        this._disposePopper();
        const f = this._getTipElement();
        this._element.setAttribute("aria-describedby", f.getAttribute("id"));
        const { container: m } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (m.append(f),
            C.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(f)),
          f.classList.add(Bi),
          "ontouchstart" in document.documentElement)
        )
          for (const v of [].concat(...document.body.children))
            C.on(v, "mouseover", k);
        this._queueCallback(
          () => {
            C.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (
          this._isShown() &&
          !C.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(Bi),
            "ontouchstart" in document.documentElement)
          )
            for (const r of [].concat(...document.body.children))
              C.off(r, "mouseover", k);
          (this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  C.trigger(
                    this._element,
                    this.constructor.eventName("hidden")
                  ));
              },
              this.tip,
              this._isAnimated()
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate()
            )),
          this.tip
        );
      }
      _createTipElement(r) {
        const l = this._getTemplateFactory(r).toHtml();
        if (!l) return null;
        l.classList.remove(bl, Bi),
          l.classList.add(`bs-${this.constructor.NAME}-auto`);
        const f = ((m) => {
          do m += Math.floor(1e6 * Math.random());
          while (document.getElementById(m));
          return m;
        })(this.constructor.NAME).toString();
        return (
          l.setAttribute("id", f), this._isAnimated() && l.classList.add(bl), l
        );
      }
      setContent(r) {
        (this._newContent = r),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(r) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(r)
            : (this._templateFactory = new mh({
                ...this._config,
                content: r,
                extraClass: this._resolvePossibleFunction(
                  this._config.customClass
                ),
              })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(r) {
        return this.constructor.getOrCreateInstance(
          r.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(bl))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Bi);
      }
      _createPopper(r) {
        const l =
            typeof this._config.placement == "function"
              ? this._config.placement.call(this, r, this._element)
              : this._config.placement,
          f = vh[l.toUpperCase()];
        return kl(this._element, r, this._getPopperConfig(f));
      }
      _getOffset() {
        const { offset: r } = this._config;
        return typeof r == "string"
          ? r.split(",").map((l) => Number.parseInt(l, 10))
          : typeof r == "function"
          ? (l) => r(l, this._element)
          : r;
      }
      _resolvePossibleFunction(r) {
        return typeof r == "function" ? r.call(this._element) : r;
      }
      _getPopperConfig(r) {
        const l = {
          placement: r,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (f) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  f.state.placement
                );
              },
            },
          ],
        };
        return {
          ...l,
          ...(typeof this._config.popperConfig == "function"
            ? this._config.popperConfig(l)
            : this._config.popperConfig),
        };
      }
      _setListeners() {
        const r = this._config.trigger.split(" ");
        for (const l of r)
          if (l === "click")
            C.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (f) => {
                this._initializeOnDelegatedTarget(f).toggle();
              }
            );
          else if (l !== "manual") {
            const f =
                l === Hi
                  ? this.constructor.eventName("mouseenter")
                  : this.constructor.eventName("focusin"),
              m =
                l === Hi
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            C.on(this._element, f, this._config.selector, (v) => {
              const w = this._initializeOnDelegatedTarget(v);
              (w._activeTrigger[v.type === "focusin" ? Vu : Hi] = !0),
                w._enter();
            }),
              C.on(this._element, m, this._config.selector, (v) => {
                const w = this._initializeOnDelegatedTarget(v);
                (w._activeTrigger[v.type === "focusout" ? Vu : Hi] =
                  w._element.contains(v.relatedTarget)),
                  w._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          C.on(this._element.closest(Bu), Hu, this._hideModalHandler);
      }
      _fixTitle() {
        const r = this._element.getAttribute("title");
        r &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", r),
          this._element.setAttribute("data-bs-original-title", r),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(r, l) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(r, l));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(r) {
        const l = Ce.getDataAttributes(this._element);
        for (const f of Object.keys(l)) gh.has(f) && delete l[f];
        return (
          (r = { ...l, ...(typeof r == "object" && r ? r : {}) }),
          (r = this._mergeConfigObj(r)),
          (r = this._configAfterMerge(r)),
          this._typeCheckConfig(r),
          r
        );
      }
      _configAfterMerge(r) {
        return (
          (r.container = r.container === !1 ? document.body : d(r.container)),
          typeof r.delay == "number" &&
            (r.delay = { show: r.delay, hide: r.delay }),
          typeof r.title == "number" && (r.title = r.title.toString()),
          typeof r.content == "number" && (r.content = r.content.toString()),
          r
        );
      }
      _getDelegateConfig() {
        const r = {};
        for (const l in this._config)
          this.constructor.Default[l] !== this._config[l] &&
            (r[l] = this._config[l]);
        return (r.selector = !1), (r.trigger = "manual"), r;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = hn.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (l[r] === void 0) throw new TypeError(`No method named "${r}"`);
            l[r]();
          }
        });
      }
    }
    p(hn);
    const wh = {
        ...hn.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      xh = { ...hn.DefaultType, content: "(null|string|element|function)" };
    class Vi extends hn {
      static get Default() {
        return wh;
      }
      static get DefaultType() {
        return xh;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = Vi.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (l[r] === void 0) throw new TypeError(`No method named "${r}"`);
            l[r]();
          }
        });
      }
    }
    p(Vi);
    const Wu = "click.bs.scrollspy",
      Or = "active",
      Qu = "[href]",
      Eh = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      kh = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class Pr extends be {
      constructor(r, l) {
        super(r, l),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return Eh;
      }
      static get DefaultType() {
        return kh;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const r of this._observableSections.values())
          this._observer.observe(r);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(r) {
        return (
          (r.target = d(r.target) || document.body),
          (r.rootMargin = r.offset ? `${r.offset}px 0px -30%` : r.rootMargin),
          typeof r.threshold == "string" &&
            (r.threshold = r.threshold
              .split(",")
              .map((l) => Number.parseFloat(l))),
          r
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (C.off(this._config.target, Wu),
          C.on(this._config.target, Wu, Qu, (r) => {
            const l = this._observableSections.get(r.target.hash);
            if (l) {
              r.preventDefault();
              const f = this._rootElement || window,
                m = l.offsetTop - this._element.offsetTop;
              if (f.scrollTo)
                return void f.scrollTo({ top: m, behavior: "smooth" });
              f.scrollTop = m;
            }
          }));
      }
      _getNewObserver() {
        const r = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((l) => this._observerCallback(l), r);
      }
      _observerCallback(r) {
        const l = (w) => this._targetLinks.get(`#${w.target.id}`),
          f = (w) => {
            (this._previousScrollData.visibleEntryTop = w.target.offsetTop),
              this._process(l(w));
          },
          m = (this._rootElement || document.documentElement).scrollTop,
          v = m >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = m;
        for (const w of r) {
          if (!w.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(l(w));
            continue;
          }
          const S =
            w.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (v && S) {
            if ((f(w), !m)) return;
          } else v || S || f(w);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const r = q.find(Qu, this._config.target);
        for (const l of r) {
          if (!l.hash || T(l)) continue;
          const f = q.findOne(l.hash, this._element);
          y(f) &&
            (this._targetLinks.set(l.hash, l),
            this._observableSections.set(l.hash, f));
        }
      }
      _process(r) {
        this._activeTarget !== r &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = r),
          r.classList.add(Or),
          this._activateParents(r),
          C.trigger(this._element, "activate.bs.scrollspy", {
            relatedTarget: r,
          }));
      }
      _activateParents(r) {
        if (r.classList.contains("dropdown-item"))
          q.findOne(".dropdown-toggle", r.closest(".dropdown")).classList.add(
            Or
          );
        else
          for (const l of q.parents(r, ".nav, .list-group"))
            for (const f of q.prev(
              l,
              ".nav-link, .nav-item > .nav-link, .list-group-item"
            ))
              f.classList.add(Or);
      }
      _clearActiveClass(r) {
        r.classList.remove(Or);
        const l = q.find("[href].active", r);
        for (const f of l) f.classList.remove(Or);
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = Pr.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (l[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            l[r]();
          }
        });
      }
    }
    C.on(window, "load.bs.scrollspy.data-api", () => {
      for (const u of q.find('[data-bs-spy="scroll"]'))
        Pr.getOrCreateInstance(u);
    }),
      p(Pr);
    const Sh = "ArrowLeft",
      Yu = "ArrowRight",
      Ch = "ArrowUp",
      Ku = "ArrowDown",
      Wi = "active",
      Xu = "fade",
      Tl = "show",
      qu =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Nl = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${qu}`;
    class mn extends be {
      constructor(r) {
        super(r),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]'
          )),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            C.on(this._element, "keydown.bs.tab", (l) => this._keydown(l)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const r = this._element;
        if (this._elemIsActive(r)) return;
        const l = this._getActiveElem(),
          f = l ? C.trigger(l, "hide.bs.tab", { relatedTarget: r }) : null;
        C.trigger(r, "show.bs.tab", { relatedTarget: l }).defaultPrevented ||
          (f && f.defaultPrevented) ||
          (this._deactivate(l, r), this._activate(r, l));
      }
      _activate(r, l) {
        r &&
          (r.classList.add(Wi),
          this._activate(s(r)),
          this._queueCallback(
            () => {
              r.getAttribute("role") === "tab"
                ? (r.removeAttribute("tabindex"),
                  r.setAttribute("aria-selected", !0),
                  this._toggleDropDown(r, !0),
                  C.trigger(r, "shown.bs.tab", { relatedTarget: l }))
                : r.classList.add(Tl);
            },
            r,
            r.classList.contains(Xu)
          ));
      }
      _deactivate(r, l) {
        r &&
          (r.classList.remove(Wi),
          r.blur(),
          this._deactivate(s(r)),
          this._queueCallback(
            () => {
              r.getAttribute("role") === "tab"
                ? (r.setAttribute("aria-selected", !1),
                  r.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(r, !1),
                  C.trigger(r, "hidden.bs.tab", { relatedTarget: l }))
                : r.classList.remove(Tl);
            },
            r,
            r.classList.contains(Xu)
          ));
      }
      _keydown(r) {
        if (![Sh, Yu, Ch, Ku].includes(r.key)) return;
        r.stopPropagation(), r.preventDefault();
        const l = [Yu, Ku].includes(r.key),
          f = E(
            this._getChildren().filter((m) => !T(m)),
            r.target,
            l,
            !0
          );
        f && (f.focus({ preventScroll: !0 }), mn.getOrCreateInstance(f).show());
      }
      _getChildren() {
        return q.find(Nl, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((r) => this._elemIsActive(r)) || null;
      }
      _setInitialAttributes(r, l) {
        this._setAttributeIfNotExists(r, "role", "tablist");
        for (const f of l) this._setInitialAttributesOnChild(f);
      }
      _setInitialAttributesOnChild(r) {
        r = this._getInnerElement(r);
        const l = this._elemIsActive(r),
          f = this._getOuterElement(r);
        r.setAttribute("aria-selected", l),
          f !== r && this._setAttributeIfNotExists(f, "role", "presentation"),
          l || r.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(r, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(r);
      }
      _setInitialAttributesOnTargetPanel(r) {
        const l = s(r);
        l &&
          (this._setAttributeIfNotExists(l, "role", "tabpanel"),
          r.id &&
            this._setAttributeIfNotExists(l, "aria-labelledby", `#${r.id}`));
      }
      _toggleDropDown(r, l) {
        const f = this._getOuterElement(r);
        if (!f.classList.contains("dropdown")) return;
        const m = (v, w) => {
          const S = q.findOne(v, f);
          S && S.classList.toggle(w, l);
        };
        m(".dropdown-toggle", Wi),
          m(".dropdown-menu", Tl),
          f.setAttribute("aria-expanded", l);
      }
      _setAttributeIfNotExists(r, l, f) {
        r.hasAttribute(l) || r.setAttribute(l, f);
      }
      _elemIsActive(r) {
        return r.classList.contains(Wi);
      }
      _getInnerElement(r) {
        return r.matches(Nl) ? r : q.findOne(Nl, r);
      }
      _getOuterElement(r) {
        return r.closest(".nav-item, .list-group-item") || r;
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = mn.getOrCreateInstance(this);
          if (typeof r == "string") {
            if (l[r] === void 0 || r.startsWith("_") || r === "constructor")
              throw new TypeError(`No method named "${r}"`);
            l[r]();
          }
        });
      }
    }
    C.on(document, "click.bs.tab", qu, function (u) {
      ["A", "AREA"].includes(this.tagName) && u.preventDefault(),
        T(this) || mn.getOrCreateInstance(this).show();
    }),
      C.on(window, "load.bs.tab", () => {
        for (const u of q.find(
          '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
        ))
          mn.getOrCreateInstance(u);
      }),
      p(mn);
    const Gu = "hide",
      Qi = "show",
      Yi = "showing",
      bh = { animation: "boolean", autohide: "boolean", delay: "number" },
      Th = { animation: !0, autohide: !0, delay: 5e3 };
    class Lr extends be {
      constructor(r, l) {
        super(r, l),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return Th;
      }
      static get DefaultType() {
        return bh;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        C.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(Gu),
          L(this._element),
          this._element.classList.add(Qi, Yi),
          this._queueCallback(
            () => {
              this._element.classList.remove(Yi),
                C.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this.isShown() &&
          (C.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.add(Yi),
            this._queueCallback(
              () => {
                this._element.classList.add(Gu),
                  this._element.classList.remove(Yi, Qi),
                  C.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(Qi),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(Qi);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(r, l) {
        switch (r.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = l;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = l;
        }
        if (l) return void this._clearTimeout();
        const f = r.relatedTarget;
        this._element === f ||
          this._element.contains(f) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        C.on(this._element, "mouseover.bs.toast", (r) =>
          this._onInteraction(r, !0)
        ),
          C.on(this._element, "mouseout.bs.toast", (r) =>
            this._onInteraction(r, !1)
          ),
          C.on(this._element, "focusin.bs.toast", (r) =>
            this._onInteraction(r, !0)
          ),
          C.on(this._element, "focusout.bs.toast", (r) =>
            this._onInteraction(r, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(r) {
        return this.each(function () {
          const l = Lr.getOrCreateInstance(this, r);
          if (typeof r == "string") {
            if (l[r] === void 0) throw new TypeError(`No method named "${r}"`);
            l[r](this);
          }
        });
      }
    }
    return (
      ut(Lr),
      p(Lr),
      {
        Alert: kr,
        Button: Sr,
        Carousel: Mn,
        Collapse: In,
        Dropdown: ct,
        Modal: pn,
        Offcanvas: Tt,
        Popover: Vi,
        ScrollSpy: Pr,
        Tab: mn,
        Toast: Lr,
        Tooltip: hn,
      }
    );
  });
})(Gg);
function Zg() {
  return _.jsxs("div", {
    className: "container d-flex flex-column m-5",
    children: [
      _.jsxs("div", {
        className: "",
        children: [_.jsx("h2", { children: "Portfolio" }), _.jsx("br", {})],
      }),
      _.jsxs("div", {
        id: "carouselExampleDark",
        className: "carousel carousel-dark slide",
        children: [
          _.jsxs("div", {
            className: "carousel-indicators",
            children: [
              _.jsx("button", {
                type: "button",
                "data-bs-target": "#carouselExampleDark",
                "data-bs-slide-to": "0",
                className: "active",
                "aria-label": "Slide 1",
                "aria-current": "true",
              }),
              _.jsx("button", {
                type: "button",
                "data-bs-target": "#carouselExampleDark",
                "data-bs-slide-to": "1",
                "aria-label": "Slide 2",
                className: "",
              }),
              _.jsx("button", {
                type: "button",
                "data-bs-target": "#carouselExampleDark",
                "data-bs-slide-to": "2",
                "aria-label": "Slide 3",
              }),
              _.jsx("button", {
                type: "button",
                "data-bs-target": "#carouselExampleDark",
                "data-bs-slide-to": "3",
                "aria-label": "Slide 4",
              }),
              _.jsx("button", {
                type: "button",
                "data-bs-target": "#carouselExampleDark",
                "data-bs-slide-to": "4",
                "aria-label": "Slide 5",
              }),
              _.jsx("button", {
                type: "button",
                "data-bs-target": "#carouselExampleDark",
                "data-bs-slide-to": "5",
                "aria-label": "Slide 6",
              }),
            ],
          }),
          _.jsxs("div", {
            className: "carousel-inner",
            children: [
              _.jsxs("div", {
                className: "carousel-item active text-center",
                children: [
                  _.jsx("img", {
                    src: "images/Sabores-Do-Mundo.jpeg",
                    className: "mx-auto",
                    width: "800",
                    height: "400",
                  }),
                  _.jsxs("div", {
                    className:
                      "carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75",
                    children: [
                      _.jsx("h5", { children: "Sabores-Do-Mundo" }),
                      _.jsx("p", {
                        children:
                          "A full Library of the most famous dishes of the world, which includes detailed information about every dish",
                      }),
                      _.jsxs("div", {
                        children: [
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://sabores-do-mondo.herokuapp.com/",
                              children: "Go to app",
                            }),
                          }),
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://github.com/MoisesPerez90/Sabores-Do-Mundo",
                              children: "Go to repository",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "carousel-item text-center",
                children: [
                  _.jsx("img", {
                    src: "images/Wheater-API.png",
                    className: "mx-auto",
                    width: "800",
                    height: "400",
                  }),
                  _.jsxs("div", {
                    className:
                      "carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75",
                    children: [
                      _.jsx("h5", { children: "Wheater Dashboard" }),
                      _.jsx("p", {
                        children:
                          "a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
                      }),
                      _.jsxs("div", {
                        children: [
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://moisesperez90.github.io/Rapid-WeatherAPP-I/",
                              children: "Go to app",
                            }),
                          }),
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://github.com/MoisesPerez90/Rapid-WeatherAPP-I",
                              children: "Go to repository",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "carousel-item text-center",
                children: [
                  _.jsx("img", {
                    src: "images/Scheduler.png",
                    className: "mx-auto",
                    width: "800",
                    height: "400",
                  }),
                  _.jsxs("div", {
                    className:
                      "carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75",
                    children: [
                      _.jsx("h5", { children: "Work Day Scheduler" }),
                      _.jsx("p", {
                        children:
                          "A simple calendar application that allows a user to save events for each hour of the day.",
                      }),
                      _.jsxs("div", {
                        children: [
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://moisesperez90.github.io/A-top-time-organizer/",
                              children: "Go to app",
                            }),
                          }),
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://github.com/MoisesPerez90/A-top-time-organizer",
                              children: "Go to repository",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "carousel-item text-center",
                children: [
                  _.jsx("img", {
                    src: "images/Quiz.png",
                    className: "mx-auto",
                    width: "800",
                    height: "400",
                  }),
                  _.jsxs("div", {
                    className:
                      "carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75",
                    children: [
                      _.jsx("h5", { children: "The funniest quiz" }),
                      _.jsx("p", {
                        children:
                          "This is a quiz app where you will face programming questions.",
                      }),
                      _.jsxs("div", {
                        children: [
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://moisesperez90.github.io/The-funniest-quiz/",
                              children: "Go to app",
                            }),
                          }),
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://github.com/MoisesPerez90/The-funniest-quiz",
                              children: "Go to repository",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "carousel-item text-center",
                children: [
                  _.jsx("img", {
                    src: "images/Generator.png",
                    className: "mx-auto",
                    width: "800",
                    height: "400",
                  }),
                  _.jsxs("div", {
                    className:
                      "carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75",
                    children: [
                      _.jsx("h5", { children: "Password Generator" }),
                      _.jsx("p", {
                        children:
                          "An application that enables employees to generate random passwords based on criteria that they’ve selected",
                      }),
                      _.jsxs("div", {
                        children: [
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "http://www.mosape.security-engine-helper.com/",
                              children: "Go to app",
                            }),
                          }),
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://github.com/MoisesPerez90/security-engine-helper",
                              children: "Go to repository",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "carousel-item text-center",
                children: [
                  _.jsx("img", {
                    src: "images/MedicalApp.png",
                    className: "mx-auto",
                    width: "800",
                    height: "400",
                  }),
                  _.jsxs("div", {
                    className:
                      "carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75",
                    children: [
                      _.jsx("h5", { children: "Medical-Appointments" }),
                      _.jsx("p", {
                        children:
                          "This app allows users to effectively manage their appointments by providing a comprehensive view of past appointments with notes and follow-up-task, reschedule or cancel appointments, input and store information about medical providers and insurance for quick reference. it helps users stay organized and on top of their health appointments",
                      }),
                      _.jsxs("div", {
                        children: [
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://espinosasalvador.github.io/Medical-Appointments/",
                              children: "Go to app",
                            }),
                          }),
                          _.jsx("button", {
                            type: "button",
                            className: "btn btn-outline-dark btn-sm m-2",
                            children: _.jsx("a", {
                              href: "https://github.com/EspinosaSalvador/Medical-Appointments",
                              children: "Go to repository",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          _.jsxs("button", {
            className: "carousel-control-prev",
            type: "button",
            "data-bs-target": "#carouselExampleDark",
            "data-bs-slide": "prev",
            children: [
              _.jsx("span", {
                className: "carousel-control-prev-icon",
                "aria-hidden": "true",
              }),
              _.jsx("span", {
                className: "visually-hidden",
                children: "Previous",
              }),
            ],
          }),
          _.jsxs("button", {
            className: "carousel-control-next",
            type: "button",
            "data-bs-target": "#carouselExampleDark",
            "data-bs-slide": "next",
            children: [
              _.jsx("span", {
                className: "carousel-control-next-icon",
                "aria-hidden": "true",
              }),
              _.jsx("span", { className: "visually-hidden", children: "Next" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Jg() {
  return _.jsx("div", {
    className: "container d-flex flex-column m-5",
    children: _.jsxs("div", {
      className: "card",
      children: [
        _.jsx("h5", {
          className: "card-header",
          children: "Checkout my resume!",
        }),
        _.jsxs("div", {
          className: "card-body",
          children: [
            _.jsx("h5", { className: "card-title", children: "Proficiencies" }),
            _.jsxs("ul", {
              children: [
                _.jsx("li", { children: "React" }),
                _.jsx("li", { children: "JavaScript" }),
                _.jsx("li", { children: "HTML" }),
                _.jsx("li", { children: "CSS" }),
                _.jsx("li", { children: "Node.js" }),
                _.jsx("li", { children: "Express" }),
                _.jsx("li", { children: "MongoDB" }),
                _.jsx("li", { children: "SQL" }),
              ],
            }),
            _.jsx("a", {
              href: "files/Moises Perez.pdf",
              download: !0,
              class: "btn btn-primary",
              children: "Download my resume",
            }),
          ],
        }),
      ],
    }),
  });
}
var bp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  jf = kn.createContext && kn.createContext(bp),
  Zt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Zt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        Zt.apply(this, arguments)
      );
    },
  ev =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) &&
          t.indexOf(i) < 0 &&
          (n[i] = e[i]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
          t.indexOf(i[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
            (n[i[o]] = e[i[o]]);
      return n;
    };
function Tp(e) {
  return (
    e &&
    e.map(function (t, n) {
      return kn.createElement(t.tag, Zt({ key: n }, t.attr), Tp(t.child));
    })
  );
}
function il(e) {
  return function (t) {
    return kn.createElement(tv, Zt({ attr: Zt({}, e.attr) }, t), Tp(e.child));
  };
}
function tv(e) {
  var t = function (n) {
    var i = e.attr,
      o = e.size,
      s = e.title,
      a = ev(e, ["attr", "size", "title"]),
      c = o || n.size || "1em",
      d;
    return (
      n.className && (d = n.className),
      e.className && (d = (d ? d + " " : "") + e.className),
      kn.createElement(
        "svg",
        Zt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          i,
          a,
          {
            className: d,
            style: Zt(Zt({ color: e.color || n.color }, n.style), e.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && kn.createElement("title", null, s),
        e.children
      )
    );
  };
  return jf !== void 0
    ? kn.createElement(jf.Consumer, null, function (n) {
        return t(n);
      })
    : t(bp);
}
function nv(e) {
  return il({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
      },
    ],
  })(e);
}
function rv(e) {
  return il({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(e);
}
function iv(e) {
  return il({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
      },
    ],
  })(e);
}
function ov(e) {
  return il({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M260.6 96H12c-6.6 0-12 5.4-12 12v43.1c0 6.6 5.4 12 12 12h85.1V404c0 6.6 5.4 12 12 12h54.3c6.6 0 12-5.4 12-12V163.1h85.1c6.6 0 12-5.4 12-12V108c.1-6.6-5.3-12-11.9-12zM640 403l-24-296c-.5-6.2-5.7-11-12-11h-65.4c-5.1 0-9.7 3.3-11.3 8.1l-43.8 127.1c-7.2 20.6-16.1 52.8-16.1 52.8h-.9s-8.9-32.2-16.1-52.8l-43.8-127.1c-1.7-4.8-6.2-8.1-11.3-8.1h-65.4c-6.2 0-11.4 4.8-12 11l-24.4 296c-.6 7 4.9 13 12 13H360c6.3 0 11.5-4.9 12-11.2l9.1-132.9c1.8-24.2 0-53.7 0-53.7h.9s10.7 33.6 17.9 53.7l30.7 84.7c1.7 4.7 6.2 7.9 11.3 7.9h50.3c5.1 0 9.6-3.2 11.3-7.9l30.7-84.7c7.2-20.1 17.9-53.7 17.9-53.7h.9s-1.8 29.5 0 53.7l9.1 132.9c.4 6.3 5.7 11.2 12 11.2H628c7 0 12.5-6 12-13z",
        },
      },
    ],
  })(e);
}
function lv() {
  return _.jsx("div", {
    className: "footer d-flex flex-column",
    children: _.jsxs("div", {
      className: "container columns",
      children: [
        _.jsx("div", {
          className: "row",
          children: _.jsx("div", {
            className: "col-12 text-center",
            children: _.jsxs("ul", {
              className: "list-inline",
              children: [
                _.jsx("li", {
                  className: "list-inline-item",
                  children: _.jsx("a", {
                    href: "https://github.com/MoisesPerez90",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.jsx(rv, {}),
                  }),
                }),
                _.jsx("li", {
                  className: "list-inline-item",
                  children: _.jsx("a", {
                    href: "https://www.linkedin.com/in/moisesperez-639990/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.jsx(iv, {}),
                  }),
                }),
                _.jsx("li", {
                  className: "list-inline-item",
                  children: _.jsx("a", {
                    href: "https://www.facebook.com/mooisees.peerez",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.jsx(nv, {}),
                  }),
                }),
              ],
            }),
          }),
        }),
        _.jsxs("p", {
          className: "text-center",
          children: ["© 2023 MoSaPe Copyright ", _.jsx(ov, {})],
        }),
      ],
    }),
  });
}
function sv() {
  const [e, t] = jt.useState("AboutMe"),
    n = () =>
      e === "AboutMe"
        ? _.jsx(Kg, {})
        : e === "Resume"
        ? _.jsx(Jg, {})
        : e === "Portfolio"
        ? _.jsx(Zg, {})
        : _.jsx(qg, {}),
    i = (o) => t(o);
  return _.jsxs("div", {
    children: [
      _.jsx(Yg, { currentPage: e, handlePageChange: i }),
      n(),
      _.jsx(lv, {}),
    ],
  });
}
const av = () => _.jsx(sv, {});
Qg.render(_.jsx(av, {}), document.getElementById("root"));
