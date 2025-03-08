
(() => {

  const iframe = document.createElement("iframe")
  iframe.srcdoc = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <link rel="shortcut icon" type="image/ico" href="/assets/favicon-mtvwWgEY.ico" />
  <title>Solid App</title>
  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace
    }

    ._App_9g4xh_1 {
      text-align: center
    }

    ._logo_9g4xh_5 {
      animation: _logo-spin_9g4xh_1 infinite 20s linear;
      height: 40vmin;
      pointer-events: none
    }

    ._header_9g4xh_11 {
      background-color: #282c34;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: #fff
    }

    ._link_9g4xh_22 {
      color: #b318f0
    }

    @keyframes _logo-spin_9g4xh_1 {
      0% {
        transform: rotate(0)
      }

      to {
        transform: rotate(360deg)
      }
    }
  </style>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>

  <script>
    (function () {const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o); new MutationObserver(o => {for (const l of o) if (l.type === "childList") for (const r of l.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r)}).observe(document, {childList: !0, subtree: !0}); function s(o) {const l = {}; return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l} function i(o) {if (o.ep) return; o.ep = !0; const l = s(o); fetch(o.href, l)} })(); const R = !1; let V = P; const w = 1, m = 2, G = {owned: null, cleanups: null, context: null, owner: null}; var c = null; let N = null, j = null, d = null, p = null, g = null, C = 0; function q(e, t) {const s = d, i = c, o = e.length === 0, l = t === void 0 ? i : t, r = o ? G : {owned: null, cleanups: null, context: l ? l.context : null, owner: l}, n = o ? e : () => e(() => L(() => x(r))); c = r, d = null; try {return E(n, !0)} finally {d = s, c = i} } function S(e, t, s) {const i = K(e, t, !1, w); B(i)} function L(e) {if (d === null) return e(); const t = d; d = null; try {return e()} finally {d = t} } function z(e, t, s) {let i = e.value; return (!e.comparator || !e.comparator(i, t)) && (e.value = t, e.observers && e.observers.length && E(() => {for (let o = 0; o < e.observers.length; o += 1) {const l = e.observers[o], r = N && N.running; r && N.disposed.has(l), (r ? !l.tState : !l.state) && (l.pure ? p.push(l) : g.push(l), l.observers && D(l)), r || (l.state = w)} if (p.length > 1e6) throw p = [], new Error}, !1)), t} function B(e) {if (!e.fn) return; x(e); const t = C; H(e, e.value, t)} function H(e, t, s) {let i; const o = c, l = d; d = c = e; try {i = e.fn(t)} catch (r) {return e.pure && (e.state = w, e.owned && e.owned.forEach(x), e.owned = null), e.updatedAt = s + 1, $(r)} finally {d = l, c = o} (!e.updatedAt || e.updatedAt <= s) && (e.updatedAt != null && "observers" in e ? z(e, i) : e.value = i, e.updatedAt = s)} function K(e, t, s, i = w, o) {const l = {fn: e, state: i, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: t, owner: c, context: c ? c.context : null, pure: s}; return c === null || c !== G && (c.owned ? c.owned.push(l) : c.owned = [l]), l} function I(e) {if (e.state === 0) return; if (e.state === m) return O(e); if (e.suspense && L(e.suspense.inFallback)) return e.suspense.effects.push(e); const t = [e]; for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < C);)e.state && t.push(e); for (let s = t.length - 1; s >= 0; s--)if (e = t[s], e.state === w) B(e); else if (e.state === m) {const i = p; p = null, E(() => O(e, t[0]), !1), p = i} } function E(e, t) {if (p) return e(); let s = !1; t || (p = []), g ? s = !0 : g = [], C++; try {const i = e(); return Q(s), i} catch (i) {s || (g = null), p = null, $(i)} } function Q(e) {if (p && (P(p), p = null), e) return; const t = g; g = null, t.length && E(() => V(t), !1)} function P(e) {for (let t = 0; t < e.length; t++)I(e[t])} function O(e, t) {e.state = 0; for (let s = 0; s < e.sources.length; s += 1) {const i = e.sources[s]; if (i.sources) {const o = i.state; o === w ? i !== t && (!i.updatedAt || i.updatedAt < C) && I(i) : o === m && O(i, t)} } } function D(e) {for (let t = 0; t < e.observers.length; t += 1) {const s = e.observers[t]; s.state || (s.state = m, s.pure ? p.push(s) : g.push(s), s.observers && D(s))} } function x(e) {let t; if (e.sources) for (; e.sources.length;) {const s = e.sources.pop(), i = e.sourceSlots.pop(), o = s.observers; if (o && o.length) {const l = o.pop(), r = s.observerSlots.pop(); i < o.length && (l.sourceSlots[r] = i, o[i] = l, s.observerSlots[i] = r)} } if (e.tOwned) {for (t = e.tOwned.length - 1; t >= 0; t--)x(e.tOwned[t]); delete e.tOwned} if (e.owned) {for (t = e.owned.length - 1; t >= 0; t--)x(e.owned[t]); e.owned = null} if (e.cleanups) {for (t = e.cleanups.length - 1; t >= 0; t--)e.cleanups[t](); e.cleanups = null} e.state = 0} function W(e) {return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {cause: e})} function $(e, t = c) {throw W(e)} function J(e, t) {return L(() => e(t || {}))} function X(e, t, s) {let i = s.length, o = t.length, l = i, r = 0, n = 0, f = t[o - 1].nextSibling, u = null; for (; r < o || n < l;) {if (t[r] === s[n]) {r++, n++; continue} for (; t[o - 1] === s[l - 1];)o--, l--; if (o === r) {const a = l < i ? n ? s[n - 1].nextSibling : s[l - n] : f; for (; n < l;)e.insertBefore(s[n++], a)} else if (l === n) for (; r < o;)(!u || !u.has(t[r])) && t[r].remove(), r++; else if (t[r] === s[l - 1] && s[n] === t[o - 1]) {const a = t[--o].nextSibling; e.insertBefore(s[n++], t[r++].nextSibling), e.insertBefore(s[--l], a), t[o] = s[l]} else {if (!u) {u = new Map; let h = n; for (; h < l;)u.set(s[h], h++)} const a = u.get(t[r]); if (a != null) if (n < a && a < l) {let h = r, _ = 1, T; for (; ++h < o && h < l && !((T = u.get(t[h])) == null || T !== a + _);)_++; if (_ > a - n) {const F = t[r]; for (; n < a;)e.insertBefore(s[n++], F)} else e.replaceChild(s[n++], t[r++])} else r++; else t[r++].remove()} } } function Y(e, t, s, i = {}) {let o; return q(l => {o = l, t === document ? e() : ee(t, e(), t.firstChild ? null : void 0, s)}, i.owner), () => {o(), t.textContent = ""}} function Z(e, t, s, i) {let o; const l = () => {const n = document.createElement("template"); return n.innerHTML = e, n.content.firstChild}, r = () => (o || (o = l())).cloneNode(!0); return r.cloneNode = r, r} function k(e, t, s) {e.setAttribute(t, s)} function b(e, t) {t == null ? e.removeAttribute("class") : e.className = t} function ee(e, t, s, i) {if (s !== void 0 && !i && (i = []), typeof t != "function") return v(e, t, i, s); S(o => v(e, t(), o, s), i)} function v(e, t, s, i, o) {for (; typeof s == "function";)s = s(); if (t === s) return s; const l = typeof t, r = i !== void 0; if (e = r && s[0] && s[0].parentNode || e, l === "string" || l === "number") {if (l === "number" && (t = t.toString(), t === s)) return s; if (r) {let n = s[0]; n && n.nodeType === 3 ? n.data !== t && (n.data = t) : n = document.createTextNode(t), s = y(e, s, i, n)} else s !== "" && typeof s == "string" ? s = e.firstChild.data = t : s = e.textContent = t} else if (t == null || l === "boolean") s = y(e, s, i); else {if (l === "function") return S(() => {let n = t(); for (; typeof n == "function";)n = n(); s = v(e, n, s, i)}), () => s; if (Array.isArray(t)) {const n = [], f = s && Array.isArray(s); if (U(n, t, s, o)) return S(() => s = v(e, n, s, i, !0)), () => s; if (n.length === 0) {if (s = y(e, s, i), r) return s} else f ? s.length === 0 ? M(e, n, i) : X(e, s, n) : (s && y(e), M(e, n)); s = n} else if (t.nodeType) {if (Array.isArray(s)) {if (r) return s = y(e, s, i, t); y(e, s, null, t)} else s == null || s === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild); s = t} } return s} function U(e, t, s, i) {let o = !1; for (let l = 0, r = t.length; l < r; l++) {let n = t[l], f = s && s[e.length], u; if (!(n == null || n === !0 || n === !1)) if ((u = typeof n) == "object" && n.nodeType) e.push(n); else if (Array.isArray(n)) o = U(e, n, f) || o; else if (u === "function") if (i) {for (; typeof n == "function";)n = n(); o = U(e, Array.isArray(n) ? n : [n], Array.isArray(f) ? f : [f]) || o} else e.push(n), o = !0; else {const a = String(n); f && f.nodeType === 3 && f.data === a ? e.push(f) : e.push(document.createTextNode(a))} } return o} function M(e, t, s = null) {for (let i = 0, o = t.length; i < o; i++)e.insertBefore(t[i], s)} function y(e, t, s, i) {if (s === void 0) return e.textContent = ""; const o = i || document.createTextNode(""); if (t.length) {let l = !1; for (let r = t.length - 1; r >= 0; r--) {const n = t[r]; if (o !== n) {const f = n.parentNode === e; !l && !r ? f ? e.replaceChild(o, n) : e.insertBefore(o, s) : f && n.remove()} else l = !0} } else e.insertBefore(o, s); return [o]} const te = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20166%20155.3'%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20fill='%2376b3e1'/%3e%3clinearGradient%20id='a'%20gradientUnits='userSpaceOnUse'%20x1='27.5'%20y1='3'%20x2='152'%20y2='63.5'%3e%3cstop%20offset='.1'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.3'%20stop-color='%23dcf2fd'/%3e%3cstop%20offset='1'%20stop-color='%2376b3e1'/%3e%3c/linearGradient%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20opacity='.3'%20fill='url(%23a)'/%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20fill='%23518ac8'/%3e%3clinearGradient%20id='b'%20gradientUnits='userSpaceOnUse'%20x1='95.8'%20y1='32.6'%20x2='74'%20y2='105.2'%3e%3cstop%20offset='0'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.5'%20stop-color='%234377bb'/%3e%3cstop%20offset='1'%20stop-color='%231f3b77'/%3e%3c/linearGradient%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20opacity='.3'%20fill='url(%23b)'/%3e%3clinearGradient%20id='c'%20gradientUnits='userSpaceOnUse'%20x1='18.4'%20y1='64.2'%20x2='144.3'%20y2='149.8'%3e%3cstop%20offset='0'%20stop-color='%23315aa9'/%3e%3cstop%20offset='.5'%20stop-color='%23518ac8'/%3e%3cstop%20offset='1'%20stop-color='%23315aa9'/%3e%3c/linearGradient%3e%3cpath%20d='M134%2080a45%2045%200%2000-48-15L24%2085%204%20120l112%2019%2020-36c4-7%203-15-2-23z'%20fill='url(%23c)'/%3e%3clinearGradient%20id='d'%20gradientUnits='userSpaceOnUse'%20x1='75.2'%20y1='74.5'%20x2='24.4'%20y2='260.8'%3e%3cstop%20offset='0'%20stop-color='%234377bb'/%3e%3cstop%20offset='.5'%20stop-color='%231a336b'/%3e%3cstop%20offset='1'%20stop-color='%231a336b'/%3e%3c/linearGradient%3e%3cpath%20d='M114%20115a45%2045%200%2000-48-15L4%20120s53%2040%2094%2030l3-1c17-5%2023-21%2013-34z'%20fill='url(%23d)'/%3e%3c/svg%3e", se = "_App_9g4xh_1", le = "_logo_9g4xh_5", oe = "_header_9g4xh_11", ne = "_link_9g4xh_22", A = {App: se, logo: le, "logo-spin": "_logo-spin_9g4xh_1", header: oe, link: ne}; var ie = Z('<div><header><img alt=logo><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href=https://github.com/solidjs/solid target=_blank rel="noopener noreferrer">Learn Solid'); const re = () => (() => {var e = ie(), t = e.firstChild, s = t.firstChild, i = s.nextSibling, o = i.nextSibling; return k(s, "src", te), S(l => {var r = A.App, n = A.header, f = A.logo, u = A.link; return r !== l.e && b(e, l.e = r), n !== l.t && b(t, l.t = n), f !== l.a && b(s, l.a = f), u !== l.o && b(o, l.o = u), l}, {e: void 0, t: void 0, a: void 0, o: void 0}), e})(), fe = document.getElementById("root"); Y(() => J(re, {}), fe);
  </script>

</body>

</html>
`;

  iframe.style.width = "300px";
  iframe.style.height = "600px";
  iframe.style.position = "fixed"
  iframe.style.bottom = "0"
  iframe.style.right = "0"

  document.body.appendChild(iframe)

})()
