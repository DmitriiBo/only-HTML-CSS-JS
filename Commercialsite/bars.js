! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (me.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(xe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        V.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function l(e, t, n) {
        var i;
        if (n === undefined && 1 === e.nodeType)
            if (i = "data-" + t.replace(ke, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $e.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {}
                Ee.set(e, t, n)
            } else n = undefined;
        return n
    }

    function u(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return oe.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            c = (oe.cssNumber[t] || "px" !== u && +l) && ze.exec(oe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, oe.style(e, t, c + u)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ce.set(e[n], "globalEval", !t || Ce.get(t[n], "globalEval"))
    }

    function h(e, t, n, i, r) {
        for (var o, s, a, l, u, h, f = t.createDocumentFragment(), p = [], m = 0, g = e.length; m < g; m++)
            if ((o = e[m]) || 0 === o)
                if ("object" === oe.type(o)) oe.merge(p, o.nodeType ? [o] : o);
                else if (Oe.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (qe.exec(o) || ["", ""])[1].toLowerCase(), l = Pe[a] || Pe._default, s.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2], h = l[0]; h--;) s = s.lastChild;
            oe.merge(p, s.childNodes), s = f.firstChild, s.textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", m = 0; o = p[m++];)
            if (i && oe.inArray(o, i) > -1) r && r.push(o);
            else if (u = oe.contains(o.ownerDocument, o), s = c(f.appendChild(o), "script"), u && d(s), n)
            for (h = 0; o = s[h++];) Ie.test(o.type || "") && n.push(o);
        return f
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function m() {
        try {
            return V.activeElement
        } catch (e) {}
    }

    function g(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = undefined);
            for (a in t) g(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = p;
        else if (!r) return e;
        return 1 === o && (s = r, r = function (e) {
            return oe().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = oe.guid++)), e.each(function () {
            oe.event.add(this, t, r, i, n)
        })
    }

    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Ce.hasData(e) && (o = Ce.access(e), s = Ce.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) oe.event.add(t, r, u[r][n])
            }
            Ee.hasData(e) && (a = Ee.access(e), l = oe.extend({}, a), Ee.set(t, l))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && De.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, i) {
        t = J.apply([], t);
        var r, o, s, a, l, u, d = 0,
            f = e.length,
            p = f - 1,
            m = t[0],
            g = oe.isFunction(m);
        if (g || f > 1 && "string" == typeof m && !ie.checkClone && We.test(m)) return e.each(function (r) {
            var o = e.eq(r);
            g && (t[0] = m.call(this, r, o.html())), T(o, t, n, i)
        });
        if (f && (r = h(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = oe.map(c(r, "script"), y), a = s.length; d < f; d++) l = r, d !== p && (l = oe.clone(l, !0, !0), a && oe.merge(s, c(l, "script"))), n.call(e[d], l, d);
            if (a)
                for (u = s[s.length - 1].ownerDocument, oe.map(s, b), d = 0; d < a; d++) l = s[d], Ie.test(l.type || "") && !Ce.access(l, "globalEval") && oe.contains(u, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(Be, "")))
        }
        return e
    }

    function S(e, t, n) {
        for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(c(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && d(c(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function C(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            i = oe.css(n[0], "display");
        return n.detach(), i
    }

    function E(e) {
        var t = V,
            n = Ye[e];
        return n || (n = C(e, t), "none" !== n && n || (Xe = (Xe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xe[0].contentDocument, t.write(), t.close(), n = C(e, t), Xe.detach()), Ye[e] = n), n
    }

    function $(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || Ve(e), s = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== s && s !== undefined || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !ie.pixelMarginRight() && Ge.test(s) && Ue.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), s !== undefined ? s + "" : s
    }

    function k(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function j(e) {
        if (e in nt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
            if ((e = tt[n] + t) in nt) return e
    }

    function z(e, t, n) {
        var i = ze.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function A(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += oe.css(e, n + Ae[o], !0, r)), i ? ("content" === n && (s -= oe.css(e, "padding" + Ae[o], !0, r)), "margin" !== n && (s -= oe.css(e, "border" + Ae[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + Ae[o], !0, r), "padding" !== n && (s += oe.css(e, "border" + Ae[o] + "Width", !0, r)));
        return s
    }

    function L(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ve(e),
            s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (r = $(e, t, o), (r < 0 || null == r) && (r = e.style[t]), Ge.test(r)) return r;
            i = s && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function D(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = Ce.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (o[s] = Ce.access(i, "olddisplay", E(i.nodeName)))) : (r = Le(i), "none" === n && r || Ce.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function q(e, t, n, i, r) {
        return new q.prototype.init(e, t, n, i, r)
    }

    function I() {
        return e.setTimeout(function () {
            it = undefined
        }), it = oe.now()
    }

    function P(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ae[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function O(e, t, n) {
        for (var i, r = (H.tweeners[t] || []).concat(H.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function M(e, t, n) {
        var i, r, o, s, a, l, u, c = this,
            d = {},
            h = e.style,
            f = e.nodeType && Le(e),
            p = Ce.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = oe.css(e, "display"), "inline" === ("none" === u ? Ce.get(e, "olddisplay") || E(e.nodeName) : u) && "none" === oe.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", c.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], ot.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !p || p[i] === undefined) continue;
                    f = !0
                }
                d[i] = p && p[i] || oe.style(e, i)
            } else u = undefined;
        if (oe.isEmptyObject(d)) "inline" === ("none" === u ? E(e.nodeName) : u) && (h.display = u);
        else {
            p ? "hidden" in p && (f = p.hidden) : p = Ce.access(e, "fxshow", {}), o && (p.hidden = !f), f ? oe(e).show() : c.done(function () {
                oe(e).hide()
            }), c.done(function () {
                var t;
                Ce.remove(e, "fxshow");
                for (t in d) oe.style(e, t, d[t])
            });
            for (i in d) s = O(f ? p[i] : 0, i, c), i in p || (p[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function N(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = oe.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function H(e, t, n) {
        var i, r, o = 0,
            s = H.prefilters.length,
            a = oe.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = it || I(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), o < 1 && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || I(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (N(c, u.opts.specialEasing); o < s; o++)
            if (i = H.prefilters[o].call(u, e, c, u.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(u.elem, u.opts.queue).stop = oe.proxy(i.stop, i)), i;
        return oe.map(c, O, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function _(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(xe) || [];
            if (oe.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function W(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, oe.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = e === Et;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function R(e, t) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i), e
    }

    function B(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function X(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o]))
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e, t, n, i) {
        var r;
        if (oe.isArray(t)) oe.each(t, function (t, r) {
            n || zt.test(e) ? i(e, r) : Y(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else
            for (r in t) Y(e + "[" + r + "]", t[r], n, i)
    }

    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var G = [],
        V = e.document,
        Q = G.slice,
        J = G.concat,
        K = G.push,
        Z = G.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        re = "2.2.4",
        oe = function (e, t) {
            return new oe.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ue = function (e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return Q.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return oe.each(this, e)
        },
        map: function (e) {
            return this.pushStack(oe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: G.sort,
        splice: G.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(u, o, i)) : i !== undefined && (s[t] = i));
        return s
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function (e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return t === undefined || ne.call(e, t)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            (e = oe.trim(e)) && (1 === e.indexOf("use strict") ? (t = V.createElement("script"), t.text = e, V.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(ae, "ms-").replace(le, ue)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function (e, t, i) {
            var r, o, s = 0,
                a = [];
            if (n(e))
                for (r = e.length; s < r; s++) null != (o = t(e[s], s, i)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, i)) && a.push(o);
            return J.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (i = Q.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(Q.call(arguments)))
            }, r.guid = e.guid = e.guid || oe.guid++, r) : undefined
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = G[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, d, f, p = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : _) !== D && L(t), t = t || D, I)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (p && (s = p.getElementById(r)) && N(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                    } if (w.qsa && !X[e + " "] && (!P || !P.test(e))) {
                    if (1 !== m) p = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = H), d = E(e), o = d.length, l = he.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = l + " " + h(d[o]);
                        f = d.join(","), p = ye.test(e) && c(t.parentNode) || t
                    }
                    if (f) try {
                        return K.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === H && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[H] = !0, e
        }

        function r(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function h(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function (t, n, s) {
                var a, l, u, c = [F, o];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (u = t[H] || (t[H] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === o) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function v(e, t, n, r, o, s) {
            return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, s)), i(function (i, s, a, l) {
                var u, c, d, h = [],
                    f = [],
                    p = s.length,
                    v = i || m(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : g(v, h, e, a, l),
                    b = n ? o || (i ? e : p || r) ? [] : s : y;
                if (n && n(y, b, a, l), r)
                    for (u = g(b, f), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(i, d) : h[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else b = g(b === s ? b.splice(p, b.length) : b), o ? o(null, s, b, l) : K.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = f(function (e) {
                    return e === t
                }, s, !0), u = f(function (e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function (e, n, i) {
                    var r = !o && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; a < r; a++)
                if (n = T.relative[e[a].type]) c = [f(p(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[H]) {
                        for (i = ++a; i < r && !T.relative[e[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && h(e))
                    }
                    c.push(n)
                } return p(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function (i, s, a, l, u) {
                    var c, d, h, f = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = j,
                        b = i || o && T.find.TAG("*", u),
                        x = F += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (j = s === D || s || u); p !== w && null != (c = b[p]); p++) {
                        if (o && c) {
                            for (d = 0, s || c.ownerDocument === D || (L(c), a = !I); h = e[d++];)
                                if (h(c, s || D, a)) {
                                    l.push(c);
                                    break
                                } u && (F = x)
                        }
                        r && ((c = !h && c) && f--, i && m.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (d = 0; h = n[d++];) h(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = Q.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (F = x, j = y), m
                };
            return r ? i(s) : s
        }
        var x, w, T, S, C, E, $, k, j, z, A, L, D, q, I, P, O, M, N, H = "sizzle" + 1 * new Date,
            _ = e.document,
            F = 0,
            W = 0,
            R = n(),
            B = n(),
            X = n(),
            Y = function (e, t) {
                return e === t && (A = !0), 0
            },
            U = 1 << 31,
            G = {}.hasOwnProperty,
            V = [],
            Q = V.pop,
            J = V.push,
            K = V.push,
            Z = V.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            he = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Te = function () {
                L()
            };
        try {
            K.apply(V = Z.call(_.childNodes), _.childNodes), V[_.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: V.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : _;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, q = D.documentElement, I = !C(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function (e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(D.getElementsByClassName), w.getById = r(function (e) {
                return q.appendChild(e).id = H, !D.getElementsByName || !D.getElementsByName(H).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e)
            }, O = [], P = [], (w.qsa = ge.test(D.querySelectorAll)) && (r(function (e) {
                q.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || P.push(".#.+[+~]")
            }), r(function (e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (w.matchesSelector = ge.test(M = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && r(function (e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), O.push("!=", oe)
            }), P = P.length && new RegExp(P.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(q.compareDocumentPosition), N = t || ge.test(q.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Y = t ? function (e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === _ && N(_, e) ? -1 : t === D || t.ownerDocument === _ && N(_, t) ? 1 : z ? ee(z, e) - ee(z, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === D ? -1 : t === D ? 1 : r ? -1 : o ? 1 : z ? ee(z, e) - ee(z, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === _ ? -1 : l[i] === _ ? 1 : 0
            }, D) : D
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== D && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && I && !X[n + " "] && (!O || !O.test(n)) && (!P || !P.test(n))) try {
                var i = M.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== D && L(e), N(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== D && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                i = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !I) : undefined;
            return i !== undefined ? i : w.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (A = !w.detectDuplicates, z = !w.sortStable && e.slice(0), e.sort(Y), A) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return z = null, e
        }, S = t.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += S(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, h, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = t; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (h = g, d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], f = u[0] === F && u[1], b = f && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)
                                    if (1 === h.nodeType && ++b && h === t) {
                                        c[e] = [F, f, b];
                                        break
                                    }
                            } else if (y && (h = t, d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], f = u[0] === F && u[1], b = f), !1 === b)
                                for (;
                                    (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[H] || (h[H] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[e] = [F, b]), h !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = $(e.replace(ae, "$1"));
                    return r[H] ? i(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(xe, we),
                        function (t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === q
                },
                focus: function (e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return pe.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (e, t) {
                    return [t - 1]
                }),
                eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: u(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function (e, n) {
            var i, r, o, s, a, l, u, c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = T.preFilter; a;) {
                i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in T.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }, $ = t.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                o = X(e, b(r, i)), o.selector = e
            }
            return o
        }, k = t.select = function (e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                d = !i && E(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && I && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && h(o))) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || $(e, d))(i, t, !I, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = H.split("").sort(Y).join("") === H, w.detectDuplicates = !!A, L(), w.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var de = function (e, t, n) {
            for (var i = [], r = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && oe(e).is(n)) break;
                    i.push(e)
                } return i
        },
        he = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        fe = oe.expr.match.needsContext,
        pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        me = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; t < n; t++) oe.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || ge, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : V, !0)), pe.test(i[1]) && oe.isPlainObject(t))
                    for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return r = V.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = V, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? n.ready !== undefined ? n.ready(e) : e(oe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    }).prototype = oe.fn, ge = oe(V);
    var ye = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function (e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], s = fe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return de(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function (e) {
            return r(e, "nextSibling")
        },
        prev: function (e) {
            return r(e, "previousSibling")
        },
        nextAll: function (e) {
            return de(e, "nextSibling")
        },
        prevAll: function (e) {
            return de(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function (e) {
            return he((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return he(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, i) {
            var r = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (be[e] || oe.uniqueSort(r), ye.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var xe = /\S+/g;
    oe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, i, r, s = [],
            a = [],
            l = -1,
            u = function () {
                for (r = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
                e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function () {
                    return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
                        oe.each(n, function (n, i) {
                            oe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== oe.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return oe.each(arguments, function (e, t) {
                        for (var n;
                            (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return r = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return r = a = [], n || (s = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, oe.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, o) {
                                var s = oe.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, oe.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, n, i, r = 0,
                o = Q.call(arguments),
                s = o.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : oe.Deferred(),
                u = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var we;
    oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, !0 !== e && --oe.readyWait > 0 || (we.resolveWith(V, [oe]), oe.fn.triggerHandler && (oe(V).triggerHandler("ready"), oe(V).off("ready"))))
        }
    }), oe.ready.promise = function (t) {
        return we || (we = oe.Deferred(), "complete" === V.readyState || "loading" !== V.readyState && !V.documentElement.doScroll ? e.setTimeout(oe.ready) : (V.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), we.promise(t)
    }, oe.ready.promise();
    var Te = function (e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === oe.type(n)) {
                r = !0;
                for (a in n) Te(e, t, a, n[a], !0, o, s)
            } else if (i !== undefined && (r = !0, oe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(oe(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Se = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function (e) {
            if (!Se(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n;
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function (e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function (e, t, n) {
            var i;
            return t === undefined || t && "string" == typeof t && n === undefined ? (i = this.get(e, t), i !== undefined ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function (e, t) {
            var n, i, r, o = e[this.expando];
            if (o !== undefined) {
                if (t === undefined) this.register(e);
                else {
                    oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(xe) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(t === undefined || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return t !== undefined && !oe.isEmptyObject(t)
        }
    };
    var Ce = new a,
        Ee = new a,
        $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /[A-Z]/g;
    oe.extend({
        hasData: function (e) {
            return Ee.hasData(e) || Ce.hasData(e)
        },
        data: function (e, t, n) {
            return Ee.access(e, t, n)
        },
        removeData: function (e, t) {
            Ee.remove(e, t)
        },
        _data: function (e, t, n) {
            return Ce.access(e, t, n)
        },
        _removeData: function (e, t) {
            Ce.remove(e, t)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (e === undefined) {
                if (this.length && (r = Ee.get(o), 1 === o.nodeType && !Ce.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i])));
                    Ce.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                Ee.set(this, e)
            }) : Te(this, function (t) {
                var n, i;
                if (o && t === undefined) {
                    if ((n = Ee.get(o, e) || Ee.get(o, e.replace(ke, "-$&").toLowerCase())) !== undefined) return n;
                    if (i = oe.camelCase(e), (n = Ee.get(o, i)) !== undefined) return n;
                    if ((n = l(o, i, undefined)) !== undefined) return n
                } else i = oe.camelCase(e), this.each(function () {
                    var n = Ee.get(this, i);
                    Ee.set(this, i, t), e.indexOf("-") > -1 && n !== undefined && Ee.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Ee.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ce.get(e, t), n && (!i || oe.isArray(n) ? i = Ce.access(e, t, oe.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = oe._queueHooks(e, t),
                s = function () {
                    oe.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Ce.get(e, n) || Ce.access(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    Ce.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : t === undefined ? this : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = oe.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = Ce.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ze = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Ae = ["Top", "Right", "Bottom", "Left"],
        Le = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        De = /^(?:checkbox|radio)$/i,
        qe = /<([\w:-]+)/,
        Ie = /^$|\/(?:java|ecma)script/i,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td;
    var Oe = /<|&#?\w+;/;
    ! function () {
        var e = V.createDocumentFragment(),
            t = e.appendChild(V.createElement("div")),
            n = V.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Me = /^key/,
        Ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        He = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, u, c, d, h, f, p, m, g = Ce.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                        return void 0 !== oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : undefined
                    }), t = (t || "").match(xe) || [""], u = t.length; u--;) a = He.exec(t[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f && (d = oe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = oe.event.special[f] || {}, c = oe.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && oe.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), oe.event.global[f] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, l, u, c, d, h, f, p, m, g = Ce.hasData(e) && Ce.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(xe) || [""], u = t.length; u--;)
                    if (a = He.exec(t[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || oe.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) oe.event.remove(e, f + t[u], n, i, !0);
                oe.isEmptyObject(l) && Ce.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, i, r, o, s = [],
                a = Q.call(arguments),
                l = (Ce.get(this, "events") || {})[e.type] || [],
                u = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (s = oe.event.handlers.call(this, e, l), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < a; n++) o = t[n], r = o.selector + " ", i[r] === undefined && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || V, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Ne.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = V), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== m() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === m() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function (e, t) {
        if (!(this instanceof oe.Event)) return new oe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? f : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), this[oe.expando] = !0
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || oe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, i) {
            return g(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return g(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = p), this.each(function () {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Fe = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^true\/(.*)/,
        Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function (e) {
            return e.replace(_e, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = c(a), o = c(e), i = 0, r = o.length; i < r; i++) w(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || c(e), s = s || c(a), i = 0, r = o.length; i < r; i++) x(o[i], s[i]);
                else x(e, a);
            return s = c(a, "script"), s.length > 0 && d(s, !l && c(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, r = oe.event.special, o = 0;
                (n = e[o]) !== undefined; o++)
                if (Se(n)) {
                    if (t = n[Ce.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                        n[Ce.expando] = undefined
                    }
                    n[Ee.expando] && (n[Ee.expando] = undefined)
                }
        }
    }), oe.fn.extend({
        domManip: T,
        detach: function (e) {
            return S(this, e, !0)
        },
        remove: function (e) {
            return S(this, e)
        },
        text: function (e) {
            return Te(this, function (e) {
                return e === undefined ? oe.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        },
        html: function (e) {
            return Te(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Fe.test(e) && !Pe[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, i = [], r = oe(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), oe(r[s])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Xe, Ye = {
            HTML: "block",
            BODY: "block"
        },
        Ue = /^margin/,
        Ge = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        Ve = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Qe = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        Je = V.documentElement;
    ! function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Je.removeChild(s)
        }
        var n, i, r, o, s = V.createElement("div"),
            a = V.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ie, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == i && t(), i
            },
            pixelMarginRight: function () {
                return null == i && t(), r
            },
            reliableMarginLeft: function () {
                return null == i && t(), o
            },
            reliableMarginRight: function () {
                var t, n = a.appendChild(V.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Je.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        et = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        tt = ["Webkit", "O", "Moz", "ms"],
        nt = V.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = $(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], n === undefined) return s && "get" in s && (r = s.get(e, !1, i)) !== undefined ? r : l[t];
                o = typeof n, "string" === o && (r = ze.exec(n)) && r[1] && (n = u(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && (n = s.set(e, n, i)) === undefined || (l[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), r === undefined && (r = $(e, t, i)), "normal" === r && t in et && (r = et[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function (e, t) {
        oe.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return Ke.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, Ze, function () {
                    return L(e, t, i)
                }) : L(e, t, i)
            },
            set: function (e, n, i) {
                var r, o = i && Ve(e),
                    s = i && A(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (r = ze.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), z(e, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = k(ie.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), oe.cssHooks.marginRight = k(ie.reliableMarginRight, function (e, t) {
        if (t) return Qe(e, {
            display: "inline-block"
        }, $, [e, "marginRight"])
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ae[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Ue.test(e) || (oe.cssHooks[e + t].set = z)
    }), oe.fn.extend({
        css: function (e, t) {
            return Te(this, function (e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (i = Ve(e), r = t.length; s < r; s++) o[t[s]] = oe.css(e, t[s], !1, i);
                    return o
                }
                return n !== undefined ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return D(this, !0)
        },
        hide: function () {
            return D(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Le(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = q, q.prototype = {
        constructor: q,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = q.prototype.init, oe.fx.step = {};
    var it, rt, ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    oe.Animation = oe.extend(H, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return u(n.elem, e, ze.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(t)
            },
            prefilters: [M],
            prefilter: function (e, t) {
                t ? H.prefilters.unshift(e) : H.prefilters.push(e)
            }
        }), oe.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = oe.isEmptyObject(e),
                    o = oe.speed(t, n, i),
                    s = function () {
                        var t = H(this, oe.extend({}, e), o);
                        (r || Ce.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = oe.timers,
                        s = Ce.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && st.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || oe.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Ce.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = oe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, r)
            }
        }), oe.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            oe.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var e, t = 0,
                n = oe.timers;
            for (it = oe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), it = undefined
        }, oe.fx.timer = function (e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function () {
            rt || (rt = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            e.clearInterval(rt), rt = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function (t, n) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(r)
                }
            })
        },
        function () {
            var e = V.createElement("input"),
                t = V.createElement("select"),
                n = t.appendChild(V.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = V.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
    var at, lt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function (e, t) {
            return Te(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? at : undefined)), n !== undefined ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""),
                n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? undefined : i))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(xe);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), at = {
        set: function (e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || oe.find.attr;
        lt[t] = function (e, t, i) {
            var r, o;
            return i || (o = lt[t], lt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, lt[t] = o), r
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return Te(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, _(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[l++];)
                    if (r = _(n), i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, _(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[l++];)
                    if (r = _(n), i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
                oe(this).toggleClass(e.call(this, n, _(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = oe(this), o = e.match(xe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else e !== undefined && "boolean" !== n || (t = _(this), t && Ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ce.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + _(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g,
        ft = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = oe.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
                });
                if (r) return (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value, "string" == typeof n ? n.replace(ht, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ft, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (n = i[l], (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        }, ie.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function (t, n, i, r) {
            var o, s, a, l, u, c, d, h = [i || V],
                f = ne.call(t, "type") ? t.type : t,
                p = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !pt.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), d = oe.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !oe.isWindow(i)) {
                    for (l = d.delegateType || f, pt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (i.ownerDocument || V) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, c = (Ce.get(s, "events") || {})[t.type] && Ce.get(s, "handle"), c && c.apply(s, n), (c = u && s[u]) && c.apply && Se(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !Se(i) || u && oe.isFunction(i[f]) && !oe.isWindow(i) && (a = i[u], a && (i[u] = null), oe.event.triggered = f, i[f](), oe.event.triggered = undefined, a && (i[u] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(i, null, t)
        }
    }), oe.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return oe.event.trigger(e, t, n, !0)
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = Ce.access(i, t);
                r || i.addEventListener(e, n, !0), Ce.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = Ce.access(i, t) - 1;
                r ? Ce.access(i, t, r) : (i.removeEventListener(e, n, !0), Ce.remove(i, t))
            }
        }
    });
    var mt = e.location,
        gt = oe.now(),
        vt = /\?/;
    oe.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = undefined
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var yt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tt = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Ct = {},
        Et = {},
        $t = "*/".concat("*"),
        kt = V.createElement("a");
    kt.href = mt.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: wt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? R(R(e, oe.ajaxSettings), t) : R(oe.ajaxSettings, e)
        },
        ajaxPrefilter: F(Ct),
        ajaxTransport: F(Et),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var u, d, y, b, w, S = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), r = undefined, s = a || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (b = B(h, T, i)), b = X(h, b, T, u), u ? (h.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (oe.etag[o] = w)), 204 === t || "HEAD" === h.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state, d = b.data, y = b.error, u = !y)) : (y = S, !t && S || (S = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || S) + "", u ? m.resolveWith(f, [d, S, T]) : m.rejectWith(f, [T, S, y]), T.statusCode(v), v = undefined, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? d : y]), g.fireWith(f, [T, S]), c && (p.trigger("ajaxComplete", [T, h]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var r, o, s, a, l, u, c, d, h = oe.ajaxSetup({}, n),
                f = h.context || h,
                p = h.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                m = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; t = xt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, h.url = ((t || h.url || mt.href) + "").replace(yt, "").replace(St, mt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = oe.trim(h.dataType || "*").toLowerCase().match(xe) || [""], null == h.crossDomain) {
                u = V.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = kt.protocol + "//" + kt.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = oe.param(h.data, h.traditional)), W(Ct, h, n, T), 2 === x) return T;
            c = oe.event && h.global, c && 0 == oe.active++ && oe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Tt.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (vt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = bt.test(o) ? o.replace(bt, "$1_=" + gt++) : o + (vt.test(o) ? "&" : "?") + "_=" + gt++)), h.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) T.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, T, h) || 2 === x)) return T.abort();
            w = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[d](h[d]);
            if (r = W(Et, h, n, T)) {
                if (T.readyState = 1, c && p.trigger("ajaxSend", [T, h]), 2 === x) return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                    T.abort("timeout")
                }, h.timeout));
                try {
                    x = 1, r.send(y, i)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return oe.get(e, undefined, t, "script")
        }
    }), oe.each(["get", "post"], function (e, t) {
        oe[t] = function (e, n, i, r) {
            return oe.isFunction(n) && (r = r || i, i = n, n = undefined), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function (e) {
            var t;
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var jt = /%20/g,
        zt = /\[\]$/,
        At = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) Y(n, e[n], t, r);
        return i.join("&").replace(jt, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Dt.test(this.nodeName) && !Lt.test(e) && (this.checked || !De.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var qt = {
            0: 200,
            1223: 204
        },
        It = oe.ajaxSettings.xhr();
    ie.cors = !!It && "withCredentials" in It, ie.ajax = It = !!It, oe.ajaxTransport(function (t) {
        var n, i;
        if (ie.cors || It && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), a.onabort !== undefined ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), V.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Pt = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Pt.pop() || oe.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + r) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || oe.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            o === undefined ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Pt.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = undefined
        }), "script"
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || V;
        var i = pe.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = h([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
    };
    var Mt = oe.fn.load;
    oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, l, u, c = oe.css(e, "position"),
                d = oe(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, oe.fn.extend({
        offset: function (e) {
            if (arguments.length) return e === undefined ? this : this.each(function (t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = U(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function (i) {
            return Te(this, function (e, i, r) {
                var o = U(e);
                if (r === undefined) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), oe.each(["top", "left"], function (e, t) {
        oe.cssHooks[t] = k(ie.pixelPosition, function (e, n) {
            if (n) return n = $(e, t), Ge.test(n) ? oe(e).position()[t] + "px" : n
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            oe.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === r ? "margin" : "border");
                return Te(this, function (t, n, i) {
                    var r;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }, t, o ? i : undefined, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function () {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var Nt = e.jQuery,
        Ht = e.$;
    return oe.noConflict = function (t) {
        return e.$ === oe && (e.$ = Ht), t && e.jQuery === oe && (e.jQuery = Nt), oe
    }, t || (e.jQuery = e.$ = oe), oe
}),
function (e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function () {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function (e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function () {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function (t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i), !1 !== r.result
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e[0].href
        },
        isRemote: function (e) {
            return e.data("remote") !== t && !1 !== e.data("remote")
        },
        handleRemote: function (i) {
            var r, o, s, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), s = e(i[0]).serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function (e, r) {
                        if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [e, r])) return !1;
                        i.trigger("ajax:send", e)
                    },
                    success: function (e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function (e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function (e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (e) {
                return !0
            }
        },
        handleMethod: function (i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = n.csrfToken(),
                l = n.csrfParam(),
                u = e('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t || a === t || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function (t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function (t) {
            n.formElements(t, n.disableSelector).each(function () {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function (e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function (t) {
            n.formElements(t, n.enableSelector).each(function () {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function (e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function (e) {
            var t, i = e.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = n.fire(e, "confirm:complete", [r])
            }
            return r && t
        },
        blankInputs: function (t, n, i) {
            var r, o, s, a, l = e(),
                u = n || "input,textarea",
                c = t.find(u),
                d = {};
            return c.each(function () {
                r = e(this), r.is("input[type=radio]") ? (a = r.attr("name"), d[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (s = t.find('input[type=radio][name="' + a + '"]'), l = l.add(s)), d[a] = a)) : (o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (l = l.add(r))
            }), !!l.length && l
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function () {
        e(e.rails.enableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function () {
        n.enableElement(e(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function () {
        n.enableFormElement(e(this))
    }), i.on("click.rails", n.linkClickSelector, function (t) {
        var i = e(this),
            r = i.data("method"),
            o = i.data("params"),
            s = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (s && (!r || "GET" === r) && !o) return !0;
            var a = n.handleRemote(i);
            return !1 === a ? n.enableElement(i) : a.fail(function () {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function (t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return !1 === r ? n.enableFormElement(i) : r.fail(function () {
            n.enableFormElement(i)
        }), !1
    }), i.on("change.rails", n.inputChangeSelector, function (t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.on("submit.rails", n.formSubmitSelector, function (i) {
        var r, o, s = e(this),
            a = n.isRemote(s);
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") === t)
            if (s.data("ujs:formnovalidate-button") === t) {
                if ((r = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [r])) return n.stopEverything(i)
            } else s.data("ujs:formnovalidate-button", t);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function () {
            n.disableFormElements(s)
        }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function (t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null,
            s = i.closest("form");
        0 === s.length && (s = e("#" + i.attr("form"))), s.data("ujs:submit-button", o), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function (t) {
        this === t.target && n.disableFormElements(e(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function (t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function (e, t) {
    var n = function () {
        t(e.lazySizes), e.removeEventListener("lazyunveilread", n, !0)
    };
    t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes"), require("../fix-ios-sizes/fix-ios-sizes")) : e.lazySizes ? n() : e.addEventListener("lazyunveilread", n, !0)
}(window, function (e, t, n) {
    "use strict";
    var i, r = n && n.cfg || e.lazySizesConfig,
        o = t.createElement("img"),
        s = "sizes" in o && "srcset" in o,
        a = /\s+\d+h/g,
        l = function () {
            var e = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                n = Array.prototype.forEach;
            return function () {
                var i = t.createElement("img"),
                    r = function (t) {
                        var n, i, r = t.getAttribute(lazySizesConfig.srcsetAttr);
                        r && ((i = r.match(e)) && (n = "w" == i[2] ? i[1] / i[3] : i[3] / i[1]) && t.setAttribute("data-aspectratio", n), t.setAttribute(lazySizesConfig.srcsetAttr, r.replace(a, "")))
                    },
                    o = function (e) {
                        var t = e.target.parentNode;
                        t && "PICTURE" == t.nodeName && n.call(t.getElementsByTagName("source"), r), r(e.target)
                    },
                    s = function () {
                        i.currentSrc && t.removeEventListener("lazybeforeunveil", o)
                    };
                t.addEventListener("lazybeforeunveil", o), i.onload = s, i.onerror = s, i.srcset = "data:,a 1w 1h", i.complete && s()
            }
        }();
    if (r || (r = {}, e.lazySizesConfig = r), r.supportsType || (r.supportsType = function (e) {
            return !e
        }), !e.picturefill && !r.pf) {
        if (e.HTMLPictureElement && s) return t.msElementsFromPoint && l(navigator.userAgent.match(/Edge\/(\d+)/)), void(r.pf = function () {});
        r.pf = function (t) {
            var n, r;
            if (!e.picturefill)
                for (n = 0, r = t.elements.length; n < r; n++) i(t.elements[n])
        }, i = function () {
            var o = function (e, t) {
                    return e.w - t.w
                },
                l = /^\s*\d+\.*\d*px\s*$/,
                u = function (e) {
                    var t, n, i = e.length,
                        r = e[i - 1],
                        o = 0;
                    for (o; o < i; o++)
                        if (r = e[o], r.d = r.w / e.w, r.d >= e.d) {
                            !r.cached && (t = e[o - 1]) && t.d > e.d - .13 * Math.pow(e.d, 2.2) && (n = Math.pow(t.d - .6, 1.6), t.cached && (t.d += .15 * n), t.d + (r.d - e.d) * n > e.d && (r = t));
                            break
                        } return r
                },
                c = function () {
                    var e, t = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                        n = /\s/,
                        i = function (t, n, i, r) {
                            e.push({
                                c: n,
                                u: i,
                                w: 1 * r
                            })
                        };
                    return function (r) {
                        return e = [], r = r.trim(), r.replace(a, "").replace(t, i), e.length || !r || n.test(r) || e.push({
                            c: r,
                            u: r,
                            w: 99
                        }), e
                    }
                }(),
                d = function () {
                    d.init || (d.init = !0, addEventListener("resize", function () {
                        var e, n = t.getElementsByClassName("lazymatchmedia"),
                            r = function () {
                                var e, t;
                                for (e = 0, t = n.length; e < t; e++) i(n[e])
                            };
                        return function () {
                            clearTimeout(e), e = setTimeout(r, 66)
                        }
                    }()))
                },
                h = function (t, i) {
                    var o, s = t.getAttribute("srcset") || t.getAttribute(r.srcsetAttr);
                    !s && i && (s = t._lazypolyfill ? t._lazypolyfill._set : t.getAttribute(r.srcAttr) || t.getAttribute("src")), t._lazypolyfill && t._lazypolyfill._set == s || (o = c(s || ""), i && t.parentNode && (o.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase(), o.isPicture && e.matchMedia && (n.aC(t, "lazymatchmedia"), d())), o._set = s, Object.defineProperty(t, "_lazypolyfill", {
                        value: o,
                        writable: !0
                    }))
                },
                f = function (t) {
                    var i = e.devicePixelRatio || 1,
                        r = n.getX && n.getX(t);
                    return Math.min(r || i, 2.5, i)
                },
                p = function (t) {
                    return e.matchMedia ? (p = function (e) {
                        return !e || (matchMedia(e) || {}).matches
                    })(t) : !t
                },
                m = function (e) {
                    var t, i, s, a, c, d, m;
                    if (a = e, h(a, !0), c = a._lazypolyfill, c.isPicture)
                        for (i = 0, t = e.parentNode.getElementsByTagName("source"), s = t.length; i < s; i++)
                            if (r.supportsType(t[i].getAttribute("type"), e) && p(t[i].getAttribute("media"))) {
                                a = t[i], h(a), c = a._lazypolyfill;
                                break
                            } return c.length > 1 ? (m = a.getAttribute("sizes") || "", m = l.test(m) && parseInt(m, 10) || n.gW(e, e.parentNode), c.d = f(e), !c.src || !c.w || c.w < m ? (c.w = m, d = u(c.sort(o)), c.src = d) : d = c.src) : d = c[0], d
                },
                g = function (e) {
                    if (!s || !e.parentNode || "PICTURE" == e.parentNode.nodeName.toUpperCase()) {
                        var t = m(e);
                        t && t.u && e._lazypolyfill.cur != t.u && (e._lazypolyfill.cur = t.u, t.cached = !0, e.setAttribute(r.srcAttr, t.u), e.setAttribute("src", t.u))
                    }
                };
            return g.parse = c, g
        }(), r.loadedClass && r.loadingClass && function () {
            var e = [];
            ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (t) {
                e.push(t + r.loadedClass), e.push(t + r.loadingClass)
            }), r.pf({
                elements: t.querySelectorAll(e.join(", "))
            })
        }()
    }
}),
function (e, t) {
    var n = function () {
        t(e.lazySizes), e.removeEventListener("lazyunveilread", n, !0)
    };
    t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : e.lazySizes ? n() : e.addEventListener("lazyunveilread", n, !0)
}(window, function (e, t, n) {
    "use strict";

    function i(e, n) {
        if (!s[e]) {
            var i = t.createElement(n ? "link" : "script"),
                r = t.getElementsByTagName("script")[0];
            n ? (i.rel = "stylesheet", i.href = e) : i.src = e, s[e] = !0, s[i.src || i.href] = !0, r.parentNode.insertBefore(i, r)
        }
    }
    var r, o, s = {};
    t.addEventListener && (o = /\(|\)|\s|'/, r = function (e, n) {
        var i = t.createElement("img");
        i.onload = function () {
            i.onload = null, i.onerror = null, i = null, n()
        }, i.onerror = i.onload, i.src = e, i && i.complete && i.onload && i.onload()
    }, addEventListener("lazybeforeunveil", function (e) {
        if (e.detail.instance == n) {
            var t, s, a, l;
            e.defaultPrevented || ("none" == e.target.preload && (e.target.preload = "auto"), t = e.target.getAttribute("data-link"), t && i(t, !0), t = e.target.getAttribute("data-script"), t && i(t), t = e.target.getAttribute("data-require"), t && (n.cfg.requireJs ? n.cfg.requireJs([t]) : i(t)), a = e.target.getAttribute("data-bg"), a && (e.detail.firesLoad = !0, s = function () {
                e.target.style.backgroundImage = "url(" + (o.test(a) ? JSON.stringify(a) : a) + ")", e.detail.firesLoad = !1, n.fire(e.target, "_lazyloaded", {}, !0, !0)
            }, r(a, s)), (l = e.target.getAttribute("data-poster")) && (e.detail.firesLoad = !0, s = function () {
                e.target.poster = l, e.detail.firesLoad = !1, n.fire(e.target, "_lazyloaded", {}, !0, !0)
            }, r(l, s)))
        }
    }, !1))
}),
function (e, t) {
    var n = function () {
        t(e.lazySizes), e.removeEventListener("lazyunveilread", n, !0)
    };
    t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : e.lazySizes ? n() : e.addEventListener("lazyunveilread", n, !0)
}(window, function (e, t, n) {
    "use strict";
    if (e.addEventListener) {
        var i = /\s+/g,
            r = /\s*\|\s+|\s+\|\s*/g,
            o = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,
            s = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,
            a = /\(|\)|'/,
            l = {
                contain: 1,
                cover: 1
            },
            u = function (e) {
                var t = n.gW(e, e.parentNode);
                return (!e._lazysizesWidth || t > e._lazysizesWidth) && (e._lazysizesWidth = t), e._lazysizesWidth
            },
            c = function (e) {
                var t;
                return t = (getComputedStyle(e) || {
                    getPropertyValue: function () {}
                }).getPropertyValue("background-size"), !l[t] && l[e.style.backgroundSize] && (t = e.style.backgroundSize), t
            },
            d = function (e, t) {
                if (t) {
                    var n = t.match(s);
                    n && n[1] ? e.setAttribute("type", n[1]) : e.setAttribute("media", lazySizesConfig.customMedia[t] || t)
                }
            },
            h = function (e, n, s) {
                var a = t.createElement("picture"),
                    l = n.getAttribute(lazySizesConfig.sizesAttr),
                    u = n.getAttribute("data-ratio"),
                    c = n.getAttribute("data-optimumx");
                n._lazybgset && n._lazybgset.parentNode == n && n.removeChild(n._lazybgset), Object.defineProperty(s, "_lazybgset", {
                    value: n,
                    writable: !0
                }), Object.defineProperty(n, "_lazybgset", {
                    value: a,
                    writable: !0
                }), e = e.replace(i, " ").split(r), a.style.display = "none", s.className = lazySizesConfig.lazyClass, 1 != e.length || l || (l = "auto"), e.forEach(function (e) {
                    var n, i = t.createElement("source");
                    l && "auto" != l && i.setAttribute("sizes", l), (n = e.match(o)) ? (i.setAttribute(lazySizesConfig.srcsetAttr, n[1]), d(i, n[2]), d(i, n[3])) : i.setAttribute(lazySizesConfig.srcsetAttr, e), a.appendChild(i)
                }), l && (s.setAttribute(lazySizesConfig.sizesAttr, l), n.removeAttribute(lazySizesConfig.sizesAttr), n.removeAttribute("sizes")), c && s.setAttribute("data-optimumx", c), u && s.setAttribute("data-ratio", u), a.appendChild(s), n.appendChild(a)
            },
            f = function (e) {
                if (e.target._lazybgset) {
                    var t = e.target,
                        i = t._lazybgset,
                        r = t.currentSrc || t.src;
                    if (r) {
                        var o = n.fire(i, "bgsetproxy", {
                            src: r,
                            useSrc: a.test(r) ? JSON.stringify(r) : r
                        });
                        o.defaultPrevented || (i.style.backgroundImage = "url(" + o.detail.useSrc + ")")
                    }
                    t._lazybgsetLoading && (n.fire(i, "_lazyloaded", {}, !1, !0), delete t._lazybgsetLoading)
                }
            };
        addEventListener("lazybeforeunveil", function (e) {
            var i, r, o;
            !e.defaultPrevented && (i = e.target.getAttribute("data-bgset")) && (o = e.target, r = t.createElement("img"), r.alt = "", r._lazybgsetLoading = !0, e.detail.firesLoad = !0, h(i, o, r), setTimeout(function () {
                n.loader.unveil(r), n.rAF(function () {
                    n.fire(r, "_lazyloaded", {}, !0, !0), r.complete && f({
                        target: r
                    })
                })
            }))
        }), t.addEventListener("load", f, !0), e.addEventListener("lazybeforesizes", function (e) {
            if (e.detail.instance == n && e.target._lazybgset && e.detail.dataAttr) {
                var t = e.target._lazybgset,
                    i = c(t);
                l[i] && (e.target._lazysizesParentFit = i, n.rAF(function () {
                    e.target.setAttribute("data-parent-fit", i), e.target._lazysizesParentFit && delete e.target._lazysizesParentFit
                }))
            }
        }, !0), t.documentElement.addEventListener("lazybeforesizes", function (e) {
            !e.defaultPrevented && e.target._lazybgset && e.detail.instance == n && (e.detail.width = u(e.target._lazybgset))
        })
    }
}),
function (e, t) {
    var n = t(e, e.document);
    e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}(window, function (e, t) {
    "use strict";
    if (t.getElementsByClassName) {
        var n, i, r = t.documentElement,
            o = e.Date,
            s = e.HTMLPictureElement,
            a = "addEventListener",
            l = "getAttribute",
            u = e[a],
            c = e.setTimeout,
            d = e.requestAnimationFrame || c,
            h = e.requestIdleCallback,
            f = /^picture$/i,
            p = ["load", "error", "lazyincluded", "_lazyloaded"],
            m = {},
            g = Array.prototype.forEach,
            v = function (e, t) {
                return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), m[t].test(e[l]("class") || "") && m[t]
            },
            y = function (e, t) {
                v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
            },
            b = function (e, t) {
                var n;
                (n = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
            },
            x = function (e, t, n) {
                var i = n ? a : "removeEventListener";
                n && x(e, t), p.forEach(function (n) {
                    e[i](n, t)
                })
            },
            w = function (e, i, r, o, s) {
                var a = t.createEvent("Event");
                return r || (r = {}), r.instance = n, a.initEvent(i, !o, !s), a.detail = r, e.dispatchEvent(a), a
            },
            T = function (t, n) {
                var r;
                !s && (r = e.picturefill || i.pf) ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src), r({
                    reevaluate: !0,
                    elements: [t]
                })) : n && n.src && (t.src = n.src)
            },
            S = function (e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            C = function (e, t, n) {
                for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            },
            E = function () {
                var e, n, i = [],
                    r = [],
                    o = i,
                    s = function () {
                        var t = o;
                        for (o = i.length ? r : i, e = !0, n = !1; t.length;) t.shift()();
                        e = !1
                    },
                    a = function (i, r) {
                        e && !r ? i.apply(this, arguments) : (o.push(i), n || (n = !0, (t.hidden ? c : d)(s)))
                    };
                return a._lsFlush = s, a
            }(),
            $ = function (e, t) {
                return t ? function () {
                    E(e)
                } : function () {
                    var t = this,
                        n = arguments;
                    E(function () {
                        e.apply(t, n)
                    })
                }
            },
            k = function (e) {
                var t, n = 0,
                    r = i.throttleDelay,
                    s = i.ricTimeout,
                    a = function () {
                        t = !1, n = o.now(), e()
                    },
                    l = h && s > 49 ? function () {
                        h(a, {
                            timeout: s
                        }), s !== i.ricTimeout && (s = i.ricTimeout)
                    } : $(function () {
                        c(a)
                    }, !0);
                return function (e) {
                    var i;
                    (e = !0 === e) && (s = 33), t || (t = !0, i = r - (o.now() - n), i < 0 && (i = 0), e || i < 9 ? l() : c(l, i))
                }
            },
            j = function (e) {
                var t, n, i = 99,
                    r = function () {
                        t = null, e()
                    },
                    s = function () {
                        var e = o.now() - n;
                        e < i ? c(s, i - e) : (h || r)(r)
                    };
                return function () {
                    n = o.now(), t || (t = c(s, i))
                }
            };
        ! function () {
            var t, n = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            i = e.lazySizesConfig || e.lazysizesConfig || {};
            for (t in n) t in i || (i[t] = n[t]);
            e.lazySizesConfig = i, c(function () {
                i.init && L()
            })
        }();
        var z = function () {
                var s, d, h, p, m, C, z, L, D, q, I, P, O = /^img$/i,
                    M = /^iframe$/i,
                    N = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                    H = 0,
                    _ = 0,
                    F = 0,
                    W = -1,
                    R = function (e) {
                        F--, e && e.target && x(e.target, R), (!e || F < 0 || !e.target) && (F = 0)
                    },
                    B = function (e) {
                        return null == P && (P = "hidden" == S(t.body, "visibility")), P || "hidden" != S(e.parentNode, "visibility") && "hidden" != S(e, "visibility")
                    },
                    X = function (e, n) {
                        var i, o = e,
                            s = B(e);
                        for (L -= n, I += n, D -= n, q += n; s && (o = o.offsetParent) && o != t.body && o != r;)(s = (S(o, "opacity") || 1) > 0) && "visible" != S(o, "overflow") && (i = o.getBoundingClientRect(), s = q > i.left && D < i.right && I > i.top - 1 && L < i.bottom + 1);
                        return s
                    },
                    Y = function () {
                        var e, o, a, u, c, h, f, m, g, v, y, b, x = n.elements;
                        if ((p = i.loadMode) && F < 8 && (e = x.length)) {
                            for (o = 0, W++, v = !i.expand || i.expand < 1 ? r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370 : i.expand, y = v * i.expFactor, b = i.hFac, P = null, _ < y && F < 1 && W > 2 && p > 2 && !t.hidden ? (_ = y, W = 0) : _ = p > 1 && W > 1 && F < 6 ? v : H; o < e; o++)
                                if (x[o] && !x[o]._lazyRace)
                                    if (N)
                                        if ((m = x[o][l]("data-expand")) && (h = 1 * m) || (h = _), g !== h && (C = innerWidth + h * b, z = innerHeight + h, f = -1 * h, g = h), a = x[o].getBoundingClientRect(), (I = a.bottom) >= f && (L = a.top) <= z && (q = a.right) >= f * b && (D = a.left) <= C && (I || q || D || L) && (i.loadHidden || B(x[o])) && (d && F < 3 && !m && (p < 3 || W < 4) || X(x[o], h))) {
                                            if (ee(x[o]), c = !0, F > 9) break
                                        } else !c && d && !u && F < 4 && W < 4 && p > 2 && (s[0] || i.preloadAfterLoad) && (s[0] || !m && (I || q || D || L || "auto" != x[o][l](i.sizesAttr))) && (u = s[0] || x[o]);
                            else ee(x[o]);
                            u && !c && ee(u)
                        }
                    },
                    U = k(Y),
                    G = function (e) {
                        y(e.target, i.loadedClass), b(e.target, i.loadingClass), x(e.target, Q), w(e.target, "lazyloaded")
                    },
                    V = $(G),
                    Q = function (e) {
                        V({
                            target: e.target
                        })
                    },
                    J = function (e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch (n) {
                            e.src = t
                        }
                    },
                    K = function (e) {
                        var t, n = e[l](i.srcsetAttr);
                        (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                    },
                    Z = $(function (e, t, n, r, o) {
                        var s, a, u, d, p, m;
                        (p = w(e, "lazybeforeunveil", t)).defaultPrevented || (r && (n ? y(e, i.autosizesClass) : e.setAttribute("sizes", r)), a = e[l](i.srcsetAttr), s = e[l](i.srcAttr), o && (u = e.parentNode, d = u && f.test(u.nodeName || "")), m = t.firesLoad || "src" in e && (a || s || d), p = {
                            target: e
                        }, m && (x(e, R, !0), clearTimeout(h), h = c(R, 2500), y(e, i.loadingClass), x(e, Q, !0)), d && g.call(u.getElementsByTagName("source"), K), a ? e.setAttribute("srcset", a) : s && !d && (M.test(e.nodeName) ? J(e, s) : e.src = s), o && (a || d) && T(e, {
                            src: s
                        })), e._lazyRace && delete e._lazyRace, b(e, i.lazyClass), E(function () {
                            (!m || e.complete && e.naturalWidth > 1) && (m ? R(p) : F--, G(p))
                        }, !0)
                    }),
                    ee = function (e) {
                        var t, n = O.test(e.nodeName),
                            r = n && (e[l](i.sizesAttr) || e[l]("sizes")),
                            o = "auto" == r;
                        (!o && d || !n || !e[l]("src") && !e.srcset || e.complete || v(e, i.errorClass) || !v(e, i.lazyClass)) && (t = w(e, "lazyunveilread").detail, o && A.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, F++, Z(e, t, o, r, n))
                    },
                    te = function () {
                        if (!d) {
                            if (o.now() - m < 999) return void c(te, 999);
                            var e = j(function () {
                                i.loadMode = 3, U()
                            });
                            d = !0, i.loadMode = 3, U(), u("scroll", function () {
                                3 == i.loadMode && (i.loadMode = 2), e()
                            }, !0)
                        }
                    };
                return {
                    _: function () {
                        m = o.now(), n.elements = t.getElementsByClassName(i.lazyClass), s = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass), u("scroll", U, !0), u("resize", U, !0), e.MutationObserver ? new MutationObserver(U).observe(r, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (r[a]("DOMNodeInserted", U, !0), r[a]("DOMAttrModified", U, !0), setInterval(U, 999)), u("hashchange", U, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (e) {
                            t[a](e, U, !0)
                        }), /d$|^c/.test(t.readyState) ? te() : (u("load", te), t[a]("DOMContentLoaded", U), c(te, 2e4)), n.elements.length ? (Y(), E._lsFlush()) : U()
                    },
                    checkElems: U,
                    unveil: ee
                }
            }(),
            A = function () {
                var e, n = $(function (e, t, n, i) {
                        var r, o, s;
                        if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), f.test(t.nodeName || ""))
                            for (r = t.getElementsByTagName("source"), o = 0, s = r.length; o < s; o++) r[o].setAttribute("sizes", i);
                        n.detail.dataAttr || T(e, n.detail)
                    }),
                    r = function (e, t, i) {
                        var r, o = e.parentNode;
                        o && (i = C(e, o, i), r = w(e, "lazybeforesizes", {
                            width: i,
                            dataAttr: !!t
                        }), r.defaultPrevented || (i = r.detail.width) && i !== e._lazysizesWidth && n(e, o, r, i))
                    },
                    o = function () {
                        var t, n = e.length;
                        if (n)
                            for (t = 0; t < n; t++) r(e[t])
                    },
                    s = j(o);
                return {
                    _: function () {
                        e = t.getElementsByClassName(i.autosizesClass), u("resize", s)
                    },
                    checkElems: s,
                    updateElem: r
                }
            }(),
            L = function () {
                L.i || (L.i = !0, A._(), z._())
            };
        return n = {
            cfg: i,
            autoSizer: A,
            loader: z,
            init: L,
            uP: T,
            aC: y,
            rC: b,
            hC: v,
            fire: w,
            gW: C,
            rAF: E
        }
    }
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function (e, t) {
    "use strict";

    function n(n, o, a) {
        function l(e, t, i) {
            var r, o = "$()." + n + '("' + t + '")';
            return e.each(function (e, l) {
                var u = a.data(l, n);
                if (!u) return void s(n + " not initialized. Cannot call methods, i.e. " + o);
                var c = u[t];
                if (!c || "_" == t.charAt(0)) return void s(o + " is not a valid method");
                var d = c.apply(u, i);
                r = r === undefined ? d : r
            }), r !== undefined ? r : e
        }

        function u(e, t) {
            e.each(function (e, i) {
                var r = a.data(i, n);
                r ? (r.option(t), r._init()) : (r = new o(i, t), a.data(i, n, r))
            })
        }(a = a || t || e.jQuery) && (o.prototype.option || (o.prototype.option = function (e) {
            a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
        }), a.fn[n] = function (e) {
            if ("string" == typeof e) {
                return l(this, e, r.call(arguments, 1))
            }
            return u(this, e), this
        }, i(a))
    }

    function i(e) {
        !e || e && e.bridget || (e.bridget = n)
    }
    var r = Array.prototype.slice,
        o = e.console,
        s = void 0 === o ? function () {} : function (e) {
            o.error(e)
        };
    return i(t || e.jQuery), n
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            n = n.slice(0), t = t || [];
            for (var i = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
                var o = n[r];
                i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function () {
    "use strict";

    function e(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function t() {}

    function n() {
        for (var e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, t = 0; t < u; t++) {
            e[l[t]] = 0
        }
        return e
    }

    function i(e) {
        var t = getComputedStyle(e);
        return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }

    function r() {
        if (!c) {
            c = !0;
            var t = document.createElement("div");
            t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
            var n = document.body || document.documentElement;
            n.appendChild(t);
            var r = i(t);
            s = 200 == Math.round(e(r.width)), o.isBoxSizeOuter = s, n.removeChild(t)
        }
    }

    function o(t) {
        if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var o = i(t);
            if ("none" == o.display) return n();
            var a = {};
            a.width = t.offsetWidth, a.height = t.offsetHeight;
            for (var c = a.isBorderBox = "border-box" == o.boxSizing, d = 0; d < u; d++) {
                var h = l[d],
                    f = o[h],
                    p = parseFloat(f);
                a[h] = isNaN(p) ? 0 : p
            }
            var m = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                x = a.borderTopWidth + a.borderBottomWidth,
                w = c && s,
                T = e(o.width);
            !1 !== T && (a.width = T + (w ? 0 : m + b));
            var S = e(o.height);
            return !1 !== S && (a.height = S + (w ? 0 : g + x)), a.innerWidth = a.width - (m + b), a.innerHeight = a.height - (g + x), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }
    var s, a = "undefined" == typeof console ? t : function (e) {
            console.error(e)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = l.length,
        c = !1;
    return o
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
    "use strict";
    var e = function () {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n],
                r = i + "MatchesSelector";
            if (e[r]) return r
        }
    }();
    return function (t, n) {
        return t[e](n)
    }
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function (e, t) {
    var n = {};
    n.extend = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }, n.modulo = function (e, t) {
        return (e % t + t) % t
    };
    var i = Array.prototype.slice;
    n.makeArray = function (e) {
        return Array.isArray(e) ? e : null === e || e === undefined ? [] : "object" == typeof e && "number" == typeof e.length ? i.call(e) : [e]
    }, n.removeFrom = function (e, t) {
        var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
    }, n.getParent = function (e, n) {
        for (; e.parentNode && e != document.body;)
            if (e = e.parentNode, t(e, n)) return e
    }, n.getQueryElement = function (e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, n.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, n.filterFindElements = function (e, i) {
        e = n.makeArray(e);
        var r = [];
        return e.forEach(function (e) {
            if (e instanceof HTMLElement) {
                if (!i) return void r.push(e);
                t(e, i) && r.push(e);
                for (var n = e.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
            }
        }), r
    }, n.debounceMethod = function (e, t, n) {
        n = n || 100;
        var i = e.prototype[t],
            r = t + "Timeout";
        e.prototype[t] = function () {
            var e = this[r];
            clearTimeout(e);
            var t = arguments,
                o = this;
            this[r] = setTimeout(function () {
                i.apply(o, t), delete o[r]
            }, n)
        }
    }, n.docReady = function (e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, n.toDashed = function (e) {
        return e.replace(/(.)([A-Z])/g, function (e, t, n) {
            return t + "-" + n
        }).toLowerCase()
    };
    var r = e.console;
    return n.htmlInit = function (t, i) {
        n.docReady(function () {
            var o = n.toDashed(i),
                s = "data-" + o,
                a = document.querySelectorAll("[" + s + "]"),
                l = n.makeArray(a),
                u = s + "-options",
                c = e.jQuery;
            l.forEach(function (e) {
                var n, o = e.getAttribute(s) || e.getAttribute(u);
                try {
                    n = o && JSON.parse(o)
                } catch (t) {
                    return void(r && r.error("Error parsing " + s + " on " + e.className + ": " + t))
                }
                var a = new t(e, n);
                c && c.data(e, i, a)
            })
        })
    }, n
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function (e, t) {
    "use strict";

    function n(e) {
        for (var t in e) return !1;
        return null, !0
    }

    function i(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function r(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase()
        })
    }
    var o = document.documentElement.style,
        s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [s],
        u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        c = i.prototype = Object.create(e.prototype);
    c.constructor = i, c._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, c.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.getSize = function () {
        this.size = t(this.element)
    }, c.css = function (e) {
        var t = this.element.style;
        for (var n in e) {
            t[u[n] || n] = e[n]
        }
    }, c.getPosition = function () {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            i = e[t ? "left" : "right"],
            r = e[n ? "top" : "bottom"],
            o = parseFloat(i),
            s = parseFloat(r),
            a = this.layout.size; - 1 != i.indexOf("%") && (o = o / 100 * a.width), -1 != r.indexOf("%") && (s = s / 100 * a.height), o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s, o -= t ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = s
    }, c.layoutPosition = function () {
        var e = this.layout.size,
            t = {},
            n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            r = n ? "paddingLeft" : "paddingRight",
            o = n ? "left" : "right",
            s = n ? "right" : "left",
            a = this.position.x + e[r];
        t[o] = this.getXValue(a), t[s] = "";
        var l = i ? "paddingTop" : "paddingBottom",
            u = i ? "top" : "bottom",
            c = i ? "bottom" : "top",
            d = this.position.y + e[l];
        t[u] = this.getYValue(d), t[c] = "", this.css(t), this.emitEvent("layout", [this])
    }, c.getXValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, c.getYValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, c._transitionTo = function (e, t) {
        this.getPosition();
        var n = this.position.x,
            i = this.position.y,
            r = e == this.position.x && t == this.position.y;
        if (this.setPosition(e, t), r && !this.isTransitioning) return void this.layoutPosition();
        var o = e - n,
            s = t - i,
            a = {};
        a.transform = this.getTranslate(o, s), this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, c.getTranslate = function (e, t) {
        var n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop");
        return e = n ? e : -e, t = i ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)"
    }, c.goTo = function (e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, c.moveTo = c._transitionTo, c.setPosition = function (e, t) {
        this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, c._nonTransition = function (e) {
        this.css(e.to), e.isCleaning && this._removeStyles(e.to);
        for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, c.transition = function (e) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
        var t = this._transn;
        for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
        for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
        if (e.from) {
            this.css(e.from);
            this.element.offsetHeight;
            null
        }
        this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
    };
    var d = "opacity," + r(a);
    c.enableTransition = function () {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: d,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, c.onwebkitTransitionEnd = function (e) {
        this.ontransitionend(e)
    }, c.onotransitionend = function (e) {
        this.ontransitionend(e)
    };
    var h = {
        "-webkit-transform": "transform"
    };
    c.ontransitionend = function (e) {
        if (e.target === this.element) {
            var t = this._transn,
                i = h[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[i], n(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) {
                t.onEnd[i].call(this), delete t.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, c.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, c._removeStyles = function (e) {
        var t = {};
        for (var n in e) t[n] = "";
        this.css(t)
    };
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return c.removeTransitionStyles = function () {
        this.css(f)
    }, c.stagger = function (e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, c.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, c.remove = function () {
        if (!s || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        this.once("transitionEnd", function () {
            this.removeElem()
        }), this.hide()
    }, c.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, c.getHideRevealTransitionEndProperty = function (e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var n in t) return n
    }, c.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, c.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, r, o) {
        return t(e, n, i, r, o)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function (e, t, n, i, r) {
    "use strict";

    function o(e, t) {
        var n = i.getQueryElement(e);
        if (!n) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || e)));
        this.element = n, u && (this.$element = u(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t);
        var r = ++d;
        this.element.outlayerGUID = r, h[r] = this, this._create(), this._getOption("initLayout") && this.layout()
    }

    function s(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
    }

    function a(e) {
        if ("number" == typeof e) return e;
        var t = e.match(/(^\d*\.?\d*)(\w*)/),
            n = t && t[1],
            i = t && t[2];
        return n.length ? (n = parseFloat(n)) * (p[i] || 1) : 0
    }
    var l = e.console,
        u = e.jQuery,
        c = function () {},
        d = 0,
        h = {};
    o.namespace = "outlayer", o.Item = r, o.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = o.prototype;
    i.extend(f, t.prototype), f.option = function (e) {
        i.extend(this.options, e)
    }, f._getOption = function (e) {
        var t = this.constructor.compatOptions[e];
        return t && this.options[t] !== undefined ? this.options[t] : this.options[e]
    }, o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, f.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function (e) {
        for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], r = 0; r < t.length; r++) {
            var o = t[r],
                s = new n(o, this);
            i.push(s)
        }
        return i
    }, f._filterFindItemElements = function (e) {
        return i.filterFindElements(e, this.options.itemSelector)
    }, f.getItemElements = function () {
        return this.items.map(function (e) {
            return e.element
        })
    }, f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = e !== undefined ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function () {
        this.getSize()
    }, f.getSize = function () {
        this.size = n(this.element)
    }, f._getMeasurement = function (e, t) {
        var i, r = this.options[e];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[e] = i ? n(i)[t] : r) : this[e] = 0
    }, f.layoutItems = function (e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, f._getItemsForLayout = function (e) {
        return e.filter(function (e) {
            return !e.isIgnored
        })
    }, f._layoutItems = function (e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var n = [];
            e.forEach(function (e) {
                var i = this._getItemLayoutPosition(e);
                i.item = e, i.isInstant = t || e.isLayoutInstant, n.push(i)
            }, this), this._processLayoutQueue(n)
        }
    }, f._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function (e) {
        this.updateStagger(), e.forEach(function (e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }, f.updateStagger = function () {
        var e = this.options.stagger;
        return null === e || e === undefined ? void(this.stagger = 0) : (this.stagger = a(e), this.stagger)
    }, f._positionItem = function (e, t, n, i, r) {
        i ? e.goTo(t, n) : (e.stagger(r * this.stagger), e.moveTo(t, n))
    }, f._postLayout = function () {
        this.resizeContainer()
    }, f.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, f._getContainerSize = c, f._setContainerMeasure = function (e, t) {
        if (e !== undefined) {
            var n = this.size;
            n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, f._emitCompleteOnItems = function (e, t) {
        function n() {
            r.dispatchEvent(e + "Complete", null, [t])
        }

        function i() {
            ++s == o && n()
        }
        var r = this,
            o = t.length;
        if (!t || !o) return void n();
        var s = 0;
        t.forEach(function (t) {
            t.once(e, i)
        })
    }, f.dispatchEvent = function (e, t, n) {
        var i = t ? [t].concat(n) : n;
        if (this.emitEvent(e, i), u)
            if (this.$element = this.$element || u(this.element), t) {
                var r = u.Event(t);
                r.type = e, this.$element.trigger(r, n)
            } else this.$element.trigger(e, n)
    }, f.ignore = function (e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, f.unignore = function (e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, f.stamp = function (e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, f.unstamp = function (e) {
        (e = this._find(e)) && e.forEach(function (e) {
            i.removeFrom(this.stamps, e), this.unignore(e)
        }, this)
    }, f._find = function (e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = i.makeArray(e)
    }, f._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function () {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, f._manageStamp = c, f._getElementOffset = function (e) {
        var t = e.getBoundingClientRect(),
            i = this._boundingRect,
            r = n(e);
        return {
            left: t.left - i.left - r.marginLeft,
            top: t.top - i.top - r.marginTop,
            right: i.right - t.right - r.marginRight,
            bottom: i.bottom - t.bottom - r.marginBottom
        }
    }, f.handleEvent = i.handleEvent, f.bindResize = function () {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function () {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function () {
        this.resize()
    }, i.debounceMethod(o, "onresize", 100), f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function () {
        var e = n(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, f.addItems = function (e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, f.appended = function (e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, f.prepended = function (e) {
        var t = this._itemize(e);
        if (t.length) {
            var n = this.items.slice(0);
            this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
        }
    }, f.reveal = function (e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, n) {
                e.stagger(n * t), e.reveal()
            })
        }
    }, f.hide = function (e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, n) {
                e.stagger(n * t), e.hide()
            })
        }
    }, f.revealItemElements = function (e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, f.hideItemElements = function (e) {
        var t = this.getItems(e);
        this.hide(t)
    }, f.getItem = function (e) {
        for (var t = 0; t < this.items.length; t++) {
            var n = this.items[t];
            if (n.element == e) return n
        }
    }, f.getItems = function (e) {
        e = i.makeArray(e);
        var t = [];
        return e.forEach(function (e) {
            var n = this.getItem(e);
            n && t.push(n)
        }, this), t
    }, f.remove = function (e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function (e) {
            e.remove(), i.removeFrom(this.items, e)
        }, this)
    }, f.destroy = function () {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
            e.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete h[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, o.data = function (e) {
        e = i.getQueryElement(e);
        var t = e && e.outlayerGUID;
        return t && h[t]
    }, o.create = function (e, t) {
        var n = s(o);
        return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, t), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = e, n.data = o.data, n.Item = s(r), i.htmlInit(n, e), u && u.bridget && u.bridget(e, n), n
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return o.Item = r, o
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function (e, t) {
    var n = e.create("masonry");
    n.compatOptions.fitWidth = "isFitWidth";
    var i = n.prototype;
    return i._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                n = e && e.element;
            this.columnWidth = n && t(n).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            r = this.containerWidth + this.gutter,
            o = r / i,
            s = i - r % i,
            a = s && s < 1 ? "round" : "floor";
        o = Math[a](o), this.cols = Math.max(o, 1)
    }, i.getContainerWidth = function () {
        var e = this._getOption("fitWidth"),
            n = e ? this.element.parentNode : this.element,
            i = t(n);
        this.containerWidth = i && i.innerWidth
    }, i._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            n = t && t < 1 ? "round" : "ceil",
            i = Math[n](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var r = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", o = this[r](i, e), s = {
                x: this.columnWidth * o.col,
                y: o.y
            }, a = o.y + e.size.outerHeight, l = i + o.col, u = o.col; u < l; u++) this.colYs[u] = a;
        return s
    }, i._getTopColPosition = function (e) {
        var t = this._getTopColGroup(e),
            n = Math.min.apply(Math, t);
        return {
            col: t.indexOf(n),
            y: n
        }
    }, i._getTopColGroup = function (e) {
        if (e < 2) return this.colYs;
        for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) t[i] = this._getColGroupY(i, e);
        return t
    }, i._getColGroupY = function (e, t) {
        if (t < 2) return this.colYs[e];
        var n = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, n)
    }, i._getHorizontalColPosition = function (e, t) {
        var n = this.horizontalColIndex % this.cols;
        n = e > 1 && n + e > this.cols ? 0 : n;
        var i = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = i ? n + e : this.horizontalColIndex, {
            col: n,
            y: this._getColGroupY(n, e)
        }
    }, i._manageStamp = function (e) {
        var n = t(e),
            i = this._getElementOffset(e),
            r = this._getOption("originLeft"),
            o = r ? i.left : i.right,
            s = o + n.outerWidth,
            a = Math.floor(o / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(s / this.columnWidth);
        l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
        for (var u = this._getOption("originTop"), c = (u ? i.top : i.bottom) + n.outerHeight, d = a; d <= l; d++) this.colYs[d] = Math.max(c, this.colYs[d])
    }, i._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, i._getContainerFitWidth = function () {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function () {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, n
}),
function (e, t) {
    "function" == typeof define && define.amd ? define([" "], function (e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function (e) {
    ! function () {
        "use strict";

        function t(t, i) {
            if (this.el = t, this.$el = e(t), this.s = e.extend({}, n, i), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = e(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(e(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
        }
        var n = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1
        };
        t.prototype.init = function () {
            var t = this;
            t.s.preload > t.$items.length && (t.s.preload = t.$items.length);
            var n = window.location.hash;
            n.indexOf("lg=" + this.s.galleryId) > 0 && (t.index = parseInt(n.split("&slide=")[1], 10), e("body").addClass("lg-from-hash"), e("body").hasClass("lg-on") || (setTimeout(function () {
                t.build(t.index)
            }), e("body").addClass("lg-on"))), t.s.dynamic ? (t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || 0, e("body").hasClass("lg-on") || setTimeout(function () {
                t.build(t.index), e("body").addClass("lg-on")
            })) : t.$items.on("click.lgcustom", function (n) {
                try {
                    n.preventDefault(), n.preventDefault()
                } catch (e) {
                    n.returnValue = !1
                }
                t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || t.$items.index(this), e("body").hasClass("lg-on") || (t.build(t.index), e("body").addClass("lg-on"))
            })
        }, t.prototype.build = function (t) {
            var n = this;
            n.structure(), e.each(e.fn.lightGallery.modules, function (t) {
                n.modules[t] = new e.fn.lightGallery.modules[t](n.el)
            }), n.slide(t, !1, !1, !1), n.s.keyPress && n.keyPress(), n.$items.length > 1 ? (n.arrow(), setTimeout(function () {
                n.enableDrag(), n.enableSwipe()
            }, 50), n.s.mousewheel && n.mousewheel()) : n.$slide.on("click.lg", function () {
                n.$el.trigger("onSlideClick.lg")
            }), n.counter(), n.closeGallery(), n.$el.trigger("onAfterOpen.lg"), n.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
                n.$outer.removeClass("lg-hide-items"), clearTimeout(n.hideBartimeout), n.hideBartimeout = setTimeout(function () {
                    n.$outer.addClass("lg-hide-items")
                }, n.s.hideBarsDelay)
            }), n.$outer.trigger("mousemove.lg")
        }, t.prototype.structure = function () {
            var t, n = "",
                i = "",
                r = 0,
                o = "",
                s = this;
            for (e("body").append('<div class="lg-backdrop"></div>'), e(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), r = 0; r < this.$items.length; r++) n += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (i = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div class="lg-sub-html"></div>'), t = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + n + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + i + o + "</div></div>", e("body").append(t), this.$outer = e(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), s.setTop(), e(window).on("resize.lg orientationchange.lg", function () {
                    setTimeout(function () {
                        s.setTop()
                    }, 100)
                }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                var a = this.$outer.find(".lg-inner");
                a.css("transition-timing-function", this.s.cssEasing), a.css("transition-duration", this.s.speed + "ms")
            }
            setTimeout(function () {
                e(".lg-backdrop").addClass("in")
            }), setTimeout(function () {
                s.$outer.addClass("lg-visible")
            }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = e(window).scrollTop()
        }, t.prototype.setTop = function () {
            if ("100%" !== this.s.height) {
                var t = e(window).height(),
                    n = (t - parseInt(this.s.height, 10)) / 2,
                    i = this.$outer.find(".lg");
                t >= parseInt(this.s.height, 10) ? i.css("top", n + "px") : i.css("top", "0px")
            }
        }, t.prototype.doCss = function () {
            return !! function () {
                var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                    t = document.documentElement,
                    n = 0;
                for (n = 0; n < e.length; n++)
                    if (e[n] in t.style) return !0
            }()
        }, t.prototype.isVideo = function (e, t) {
            var n;
            if (n = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html"), !e) return n ? {
                html5: !0
            } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (t + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
            var i = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                r = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                s = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return i ? {
                youtube: i
            } : r ? {
                vimeo: r
            } : o ? {
                dailymotion: o
            } : s ? {
                vk: s
            } : void 0
        }, t.prototype.counter = function () {
            this.s.counter && e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }, t.prototype.addHtml = function (t) {
            var n, i, r = null;
            if (this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? n = this.s.dynamicEl[t].subHtmlUrl : r = this.s.dynamicEl[t].subHtml : (i = this.$items.eq(t), i.attr("data-sub-html-url") ? n = i.attr("data-sub-html-url") : (r = i.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !r && (r = i.attr("title") || i.find("img").first().attr("alt")))), !n)
                if (void 0 !== r && null !== r) {
                    var o = r.substring(0, 1);
                    "." !== o && "#" !== o || (r = this.s.subHtmlSelectorRelative && !this.s.dynamic ? i.find(r).html() : e(r).html())
                } else r = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? n ? this.$outer.find(this.s.appendSubHtmlTo).load(n) : this.$outer.find(this.s.appendSubHtmlTo).html(r) : n ? this.$slide.eq(t).load(n) : this.$slide.eq(t).append(r), void 0 !== r && null !== r && ("" === r ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [t])
        }, t.prototype.preload = function (e) {
            var t = 1,
                n = 1;
            for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++) this.loadContent(e + t, !1, 0);
            for (n = 1; n <= this.s.preload && !(e - n < 0); n++) this.loadContent(e - n, !1, 0)
        }, t.prototype.loadContent = function (t, n, i) {
            var r, o, s, a, l, u, c = this,
                d = !1,
                h = function (t) {
                    for (var n = [], i = [], r = 0; r < t.length; r++) {
                        var s = t[r].split(" ");
                        "" === s[0] && s.splice(0, 1), i.push(s[0]), n.push(s[1])
                    }
                    for (var a = e(window).width(), l = 0; l < n.length; l++)
                        if (parseInt(n[l], 10) > a) {
                            o = i[l];
                            break
                        }
                };
            if (c.s.dynamic) {
                if (c.s.dynamicEl[t].poster && (d = !0, s = c.s.dynamicEl[t].poster), u = c.s.dynamicEl[t].html, o = c.s.dynamicEl[t].src, c.s.dynamicEl[t].responsive) {
                    h(c.s.dynamicEl[t].responsive.split(","))
                }
                a = c.s.dynamicEl[t].srcset, l = c.s.dynamicEl[t].sizes
            } else {
                if (c.$items.eq(t).attr("data-poster") && (d = !0, s = c.$items.eq(t).attr("data-poster")), u = c.$items.eq(t).attr("data-html"), o = c.$items.eq(t).attr("href") || c.$items.eq(t).attr("data-src"), c.$items.eq(t).attr("data-responsive")) {
                    h(c.$items.eq(t).attr("data-responsive").split(","))
                }
                a = c.$items.eq(t).attr("data-srcset"), l = c.$items.eq(t).attr("data-sizes")
            }
            var f = !1;
            c.s.dynamic ? c.s.dynamicEl[t].iframe && (f = !0) : "true" === c.$items.eq(t).attr("data-iframe") && (f = !0);
            var p = c.isVideo(o, t);
            if (!c.$slide.eq(t).hasClass("lg-loaded")) {
                if (f) c.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + o + '"  allowfullscreen="true"></iframe></div></div>');
                else if (d) {
                    var m = "";
                    m = p && p.youtube ? "lg-has-youtube" : p && p.vimeo ? "lg-has-vimeo" : "lg-has-html5", c.$slide.eq(t).prepend('<div class="lg-video-cont ' + m + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + s + '" /></div></div>')
                } else p ? (c.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), c.$el.trigger("hasVideo.lg", [t, o, u])) : c.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + o + '" /></div>');
                if (c.$el.trigger("onAferAppendSlide.lg", [t]), r = c.$slide.eq(t).find(".lg-object"), l && r.attr("sizes", l), a) {
                    r.attr("srcset", a);
                    try {
                        picturefill({
                            elements: [r[0]]
                        })
                    } catch (e) {
                        console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                    }
                }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(t), c.$slide.eq(t).addClass("lg-loaded")
            }
            c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function () {
                var n = 0;
                i && !e("body").hasClass("lg-from-hash") && (n = i), setTimeout(function () {
                    c.$slide.eq(t).addClass("lg-complete"), c.$el.trigger("onSlideItemLoad.lg", [t, i || 0])
                }, n)
            }), p && p.html5 && !d && c.$slide.eq(t).addClass("lg-complete"), !0 === n && (c.$slide.eq(t).hasClass("lg-complete") ? c.preload(t) : c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function () {
                c.preload(t)
            }))
        }, t.prototype.slide = function (t, n, i, r) {
            var o = this.$outer.find(".lg-current").index(),
                s = this;
            if (!s.lGalleryOn || o !== t) {
                var a = this.$slide.length,
                    l = s.lGalleryOn ? this.s.speed : 0;
                if (!s.lgBusy) {
                    if (this.s.download) {
                        var u;
                        u = s.s.dynamic ? !1 !== s.s.dynamicEl[t].downloadUrl && (s.s.dynamicEl[t].downloadUrl || s.s.dynamicEl[t].src) : "false" !== s.$items.eq(t).attr("data-download-url") && (s.$items.eq(t).attr("data-download-url") || s.$items.eq(t).attr("href") || s.$items.eq(t).attr("data-src")), u ? (e("#lg-download").attr("href", u), s.$outer.removeClass("lg-hide-download")) : s.$outer.addClass("lg-hide-download")
                    }
                    if (this.$el.trigger("onBeforeSlide.lg", [o, t, n, i]), s.lgBusy = !0, clearTimeout(s.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
                            s.addHtml(t)
                        }, l), this.arrowDisable(t), r || (t < o ? r = "prev" : t > o && (r = "next")), n) {
                        this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                        var c, d;
                        a > 2 ? (c = t - 1, d = t + 1, 0 === t && o === a - 1 ? (d = 0, c = a - 1) : t === a - 1 && 0 === o && (d = 0, c = a - 1)) : (c = 0, d = 1), "prev" === r ? s.$slide.eq(d).addClass("lg-next-slide") : s.$slide.eq(c).addClass("lg-prev-slide"), s.$slide.eq(t).addClass("lg-current")
                    } else s.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === r ? (this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : (this.$slide.eq(t).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout(function () {
                        s.$slide.removeClass("lg-current"), s.$slide.eq(t).addClass("lg-current"), s.$outer.removeClass("lg-no-trans")
                    }, 50);
                    s.lGalleryOn ? (setTimeout(function () {
                        s.loadContent(t, !0, 0)
                    }, this.s.speed + 50), setTimeout(function () {
                        s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, t, n, i])
                    }, this.s.speed)) : (s.loadContent(t, !0, s.s.backdropDuration), s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, t, n, i])), s.lGalleryOn = !0, this.s.counter && e("#lg-counter-current").text(t + 1)
                }
                s.index = t
            }
        }, t.prototype.goToNextSlide = function (e) {
            var t = this,
                n = t.s.loop;
            e && t.$slide.length < 3 && (n = !1), t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : n ? (t.index = 0, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-right-end"), setTimeout(function () {
                t.$outer.removeClass("lg-right-end")
            }, 400)))
        }, t.prototype.goToPrevSlide = function (e) {
            var t = this,
                n = t.s.loop;
            e && t.$slide.length < 3 && (n = !1), t.lgBusy || (t.index > 0 ? (t.index--, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : n ? (t.index = t.$items.length - 1, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-left-end"), setTimeout(function () {
                t.$outer.removeClass("lg-left-end")
            }, 400)))
        }, t.prototype.keyPress = function () {
            var t = this;
            this.$items.length > 1 && e(window).on("keyup.lg", function (e) {
                t.$items.length > 1 && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
            }), e(window).on("keydown.lg", function (e) {
                !0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(), t.$outer.hasClass("lg-thumb-open") ? t.$outer.removeClass("lg-thumb-open") : t.destroy())
            })
        }, t.prototype.arrow = function () {
            var e = this;
            this.$outer.find(".lg-prev").on("click.lg", function () {
                e.goToPrevSlide()
            }), this.$outer.find(".lg-next").on("click.lg", function () {
                e.goToNextSlide()
            })
        }, t.prototype.arrowDisable = function (e) {
            !this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), e > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }, t.prototype.setTranslate = function (e, t, n) {
            this.s.useLeft ? e.css("left", t) : e.css({
                transform: "translate3d(" + t + "px, " + n + "px, 0px)"
            })
        }, t.prototype.touchMove = function (t, n) {
            var i = n - t;
            Math.abs(i) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), i, 0), this.setTranslate(e(".lg-prev-slide"), -this.$slide.eq(this.index).width() + i, 0), this.setTranslate(e(".lg-next-slide"), this.$slide.eq(this.index).width() + i, 0))
        }, t.prototype.touchEnd = function (e) {
            var t = this;
            "lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
                t.$outer.removeClass("lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"), t.$slide.removeAttr("style")
            }), setTimeout(function () {
                t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
            }, t.s.speed + 100)
        }, t.prototype.enableSwipe = function () {
            var e = this,
                t = 0,
                n = 0,
                i = !1;
            e.s.enableSwipe && e.doCss() && (e.$slide.on("touchstart.lg", function (n) {
                e.$outer.hasClass("lg-zoomed") || e.lgBusy || (n.preventDefault(), e.manageSwipeClass(), t = n.originalEvent.targetTouches[0].pageX)
            }), e.$slide.on("touchmove.lg", function (r) {
                e.$outer.hasClass("lg-zoomed") || (r.preventDefault(), n = r.originalEvent.targetTouches[0].pageX, e.touchMove(t, n), i = !0)
            }), e.$slide.on("touchend.lg", function () {
                e.$outer.hasClass("lg-zoomed") || (i ? (i = !1, e.touchEnd(n - t)) : e.$el.trigger("onSlideClick.lg"))
            }))
        }, t.prototype.enableDrag = function () {
            var t = this,
                n = 0,
                i = 0,
                r = !1,
                o = !1;
            t.s.enableDrag && t.doCss() && (t.$slide.on("mousedown.lg", function (i) {
                t.$outer.hasClass("lg-zoomed") || t.lgBusy || e(i.target).text().trim() || (i.preventDefault(), t.manageSwipeClass(), n = i.pageX, r = !0, t.$outer.scrollLeft += 1, t.$outer.scrollLeft -= 1, t.$outer.removeClass("lg-grab").addClass("lg-grabbing"), t.$el.trigger("onDragstart.lg"))
            }), e(window).on("mousemove.lg", function (e) {
                r && (o = !0, i = e.pageX, t.touchMove(n, i), t.$el.trigger("onDragmove.lg"))
            }), e(window).on("mouseup.lg", function (s) {
                o ? (o = !1, t.touchEnd(i - n), t.$el.trigger("onDragend.lg")) : (e(s.target).hasClass("lg-object") || e(s.target).hasClass("lg-video-play")) && t.$el.trigger("onSlideClick.lg"), r && (r = !1, t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }))
        }, t.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
                t = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? t = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (e = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")
        }, t.prototype.mousewheel = function () {
            var e = this;
            e.$outer.on("mousewheel.lg", function (t) {
                t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
            })
        }, t.prototype.closeGallery = function () {
            var t = this,
                n = !1;
            this.$outer.find(".lg-close").on("click.lg", function () {
                t.destroy()
            }), t.s.closable && (t.$outer.on("mousedown.lg", function (t) {
                n = !!(e(t.target).is(".lg-outer") || e(t.target).is(".lg-item ") || e(t.target).is(".lg-img-wrap"))
            }), t.$outer.on("mousemove.lg", function () {
                n = !1
            }), t.$outer.on("mouseup.lg", function (i) {
                (e(i.target).is(".lg-outer") || e(i.target).is(".lg-item ") || e(i.target).is(".lg-img-wrap") && n) && (t.$outer.hasClass("lg-dragging") || t.destroy())
            }))
        }, t.prototype.destroy = function (t) {
            var n = this;
            t || (n.$el.trigger("onBeforeClose.lg"), e(window).scrollTop(n.prevScrollTop)), t && (n.s.dynamic || this.$items.off("click.lg click.lgcustom"), e.removeData(n.el, "lightGallery")), this.$el.off(".lg.tm"), e.each(e.fn.lightGallery.modules, function (e) {
                n.modules[e] && n.modules[e].destroy()
            }), this.lGalleryOn = !1, clearTimeout(n.hideBartimeout), this.hideBartimeout = !1, e(window).off(".lg"), e("body").removeClass("lg-on lg-from-hash"), n.$outer && n.$outer.removeClass("lg-visible"), e(".lg-backdrop").removeClass("in"), setTimeout(function () {
                n.$outer && n.$outer.remove(), e(".lg-backdrop").remove(), t || n.$el.trigger("onCloseAfter.lg")
            }, n.s.backdropDuration + 50)
        }, e.fn.lightGallery = function (n) {
            return this.each(function () {
                if (e.data(this, "lightGallery")) try {
                    e(this).data("lightGallery").init()
                } catch (e) {
                    console.error("lightGallery has not initiated properly")
                } else e.data(this, "lightGallery", new t(this, n))
            })
        }, e.fn.lightGallery.modules = {}
    }()
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
    ! function () {
        "use strict";
        var t = {
                autoplay: !1,
                pause: 5e3,
                progressBar: !0,
                fourceAutoplay: !1,
                autoplayControls: !0,
                appendAutoplayControlsTo: ".lg-toolbar"
            },
            n = function (n) {
                return this.core = e(n).data("lightGallery"), this.$el = e(n), !(this.core.$items.length < 2) && (this.core.s = e.extend({}, t, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
            };
        n.prototype.init = function () {
            var e = this;
            e.core.s.autoplayControls && e.controls(), e.core.s.progressBar && e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), e.progress(), e.core.s.autoplay && e.$el.one("onSlideItemLoad.lg.tm", function () {
                e.startlAuto()
            }), e.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
                e.interval && (e.cancelAuto(), e.canceledOnTouch = !0)
            }), e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function () {
                !e.interval && e.canceledOnTouch && (e.startlAuto(), e.canceledOnTouch = !1)
            })
        }, n.prototype.progress = function () {
            var e, t, n = this;
            n.$el.on("onBeforeSlide.lg.tm", function () {
                n.core.s.progressBar && n.fromAuto && (e = n.core.$outer.find(".lg-progress-bar"), t = n.core.$outer.find(".lg-progress"), n.interval && (t.removeAttr("style"), e.removeClass("lg-start"), setTimeout(function () {
                    t.css("transition", "width " + (n.core.s.speed + n.core.s.pause) + "ms ease 0s"), e.addClass("lg-start")
                }, 20))), n.fromAuto || n.core.s.fourceAutoplay || n.cancelAuto(), n.fromAuto = !1
            })
        }, n.prototype.controls = function () {
            var t = this;
            e(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), t.core.$outer.find(".lg-autoplay-button").on("click.lg", function () {
                e(t.core.$outer).hasClass("lg-show-autoplay") ? (t.cancelAuto(), t.core.s.fourceAutoplay = !1) : t.interval || (t.startlAuto(), t.core.s.fourceAutoplay = t.fourceAutoplayTemp)
            })
        }, n.prototype.startlAuto = function () {
            var e = this;
            e.core.$outer.find(".lg-progress").css("transition", "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"), e.core.$outer.addClass("lg-show-autoplay"), e.core.$outer.find(".lg-progress-bar").addClass("lg-start"), e.interval = setInterval(function () {
                e.core.index + 1 < e.core.$items.length ? e.core.index++ : e.core.index = 0, e.fromAuto = !0, e.core.slide(e.core.index, !1, !1, "next")
            }, e.core.s.speed + e.core.s.pause)
        }, n.prototype.cancelAuto = function () {
            clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
        }, n.prototype.destroy = function () {
            this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
        }, e.fn.lightGallery.modules.autoplay = n
    }()
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
    ! function () {
        "use strict";
        var t = {
                fullScreen: !0
            },
            n = function (n) {
                return this.core = e(n).data("lightGallery"), this.$el = e(n), this.core.s = e.extend({}, t, this.core.s), this.init(), this
            };
        n.prototype.init = function () {
            var e = "";
            if (this.core.s.fullScreen) {
                if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                e = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(e), this.fullScreen()
            }
        }, n.prototype.requestFullscreen = function () {
            var e = document.documentElement;
            e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
        }, n.prototype.exitFullscreen = function () {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }, n.prototype.fullScreen = function () {
            var t = this;
            e(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function () {
                t.core.$outer.toggleClass("lg-fullscreen-on")
            }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
                document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? t.exitFullscreen() : t.requestFullscreen()
            })
        }, n.prototype.destroy = function () {
            this.exitFullscreen(), e(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
        }, e.fn.lightGallery.modules.fullscreen = n
    }()
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
    ! function () {
        "use strict";
        var t = {
                hash: !0
            },
            n = function (n) {
                return this.core = e(n).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
            };
        n.prototype.init = function () {
            var t, n = this;
            n.core.$el.on("onAfterSlide.lg.tm", function (e, t, i) {
                history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + n.core.s.galleryId + "&slide=" + i) : window.location.hash = "lg=" + n.core.s.galleryId + "&slide=" + i
            }), e(window).on("hashchange.lg.hash", function () {
                t = window.location.hash;
                var e = parseInt(t.split("&slide=")[1], 10);
                t.indexOf("lg=" + n.core.s.galleryId) > -1 ? n.core.slide(e, !1, !1) : n.core.lGalleryOn && n.core.destroy()
            })
        }, n.prototype.destroy = function () {
            this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
        }, e.fn.lightGallery.modules.hash = n
    }()
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
    ! function () {
        "use strict";
        var t = {
                thumbnail: !0,
                animateThumb: !0,
                currentPagerPosition: "middle",
                thumbWidth: 100,
                thumbHeight: "80px",
                thumbContHeight: 100,
                thumbMargin: 5,
                exThumbImage: !1,
                showThumbByDefault: !0,
                toogleThumb: !0,
                pullCaptionUp: !0,
                enableThumbDrag: !0,
                enableThumbSwipe: !0,
                swipeThreshold: 50,
                loadYoutubeThumbnail: !0,
                youtubeThumbSize: 1,
                loadVimeoThumbnail: !0,
                vimeoThumbSize: "thumbnail_small",
                loadDailymotionThumbnail: !0
            },
            n = function (n) {
                return this.core = e(n).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.$el = e(n), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
            };
        n.prototype.init = function () {
            var e = this;
            this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function () {
                e.core.$outer.addClass("lg-thumb-open")
            }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
        }, n.prototype.build = function () {
            function t(e, t, n) {
                var s, a = i.core.isVideo(e, n) || {},
                    l = "";
                a.youtube || a.vimeo || a.dailymotion ? a.youtube ? s = i.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + a.youtube[1] + "/" + i.core.s.youtubeThumbSize + ".jpg" : t : a.vimeo ? i.core.s.loadVimeoThumbnail ? (s = "//i.vimeocdn.com/video/error_" + o + ".jpg", l = a.vimeo[1]) : s = t : a.dailymotion && (s = i.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + a.dailymotion[1] : t) : s = t, r += '<div data-vimeo-id="' + l + '" class="lg-thumb-item" style="width:' + i.core.s.thumbWidth + "px; height: " + i.core.s.thumbHeight + "; margin-right: " + i.core.s.thumbMargin + 'px"><img src="' + s + '" /></div>', l = ""
            }
            var n, i = this,
                r = "",
                o = "",
                s = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
            switch (this.core.s.vimeoThumbSize) {
                case "thumbnail_large":
                    o = "640";
                    break;
                case "thumbnail_medium":
                    o = "200x150";
                    break;
                case "thumbnail_small":
                    o = "100x75"
            }
            if (i.core.$outer.addClass("lg-has-thumb"), i.core.$outer.find(".lg").append(s), i.$thumbOuter = i.core.$outer.find(".lg-thumb-outer"), i.thumbOuterWidth = i.$thumbOuter.width(), i.core.s.animateThumb && i.core.$outer.find(".lg-thumb").css({
                    width: i.thumbTotalWidth + "px",
                    position: "relative"
                }), this.core.s.animateThumb && i.$thumbOuter.css("height", i.core.s.thumbContHeight + "px"), i.core.s.dynamic)
                for (var a = 0; a < i.core.s.dynamicEl.length; a++) t(i.core.s.dynamicEl[a].src, i.core.s.dynamicEl[a].thumb, a);
            else i.core.$items.each(function (n) {
                i.core.s.exThumbImage ? t(e(this).attr("href") || e(this).attr("data-src"), e(this).attr(i.core.s.exThumbImage), n) : t(e(this).attr("href") || e(this).attr("data-src"), e(this).find("img").attr("src"), n)
            });
            i.core.$outer.find(".lg-thumb").html(r), n = i.core.$outer.find(".lg-thumb-item"), n.each(function () {
                var t = e(this),
                    n = t.attr("data-vimeo-id");
                n && e.getJSON("//www.vimeo.com/api/v2/video/" + n + ".json?callback=?", {
                    format: "json"
                }, function (e) {
                    t.find("img").attr("src", e[0][i.core.s.vimeoThumbSize])
                })
            }), n.eq(i.core.index).addClass("active"), i.core.$el.on("onBeforeSlide.lg.tm", function () {
                n.removeClass("active"), n.eq(i.core.index).addClass("active")
            }), n.on("click.lg touchend.lg", function () {
                var t = e(this);
                setTimeout(function () {
                    (i.thumbClickable && !i.core.lgBusy || !i.core.doCss()) && (i.core.index = t.index(), i.core.slide(i.core.index, !1, !0, !1))
                }, 50)
            }), i.core.$el.on("onBeforeSlide.lg.tm", function () {
                i.animateThumb(i.core.index)
            }), e(window).on("resize.lg.thumb orientationchange.lg.thumb", function () {
                setTimeout(function () {
                    i.animateThumb(i.core.index), i.thumbOuterWidth = i.$thumbOuter.width()
                }, 200)
            })
        }, n.prototype.setTranslate = function (e) {
            this.core.$outer.find(".lg-thumb").css({
                transform: "translate3d(-" + e + "px, 0px, 0px)"
            })
        }, n.prototype.animateThumb = function (e) {
            var t = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
                var n;
                switch (this.core.s.currentPagerPosition) {
                    case "left":
                        n = 0;
                        break;
                    case "middle":
                        n = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                        break;
                    case "right":
                        n = this.thumbOuterWidth - this.core.s.thumbWidth
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - n, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (t.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || t.animate({
                    left: -this.left + "px"
                }, this.core.s.speed)) : this.core.doCss() || t.css("left", -this.left + "px"), this.setTranslate(this.left)
            }
        }, n.prototype.enableThumbDrag = function () {
            var t = this,
                n = 0,
                i = 0,
                r = !1,
                o = !1,
                s = 0;
            t.$thumbOuter.addClass("lg-grab"), t.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function (e) {
                t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(), n = e.pageX, r = !0, t.core.$outer.scrollLeft += 1, t.core.$outer.scrollLeft -= 1, t.thumbClickable = !1, t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
            }), e(window).on("mousemove.lg.thumb", function (e) {
                r && (s = t.left, o = !0, i = e.pageX, t.$thumbOuter.addClass("lg-dragging"), s -= i - n, s > t.thumbTotalWidth - t.thumbOuterWidth && (s = t.thumbTotalWidth - t.thumbOuterWidth), s < 0 && (s = 0), t.setTranslate(s))
            }), e(window).on("mouseup.lg.thumb", function () {
                o ? (o = !1, t.$thumbOuter.removeClass("lg-dragging"), t.left = s,
                    Math.abs(i - n) < t.core.s.swipeThreshold && (t.thumbClickable = !0)) : t.thumbClickable = !0, r && (r = !1, t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
            })
        }, n.prototype.enableThumbSwipe = function () {
            var e = this,
                t = 0,
                n = 0,
                i = !1,
                r = 0;
            e.core.$outer.find(".lg-thumb").on("touchstart.lg", function (n) {
                e.thumbTotalWidth > e.thumbOuterWidth && (n.preventDefault(), t = n.originalEvent.targetTouches[0].pageX, e.thumbClickable = !1)
            }), e.core.$outer.find(".lg-thumb").on("touchmove.lg", function (o) {
                e.thumbTotalWidth > e.thumbOuterWidth && (o.preventDefault(), n = o.originalEvent.targetTouches[0].pageX, i = !0, e.$thumbOuter.addClass("lg-dragging"), r = e.left, r -= n - t, r > e.thumbTotalWidth - e.thumbOuterWidth && (r = e.thumbTotalWidth - e.thumbOuterWidth), r < 0 && (r = 0), e.setTranslate(r))
            }), e.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
                e.thumbTotalWidth > e.thumbOuterWidth && i ? (i = !1, e.$thumbOuter.removeClass("lg-dragging"), Math.abs(n - t) < e.core.s.swipeThreshold && (e.thumbClickable = !0), e.left = r) : e.thumbClickable = !0
            })
        }, n.prototype.toogle = function () {
            var e = this;
            e.core.s.toogleThumb && (e.core.$outer.addClass("lg-can-toggle"), e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), e.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
                e.core.$outer.toggleClass("lg-thumb-open")
            }))
        }, n.prototype.thumbkeyPress = function () {
            var t = this;
            e(window).on("keydown.lg.thumb", function (e) {
                38 === e.keyCode ? (e.preventDefault(), t.core.$outer.addClass("lg-thumb-open")) : 40 === e.keyCode && (e.preventDefault(), t.core.$outer.removeClass("lg-thumb-open"))
            })
        }, n.prototype.destroy = function () {
            this.core.s.thumbnail && this.core.$items.length > 1 && (e(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
        }, e.fn.lightGallery.modules.Thumbnail = n
    }()
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function (e) {
    ! function () {
        "use strict";

        function t(e, t, n, i) {
            var r = this;
            if (r.core.$slide.eq(t).find(".lg-video").append(r.loadVideo(n, "lg-object", !0, t, i)), i)
                if (r.core.s.videojs) try {
                    videojs(r.core.$slide.eq(t).find(".lg-html5").get(0), r.core.s.videojsOptions, function () {
                        !r.videoLoaded && r.core.s.autoplayFirstVideo && this.play()
                    })
                } catch (e) {
                    console.error("Make sure you have included videojs")
                } else !r.videoLoaded && r.core.s.autoplayFirstVideo && r.core.$slide.eq(t).find(".lg-html5").get(0).play()
        }

        function n(e, t) {
            var n = this.core.$slide.eq(t).find(".lg-video-cont");
            n.hasClass("lg-has-iframe") || (n.css("max-width", this.core.s.videoMaxWidth), this.videoLoaded = !0)
        }

        function i(t, n, i) {
            var r = this,
                o = r.core.$slide.eq(n),
                s = o.find(".lg-youtube").get(0),
                a = o.find(".lg-vimeo").get(0),
                l = o.find(".lg-dailymotion").get(0),
                u = o.find(".lg-vk").get(0),
                c = o.find(".lg-html5").get(0);
            if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            else if (a) try {
                    $f(a).api("pause")
                } catch (e) {
                    console.error("Make sure you have included froogaloop2 js")
                } else if (l) l.contentWindow.postMessage("pause", "*");
                else if (c)
                if (r.core.s.videojs) try {
                    videojs(c).pause()
                } catch (e) {
                    console.error("Make sure you have included videojs")
                } else c.pause();
            u && e(u).attr("src", e(u).attr("src").replace("&autoplay", "&noplay"));
            var d;
            d = r.core.s.dynamic ? r.core.s.dynamicEl[i].src : r.core.$items.eq(i).attr("href") || r.core.$items.eq(i).attr("data-src");
            var h = r.core.isVideo(d, i) || {};
            (h.youtube || h.vimeo || h.dailymotion || h.vk) && r.core.$outer.addClass("lg-hide-download")
        }
        var r = {
                videoMaxWidth: "855px",
                autoplayFirstVideo: !0,
                youtubePlayerParams: !1,
                vimeoPlayerParams: !1,
                dailymotionPlayerParams: !1,
                vkPlayerParams: !1,
                videojs: !1,
                videojsOptions: {}
            },
            o = function (t) {
                return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, r, this.core.s), this.videoLoaded = !1, this.init(), this
            };
        o.prototype.init = function () {
            var r = this;
            r.core.$el.on("hasVideo.lg.tm", t.bind(this)), r.core.$el.on("onAferAppendSlide.lg.tm", n.bind(this)), r.core.doCss() && r.core.$items.length > 1 && (r.core.s.enableSwipe || r.core.s.enableDrag) ? r.core.$el.on("onSlideClick.lg.tm", function () {
                var e = r.core.$slide.eq(r.core.index);
                r.loadVideoOnclick(e)
            }) : r.core.$slide.on("click.lg", function () {
                r.loadVideoOnclick(e(this))
            }), r.core.$el.on("onBeforeSlide.lg.tm", i.bind(this)), r.core.$el.on("onAfterSlide.lg.tm", function (e, t) {
                r.core.$slide.eq(t).removeClass("lg-video-playing")
            }), r.core.s.autoplayFirstVideo && r.core.$el.on("onAferAppendSlide.lg.tm", function (e, t) {
                if (!r.core.lGalleryOn) {
                    var n = r.core.$slide.eq(t);
                    setTimeout(function () {
                        r.loadVideoOnclick(n)
                    }, 100)
                }
            })
        }, o.prototype.loadVideo = function (t, n, i, r, o) {
            var s = "",
                a = 1,
                l = "",
                u = this.core.isVideo(t, r) || {};
            if (i && (a = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0), u.youtube) l = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1", this.core.s.youtubePlayerParams && (l = l + "&" + e.param(this.core.s.youtubePlayerParams)), s = '<iframe class="lg-video-object lg-youtube ' + n + '" width="560" height="315" src="//www.youtube.com/embed/' + u.youtube[1] + l + '" frameborder="0" allowfullscreen></iframe>';
            else if (u.vimeo) l = "?autoplay=" + a + "&api=1", this.core.s.vimeoPlayerParams && (l = l + "&" + e.param(this.core.s.vimeoPlayerParams)), s = '<iframe class="lg-video-object lg-vimeo ' + n + '" width="560" height="315"  src="//player.vimeo.com/video/' + u.vimeo[1] + l + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            else if (u.dailymotion) l = "?wmode=opaque&autoplay=" + a + "&api=postMessage", this.core.s.dailymotionPlayerParams && (l = l + "&" + e.param(this.core.s.dailymotionPlayerParams)), s = '<iframe class="lg-video-object lg-dailymotion ' + n + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + u.dailymotion[1] + l + '" frameborder="0" allowfullscreen></iframe>';
            else if (u.html5) {
                var c = o.substring(0, 1);
                "." !== c && "#" !== c || (o = e(o).html()), s = o
            } else u.vk && (l = "&autoplay=" + a, this.core.s.vkPlayerParams && (l = l + "&" + e.param(this.core.s.vkPlayerParams)), s = '<iframe class="lg-video-object lg-vk ' + n + '" width="560" height="315" src="//vk.com/video_ext.php?' + u.vk[1] + l + '" frameborder="0" allowfullscreen></iframe>');
            return s
        }, o.prototype.loadVideoOnclick = function (e) {
            var t = this;
            if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
                if (e.hasClass("lg-has-video")) {
                    var n = e.find(".lg-youtube").get(0),
                        i = e.find(".lg-vimeo").get(0),
                        r = e.find(".lg-dailymotion").get(0),
                        o = e.find(".lg-html5").get(0);
                    if (n) n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                    else if (i) try {
                            $f(i).api("play")
                        } catch (e) {
                            console.error("Make sure you have included froogaloop2 js")
                        } else if (r) r.contentWindow.postMessage("play", "*");
                        else if (o)
                        if (t.core.s.videojs) try {
                            videojs(o).play()
                        } catch (e) {
                            console.error("Make sure you have included videojs")
                        } else o.play();
                    e.addClass("lg-video-playing")
                } else {
                    e.addClass("lg-video-playing lg-has-video");
                    var s, a, l = function (n, i) {
                        if (e.find(".lg-video").append(t.loadVideo(n, "", !1, t.core.index, i)), i)
                            if (t.core.s.videojs) try {
                                videojs(t.core.$slide.eq(t.core.index).find(".lg-html5").get(0), t.core.s.videojsOptions, function () {
                                    this.play()
                                })
                            } catch (e) {
                                console.error("Make sure you have included videojs")
                            } else t.core.$slide.eq(t.core.index).find(".lg-html5").get(0).play()
                    };
                    t.core.s.dynamic ? (s = t.core.s.dynamicEl[t.core.index].src, a = t.core.s.dynamicEl[t.core.index].html, l(s, a)) : (s = t.core.$items.eq(t.core.index).attr("href") || t.core.$items.eq(t.core.index).attr("data-src"), a = t.core.$items.eq(t.core.index).attr("data-html"), l(s, a));
                    var u = e.find(".lg-object");
                    e.find(".lg-video").append(u), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function () {
                        e.addClass("lg-complete")
                    }))
                }
        }, o.prototype.destroy = function () {
            this.videoLoaded = !1
        }, e.fn.lightGallery.modules.video = o
    }()
});
var Froogaloop = function () {
    function e(t) {
        return new e.fn.init(t)
    }

    function t(e, t, n) {
        if (!n.contentWindow.postMessage) return !1;
        e = JSON.stringify({
            method: e,
            value: t
        }), n.contentWindow.postMessage(e, s)
    }

    function n(e) {
        var t, n;
        try {
            t = JSON.parse(e.data), n = t.event || t.method
        } catch (e) {}
        if ("ready" != n || o || (o = !0), !/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
        "*" === s && (s = e.origin), e = t.value;
        var i = t.data,
            a = "" === a ? null : t.player_id;
        return t = a ? r[a][n] : r[n], n = [], !!t && (void 0 !== e && n.push(e), i && n.push(i), a && n.push(a), 0 < n.length ? t.apply(null, n) : t.call())
    }

    function i(e, t, n) {
        n ? (r[n] || (r[n] = {}), r[n][e] = t) : r[e] = t
    }
    var r = {},
        o = !1,
        s = "*";
    return e.fn = e.prototype = {
        element: null,
        init: function (e) {
            return "string" == typeof e && (e = document.getElementById(e)), this.element = e, this
        },
        api: function (e, n) {
            if (!this.element || !e) return !1;
            var r = this.element,
                o = "" !== r.id ? r.id : null,
                s = n && n.constructor && n.call && n.apply ? null : n,
                a = n && n.constructor && n.call && n.apply ? n : null;
            return a && i(e, a, o), t(e, s, r), this
        },
        addEvent: function (e, n) {
            if (!this.element) return !1;
            var r = this.element,
                s = "" !== r.id ? r.id : null;
            return i(e, n, s), "ready" != e ? t("addEventListener", e, r) : "ready" == e && o && n.call(null, s), this
        },
        removeEvent: function (e) {
            if (!this.element) return !1;
            var n = this.element,
                i = "" !== n.id ? n.id : null;
            e: {
                if (i && r[i]) {
                    if (!r[i][e]) {
                        i = !1;
                        break e
                    }
                    r[i][e] = null
                } else {
                    if (!r[e]) {
                        i = !1;
                        break e
                    }
                    r[e] = null
                }
                i = !0
            }
            "ready" != e && i && t("removeEventListener", e, n)
        }
    }, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), window.Froogaloop = window.$f = e
}();
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
    } : e(jQuery)
}(function (e) {
    "use strict";

    function t(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).closest("form").ajaxSubmit(n))
    }

    function n(t) {
        var n = t.target,
            i = e(n);
        if (!i.is("[type=submit],[type=image]")) {
            var r = i.closest("[type=submit]");
            if (0 === r.length) return;
            n = r[0]
        }
        var o = n.form;
        if (o.clk = n, "image" === n.type)
            if ("undefined" != typeof t.offsetX) o.clk_x = t.offsetX, o.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var s = i.offset();
            o.clk_x = t.pageX - s.left, o.clk_y = t.pageY - s.top
        } else o.clk_x = t.pageX - n.offsetLeft, o.clk_y = t.pageY - n.offsetTop;
        setTimeout(function () {
            o.clk = o.clk_x = o.clk_y = null
        }, 100)
    }

    function i() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var r = /\r?\n/g,
        o = {};
    o.fileapi = e('<input type="file">').get(0).files !== undefined, o.formdata = "undefined" != typeof window.FormData;
    var s = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!s) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t, n, r, a) {
        function l(n) {
            var i, r, o = e.param(n, t.traditional).split("&"),
                s = o.length,
                a = [];
            for (i = 0; i < s; i++) o[i] = o[i].replace(/\+/g, " "), r = o[i].split("="), a.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
            return a
        }

        function u(n) {
            for (var i = new FormData, r = 0; r < n.length; r++) i.append(n[r].name, n[r].value);
            if (t.extraData) {
                var o = l(t.extraData);
                for (r = 0; r < o.length; r++) o[r] && i.append(o[r][0], o[r][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: d || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var n = e.ajaxSettings.xhr();
                return n.upload && n.upload.addEventListener("progress", function (e) {
                    var n = 0,
                        i = e.loaded || e.position,
                        r = e.total;
                    e.lengthComputable && (n = Math.ceil(i / r * 100)), t.uploadProgress(e, i, r, n)
                }, !1), n
            }), s.data = null;
            var a = s.beforeSend;
            return s.beforeSend = function (e, n) {
                t.formData ? n.data = t.formData : n.data = i, a && a.call(this, e, n)
            }, e.ajax(s)
        }

        function c(n) {
            function r(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (e) {
                    i("cannot get iframe.contentWindow document: " + e)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (n) {
                    i("cannot get iframe.contentDocument: " + n), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = r(g).readyState;
                        i("state = " + e), e && "uninitialized" === e.toLowerCase() && setTimeout(t, 50)
                    } catch (e) {
                        i("Server abort: ", e, " (", e.name, ")"), a(j), T && clearTimeout(T), T = undefined
                    }
                }
                var n = p.attr2("target"),
                    o = p.attr2("action"),
                    s = "multipart/form-data",
                    l = p.attr("enctype") || p.attr("encoding") || s;
                S.setAttribute("target", f), d && !/post/i.test(d) || S.setAttribute("method", "POST"), o !== c.url && S.setAttribute("action", c.url), c.skipEncodingOverride || d && !/post/i.test(d) || p.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), c.timeout && (T = setTimeout(function () {
                    w = !0, a(k)
                }, c.timeout));
                var u = [];
                try {
                    if (c.extraData)
                        for (var h in c.extraData) c.extraData.hasOwnProperty(h) && (e.isPlainObject(c.extraData[h]) && c.extraData[h].hasOwnProperty("name") && c.extraData[h].hasOwnProperty("value") ? u.push(e('<input type="hidden" name="' + c.extraData[h].name + '">', E).val(c.extraData[h].value).appendTo(S)[0]) : u.push(e('<input type="hidden" name="' + h + '">', E).val(c.extraData[h]).appendTo(S)[0]));
                    c.iframeTarget || m.appendTo($), g.attachEvent ? g.attachEvent("onload", a) : g.addEventListener("load", a, !1), setTimeout(t, 15);
                    try {
                        S.submit()
                    } catch (e) {
                        var v = document.createElement("form").submit;
                        v.apply(S)
                    }
                } finally {
                    S.setAttribute("action", o), S.setAttribute("enctype", l), n ? S.setAttribute("target", n) : p.removeAttr("target"), e(u).remove()
                }
            }

            function a(t) {
                if (!v.aborted && !q) {
                    if (D = r(g), D || (i("cannot access response document"), t = j), t === k && v) return v.abort("timeout"), void C.reject(v, "timeout");
                    if (t === j && v) return v.abort("server abort"), void C.reject(v, "error", "server abort");
                    if (D && D.location.href !== c.iframeSrc || w) {
                        g.detachEvent ? g.detachEvent("onload", a) : g.removeEventListener("load", a, !1);
                        var n, o = "success";
                        try {
                            if (w) throw "timeout";
                            var s = "xml" === c.dataType || D.XMLDocument || e.isXMLDoc(D);
                            if (i("isXml=" + s), !s && window.opera && (null === D.body || !D.body.innerHTML) && --I) return i("requeing onLoad callback, DOM not available"), void setTimeout(a, 250);
                            var l = D.body ? D.body : D.documentElement;
                            v.responseText = l ? l.innerHTML : null, v.responseXML = D.XMLDocument ? D.XMLDocument : D, s && (c.dataType = "xml"), v.getResponseHeader = function (e) {
                                return {
                                    "content-type": c.dataType
                                } [e.toLowerCase()]
                            }, l && (v.status = Number(l.getAttribute("status")) || v.status, v.statusText = l.getAttribute("statusText") || v.statusText);
                            var u = (c.dataType || "").toLowerCase(),
                                d = /(json|script|text)/.test(u);
                            if (d || c.textarea) {
                                var f = D.getElementsByTagName("textarea")[0];
                                if (f) v.responseText = f.value, v.status = Number(f.getAttribute("status")) || v.status, v.statusText = f.getAttribute("statusText") || v.statusText;
                                else if (d) {
                                    var p = D.getElementsByTagName("pre")[0],
                                        y = D.getElementsByTagName("body")[0];
                                    p ? v.responseText = p.textContent ? p.textContent : p.innerText : y && (v.responseText = y.textContent ? y.textContent : y.innerText)
                                }
                            } else "xml" === u && !v.responseXML && v.responseText && (v.responseXML = P(v.responseText));
                            try {
                                L = M(v, u, c)
                            } catch (e) {
                                o = "parsererror", v.error = n = e || o
                            }
                        } catch (e) {
                            i("error caught: ", e), o = "error", v.error = n = e || o
                        }
                        v.aborted && (i("upload aborted"), o = null), v.status && (o = v.status >= 200 && v.status < 300 || 304 === v.status ? "success" : "error"), "success" === o ? (c.success && c.success.call(c.context, L, "success", v), C.resolve(v.responseText, "success", v), h && e.event.trigger("ajaxSuccess", [v, c])) : o && (void 0 === n && (n = v.statusText), c.error && c.error.call(c.context, v, o, n), C.reject(v, "error", n), h && e.event.trigger("ajaxError", [v, c, n])), h && e.event.trigger("ajaxComplete", [v, c]), h && !--e.active && e.event.trigger("ajaxStop"), c.complete && c.complete.call(c.context, v, o), q = !0, c.timeout && clearTimeout(T), setTimeout(function () {
                            c.iframeTarget ? m.attr("src", c.iframeSrc) : m.remove(), v.responseXML = null
                        }, 100)
                    }
                }
            }
            var l, u, c, h, f, m, g, v, b, x, w, T, S = p[0],
                C = e.Deferred();
            if (C.abort = function (e) {
                    v.abort(e)
                }, n)
                for (u = 0; u < y.length; u++) l = e(y[u]), s ? l.prop("disabled", !1) : l.removeAttr("disabled");
            c = e.extend(!0, {}, e.ajaxSettings, t), c.context = c.context || c, f = "jqFormIO" + (new Date).getTime();
            var E = S.ownerDocument,
                $ = p.closest("body");
            if (c.iframeTarget ? (m = e(c.iframeTarget, E), x = m.attr2("name"), x ? f = x : m.attr2("name", f)) : (m = e('<iframe name="' + f + '" src="' + c.iframeSrc + '" />', E), m.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = m[0], v = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                        var n = "timeout" === t ? "timeout" : "aborted";
                        i("aborting upload... " + n), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (e) {}
                        m.attr("src", c.iframeSrc), v.error = n, c.error && c.error.call(c.context, v, n, t), h && e.event.trigger("ajaxError", [v, c, n]), c.complete && c.complete.call(c.context, v, n)
                    }
                }, h = c.global, h && 0 == e.active++ && e.event.trigger("ajaxStart"), h && e.event.trigger("ajaxSend", [v, c]), c.beforeSend && !1 === c.beforeSend.call(c.context, v, c)) return c.global && e.active--, C.reject(), C;
            if (v.aborted) return C.reject(), C;
            (b = S.clk) && (x = b.name) && !b.disabled && (c.extraData = c.extraData || {}, c.extraData[x] = b.value, "image" === b.type && (c.extraData[x + ".x"] = S.clk_x, c.extraData[x + ".y"] = S.clk_y));
            var k = 1,
                j = 2,
                z = e("meta[name=csrf-token]").attr("content"),
                A = e("meta[name=csrf-param]").attr("content");
            A && z && (c.extraData = c.extraData || {}, c.extraData[A] = z), c.forceSync ? o() : setTimeout(o, 10);
            var L, D, q, I = 50,
                P = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null
                },
                O = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                },
                M = function (t, n, i) {
                    var r = t.getResponseHeader("content-type") || "",
                        o = ("xml" === n || !n) && r.indexOf("xml") >= 0,
                        s = o ? t.responseXML : t.responseText;
                    return o && "parsererror" === s.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (s = i.dataFilter(s, n)), "string" == typeof s && (("json" === n || !n) && r.indexOf("json") >= 0 ? s = O(s) : ("script" === n || !n) && r.indexOf("javascript") >= 0 && e.globalEval(s)), s
                };
            return C
        }
        if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"), this;
        var d, h, f, p = this;
        "function" == typeof t ? t = {
            success: t
        } : "string" == typeof t || !1 === t && arguments.length > 0 ? (t = {
            url: t,
            data: n,
            dataType: r
        }, "function" == typeof a && (t.success = a)) : void 0 === t && (t = {}), d = t.method || t.type || this.attr2("method"), h = t.url || this.attr2("action"), f = "string" == typeof h ? e.trim(h) : "", f = f || window.location.href || "", f && (f = (f.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: f,
            success: e.ajaxSettings.success,
            type: d || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var g = t.traditional;
        void 0 === g && (g = e.ajaxSettings.traditional);
        var v, y = [],
            b = this.formToArray(t.semantic, y, t.filtering);
        if (t.data) {
            var x = e.isFunction(t.data) ? t.data(b) : t.data;
            t.extraData = x, v = e.param(x, g)
        }
        if (t.beforeSubmit && !1 === t.beforeSubmit(b, this, t)) return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [b, this, t, m]), m.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var w = e.param(b, g);
        v && (w = w ? w + "&" + v : v), "GET" === t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + w, t.data = null) : t.data = w;
        var T = [];
        if (t.resetForm && T.push(function () {
                p.resetForm()
            }), t.clearForm && T.push(function () {
                p.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var S = t.success || function () {};
            T.push(function (n) {
                var i = arguments,
                    r = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[r](n).each(function () {
                    S.apply(this, i)
                })
            })
        } else t.success && (e.isArray(t.success) ? e.merge(T, t.success) : T.push(t.success));
        if (t.success = function (e, n, i) {
                for (var r = t.context || this, o = 0, s = T.length; o < s; o++) T[o].apply(r, [e, n, i || p, p])
            }, t.error) {
            var C = t.error;
            t.error = function (e, n, i) {
                var r = t.context || this;
                C.apply(r, [e, n, i, p])
            }
        }
        if (t.complete) {
            var E = t.complete;
            t.complete = function (e, n) {
                var i = t.context || this;
                E.apply(i, [e, n, p])
            }
        }
        var $ = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }),
            k = $.length > 0,
            j = "multipart/form-data",
            z = p.attr("enctype") === j || p.attr("encoding") === j,
            A = o.fileapi && o.formdata;
        i("fileAPI :" + A);
        var L, D = (k || z) && !A;
        !1 !== t.iframe && (t.iframe || D) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            L = c(b)
        }) : L = c(b) : L = (k || z) && A ? u(b) : e.ajax(t), p.removeData("jqxhr").data("jqxhr", L);
        for (var q = 0; q < y.length; q++) y[q] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (r, o, s, a) {
        if (("string" == typeof r || !1 === r && arguments.length > 0) && (r = {
                url: r,
                data: o,
                dataType: s
            }, "function" == typeof a && (r.success = a)), r = r || {}, r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
            var l = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && l.s ? (i("DOM not ready, queuing ajaxForm"), e(function () {
                e(l.s, l.c).ajaxForm(r)
            }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return r.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, r, t).on("click.form-plugin", this.selector, r, n), this) : this.ajaxFormUnbind().on("submit.form-plugin", r, t).on("click.form-plugin", r, n)
    }, e.fn.ajaxFormUnbind = function () {
        return this.off("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, n, i) {
        var r = [];
        if (0 === this.length) return r;
        var s, a = this[0],
            l = this.attr("id"),
            u = t || "undefined" == typeof a.elements ? a.getElementsByTagName("*") : a.elements;
        if (u && (u = e.makeArray(u)), l && (t || /(Edge|Trident)\//.test(navigator.userAgent)) && (s = e(':input[form="' + l + '"]').get(), s.length && (u = (u || []).concat(s))), !u || !u.length) return r;
        e.isFunction(i) && (u = e.map(u, i));
        var c, d, h, f, p, m, g;
        for (c = 0, m = u.length; c < m; c++)
            if (p = u[c], (h = p.name) && !p.disabled)
                if (t && a.clk && "image" === p.type) a.clk === p && (r.push({
                    name: h,
                    value: e(p).val(),
                    type: p.type
                }), r.push({
                    name: h + ".x",
                    value: a.clk_x
                }, {
                    name: h + ".y",
                    value: a.clk_y
                }));
                else if ((f = e.fieldValue(p, !0)) && f.constructor === Array)
            for (n && n.push(p), d = 0, g = f.length; d < g; d++) r.push({
                name: h,
                value: f[d]
            });
        else if (o.fileapi && "file" === p.type) {
            n && n.push(p);
            var v = p.files;
            if (v.length)
                for (d = 0; d < v.length; d++) r.push({
                    name: h,
                    value: v[d],
                    type: p.type
                });
            else r.push({
                name: h,
                value: "",
                type: p.type
            })
        } else null !== f && void 0 !== f && (n && n.push(p), r.push({
            name: h,
            value: f,
            type: p.type,
            required: p.required
        }));
        if (!t && a.clk) {
            var y = e(a.clk),
                b = y[0];
            h = b.name, h && !b.disabled && "image" === b.type && (r.push({
                name: h,
                value: y.val()
            }), r.push({
                name: h + ".x",
                value: a.clk_x
            }, {
                name: h + ".y",
                value: a.clk_y
            }))
        }
        return r
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var i = this.name;
            if (i) {
                var r = e.fieldValue(this, t);
                if (r && r.constructor === Array)
                    for (var o = 0, s = r.length; o < s; o++) n.push({
                        name: i,
                        value: r[o]
                    });
                else null !== r && void 0 !== r && n.push({
                    name: this.name,
                    value: r
                })
            }
        }), e.param(n)
    }, e.fn.fieldValue = function (t) {
        for (var n = [], i = 0, r = this.length; i < r; i++) {
            var o = this[i],
                s = e.fieldValue(o, t);
            null === s || void 0 === s || s.constructor === Array && !s.length || (s.constructor === Array ? e.merge(n, s) : n.push(s))
        }
        return n
    }, e.fieldValue = function (t, n) {
        var i = t.name,
            o = t.type,
            s = t.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!i || t.disabled || "reset" === o || "button" === o || ("checkbox" === o || "radio" === o) && !t.checked || ("submit" === o || "image" === o) && t.form && t.form.clk !== t || "select" === s && -1 === t.selectedIndex)) return null;
        if ("select" === s) {
            var a = t.selectedIndex;
            if (a < 0) return null;
            for (var l = [], u = t.options, c = "select-one" === o, d = c ? a + 1 : u.length, h = c ? a : 0; h < d; h++) {
                var f = u[h];
                if (f.selected && !f.disabled) {
                    var p = f.value;
                    if (p || (p = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), c) return p;
                    l.push(p)
                }
            }
            return l
        }
        return e(t).val().replace(r, "\r\n")
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var i = this.type,
                r = this.tagName.toLowerCase();
            n.test(i) || "textarea" === r ? this.value = "" : "checkbox" === i || "radio" === i ? this.checked = !1 : "select" === r ? this.selectedIndex = -1 : "file" === i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            var t = e(this),
                n = this.tagName.toLowerCase();
            switch (n) {
                case "input":
                    this.checked = this.defaultChecked;
                case "textarea":
                    return this.value = this.defaultValue, !0;
                case "option":
                case "optgroup":
                    var i = t.parents("select");
                    return i.length && i[0].multiple ? "option" === n ? this.selected = this.defaultSelected : t.find("option").resetForm() : i.resetForm(), !0;
                case "select":
                    return t.find("option").each(function (e) {
                        if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1
                    }), !0;
                case "label":
                    var r = e(t.attr("for")),
                        o = t.find("input,select,textarea");
                    return r[0] && o.unshift(r[0]), o.resetForm(), !0;
                case "form":
                    return ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset(), !0;
                default:
                    return t.find("form,input,label,select,textarea").resetForm(), !0
            }
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var n = this.type;
            if ("checkbox" === n || "radio" === n) this.checked = t;
            else if ("option" === this.tagName.toLowerCase()) {
                var i = e(this).parent("select");
                t && i[0] && "select-one" === i[0].type && i.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}),
function () {
    "use strict";

    function e(t, i) {
        function r(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }
        var o;
        if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = t, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !e.notNeeded(t)) {
            for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, u = s.length; l < u; l++) a[s[l]] = r(a[s[l]], a);
            n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === e ? r.call(t, e, n.hijacked || n, i) : r.call(t, e, n, i)
            }, t.addEventListener = function (e, n, i) {
                var r = Node.prototype.addEventListener;
                "click" === e ? r.call(t, e, n.hijacked || (n.hijacked = function (e) {
                    e.propagationStopped || n(e)
                }), i) : r.call(t, e, n, i)
            }), "function" == typeof t.onclick && (o = t.onclick, t.addEventListener("click", function (e) {
                o(e)
            }, !1), t.onclick = null)
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !t,
        i = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        o = i && /OS [6-7]_\d/.test(navigator.userAgent),
        s = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (i && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, e.prototype.needsFocus = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function (e, t) {
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, e.prototype.determineEventType = function (e) {
        return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, e.prototype.focus = function (e) {
        var t;
        i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function (e) {
        var t, n;
        if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, e.prototype.getTargetElementFromEventTarget = function (e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function (e) {
        var t, n, o;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
            if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
            if (!r) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function (e) {
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, e.prototype.onTouchMove = function (e) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, e.prototype.findControl = function (e) {
        return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function (e) {
        var t, s, a, l, u, c = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (u = e.changedTouches[0], c = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (a = c.tagName.toLowerCase())) {
            if (t = this.findControl(c)) {
                if (this.focus(c), n) return !1;
                c = t
            }
        } else if (this.needsFocus(c)) return e.timeStamp - s > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, e), i && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
        return !(!i || r || !(l = c.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(c) || (e.preventDefault(), this.sendClick(c, e)), !1)
    }, e.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function (e) {
        return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    }, e.prototype.onClick = function (e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function () {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function (e) {
        var t, i, r;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
    }, e.attach = function (t, n) {
        return new e(t, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}(),
function (e, t, n, i) {
    "use strict";

    function r(e, t, n) {
        return setTimeout(u(e, n), t)
    }

    function o(e, t, n) {
        return !!Array.isArray(e) && (s(e, n[t], n), !0)
    }

    function s(e, t, n) {
        var r;
        if (e)
            if (e.forEach) e.forEach(t, n);
            else if (e.length !== i)
            for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
        else
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }

    function a(t, n, i) {
        var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
            var n = new Error("get-stack-trace"),
                i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                o = e.console && (e.console.warn || e.console.log);
            return o && o.call(e.console, r, i), t.apply(this, arguments)
        }
    }

    function l(e, t, n) {
        var i, r = t.prototype;
        i = e.prototype = Object.create(r), i.constructor = e, i._super = r, n && de(i, n)
    }

    function u(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function c(e, t) {
        return typeof e == pe ? e.apply(t ? t[0] || i : i, t) : e
    }

    function d(e, t) {
        return e === i ? t : e
    }

    function h(e, t, n) {
        s(g(t), function (t) {
            e.addEventListener(t, n, !1)
        })
    }

    function f(e, t, n) {
        s(g(t), function (t) {
            e.removeEventListener(t, n, !1)
        })
    }

    function p(e, t) {
        for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function m(e, t) {
        return e.indexOf(t) > -1
    }

    function g(e) {
        return e.trim().split(/\s+/g)
    }

    function v(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if (n && e[i][n] == t || !n && e[i] === t) return i;
            i++
        }
        return -1
    }

    function y(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function b(e, t, n) {
        for (var i = [], r = [], o = 0; o < e.length;) {
            var s = t ? e[o][t] : e[o];
            v(r, s) < 0 && i.push(e[o]), r[o] = s, o++
        }
        return n && (i = t ? i.sort(function (e, n) {
            return e[t] > n[t]
        }) : i.sort()), i
    }

    function x(e, t) {
        for (var n, r, o = t[0].toUpperCase() + t.slice(1), s = 0; s < he.length;) {
            if (n = he[s], (r = n ? n + o : t) in e) return r;
            s++
        }
        return i
    }

    function w() {
        return xe++
    }

    function T(t) {
        var n = t.ownerDocument || t;
        return n.defaultView || n.parentWindow || e
    }

    function S(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
            c(e.options.enable, [e]) && n.handler(t)
        }, this.init()
    }

    function C(e) {
        var t = e.options.inputClass;
        return new(t || (Se ? N : Ce ? F : Te ? R : M))(e, E)
    }

    function E(e, t, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            o = t & Ae && i - r == 0,
            s = t & (De | qe) && i - r == 0;
        n.isFirst = !!o, n.isFinal = !!s, o && (e.session = {}), n.eventType = t, $(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function $(e, t) {
        var n = e.session,
            i = t.pointers,
            r = i.length;
        n.firstInput || (n.firstInput = z(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = z(t) : 1 === r && (n.firstMultiple = !1);
        var o = n.firstInput,
            s = n.firstMultiple,
            a = s ? s.center : o.center,
            l = t.center = A(i);
        t.timeStamp = ve(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = I(a, l), t.distance = q(a, l), k(n, t), t.offsetDirection = D(t.deltaX, t.deltaY);
        var u = L(t.deltaTime, t.deltaX, t.deltaY);
        t.overallVelocityX = u.x, t.overallVelocityY = u.y, t.overallVelocity = ge(u.x) > ge(u.y) ? u.x : u.y, t.scale = s ? O(s.pointers, i) : 1, t.rotation = s ? P(s.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, j(n, t);
        var c = e.element;
        p(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
    }

    function k(e, t) {
        var n = t.center,
            i = e.offsetDelta || {},
            r = e.prevDelta || {},
            o = e.prevInput || {};
        t.eventType !== Ae && o.eventType !== De || (r = e.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        }, i = e.offsetDelta = {
            x: n.x,
            y: n.y
        }), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y)
    }

    function j(e, t) {
        var n, r, o, s, a = e.lastInterval || t,
            l = t.timeStamp - a.timeStamp;
        if (t.eventType != qe && (l > ze || a.velocity === i)) {
            var u = t.deltaX - a.deltaX,
                c = t.deltaY - a.deltaY,
                d = L(l, u, c);
            r = d.x, o = d.y, n = ge(d.x) > ge(d.y) ? d.x : d.y, s = D(u, c), e.lastInterval = t
        } else n = a.velocity, r = a.velocityX, o = a.velocityY, s = a.direction;
        t.velocity = n, t.velocityX = r, t.velocityY = o, t.direction = s
    }

    function z(e) {
        for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
            clientX: me(e.pointers[n].clientX),
            clientY: me(e.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: ve(),
            pointers: t,
            center: A(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }

    function A(e) {
        var t = e.length;
        if (1 === t) return {
            x: me(e[0].clientX),
            y: me(e[0].clientY)
        };
        for (var n = 0, i = 0, r = 0; r < t;) n += e[r].clientX, i += e[r].clientY, r++;
        return {
            x: me(n / t),
            y: me(i / t)
        }
    }

    function L(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }

    function D(e, t) {
        return e === t ? Ie : ge(e) >= ge(t) ? e < 0 ? Pe : Oe : t < 0 ? Me : Ne
    }

    function q(e, t, n) {
        n || (n = We);
        var i = t[n[0]] - e[n[0]],
            r = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + r * r)
    }

    function I(e, t, n) {
        n || (n = We);
        var i = t[n[0]] - e[n[0]],
            r = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }

    function P(e, t) {
        return I(t[1], t[0], Re) + I(e[1], e[0], Re)
    }

    function O(e, t) {
        return q(t[0], t[1], Re) / q(e[0], e[1], Re)
    }

    function M() {
        this.evEl = Xe, this.evWin = Ye, this.pressed = !1, S.apply(this, arguments)
    }

    function N() {
        this.evEl = Ve, this.evWin = Qe, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function H() {
        this.evTarget = Ke, this.evWin = Ze, this.started = !1, S.apply(this, arguments)
    }

    function _(e, t) {
        var n = y(e.touches),
            i = y(e.changedTouches);
        return t & (De | qe) && (n = b(n.concat(i), "identifier", !0)), [n, i]
    }

    function F() {
        this.evTarget = tt, this.targetIds = {}, S.apply(this, arguments)
    }

    function W(e, t) {
        var n = y(e.touches),
            i = this.targetIds;
        if (t & (Ae | Le) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
        var r, o, s = y(e.changedTouches),
            a = [],
            l = this.target;
        if (o = n.filter(function (e) {
                return p(e.target, l)
            }), t === Ae)
            for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
        for (r = 0; r < s.length;) i[s[r].identifier] && a.push(s[r]), t & (De | qe) && delete i[s[r].identifier], r++;
        return a.length ? [b(o.concat(a), "identifier", !0), a] : void 0
    }

    function R() {
        S.apply(this, arguments);
        var e = u(this.handler, this);
        this.touch = new F(this.manager, e), this.mouse = new M(this.manager, e), this.primaryTouch = null, this.lastTouches = []
    }

    function B(e, t) {
        e & Ae ? (this.primaryTouch = t.changedPointers[0].identifier, X.call(this, t)) : e & (De | qe) && X.call(this, t)
    }

    function X(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches,
                r = function () {
                    var e = i.indexOf(n);
                    e > -1 && i.splice(e, 1)
                };
            setTimeout(r, nt)
        }
    }

    function Y(e) {
        for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var r = this.lastTouches[i],
                o = Math.abs(t - r.x),
                s = Math.abs(n - r.y);
            if (o <= it && s <= it) return !0
        }
        return !1
    }

    function U(e, t) {
        this.manager = e, this.set(t)
    }

    function G(e) {
        if (m(e, ut)) return ut;
        var t = m(e, ct),
            n = m(e, dt);
        return t && n ? ut : t || n ? t ? ct : dt : m(e, lt) ? lt : at
    }

    function V() {
        if (!ot) return !1;
        var t = {},
            n = e.CSS && e.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
            t[i] = !n || e.CSS.supports("touch-action", i)
        }), t
    }

    function Q(e) {
        this.options = de({}, this.defaults, e || {}), this.id = w(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = ft, this.simultaneous = {}, this.requireFail = []
    }

    function J(e) {
        return e & yt ? "cancel" : e & gt ? "end" : e & mt ? "move" : e & pt ? "start" : ""
    }

    function K(e) {
        return e == Ne ? "down" : e == Me ? "up" : e == Pe ? "left" : e == Oe ? "right" : ""
    }

    function Z(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }

    function ee() {
        Q.apply(this, arguments)
    }

    function te() {
        ee.apply(this, arguments), this.pX = null, this.pY = null
    }

    function ne() {
        ee.apply(this, arguments)
    }

    function ie() {
        Q.apply(this, arguments), this._timer = null, this._input = null
    }

    function re() {
        ee.apply(this, arguments)
    }

    function oe() {
        ee.apply(this, arguments)
    }

    function se() {
        Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ae(e, t) {
        return t = t || {}, t.recognizers = d(t.recognizers, ae.defaults.preset), new le(e, t)
    }

    function le(e, t) {
        this.options = de({}, ae.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = C(this), this.touchAction = new U(this, this.options.touchAction), ue(this, !0), s(this.options.recognizers, function (e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
    }

    function ue(e, t) {
        var n = e.element;
        if (n.style) {
            var i;
            s(e.options.cssProps, function (r, o) {
                i = x(n.style, o), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = e.oldCssProps[i] || ""
            }), t || (e.oldCssProps = {})
        }
    }

    function ce(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var de, he = ["", "webkit", "Moz", "MS", "ms", "o"],
        fe = t.createElement("div"),
        pe = "function",
        me = Math.round,
        ge = Math.abs,
        ve = Date.now;
    de = "function" != typeof Object.assign ? function (e) {
        if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (r !== i && null !== r)
                for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
        }
        return t
    } : Object.assign;
    var ye = a(function (e, t, n) {
            for (var r = Object.keys(t), o = 0; o < r.length;)(!n || n && e[r[o]] === i) && (e[r[o]] = t[r[o]]), o++;
            return e
        }, "extend", "Use `assign`."),
        be = a(function (e, t) {
            return ye(e, t, !0)
        }, "merge", "Use `assign`."),
        xe = 1,
        we = /mobile|tablet|ip(ad|hone|od)|android/i,
        Te = "ontouchstart" in e,
        Se = x(e, "PointerEvent") !== i,
        Ce = Te && we.test(navigator.userAgent),
        Ee = "touch",
        $e = "pen",
        ke = "mouse",
        je = "kinect",
        ze = 25,
        Ae = 1,
        Le = 2,
        De = 4,
        qe = 8,
        Ie = 1,
        Pe = 2,
        Oe = 4,
        Me = 8,
        Ne = 16,
        He = Pe | Oe,
        _e = Me | Ne,
        Fe = He | _e,
        We = ["x", "y"],
        Re = ["clientX", "clientY"];
    S.prototype = {
        handler: function () {},
        init: function () {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(T(this.element), this.evWin, this.domHandler)
        },
        destroy: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(T(this.element), this.evWin, this.domHandler)
        }
    };
    var Be = {
            mousedown: Ae,
            mousemove: Le,
            mouseup: De
        },
        Xe = "mousedown",
        Ye = "mousemove mouseup";
    l(M, S, {
        handler: function (e) {
            var t = Be[e.type];
            t & Ae && 0 === e.button && (this.pressed = !0), t & Le && 1 !== e.which && (t = De), this.pressed && (t & De && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: ke,
                srcEvent: e
            }))
        }
    });
    var Ue = {
            pointerdown: Ae,
            pointermove: Le,
            pointerup: De,
            pointercancel: qe,
            pointerout: qe
        },
        Ge = {
            2: Ee,
            3: $e,
            4: ke,
            5: je
        },
        Ve = "pointerdown",
        Qe = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Ve = "MSPointerDown", Qe = "MSPointerMove MSPointerUp MSPointerCancel"), l(N, S, {
        handler: function (e) {
            var t = this.store,
                n = !1,
                i = e.type.toLowerCase().replace("ms", ""),
                r = Ue[i],
                o = Ge[e.pointerType] || e.pointerType,
                s = o == Ee,
                a = v(t, e.pointerId, "pointerId");
            r & Ae && (0 === e.button || s) ? a < 0 && (t.push(e), a = t.length - 1) : r & (De | qe) && (n = !0), a < 0 || (t[a] = e, this.callback(this.manager, r, {
                pointers: t,
                changedPointers: [e],
                pointerType: o,
                srcEvent: e
            }), n && t.splice(a, 1))
        }
    });
    var Je = {
            touchstart: Ae,
            touchmove: Le,
            touchend: De,
            touchcancel: qe
        },
        Ke = "touchstart",
        Ze = "touchstart touchmove touchend touchcancel";
    l(H, S, {
        handler: function (e) {
            var t = Je[e.type];
            if (t === Ae && (this.started = !0), this.started) {
                var n = _.call(this, e, t);
                t & (De | qe) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: Ee,
                    srcEvent: e
                })
            }
        }
    });
    var et = {
            touchstart: Ae,
            touchmove: Le,
            touchend: De,
            touchcancel: qe
        },
        tt = "touchstart touchmove touchend touchcancel";
    l(F, S, {
        handler: function (e) {
            var t = et[e.type],
                n = W.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: Ee,
                srcEvent: e
            })
        }
    });
    var nt = 2500,
        it = 25;
    l(R, S, {
        handler: function (e, t, n) {
            var i = n.pointerType == Ee,
                r = n.pointerType == ke;
            if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i) B.call(this, t, n);
                else if (r && Y.call(this, n)) return;
                this.callback(e, t, n)
            }
        },
        destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var rt = x(fe.style, "touchAction"),
        ot = rt !== i,
        st = "compute",
        at = "auto",
        lt = "manipulation",
        ut = "none",
        ct = "pan-x",
        dt = "pan-y",
        ht = V();
    U.prototype = {
        set: function (e) {
            e == st && (e = this.compute()), ot && this.manager.element.style && ht[e] && (this.manager.element.style[rt] = e), this.actions = e.toLowerCase().trim()
        },
        update: function () {
            this.set(this.manager.options.touchAction)
        },
        compute: function () {
            var e = [];
            return s(this.manager.recognizers, function (t) {
                c(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }), G(e.join(" "))
        },
        preventDefaults: function (e) {
            var t = e.srcEvent,
                n = e.offsetDirection;
            if (this.manager.session.prevented) return void t.preventDefault();
            var i = this.actions,
                r = m(i, ut) && !ht[ut],
                o = m(i, dt) && !ht[dt],
                s = m(i, ct) && !ht[ct];
            if (r) {
                var a = 1 === e.pointers.length,
                    l = e.distance < 2,
                    u = e.deltaTime < 250;
                if (a && l && u) return
            }
            return s && o ? void 0 : r || o && n & He || s && n & _e ? this.preventSrc(t) : void 0
        },
        preventSrc: function (e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var ft = 1,
        pt = 2,
        mt = 4,
        gt = 8,
        vt = gt,
        yt = 16,
        bt = 32;
    Q.prototype = {
        defaults: {},
        set: function (e) {
            return de(this.options, e), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function (e) {
            if (o(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return e = Z(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
        },
        dropRecognizeWith: function (e) {
            return o(e, "dropRecognizeWith", this) ? this : (e = Z(e, this), delete this.simultaneous[e.id], this)
        },
        requireFailure: function (e) {
            if (o(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return e = Z(e, this), -1 === v(t, e) && (t.push(e), e.requireFailure(this)), this
        },
        dropRequireFailure: function (e) {
            if (o(e, "dropRequireFailure", this)) return this;
            e = Z(e, this);
            var t = v(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function (e) {
            return !!this.simultaneous[e.id]
        },
        emit: function (e) {
            function t(t) {
                n.manager.emit(t, e)
            }
            var n = this,
                i = this.state;
            i < gt && t(n.options.event + J(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= gt && t(n.options.event + J(i))
        },
        tryEmit: function (e) {
            if (this.canEmit()) return this.emit(e);
            this.state = bt
        },
        canEmit: function () {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (bt | ft))) return !1;
                e++
            }
            return !0
        },
        recognize: function (e) {
            var t = de({}, e);
            if (!c(this.options.enable, [this, t])) return this.reset(), void(this.state = bt);
            this.state & (vt | yt | bt) && (this.state = ft), this.state = this.process(t), this.state & (pt | mt | gt | yt) && this.tryEmit(t)
        },
        process: function () {},
        getTouchAction: function () {},
        reset: function () {}
    }, l(ee, Q, {
        defaults: {
            pointers: 1
        },
        attrTest: function (e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function (e) {
            var t = this.state,
                n = e.eventType,
                i = t & (pt | mt),
                r = this.attrTest(e);
            return i && (n & qe || !r) ? t | yt : i || r ? n & De ? t | gt : t & pt ? t | mt : pt : bt
        }
    }), l(te, ee, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Fe
        },
        getTouchAction: function () {
            var e = this.options.direction,
                t = [];
            return e & He && t.push(dt), e & _e && t.push(ct), t
        },
        directionTest: function (e) {
            var t = this.options,
                n = !0,
                i = e.distance,
                r = e.direction,
                o = e.deltaX,
                s = e.deltaY;
            return r & t.direction || (t.direction & He ? (r = 0 === o ? Ie : o < 0 ? Pe : Oe, n = o != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === s ? Ie : s < 0 ? Me : Ne, n = s != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
        },
        attrTest: function (e) {
            return ee.prototype.attrTest.call(this, e) && (this.state & pt || !(this.state & pt) && this.directionTest(e))
        },
        emit: function (e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = K(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
        }
    }), l(ne, ee, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [ut]
        },
        attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & pt)
        },
        emit: function (e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }), l(ie, Q, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function () {
            return [at]
        },
        process: function (e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                o = e.deltaTime > t.time;
            if (this._input = e, !i || !n || e.eventType & (De | qe) && !o) this.reset();
            else if (e.eventType & Ae) this.reset(), this._timer = r(function () {
                this.state = vt, this.tryEmit()
            }, t.time, this);
            else if (e.eventType & De) return vt;
            return bt
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function (e) {
            this.state === vt && (e && e.eventType & De ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ve(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(re, ee, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [ut]
        },
        attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & pt)
        }
    }), l(oe, ee, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: He | _e,
            pointers: 1
        },
        getTouchAction: function () {
            return te.prototype.getTouchAction.call(this)
        },
        attrTest: function (e) {
            var t, n = this.options.direction;
            return n & (He | _e) ? t = e.overallVelocity : n & He ? t = e.overallVelocityX : n & _e && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && ge(t) > this.options.velocity && e.eventType & De
        },
        emit: function (e) {
            var t = K(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), l(se, Q, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function () {
            return [lt]
        },
        process: function (e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                o = e.deltaTime < t.time;
            if (this.reset(), e.eventType & Ae && 0 === this.count) return this.failTimeout();
            if (i && o && n) {
                if (e.eventType != De) return this.failTimeout();
                var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
                    a = !this.pCenter || q(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp, this.pCenter = e.center, a && s ? this.count += 1 : this.count = 1, this._input = e;
                if (0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = r(function () {
                    this.state = vt, this.tryEmit()
                }, t.interval, this), pt) : vt
            }
            return bt
        },
        failTimeout: function () {
            return this._timer = r(function () {
                this.state = bt
            }, this.options.interval, this), bt
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function () {
            this.state == vt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ae.VERSION = "2.0.7", ae.defaults = {
        domEvents: !1,
        touchAction: st,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [re, {
                enable: !1
            }],
            [ne, {
                    enable: !1
                },
                ["rotate"]
            ],
            [oe, {
                direction: He
            }],
            [te, {
                    direction: He
                },
                ["swipe"]
            ],
            [se],
            [se, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [ie]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var xt = 2;
    le.prototype = {
        set: function (e) {
            return de(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        },
        stop: function (e) {
            this.session.stopped = e ? xt : 1
        },
        recognize: function (e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers,
                    r = t.curRecognizer;
                (!r || r && r.state & vt) && (r = t.curRecognizer = null);
                for (var o = 0; o < i.length;) n = i[o], t.stopped === xt || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (pt | mt | gt) && (r = t.curRecognizer = n), o++
            }
        },
        get: function (e) {
            if (e instanceof Q) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
            return null
        },
        add: function (e) {
            if (o(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        },
        remove: function (e) {
            if (o(e, "remove", this)) return this;
            if (e = this.get(e)) {
                var t = this.recognizers,
                    n = v(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
            }
            return this
        },
        on: function (e, t) {
            if (e !== i && t !== i) {
                var n = this.handlers;
                return s(g(e), function (e) {
                    n[e] = n[e] || [], n[e].push(t)
                }), this
            }
        },
        off: function (e, t) {
            if (e !== i) {
                var n = this.handlers;
                return s(g(e), function (e) {
                    t ? n[e] && n[e].splice(v(n[e], t), 1) : delete n[e]
                }), this
            }
        },
        emit: function (e, t) {
            this.options.domEvents && ce(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e, t.preventDefault = function () {
                    t.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](t), i++
            }
        },
        destroy: function () {
            this.element && ue(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, de(ae, {
        INPUT_START: Ae,
        INPUT_MOVE: Le,
        INPUT_END: De,
        INPUT_CANCEL: qe,
        STATE_POSSIBLE: ft,
        STATE_BEGAN: pt,
        STATE_CHANGED: mt,
        STATE_ENDED: gt,
        STATE_RECOGNIZED: vt,
        STATE_CANCELLED: yt,
        STATE_FAILED: bt,
        DIRECTION_NONE: Ie,
        DIRECTION_LEFT: Pe,
        DIRECTION_RIGHT: Oe,
        DIRECTION_UP: Me,
        DIRECTION_DOWN: Ne,
        DIRECTION_HORIZONTAL: He,
        DIRECTION_VERTICAL: _e,
        DIRECTION_ALL: Fe,
        Manager: le,
        Input: S,
        TouchAction: U,
        TouchInput: F,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: R,
        SingleTouchInput: H,
        Recognizer: Q,
        AttrRecognizer: ee,
        Tap: se,
        Pan: te,
        Swipe: oe,
        Pinch: ne,
        Rotate: re,
        Press: ie,
        on: h,
        off: f,
        each: s,
        merge: be,
        extend: ye,
        assign: de,
        inherit: l,
        bindFn: u,
        prefixed: x
    }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = ae, "function" == typeof define && define.amd ? define(function () {
        return ae
    }) : "undefined" != typeof module && module.exports ? module.exports = ae : e[n] = ae
}(window, document, "Hammer"),
function (e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function (e, t) {
    "use strict";

    function n(n, o, a) {
        function l(e, t, i) {
            var r, o = "$()." + n + '("' + t + '")';
            return e.each(function (e, l) {
                var u = a.data(l, n);
                if (!u) return void s(n + " not initialized. Cannot call methods, i.e. " + o);
                var c = u[t];
                if (!c || "_" == t.charAt(0)) return void s(o + " is not a valid method");
                var d = c.apply(u, i);
                r = void 0 === r ? d : r
            }), void 0 !== r ? r : e
        }

        function u(e, t) {
            e.each(function (e, i) {
                var r = a.data(i, n);
                r ? (r.option(t), r._init()) : (r = new o(i, t), a.data(i, n, r))
            })
        }(a = a || t || e.jQuery) && (o.prototype.option || (o.prototype.option = function (e) {
            a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
        }), a.fn[n] = function (e) {
            if ("string" == typeof e) {
                return l(this, e, r.call(arguments, 1))
            }
            return u(this, e), this
        }, i(a))
    }

    function i(e) {
        !e || e && e.bridget || (e.bridget = n)
    }
    var r = Array.prototype.slice,
        o = e.console,
        s = void 0 === o ? function () {} : function (e) {
            o.error(e)
        };
    return i(t || e.jQuery), n
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            n = n.slice(0), t = t || [];
            for (var i = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
                var o = n[r];
                i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
    "use strict";
    var e = function () {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n],
                r = i + "MatchesSelector";
            if (e[r]) return r
        }
    }();
    return function (t, n) {
        return t[e](n)
    }
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function (e, t) {
    var n = {};
    n.extend = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }, n.modulo = function (e, t) {
        return (e % t + t) % t
    };
    var i = Array.prototype.slice;
    n.makeArray = function (e) {
        return Array.isArray(e) ? e : null === e || void 0 === e ? [] : "object" == typeof e && "number" == typeof e.length ? i.call(e) : [e]
    }, n.removeFrom = function (e, t) {
        var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
    }, n.getParent = function (e, n) {
        for (; e.parentNode && e != document.body;)
            if (e = e.parentNode, t(e, n)) return e
    }, n.getQueryElement = function (e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, n.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, n.filterFindElements = function (e, i) {
        e = n.makeArray(e);
        var r = [];
        return e.forEach(function (e) {
            if (e instanceof HTMLElement) {
                if (!i) return void r.push(e);
                t(e, i) && r.push(e);
                for (var n = e.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
            }
        }), r
    }, n.debounceMethod = function (e, t, n) {
        n = n || 100;
        var i = e.prototype[t],
            r = t + "Timeout";
        e.prototype[t] = function () {
            var e = this[r];
            clearTimeout(e);
            var t = arguments,
                o = this;
            this[r] = setTimeout(function () {
                i.apply(o, t), delete o[r]
            }, n)
        }
    }, n.docReady = function (e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, n.toDashed = function (e) {
        return e.replace(/(.)([A-Z])/g, function (e, t, n) {
            return t + "-" + n
        }).toLowerCase()
    };
    var r = e.console;
    return n.htmlInit = function (t, i) {
        n.docReady(function () {
            var o = n.toDashed(i),
                s = "data-" + o,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + o),
                u = n.makeArray(a).concat(n.makeArray(l)),
                c = s + "-options",
                d = e.jQuery;
            u.forEach(function (e) {
                var n, o = e.getAttribute(s) || e.getAttribute(c);
                try {
                    n = o && JSON.parse(o)
                } catch (t) {
                    return void(r && r.error("Error parsing " + s + " on " + e.className + ": " + t))
                }
                var a = new t(e, n);
                d && d.data(e, i, a)
            })
        })
    }, n
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/core", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("fizzy-ui-utils")) : e.InfiniteScroll = t(e, e.EvEmitter, e.fizzyUIUtils)
}(window, function (e, t, n) {
    function i(e, t) {
        var s = n.getQueryElement(e);
        if (!s) return void console.error("Bad element for InfiniteScroll: " + (s || e));
        if (e = s, e.infiniteScrollGUID) {
            var a = o[e.infiniteScrollGUID];
            return a.option(t), a
        }
        this.element = e, this.options = n.extend({}, i.defaults), this.option(t), r && (this.$element = r(this.element)), this.create()
    }
    var r = e.jQuery,
        o = {};
    i.defaults = {}, i.create = {}, i.destroy = {};
    var s = i.prototype;
    n.extend(s, t.prototype);
    var a = 0;
    s.create = function () {
        var e = this.guid = ++a;
        if (this.element.infiniteScrollGUID = e, o[e] = this, this.pageIndex = 1, this.loadCount = 0, this.updateGetPath(), !(this.getPath && this.getPath())) return void console.error("Disabling InfiniteScroll");
        this.updateGetAbsolutePath(), this.log("initialized", [this.element.className]), this.callOnInit();
        for (var t in i.create) i.create[t].call(this)
    }, s.option = function (e) {
        n.extend(this.options, e)
    }, s.callOnInit = function () {
        var e = this.options.onInit;
        e && e.call(this, this)
    }, s.dispatchEvent = function (e, t, n) {
        this.log(e, n);
        var i = t ? [t].concat(n) : n;
        if (this.emitEvent(e, i), r && this.$element) {
            e += ".infiniteScroll";
            var o = e;
            if (t) {
                var s = r.Event(t);
                s.type = e, o = s
            }
            this.$element.trigger(o, n)
        }
    };
    var l = {
        initialized: function (e) {
            return "on " + e
        },
        request: function (e) {
            return "URL: " + e
        },
        load: function (e, t) {
            return (e.title || "") + ". URL: " + t
        },
        error: function (e, t) {
            return e + ". URL: " + t
        },
        append: function (e, t, n) {
            return n.length + " items. URL: " + t
        },
        last: function (e, t) {
            return "URL: " + t
        },
        history: function (e, t) {
            return "URL: " + t
        },
        pageIndex: function (e, t) {
            return "current page determined to be: " + e + " from " + t
        }
    };
    s.log = function (e, t) {
        if (this.options.debug) {
            var n = "[InfiniteScroll] " + e,
                i = l[e];
            i && (n += ". " + i.apply(this, t)), console.log(n)
        }
    }, s.updateMeasurements = function () {
        this.windowHeight = e.innerHeight;
        var t = this.element.getBoundingClientRect();
        this.top = t.top + e.pageYOffset
    }, s.updateScroller = function () {
        var t = this.options.elementScroll;
        if (!t) return void(this.scroller = e);
        if (this.scroller = !0 === t ? this.element : n.getQueryElement(t), !this.scroller) throw "Unable to find elementScroll: " + t
    }, s.updateGetPath = function () {
        var e = this.options.path;
        if (!e) return void console.error("InfiniteScroll path option required. Set as: " + e);
        var t = typeof e;
        return "function" == t ? void(this.getPath = e) : "string" == t && e.match("{{#}}") ? void this.updateGetPathTemplate(e) : void this.updateGetPathSelector(e)
    }, s.updateGetPathTemplate = function (e) {
        this.getPath = function () {
            var t = this.pageIndex + 1;
            return e.replace("{{#}}", t)
        }.bind(this);
        var t = e.replace("{{#}}", "(\\d\\d?\\d?)"),
            n = new RegExp(t),
            i = location.href.match(n);
        i && (this.pageIndex = parseInt(i[1], 10), this.log("pageIndex", [this.pageIndex, "template string"]))
    };
    var u = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];
    return s.updateGetPathSelector = function (e) {
        var t = document.querySelector(e);
        if (!t) return void console.error("Bad InfiniteScroll path option. Next link not found: " + e);
        for (var n, i, r = t.getAttribute("href"), o = 0; r && o < u.length; o++) {
            i = u[o];
            var s = r.match(i);
            if (s) {
                n = s.slice(1);
                break
            }
        }
        return n ? (this.isPathSelector = !0, this.getPath = function () {
            var e = this.pageIndex + 1;
            return n[0] + e + n[2]
        }.bind(this), this.pageIndex = parseInt(n[1], 10) - 1, void this.log("pageIndex", [this.pageIndex, "next link"])) : void console.error("InfiniteScroll unable to parse next link href: " + r)
    }, s.updateGetAbsolutePath = function () {
        var e = this.getPath();
        if (e.match(/^http/) || e.match(/^\//)) return void(this.getAbsolutePath = this.getPath);
        var t = location.pathname,
            n = t.substring(0, t.lastIndexOf("/"));
        this.getAbsolutePath = function () {
            return n + "/" + this.getPath()
        }
    }, i.create.hideNav = function () {
        var e = n.getQueryElement(this.options.hideNav);
        e && (e.style.display = "none", this.nav = e)
    }, i.destroy.hideNav = function () {
        this.nav && (this.nav.style.display = "")
    }, s.destroy = function () {
        this.allOff();
        for (var e in i.destroy) i.destroy[e].call(this);
        delete this.element.infiniteScrollGUID, delete o[this.guid], r && this.$element && r.removeData(this.element, "infiniteScroll")
    }, i.throttle = function (e, t) {
        t = t || 200;
        var n, i;
        return function () {
            var r = +new Date,
                o = arguments,
                s = function () {
                    n = r, e.apply(this, o)
                }.bind(this);
            n && r < n + t ? (clearTimeout(i), i = setTimeout(s, t)) : s()
        }
    }, i.data = function (e) {
        e = n.getQueryElement(e);
        var t = e && e.infiniteScrollGUID;
        return t && o[t]
    }, i.setJQuery = function (e) {
        r = e
    }, n.htmlInit(i, "infinite-scroll"), s._init = function () {}, r && r.bridget && r.bridget("infiniteScroll", i), i
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/page-load", ["./core"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core")) : t(e, e.InfiniteScroll)
}(window, function (e, t) {
    function n(e) {
        for (var t = document.createDocumentFragment(), n = 0; e && n < e.length; n++) t.appendChild(e[n]);
        return t
    }

    function i(e) {
        for (var t = e.querySelectorAll("script"), n = 0; n < t.length; n++) {
            var i = t[n],
                o = document.createElement("script");
            r(i, o), o.innerHTML = i.innerHTML, i.parentNode.replaceChild(o, i)
        }
    }

    function r(e, t) {
        for (var n = e.attributes, i = 0; i < n.length; i++) {
            var r = n[i];
            t.setAttribute(r.name, r.value)
        }
    }

    function o(e, t, n, i) {
        var r = new XMLHttpRequest;
        r.open("GET", e, !0), r.responseType = t || "", r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.onload = function () {
            if (200 == r.status) n(r.response);
            else {
                var e = new Error(r.statusText);
                i(e)
            }
        }, r.onerror = function () {
            var t = new Error("Network error requesting " + e);
            i(t)
        }, r.send()
    }
    var s = t.prototype;
    return t.defaults.loadOnScroll = !0, t.defaults.checkLastPage = !0, t.defaults.responseType = "document", t.create.pageLoad = function () {
        this.canLoad = !0, this.on("scrollThreshold", this.onScrollThresholdLoad), this.on("load", this.checkLastPage), this.options.outlayer && this.on("append", this.onAppendOutlayer)
    }, s.onScrollThresholdLoad = function () {
        this.options.loadOnScroll && this.loadNextPage()
    }, s.loadNextPage = function () {
        if (!this.isLoading && this.canLoad) {
            var e = this.getAbsolutePath();
            this.isLoading = !0;
            var t = function (t) {
                    this.onPageLoad(t, e)
                }.bind(this),
                n = function (t) {
                    this.onPageError(t, e)
                }.bind(this);
            o(e, this.options.responseType, t, n), this.dispatchEvent("request", null, [e])
        }
    }, s.onPageLoad = function (e, t) {
        return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [e, t]), this.appendNextPage(e, t), e
    }, s.appendNextPage = function (e, t) {
        var i = this.options.append;
        if ("document" == this.options.responseType && i) {
            var r = e.querySelectorAll(i),
                o = n(r),
                s = function () {
                    this.appendItems(r, o), this.isLoading = !1, this.dispatchEvent("append", null, [e, t, r])
                }.bind(this);
            this.options.outlayer ? this.appendOutlayerItems(o, s) : s()
        }
    }, s.appendItems = function (e, t) {
        e && e.length && (t = t || n(e), i(t), this.element.appendChild(t))
    }, s.appendOutlayerItems = function (n, i) {
        var r = t.imagesLoaded || e.imagesLoaded;
        return r ? void r(n, i) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),
            void(this.isLoading = !1))
    }, s.onAppendOutlayer = function (e, t, n) {
        this.options.outlayer.appended(n)
    }, s.checkLastPage = function (e, t) {
        var n = this.options.checkLastPage;
        if (n) {
            var i = this.options.path;
            if ("function" == typeof i) {
                if (!this.getPath()) return void this.lastPageReached(e, t)
            }
            var r;
            if ("string" == typeof n ? r = n : this.isPathSelector && (r = i), r && e.querySelector) {
                e.querySelector(r) || this.lastPageReached(e, t)
            }
        }
    }, s.lastPageReached = function (e, t) {
        this.canLoad = !1, this.dispatchEvent("last", null, [e, t])
    }, s.onPageError = function (e, t) {
        return this.isLoading = !1, this.canLoad = !1, this.dispatchEvent("error", null, [e, t]), e
    }, t.create.prefill = function () {
        if (this.options.prefill) {
            var e = this.options.append;
            if (!e) return void console.error("append option required for prefill. Set as :" + e);
            this.updateMeasurements(), this.updateScroller(), this.isPrefilling = !0, this.on("append", this.prefill), this.once("error", this.stopPrefill), this.once("last", this.stopPrefill), this.prefill()
        }
    }, s.prefill = function () {
        var e = this.getPrefillDistance();
        this.isPrefilling = e >= 0, this.isPrefilling ? (this.log("prefill"), this.loadNextPage()) : this.stopPrefill()
    }, s.getPrefillDistance = function () {
        return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight
    }, s.stopPrefill = function () {
        this.log("stopPrefill"), this.off("append", this.prefill)
    }, t
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/scroll-watch", ["./core", "fizzy-ui-utils/utils"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, n) {
    var i = t.prototype;
    return t.defaults.scrollThreshold = 400, t.create.scrollWatch = function () {
        this.pageScrollHandler = this.onPageScroll.bind(this), this.resizeHandler = this.onResize.bind(this);
        var e = this.options.scrollThreshold;
        (e || 0 === e) && this.enableScrollWatch()
    }, t.destroy.scrollWatch = function () {
        this.disableScrollWatch()
    }, i.enableScrollWatch = function () {
        this.isScrollWatching || (this.isScrollWatching = !0, this.updateMeasurements(), this.updateScroller(), this.on("last", this.disableScrollWatch), this.bindScrollWatchEvents(!0))
    }, i.disableScrollWatch = function () {
        this.isScrollWatching && (this.bindScrollWatchEvents(!1), delete this.isScrollWatching)
    }, i.bindScrollWatchEvents = function (t) {
        var n = t ? "addEventListener" : "removeEventListener";
        this.scroller[n]("scroll", this.pageScrollHandler), e[n]("resize", this.resizeHandler)
    }, i.onPageScroll = t.throttle(function () {
        this.getBottomDistance() <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold")
    }), i.getBottomDistance = function () {
        return this.options.elementScroll ? this.getElementBottomDistance() : this.getWindowBottomDistance()
    }, i.getWindowBottomDistance = function () {
        return this.top + this.element.clientHeight - (e.pageYOffset + this.windowHeight)
    }, i.getElementBottomDistance = function () {
        return this.scroller.scrollHeight - (this.scroller.scrollTop + this.scroller.clientHeight)
    }, i.onResize = function () {
        this.updateMeasurements()
    }, n.debounceMethod(t, "onResize", 150), t
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/history", ["./core", "fizzy-ui-utils/utils"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, n) {
    var i = t.prototype;
    t.defaults.history = "replace";
    var r = document.createElement("a");
    return t.create.history = function () {
        if (this.options.history) {
            r.href = this.getAbsolutePath();
            return (r.origin || r.protocol + "//" + r.host) == location.origin ? void(this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad()) : void console.error("[InfiniteScroll] cannot set history with different origin: " + r.origin + " on " + location.origin + " . History behavior disabled.")
        }
    }, i.createHistoryAppend = function () {
        this.updateMeasurements(), this.updateScroller(), this.scrollPages = [{
            top: 0,
            path: location.href,
            title: document.title
        }], this.scrollPageIndex = 0, this.scrollHistoryHandler = this.onScrollHistory.bind(this), this.unloadHandler = this.onUnload.bind(this), this.scroller.addEventListener("scroll", this.scrollHistoryHandler), this.on("append", this.onAppendHistory), this.bindHistoryAppendEvents(!0)
    }, i.bindHistoryAppendEvents = function (t) {
        var n = t ? "addEventListener" : "removeEventListener";
        this.scroller[n]("scroll", this.scrollHistoryHandler), e[n]("unload", this.unloadHandler)
    }, i.createHistoryPageLoad = function () {
        this.on("load", this.onPageLoadHistory)
    }, t.destroy.history = i.destroyHistory = function () {
        this.options.history && this.options.append && this.bindHistoryAppendEvents(!1)
    }, i.onAppendHistory = function (e, t, n) {
        if (n && n.length) {
            var i = n[0],
                o = this.getElementScrollY(i);
            r.href = t, this.scrollPages.push({
                top: o,
                path: r.href,
                title: e.title
            })
        }
    }, i.getElementScrollY = function (e) {
        return this.options.elementScroll ? this.getElementElementScrollY(e) : this.getElementWindowScrollY(e)
    }, i.getElementWindowScrollY = function (t) {
        return t.getBoundingClientRect().top + e.pageYOffset
    }, i.getElementElementScrollY = function (e) {
        return e.offsetTop - this.top
    }, i.onScrollHistory = function () {
        for (var e, t, n = this.getScrollViewY(), i = 0; i < this.scrollPages.length; i++) {
            var r = this.scrollPages[i];
            if (r.top >= n) break;
            e = i, t = r
        }
        e != this.scrollPageIndex && (this.scrollPageIndex = e, this.setHistory(t.title, t.path))
    }, n.debounceMethod(t, "onScrollHistory", 150), i.getScrollViewY = function () {
        return this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : e.pageYOffset + this.windowHeight / 2
    }, i.setHistory = function (e, t) {
        var n = this.options.history;
        n && history[n + "State"] && (history[n + "State"](null, e, t), this.options.historyTitle && (document.title = e), this.dispatchEvent("history", null, [e, t]))
    }, i.onUnload = function () {
        var t = this.scrollPageIndex;
        if (0 !== t) {
            var n = this.scrollPages[t],
                i = e.pageYOffset - n.top + this.top;
            this.destroyHistory(), scrollTo(0, i)
        }
    }, i.onPageLoadHistory = function (e, t) {
        this.setHistory(e.title, t)
    }, t
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/button", ["./core", "fizzy-ui-utils/utils"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, n) {
    function i(e, t) {
        this.element = e, this.infScroll = t, this.clickHandler = this.onClick.bind(this), this.element.addEventListener("click", this.clickHandler), t.on("request", this.disable.bind(this)), t.on("load", this.enable.bind(this)), t.on("error", this.hide.bind(this)), t.on("last", this.hide.bind(this))
    }
    return t.create.button = function () {
        var e = n.getQueryElement(this.options.button);
        if (e) return void(this.button = new i(e, this))
    }, t.destroy.button = function () {
        this.button && this.button.destroy()
    }, i.prototype.onClick = function (e) {
        e.preventDefault(), this.infScroll.loadNextPage()
    }, i.prototype.enable = function () {
        this.element.removeAttribute("disabled")
    }, i.prototype.disable = function () {
        this.element.disabled = "disabled"
    }, i.prototype.hide = function () {
        this.element.style.display = "none"
    }, i.prototype.destroy = function () {
        this.element.removeEventListener("click", this.clickHandler)
    }, t.Button = i, t
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/status", ["./core", "fizzy-ui-utils/utils"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, n) {
    function i(e) {
        o(e, "none")
    }

    function r(e) {
        o(e, "block")
    }

    function o(e, t) {
        e && (e.style.display = t)
    }
    var s = t.prototype;
    return t.create.status = function () {
        var e = n.getQueryElement(this.options.status);
        e && (this.statusElement = e, this.statusEventElements = {
            request: e.querySelector(".infinite-scroll-request"),
            error: e.querySelector(".infinite-scroll-error"),
            last: e.querySelector(".infinite-scroll-last")
        }, this.on("request", this.showRequestStatus), this.on("error", this.showErrorStatus), this.on("last", this.showLastStatus), this.bindHideStatus("on"))
    }, s.bindHideStatus = function (e) {
        var t = this.options.append ? "append" : "load";
        this[e](t, this.hideAllStatus)
    }, s.showRequestStatus = function () {
        this.showStatus("request")
    }, s.showErrorStatus = function () {
        this.showStatus("error")
    }, s.showLastStatus = function () {
        this.showStatus("last"), this.bindHideStatus("off")
    }, s.showStatus = function (e) {
        r(this.statusElement), this.hideStatusEventElements(), r(this.statusEventElements[e])
    }, s.hideAllStatus = function () {
        i(this.statusElement), this.hideStatusEventElements()
    }, s.hideStatusEventElements = function () {
        for (var e in this.statusEventElements) {
            i(this.statusEventElements[e])
        }
    }, t
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["infinite-scroll/js/core", "infinite-scroll/js/page-load", "infinite-scroll/js/scroll-watch", "infinite-scroll/js/history", "infinite-scroll/js/button", "infinite-scroll/js/status"], t) : "object" == typeof module && module.exports && (module.exports = t(require("./core"), require("./page-load"), require("./scroll-watch"), require("./history"), require("./button"), require("./status")))
}(window, function (e) {
    return e
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function i(e) {
        return Array.isArray(e) ? e : "object" == typeof e && "number" == typeof e.length ? u.call(e) : [e]
    }

    function r(e, t, o) {
        if (!(this instanceof r)) return new r(e, t, o);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = i(s), this.options = n({}, this.options), "function" == typeof t ? o = t : n(this.options, t), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (s || e))
    }

    function o(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var a = e.jQuery,
        l = e.console,
        u = Array.prototype.slice;
    r.prototype = Object.create(t.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, r.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && c[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var r = n[i];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (i = 0; i < o.length; i++) {
                    var s = o[i];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var r = i && i[2];
                r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
            }
    }, r.prototype.addImage = function (e) {
        var t = new o(e);
        this.images.push(t)
    }, r.prototype.addBackground = function (e, t) {
        var n = new s(e, t);
        this.images.push(n)
    }, r.prototype.check = function () {
        function e(e, n, i) {
            setTimeout(function () {
                t.progress(e, n, i)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, r.prototype.progress = function (e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + n, e, t)
    }, r.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, o.prototype = Object.create(t.prototype), o.prototype.check = function () {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, o.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, o.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, o.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(o.prototype), s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, r.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) && (a = t, a.fn.imagesLoaded = function (e, t) {
            return new r(this, e, t).jqDeferred.promise(a(this))
        })
    }, r.makeJQueryPlugin(), r
}),
function () {}.call(this),
    function () {
        window.$window = $(window), window.Helpers = {
            delay: function (e, t) {
                return setTimeout(t, e)
            },
            throttle: function (e, t) {
                var n, i, r, o;
                return n = !1, i = null, r = null, o = function () {
                    return n ? (i = arguments, void(r = this)) : (t.apply(this, arguments), n = !0, setTimeout(function () {
                        if (n = !1, i) return o.apply(r, i), i = r = null
                    }, e))
                }
            },
            throttleAlt: function (e, t) {
                var n, i;
                return i = null, n = 1,
                    function () {
                        if (!i) return t.apply(this, arguments), i = n, Helpers.delay(e, function () {
                            return i = null
                        })
                    }
            },
            debounce: function (e, t) {
                var n;
                return n = null,
                    function () {
                        var i, r, o;
                        return r = this, i = arguments, o = function () {
                            return n = null, t.apply(r, i)
                        }, clearTimeout(n), n = setTimeout(o, e)
                    }
            },
            onCSSAnimationEvent: function (e, t, n) {
                var i, r, o, s, a;
                for (s = ["webkit", "moz", "MS", "o", ""], a = [], i = 0, r = s.length; i < r; i++) o = s[i], o || (t = t.toLowerCase()), a.push(e.on("" + o + t, n));
                return a
            },
            shuffleChildren: function (e) {
                var t, n;
                for (t = e.children(), n = []; t.length;) n.push(e.append(t.splice(Math.floor(Math.random() * t.length), 1)[0]));
                return n
            },
            onImagesLoaded: function (e, t) {
                var n, i;
                return n = e.find("img"), i = n.length, i > 0 ? n.each(function (e, n) {
                    return n.complete && 0 !== n.naturalHeight ? 0 === (i -= 1) ? t() : void 0 : n.onload = function () {
                        if (0 === (i -= 1)) return t()
                    }
                }) : t()
            },
            invertColor: function (e, t) {
                var n, i, r;
                if (null == t && (t = !1), 0 === e.indexOf("#") && (e = e.slice(1)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), 6 !== e.length) throw new Error("Invalid HEX color.");
                return r = parseInt(e.slice(0, 2), 16), i = parseInt(e.slice(2, 4), 16), n = parseInt(e.slice(4, 6), 16), t ? .299 * r + .587 * i + .114 * n > 186 ? "#000000" : "#FFFFFF" : (r = (255 - r).toString(16), i = (255 - i).toString(16), n = (255 - n).toString(16), "#" + Helpers.padZero(r) + Helpers.padZero(i) + Helpers.padZero(n))
            },
            padZero: function (e, t) {
                var n;
                return t = t || 2, n = new Array(t).join("0"), (n + e).slice(-t)
            },
            shuffleArray: function (e) {
                var t, n, i;
                if (!((t = e.length) > 0)) return e;
                for (; --t;) n = Math.floor(Math.random() * (t + 1)), i = [e[n], e[t]], e[t] = i[0], e[n] = i[1];
                return t > 0 ? void 0 : e
            },
            randomFloatInRange: function (e, t) {
                return Math.random() * (t - e) + e
            },
            randomIntInRange: function (e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            },
            isScrolledIntoView: function (e, t) {
                var n, i, r, o;
                return null == t && (t = 0), n = $(e), i = $(window), o = i.scrollTop(), r = o + i.height(), n.offset().top - t < r
            },
            htmlDecode: function (e) {
                var t;
                return t = document.createElement("div"), t.innerHTML = e, 0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
            },
            requestTimeout: function (e, t) {
                var n, i, r;
                return r = (new Date).getTime(), i = new Object, n = function () {
                    var o, s;
                    return o = (new Date).getTime(), s = o - r, s >= e ? t.call() : i.value = window.requestAnimationFrame(n)
                }, i.value = window.requestAnimationFrame(n), i
            },
            clearRequestTimeout: function (e) {
                if (e) return window.cancelAnimationFrame(e.value)
            },
            onElResize: function (e, t, n, i) {
                var r, o;
                return r = e[t](), o = Helpers.debounce(n, function () {
                    var n;
                    if ((n = e[t]()) !== r) return r = n, i()
                }), $(window).on("resize", function () {
                    return o()
                })
            }
        }
    }.call(this),
    function () {
        window.BackToTop = {
            init: function (e, t) {
                var n, i, r, o, s;
                if (null == t && (t = {}), o = {
                        scrollableSelector: "html, body",
                        scrollingSelector: window,
                        threshold: 1e3
                    }, t = $.extend({}, o, t), n = $(e), n.length) return i = $(t.scrollableSelector), r = $(t.scrollingSelector), n.on("click", function (e) {
                    return e.preventDefault(), i.stop().animate({
                        scrollTop: 0
                    }, 500)
                }), s = Helpers.throttle(300, function (e) {
                    return n.toggleClass("-active", $(e.currentTarget).scrollTop() > t.threshold)
                }), r.on("scroll", function (e) {
                    return s(e)
                })
            }
        }
    }.call(this),
    function () {
        window.ExternalLinks = {
            init: function (e) {
                if (!window.previewMode) return $(e).each(function (e, t) {
                    try {
                        if (!RegExp("/" + window.domains.join("|") + "/").test(t.href)) return t.setAttribute("target", "_blank")
                    } catch (e) {
                        e
                    }
                })
            }
        }
    }.call(this),
    function () {
        window.Form = {
            init: function (e) {
                var t;
                if (null == e && (e = ".js-form"), t = $(e), t.length) return t.each(function (e) {
                    return function (t, n) {
                        return e.initForm($(n))
                    }
                }(this))
            },
            initForm: function (e) {
                return this.initAjaxForm(e), this.initUploadPreview(e), this.initMessages(e), this.initCaptcha(e)
            },
            initAjaxForm: function (e) {
                return e.ajaxForm({
                    beforeSubmit: function (t) {
                        return function () {
                            return t.toggleFormSubmit(e)
                        }
                    }(this),
                    success: function (t) {
                        return function () {
                            return t.toggleFormSubmit(e), t.showSuccessMessage(e), t.resetForm(e), e.trigger("form:success")
                        }
                    }(this),
                    error: function (t) {
                        return function (n) {
                            return t.toggleFormSubmit(e), t.showErrorMessage(e, n.responseJSON), e.trigger("form:error")
                        }
                    }(this),
                    complete: function (t) {
                        return function () {
                            return t.initCaptcha(e), "undefined" != typeof grecaptcha && null !== grecaptcha && grecaptcha.reset(), e.trigger("form:complete")
                        }
                    }(this)
                })
            },
            initUploadPreview: function (e) {
                return e.find("input[type=file]").on("change", function (t) {
                    var n, i;
                    if (null != (n = t.target.files[0]) && n.type.match("image.*")) return i = new FileReader, i.onloadend = function () {
                        return e.find(".js-preview").css("background-image", "url(" + i.result + ")")
                    }, i.readAsDataURL(n)
                })
            },
            initMessages: function (e) {
                var t;
                if (t = e.find(".js-message"), t.length) return t.on("click", ".js-close", function (e) {
                    return $(e.currentTarget).closest(".js-message").fadeOut(300)
                })
            },
            initCaptcha: function (e) {
                var t;
                if (t = e.find(".js-captcha"), t.length) return this.isAllRequiredFieldsFilled(e) ? t.show() : t.hide(), $(".js-required").on("input", function (n) {
                    return function () {
                        return n.isAllRequiredFieldsFilled(e) ? t.slideDown("fast") : t.slideUp("fast")
                    }
                }(this))
            },
            toggleFormSubmit: function (e) {
                var t, n;
                return t = e.find("button[type=submit]"), n = t.attr("value"), t.prop("disabled", !t.prop("disabled")).attr("value", t.data("disable")).data("disable", n)
            },
            showSuccessMessage: function (e) {
                var t;
                return e.find(".js-message").hide(), t = e.find(".js-success-message"), t.fadeIn(300)
            },
            showErrorMessage: function (e, t) {
                var n, i;
                if (null != t) return e.find(".js-message").hide(), i = e.find(".js-error-message"), n = i.find(".js-errors-list"), n.html(""), $.each(t, function () {
                    return n.append($("<li>").text(this))
                }), i.fadeIn(300)
            },
            resetForm: function (e) {
                var t;
                return e[0].reset(), t = e.find(".js-preview"), t.css("background-image", "url(" + t.data("blank") + ")")
            },
            isAllRequiredFieldsFilled: function (e) {
                return !e.find(".js-required").filter(function () {
                    return "" === $(this).val()
                }).length
            }
        }
    }.call(this),
    function () {
        window.LazyLoader = {
            init: function () {
                return $(document).on("lazyloaded", function (e) {
                    return $(e.target).parents(".js-lazy-image").first().addClass("-loaded")
                }), $(document).on("initLazyLoad", function () {
                    return lazySizes.init()
                })
            }
        }
    }.call(this),
    function () {
        window.Modal = function () {
            function e(e) {
                this.$modal = e, this.bindEvents()
            }
            return e.prototype.isOpen = !1, e.prototype.open = function () {
                return this.adjustModal(), this.$modal.addClass("-open"), this.isOpen = !0, Helpers.delay(150, function (e) {
                    return function () {
                        return e.$modal.trigger("modal:afterOpen")
                    }
                }(this))
            }, e.prototype.close = function () {
                return this.$modal.removeClass("-open"), this.removeModalAdjustments(), this.isOpen = !1, Helpers.delay(150, function (e) {
                    return function () {
                        return e.$modal.trigger("modal:afterClose")
                    }
                }(this))
            }, e.prototype.adjustModal = function () {
                var e;
                if (e = document.body.getBoundingClientRect(), $("body").css({
                        overflow: "hidden"
                    }), e.left + e.right < window.innerWidth) return $("body").css({
                    "padding-right": this.getScrollbarWidth() + "px"
                })
            }, e.prototype.removeModalAdjustments = function () {
                return $("body").css({
                    overflow: "",
                    "padding-right": ""
                })
            }, e.prototype.getScrollbarWidth = function () {
                var e, t;
                return e = document.createElement("div"), e.className = "modal-scrollbar-measure", document.body.appendChild(e), t = e.getBoundingClientRect().width - e.clientWidth, document.body.removeChild(e), t
            }, e.prototype.bindEvents = function () {
                return this.$modal.on("modal:open", function (e) {
                    return function () {
                        return e.open()
                    }
                }(this)), this.$modal.on("modal:close", function (e) {
                    return function () {
                        return e.close()
                    }
                }(this)), this.$modal.on("click", ".js-modal-close", function (e) {
                    return function () {
                        return e.close()
                    }
                }(this)), this.$modal.on("click", function (e) {
                    return function (t) {
                        if (e.isOpen && t.target === t.currentTarget) return e.close()
                    }
                }(this)), $(document).on("keyup", function (e) {
                    return function () {
                        if (e.isOpen) return 27 === event.which ? e.close() : void 0
                    }
                }(this))
            }, e
        }()
    }.call(this),
    function () {
        window.Preview = {
            init: function (e) {
                if (null == e && (e = ".locale-selector, .admin-link"), window.previewMode) return $(e).hide()
            }
        }
    }.call(this),
    function () {
        window.Protector = {
            init: function (e, t) {
                if (null == t && (t = "contextmenu dragstart dragdrop"), window.protectorEnabled) return $(document).on(t, e, function (e) {
                    return e.preventDefault()
                })
            }
        }
    }.call(this),
    function () {
        window.Comparison = function () {
            function e(e, t, n) {
                this.$container = e, null == t && (t = ".before"), null == n && (n = ".after"), this.$before = this.$container.find(t), this.$after = this.$container.find(n), this.$window = $(window), this.createElements(), this.addEventListeners(), this.setDimensions()
            }
            return e.prototype.createElements = function () {
                return this.$drag = $("<span>").addClass("drag").appendTo(this.$container), $("<span>").addClass("left-arrow").appendTo(this.$drag), $("<span>").addClass("right-arrow").appendTo(this.$drag)
            }, e.prototype.addEventListeners = function () {
                return this.$container.on("mousedown touchstart", this.onTap.bind(this)), this.$container.on("mousemove touchmove", this.onDrag.bind(this)), this.$container.on("mouseup touchend", this.onDragEnd.bind(this)), this.$window.on("resize", this.setDimensions.bind(this))
            }, e.prototype.setDimensions = function () {
                var e, t, n;
                return this.$container.css({
                    width: "",
                    height: ""
                }), n = Math.min(this.$before.find(".js-lazy-image").data("aspect"), this.$after.find(".js-lazy-image").data("aspect")), t = this.$container.outerWidth(), e = Math.min(t / n, t), t = e * n, this.$container.css({
                    width: t,
                    height: e
                }), this.containerOffsetLeft = this.$container.offset().left, this.$before.find(".js-lazy-image").css({
                    width: t
                }), this.dragWidth = this.$drag.outerWidth(), this.minLeftPos = this.containerOffsetLeft, this.maxLeftPos = this.containerOffsetLeft + t
            }, e.prototype.onTap = function (e) {
                return e.preventDefault(), this.leftPos = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX, this.requestDrag(), this.onDragStart(e)
            }, e.prototype.onDragStart = function (e) {
                var t, n;
                return e.preventDefault(), n = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX, t = n + document.body.scrollLeft, this.posX = t - n, this.isDragging = !0
            }, e.prototype.onDragEnd = function (e) {
                return e.preventDefault(), this.isDragging = !1
            }, e.prototype.onDrag = function (e) {
                if (e.preventDefault(), this.isDragging) return this.moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX, this.leftPos = this.moveX + this.posX + this.dragWidth / 2, this.requestDrag()
            }, e.prototype.drag = function () {
                var e;
                return this.leftPos < this.minLeftPos ? this.leftPos = this.minLeftPos : this.leftPos > this.maxLeftPos && (this.leftPos = this.maxLeftPos), e = this.leftPos - this.containerOffsetLeft, this.$drag.css({
                    left: e
                }), this.$before.css({
                    width: e
                })
            }, e.prototype.requestDrag = function () {
                return window.requestAnimationFrame(this.drag.bind(this))
            }, e
        }()
    }.call(this),
    function () {
        window.OrderModal = {
            init: function () {
                return $(".js-order-modal-trigger").on("click", function (e) {
                    var t, n, i;
                    return i = $(e.currentTarget), n = $(".js-order-modal"), t = n.find(".js-order-form"), t.find(".js-order-form-header").text(i.data("order-name")), t.find(".js-order-form-order-name").val(i.data("order-name")), n.trigger("modal:open")
                }), $(".js-order-form").on("form:success", function () {
                    var e, t, n;
                    return t = $(".js-order-modal"), e = t.find(".js-order-form"), n = t.find(".js-order-success"), e.hide(), n.show(), t = $(".js-order-modal"), Helpers.delay(3e3, function () {
                        if (t.is(":visible")) return t.trigger("modal:close")
                    }), t.on("modal:afterClose", function () {
                        return e.show(), n.hide()
                    })
                })
            }
        }
    }.call(this),
    function () {
        window.Slider = function () {
            function e(e, t) {
                this.$slider = e, null == t && (t = {}), this.options = $.extend({}, this.defaults, t), this.$slidesContainer = this.$slider.find(".js-slides"), this.options.shuffle && Helpers.shuffleChildren(this.$slidesContainer), this.isAutoplayEnabled = this.options.delay > 0, this.currentSlide = 0, this.slidesTotal = this.$slidesContainer.children().length, this.timer = null, this.preloadTimer = null, this.bindEvent(), this.resizeSlides(), this.nextSlide(!0), $(window).on("resize", function (e) {
                    return function () {
                        return e.resizeSlides()
                    }
                }(this))
            }
            return e.prototype.defaults = {
                delay: 0,
                shuffle: !1,
                slideContainMode: "auto",
                preloadNextSlide: !0
            }, e.prototype.resizeSlides = function () {
                var e, t, n;
                return n = this.$slider.outerWidth(), t = this.$slider.outerHeight(), e = n / t, this.$slidesContainer.children().each(function (i) {
                    return function (r, o) {
                        var s, a, l, u, c, d, h;
                        return s = $(o), a = s.find(".js-lazy-image"), d = a.data("width"), c = a.data("height"), u = a.data("aspect"), "width" === i.options.slideContainMode || "adaptive" === i.options.slideContainMode ? (h = Math.min(d, n), l = h / u) : "fitSquare" === i.options.slideContainMode ? (h = Math.min(d, n), l = Math.min(h / u, h), h = l * u) : "height" === i.options.slideContainMode ? (l = Math.min(c, t), h = l * u) : "fill" === i.options.slideContainMode ? e > u ? (h = n, l = h / u) : (l = t, h = l * u) : u > 1 && u > e ? (h = Math.min(d, n), l = h / u) : (l = Math.min(c, t), h = l * u), a.css({
                            width: Math.round(h),
                            height: Math.round(l)
                        })
                    }
                }(this))
            }, e.prototype.showSlide = function (e, t) {
                var n, i;
                if (null == t && (t = !1), !(e < 1 || e > this.slidesTotal)) {
                    if (Helpers.clearRequestTimeout(this.timer), Helpers.clearRequestTimeout(this.preloadTimer), this.currentSlide = e, n = this.$slidesContainer.children().eq(e - 1), i = n.find(".js-lazy-image"), this.options.preloadNextSlide && !i.hasClass("-loaded") && !t) return void(this.preloadTimer = Helpers.requestTimeout(100, function (t) {
                        return function () {
                            return t.showSlide(e)
                        }
                    }(this)));
                    if ("adaptive" !== this.options.slideContainMode && "fitSquare" !== this.options.slideContainMode || this.$slider.css({
                            height: i.css("height")
                        }), this.$slidesContainer.children().removeClass("-visible"), n.addClass("-visible"), this.isAutoplayEnabled) return i.hasClass("-loaded") ? this.timer = Helpers.requestTimeout(this.options.delay, function (e) {
                        return function () {
                            return e.nextSlide()
                        }
                    }(this)) : i.on("lazyloaded", "img", function (e) {
                        return function () {
                            return e.timer = Helpers.requestTimeout(e.options.delay, function () {
                                return e.nextSlide()
                            })
                        }
                    }(this))
                }
            }, e.prototype.nextSlide = function (e) {
                return null == e && (e = !1), this.currentSlide < this.slidesTotal ? this.showSlide(this.currentSlide + 1, e) : this.showSlide(1, e)
            }, e.prototype.prevSlide = function (e) {
                return null == e && (e = !1), this.currentSlide > 1 ? this.showSlide(this.currentSlide - 1, e) : this.showSlide(this.slidesTotal, e)
            }, e.prototype.bindEvent = function () {
                var e;
                return this.$slider.on("click", ".js-prev", function (e) {
                    return function (t) {
                        return t.stopPropagation(), e.prevSlide(!0)
                    }
                }(this)), this.$slider.on("click", ".js-next", function (e) {
                    return function (t) {
                        return t.stopPropagation(), e.nextSlide(!0)
                    }
                }(this)), $(document).on("keyup", function (e) {
                    return function (t) {
                        switch (t.keyCode) {
                            case 32:
                            case 40:
                            case 39:
                                return t.preventDefault(), e.nextSlide(!0);
                            case 37:
                            case 38:
                                return t.preventDefault(), e.prevSlide(!0)
                        }
                    }
                }(this)), e = new Hammer(this.$slider[0]), e.on("swipeleft", function (e) {
                    return function () {
                        return e.nextSlide(!0)
                    }
                }(this)), e.on("swiperight", function (e) {
                    return function () {
                        return e.prevSlide(!0)
                    }
                }(this))
            }, e
        }()
    }.call(this),
    function () {
        window.Storyboard = function () {
            function e(e, t) {
                var n, i;
                this.$el = e, null == t && (t = {}), this.options = $.extend({}, this.defaults, t), this.$items = this.$el.children(), this.itemsLength = this.$items.length, n = $(".js-scrollable") || $(document), i = this.buildRows(), this.renderRows(i), Helpers.onElResize(this.$el, "width", 500, function (e) {
                    return function () {
                        var t;
                        return t = n.scrollTop(), e.renderRows(i), n.scrollTop(t)
                    }
                }(this))
            }
            return e.prototype.defaults = {
                columnsInRow: 2.5,
                landscapeColumns: 1.5,
                portraitColumns: 1,
                pad: 20
            }, e.prototype.buildRows = function () {
                var e, t, n, i, r, o, s, a, l;
                for (l = [], n = 0, a = this.$items, i = o = 0, s = a.length; o < s; i = ++o) r = a[i], e = $(r), t = $(this.$items[i + 1]), void 0 === l[n] && (l[n] = []), l[n].push(e), (this.rowCompleted(l[n]) || this.isVideo(e) || this.isVideo(t) || i === this.itemsLength - 1) && (n += 1);
                return l
            }, e.prototype.rowCompleted = function (e) {
                var t, n, i, r;
                for (t = 0, i = 0, r = e.length; i < r; i++) n = e[i], t += this.columnsForAspect($(n).data("aspect"));
                return t >= this.options.columnsInRow
            }, e.prototype.columnsForAspect = function (e) {
                return e >= 1 ? this.options.landscapeColumns : this.options.portraitColumns
            }, e.prototype.isVideo = function (e) {
                return "video" === e.data("type")
            }, e.prototype.renderRows = function (e) {
                var t, n, i, r, o, s, a, l, u, c, d, h, f, p, m, g, v, y, b, x, w, T, S, C;
                for (r = this.$el.outerWidth(), this.$items.css({
                        width: "",
                        top: "",
                        left: ""
                    }), T = e.length, S = 0, y = [], v = l = 0, h = e.length; l < h; v = ++l) {
                    for (b = e[v], w = b.length, i = 0, d = 0, x = 0, u = 0, f = b.length; u < f; u++) a = b[u], i += parseFloat($(a).data("aspect"));
                    for (1, C = (w - 1) * this.options.pad, s = c = 0, p = b.length; c < p; s = ++c) a = b[s], t = $(a), t.outerWidth(), n = parseFloat(t.data("aspect")), o = (parseFloat(t.data("aspect")) / i).toFixed(6), g = (r - C) * o, m = g / n, t.css({
                        position: "absolute",
                        width: g,
                        top: S,
                        left: d
                    }), d += g, s !== w - 1 && (d += this.options.pad), x = m;
                    S += x, v !== T - 1 && (S += this.options.pad), y.push(this.$el.css({
                        height: S
                    }))
                }
                return y
            }, e
        }()
    }.call(this),
    function () {
        window.Strip = function () {
            function e(e, t) {
                var n;
                this.$strip = e, null == t && (t = {}), this.options = $.extend({}, this.defaults, t), this.$slidesContainer = this.$strip.find(".js-slides"), this.options.shuffle && Helpers.shuffleChildren(this.$slidesContainer), this.isAutoplayEnabled = this.options.delay > 0, this.autoplayTimer = null, this.preloadTimer = null, this.$slides = this.$slidesContainer.children(), this.slidesCount = this.$slides.length, this.margin = parseInt(this.$slides.first().css("margin-right")), this.bindEvents(), this.init(), n = Helpers.debounce(500, function (e) {
                    return function () {
                        return e.init()
                    }
                }(this)), $(window).on("resize", function () {
                    return function () {
                        return n()
                    }
                }())
            }
            return e.prototype.defaults = {
                delay: 0,
                shuffle: !1,
                transitionSpeed: 500,
                transitionEase: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                preloadNextSlide: !0
            }, e.prototype.init = function () {
                return Helpers.clearRequestTimeout(this.autoplayTimer), this.disableSlideTransition(), this.$slidesContainer.children(".-clone").remove(), this.resizeSlides(), this.firstIndex = 0, this.lastIndex = this.slidesCount - 1, this.prependClones(), this.appendClones(), this.currentIndex || (this.currentIndex = this.firstIndex), this.transitionInProgress = !1, this.showSlide(this.currentIndex, !0), Helpers.delay(100, function (e) {
                    return function () {
                        return e.enableSlideTransition()
                    }
                }(this))
            }, e.prototype.resizeSlides = function () {
                var e;
                return e = this.$strip.outerHeight(), this.$slides.each(function () {
                    return function (t, n) {
                        var i, r, o, s;
                        return i = $(n), r = i.find(".js-lazy-image"), o = r.data("aspect"), s = Math.floor(e * o), r.css({
                            width: s + "px",
                            height: e + "px"
                        }), i.data("width", s)
                    }
                }())
            }, e.prototype.prependClones = function () {
                var e, t, n, i;
                for (i = this.$strip.outerWidth() / 2 - this.$slides.first().data("width") / 2 + 1e3, t = -1, n = []; i > 0;) e = this.$slides.eq(t).find("img").addClass("lazyload lazypreload").end().clone(!0).addClass("-clone"), this.$slidesContainer.prepend(e), this.firstIndex += 1, this.lastIndex += 1, i -= e.data("width") + this.margin, n.push(t -= 1);
                return n
            }, e.prototype.appendClones = function () {
                var e, t, n, i;
                for (i = this.$strip.outerWidth() / 2 - this.$slides.last().data("width") / 2 + 1e3, t = 0, n = []; i > 0;) e = this.$slides.eq(t).find("img").addClass("lazyload lazypreload").end().clone(!0).addClass("-clone"), this.$slidesContainer.append(e), i -= e.data("width") + this.margin, n.push(t += 1);
                return n
            }, e.prototype.bindEvents = function () {
                var e;
                return this.$strip.on("click", ".js-prev", function (e) {
                        return function (t) {
                            return t.stopPropagation(), e.prevSlide(!0)
                        }
                    }(this)), this.$strip.on("click", ".js-next", function (e) {
                        return function (t) {
                            return t.stopPropagation(), e.nextSlide(!0)
                        }
                    }(this)), $(document).on("keydown", function (e) {
                        return function (t) {
                            switch (t.keyCode) {
                                case 32:
                                case 40:
                                case 39:
                                    return t.preventDefault(), e.nextSlide(!0);
                                case 37:
                                case 38:
                                    return t.preventDefault(), e.prevSlide(!0)
                            }
                        }
                    }(this)), e = new Hammer(this.$strip[0]), e.on("swipeleft", function (e) {
                        return function () {
                            return e.nextSlide(!0)
                        }
                    }(this)),
                    e.on("swiperight", function (e) {
                        return function () {
                            return e.prevSlide(!0)
                        }
                    }(this))
            }, e.prototype.nextSlide = function (e) {
                if (null == e && (e = !1), !this.transitionInProgress) return this.currentIndex < this.lastIndex ? (this.currentIndex += 1, this.showSlide(this.currentIndex, e)) : (this.disableSlideTransition(), this.$strip.addClass("-resetting"), this.showSlide(this.firstIndex - 1, !0), Helpers.delay(13, function (t) {
                    return function () {
                        return t.$strip.removeClass("-resetting"), t.enableSlideTransition(), t.currentIndex = t.firstIndex, t.showSlide(t.currentIndex, e)
                    }
                }(this)))
            }, e.prototype.prevSlide = function (e) {
                if (!this.transitionInProgress) return this.currentIndex > this.firstIndex ? (this.currentIndex -= 1, this.showSlide(this.currentIndex, e)) : (this.disableSlideTransition(), this.$strip.addClass("-resetting"), this.showSlide(this.lastIndex + 1, !0), Helpers.delay(13, function (t) {
                    return function () {
                        return t.$strip.removeClass("-resetting"), t.enableSlideTransition(), t.currentIndex = t.lastIndex, t.showSlide(t.currentIndex, e)
                    }
                }(this)))
            }, e.prototype.showSlide = function (e, t) {
                var n, i, r, o, s, a, l, u;
                if (null == t && (t = !1), Helpers.clearRequestTimeout(this.autoplayTimer), Helpers.clearRequestTimeout(this.preloadTimer), this.transitionInProgress = !0, Helpers.delay(this.options.transitionSpeed, function (e) {
                        return function () {
                            return e.transitionInProgress = !1
                        }
                    }(this)), o = this.$slidesContainer.children(), n = o.eq(e), i = n.find(".js-lazy-image"), this.options.preloadNextSlide && !i.hasClass("-loaded") && !t) return void(this.preloadTimer = Helpers.requestTimeout(100, function (t) {
                    return function () {
                        return t.showSlide(e)
                    }
                }(this)));
                if (u = this.$strip.outerWidth() / 2, e > 0)
                    for (s = a = 0, l = e - 1; 0 <= l ? a <= l : a >= l; s = 0 <= l ? ++a : --a) r = o.eq(s), u -= r.data("width") + this.margin;
                return u -= n.data("width") / 2, this.$slidesContainer.css("transform", "translate3d(" + u + "px, 0, 0)"), o.removeClass("-current").eq(e).addClass("-current"), this.isAutoplayEnabled ? i.hasClass("-loaded") ? this.autoplayTimer = Helpers.requestTimeout(this.options.delay, function (e) {
                    return function () {
                        return e.nextSlide()
                    }
                }(this)) : i.on("lazyloaded", "img", function (e) {
                    return function () {
                        return e.autoplayTimer = Helpers.requestTimeout(e.options.delay, function () {
                            return e.nextSlide()
                        })
                    }
                }(this)) : void 0
            }, e.prototype.enableSlideTransition = function () {
                return this.$slidesContainer.css("transition", "transform " + this.options.transitionSpeed + "ms " + this.options.transitionEase)
            }, e.prototype.disableSlideTransition = function () {
                return this.$slidesContainer.css("transition", "none")
            }, e
        }()
    }.call(this),
    function () {
        window.CommonFeatures = {
            init: function () {
                return this.initFastClick(), this.initPreview(), this.initLazyLoad(), this.initProtector(), this.initExternalLinks(), this.initForms(), this.initModals(), this.initWidgets(), this.initOrderModal(), this.initComparisons(), this.initGalleries(), this.initBlog(), this.initSliderSections(), this.initStripSections(), this.initPictureSetSections()
            },
            initFastClick: function () {
                return FastClick.attach(document.body)
            },
            initPreview: function () {
                return Preview.init()
            },
            initLazyLoad: function () {
                return LazyLoader.init()
            },
            initProtector: function () {
                return Protector.init(".js-lazy-image, img, .js-slider")
            },
            initExternalLinks: function () {
                return ExternalLinks.init(".js-page a")
            },
            initForms: function () {
                return Form.init(".js-form")
            },
            initModals: function (e) {
                var t, n, i, r;
                if (null == e && (e = ".js-modal"), t = $(e), t.length) {
                    for (n = 0, i = t.length; n < i; n++) r = t[n], new Modal($(r));
                    return $(document).on("click", ".js-modal-trigger", function (e) {
                        return $($(e.currentTarget).data("target")).trigger("modal:open")
                    })
                }
            },
            initWidgets: function () {
                var e, t, n, i, r;
                if (e = $(".js-widget"), e.length) {
                    for (i = [], t = 0, n = e.length; t < n; t++) r = e[t], i.push(function (e) {
                        var t;
                        return t = $(e), $.get(t.data("url"), function (e) {
                            return t.html(e), $(window).trigger("resize")
                        })
                    }(r));
                    return i
                }
            },
            initOrderModal: function () {
                return OrderModal.init()
            },
            initComparisons: function () {
                var e, t, n, i, r;
                if (e = $(".comparison-section"), e.length) {
                    for (r = [], n = 0, i = e.length; n < i; n++) t = e[n], r.push(new Comparison($(t)));
                    return r
                }
            },
            initGalleries: function () {
                var e, t, n, i, r, o;
                if (e = $(".js-gallery"), e.length) {
                    for (o = [], i = 0, r = e.length; i < r; i++) n = e[i], t = $(n), t.lightGallery({
                        selector: ".link",
                        mode: "lg-fade",
                        speed: 300,
                        startClass: "",
                        preload: 2,
                        hideBarsDelay: 2e3,
                        closable: !1,
                        download: !1,
                        getCaptionFromTitleOrAlt: !1,
                        videoMaxWidth: "80%",
                        exThumbImage: "data-thumb",
                        loadYoutubeThumbnail: !1,
                        loadVimeoThumbnail: !1,
                        progressBar: !1,
                        showThumbByDefault: !1,
                        swipeThreshold: 200,
                        enableDrag: !1
                    }), o.push(t.on("onSlideClick.lg", function () {
                        return t.data("lightGallery").goToNextSlide()
                    }));
                    return o
                }
            },
            initBlog: function () {
                var e, t;
                if (e = $(".js-blog"), e.length) return e.find(".item").hover(function () {
                    return $(this).find(".links a").addClass("-hover")
                }, function () {
                    return $(this).find(".links a").removeClass("-hover")
                }), e.hasClass("js-blog-masonry") ? (e.masonry({
                    itemSelector: ".item"
                }), t = Helpers.throttle(100, function () {
                    return e.masonry("layout")
                }), $(document).on("lazybeforeunveil", function () {
                    return t()
                })) : void 0
            },
            initSliderSections: function () {
                var e, t, n, i, r, o;
                if (t = $(".js-slider-section"), t.length) {
                    for (r = [], n = 0, i = t.length; n < i; n++) o = t[n], e = $(o), r.push(new Slider(e, {
                        slideContainMode: "fitSquare",
                        shuffle: e.data("shuffle"),
                        delay: e.data("delay")
                    }));
                    return r
                }
            },
            initStripSections: function () {
                var e, t, n, i, r, o;
                if (t = $(".js-strip-section"), t.length) {
                    for (r = [], n = 0, i = t.length; n < i; n++) o = t[n], e = $(o), r.push(new Strip(e, {
                        shuffle: e.data("shuffle"),
                        delay: e.data("delay")
                    }));
                    return r
                }
            },
            initPictureSetSections: function () {
                return this.initPictureSetMasonrySections(), this.initPictureSetStoryboardSections(), this.initPictureSetListSections()
            },
            initPictureSetMasonrySections: function () {
                var e, t, n, i, r, o, s;
                if (t = $(".js-picture-set-section-masonry"), t.length) {
                    for (r = [], n = 0, i = t.length; n < i; n++) o = t[n], e = $(o), e.masonry({
                        itemSelector: ".item"
                    }), s = Helpers.throttle(100, function () {
                        return e.masonry("layout")
                    }), r.push($(document).on("lazybeforeunveil", function () {
                        return s()
                    }));
                    return r
                }
            },
            initPictureSetStoryboardSections: function () {
                var e, t, n, i, r, o, s;
                if (t = $(".js-picture-set-section-storyboard"), t.length) {
                    for (n = {
                            2: 1.5,
                            3: 2.5,
                            4: 3.5
                        }, o = [], i = 0, r = t.length; i < r; i++) s = t[i], e = $(s), o.push(new Storyboard(e, {
                        columnsInRow: n[e.data("columns")],
                        pad: e.data("pad")
                    }));
                    return o
                }
            },
            initPictureSetListSections: function () {
                var e;
                if (e = $(".js-picture-set-section-list"), e.length) return $(window).on("resize", function () {
                    var t, n, i, r, o, s;
                    for (o = [], i = 0, r = e.length; i < r; i++) s = e[i], t = $(s), n = t.outerWidth(), o.push(t.find(".lazy-image").each(function (e, t) {
                        var i, r;
                        if (i = $(t), (r = i.data("aspect")) < 1) return i.css("max-width", n * r)
                    }));
                    return o
                }), $(window).trigger("resize")
            }
        }
    }.call(this),
    function () {
        window.Theme || (window.Theme = {}), Theme.Initializer = {
            init: function () {
                return this.initCommonFeatures(), this.initBackToTop(), this.initMenuDots(), this.initMenuResize(), this.initMenuSticky(), this.initListing(), this.initAlbumStoryboard(), this.initAlbumGrid(), this.initAlbumMasonry(), this.initSlider(), this.initStrip(), this.initLazyLoad()
            },
            initCommonFeatures: function () {
                return CommonFeatures.init()
            },
            initBackToTop: function () {
                return BackToTop.init(".js-back-to-top")
            },
            initMenuDots: function () {
                var e, t;
                return e = !1, t = $(".menu-list > .menu-item"), t.removeClass("-undotted"), t.each(function (t, n) {
                    var i;
                    return i = $(n), e && e.offset().top !== i.offset().top && e.addClass("-undotted"), e = i
                })
            },
            initMenuResize: function () {
                return $(window).on("resize", function (e) {
                    return function () {
                        return e.initMenuDots()
                    }
                }(this))
            },
            initMenuSticky: function () {
                var e, t, n, i, r;
                return n = $(window), t = $(".js-menu"), e = $(".page-header"), i = null, r = Helpers.throttle(100, function (n) {
                    return null === i && (i = t.offset().top), n.scrollTop() >= i ? (e.css("height", e.outerHeight()), t.addClass("-fixed")) : (e.css("height", ""), t.removeClass("-fixed"))
                }), n.on("scroll", function (e) {
                    return r($(e.currentTarget))
                }), n.on("hashchange", function () {
                    return scrollBy(0, -t.outerHeight())
                })
            },
            initListing: function () {
                var e, t;
                if (e = $(".js-listing"), e.length) return "original" === e.data("format") && (e.masonry({
                    itemSelector: ".item"
                }), t = Helpers.throttle(100, function () {
                    return e.masonry("layout")
                }), $(document).on("lazybeforeunveil", function () {
                    return t()
                })), this.animateItems(e.children()), $(".js-listing-next").length ? e.infiniteScroll({
                    path: ".js-listing-next",
                    append: ".js-listing .item",
                    status: ".js-status",
                    history: !1,
                    scrollThreshold: 1e3,
                    prefill: !0
                }).on("append.infiniteScroll", function (t) {
                    return function (n, i, r, o) {
                        return "original" === e.data("format") && (e.data("masonry").appended(o), imagesLoaded(e).on("done", function () {
                            return e.data("masonry").layout()
                        })), t.animateItems($(o))
                    }
                }(this)) : void 0
            },
            initAlbumStoryboard: function () {
                var e, t;
                if (e = $(".js-storyboard"), e.length) return t = {
                    1: 1,
                    2: 1.5,
                    3: 2.5,
                    4: 3.5
                } [e.data("columns")], new Storyboard(e, {
                    columnsInRow: t,
                    pad: e.data("pad")
                }), this.animateItems(e.children())
            },
            initAlbumGrid: function () {
                var e;
                if (e = $(".js-album-grid"), e.length) return this.animateItems(e.children())
            },
            initAlbumMasonry: function () {
                var e, t;
                if (e = $(".js-album-masonry"), e.length) return e.masonry({
                    itemSelector: ".item"
                }), t = Helpers.throttle(100, function () {
                    return e.masonry("layout")
                }), $(document).on("lazybeforeunveil", function () {
                    return t()
                })
            },
            initSlider: function () {
                var e;
                if (e = $(".js-slider"), e.length) return new Slider(e, {
                    shuffle: e.data("shuffle"),
                    delay: e.data("delay")
                })
            },
            initStrip: function () {
                var e;
                if (e = $(".js-strip"), e.length) return new Strip(e, {
                    shuffle: e.data("shuffle"),
                    delay: e.data("delay")
                })
            },
            initLazyLoad: function () {
                return $(document).trigger("initLazyLoad")
            },
            animateItems: function (e) {
                return e.each(function (e, t) {
                    var n;
                    return n = $(t), Helpers.delay(100 * e, function () {
                        return n.css({
                            transition: "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)"
                        }), Helpers.onCSSAnimationEvent(n, "TransitionEnd", function () {
                            return n.css({
                                transition: ""
                            })
                        }), n.addClass("-visible")
                    })
                })
            }
        }, $(function () {
            return Theme.Initializer.init()
        })
    }.call(this);