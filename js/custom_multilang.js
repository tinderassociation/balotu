! function(e, n, t) {
	function r(e, n) {
		return typeof e === n
	}

	function o() {
		var e, n, t, o, i, s, a;
		for (var l in C)
			if (C.hasOwnProperty(l)) {
				if (e = [], (n = C[l]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
					for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
				for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) 1 === (a = (s = e[i]).split(".")).length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), h.push((o ? "" : "no-") + a.join("-"))
			}
	}

	function i(e) {
		var n = _.className,
			t = Modernizr._config.classPrefix || "";
		if (w && (n = n.baseVal), Modernizr._config.enableJSClass) {
			var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
			n = n.replace(r, "$1" + t + "js$2")
		}
		Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), w ? _.className.baseVal = n : _.className = n)
	}

	function s(e) {
		return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
			return n + t.toUpperCase()
		}).replace(/^-/, "")
	}

	function a(e, n) {
		return !!~("" + e).indexOf(n)
	}

	function l() {
		return "function" != typeof n.createElement ? n.createElement(arguments[0]) : w ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
	}

	function f(e, n) {
		return function() {
			return e.apply(n, arguments)
		}
	}

	function u(e, n, t) {
		var o;
		for (var i in e)
			if (e[i] in n) return !1 === t ? e[i] : r(o = n[e[i]], "function") ? f(o, t || n) : o;
		return !1
	}

	function p(e) {
		return e.replace(/([A-Z])/g, function(e, n) {
			return "-" + n.toLowerCase()
		}).replace(/^ms-/, "-ms-")
	}

	function c(n, t, r) {
		var o;
		if ("getComputedStyle" in e) {
			o = getComputedStyle.call(e, n, t);
			var i = e.console;
			if (null !== o) r && (o = o.getPropertyValue(r));
			else if (i) {
				var s;
				i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
			}
		} else o = !t && n.currentStyle && n.currentStyle[r];
		return o
	}

	function d() {
		var e = n.body;
		return e || ((e = l(w ? "svg" : "body")).fake = !0), e
	}

	function m(e, t, r, o) {
		var i, s, a, f, u = "modernizr",
			p = l("div"),
			c = d();
		if (parseInt(r, 10))
			for (; r--;)(a = l("div")).id = o ? o[r] : u + (r + 1), p.appendChild(a);
		return (i = l("style")).type = "text/css", i.id = "s" + u, (c.fake ? c : p).appendChild(i), c.appendChild(p), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), p.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(c)), s = t(p, e), c.fake ? (c.parentNode.removeChild(c), _.style.overflow = f, _.offsetHeight) : p.parentNode.removeChild(p), !!s
	}

	function v(n, r) {
		var o = n.length;
		if ("CSS" in e && "supports" in e.CSS) {
			for (; o--;)
				if (e.CSS.supports(p(n[o]), r)) return !0;
			return !1
		}
		if ("CSSSupportsRule" in e) {
			for (var i = []; o--;) i.push("(" + p(n[o]) + ":" + r + ")");
			return m("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
				return "absolute" == c(e, null, "position")
			})
		}
		return t
	}

	function y(e, n, o, i) {
		function f() {
			p && (delete P.style, delete P.modElem)
		}
		if (i = !r(i, "undefined") && i, !r(o, "undefined")) {
			var u = v(e, o);
			if (!r(u, "undefined")) return u
		}
		for (var p, c, d, m, y, g = ["modernizr", "tspan", "samp"]; !P.style && g.length;) p = !0, P.modElem = l(g.shift()), P.style = P.modElem.style;
		for (d = e.length, c = 0; d > c; c++)
			if (m = e[c], y = P.style[m], a(m, "-") && (m = s(m)), P.style[m] !== t) {
				if (i || r(o, "undefined")) return f(), "pfx" != n || m;
				try {
					P.style[m] = o
				} catch (h) {}
				if (P.style[m] != y) return f(), "pfx" != n || m
			}
		return f(), !1
	}

	function g(e, n, t, o, i) {
		var s = e.charAt(0).toUpperCase() + e.slice(1),
			a = (e + " " + b.join(s + " ") + s).split(" ");
		return r(n, "string") || r(n, "undefined") ? y(a, n, o, i) : u(a = (e + " " + j.join(s + " ") + s).split(" "), n, t)
	}
	var h = [],
		C = [],
		S = {
			_version: "3.5.0",
			_config: {
				classPrefix: "",
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0
			},
			_q: [],
			on: function(e, n) {
				var t = this;
				setTimeout(function() {
					n(t[e])
				}, 0)
			},
			addTest: function(e, n, t) {
				C.push({
					name: e,
					fn: n,
					options: t
				})
			},
			addAsyncTest: function(e) {
				C.push({
					name: null,
					fn: e
				})
			}
		},
		Modernizr = function() {};
	Modernizr.prototype = S, Modernizr = new Modernizr;
	var _ = n.documentElement,
		w = "svg" === _.nodeName.toLowerCase(),
		x = "Moz O ms Webkit",
		b = S._config.usePrefixes ? x.split(" ") : [];
	S._cssomPrefixes = b;
	var E = function(n) {
		var r, o = prefixes.length,
			i = e.CSSRule;
		if (void 0 === i) return t;
		if (!n) return !1;
		if ((r = (n = n.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + n;
		for (var s = 0; o > s; s++) {
			var a = prefixes[s],
				l;
			if (a.toUpperCase() + "_" + r in i) return "@-" + a.toLowerCase() + "-" + n
		}
		return !1
	};
	S.atRule = E;
	var j = S._config.usePrefixes ? x.toLowerCase().split(" ") : [];
	S._domPrefixes = j;
	var z = {
		elem: l("modernizr")
	};
	Modernizr._q.push(function() {
		delete z.elem
	});
	var P = {
		style: z.elem.style
	};
	Modernizr._q.unshift(function() {
		delete P.style
	}), S.testAllProps = g;
	var N = S.prefixed = function(e, n, t) {
		return 0 === e.indexOf("@") ? E(e) : (-1 != e.indexOf("-") && (e = s(e)), n ? g(e, n, t) : g(e, "pfx"))
	};
	Modernizr.addTest("objectfit", !!N("objectFit"), {
		aliases: ["object-fit"]
	}), o(), i(h), delete S.addTest, delete S.addAsyncTest;
	for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]();
	e.Modernizr = Modernizr
}(window, document);
var enableInlineVideo = function() {
		"use strict";

		function e(e, i, n, r) {
			function t(n) {
				d = i(t, r), e(n - (a || n)), a = n
			}
			var d, a;
			return {
				start: function() {
					d || t(0)
				},
				stop: function() {
					n(d), d = null, a = 0
				}
			}
		}

		function i(i) {
			return e(i, requestAnimationFrame, cancelAnimationFrame)
		}

		function n(e, i, n, r) {
			function t(i) {
				Boolean(e[n]) === Boolean(r) && i.stopImmediatePropagation(), delete e[n]
			}
			return e.addEventListener(i, t, !1), t
		}

		function r(e, i, n, r) {
			function t() {
				return n[i]
			}

			function d(e) {
				n[i] = e
			}
			r && d(e[i]), Object.defineProperty(e, i, {
				get: t,
				set: d
			})
		}

		function t(e, i, n) {
			n.addEventListener(i, function() {
				return e.dispatchEvent(new Event(i))
			})
		}

		function d(e, i) {
			Promise.resolve().then(function() {
				e.dispatchEvent(new Event(i))
			})
		}

		function a(e) {
			var i = new Audio;
			return t(e, "play", i), t(e, "playing", i), t(e, "pause", i), i.crossOrigin = e.crossOrigin, i.src = e.src || e.currentSrc || "data:", i
		}

		function o(e, i, n) {
			(m || 0) + 200 < Date.now() && (e[b] = !0, m = Date.now()), n || (e.currentTime = i), w[++T % 3] = 100 * i | 0
		}

		function u(e) {
			return e.driver.currentTime >= e.video.duration
		}

		function s(e) {
			var i = this;
			i.video.readyState >= i.video.HAVE_FUTURE_DATA ? (i.hasAudio || (i.driver.currentTime = i.video.currentTime + e * i.video.playbackRate / 1e3, i.video.loop && u(i) && (i.driver.currentTime = 0)), o(i.video, i.driver.currentTime)) : i.video.networkState === i.video.NETWORK_IDLE && 0 === i.video.buffered.length && i.video.load(), i.video.ended && (delete i.video[b], i.video.pause(!0))
		}

		function c() {
			var e = this,
				i = e[h];
			return e.webkitDisplayingFullscreen ? void e[g]() : ("data:" !== i.driver.src && i.driver.src !== e.src && (o(e, 0, !0), i.driver.src = e.src), void(e.paused && (i.paused = !1, 0 === e.buffered.length && e.load(), i.driver.play(), i.updater.start(), i.hasAudio || (d(e, "play"), i.video.readyState >= i.video.HAVE_ENOUGH_DATA && d(e, "playing")))))
		}

		function v(e) {
			var i = this,
				n = i[h];
			n.driver.pause(), n.updater.stop(), i.webkitDisplayingFullscreen && i[E](), n.paused && !e || (n.paused = !0, n.hasAudio || d(i, "pause"), i.ended && (i[b] = !0, d(i, "ended")))
		}

		function p(e, n) {
			var r = e[h] = {};
			r.paused = !0, r.hasAudio = n, r.video = e, r.updater = i(s.bind(r)), n ? r.driver = a(e) : (e.addEventListener("canplay", function() {
				e.paused || d(e, "playing")
			}), r.driver = {
				src: e.src || e.currentSrc || "data:",
				muted: !0,
				paused: !0,
				pause: function() {
					r.driver.paused = !0
				},
				play: function() {
					r.driver.paused = !1, u(r) && o(e, 0)
				},
				get ended() {
					return u(r)
				}
			}), e.addEventListener("emptied", function() {
				var i = !r.driver.src || "data:" === r.driver.src;
				r.driver.src && r.driver.src !== e.src && (o(e, 0, !0), r.driver.src = e.src, i ? r.driver.play() : r.updater.stop())
			}, !1), e.addEventListener("webkitbeginfullscreen", function() {
				e.paused ? n && 0 === r.driver.buffered.length && r.driver.load() : (e.pause(), e[g]())
			}), n && (e.addEventListener("webkitendfullscreen", function() {
				r.driver.currentTime = e.currentTime
			}), e.addEventListener("seeking", function() {
				w.indexOf(100 * e.currentTime | 0) < 0 && (r.driver.currentTime = e.currentTime)
			}))
		}

		function l(e) {
			var i = e[h];
			e[g] = e.play, e[E] = e.pause, e.play = c, e.pause = v, r(e, "paused", i.driver), r(e, "muted", i.driver, !0), r(e, "playbackRate", i.driver, !0), r(e, "ended", i.driver), r(e, "loop", i.driver, !0), n(e, "seeking"), n(e, "seeked"), n(e, "timeupdate", b, !1), n(e, "ended", b, !1)
		}

		function f(e, i) {
			if (void 0 === i && (i = {}), !e[h]) {
				if (!i.everywhere) {
					if (!y) return;
					if (!(i.iPad || i.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(navigator.userAgent)) return
				}!e.paused && e.webkitDisplayingFullscreen && e.pause(), p(e, !e.muted), l(e), e.classList.add("IIV"), e.muted && e.autoplay && e.play(), /iPhone|iPod|iPad/.test(navigator.platform) || console.warn("iphone-inline-video is not guaranteed to work in emulated environments")
			}
		}
		var m, y = "object" == typeof document && "object-fit" in document.head.style && !matchMedia("(-webkit-video-playable-inline)").matches,
			h = "bfred-it:iphone-inline-video",
			b = "bfred-it:iphone-inline-video:event",
			g = "bfred-it:iphone-inline-video:nativeplay",
			E = "bfred-it:iphone-inline-video:nativepause",
			w = [],
			T = 0;
		return f
	}(),
	timeouts = [],
	did_show_results = !1,
	videoStopped = !0,
	video = document.querySelector(".video"),
	poster = $(".poster"),
	numSteps = $("[data-step]").length,
	activeStep = $(".step.is--active"),
	timer = $(".timer__container"),
	queryErrors = !1,
	lastValue = "",
	showUpgrade = !1,
	isMobile = !0;

function videoLogic() {
	$("[data-play]").on("click", function() {
		var $this = $(this);
		setTimeout(function() {
			var playTime = parseFloat($this.data("play"));
			video.currentTime = playTime, video.play(), activeStep.is('[data-step="1"]') ? $('[data-step="1"]').addClass("is--loading") : (video.classList.remove("is--blurry"), activeStep.removeClass("is--visible"), timer.addClass("is--active animation animation" + parseInt(activeStep.data("step"))))
		}, 100)
	}), video.addEventListener("timeupdate", function() {
		var currentTime = parseInt(video.currentTime);
		video.currentTime > .1 && !poster.hasClass("is--hidden") && (poster.addClass("is--hidden"), 
		video.classList.remove("is--blurry"), 
		activeStep.removeClass("is--visible"), 
		timer.addClass("is--active animation animation" + parseInt(activeStep.data("step")))), 
		videoStopped != currentTime && (videoStopped = !1), 
		videoStopped || currentTime === parseInt(activeStep.find("[data-stop]").data("stop")) && (video.pause(), 
		videoStopped = currentTime)
		

	}), video.addEventListener("pause", function(old_step, new_step) {
		var $old_step = parseInt(activeStep.attr("data-step"));		
		$new_step = $("[data-step=" + ($old_step + 1) + "]"), 
		did_show_results && resetResults(), 
		timer.removeClass("is--active animation animation" + $old_step);
		window.scrollTo(0, 0), 
		old_step != new_step && old_step <= numSteps ? ($old_step.removeClass("is--active"), 
		$old_step.find(".step__wrapper").height(0), 
		checkOrientation(isMobile)) : (queryErrors = !0, $("[data-step]").removeClass("is--active is--visible").find(".step__wrapper").height(0), 
		$new_step.addClass("is--active is--visible"), 
		checkOrientation(isMobile), activeStep = $new_step, video.pause()), 
		video.classList.add("is--blurry")
	})
}
var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isMobile = /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent);

function setVideoFallback() {
	if (checkOrientation(isMobile), isMobile) {
		$("html").addClass("is--mobile");
		!isiDevice || ($("html").addClass("is--ios"), enableInlineVideo(video)), isAndroid && $("html").addClass("is--android")
	} else $("html").addClass("is--desktop")
}
setVideoFallback();

function validateEmail(email) {
	var re;
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function checkOrientation(isMobile) {
	var winWidth, winHeight, portrait = !($(window).width() > $(window).height()),
		element = $(".is--active .step__wrapper");
	(isMobile && portrait || !isMobile) && element.height($(window).height())
}
$(document).ready(function() {
	videoLogic(), 
	checkOrientation(isMobile), 
	$(window).on("resize orientationchange", function() {
		checkOrientation(isMobile)
	});
});