!function (a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function () {
    "use strict";
    var a = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
                w = !1,
                x = !0,
                y = !0,
                z = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function (a, b) {
                        return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                            id: "facebook",
                            label: "Share on Facebook",
                            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                        }, {
                            id: "twitter",
                            label: "Tweet",
                            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                        }, {
                            id: "pinterest",
                            label: "Pin it",
                            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                        }, {
                            id: "download",
                            label: "Download image",
                            url: "{{raw_image_url}}",
                            download: !0
                        }],
                    getImageURLForShare: function () {
                        return a.currItem.src || ""
                    },
                    getPageURLForShare: function () {
                        return window.location.href
                    },
                    getTextForShare: function () {
                        return a.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
        A = function (a) {
            if (r)
                return !0;
            a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
            for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++)
                c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
            if (d) {
                a.stopPropagation && a.stopPropagation(), r = !0;
                var h = b.features.isOldAndroid ? 600 : 30;
                s = setTimeout(function () {
                    r = !1
                }, h)
            }
        },
                B = function () {
                    return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
                },
                C = function (a, c, d) {
                    b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
                },
                D = function () {
                    var a = 1 === q.getNumItemsFn();
                    a !== p && (C(d, "ui--one-slide", a), p = a)
                },
                E = function () {
                    C(i, "share-modal--hidden", y)
                },
                F = function () {
                    return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
                        y && E()
                    }, 300)) : (E(), setTimeout(function () {
                        y || b.addClass(i, "pswp__share-modal--fade-in")
                    }, 30)), y || H(), !1
                },
                G = function (b) {
                    b = b || window.event;
                    var c = b.target || b.srcElement;
                    return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1))
                },
                H = function () {
                    for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)
                        a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                    i.children[0].innerHTML = f, i.children[0].onclick = G
                },
                I = function (a) {
                    for (var c = 0; c < q.closeElClasses.length; c++)
                        if (b.hasClass(a, "pswp__" + q.closeElClasses[c]))
                            return !0
                },
                J = 0,
                K = function () {
                    clearTimeout(u), J = 0, k && v.setIdle(!1)
                },
                L = function (a) {
                    a = a ? a : window.event;
                    var b = a.relatedTarget || a.toElement;
                    b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
                        v.setIdle(!0)
                    }, q.timeToIdleOutside))
                },
                M = function () {
                    q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
                },
                N = function () {
                    q.preloaderEl && (O(!0), l("beforeChange", function () {
                        clearTimeout(o), o = setTimeout(function () {
                            a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
                        }, q.loadingIndicatorDelay)
                    }), l("imageLoadComplete", function (b, c) {
                        a.currItem === c && O(!0)
                    }))
                },
                O = function (a) {
                    n !== a && (C(m, "preloader--active", !a), n = a)
                },
                P = function (a) {
                    var c = a.vGap;
                    if (B()) {
                        var g = q.barsSize;
                        if (q.captionEl && "auto" === g.bottom)
                            if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                                var h = f.clientHeight;
                                c.bottom = parseInt(h, 10) || 44
                            } else
                                c.bottom = g.top;
                        else
                            c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                        c.top = g.top
                    } else
                        c.top = c.bottom = 0
                },
                Q = function () {
                    q.timeToIdle && l("mouseUsed", function () {
                        b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
                            J++, 2 === J && v.setIdle(!0)
                        }, q.timeToIdle / 2)
                    })
                },
                R = function () {
                    l("onVerticalDrag", function (a) {
                        x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls()
                    });
                    var a;
                    l("onPinchClose", function (b) {
                        x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
                    }), l("zoomGestureEnded", function () {
                        a = !1, a && !x && v.showControls()
                    })
                },
                S = [{
                        name: "caption",
                        option: "captionEl",
                        onInit: function (a) {
                            e = a
                        }
                    }, {
                        name: "share-modal",
                        option: "shareEl",
                        onInit: function (a) {
                            i = a
                        },
                        onTap: function () {
                            F()
                        }
                    }, {
                        name: "button--share",
                        option: "shareEl",
                        onInit: function (a) {
                            h = a
                        },
                        onTap: function () {
                            F()
                        }
                    }, {
                        name: "button--zoom",
                        option: "zoomEl",
                        onTap: a.toggleDesktopZoom
                    }, {
                        name: "counter",
                        option: "counterEl",
                        onInit: function (a) {
                            g = a
                        }
                    }, {
                        name: "button--close",
                        option: "closeEl",
                        onTap: a.close
                    }, {
                        name: "button--arrow--left",
                        option: "arrowEl",
                        onTap: a.prev
                    }, {
                        name: "button--arrow--right",
                        option: "arrowEl",
                        onTap: a.next
                    }, {
                        name: "button--fs",
                        option: "fullscreenEl",
                        onTap: function () {
                            c.isFullscreen() ? c.exit() : c.enter()
                        }
                    }, {
                        name: "preloader",
                        option: "preloaderEl",
                        onInit: function (a) {
                            m = a
                        }
                    }],
                T = function () {
                    var a, c, e, f = function (d) {
                        if (d)
                            for (var f = d.length, g = 0; g < f; g++) {
                                a = d[g], c = a.className;
                                for (var h = 0; h < S.length; h++)
                                    e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
                            }
                    };
                    f(d.children);
                    var g = b.getChildByClass(d, "pswp__top-bar");
                    g && f(g.children)
                };
        v.init = function () {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function (a, b, c) {
                var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function () {
                b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
            }), l("unbindEvents", function () {
                y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
            }), l("destroy", function () {
                q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
            }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
                q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
            }), l("initialZoomOut", function () {
                b.addClass(d, "pswp__ui--hidden")
            }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function (a) {
            k = a, C(d, "ui--idle", a)
        }, v.update = function () {
            x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
        }, v.updateFullscreen = function (d) {
            d && setTimeout(function () {
                a.setScrollOffset(0, b.getScrollY())
            }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
        }, v.updateIndexIndicator = function () {
            q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
        }, v.onGlobalTap = function (c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)
                if (c.detail && "mouse" === c.detail.pointerType) {
                    if (I(d))
                        return void a.close();
                    b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
                } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))
                    return void a.close()
        }, v.onMouseOver = function (a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function () {
            b.addClass(d, "pswp__ui--hidden"), x = !1
        }, v.showControls = function () {
            x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
        }, v.supportsFullscreen = function () {
            var a = document;
            return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
        }, v.getFullscreenAPI = function () {
            var b, c = document.documentElement,
                    d = "fullscreenchange";
            return c.requestFullscreen ? b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d
            } : c.mozRequestFullScreen ? b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d
            } : c.webkitRequestFullscreen ? b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d
            } : c.msRequestFullscreen && (b = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), b && (b.enter = function () {
                return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, b.exit = function () {
                return q.closeOnScroll = j, document[this.exitK]()
            }, b.isFullscreen = function () {
                return document[this.elementK]
            }), b
        }
    };
    return a
});
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.PhotoSwipe = factory();
    }
})(this, function () {
    'use strict';
    var PhotoSwipe = function (template, UiClass, items, options) {
        var framework = {
            features: null,
            bind: function (target, type, listener, unbind) {
                var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
                type = type.split(' ');
                for (var i = 0; i < type.length; i++) {
                    if (type[i]) {
                        target[methodName](type[i], listener, false);
                    }
                }
            },
            isArray: function (obj) {
                return (obj instanceof Array);
            },
            createEl: function (classes, tag) {
                var el = document.createElement(tag || 'div');
                if (classes) {
                    el.className = classes;
                }
                return el;
            },
            getScrollY: function () {
                var yOffset = window.pageYOffset;
                return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
            },
            unbind: function (target, type, listener) {
                framework.bind(target, type, listener, true);
            },
            removeClass: function (el, className) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            },
            addClass: function (el, className) {
                if (!framework.hasClass(el, className)) {
                    el.className += (el.className ? ' ' : '') + className;
                }
            },
            hasClass: function (el, className) {
                return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
            },
            getChildByClass: function (parentEl, childClassName) {
                var node = parentEl.firstChild;
                while (node) {
                    if (framework.hasClass(node, childClassName)) {
                        return node;
                    }
                    node = node.nextSibling;
                }
            },
            arraySearch: function (array, value, key) {
                var i = array.length;
                while (i--) {
                    if (array[i][key] === value) {
                        return i;
                    }
                }
                return -1;
            },
            extend: function (o1, o2, preventOverwrite) {
                for (var prop in o2) {
                    if (o2.hasOwnProperty(prop)) {
                        if (preventOverwrite && o1.hasOwnProperty(prop)) {
                            continue;
                        }
                        o1[prop] = o2[prop];
                    }
                }
            },
            easing: {
                sine: {
                    out: function (k) {
                        return Math.sin(k * (Math.PI / 2));
                    },
                    inOut: function (k) {
                        return -(Math.cos(Math.PI * k) - 1) / 2;
                    }
                },
                cubic: {
                    out: function (k) {
                        return --k * k * k + 1;
                    }
                }
                /*
                 elastic: {
                 out: function ( k ) {
                 var s, a = 0.1, p = 0.4;
                 if ( k === 0 ) return 0;
                 if ( k === 1 ) return 1;
                 if ( !a || a < 1 ) { a = 1; s = p / 4; }
                 else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                 return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
                 },
                 },
                 back: {
                 out: function ( k ) {
                 var s = 1.70158;
                 return --k * k * ( ( s + 1 ) * k + s ) + 1;
                 }
                 }
                 */
            },
            /**
             *
             * @return {object}
             *
             * {
             *  raf : request animation frame function
             *  caf : cancel animation frame function
             *  transfrom : transform property key (with vendor), or null if not supported
             *  oldIE : IE8 or below
             * }
             *
             */
            detectFeatures: function () {
                if (framework.features) {
                    return framework.features;
                }
                var helperEl = framework.createEl(),
                        helperStyle = helperEl.style,
                        vendor = '',
                        features = {};
                // IE8 and below
                features.oldIE = document.all && !document.addEventListener;
                features.touch = 'ontouchstart' in window;
                if (window.requestAnimationFrame) {
                    features.raf = window.requestAnimationFrame;
                    features.caf = window.cancelAnimationFrame;
                }
                features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;
                // fix false-positive detection of old Android in new IE
                // (IE11 ua string contains "Android 4.0")
                if (!features.pointerEvent) {
                    var ua = navigator.userAgent;
                    // Detect if device is iPhone or iPod and if it's older than iOS 8
                    // This detection is made because of buggy top/bottom toolbars
                    // that don't trigger window.resize event.
                    // For more info refer to _isFixedPosition variable in core.js
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                        if (v && v.length > 0) {
                            v = parseInt(v[1], 10);
                            if (v >= 1 && v < 8) {
                                features.isOldIOSPhone = true;
                            }
                        }
                    }
                    // Detect old Android (before KitKat)
                    // due to bugs related to position:fixed
                    var match = ua.match(/Android\s([0-9\.]*)/);
                    var androidversion = match ? match[1] : 0;
                    androidversion = parseFloat(androidversion);
                    if (androidversion >= 1) {
                        if (androidversion < 4.4) {
                            features.isOldAndroid = true; // for fixed position bug & performance
                        }
                        features.androidVersion = androidversion; // for touchend bug
                    }
                    features.isMobileOpera = /opera mini|opera mobi/i.test(ua);
                    // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
                }
                var styleChecks = ['transform', 'perspective', 'animationName'],
                        vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
                        styleCheckItem,
                        styleName;
                for (var i = 0; i < 4; i++) {
                    vendor = vendors[i];
                    for (var a = 0; a < 3; a++) {
                        styleCheckItem = styleChecks[a];
                        // uppercase first letter of property name, if vendor is present
                        styleName = vendor + (vendor ?
                                styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
                                styleCheckItem);
                        if (!features[styleCheckItem] && styleName in helperStyle) {
                            features[styleCheckItem] = styleName;
                        }
                    }
                    if (vendor && !features.raf) {
                        vendor = vendor.toLowerCase();
                        features.raf = window[vendor + 'RequestAnimationFrame'];
                        if (features.raf) {
                            features.caf = window[vendor + 'CancelAnimationFrame'] ||
                                    window[vendor + 'CancelRequestAnimationFrame'];
                        }
                    }
                }
                if (!features.raf) {
                    var lastTime = 0;
                    features.raf = function (fn) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function () {
                            fn(currTime + timeToCall);
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };
                    features.caf = function (id) {
                        clearTimeout(id);
                    };
                }
                // Detect SVG support
                features.svg = !!document.createElementNS &&
                        !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
                framework.features = features;
                return features;
            }
        };
        framework.detectFeatures();
        // Override addEventListener for old versions of IE
        if (framework.features.oldIE) {
            framework.bind = function (target, type, listener, unbind) {
                type = type.split(' ');
                var methodName = (unbind ? 'detach' : 'attach') + 'Event',
                        evName,
                        _handleEv = function () {
                            listener.handleEvent.call(listener);
                        };
                for (var i = 0; i < type.length; i++) {
                    evName = type[i];
                    if (evName) {
                        if (typeof listener === 'object' && listener.handleEvent) {
                            if (!unbind) {
                                listener['oldIE' + evName] = _handleEv;
                            } else {
                                if (!listener['oldIE' + evName]) {
                                    return false;
                                }
                            }
                            target[methodName]('on' + evName, listener['oldIE' + evName]);
                        } else {
                            target[methodName]('on' + evName, listener);
                        }
                    }
                }
            };
        }
        var self = this;
        /**
         * Static vars, don't change unless you know what you're doing.
         */
        var DOUBLE_TAP_RADIUS = 25,
                NUM_HOLDERS = 3;
        /**
         * Options
         */
        var _options = {
            allowPanToNext: true,
            spacing: 0.12,
            bgOpacity: 1,
            mouseUsed: false,
            loop: true,
            pinchToClose: true,
            closeOnScroll: true,
            closeOnVerticalDrag: true,
            verticalDragRange: 0.75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: false,
            focus: true,
            escKey: true,
            arrowKeys: true,
            mainScrollEndFriction: 0.35,
            panEndFriction: 0.35,
            idx: 0,
            isClickableElement: function (el) {
                return el.tagName === 'A';
            },
            getDoubleTapZoom: function (isMouseClick, item) {
                if (isMouseClick) {
                    return 1;
                } else {
                    return item.initialZoomLevel < 0.7 ? 1 : 1.33;
                }
            },
            maxSpreadZoom: 1.33,
            modal: true,
            // not fully implemented yet
            scaleMode: 'fit' // TODO
        };
        framework.extend(_options, options);
        /**
         * Private helper variables & functions
         */
        var _getEmptyPoint = function () {
            return {
                x: 0,
                y: 0
            };
        };
        var _isOpen,
                _isDestroying,
                _closedByScroll,
                _currentItemIndex,
                _containerStyle,
                _containerShiftIndex,
                _currPanDist = _getEmptyPoint(),
                _startPanOffset = _getEmptyPoint(),
                _panOffset = _getEmptyPoint(),
                _upMoveEvents, // drag move, drag end & drag cancel events array
                _downEvents, // drag start events array
                _globalEventHandlers,
                _viewportSize = {},
                _currZoomLevel,
                _startZoomLevel,
                _translatePrefix,
                _translateSufix,
                _updateSizeInterval,
                _itemsNeedUpdate,
                _currPositionIndex = 0,
                _offset = {},
                _slideSize = _getEmptyPoint(), // size of slide area, including spacing
                _itemHolders,
                _prevItemIndex,
                _indexDiff = 0, // difference of indexes since last content update
                _dragStartEvent,
                _dragMoveEvent,
                _dragEndEvent,
                _dragCancelEvent,
                _transformKey,
                _pointerEventEnabled,
                _isFixedPosition = true,
                _likelyTouchDevice,
                _modules = [],
                _requestAF,
                _cancelAF,
                _initalClassName,
                _initalWindowScrollY,
                _oldIE,
                _currentWindowScrollY,
                _features,
                _windowVisibleSize = {},
                _renderMaxResolution = false,
                _orientationChangeTimeout,
                // Registers PhotoSWipe module (History, Controller ...)
                _registerModule = function (name, module) {
                    framework.extend(self, module.publicMethods);
                    _modules.push(name);
                },
                _getLoopedId = function (index) {
                    var numSlides = _getNumItems();
                    if (index > numSlides - 1) {
                        return index - numSlides;
                    } else if (index < 0) {
                        return numSlides + index;
                    }
                    return index;
                },
                // Micro bind/trigger
                _listeners = {},
                _listen = function (name, fn) {
                    if (!_listeners[name]) {
                        _listeners[name] = [];
                    }
                    return _listeners[name].push(fn);
                },
                _shout = function (name) {
                    var listeners = _listeners[name];
                    if (listeners) {
                        var args = Array.prototype.slice.call(arguments);
                        args.shift();
                        for (var i = 0; i < listeners.length; i++) {
                            listeners[i].apply(self, args);
                        }
                    }
                },
                _getCurrentTime = function () {
                    return new Date().getTime();
                },
                _applyBgOpacity = function (opacity) {
                    _bgOpacity = opacity;
                    self.bg.style.opacity = opacity * _options.bgOpacity;
                },
                _applyZoomTransform = function (styleObj, x, y, zoom, item) {
                    if (!_renderMaxResolution || (item && item !== self.currItem)) {
                        zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
                    }
                    styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
                },
                _applyCurrentZoomPan = function (allowRenderResolution) {
                    if (_currZoomElementStyle) {
                        if (allowRenderResolution) {
                            if (_currZoomLevel > self.currItem.fitRatio) {
                                if (!_renderMaxResolution) {
                                    _setImageSize(self.currItem, false, true);
                                    _renderMaxResolution = true;
                                }
                            } else {
                                if (_renderMaxResolution) {
                                    _setImageSize(self.currItem);
                                    _renderMaxResolution = false;
                                }
                            }
                        }
                        _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
                    }
                },
                _applyZoomPanToItem = function (item) {
                    if (item.container) {
                        _applyZoomTransform(item.container.style,
                                item.initialPosition.x,
                                item.initialPosition.y,
                                item.initialZoomLevel,
                                item);
                    }
                },
                _setTranslateX = function (x, elStyle) {
                    elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
                },
                _moveMainScroll = function (x, dragging) {
                    if (!_options.loop && dragging) {
                        var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
                                delta = Math.round(x - _mainScrollPos.x);
                        if ((newSlideIndexOffset < 0 && delta > 0) ||
                                (newSlideIndexOffset >= _getNumItems() - 1 && delta < 0)) {
                            x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
                        }
                    }
                    _mainScrollPos.x = x;
                    _setTranslateX(x, _containerStyle);
                },
                _calculatePanOffset = function (axis, zoomLevel) {
                    var m = _midZoomPoint[axis] - _offset[axis];
                    return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
                },
                _equalizePoints = function (p1, p2) {
                    p1.x = p2.x;
                    p1.y = p2.y;
                    if (p2.id) {
                        p1.id = p2.id;
                    }
                },
                _roundPoint = function (p) {
                    p.x = Math.round(p.x);
                    p.y = Math.round(p.y);
                },
                _mouseMoveTimeout = null,
                _onFirstMouseMove = function () {
                    // Wait until mouse move event is fired at least twice during 100ms
                    // We do this, because some mobile browsers trigger it on touchstart
                    if (_mouseMoveTimeout) {
                        framework.unbind(document, 'mousemove', _onFirstMouseMove);
                        framework.addClass(template, 'pswp--has_mouse');
                        _options.mouseUsed = true;
                        _shout('mouseUsed');
                    }
                    _mouseMoveTimeout = setTimeout(function () {
                        _mouseMoveTimeout = null;
                    }, 100);
                },
                _bindEvents = function () {
                    framework.bind(document, 'keydown', self);
                    if (_features.transform) {
                        // don't bind click event in browsers that don't support transform (mostly IE8)
                        framework.bind(self.scrollWrap, 'click', self);
                    }
                    if (!_options.mouseUsed) {
                        framework.bind(document, 'mousemove', _onFirstMouseMove);
                    }
                    framework.bind(window, 'resize scroll orientationchange', self);
                    _shout('bindEvents');
                },
                _unbindEvents = function () {
                    framework.unbind(window, 'resize scroll orientationchange', self);
                    framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
                    framework.unbind(document, 'keydown', self);
                    framework.unbind(document, 'mousemove', _onFirstMouseMove);
                    if (_features.transform) {
                        framework.unbind(self.scrollWrap, 'click', self);
                    }
                    if (_isDragging) {
                        framework.unbind(window, _upMoveEvents, self);
                    }
                    clearTimeout(_orientationChangeTimeout);
                    _shout('unbindEvents');
                },
                _calculatePanBounds = function (zoomLevel, update) {
                    var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
                    if (update) {
                        _currPanBounds = bounds;
                    }
                    return bounds;
                },
                _getMinZoomLevel = function (item) {
                    if (!item) {
                        item = self.currItem;
                    }
                    return item.initialZoomLevel;
                },
                _getMaxZoomLevel = function (item) {
                    if (!item) {
                        item = self.currItem;
                    }
                    return item.w > 0 ? _options.maxSpreadZoom : 1;
                },
                // Return true if offset is out of the bounds
                _modifyDestPanOffset = function (axis, destPanBounds, destPanOffset, destZoomLevel) {
                    if (destZoomLevel === self.currItem.initialZoomLevel) {
                        destPanOffset[axis] = self.currItem.initialPosition[axis];
                        return true;
                    } else {
                        destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);
                        if (destPanOffset[axis] > destPanBounds.min[axis]) {
                            destPanOffset[axis] = destPanBounds.min[axis];
                            return true;
                        } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
                            destPanOffset[axis] = destPanBounds.max[axis];
                            return true;
                        }
                    }
                    return false;
                },
                _setupTransforms = function () {
                    if (_transformKey) {
                        // setup 3d transforms
                        var allow3dTransform = _features.perspective && !_likelyTouchDevice;
                        _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
                        _translateSufix = _features.perspective ? ', 0px)' : ')';
                        return;
                    }
                    // Override zoom/pan/move functions in case old browser is used (most likely IE)
                    // (so they use left/top/width/height, instead of CSS transform)
                    _transformKey = 'left';
                    framework.addClass(template, 'pswp--ie');
                    _setTranslateX = function (x, elStyle) {
                        elStyle.left = x + 'px';
                    };
                    _applyZoomPanToItem = function (item) {
                        var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                                s = item.container.style,
                                w = zoomRatio * item.w,
                                h = zoomRatio * item.h;
                        s.width = w + 'px';
                        s.height = h + 'px';
                        s.left = item.initialPosition.x + 'px';
                        s.top = item.initialPosition.y + 'px';
                    };
                    _applyCurrentZoomPan = function () {
                        if (_currZoomElementStyle) {
                            var s = _currZoomElementStyle,
                                    item = self.currItem,
                                    zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                                    w = zoomRatio * item.w,
                                    h = zoomRatio * item.h;
                            s.width = w + 'px';
                            s.height = h + 'px';
                            s.left = _panOffset.x + 'px';
                            s.top = _panOffset.y + 'px';
                        }
                    };
                },
                _onKeyDown = function (e) {
                    var keydownAction = '';
                    if (_options.escKey && e.keyCode === 27) {
                        keydownAction = 'close';
                    } else if (_options.arrowKeys) {
                        if (e.keyCode === 37) {
                            keydownAction = 'prev';
                        } else if (e.keyCode === 39) {
                            keydownAction = 'next';
                        }
                    }
                    if (keydownAction) {
                        // don't do anything if special key pressed to prevent from overriding default browser actions
                        // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
                        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            self[keydownAction]();
                        }
                    }
                    var keydownAction = '';
                    if (_options.escKey && e.keyCode === 27) {
                        keydownAction = 'close';
                    } else if (_options.arrowKeys) {
                        if (e.keyCode === 37) {
                            keydownAction = 'prev';
                        } else if (e.keyCode === 39) {
                            keydownAction = 'next';
                        }
                    }
                    if (keydownAction) {
                        // don't do anything if special key pressed to prevent from overriding default browser actions
                        // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
                        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            self[keydownAction]();
                        }
                    }

                    /******** Code for trapping focus inside the Image Pop up starts ********/
                    if ($(template).hasClass('pswp--zoom-allowed')) {
                        var focusableEls = $(template).find('button:not(:disabled)');
                    } else {
                        var focusableEls = $(template).find('button:visible');
                    }
                    var firstFocusableEl = focusableEls[0];
                    var lastFocusableEl = focusableEls[focusableEls.length - 1];
                    var KEYCODE_TAB = 9;
                    var isTabPressed = (e.key === 'Tab' || e.which === KEYCODE_TAB);

                    if (!isTabPressed) {
                        return;
                    }
                    if (e.shiftKey) /* shift + tab */ {
                        if (document.activeElement === firstFocusableEl) {
                            if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                                _options.idx = focusableEls.length - 1;
                            }
                            e.preventDefault();
                            lastFocusableEl.focus();
                        } else {
                            if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                                e.preventDefault();
                                focusableEls[--_options.idx].focus();
                            }
                        }
                    } else /* tab */ {
                        if (document.activeElement === lastFocusableEl) {
                            if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                                _options.idx = 0;
                            }
                            e.preventDefault();
                            firstFocusableEl.focus();
                        } else {
                            if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                                e.preventDefault();
                                focusableEls[++_options.idx].focus();
                            }
                        }
                    }
                    /******** Code for trapping focus inside the Image Pop up ends********/
                },
                _onGlobalClick = function (e) {
                    if (!e) {
                        return;
                    }
                    // don't allow click event to pass through when triggering after drag or some other gesture
                    if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                _updatePageScrollOffset = function () {
                    self.setScrollOffset(0, framework.getScrollY());
                };
        // Micro animation engine
        var _animations = {},
                _numAnimations = 0,
                _stopAnimation = function (name) {
                    if (_animations[name]) {
                        if (_animations[name].raf) {
                            _cancelAF(_animations[name].raf);
                        }
                        _numAnimations--;
                        delete _animations[name];
                    }
                },
                _registerStartAnimation = function (name) {
                    if (_animations[name]) {
                        _stopAnimation(name);
                    }
                    if (!_animations[name]) {
                        _numAnimations++;
                        _animations[name] = {};
                    }
                },
                _stopAllAnimations = function () {
                    for (var prop in _animations) {
                        if (_animations.hasOwnProperty(prop)) {
                            _stopAnimation(prop);
                        }
                    }
                },
                _animateProp = function (name, b, endProp, d, easingFn, onUpdate, onComplete) {
                    var startAnimTime = _getCurrentTime(),
                            t;
                    _registerStartAnimation(name);
                    var animloop = function () {
                        if (_animations[name]) {
                            t = _getCurrentTime() - startAnimTime; // time diff
                            //b - beginning (start prop)
                            //d - anim duration
                            if (t >= d) {
                                _stopAnimation(name);
                                onUpdate(endProp);
                                if (onComplete) {
                                    onComplete();
                                }
                                return;
                            }
                            onUpdate((endProp - b) * easingFn(t / d) + b);
                            _animations[name].raf = _requestAF(animloop);
                        }
                    };
                    animloop();
                };
        var publicMethods = {
            // make a few local variables and functions public
            shout: _shout,
            listen: _listen,
            viewportSize: _viewportSize,
            options: _options,
            isMainScrollAnimating: function () {
                return _mainScrollAnimating;
            },
            getZoomLevel: function () {
                return _currZoomLevel;
            },
            getCurrentIndex: function () {
                return _currentItemIndex;
            },
            isDragging: function () {
                return _isDragging;
            },
            isZooming: function () {
                return _isZooming;
            },
            setScrollOffset: function (x, y) {
                _offset.x = x;
                _currentWindowScrollY = _offset.y = y;
                _shout('updateScrollOffset', _offset);
            },
            applyZoomPan: function (zoomLevel, panX, panY, allowRenderResolution) {
                _panOffset.x = panX;
                _panOffset.y = panY;
                _currZoomLevel = zoomLevel;
                _applyCurrentZoomPan(allowRenderResolution);
            },
            init: function () {
                if (_isOpen || _isDestroying) {
                    return;
                }
                var i;
                self.framework = framework; // basic functionality
                self.template = template; // root DOM element of PhotoSwipe
                self.bg = framework.getChildByClass(template, 'pswp__bg');
                _initalClassName = template.className;
                _isOpen = true;
                _features = framework.detectFeatures();
                _requestAF = _features.raf;
                _cancelAF = _features.caf;
                _transformKey = _features.transform;
                _oldIE = _features.oldIE;
                self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
                self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');
                _containerStyle = self.container.style; // for fast access
                // Objects that hold slides (there are only 3 in DOM)
                self.itemHolders = _itemHolders = [{
                        el: self.container.children[0],
                        wrap: 0,
                        index: -1
                    },
                    {
                        el: self.container.children[1],
                        wrap: 0,
                        index: -1
                    },
                    {
                        el: self.container.children[2],
                        wrap: 0,
                        index: -1
                    }
                ];
                // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
                _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';
                _setupTransforms();
                // Setup global events
                _globalEventHandlers = {
                    resize: self.updateSize,
                    // Fixes: iOS 10.3 resize event
                    // does not update scrollWrap.clientWidth instantly after resize
                    // https://github.com/dimsemenov/PhotoSwipe/issues/1315
                    orientationchange: function () {
                        clearTimeout(_orientationChangeTimeout);
                        _orientationChangeTimeout = setTimeout(function () {
                            if (_viewportSize.x !== self.scrollWrap.clientWidth) {
                                self.updateSize();
                            }
                        }, 500);
                    },
                    scroll: _updatePageScrollOffset,
                    keydown: _onKeyDown,
                    click: _onGlobalClick
                };
                // disable show/hide effects on old browsers that don't support CSS animations or transforms,
                // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
                var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
                if (!_features.animationName || !_features.transform || oldPhone) {
                    _options.showAnimationDuration = _options.hideAnimationDuration = 0;
                }
                // init modules
                for (i = 0; i < _modules.length; i++) {
                    self['init' + _modules[i]]();
                }
                // init
                if (UiClass) {
                    var ui = self.ui = new UiClass(self, framework);
                    ui.init();
                }
                _shout('firstUpdate');
                _currentItemIndex = _currentItemIndex || _options.index || 0;
                // validate index
                if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
                    _currentItemIndex = 0;
                }
                self.currItem = _getItemAt(_currentItemIndex);
                if (_features.isOldIOSPhone || _features.isOldAndroid) {
                    _isFixedPosition = false;
                }
                template.setAttribute('aria-hidden', 'false');
                if (_options.modal) {
                    if (!_isFixedPosition) {
                        template.style.position = 'absolute';
                        template.style.top = framework.getScrollY() + 'px';
                    } else {
                        template.style.position = 'fixed';
                    }
                }
                if (_currentWindowScrollY === undefined) {
                    _shout('initialLayout');
                    _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
                }
                // add classes to root element of PhotoSwipe
                var rootClasses = 'pswp--open ';
                if (_options.mainClass) {
                    rootClasses += _options.mainClass + ' ';
                }
                if (_options.showHideOpacity) {
                    rootClasses += 'pswp--animate_opacity ';
                }
                rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
                rootClasses += _features.animationName ? ' pswp--css_animation' : '';
                rootClasses += _features.svg ? ' pswp--svg' : '';
                framework.addClass(template, rootClasses);
                self.updateSize();
                // initial update
                _containerShiftIndex = -1;
                _indexDiff = null;
                for (i = 0; i < NUM_HOLDERS; i++) {
                    _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
                }
                if (!_oldIE) {
                    framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
                }
                _listen('initialZoomInEnd', function () {
                    self.setContent(_itemHolders[0], _currentItemIndex - 1);
                    self.setContent(_itemHolders[2], _currentItemIndex + 1);
                    _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';
                    if (_options.focus) {
                        // focus causes layout,
                        // which causes lag during the animation,
                        // that's why we delay it untill the initial zoom transition ends
                        template.focus();
                        $(template).find('.pswp__button--close').focus();
                    }
                    _bindEvents();
                });
                // set content for center slide (first time)
                self.setContent(_itemHolders[1], _currentItemIndex);
                self.updateCurrItem();
                _shout('afterInit');
                if (!_isFixedPosition) {
                    // On all versions of iOS lower than 8.0, we check size of viewport every second.
                    //
                    // This is done to detect when Safari top & bottom bars appear,
                    // as this action doesn't trigger any events (like resize).
                    //
                    // On iOS8 they fixed this.
                    //
                    // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
                    _updateSizeInterval = setInterval(function () {
                        if (!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)) {
                            self.updateSize();
                        }
                    }, 1000);
                }
                framework.addClass(template, 'pswp--visible');
            },
            // Close the gallery, then destroy it
            close: function () {
                $('.lm__in').prop('disabled', false);
                $('.lm__out').prop('disabled', false);
                $('body').css('overflow', 'auto');
                $('.lm_img_lightbox img.activeImg').focus();
                $('.emptyFigCaption').remove();
                if (!_isOpen) {
                    return;
                }
                _isOpen = false;
                _isDestroying = true;
                _shout('close');
                _unbindEvents();
                _showOrHide(self.currItem, null, true, self.destroy);
            },
            // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)  sasa
            destroy: function () {
                _shout('destroy');
                if (_showOrHideTimeout) {
                    clearTimeout(_showOrHideTimeout);
                }
                template.setAttribute('aria-hidden', 'true');
                template.className = _initalClassName;
                if (_updateSizeInterval) {
                    clearInterval(_updateSizeInterval);
                }
                framework.unbind(self.scrollWrap, _downEvents, self);
                // we unbind scroll event at the end, as closing animation may depend on it
                framework.unbind(window, 'scroll', self);
                _stopDragUpdateLoop();
                _stopAllAnimations();
                _listeners = null;
            },
            /**
             * Pan image to position
             * @param {Number} x
             * @param {Number} y
             * @param {Boolean} force Will ignore bounds if set to true.
             */
            panTo: function (x, y, force) {
                if (!force) {
                    if (x > _currPanBounds.min.x) {
                        x = _currPanBounds.min.x;
                    } else if (x < _currPanBounds.max.x) {
                        x = _currPanBounds.max.x;
                    }
                    if (y > _currPanBounds.min.y) {
                        y = _currPanBounds.min.y;
                    } else if (y < _currPanBounds.max.y) {
                        y = _currPanBounds.max.y;
                    }
                }
                _panOffset.x = x;
                _panOffset.y = y;
                _applyCurrentZoomPan();
            },
            handleEvent: function (e) {
                e = e || window.event;
                if (_globalEventHandlers[e.type]) {
                    _globalEventHandlers[e.type](e);
                }
            },
            goTo: function (index) {
                index = _getLoopedId(index);
                var diff = index - _currentItemIndex;
                _indexDiff = diff;
                _currentItemIndex = index;
                self.currItem = _getItemAt(_currentItemIndex);
                _currPositionIndex -= diff;
                _moveMainScroll(_slideSize.x * _currPositionIndex);
                _stopAllAnimations();
                _mainScrollAnimating = false;
                self.updateCurrItem();
            },
            next: function () {
                $('.lm__in').prop('disabled', false);
                $('.lm__out').prop('disabled', false);
                self.goTo(_currentItemIndex + 1);
            },
            prev: function () {
                $('.lm__in').prop('disabled', false);
                $('.lm__out').prop('disabled', false);
                self.goTo(_currentItemIndex - 1);
            },
            // update current zoom/pan objects
            updateCurrZoomItem: function (emulateSetContent) {
                if (emulateSetContent) {
                    _shout('beforeChange', 0);
                }
                // itemHolder[1] is middle (current) item
                if (_itemHolders[1].el.children.length) {
                    var zoomElement = _itemHolders[1].el.children[0];
                    if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
                        _currZoomElementStyle = zoomElement.style;
                    } else {
                        _currZoomElementStyle = null;
                    }
                } else {
                    _currZoomElementStyle = null;
                }
                _currPanBounds = self.currItem.bounds;
                _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
                _panOffset.x = _currPanBounds.center.x;
                _panOffset.y = _currPanBounds.center.y;
                //_panOffset.y=0;
                //_panOffset.y=0;
                if (emulateSetContent) {
                    _shout('afterChange');
                }
            },
            invalidateCurrItems: function () {
                _itemsNeedUpdate = true;
                for (var i = 0; i < NUM_HOLDERS; i++) {
                    if (_itemHolders[i].item) {
                        _itemHolders[i].item.needsUpdate = true;
                    }
                }
            },
            updateCurrItem: function (beforeAnimation) {
                if (_indexDiff === 0) {
                    return;
                }
                var diffAbs = Math.abs(_indexDiff),
                        tempHolder;
                if (beforeAnimation && diffAbs < 2) {
                    return;
                }
                self.currItem = _getItemAt(_currentItemIndex);
                _renderMaxResolution = false;
                _shout('beforeChange', _indexDiff);
                if (diffAbs >= NUM_HOLDERS) {
                    _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
                    diffAbs = NUM_HOLDERS;
                }
                for (var i = 0; i < diffAbs; i++) {
                    if (_indexDiff > 0) {
                        tempHolder = _itemHolders.shift();
                        _itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last
                        _containerShiftIndex++;
                        _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
                        self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
                    } else {
                        tempHolder = _itemHolders.pop();
                        _itemHolders.unshift(tempHolder); // move last to first
                        _containerShiftIndex--;
                        _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
                        self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
                    }
                }
                // reset zoom/pan on previous item
                if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
                    var prevItem = _getItemAt(_prevItemIndex);
                    if (prevItem.initialZoomLevel !== _currZoomLevel) {
                        _calculateItemSize(prevItem, _viewportSize);
                        _setImageSize(prevItem);
                        _applyZoomPanToItem(prevItem);
                    }
                }
                // reset diff after update
                _indexDiff = 0;
                self.updateCurrZoomItem();
                _prevItemIndex = _currentItemIndex;
                _shout('afterChange');
            },
            updateSize: function (force) {
                $('.lm__in').prop('disabled', false);
                $('.lm__out').prop('disabled', false);
                if (!_isFixedPosition && _options.modal) {
                    var windowScrollY = framework.getScrollY();
                    if (_currentWindowScrollY !== windowScrollY) {
                        template.style.top = windowScrollY + 'px';
                        _currentWindowScrollY = windowScrollY;
                    }
                    if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                        return;
                    }
                    _windowVisibleSize.x = window.innerWidth;
                    _windowVisibleSize.y = window.innerHeight;
                    //template.style.width = _windowVisibleSize.x + 'px';
                    template.style.height = _windowVisibleSize.y + 'px';
                }
                _viewportSize.x = self.scrollWrap.clientWidth;
                _viewportSize.y = self.scrollWrap.clientHeight;
                _updatePageScrollOffset();
                _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
                _slideSize.y = _viewportSize.y;
                _moveMainScroll(_slideSize.x * _currPositionIndex);
                _shout('beforeResize'); // even may be used for example to switch image sources
                // don't re-calculate size on inital size update
                if (_containerShiftIndex !== undefined) {
                    var holder,
                            item,
                            hIndex;
                    for (var i = 0; i < NUM_HOLDERS; i++) {
                        holder = _itemHolders[i];
                        _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);
                        hIndex = _currentItemIndex + i - 1;
                        if (_options.loop && _getNumItems() > 2) {
                            hIndex = _getLoopedId(hIndex);
                        }
                        // update zoom level on items and refresh source (if needsUpdate)
                        item = _getItemAt(hIndex);
                        // re-render gallery item if `needsUpdate`,
                        // or doesn't have `bounds` (entirely new slide object)
                        if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
                            self.cleanSlide(item);
                            self.setContent(holder, hIndex);
                            // if "center" slide
                            if (i === 1) {
                                self.currItem = item;
                                self.updateCurrZoomItem(true);
                            }
                            item.needsUpdate = false;
                        } else if (holder.index === -1 && hIndex >= 0) {
                            // add content first time
                            self.setContent(holder, hIndex);
                        }
                        if (item && item.container) {
                            _calculateItemSize(item, _viewportSize);
                            _setImageSize(item);
                            _applyZoomPanToItem(item);
                        }
                    }
                    _itemsNeedUpdate = false;
                }
                _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
                _currPanBounds = self.currItem.bounds;
                if (_currPanBounds) {
                    _panOffset.x = _currPanBounds.center.x;
                    _panOffset.y = _currPanBounds.center.y;
                    _applyCurrentZoomPan(true);
                }
                _shout('resize');
            },
            // Zoom current item to
            zoomTo: function (destZoomLevel, centerPoint, speed, easingFn, updateFn) {
                if ($("#gallery").hasClass('pswp--zoomed-in')) {
                    $('.lm__in').prop('disabled', false);
                    $('.lm__out').prop('disabled', true);
                    $('.lm__in').focus();
                } else {
                    $('.lm__in').prop('disabled', true);
                    $('.lm__out').prop('disabled', false);
                    $('.lm__out').focus();
                }
                //         if((!$("#gallery").hasClass('pswp--zoomed-in'))&&$(event.target).hasClass('zoomOutBtn')){
                //            return;
                //        }
                /*
                 if(destZoomLevel === 'fit') {
                 destZoomLevel = self.currItem.fitRatio;
                 } else if(destZoomLevel === 'fill') {
                 destZoomLevel = self.currItem.fillRatio;
                 }
                 */
                if (centerPoint) {
                    _startZoomLevel = _currZoomLevel;
                    _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
                    _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
                    _equalizePoints(_startPanOffset, _panOffset);
                }
                var destPanBounds = _calculatePanBounds(destZoomLevel, false),
                        destPanOffset = {};
                _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
                _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);
                var initialZoomLevel = _currZoomLevel;
                var initialPanOffset = {
                    x: _panOffset.x,
                    y: _panOffset.y
                };
                _roundPoint(destPanOffset);
                var onUpdate = function (now) {
                    if (now === 1) {
                        _currZoomLevel = destZoomLevel;
                        _panOffset.x = destPanOffset.x;
                        _panOffset.y = destPanOffset.y;
                    } else {
                        _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                        _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                        _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
                    }
                    if (updateFn) {
                        updateFn(now);
                    }
                    _applyCurrentZoomPan(now === 1);
                };
                if (speed) {
                    _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
                } else {
                    onUpdate(1);
                }
            }
        };
        /*>>core*/
        /*>>gestures*/
        /**
         * Mouse/touch/pointer event handlers.
         *
         * separated from @core.js for readability
         */
        var MIN_SWIPE_DISTANCE = 30,
                DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe
        var _gestureStartTime,
                _gestureCheckSpeedTime,
                // pool of objects that are used during dragging of zooming
                p = {}, // first point
                p2 = {}, // second point (for zoom gesture)
                delta = {},
                _currPoint = {},
                _startPoint = {},
                _currPointers = [],
                _startMainScrollPos = {},
                _releaseAnimData,
                _posPoints = [], // array of points during dragging, used to determine type of gesture
                _tempPoint = {},
                _isZoomingIn,
                _verticalDragInitiated,
                _oldAndroidTouchEndTimeout,
                _currZoomedItemIndex = 0,
                _centerPoint = _getEmptyPoint(),
                _lastReleaseTime = 0,
                _isDragging, // at least one pointer is down
                _isMultitouch, // at least two _pointers are down
                _zoomStarted, // zoom level changed during zoom gesture
                _moved,
                _dragAnimFrame,
                _mainScrollShifted,
                _currentPoints, // array of current touch points
                _isZooming,
                _currPointsDistance,
                _startPointsDistance,
                _currPanBounds,
                _mainScrollPos = _getEmptyPoint(),
                _currZoomElementStyle,
                _mainScrollAnimating, // true, if animation after swipe gesture is running
                _midZoomPoint = _getEmptyPoint(),
                _currCenterPoint = _getEmptyPoint(),
                _direction,
                _isFirstMove,
                _opacityChanged,
                _bgOpacity,
                _wasOverInitialZoom,
                _isEqualPoints = function (p1, p2) {
                    return p1.x === p2.x && p1.y === p2.y;
                },
                _isNearbyPoints = function (touch0, touch1) {
                    return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
                },
                _calculatePointsDistance = function (p1, p2) {
                    _tempPoint.x = Math.abs(p1.x - p2.x);
                    _tempPoint.y = Math.abs(p1.y - p2.y);
                    return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
                },
                _stopDragUpdateLoop = function () {
                    if (_dragAnimFrame) {
                        _cancelAF(_dragAnimFrame);
                        _dragAnimFrame = null;
                    }
                },
                _dragUpdateLoop = function () {
                    if (_isDragging) {
                        _dragAnimFrame = _requestAF(_dragUpdateLoop);
                        _renderMovement();
                    }
                },
                _canPan = function () {
                    return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
                },
                // find the closest parent DOM element
                _closestElement = function (el, fn) {
                    if (!el || el === document) {
                        return false;
                    }
                    // don't search elements above pswp__scroll-wrap
                    if (el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) {
                        return false;
                    }
                    if (fn(el)) {
                        return el;
                    }
                    return _closestElement(el.parentNode, fn);
                },
                _preventObj = {},
                _preventDefaultEventBehaviour = function (e, isDown) {
                    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);
                    _shout('preventDragEvent', e, isDown, _preventObj);
                    return _preventObj.prevent;
                },
                _convertTouchToPoint = function (touch, p) {
                    p.x = touch.pageX;
                    p.y = touch.pageY;
                    p.id = touch.identifier;
                    return p;
                },
                _findCenterOfPoints = function (p1, p2, pCenter) {
                    pCenter.x = (p1.x + p2.x) * 0.5;
                    pCenter.y = (p1.y + p2.y) * 0.5;
                },
                _pushPosPoint = function (time, x, y) {
                    if (time - _gestureCheckSpeedTime > 50) {
                        var o = _posPoints.length > 2 ? _posPoints.shift() : {};
                        o.x = x;
                        o.y = y;
                        _posPoints.push(o);
                        _gestureCheckSpeedTime = time;
                    }
                },
                _calculateVerticalDragOpacityRatio = function () {
                    var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
                    return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
                },
                // points pool, reused during touch events
                _ePoint1 = {},
                _ePoint2 = {},
                _tempPointsArr = [],
                _tempCounter,
                _getTouchPoints = function (e) {
                    // clean up previous points, without recreating array
                    while (_tempPointsArr.length > 0) {
                        _tempPointsArr.pop();
                    }
                    if (!_pointerEventEnabled) {
                        if (e.type.indexOf('touch') > -1) {
                            if (e.touches && e.touches.length > 0) {
                                _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                                if (e.touches.length > 1) {
                                    _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                                }
                            }
                        } else {
                            _ePoint1.x = e.pageX;
                            _ePoint1.y = e.pageY;
                            _ePoint1.id = '';
                            _tempPointsArr[0] = _ePoint1; //_ePoint1;
                        }
                    } else {
                        _tempCounter = 0;
                        // we can use forEach, as pointer events are supported only in modern browsers
                        _currPointers.forEach(function (p) {
                            if (_tempCounter === 0) {
                                _tempPointsArr[0] = p;
                            } else if (_tempCounter === 1) {
                                _tempPointsArr[1] = p;
                            }
                            _tempCounter++;
                        });
                    }
                    return _tempPointsArr;
                },
                _panOrMoveMainScroll = function (axis, delta) {
                    var panFriction,
                            overDiff = 0,
                            newOffset = _panOffset[axis] + delta[axis],
                            startOverDiff,
                            dir = delta[axis] > 0,
                            newMainScrollPosition = _mainScrollPos.x + delta.x,
                            mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
                            newPanPos,
                            newMainScrollPos;
                    // calculate fdistance over the bounds and friction
                    if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
                        panFriction = _options.panEndFriction;
                        // Linear increasing of friction, so at 1/4 of viewport it's at max value.
                        // Looks not as nice as was expected. Left for history.
                        // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
                    } else {
                        panFriction = 1;
                    }
                    newOffset = _panOffset[axis] + delta[axis] * panFriction;
                    // move main scroll or start panning
                    if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
                        if (!_currZoomElementStyle) {
                            newMainScrollPos = newMainScrollPosition;
                        } else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {
                            if (dir) {
                                if (newOffset > _currPanBounds.min[axis]) {
                                    panFriction = _options.panEndFriction;
                                    overDiff = _currPanBounds.min[axis] - newOffset;
                                    startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                                }
                                // drag right
                                if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
                                    newMainScrollPos = newMainScrollPosition;
                                    if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                                        newMainScrollPos = _startMainScrollPos.x;
                                    }
                                } else {
                                    if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                                        newPanPos = newOffset;
                                    }
                                }
                            } else {
                                if (newOffset < _currPanBounds.max[axis]) {
                                    panFriction = _options.panEndFriction;
                                    overDiff = newOffset - _currPanBounds.max[axis];
                                    startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                                }
                                if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
                                    newMainScrollPos = newMainScrollPosition;
                                    if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                                        newMainScrollPos = _startMainScrollPos.x;
                                    }
                                } else {
                                    if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                                        newPanPos = newOffset;
                                    }
                                }
                            }
                            //
                        }
                        if (axis === 'x') {
                            if (newMainScrollPos !== undefined) {
                                _moveMainScroll(newMainScrollPos, true);
                                if (newMainScrollPos === _startMainScrollPos.x) {
                                    _mainScrollShifted = false;
                                } else {
                                    _mainScrollShifted = true;
                                }
                            }
                            if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                                if (newPanPos !== undefined) {
                                    _panOffset.x = newPanPos;
                                } else if (!_mainScrollShifted) {
                                    _panOffset.x += delta.x * panFriction;
                                }
                            }
                            return newMainScrollPos !== undefined;
                        }
                    }
                    if (!_mainScrollAnimating) {
                        if (!_mainScrollShifted) {
                            if (_currZoomLevel > self.currItem.fitRatio) {
                                _panOffset[axis] += delta[axis] * panFriction;
                            }
                        }
                    }
                },
                // Pointerdown/touchstart/mousedown handler
                _onDragStart = function (e) {
                    // Allow dragging only via left mouse button.
                    // As this handler is not added in IE8 - we ignore e.which
                    //
                    // http://www.quirksmode.org/js/events_properties.html
                    // https://developer.mozilla.org/en-US/docs/Web/API/event.button
                    if (e.type === 'mousedown' && e.button > 0) {
                        return;
                    }
                    if (_initialZoomRunning) {
                        e.preventDefault();
                        return;
                    }
                    if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
                        return;
                    }
                    if (_preventDefaultEventBehaviour(e, true)) {
                        e.preventDefault();
                    }
                    _shout('pointerDown');
                    if (_pointerEventEnabled) {
                        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                        if (pointerIndex < 0) {
                            pointerIndex = _currPointers.length;
                        }
                        _currPointers[pointerIndex] = {
                            x: e.pageX,
                            y: e.pageY,
                            id: e.pointerId
                        };
                    }
                    var startPointsList = _getTouchPoints(e),
                            numPoints = startPointsList.length;
                    _currentPoints = null;
                    _stopAllAnimations();
                    // init drag
                    if (!_isDragging || numPoints === 1) {
                        _isDragging = _isFirstMove = true;
                        framework.bind(window, _upMoveEvents, self);
                        _isZoomingIn =
                                _wasOverInitialZoom =
                                _opacityChanged =
                                _verticalDragInitiated =
                                _mainScrollShifted =
                                _moved =
                                _isMultitouch =
                                _zoomStarted = false;
                        _direction = null;
                        _shout('firstTouchStart', startPointsList);
                        _equalizePoints(_startPanOffset, _panOffset);
                        _currPanDist.x = _currPanDist.y = 0;
                        _equalizePoints(_currPoint, startPointsList[0]);
                        _equalizePoints(_startPoint, _currPoint);
                        //_equalizePoints(_startMainScrollPos, _mainScrollPos);
                        _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
                        _posPoints = [{
                                x: _currPoint.x,
                                y: _currPoint.y
                            }];
                        _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();
                        //_mainScrollAnimationEnd(true);
                        _calculatePanBounds(_currZoomLevel, true);
                        // Start rendering
                        _stopDragUpdateLoop();
                        _dragUpdateLoop();
                    }
                    // init zoom
                    if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
                        _startZoomLevel = _currZoomLevel;
                        _zoomStarted = false; // true if zoom changed at least once
                        _isZooming = _isMultitouch = true;
                        _currPanDist.y = _currPanDist.x = 0;
                        _equalizePoints(_startPanOffset, _panOffset);
                        _equalizePoints(p, startPointsList[0]);
                        _equalizePoints(p2, startPointsList[1]);
                        _findCenterOfPoints(p, p2, _currCenterPoint);
                        _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
                        _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
                        _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
                    }
                },
                // Pointermove/touchmove/mousemove handler
                _onDragMove = function (e) {
                    /* var el = document.elementFromPoint(_currPoint.x, _currPoint.y);
                     while (el && !el.className) {
                     el = el.parentElement;
                     }
                     if (el.className.indexOf('__caption') > -1) {
                     return;
                     }*/
                    e.preventDefault();
                    if (_pointerEventEnabled) {
                        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                        if (pointerIndex > -1) {
                            var p = _currPointers[pointerIndex];
                            p.x = e.pageX;
                            p.y = e.pageY;
                        }
                    }
                    if (_isDragging) {
                        var touchesList = _getTouchPoints(e);
                        if (!_direction && !_moved && !_isZooming) {
                            if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                                // if main scroll position is shifted – direction is always horizontal
                                _direction = 'h';
                            } else {
                                var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                                // check the direction of movement
                                if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                                    _direction = diff > 0 ? 'h' : 'v';
                                    _currentPoints = touchesList;
                                }
                            }
                        } else {
                            _currentPoints = touchesList;
                        }
                    }
                },
                //
                _renderMovement = function () {
                    if (!_currentPoints) {
                        return;
                    }
                    var numPoints = _currentPoints.length;
                    if (numPoints === 0) {
                        return;
                    }
                    _equalizePoints(p, _currentPoints[0]);
                    delta.x = p.x - _currPoint.x;
                    delta.y = p.y - _currPoint.y;
                    if (_isZooming && numPoints > 1) {
                        // Handle behaviour for more than 1 point
                        _currPoint.x = p.x;
                        _currPoint.y = p.y;
                        // check if one of two points changed
                        if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
                            return;
                        }
                        _equalizePoints(p2, _currentPoints[1]);
                        if (!_zoomStarted) {
                            _zoomStarted = true;
                            _shout('zoomGestureStarted');
                        }
                        // Distance between two points
                        var pointsDistance = _calculatePointsDistance(p, p2);
                        var zoomLevel = _calculateZoomLevel(pointsDistance);
                        // slightly over the of initial zoom level
                        if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
                            _wasOverInitialZoom = true;
                        }
                        // Apply the friction if zoom level is out of the bounds
                        var zoomFriction = 1,
                                minZoomLevel = _getMinZoomLevel(),
                                maxZoomLevel = _getMaxZoomLevel();
                        if (zoomLevel < minZoomLevel) {
                            if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                                // fade out background if zooming out
                                var minusDiff = minZoomLevel - zoomLevel;
                                var percent = 1 - minusDiff / (minZoomLevel / 1.2);
                                _applyBgOpacity(percent);
                                _shout('onPinchClose', percent);
                                _opacityChanged = true;
                            } else {
                                zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                                if (zoomFriction > 1) {
                                    zoomFriction = 1;
                                }
                                zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
                            }
                        } else if (zoomLevel > maxZoomLevel) {
                            // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
                            zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
                            if (zoomFriction > 1) {
                                zoomFriction = 1;
                            }
                            zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
                        }
                        if (zoomFriction < 0) {
                            zoomFriction = 0;
                        }
                        // distance between touch points after friction is applied
                        _currPointsDistance = pointsDistance;
                        // _centerPoint - The point in the middle of two pointers
                        _findCenterOfPoints(p, p2, _centerPoint);
                        // paning with two pointers pressed
                        _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
                        _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
                        _equalizePoints(_currCenterPoint, _centerPoint);
                        _panOffset.x = _calculatePanOffset('x', zoomLevel);
                        _panOffset.y = _calculatePanOffset('y', zoomLevel);
                        _isZoomingIn = zoomLevel > _currZoomLevel;
                        _currZoomLevel = zoomLevel;
                        _applyCurrentZoomPan();
                    } else {
                        // handle behaviour for one point (dragging or panning)
                        if (!_direction) {
                            return;
                        }
                        if (_isFirstMove) {
                            _isFirstMove = false;
                            // subtract drag distance that was used during the detection direction
                            if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                                delta.x -= _currentPoints[0].x - _startPoint.x;
                            }
                            if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                                delta.y -= _currentPoints[0].y - _startPoint.y;
                            }
                        }
                        _currPoint.x = p.x;
                        _currPoint.y = p.y;
                        // do nothing if pointers position hasn't changed
                        if (delta.x === 0 && delta.y === 0) {
                            return;
                        }
                        if (_direction === 'v' && _options.closeOnVerticalDrag) {
                            if (!_canPan()) {
                                _currPanDist.y += delta.y;
                                _panOffset.y += delta.y;
                                var opacityRatio = _calculateVerticalDragOpacityRatio();
                                _verticalDragInitiated = true;
                                _shout('onVerticalDrag', opacityRatio);
                                _applyBgOpacity(opacityRatio);
                                _applyCurrentZoomPan();
                                return;
                            }
                        }
                        _pushPosPoint(_getCurrentTime(), p.x, p.y);
                        _moved = true;
                        _currPanBounds = self.currItem.bounds;
                        var mainScrollChanged = _panOrMoveMainScroll('x', delta);
                        if (!mainScrollChanged) {
                            _panOrMoveMainScroll('y', delta);
                            _roundPoint(_panOffset);
                            _applyCurrentZoomPan();
                        }
                    }
                },
                // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
                _onDragRelease = function (e) {
                    if (_features.isOldAndroid) {
                        if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
                            return;
                        }
                        // on Android (v4.1, 4.2, 4.3 & possibly older)
                        // ghost mousedown/up event isn't preventable via e.preventDefault,
                        // which causes fake mousedown event
                        // so we block mousedown/up for 600ms
                        if (e.type.indexOf('touch') > -1) {
                            clearTimeout(_oldAndroidTouchEndTimeout);
                            _oldAndroidTouchEndTimeout = setTimeout(function () {
                                _oldAndroidTouchEndTimeout = 0;
                            }, 600);
                        }
                    }
                    _shout('pointerUp');
                    if (_preventDefaultEventBehaviour(e, false)) {
                        e.preventDefault();
                    }
                    var releasePoint;
                    if (_pointerEventEnabled) {
                        var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                        if (pointerIndex > -1) {
                            releasePoint = _currPointers.splice(pointerIndex, 1)[0];
                            if (navigator.pointerEnabled) {
                                releasePoint.type = e.pointerType || 'mouse';
                            } else {
                                var MSPOINTER_TYPES = {
                                    4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
                                    2: 'touch', // event.MSPOINTER_TYPE_TOUCH
                                    3: 'pen' // event.MSPOINTER_TYPE_PEN
                                };
                                releasePoint.type = MSPOINTER_TYPES[e.pointerType];
                                if (!releasePoint.type) {
                                    releasePoint.type = e.pointerType || 'mouse';
                                }
                            }
                        }
                    }
                    var touchList = _getTouchPoints(e),
                            gestureType,
                            numPoints = touchList.length;
                    if (e.type === 'mouseup') {
                        numPoints = 0;
                    }
                    // Do nothing if there were 3 touch points or more
                    if (numPoints === 2) {
                        _currentPoints = null;
                        return true;
                    }
                    // if second pointer released
                    if (numPoints === 1) {
                        _equalizePoints(_startPoint, touchList[0]);
                    }
                    // pointer hasn't moved, send "tap release" point
                    if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
                        if (!releasePoint) {
                            if (e.type === 'mouseup') {
                                releasePoint = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    type: 'mouse'
                                };
                            } else if (e.changedTouches && e.changedTouches[0]) {
                                releasePoint = {
                                    x: e.changedTouches[0].pageX,
                                    y: e.changedTouches[0].pageY,
                                    type: 'touch'
                                };
                            }
                        }
                        _shout('touchRelease', e, releasePoint);
                    }
                    // Difference in time between releasing of two last touch points (zoom gesture)
                    var releaseTimeDiff = -1;
                    // Gesture completed, no pointers left
                    if (numPoints === 0) {
                        _isDragging = false;
                        framework.unbind(window, _upMoveEvents, self);
                        _stopDragUpdateLoop();
                        if (_isZooming) {
                            // Two points released at the same time
                            releaseTimeDiff = 0;
                        } else if (_lastReleaseTime !== -1) {
                            releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
                        }
                    }
                    _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
                    if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
                        gestureType = 'zoom';
                    } else {
                        gestureType = 'swipe';
                    }
                    if (_isZooming && numPoints < 2) {
                        _isZooming = false;
                        // Only second point released
                        if (numPoints === 1) {
                            gestureType = 'zoomPointerUp';
                        }
                        _shout('zoomGestureEnded');
                    }
                    _currentPoints = null;
                    if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
                        // nothing to animate
                        return;
                    }
                    _stopAllAnimations();
                    if (!_releaseAnimData) {
                        _releaseAnimData = _initDragReleaseAnimationData();
                    }
                    _releaseAnimData.calculateSwipeSpeed('x');
                    if (_verticalDragInitiated) {
                        var opacityRatio = _calculateVerticalDragOpacityRatio();
                        if (opacityRatio < _options.verticalDragRange) {
                            self.close();
                        } else {
                            var initalPanY = _panOffset.y,
                                    initialBgOpacity = _bgOpacity;
                            _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function (now) {
                                _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;
                                _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
                                _applyCurrentZoomPan();
                            });
                            _shout('onVerticalDrag', 1);
                        }
                        return;
                    }
                    // main scroll
                    if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
                        var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
                        if (itemChanged) {
                            return;
                        }
                        gestureType = 'zoomPointerUp';
                    }
                    // prevent zoom/pan animation when main scroll animation runs
                    if (_mainScrollAnimating) {
                        return;
                    }
                    // Complete simple zoom gesture (reset zoom level if it's out of the bounds)
                    if (gestureType !== 'swipe') {
                        _completeZoomGesture();
                        return;
                    }
                    // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
                    if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
                        _completePanGesture(_releaseAnimData);
                    }
                },
                // Returns object with data about gesture
                // It's created only once and then reused
                _initDragReleaseAnimationData = function () {
                    // temp local vars
                    var lastFlickDuration,
                            tempReleasePos;
                    // s = this
                    var s = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function (axis) {
                            if (_posPoints.length > 1) {
                                lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                                tempReleasePos = _posPoints[_posPoints.length - 2][axis];
                            } else {
                                lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
                                tempReleasePos = _startPoint[axis];
                            }
                            s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
                            s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
                            if (s.lastFlickDist[axis] > 20) {
                                s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
                            } else {
                                s.lastFlickSpeed[axis] = 0;
                            }
                            if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
                                s.lastFlickSpeed[axis] = 0;
                            }
                            s.slowDownRatio[axis] = 0.95;
                            s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                            s.speedDecelerationRatio[axis] = 1;
                        },
                        calculateOverBoundsAnimOffset: function (axis, speed) {
                            if (!s.backAnimStarted[axis]) {
                                if (_panOffset[axis] > _currPanBounds.min[axis]) {
                                    s.backAnimDestination[axis] = _currPanBounds.min[axis];
                                } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
                                    s.backAnimDestination[axis] = _currPanBounds.max[axis];
                                }
                                if (s.backAnimDestination[axis] !== undefined) {
                                    s.slowDownRatio[axis] = 0.7;
                                    s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                                    if (s.speedDecelerationRatioAbs[axis] < 0.05) {
                                        s.lastFlickSpeed[axis] = 0;
                                        s.backAnimStarted[axis] = true;
                                        _animateProp('bounceZoomPan' + axis, _panOffset[axis],
                                                s.backAnimDestination[axis],
                                                speed || 300,
                                                framework.easing.sine.out,
                                                function (pos) {
                                                    _panOffset[axis] = pos;
                                                    _applyCurrentZoomPan();
                                                }
                                        );
                                    }
                                }
                            }
                        },
                        // Reduces the speed by slowDownRatio (per 10ms)
                        calculateAnimOffset: function (axis) {
                            if (!s.backAnimStarted[axis]) {
                                s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
                                        s.slowDownRatioReverse[axis] -
                                        s.slowDownRatioReverse[axis] * s.timeDiff / 10);
                                s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                                s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                                _panOffset[axis] += s.distanceOffset[axis];
                            }
                        },
                        panAnimLoop: function () {
                            if (_animations.zoomPan) {
                                _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
                                s.now = _getCurrentTime();
                                s.timeDiff = s.now - s.lastNow;
                                s.lastNow = s.now;
                                s.calculateAnimOffset('x');
                                s.calculateAnimOffset('y');
                                _applyCurrentZoomPan();
                                s.calculateOverBoundsAnimOffset('x');
                                s.calculateOverBoundsAnimOffset('y');
                                if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
                                    // round pan position
                                    _panOffset.x = Math.round(_panOffset.x);
                                    _panOffset.y = Math.round(_panOffset.y);
                                    _applyCurrentZoomPan();
                                    _stopAnimation('zoomPan');
                                    return;
                                }
                            }
                        }
                    };
                    return s;
                },
                _completePanGesture = function (animData) {
                    // calculate swipe speed for Y axis (paanning)
                    animData.calculateSwipeSpeed('y');
                    _currPanBounds = self.currItem.bounds;
                    animData.backAnimDestination = {};
                    animData.backAnimStarted = {};
                    // Avoid acceleration animation if speed is too low
                    if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
                        animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;
                        // Run pan drag release animation. E.g. if you drag image and release finger without momentum.
                        animData.calculateOverBoundsAnimOffset('x');
                        animData.calculateOverBoundsAnimOffset('y');
                        return true;
                    }
                    // Animation loop that controls the acceleration after pan gesture ends
                    _registerStartAnimation('zoomPan');
                    animData.lastNow = _getCurrentTime();
                    animData.panAnimLoop();
                },
                _finishSwipeMainScrollGesture = function (gestureType, _releaseAnimData) {
                    var itemChanged;
                    if (!_mainScrollAnimating) {
                        _currZoomedItemIndex = _currentItemIndex;
                    }
                    var itemsDiff;
                    if (gestureType === 'swipe') {
                        var totalShiftDist = _currPoint.x - _startPoint.x,
                                isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;
                        // if container is shifted for more than MIN_SWIPE_DISTANCE,
                        // and last flick gesture was in right direction
                        if (totalShiftDist > MIN_SWIPE_DISTANCE &&
                                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
                            // go to prev item
                            itemsDiff = -1;
                        } else if (totalShiftDist < -MIN_SWIPE_DISTANCE &&
                                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
                            // go to next item
                            itemsDiff = 1;
                        }
                    }
                    var nextCircle;
                    if (itemsDiff) {
                        _currentItemIndex += itemsDiff;
                        if (_currentItemIndex < 0) {
                            _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
                            nextCircle = true;
                        } else if (_currentItemIndex >= _getNumItems()) {
                            _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
                            nextCircle = true;
                        }
                        if (!nextCircle || _options.loop) {
                            _indexDiff += itemsDiff;
                            _currPositionIndex -= itemsDiff;
                            itemChanged = true;
                        }
                    }
                    var animateToX = _slideSize.x * _currPositionIndex;
                    var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
                    var finishAnimDuration;
                    if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
                        // "return to current" duration, e.g. when dragging from slide 0 to -1
                        finishAnimDuration = 333;
                    } else {
                        finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
                                animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
                                333;
                        finishAnimDuration = Math.min(finishAnimDuration, 400);
                        finishAnimDuration = Math.max(finishAnimDuration, 250);
                    }
                    if (_currZoomedItemIndex === _currentItemIndex) {
                        itemChanged = false;
                    }
                    _mainScrollAnimating = true;
                    _shout('mainScrollAnimStart');
                    _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
                            _moveMainScroll,
                            function () {
                                _stopAllAnimations();
                                _mainScrollAnimating = false;
                                _currZoomedItemIndex = -1;
                                if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                                    self.updateCurrItem();
                                }
                                _shout('mainScrollAnimComplete');
                            }
                    );
                    if (itemChanged) {
                        self.updateCurrItem(true);
                    }
                    return itemChanged;
                },
                _calculateZoomLevel = function (touchesDistance) {
                    return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
                },
                // Resets zoom if it's out of bounds
                _completeZoomGesture = function () {
                    var destZoomLevel = _currZoomLevel,
                            minZoomLevel = _getMinZoomLevel(),
                            maxZoomLevel = _getMaxZoomLevel();
                    if (_currZoomLevel < minZoomLevel) {
                        destZoomLevel = minZoomLevel;
                    } else if (_currZoomLevel > maxZoomLevel) {
                        destZoomLevel = maxZoomLevel;
                    }
                    var destOpacity = 1,
                            onUpdate,
                            initialOpacity = _bgOpacity;
                    if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
                        //_closedByScroll = true;
                        self.close();
                        return true;
                    }
                    if (_opacityChanged) {
                        onUpdate = function (now) {
                            _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
                        };
                    }
                    self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
                    return true;
                };
        _registerModule('Gestures', {
            publicMethods: {
                initGestures: function () {
                    // helper function that builds touch/pointer/mouse events
                    var addEventNames = function (pref, down, move, up, cancel) {
                        _dragStartEvent = pref + down;
                        _dragMoveEvent = pref + move;
                        _dragEndEvent = pref + up;
                        if (cancel) {
                            _dragCancelEvent = pref + cancel;
                        } else {
                            _dragCancelEvent = '';
                        }
                    };
                    _pointerEventEnabled = _features.pointerEvent;
                    if (_pointerEventEnabled && _features.touch) {
                        // we don't need touch events, if browser supports pointer events
                        _features.touch = false;
                    }
                    if (_pointerEventEnabled) {
                        if (navigator.pointerEnabled) {
                            addEventNames('pointer', 'down', 'move', 'up', 'cancel');
                        } else {
                            // IE10 pointer events are case-sensitive
                            addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
                        }
                    } else if (_features.touch) {
                        addEventNames('touch', 'start', 'move', 'end', 'cancel');
                        _likelyTouchDevice = true;
                    } else {
                        addEventNames('mouse', 'down', 'move', 'up');
                    }
                    _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
                    _downEvents = _dragStartEvent;
                    if (_pointerEventEnabled && !_likelyTouchDevice) {
                        _likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
                    }
                    // make variable public
                    self.likelyTouchDevice = _likelyTouchDevice;
                    _globalEventHandlers[_dragStartEvent] = _onDragStart;
                    _globalEventHandlers[_dragMoveEvent] = _onDragMove;
                    _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken
                    if (_dragCancelEvent) {
                        _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
                    }
                    // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
                    if (_features.touch) {
                        _downEvents += ' mousedown';
                        _upMoveEvents += ' mousemove mouseup';
                        _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                        _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                        _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
                    }
                    if (!_likelyTouchDevice) {
                        // don't allow pan to next slide from zoomed state on Desktop
                        _options.allowPanToNext = false;
                    }
                }
            }
        });
        /*>>gestures*/
        /*>>show-hide-transition*/
        /**
         * show-hide-transition.js:
         *
         * Manages initial opening or closing transition.
         *
         * If you're not planning to use transition for gallery at all,
         * you may set options hideAnimationDuration and showAnimationDuration to 0,
         * and just delete startAnimation function.
         *
         */
        var _showOrHideTimeout,
                _showOrHide = function (item, img, out, completeFn) {
                    if (_showOrHideTimeout) {
                        clearTimeout(_showOrHideTimeout);
                    }
                    _initialZoomRunning = true;
                    _initialContentSet = true;
                    // dimensions of small thumbnail {x:,y:,w:}.
                    // Height is optional, as calculated based on large image.
                    var thumbBounds;
                    if (item.initialLayout) {
                        thumbBounds = item.initialLayout;
                        item.initialLayout = null;
                    } else {
                        thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                    }
                    var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;
                    var onComplete = function () {
                        _stopAnimation('initialZoom');
                        if (!out) {
                            _applyBgOpacity(1);
                            if (img) {
                                img.style.display = 'block';
                            }
                            framework.addClass(template, 'pswp--animated-in');
                            _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
                        } else {
                            self.template.removeAttribute('style');
                            self.bg.removeAttribute('style');
                        }
                        if (completeFn) {
                            completeFn();
                        }
                        _initialZoomRunning = false;
                    };
                    // if bounds aren't provided, just open gallery without animation
                    if (!duration || !thumbBounds || thumbBounds.x === undefined) {
                        _shout('initialZoom' + (out ? 'Out' : 'In'));
                        _currZoomLevel = item.initialZoomLevel;
                        _equalizePoints(_panOffset, item.initialPosition);
                        _applyCurrentZoomPan();
                        template.style.opacity = out ? 0 : 1;
                        _applyBgOpacity(1);
                        if (duration) {
                            setTimeout(function () {
                                onComplete();
                            }, duration);
                        } else {
                            onComplete();
                        }
                        return;
                    }
                    var startAnimation = function () {
                        var closeWithRaf = _closedByScroll,
                                fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
                        // apply hw-acceleration to image
                        if (item.miniImg) {
                            item.miniImg.style.webkitBackfaceVisibility = 'hidden';
                        }
                        if (!out) {
                            _currZoomLevel = thumbBounds.w / item.w;
                            _panOffset.x = thumbBounds.x;
                            _panOffset.y = thumbBounds.y - _initalWindowScrollY;
                            self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
                            _applyCurrentZoomPan();
                        }
                        _registerStartAnimation('initialZoom');
                        if (out && !closeWithRaf) {
                            framework.removeClass(template, 'pswp--animated-in');
                        }
                        if (fadeEverything) {
                            if (out) {
                                framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
                            } else {
                                setTimeout(function () {
                                    framework.addClass(template, 'pswp--animate_opacity');
                                }, 30);
                            }
                        }
                        _showOrHideTimeout = setTimeout(function () {
                            _shout('initialZoom' + (out ? 'Out' : 'In'));
                            if (!out) {
                                // "in" animation always uses CSS transitions (instead of rAF).
                                // CSS transition work faster here,
                                // as developer may also want to animate other things,
                                // like ui on top of sliding area, which can be animated just via CSS
                                _currZoomLevel = item.initialZoomLevel;
                                _equalizePoints(_panOffset, item.initialPosition);
                                _applyCurrentZoomPan();
                                _applyBgOpacity(1);
                                if (fadeEverything) {
                                    template.style.opacity = 1;
                                } else {
                                    _applyBgOpacity(1);
                                }
                                _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                            } else {
                                // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                                var destZoomLevel = thumbBounds.w / item.w,
                                        initialPanOffset = {
                                            x: _panOffset.x,
                                            y: _panOffset.y
                                        },
                                initialZoomLevel = _currZoomLevel,
                                        initalBgOpacity = _bgOpacity,
                                        onUpdate = function (now) {
                                            if (now === 1) {
                                                _currZoomLevel = destZoomLevel;
                                                _panOffset.x = thumbBounds.x;
                                                _panOffset.y = thumbBounds.y - _currentWindowScrollY;
                                            } else {
                                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                                                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                                            }
                                            _applyCurrentZoomPan();
                                            if (fadeEverything) {
                                                template.style.opacity = 1 - now;
                                            } else {
                                                _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
                                            }
                                        };
                                if (closeWithRaf) {
                                    _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                                } else {
                                    onUpdate(1);
                                    _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                                }
                            }
                        }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
                        // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
                        // Which avoids lag at the beginning of scale transition.
                    };
                    startAnimation();
                };
        /*>>show-hide-transition*/
        /*>>items-controller*/
        /**
         *
         * Controller manages gallery items, their dimensions, and their content.
         *
         */
        var _items,
                _tempPanAreaSize = {},
                _imagesToAppendPool = [],
                _initialContentSet,
                _initialZoomRunning,
                _controllerDefaultOptions = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: false, // TODO
                    preload: [1, 1],
                    getNumItemsFn: function () {
                        return _items.length;
                    }
                };
        var _getItemAt,
                _getNumItems,
                _initialIsLoop,
                _getZeroBounds = function () {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    };
                },
                _calculateSingleItemPanBounds = function (item, realPanElementW, realPanElementH) {
                    var bounds = item.bounds;
                    // position of element when it's centered
                    bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
                    bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;
                    // maximum pan position
                    bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
                            Math.round(_tempPanAreaSize.x - realPanElementW) :
                            bounds.center.x;
                    bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
                            Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
                            bounds.center.y;
                    // minimum pan position
                    bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
                    bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
                },
                _calculateItemSize = function (item, viewportSize, zoomLevel) {
                    if (item.src && !item.loadError) {
                        var isInitial = !zoomLevel;
                        if (isInitial) {
                            if (!item.vGap) {
                                item.vGap = {
                                    top: 0,
                                    bottom: 0
                                };
                            }
                            // allows overriding vertical margin for individual items
                            _shout('parseVerticalMargin', item);
                        }
                        _tempPanAreaSize.x = viewportSize.x;
                        item.vGap.top = 0;
                        _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;
                        if (isInitial) {
                            var hRatio = _tempPanAreaSize.x / item.w;
                            var vRatio = _tempPanAreaSize.y / item.h;
                            item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
                            //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;
                            var scaleMode = _options.scaleMode;
                            if (scaleMode === 'orig') {
                                zoomLevel = 1;
                            } else if (scaleMode === 'fit') {
                                zoomLevel = item.fitRatio;
                            }
                            if (zoomLevel > 1) {
                                zoomLevel = 1;
                            }
                            item.initialZoomLevel = zoomLevel;
                            if (!item.bounds) {
                                // reuse bounds object
                                item.bounds = _getZeroBounds();
                            }
                        }
                        if (!zoomLevel) {
                            return;
                        }
                        _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);
                        if (isInitial && zoomLevel === item.initialZoomLevel) {
                            item.initialPosition = item.bounds.center;
                        }
                        return item.bounds;
                    } else {
                        item.w = item.h = 0;
                        item.initialZoomLevel = item.fitRatio = 1;
                        item.bounds = _getZeroBounds();
                        item.initialPosition = item.bounds.center;
                        // if it's not image, we return zero bounds (content is not zoomable)
                        return item.bounds;
                    }
                },
                _appendImage = function (index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
                    if (item.loadError) {
                        return;
                    }
                    if (img) {
                        item.imageAppended = true;
                        _setImageSize(item, img, (item === self.currItem && _renderMaxResolution));
                        baseDiv.appendChild(img);
                        if (keepPlaceholder) {
                            setTimeout(function () {
                                if (item && item.loaded && item.placeholder) {
                                    item.placeholder.style.display = 'none';
                                    item.placeholder = null;
                                }
                            }, 500);
                        }
                    }
                },
                _preloadImage = function (item) {
                    item.loading = true;
                    item.loaded = false;
                    var img = item.img = framework.createEl('pswp__img', 'img');
                    var onComplete = function () {
                        item.loading = false;
                        item.loaded = true;
                        if (item.loadComplete) {
                            item.loadComplete(item);
                        } else {
                            item.img = null; // no need to store image object
                        }
                        img.onload = img.onerror = null;
                        img = null;
                    };
                    img.onload = onComplete;
                    img.onerror = function () {
                        item.loadError = true;
                        onComplete();
                    };
                    img.src = item.src; // + '?a=' + Math.random();
                    return img;
                },
                _checkForError = function (item, cleanUp) {
                    if (item.src && item.loadError && item.container) {
                        if (cleanUp) {
                            item.container.innerHTML = '';
                        }
                        item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
                        return true;
                    }
                },
                _setImageSize = function (item, img, maxRes) {
                    if (!item.src) {
                        return;
                    }
                    if (!img) {
                        img = item.container.lastChild;
                    }
                    var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
                            h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
                    if (item.placeholder && !item.loaded) {
                        item.placeholder.style.width = w + 'px';
                        item.placeholder.style.height = h + 'px';
                    }
                    img.style.width = w + 'px';
                    img.style.height = h + 'px';
                },
                _appendImagesPool = function () {
                    if (_imagesToAppendPool.length) {
                        var poolItem;
                        for (var i = 0; i < _imagesToAppendPool.length; i++) {
                            poolItem = _imagesToAppendPool[i];
                            if (poolItem.holder.index === poolItem.index) {
                                _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
                            }
                        }
                        _imagesToAppendPool = [];
                    }
                };
        _registerModule('Controller', {
            publicMethods: {
                lazyLoadItem: function (index) {
                    index = _getLoopedId(index);
                    var item = _getItemAt(index);
                    if (!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
                        return;
                    }
                    _shout('gettingData', index, item);
                    if (!item.src) {
                        return;
                    }
                    _preloadImage(item);
                },
                initController: function () {
                    framework.extend(_options, _controllerDefaultOptions, true);
                    self.items = _items = items;
                    _getItemAt = self.getItemAt;
                    _getNumItems = _options.getNumItemsFn; //self.getNumItems;
                    _initialIsLoop = _options.loop;
                    if (_getNumItems() < 3) {
                        _options.loop = false; // disable loop if less then 3 items
                    }
                    _listen('beforeChange', function (diff) {
                        var p = _options.preload,
                                isNext = diff === null ? true : (diff >= 0),
                                preloadBefore = Math.min(p[0], _getNumItems()),
                                preloadAfter = Math.min(p[1], _getNumItems()),
                                i;
                        for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                            self.lazyLoadItem(_currentItemIndex + i);
                        }
                        for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                            self.lazyLoadItem(_currentItemIndex - i);
                        }
                    });
                    _listen('initialLayout', function () {
                        self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                    });
                    _listen('mainScrollAnimComplete', _appendImagesPool);
                    _listen('initialZoomInEnd', _appendImagesPool);
                    _listen('destroy', function () {
                        var item;
                        for (var i = 0; i < _items.length; i++) {
                            item = _items[i];
                            // remove reference to DOM elements, for GC
                            if (item.container) {
                                item.container = null;
                            }
                            if (item.placeholder) {
                                item.placeholder = null;
                            }
                            if (item.img) {
                                item.img = null;
                            }
                            if (item.preloader) {
                                item.preloader = null;
                            }
                            if (item.loadError) {
                                item.loaded = item.loadError = false;
                            }
                        }
                        _imagesToAppendPool = null;
                    });
                },
                getItemAt: function (index) {
                    if (index >= 0) {
                        return _items[index] !== undefined ? _items[index] : false;
                    }
                    return false;
                },
                allowProgressiveImg: function () {
                    // 1. Progressive image loading isn't working on webkit/blink
                    //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
                    //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
                    //
                    // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
                    //    That's why it's disabled on touch devices (mainly because of swipe transition)
                    //
                    // 3. Progressive image loading sometimes doesn't work in IE (up to 11).
                    // Don't allow progressive loading on non-large touch devices
                    return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
                    // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
                },
                setContent: function (holder, index) {
                    if (_options.loop) {
                        index = _getLoopedId(index);
                    }
                    var prevItem = self.getItemAt(holder.index);
                    if (prevItem) {
                        prevItem.container = null;
                    }
                    var item = self.getItemAt(index),
                            img;
                    if (!item) {
                        holder.el.innerHTML = '';
                        return;
                    }
                    // allow to override data
                    _shout('gettingData', index, item);
                    holder.index = index;
                    holder.item = item;
                    // base container DIV is created only once for each of 3 holders
                    var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');
                    if (!item.src && item.html) {
                        if (item.html.tagName) {
                            baseDiv.appendChild(item.html);
                        } else {
                            baseDiv.innerHTML = item.html;
                        }
                    }
                    _checkForError(item);
                    _calculateItemSize(item, _viewportSize);
                    if (item.src && !item.loadError && !item.loaded) {
                        item.loadComplete = function (item) {
                            // gallery closed before image finished loading
                            if (!_isOpen) {
                                return;
                            }
                            // check if holder hasn't changed while image was loading
                            if (holder && holder.index === index) {
                                if (_checkForError(item, true)) {
                                    item.loadComplete = item.img = null;
                                    _calculateItemSize(item, _viewportSize);
                                    _applyZoomPanToItem(item);
                                    if (holder.index === _currentItemIndex) {
                                        // recalculate dimensions
                                        self.updateCurrZoomItem();
                                    }
                                    return;
                                }
                                if (!item.imageAppended) {
                                    if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                                        _imagesToAppendPool.push({
                                            item: item,
                                            baseDiv: baseDiv,
                                            img: item.img,
                                            index: index,
                                            holder: holder,
                                            clearPlaceholder: true
                                        });
                                    } else {
                                        _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                                    }
                                } else {
                                    // remove preloader & mini-img
                                    if (!_initialZoomRunning && item.placeholder) {
                                        item.placeholder.style.display = 'none';
                                        item.placeholder = null;
                                    }
                                }
                            }
                            item.loadComplete = null;
                            item.img = null; // no need to store image element after it's added
                            _shout('imageLoadComplete', index, item);
                        };
                        if (framework.features.transform) {
                            var placeholderClassName = 'pswp__img pswp__img--placeholder';
                            placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');
                            var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
                            if (item.msrc) {
                                placeholder.src = item.msrc;
                            }
                            _setImageSize(item, placeholder);
                            baseDiv.appendChild(placeholder);
                            item.placeholder = placeholder;
                        }
                        if (!item.loading) {
                            _preloadImage(item);
                        }
                        if (self.allowProgressiveImg()) {
                            // just append image
                            if (!_initialContentSet && _features.transform) {
                                _imagesToAppendPool.push({
                                    item: item,
                                    baseDiv: baseDiv,
                                    img: item.img,
                                    index: index,
                                    holder: holder
                                });
                            } else {
                                _appendImage(index, item, baseDiv, item.img, true, true);
                            }
                        }
                    } else if (item.src && !item.loadError) {
                        // image object is created every time, due to bugs of image loading & delay when switching images
                        img = framework.createEl('pswp__img', 'img');
                        img.style.opacity = 1;
                        img.src = item.src;
                        _setImageSize(item, img);
                        _appendImage(index, item, baseDiv, img, true);
                    }
                    if (!_initialContentSet && index === _currentItemIndex) {
                        _currZoomElementStyle = baseDiv.style;
                        _showOrHide(item, (img || item.img));
                    } else {
                        _applyZoomPanToItem(item);
                    }
                    holder.el.innerHTML = '';
                    holder.el.appendChild(baseDiv);
                },
                cleanSlide: function (item) {
                    if (item.img) {
                        item.img.onload = item.img.onerror = null;
                    }
                    item.loaded = item.loading = item.img = item.imageAppended = false;
                }
            }
        });
        /*>>items-controller*/
        /*>>tap*/
        /**
         * tap.js:
         *
         * Displatches tap and double-tap events.
         *
         */
        var tapTimer,
                tapReleasePoint = {},
                _dispatchTapEvent = function (origEvent, releasePoint, pointerType) {
                    var e = document.createEvent('CustomEvent'),
                            eDetail = {
                                origEvent: origEvent,
                                target: origEvent.target,
                                releasePoint: releasePoint,
                                pointerType: pointerType || 'touch'
                            };
                    e.initCustomEvent('pswpTap', true, true, eDetail);
                    origEvent.target.dispatchEvent(e);
                };
        _registerModule('Tap', {
            publicMethods: {
                initTap: function () {
                    _listen('firstTouchStart', self.onTapStart);
                    _listen('touchRelease', self.onTapRelease);
                    _listen('destroy', function () {
                        tapReleasePoint = {};
                        tapTimer = null;
                    });
                },
                onTapStart: function (touchList) {
                    if (touchList.length > 1) {
                        clearTimeout(tapTimer);
                        tapTimer = null;
                    }
                },
                onTapRelease: function (e, releasePoint) {
                    if (!releasePoint) {
                        return;
                    }
                    if (!_moved && !_isMultitouch && !_numAnimations) {
                        var p0 = releasePoint;
                        if (tapTimer) {
                            clearTimeout(tapTimer);
                            tapTimer = null;
                            // Check if taped on the same place
                            if (_isNearbyPoints(p0, tapReleasePoint)) {
                                _shout('doubleTap', p0);
                                return;
                            }
                        }
                        if (releasePoint.type === 'mouse') {
                            _dispatchTapEvent(e, releasePoint, 'mouse');
                            return;
                        }
                        var clickedTagName = e.target.tagName.toUpperCase();
                        // avoid double tap delay on buttons and elements that have class pswp__single-tap
                        if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
                            _dispatchTapEvent(e, releasePoint);
                            return;
                        }
                        _equalizePoints(tapReleasePoint, p0);
                        tapTimer = setTimeout(function () {
                            _dispatchTapEvent(e, releasePoint);
                            tapTimer = null;
                        }, 300);
                    }
                }
            }
        });
        /*>>tap*/
        /*>>desktop-zoom*/
        /**
         *
         * desktop-zoom.js:
         *
         * - Binds mousewheel event for paning zoomed image.
         * - Manages "dragging", "zoomed-in", "zoom-out" classes.
         *   (which are used for cursors and zoom icon)
         * - Adds toggleDesktopZoom function.
         *
         */
        var _wheelDelta;
        _registerModule('DesktopZoom', {
            publicMethods: {
                initDesktopZoom: function () {
                    if (_oldIE) {
                        // no zoom for old IE (<=8)
                        return;
                    }
                    if (_likelyTouchDevice) {
                        // if detected hardware touch support, we wait until mouse is used,
                        // and only then apply desktop-zoom features
                        _listen('mouseUsed', function () {
                            self.setupDesktopZoom();
                        });
                    } else {
                        self.setupDesktopZoom(true);
                    }
                },
                setupDesktopZoom: function (onInit) {
                    _wheelDelta = {};
                    var events = 'wheel mousewheel DOMMouseScroll';
                    _listen('bindEvents', function () {
                        framework.bind(template, events, self.handleMouseWheel);
                    });
                    _listen('unbindEvents', function () {
                        if (_wheelDelta) {
                            framework.unbind(template, events, self.handleMouseWheel);
                        }
                    });
                    self.mouseZoomedIn = false;
                    var hasDraggingClass,
                            updateZoomable = function () {
                                if (self.mouseZoomedIn) {
                                    framework.removeClass(template, 'pswp--zoomed-in');
                                    self.mouseZoomedIn = false;
                                }
                                if (_currZoomLevel < 1) {
                                    framework.addClass(template, 'pswp--zoom-allowed');
                                } else {
                                    framework.removeClass(template, 'pswp--zoom-allowed');
                                }
                                removeDraggingClass();
                            },
                            removeDraggingClass = function () {
                                if (hasDraggingClass) {
                                    framework.removeClass(template, 'pswp--dragging');
                                    hasDraggingClass = false;
                                }
                            };
                    _listen('resize', updateZoomable);
                    _listen('afterChange', updateZoomable);
                    _listen('pointerDown', function () {
                        if (self.mouseZoomedIn) {
                            hasDraggingClass = true;
                            framework.addClass(template, 'pswp--dragging');
                        }
                    });
                    _listen('pointerUp', removeDraggingClass);
                    if (!onInit) {
                        updateZoomable();
                    }
                },
                handleMouseWheel: function (e) {
                    if (_currZoomLevel <= self.currItem.fitRatio) {
                        if (_options.modal) {
                            if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                                //e.preventDefault();
                            } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                                // close PhotoSwipe
                                // if browser supports transforms & scroll changed enough
                                _closedByScroll = true;
                                self.close();
                            }
                        }
                        return true;
                    }
                    // allow just one event to fire
                    e.stopPropagation();
                    // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
                    _wheelDelta.x = 0;
                    if ('deltaX' in e) {
                        if (e.deltaMode === 1 /* DOM_DELTA_LINE */) {
                            // 18 - average line height
                            _wheelDelta.x = e.deltaX * 18;
                            _wheelDelta.y = e.deltaY * 18;
                        } else {
                            _wheelDelta.x = e.deltaX;
                            _wheelDelta.y = e.deltaY;
                        }
                    } else if ('wheelDelta' in e) {
                        if (e.wheelDeltaX) {
                            _wheelDelta.x = -0.16 * e.wheelDeltaX;
                        }
                        if (e.wheelDeltaY) {
                            _wheelDelta.y = -0.16 * e.wheelDeltaY;
                        } else {
                            _wheelDelta.y = -0.16 * e.wheelDelta;
                        }
                    } else if ('detail' in e) {
                        _wheelDelta.y = e.detail;
                    } else {
                        return;
                    }
                    _calculatePanBounds(_currZoomLevel, true);
                    var newPanX = _panOffset.x - _wheelDelta.x,
                            newPanY = _panOffset.y - _wheelDelta.y;
                    // only prevent scrolling in nonmodal mode when not at edges
                    if (_options.modal ||
                            (
                                    newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
                                    newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
                                    )) {
                        e.preventDefault();
                    }
                    // TODO: use rAF instead of mousewheel?
                    self.panTo(newPanX, newPanY);
                },
                findBrowser: function () {
                    var ua = navigator.userAgent,
                            tem,
                            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                    if (/trident/i.test(M[1])) {
                        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                        return 'IE ' + (tem[1] || '');
                    }
                    if (M[1] === 'Chrome') {
                        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                        if (tem != null)
                            return tem.slice(1).join(' ').replace('OPR', 'Opera');
                    }
                    M = M[2] ? [M[1], M[2]] : [navigator.appName, '', '-?'];
                    if ((tem = ua.match(/version\/(\d+)/i)) != null)
                        M.splice(1, 1, tem[1]);
                    return M.join(' ');
                },
                toggleDesktopZoom: function (centerPoint) {
                    centerPoint = centerPoint || {
                        x: _viewportSize.x / 2 + _offset.x,
                        y: _viewportSize.y / 2 + _offset.y
                    };
                    var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
                    var zoomOut = _currZoomLevel === doubleTapZoomLevel;
                    //var event=event;
                    if (self.findBrowser().split(' ')[0] != 'Firefox') {
                        if (zoomOut == true && $(event.target).hasClass('lm__out') || zoomOut == false && $(event.target).hasClass('lm__in')) {
                            self.mouseZoomedIn = !zoomOut;
                            self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
                            framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
                        }
                        //                  else{
                        //                   self.mouseZoomedIn = !zoomOut;
                        //                   self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
                        //                   framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
                        //            }
                    } else {
                        self.mouseZoomedIn = !zoomOut;
                        self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
                        framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
                    }
                }
            }
        });
        /*>>desktop-zoom*/
        /*>>history*/
        /**
         *
         * history.js:
         *
         * - Back button to close gallery.
         *
         * - Unique URL for each slide: example.com/&pid=1&gid=3
         *   (where PID is picture index, and GID and gallery index)
         *
         * - Switch URL when slides change.
         *
         */
        var _historyDefaultOptions = {
            history: true,
            galleryUID: 1
        };
        var _historyUpdateTimeout,
                _hashChangeTimeout,
                _hashAnimCheckTimeout,
                _hashChangedByScript,
                _hashChangedByHistory,
                _hashReseted,
                _initialHash,
                _historyChanged,
                _closedFromURL,
                _urlChangedOnce,
                _windowLoc,
                _supportsPushState,
                _getHash = function () {
                    return _windowLoc.hash.substring(1);
                },
                _cleanHistoryTimeouts = function () {
                    if (_historyUpdateTimeout) {
                        clearTimeout(_historyUpdateTimeout);
                    }
                    if (_hashAnimCheckTimeout) {
                        clearTimeout(_hashAnimCheckTimeout);
                    }
                },
                // pid - Picture index
                // gid - Gallery index
                _parseItemIndexFromURL = function () {
                    var hash = _getHash(),
                            params = {};
                    if (hash.length < 5) { // pid=1
                        return params;
                    }
                    var i, vars = hash.split('&');
                    for (i = 0; i < vars.length; i++) {
                        if (!vars[i]) {
                            continue;
                        }
                        var pair = vars[i].split('=');
                        if (pair.length < 2) {
                            continue;
                        }
                        params[pair[0]] = pair[1];
                    }
                    if (_options.galleryPIDs) {
                        // detect custom pid in hash and search for it among the items collection
                        var searchfor = params.pid;
                        params.pid = 0; // if custom pid cannot be found, fallback to the first item
                        for (i = 0; i < _items.length; i++) {
                            if (_items[i].pid === searchfor) {
                                params.pid = i;
                                break;
                            }
                        }
                    } else {
                        params.pid = parseInt(params.pid, 10) - 1;
                    }
                    if (params.pid < 0) {
                        params.pid = 0;
                    }
                    return params;
                },
                _updateHash = function () {
                    //safari fixes
                    return;
                    if (_hashAnimCheckTimeout) {
                        clearTimeout(_hashAnimCheckTimeout);
                    }
                    if (_numAnimations || _isDragging) {
                        // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
                        // that's why we update hash only when no animations running
                        _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
                        return;
                    }
                    if (_hashChangedByScript) {
                        clearTimeout(_hashChangeTimeout);
                    } else {
                        _hashChangedByScript = true;
                    }
                    var pid = (_currentItemIndex + 1);
                    var item = _getItemAt(_currentItemIndex);
                    if (item.hasOwnProperty('pid')) {
                        // carry forward any custom pid assigned to the item
                        pid = item.pid;
                    }
                    var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + pid;
                    if (!_historyChanged) {
                        if (_windowLoc.hash.indexOf(newHash) === -1) {
                            _urlChangedOnce = true;
                        }
                        // first time - add new hisory record, then just replace
                    }
                    var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;
                    if (_supportsPushState) {
                        if ('#' + newHash !== window.location.hash) {
                            history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
                        }
                    } else {
                        if (_historyChanged) {
                            _windowLoc.replace(newURL);
                        } else {
                            _windowLoc.hash = newHash;
                        }
                    }
                    _historyChanged = true;
                    _hashChangeTimeout = setTimeout(function () {
                        _hashChangedByScript = false;
                    }, 60);
                };
        _registerModule('History', {
            publicMethods: {
                initHistory: function () {
                    framework.extend(_options, _historyDefaultOptions, true);
                    if (!_options.history) {
                        return;
                    }
                    _windowLoc = window.location;
                    _urlChangedOnce = false;
                    _closedFromURL = false;
                    _historyChanged = false;
                    _initialHash = _getHash();
                    _supportsPushState = ('pushState' in history);
                    if (_initialHash.indexOf('gid=') > -1) {
                        _initialHash = _initialHash.split('&gid=')[0];
                        _initialHash = _initialHash.split('?gid=')[0];
                    }
                    _listen('afterChange', self.updateURL);
                    _listen('unbindEvents', function () {
                        framework.unbind(window, 'hashchange', self.onHashChange);
                    });
                    var returnToOriginal = function () {
                        _hashReseted = true;
                        if (!_closedFromURL) {
                            if (_urlChangedOnce) {
                                history.back();
                            } else {
                                if (_initialHash) {
                                    _windowLoc.hash = _initialHash;
                                } else {
                                    if (_supportsPushState) {
                                        // remove hash from url without refreshing it or scrolling to top
                                        history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
                                    } else {
                                        _windowLoc.hash = '';
                                    }
                                }
                            }
                        }
                        _cleanHistoryTimeouts();
                    };
                    _listen('unbindEvents', function () {
                        if (_closedByScroll) {
                            // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                            // this is done to keep the scroll position
                            returnToOriginal();
                        }
                    });
                    _listen('destroy', function () {
                        if (!_hashReseted) {
                            returnToOriginal();
                        }
                    });
                    _listen('firstUpdate', function () {
                        _currentItemIndex = _parseItemIndexFromURL().pid;
                    });
                    var index = _initialHash.indexOf('pid=');
                    if (index > -1) {
                        _initialHash = _initialHash.substring(0, index);
                        if (_initialHash.slice(-1) === '&') {
                            _initialHash = _initialHash.slice(0, -1);
                        }
                    }
                    setTimeout(function () {
                        if (_isOpen) { // hasn't destroyed yet
                            framework.bind(window, 'hashchange', self.onHashChange);
                        }
                    }, 40);
                },
                onHashChange: function () {
                    if (_getHash() === _initialHash) {
                        _closedFromURL = true;
                        self.close();
                        return;
                    }
                    if (!_hashChangedByScript) {
                        _hashChangedByHistory = true;
                        self.goTo(_parseItemIndexFromURL().pid);
                        _hashChangedByHistory = false;
                    }
                },
                updateURL: function () {
                    // Delay the update of URL, to avoid lag during transition,
                    // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
                    _cleanHistoryTimeouts();
                    if (_hashChangedByHistory) {
                        return;
                    }
                    if (!_historyChanged) {
                        _updateHash(); // first time
                    } else {
                        _historyUpdateTimeout = setTimeout(_updateHash, 800);
                    }
                }
            }
        });
        /*>>history*/
        framework.extend(self, publicMethods);
    };
    return PhotoSwipe;
});
;
var headTagChildRefactor = function () {
    /*****************   PART 1: declaring variables for child nodes refactoring under head tag   **************/
    var sourceHtml = $('head')[0].innerHTML;
    var uiCss = "/ui.css";
    var lmUiCss = "/common/lm_ui.css";
    var cssFolder = "/css/";
    var hammerJs = "/javascript/hammer.min.js";
    /********************************** PART 2: removing hammer js from old nodes ******************************/
    var searchHammerInArray = function (str, strArray) {
        for (var j = 0; j < strArray.length; j++) {
            if (strArray[j].src.match(str))
                return strArray[j].src + '|' + j;
        }
        return -1;
    }
    var hammerOccurance = sourceHtml.indexOf(hammerJs);
    if (hammerOccurance != '-1') {
        var hammerTracker = searchHammerInArray(hammerJs, $('head').find('script'));
        var hammerTrackerArray = hammerTracker.split("|");
        var counterHammer = hammerTrackerArray[1];
        $('head').find('script')[counterHammer].remove();
    }
    /******************************* PART 3:   For Ui css added part   *****************************************/
    var searchHrefInArrayUi = function (str, strArray) {
        for (var j = 0; j < strArray.length; j++) {
            if (strArray[j].href.match(str))
                return strArray[j].href + '|' + j;
        }
        return -1;
    }
    var uiOldCssOccurance = sourceHtml.indexOf(uiCss);
    if (uiOldCssOccurance != '-1') {
        var styleTracker2 = searchHrefInArrayUi(uiCss, $('head').find('link'));
        var styleTrackerArray2 = styleTracker2.split("|");
        var counter = styleTrackerArray2[1];
        $('head').find('link')[counter].remove();
    }
    var searchHrefInArray = function (str, strArray) {
        for (var j = 0; j < strArray.length; j++) {
            if (strArray[j].href.match(str))
                return strArray[j].href;
        }
        return -1;
    }
    var uiCssOccurance = sourceHtml.indexOf(lmUiCss);
    if (uiCssOccurance == '-1') {
        var currentUrl = $(location).attr('href');
        if (currentUrl.indexOf("content_preview") == '-1') {
            var styleTracker = searchHrefInArray(cssFolder, $('head').find('link'));
            var styleCssOccurance = styleTracker.indexOf(cssFolder);
            if (styleCssOccurance != '-1') {
                var styleTrackerArray = styleTracker.split("/");
                styleTrackerArray.splice(-3, 3);
                var finalVal = styleTrackerArray.join("/") + lmUiCss;
                $('head').append("<link href='" + finalVal + "' rel='stylesheet' style='text/css'/>");
            }
        }
    }
    /***********************************************************************************************************/
}

var htmlStr = '<div id="myModal" class="modal"><div class="modal-content"><button tabindex="0" title="Close (Esc)" class="close"></button><div class="modal-body" ></div></div></div><div tabindex="0" id="dummyDiv"></div>';
var mainData = {};
mainData.data = [];
var fullscreen = false;
var allData;
var modalWidth;
var modalHeight;
var focusableElementsString;
var focusableElements;
var firstTabStop;
var lastTabStop;
var script;
var scriptCounter = 0;
var modal;
var index;
var html;
var bright_CoveSrc;
var bright_Cove;
var alertHtml;
var dataPath = "";
var html;
var htmlVideo;
var popUpCounter = 0;
var datasetCounter = 0;
/************************************STICKY HEADER******************************/
var initializeStickyHeader = function () {
    var $table = $('table');
    if (/iPad/.test(navigator.userAgent) && !window.MSStream) {
        $table.floatThead({
            position: 'fixed'
        });
        setTimeout(function () {
            $('.floatThead-container').css({
                '-webkit-transition': 'transform 0.1s ease-out'
            });
        }, 1000)
        return false;
    }
    if (/iPhone/.test(navigator.userAgent) && !window.MSStream) {
        $table.floatThead({
            position: 'absolute'
        });
        setTimeout(function () {
            $('.floatThead-container').css({
                '-webkit-transition': 'transform 0.1s ease-out'
            });
        }, 1000)
        return false;
    }
    $table.floatThead({
        position: 'fixed'
    });
}
var getDeviceType = function () {
    if (/iPhone|iPad/.test(navigator.userAgent) && !window.MSStream) {
        $('body').css('cursor', 'pointer');
    }
}

var getGlossaryData = function () {
    top.postMessage("", "*");
    parent.postMessage("", "*");
    $(window).on("message", function (data) { // method recieves data from parent i.e frame
        if (data.originalEvent.data.type === "glossary") {
            var glossaryScript = document.createElement("script");
            glossaryScript.type = "text/javascript";
            glossaryScript.src = data.originalEvent.data.data_path;
            var glossaryIsPresent = false;
            var scripts = document.getElementsByTagName('script');
            for (var i = scripts.length; i--; ) {
                if (scripts[i].src == glossaryScript.src) {
                    glossaryIsPresent = true;
                }
            }
            if (glossaryIsPresent === false) {
                $("head").append(glossaryScript);
            }
        }
    });
}
var trapTabKey = function (e) { //used to trap key controls inside modal popup
    if (e.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === firstTabStop) {
                e.preventDefault();
                lastTabStop.focus();
            }
        } else {
            if (document.activeElement === lastTabStop) {
                e.preventDefault();
                firstTabStop.focus();
            }
        }
    }
}
var showModal = function () {
    modal.show();
    $('.close').focus();
    $('.modal-body').html('');
    $('body').css({
        'overflow': 'hidden'
    });
    parent.postMessage("hidden", "*");
}
var hideModal = function () {
    $('.modal-content').removeClass("lm_multi_vd");
    $('.modal-body').html('');
    modal.hide();
    $('body').css({
        'overflow': 'auto'
    });
}
var stopPropagation = function (value) {
    if (value.tagName === 'VIDEO' || value.className === 'gadget' || value.className === 'widget' || value.className === 'brightCoveVideo' || value.className === 'assessment' || value.className === 'exwidget' || value.className === 'figure' || value.className === 'informalfigure' || value.tagName === 'table' || value.className === 'figure' /*|| value.className === 'multiplevideo'|| value.className === 'dataset'*/) {
        value.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        for (var i = 0; i < value.childElementCount; i++) {
            value.childNodes[i].addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }
    }
}
var mousePointer = function (value) {
    if (value.tagName === 'VIDEO' || value.className === 'gadget' || value.className === 'widget' || value.className === 'brightCoveVideo' || value.className === 'assessment' || value.className === 'exwidget' || value.className === 'informalfigure' || value.tagName === 'table' || value.className === 'figure') {
        value.addEventListener('mouseover', function (e) {
            value.style.cursor = "default";
        });
        for (var i = 0; i < value.childElementCount; i++) {
            value.childNodes[i].addEventListener('mouseover', function (e) {
                this.style.cursor = "default";
            });
        }
    }
}
var addDataScript = function (src, id) { //add dataset and multiple data-script to dom
    script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("src", src);
    document.head.appendChild(script);
    script.onload = function () {
        scriptCounter++
        var item = {};
        item['id'] = id;
        item['advJsonData'] = advJsonData;
        mainData.data.push(item);
        if (scriptCounter === popUpCounter) {
            allData = removeDuplicates(mainData.data);
        }
    }
}
var removeDuplicates = function (Data) { //remove duplicate occurances of any item
    var arr = {};
    for (var i = 0, len = Data.length; i < len; i++)
        arr[Data[i]['id']] = Data[i];
    Data = new Array();
    for (var key in arr) {
        Data.push(arr[key]);
    }
    return Data;
}
var loadHtmlForMultipleVdo = function (index, path) { //load modal for multiple video
    $('.modal-content').removeClass('contentResizer');
    $('#myModal').removeClass('overFlowHidden');
    $('.modal-body').html('');
    $('.content').html('<strong>MultiVideo</strong>');
    showModal();
    if (path === "") {
        alertHtml = "No video Records Found";
        $('.modal-body').append(alertHtml);
        return false;
    }
    if (allData === undefined) {
        alertHtml = "Data Loading in progress.Please try again later!";
        $('.modal-body').append(alertHtml);
        return false;
    }
    for (var i = 0; i < allData.length; i++) {
        if (allData[i].id === index) {
            if (path === "" || allData[i].advJsonData.collection.options.length === 0) {
                alertHtml = "No video Records Found"
                $('.modal-body').append(alertHtml);
                return false;
            }
            html = "<ul class='vidUl lm_col_left'>";
            for (var j = 0; j < allData[i].advJsonData.collection.options.length; j++) {
                if (j == 0) {
                    html += '<li><a href="javascript:void(0)" class="videoClass active" video_id="' + allData[i].advJsonData.collection.options[j].mediaDetails.mediaId + '">' + allData[i].advJsonData.collection.options[j].labelName + '</a></li>'
                } else {
                    html += '<li><a href="javascript:void(0)" class="videoClass" video_id="' + allData[i].advJsonData.collection.options[j].mediaDetails.mediaId + '">' + allData[i].advJsonData.collection.options[j].labelName + '</a></li>'
                }
            }
        }
    }
    $('.modal-content').addClass("lm_multi_vd");
    $(".close").html("x");
    var htmlVideo = "<div class='lm_col_right'><div id='bright_video' class='embed-responsive embed-responsive-16by9'></div></div>";
    showModal();
    $('.modal-body').html('');
    html += "</ul>";
    $('.modal-body').append(html);
    $('.modal-body').append(htmlVideo);
    $('.modal-body').append('<span style="clear:both"></span>');
    //$("#bright_video").append('<section class="embed-responsive embed-responsive-16by9"><iframe  class="multipleBrightCoveVideo" height="300" id="wyjx83caac2b05d04bfab509428aefd5"  name="framewyjx83caac2b05d04bfab509428aefd5" src="https://players.brightcove.net/1500315202001/B1AhVYg4l_default/index.html?videoId=123" style="border:none;overflow:auto;"  width="400" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></section>');
    $("#bright_video").append('<section class="embed-responsive embed-responsive-16by9"><iframe  class="multipleBrightCoveVideo" height="300" id="wyjx83caac2b05d04bfab509428aefd5"  name="framewyjx83caac2b05d04bfab509428aefd5" src="https://savi-cdn.macmillantech.com/brightcove/index.html?videoId=123" style="border:none;overflow:auto;"  width="400" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></section>');
    //$('.lm_multi_vd').height($('#bright_video').outerHeight()+30);
    focusableElementsString = 'a[href], area[href], input:not([disabled]), button:not([disabled]), multipleBrightCoveVideo, object, embed, [tabindex="0"], [contentecitable]';
    focusableElements = document.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    firstTabStop = focusableElements[0];
    lastTabStop = $('#dummyDiv')[0];
    // firstTabStop.focus();
    bright_CoveSrc = $(".multipleBrightCoveVideo").attr('src').replace($(".multipleBrightCoveVideo").attr('src').split('=')[1], $('.videoClass').eq(0).attr('video_id'));
    $(".multipleBrightCoveVideo").attr('src', bright_CoveSrc); //.attr('allowfullscreen', "true").attr('mozallowfullscreen', "true").attr('webkitallowfullscreen', "true");
    $('.videoClass').on('click', function () {
        $('.videoClass').removeClass('active');
        $(this).addClass('active');
        bright_Cove = $('.multipleBrightCoveVideo').attr('src').replace($('.multipleBrightCoveVideo').attr('src').split('=')[1], $(this).attr('video_id'));
        $('.multipleBrightCoveVideo').error(function () {
            alert("error")
        }).attr('src', bright_Cove);
    });
    $(".multipleBrightCoveVideo").each(function () {
        if ($(this).parents('.embed-responsive').length) {
            $(this).parents('.embed-responsive').css({'height': $(this).attr('height')});
        }
    });
}
var loadHtmlForDataset = function (index, path) { //load modal for dataset
    $('.modal-content').removeClass('contentResizer');
    $('#myModal').removeClass('overFlowHidden');
    $('.modal-body').html('');
    $('.content').html('<strong>Dataset</strong>');
    $(".close").html("");
    showModal();
    if (path === "") {
        alertHtml = "No Dataset Records Found";
        $('.modal-body').append(alertHtml);
        return false;
    }
    if (allData === undefined) {
        alertHtml = "Data Loading in progress.Please try again later!";
        $('.modal-body').append(alertHtml);
        return false;
    }
    html = "<div class='datasetModal'><h3 class='pop-heading'>Download Media</h3><ul class='lmDatasetUl'>";
    var labelNameValue = [];
    for (var i = 0; i < allData.length; i++) {
        if (allData[i].id === index) {
            if (allData[i].advJsonData.collection.options === undefined) {
                alertHtml = "No Dataset Records Found";
                $('.modal-body').append(alertHtml);
                return false;
            }
            for (var j = 0; j < allData[i].advJsonData.collection.options.length; j++) {
                var urlArray = allData[i].advJsonData.collection.options[j].mediaDetails.mediaPath.split('/');
                var fileName = urlArray[urlArray.length - 1];
                labelNameValue[j] = allData[i].advJsonData.collection.options[j].labelName;
                html += '<li class="labelDatasetClass"><div class="mediablock"><div class="mediablock-body" id="labelName_' + j + '">' + '' + '</div> <div class="mediablock-right"><a href="' + encodeURIComponent(allData[i].advJsonData.collection.options[j].mediaDetails.mediaPath) + '" download="' + fileName + '" class="button primary">Download</a></div></div></li>';
            }
        }
    }
    html += "</ul></div>";
    $('.modal-body').append(html);
    //document.getElementById("labelName").textContent = labelNameValue;
    $.each(labelNameValue, function (key, value) {
        $('#labelName_' + key).text(value);
    });

    //download hack for dataset .por file
    //    $('.datasetModal').find('a').on('click',function(e){
    //      e.stopPropagation();
    //    });
    $('.modal-body').find('a').each(function () {
        $(this).attr('href', decodeURIComponent($(this).attr('href')));
    });
    focusableElementsString = 'a[href], area[href], input:not([disabled]), button:not([disabled]),object, embed, [tabindex="0"], [contentecitable]';
    focusableElements = document.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    firstTabStop = focusableElements[0];
    lastTabStop = focusableElements[focusableElements.length - 1];
    //firstTabStop.focus();
}
var initDataSetAndMultipleVideo = function () {
    $('body').append(htmlStr);
    modal = $('#myModal');
    $(".dataset").find("*").each(function (i, k) {
        i = "dummy";
        stopPropagation(k);
        mousePointer(k);
    });
    $(".multiplevideo").find("*").each(function (i, k) {
        i = "dummy";
        stopPropagation(k);
        mousePointer(k);
    });
    $(".lm_img_lightbox img").find("*").each(function (i, k) {
        i = "dummy";
        stopPropagation(k);
        mousePointer(k);
    });
    $('.multiplevideo').each(function () {
        if ($(this).attr('data-path') != "") {
            popUpCounter++;
            addDataScript($(this).attr('data-path'), $(this).attr('data-multiplevideo-id'));
        }
    });
    $('.dataset').each(function () {
        if ($(this).attr('data-path') != "") {
            popUpCounter++;
            addDataScript($(this).attr('data-path'), $(this).attr('data-dataset-id'));
        }
    });
    $('.multiplevideo').find('figure').each(function () {
        $(this).off().on('click keyup', function (e) {
            if (e.keyCode === 13 || e.type === 'click') {
                e.stopPropagation();
                index = $(this).parent().attr('data-multiplevideo-id');
                dataPath = $(this).parent().attr('data-path');
                loadHtmlForMultipleVdo(index, dataPath);
            }
        });
    });
    $('.dataset').find('figure').each(function () {
        $(this).off().on('click keyup', function (e) {
            if (e.keyCode === 13 || e.type === 'click') {
                e.stopPropagation();
                index = $(this).parent().attr('data-dataset-id');
                dataPath = $(this).parent().attr('data-path');
                loadHtmlForDataset(index, dataPath);
            }
        });
    });
    /******************** BS-3375 *********************/
    $("img.multiplevideo").each(function () {
        $(this).off().on('click keyup', function (e) {
            if (e.keyCode === 13 || e.type === 'click') {
                e.stopPropagation();
                dataPath = $(this).attr('data-path');
                index = $(this).attr('data-multiplevideo-id');
                loadHtmlForMultipleVdo(index, dataPath);
            }
        });
    });
    $("img.dataset").each(function () {
        $(this).off().on('click keyup', function (e) {
            if (e.keyCode === 13 || e.type === 'click') {
                e.stopPropagation();
                index = $(this).attr('data-dataset-id');
                dataPath = $(this).attr('data-path');
                loadHtmlForDataset(index, dataPath);
            }
        });
    });
    /******************** BS-3375 *********************/
    $(".close").off().on('click', function () {
        hideModal();
    });
    $(document).off().on('keydown', function (e) {
        if (e.keyCode == 27) {
            hideModal();
        } else {
            trapTabKey(e);
        }
    });
    modal.off().on('click', function (event) {
        if (event.target == modal[0]) {
            hideModal();
        }
    });
    $("#dummyDiv").off().on('focus', function () {
        $('.close').focus();
    });
}
/************************************GLOSSARY POPUP******************************/
var initTooltip = function () {
    var targets = $('a.keyword, a[epub\\:type="keyword"], dfn[epub\\:type="keyword"]');
    target = false,
            tooltip = false,
            tooltipText = false,
            title = false;
    targets.off().on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var description = "";
        var currElemId = "";
        var targetAnchorTag;
        if ($(this).is('a') === true) {
            currElemId = $(this).attr('href').split('#').pop();
            targetAnchorTag = $(this);
        } else {
            currElemId = $(this).find('a').attr('href').split('#').pop();
            targetAnchorTag = $(this).find('a');
        }
        $.each(glossaryData, function (key, value) {
            if (key == currElemId) {
                description = value.description;
            }
        });
        target = $(this);
        tip = description;
        tip = tip.replace(/epub:type/img, "epub-type");
        tip = tip.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
        tooltip = $('<div id="tooltip" aria-hidden="false" class="tipTool" aria-describedby="tip"></div>');
        tooltipText = $('<div class="tooltipText" tabindex="0" role="alert" id="tip"></div>');
        if (!tip || tip == '') {
            return false;
        }
        $(".tipTool").remove();
        tooltip.css({
            'opacity': 0,
            'max-height': '200px',
            'max-width': '350px'
        })
                .appendTo('body');
        tooltipText.css({
            'overflow-y': 'auto',
            'max-height': '180px',
            'max-width': '350px',
            'word-break': 'break-word',
            'overflow-x': 'hidden',
            'outline': 'none'
        })
                .html(tip)
                .appendTo('.tipTool');
        $('#tip').focus({
            preventScroll: true
        });
        $('#tip > a').css("color", "#cff3f9"); //BS-3100
        $('#tip > a').css("text-decoration", "underline");
        //$('#tip').blur();
        //Code For Redering MathML in Popup
        var tip_elem = document.getElementById("tip");
        if (typeof MathJax != "undefined") {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, tip_elem]);
            MathJax.Hub.Register.StartupHook("MathMenu Ready", function () {
                MathJax.Menu.BGSTYLE["z-index"] = 10000;
            });
        }
        if ($('.tooltipText').height() < 180) {
            $('.tooltipText').css('overflow-y', 'auto');
            $('.tooltipText').css('overflow-x', '');
        } else {
            $('.tooltipText').css('overflow-y', 'auto');
        }

        $('.tipTool').off().on('keydown', function (e) {
            if ((e.keyCode == 9 || e.which == 9) && tooltip.width() > 0) {
                targetAnchorTag.focus();
            }
        });
        var init_tooltip = function (event) {
            if ($(window).width() < tooltip.outerWidth() * 1.5) {
                tooltip.css('max-width', $(window).width() / 2);
                tooltipText.css('max-width', $(window).width() / 2);
            }
            if ($(window).height() < tooltip.outerHeight() * 1.5) {
                var maxHeight = $(window).height() / 2 - parseInt(tooltip.css('padding'));
                tooltip.css('max-height', maxHeight);
                tooltipText.css('max-height', maxHeight);
            }
            var posLeftlessZero = false;
            var pos_left = target[0].offsetLeft + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2),
                    pos_top = target.offset().top - tooltip.outerHeight() - parseInt(tooltip.css('marginTop')) - parseInt(tooltip.css('padding-top'));
            var marginTop = parseInt(tooltip.css('marginTop'));
            if (pos_left < 0) {
                posLeftlessZero = true;
                pos_left = target[0].offsetLeft + target.outerWidth() / 2 - parseInt(target.css('padding-right'));
                tooltip.addClass('lmleft');
            } else {
                tooltip.removeClass('lmleft');
            }
            if (pos_left + tooltip.outerWidth() > $(window).width() && posLeftlessZero === false) {
                pos_left = target[0].offsetLeft - tooltip.outerWidth() + target.outerWidth() / 2 + parseInt(target.css('padding-right'));
                tooltip.addClass('lmright');
                if (pos_left < 0) {
                    pos_left = target[0].offsetLeft + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2);
                    tooltip.removeClass('lmleft');
                    tooltip.removeClass('lmright');
                }
            } else {
                tooltip.removeClass('lmright');
            }
            // condition if glossary term is in line break
            if (target.outerHeight() > 25) {
                if (event.offsetX - target[0].offsetLeft > 150) {
                    if (Math.abs($(window).scrollTop() - target.offset().top) < tooltip.outerHeight()) {
                        pos_left = ($(window).width() - target.parent().outerWidth()) / 2 + parseInt(tooltip.css('padding-left'));
                        tooltip.addClass('lmleft');
                    } else {
                        pos_left = target.outerWidth() + ($(window).width() - target.parent().outerWidth()) / 2 - tooltip.outerWidth() - parseInt(tooltip.css('padding-right'));
                        //pos_left = target.width() - tooltip.outerWidth() + parseInt(tooltip.css('padding-right'));
                        tooltip.addClass('lmright');
                    }
                } else {
                    if (Math.abs($(window).scrollTop() - target.offset().top) < tooltip.outerHeight()) {
                        ///pos_left = ($(window).width() - target.parent().outerWidth()) / 2 + parseInt(tooltip.css('padding-left'));//AD
                        tooltip.addClass('lmleft');
                    } else {
                        //pos_left = target.outerWidth() + ($(window).width() - target.parent().outerWidth()) / 2 - tooltip.outerWidth() - parseInt(tooltip.css('padding-right'));//AD
                        //pos_left = target.width() - tooltip.outerWidth() + parseInt(tooltip.css('padding-right'));
                        tooltip.addClass('lmright');
                    }
                }
                pos_left = event.pageX - 55;
                //pos_top = event.pageY-55;
                if (pos_left < 0) {
                    pos_left = 0;
                }
            }
            if (pos_top < 0 || (Math.abs($(window).scrollTop() - target.offset().top) < tooltip.outerHeight())) {
                pos_top = target.offset().top + target.outerHeight() - parseInt(tooltip.css('marginTop')); // Sprint11:FROS-3380-fixed issue for popup ocverrides glossary term
                tooltip.addClass('lmtop');
            } else {
                tooltip.removeClass('lmtop');
            }
            if (parseInt(tooltip.css('marginTop')) === 0 && $('#tooltip').hasClass('lmtop') === false) {
                pos_top = pos_top + marginTop;
            }
            tooltip.css({
                left: pos_left,
                top: pos_top
            })
                    .animate({
                        top: '+=5',
                        opacity: 1
                    }, 0);
        };
        setTimeout(function () {
            init_tooltip(e);
        }, 1000);
        $('#tooltip').focus();
        $(window).resize(init_tooltip);
        var remove_tooltip = function () {
            $('#tip').blur();
            tooltip.animate({
                top: '-=5',
                opacity: 0
            }, 50, function () {
                $(this).remove();
            });
        };
        $('html').off().on('click touchstart keyup', function (e) {
            if ((tooltip.width() > 0) && ((e.type === "click" || e.type === "touchstart") && !$(e.target).hasClass('tipTool') && !$(e.target).hasClass('tooltipText')) || (e.type === "keyup" && e.keyCode === 27)) {
                remove_tooltip();
                targetAnchorTag.attr('aria-label', targetAnchorTag.text());
                targetAnchorTag.attr('title', 'Definition has been removed');
                targetAnchorTag.focus();
                setTimeout(function () {
                    targetAnchorTag.removeAttr('aria-label');
                    targetAnchorTag.removeAttr('title');
                }, 200);
                tooltipText.remove();
            }
        });
        return false;
    });
}
/************************************IMAGE POPUP******************************/
var initImgPopup = function () {
    $('body').append('<div id="gallery" class="pswp" role="dialog" aria-labelledby="figcaption"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><!-- <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div> --><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div id="figcaption" class="pswp__caption__center"></div><div class="lm_controls_lightbox"><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom lm__in" title="Zoom in"></button><button disabled="true" class="pswp__button pswp__button--zoom lm__out" title="Zoom out"></button></div></div></div></div></div>');
    var initPhotoSwipeFromDOM = function (gallerySelector) {
        //find aspect ratio of image
        var parseThumbnailElements = function (el) {
            var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    el,
                    childElements,
                    thumbnailEl,
                    size,
                    item;
            for (var i = 0; i < numNodes; i++) {
                el = thumbElements[i];
                // include only element nodes

                if (el.tagName != undefined && el.tagName.toLowerCase() == 'img') {
                    childElements = el;
                    if ($(childElements).siblings('figcaption').length == 0) {
                        $(childElements).parent().append('<figcaption style="display:none" class="emptyFigCaption"></figcaption>');
                    }
                    var maxWidth = el.naturalWidth;
                    var maxHeight = el.naturalHeight;
                    el.setAttribute('data-size', maxWidth + "x" + maxHeight)
                    size = el.getAttribute('data-size').split('x');
                    // create slide object
                    item = {
                        src: el.getAttribute('src'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        //						author: el.getAttribute('data-author')
                    };
                    item.el = el; // save link to element for getThumbBoundsFn
                    if (childElements) {
                        item.msrc = childElements.getAttribute('src'); // thumbnail url
                        if (childElements.tagName.toLowerCase() == "img") {
                            item.title = $(childElements).siblings('figcaption').html();
                            ;
                        }
                    }
                    el.setAttribute('data-med', el.getAttribute('src'));
                    var mediumSrc = el.getAttribute('data-med');
                    var aspectRatio = maxWidth / maxHeight;
                    var medSizeHeight = 1024 / aspectRatio;
                    if (mediumSrc) {
                        // el.setAttribute('data-med-size',"1024x"+medSizeHeight);
                        el.setAttribute('data-med-size', maxWidth + "x" + maxHeight);
                        size = el.getAttribute('data-med-size').split('x');
                        // "medium-sized" image
                        item.m = {
                            src: mediumSrc,
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                    }
                    // original image
                    item.o = {
                        src: item.src,
                        w: item.w,
                        h: item.h
                    };
                    items.push(item);
                }
            }
            //items.pop();
            return items;
        };
        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            if (e.target.tagName.toLowerCase() === "img") {
                $('body').css('overflow', 'hidden');
            }
            var eTarget = e.target || e.srcElement;
            $('.pswp__caption__center').html('');
            var clickedListItem = closest(eTarget, function (el) {
                if (el.tagName) {
                    return el.tagName.toLowerCase() === 'img';
                }

            });
            if (!clickedListItem) {
                return;
            }
            $('.lm_img_lightbox').find('img').removeClass('activeImg');
            $(eTarget).addClass('activeImg');
            var clickedGallery = clickedListItem.parentNode;
            var childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        //			var photoswipeParseHash = function() {
        //				var hash = window.location.hash.substring(1),
        //			    params = {};
        //
        //			    if(hash.length < 5) { // pid=1
        //			        return params;
        //			    }
        //
        //			    var vars = hash.split('&');
        //			    for (var i = 0; i < vars.length; i++) {
        //			        if(!vars[i]) {
        //			            continue;
        //			        }
        //			        var pair = vars[i].split('=');
        //			        if(pair.length < 2) {
        //			            continue;
        //			        }
        //			        params[pair[0]] = pair[1];
        //			    }
        //
        //			    if(params.gid) {
        //			    	params.gid = parseInt(params.gid, 10);
        //			    }
        //
        //			    return params;
        //			};
        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
            items = parseThumbnailElements(galleryElement);
            // define options (if needed)
            options = {
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function (index) {
                    // See Options->getThumbBoundsFn section of docs for more info
                    var thumbnail = items[index].el,
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                },
                addCaptionHTMLFn: function (item, captionEl, isFake) {
                    if (!item.title) {
                        captionEl.children[0].innerText = '';
                        return false;
                    }
                    captionEl.children[0].innerHTML = item.title + '<br/>';
                    var removeClass = function (itm) {
                        if ($(itm).children().length > 0) {
                            removeClass($(itm).children()[0]);
                        }
                        $(itm).removeAttr('class')
                    }
                    $('.pswp__caption__center').children().each(function (i, k) {
                        $(k).find('a').click(function (e) {
                            $(this).addClass('pswp__button--close');
                            window.parent.postMessage($(this).attr('href'), "*");
                        });
                        removeClass(k)
                    });
                    $('.lm__out').prop('disabled', true);
                    $('.lm__in').prop('disabled', false);
                    return true;
                },
                escKey: true,
                tapToClose: false,
                closeOnScroll: false,
                counterEl: false,
                captionEl: $(items[0].el).siblings('figcaption').html() == "" ? false : true,
                allowPanToNext: false,
                //                     captionAndToolbarHide:true
                // clickToCloseNonZoomable: false,
            };
            if (fromURL) {
                if (options.galleryPIDs) {
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }
            var radios = document.getElementsByName('gallery-style');
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    if (radios[i].id == 'radio-all-controls') {
                    } else if (radios[i].id == 'radio-minimal-black') {
                        options.mainClass = 'pswp--minimal--dark';
                        options.barsSize = {
                            top: 0,
                            bottom: 0
                        };
                        options.captionEl = false;
                        options.fullscreenEl = false;
                        options.shareEl = false;
                        options.bgOpacity = 0.85;
                        options.tapToClose = false;
                        options.tapToToggleControls = false;
                        options.allowPanToNext = false;
                        options.pinchToClose = false;
                    }
                    break;
                }
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            options.pinchToClose = true;
            options.captionAndToolbarHide = true
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            var realViewportWidth,
                    useLargeImages = false,
                    firstResize = true,
                    imageSrcWillChange;
            gallery.listen('beforeResize', function () {
                var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                dpiRatio = Math.min(dpiRatio, 2.5);
                realViewportWidth = gallery.viewportSize.x * dpiRatio;
                if (realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200) {
                    if (!useLargeImages) {
                        useLargeImages = true;
                        imageSrcWillChange = true;
                    }
                } else {
                    if (useLargeImages) {
                        useLargeImages = false;
                        imageSrcWillChange = true;
                    }
                }
                if (imageSrcWillChange && !firstResize) {
                    gallery.invalidateCurrItems();
                }
                if (firstResize) {
                    firstResize = false;
                }
                imageSrcWillChange = false;
            });
            gallery.listen('gettingData', function (index, item) {
                if (useLargeImages) {
                    item.src = item.o.src;
                    item.w = item.o.w;
                    item.h = item.o.h;
                } else {
                    item.src = item.m.src;
                    item.w = item.m.w;
                    item.h = item.m.h;
                }
            });
            $(galleryElements[i]).keypress(function (e) {
                if (e.which == 13) {
                    onThumbnailsClick(e);
                }
            });
            var obj = $(galleryElements[i]).find("a");
            $.each(obj, function (key, value) {
                var attrhref = $(obj[key]).attr('href');
                if (attrhref.indexOf('xhtml') != -1) {
                    $(obj[key]).attr('id', 'pageref');
                } else {
                    $(obj[key]).attr('target', '_blank');
                }
            });
            gallery.init();
        };
        // select all gallery elements
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            $(galleryElements[i]).find('img').attr({
                tabindex: '0',
                alt: 'image pop up. Press enter to access the pop up'
            });
            $(galleryElements[i]).find("a").on('click', function (e) {
                e.stopPropagation()
            });
            galleryElements[i].onclick = onThumbnailsClick;

            $(galleryElements[i]).keypress(function (e) {
                if (e.which == 13) {
                    onThumbnailsClick(e);
                }
            });
        }
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        //			var hashData = photoswipeParseHash();
        //			if(hashData.pid && hashData.gid) {
        //				openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
        //			}
    };
    initPhotoSwipeFromDOM('.lm_img_lightbox');
};

(function ($) {
    $.floatThead = $.floatThead || {};
    $.floatThead.defaults = {
        headerCellSelector: 'tr:visible:first>*:visible', //thead cells are this.
        zIndex: 1001, //zindex of the floating thead (actually a container div)
        position: 'auto', // 'fixed', 'absolute', 'auto'. auto picks the best for your table scrolling type.
        top: 0, //String or function($table) - offset from top of window where the header should not pass above
        bottom: 0, //String or function($table) - offset from the bottom of the table where the header should stop scrolling
        scrollContainer: function ($table) {
            return $([]);
        },
        responsiveContainer: function ($table) {
            return $([]);
        },
        getSizingRow: function ($table, $cols, $fthCells) {
            return $table.find('tbody tr:visible:first>*:visible');
        },
        floatTableClass: 'floatThead-table',
        floatWrapperClass: 'floatThead-wrapper',
        floatContainerClass: 'floatThead-container',
        copyTableClass: true, //copy 'class' attribute from table into the floated table so that the styles match.
        autoReflow: false, //(undocumented) - use MutationObserver api to reflow automatically when internal table DOM changes
        debug: false, //print possible issues (that don't prevent script loading) to console, if console exists.
        support: {//should we bind events that expect these frameworks to be present and/or check for them?
            bootstrap: true,
            datatables: true,
            jqueryUI: true,
            perfectScrollbar: true
        }
    };
    var util = window._ || (function underscoreShim() {
        var that = {};
        var hasOwnProperty = Object.prototype.hasOwnProperty,
                isThings = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'];
        that.has = function (obj, key) {
            return hasOwnProperty.call(obj, key);
        };
        that.keys = Object.keys || function (obj) {
            if (obj !== Object(obj))
                throw new TypeError('Invalid object');
            var keys = [];
            for (var key in obj)
                if (that.has(obj, key))
                    keys.push(key);
            return keys;
        };
        var idCounter = 0;
        that.uniqueId = function (prefix) {
            var id = ++idCounter + '';
            return prefix ? prefix + id : id;
        };
        $.each(isThings, function () {
            var name = this;
            that['is' + name] = function (obj) {
                return Object.prototype.toString.call(obj) == '[object ' + name + ']';
            };
        });
        that.debounce = function (func, wait, immediate) {
            var timeout, args, context, timestamp, result;
            return function () {
                context = this;
                args = arguments;
                timestamp = new Date();
                var later = function () {
                    var last = (new Date()) - timestamp;
                    if (last < wait) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        if (!immediate)
                            result = func.apply(context, args);
                    }
                };
                var callNow = immediate && !timeout;
                if (!timeout) {
                    timeout = setTimeout(later, wait);
                }
                if (callNow)
                    result = func.apply(context, args);
                return result;
            };
        };
        return that;
    })();
    var canObserveMutations = typeof MutationObserver !== 'undefined';
    //browser stuff
    var ieVersion = function () {
        for (var a = 3, b = document.createElement("b"), c = b.all || []; a = 1 + a, b.innerHTML = "<!--[if gt IE " + a + "]><i><![endif]-->", c[0]; )
            ;
        return 4 < a ? a : document.documentMode
    }();
    var isFF = /Gecko\//.test(navigator.userAgent);
    var isWebkit = /WebKit\//.test(navigator.userAgent);
    if (!(ieVersion || isFF || isWebkit)) {
        ieVersion = 11; //yey a hack!
    }
    var isTableWidthBug = function () {
        if (isWebkit) {
            var $test = $('<div>').css('width', 0).append(
                    $('<table>').css('max-width', '100%').append(
                    $('<tr>').append(
                    $('<th>').append(
                    $('<div>').css('min-width', 100).text('X')
                    )
                    )
                    )
                    );
            $("body").append($test);
            var ret = ($test.find("table").width() == 0);
            $test.remove();
            return ret;
        }
        return false;
    };
    var createElements = !isFF && !ieVersion;
    var $window = $(window);
    if (!window.matchMedia) {
        var _beforePrint = window.onbeforeprint;
        var _afterPrint = window.onafterprint;
        window.onbeforeprint = function () {
            _beforePrint && _beforePrint();
            $window.triggerHandler("beforeprint");
        };
        window.onafterprint = function () {
            _afterPrint && _afterPrint();
            $window.triggerHandler("afterprint");
        };
    }

    function windowResize(eventName, cb) {
        if (ieVersion == 8) {
            var winWidth = $window.width();
            var debouncedCb = util.debounce(function () {
                var winWidthNew = $window.width();
                if (winWidth != winWidthNew) {
                    winWidth = winWidthNew;
                    cb();
                }
            }, 1);
            $window.on(eventName, debouncedCb);
        } else {
            $window.on(eventName, util.debounce(cb, 1));
        }
    }

    function getClosestScrollContainer($elem) {
        var elem = $elem[0];
        var parent = elem.parentElement;
        do {
            var pos = window
                    .getComputedStyle(parent)
                    .getPropertyValue('overflow');
            if (pos != 'visible')
                break;
        } while (parent = parent.parentElement);
        if (parent == document.body) {
            return $([]);
        }
        return $(parent);
    }

    function debug(str) {
        window && window.console && window.console.error && window.console.error("jQuery.floatThead: " + str);
    }
    //returns fractional pixel widths
    function getOffsetWidth(el) {
        var rect = el.getBoundingClientRect();
        return rect.width || rect.right - rect.left;
    }

    function scrollbarWidth() {
        var d = document.createElement("scrolltester");
        d.style.cssText = 'width:100px;height:100px;overflow:scroll!important;position:absolute;top:-9999px;display:block';
        document.body.appendChild(d);
        var result = d.offsetWidth - d.clientWidth;
        document.body.removeChild(d);
        return result;
    }

    function isDatatable($table) {
        if ($table.dataTableSettings) {
            for (var i = 0; i < $table.dataTableSettings.length; i++) {
                var table = $table.dataTableSettings[i].nTable;
                if ($table[0] == table) {
                    return true;
                }
            }
        }
        return false;
    }

    function tableWidth($table, $fthCells, isOuter) {
        var fn = isOuter ? "outerWidth" : "width";
        if (isTableWidthBug && $table.css("max-width")) {
            var w = 0;
            if (isOuter) {
                w += parseInt($table.css("borderLeft"), 10);
                w += parseInt($table.css("borderRight"), 10);
            }
            for (var i = 0; i < $fthCells.length; i++) {
                w += $fthCells.get(i).offsetWidth;
            }
            return w;
        } else {
            return $table[fn]();
        }
    }
    $.fn.floatThead = function (map) {
        map = map || {};
        if (ieVersion < 8) {
            return this;
        }
        var mObs = null;
        if (util.isFunction(isTableWidthBug)) {
            isTableWidthBug = isTableWidthBug();
        }
        if (util.isString(map)) {
            var command = map;
            var args = Array.prototype.slice.call(arguments, 1);
            var ret = this;
            this.filter('table').each(function () {
                var $this = $(this);
                var opts = $this.data('floatThead-lazy');
                if (opts) {
                    $this.floatThead(opts);
                }
                var obj = $this.data('floatThead-attached');
                if (obj && util.isFunction(obj[command])) {
                    var r = obj[command].apply(this, args);
                    if (r !== undefined) {
                        ret = r;
                    }
                }
            });
            return ret;
        }
        var opts = $.extend({}, $.floatThead.defaults || {}, map);
        $.each(map, function (key, val) {
            if ((!(key in $.floatThead.defaults)) && opts.debug) {
                debug("Used [" + key + "] key to init plugin, but that param is not an option for the plugin. Valid options are: " + (util.keys($.floatThead.defaults)).join(', '));
            }
        });
        if (opts.debug) {
            var v = $.fn.jquery.split(".");
            if (parseInt(v[0], 10) == 1 && parseInt(v[1], 10) <= 7) {
                debug("jQuery version " + $.fn.jquery + " detected! This plugin supports 1.8 or better, or 1.7.x with jQuery UI 1.8.24 -> http://jqueryui.com/resources/download/jquery-ui-1.8.24.zip")
            }
        }
        this.filter(':not(.' + opts.floatTableClass + ')').each(function () {
            var floatTheadId = util.uniqueId();
            var $table = $(this);
            if ($table.data('floatThead-attached')) {
                return true; //continue the each loop
            }
            if (!$table.is('table')) {
                throw new Error('jQuery.floatThead must be run on a table element. ex: $("table").floatThead();');
            }
            canObserveMutations = opts.autoReflow && canObserveMutations; //option defaults to false!
            var $header = $table.children('thead:first');
            var $tbody = $table.children('tbody:first');
            if ($header.length == 0 || $tbody.length == 0) {
                if (opts.debug) {
                    if ($header.length == 0) {
                        debug('The thead element is missing.');
                    } else {
                        debug('The tbody element is missing.');
                    }
                }
                $table.data('floatThead-lazy', opts);
                $table.unbind("reflow").one('reflow', function () {
                    $table.floatThead(opts);
                });
                return;
            }
            if ($table.data('floatThead-lazy')) {
                $table.unbind("reflow");
            }
            $table.data('floatThead-lazy', false);
            var headerFloated = true;
            var scrollingTop, scrollingBottom;
            var scrollbarOffset = {
                vertical: 0,
                horizontal: 0
            };
            var scWidth = scrollbarWidth();
            var lastColumnCount = 0;
            if (opts.scrollContainer === true) {
                opts.scrollContainer = getClosestScrollContainer;
            }
            var $scrollContainer = opts.scrollContainer($table) || $([]); //guard against returned nulls
            var locked = $scrollContainer.length > 0;
            var $responsiveContainer = locked ? $([]) : opts.responsiveContainer($table) || $([]);
            var responsive = isResponsiveContainerActive();
            var useAbsolutePositioning = null;
            if (opts.position == 'auto') {
                useAbsolutePositioning = null;
            } else if (opts.position == 'fixed') {
                useAbsolutePositioning = false;
            } else if (opts.position == 'absolute') {
                useAbsolutePositioning = true;
            } else if (opts.debug) {
                debug('Invalid value given to "position" option, valid is "fixed", "absolute" and "auto". You passed: ', opts.position);
            }
            if (useAbsolutePositioning == null) {
                useAbsolutePositioning = locked;
            }
            var $caption = $table.find("caption");
            var haveCaption = $caption.length == 1;
            if (haveCaption) {
                var captionAlignTop = ($caption.css("caption-side") || $caption.attr("align") || "top") === "top";
            }
            var $fthGrp = $('<fthfoot>').css({
                'display': 'table-footer-group',
                'border-spacing': 0,
                'height': 0,
                'border-collapse': 'collapse',
                'visibility': 'hidden'
            });
            var wrappedContainer = false;
            var $wrapper = $([]);
            var absoluteToFixedOnScroll = ieVersion <= 9 && !locked && useAbsolutePositioning;
            var $floatTable = $("<table/>");
            var $floatColGroup = $("<colgroup/>");
            var $tableColGroup = $table.children('colgroup:first');
            var existingColGroup = true;
            if ($tableColGroup.length == 0) {
                $tableColGroup = $("<colgroup/>");
                existingColGroup = false;
            }
            var $fthRow = $('<fthtr>').css({
                'display': 'table-row',
                'border-spacing': 0,
                'height': 0,
                'border-collapse': 'collapse'
            });
            var $floatContainer = $('<div>').css('overflow', 'hidden').attr('aria-hidden', 'true');
            var floatTableHidden = false;
            var $newHeader = $("<thead/>");
            var $sizerRow = $('<tr class="size-row" aria-hidden="true"/>');
            var $sizerCells = $([]);
            var $tableCells = $([]);
            var $headerCells = $([]);
            var $fthCells = $([]);
            $newHeader.append($sizerRow);
            $table.prepend($tableColGroup);
            if (createElements) {
                $fthGrp.append($fthRow);
                $table.append($fthGrp);
            }
            $floatTable.append($floatColGroup);
            $floatContainer.append($floatTable);
            if (opts.copyTableClass) {
                $floatTable.attr('class', $table.attr('class'));
            }
            $floatTable.attr({
                'cellpadding': $table.attr('cellpadding'),
                'cellspacing': $table.attr('cellspacing'),
                'border': $table.attr('border')
            });
            var tableDisplayCss = $table.css('display');
            $floatTable.css({
                'borderCollapse': $table.css('borderCollapse'),
                'border': $table.css('border'),
                'display': tableDisplayCss
            });
            if (!locked) {
                $floatTable.css('width', 'auto');
            }
            if (tableDisplayCss == 'none') {
                floatTableHidden = true;
            }
            $floatTable.addClass(opts.floatTableClass).css({
                'margin': 0,
                'border-bottom-width': 0
            });
            if (useAbsolutePositioning) {
                var makeRelative = function ($container, alwaysWrap) {
                    var positionCss = $container.css('position');
                    var relativeToScrollContainer = (positionCss == "relative" || positionCss == "absolute");
                    var $containerWrap = $container;
                    if (!relativeToScrollContainer || alwaysWrap) {
                        var css = {
                            "paddingLeft": $container.css('paddingLeft'),
                            "paddingRight": $container.css('paddingRight')
                        };
                        $floatContainer.css(css);
                        $containerWrap = $container.data('floatThead-containerWrap') || $container.wrap(
                                $('<div>').addClass(opts.floatWrapperClass).css({
                            'position': 'relative',
                            'clear': 'both'
                        })
                                ).parent();
                        $container.data('floatThead-containerWrap', $containerWrap); //multiple tables inside one scrolling container - #242
                        wrappedContainer = true;
                    }
                    return $containerWrap;
                };
                if (locked) {
                    $wrapper = makeRelative($scrollContainer, true);
                    $wrapper.prepend($floatContainer);
                } else {
                    $wrapper = makeRelative($table);
                    $table.before($floatContainer);
                }
            } else {
                $table.before($floatContainer);
            }
            $floatContainer.css({
                position: useAbsolutePositioning ? 'absolute' : 'fixed',
                marginTop: 0,
                top: useAbsolutePositioning ? 0 : 'auto',
                zIndex: opts.zIndex,
                willChange: 'transform'
            });
            $floatContainer.addClass(opts.floatContainerClass);
            updateScrollingOffsets();
            var layoutFixed = {
                'table-layout': 'fixed'
            };
            var layoutAuto = {
                'table-layout': $table.css('tableLayout') || 'auto'
            };
            var originalTableWidth = $table[0].style.width || "";
            var originalTableMinWidth = $table.css('minWidth') || "";

            function eventName(name) {
                return name + '.fth-' + floatTheadId + '.floatTHead'
            }

            function setHeaderHeight() {
                var headerHeight = 0;
                $header.children("tr:visible").each(function () {
                    headerHeight += $(this).outerHeight(true);
                });
                if ($table.css('border-collapse') == 'collapse') {
                    var tableBorderTopHeight = parseInt($table.css('border-top-width'), 10);
                    var cellBorderTopHeight = parseInt($table.find("thead tr:first").find(">*:first").css('border-top-width'), 10);
                    if (tableBorderTopHeight > cellBorderTopHeight) {
                        headerHeight -= (tableBorderTopHeight / 2); //id love to see some docs where this magic recipe is found..
                    }
                }
                $sizerRow.outerHeight(headerHeight);
                $sizerCells.outerHeight(headerHeight);
            }

            function setFloatWidth() {
                var tw = tableWidth($table, $fthCells, true);
                var $container = responsive ? $responsiveContainer : $scrollContainer;
                var width = $container.width() || tw;
                var floatContainerWidth = $container.css("overflow-y") != 'hidden' ? width - scrollbarOffset.vertical : width;
                $floatContainer.width(floatContainerWidth);
                if (locked) {
                    var percent = 100 * tw / (floatContainerWidth);
                    $floatTable.css('width', percent + '%');
                } else {
                    $floatTable.outerWidth(tw);
                }
            }

            function updateScrollingOffsets() {
                scrollingTop = (util.isFunction(opts.top) ? opts.top($table) : opts.top) || 0;
                scrollingBottom = (util.isFunction(opts.bottom) ? opts.bottom($table) : opts.bottom) || 0;
            }
            /**
             * get the number of columns and also rebuild resizer rows if the count is different than the last count
             */
            function columnNum() {
                var count;
                var $headerColumns = $header.find(opts.headerCellSelector);
                if (existingColGroup) {
                    count = $tableColGroup.find('col').length;
                } else {
                    count = 0;
                    $headerColumns.each(function () {
                        count += parseInt(($(this).attr('colspan') || 1), 10);
                    });
                }
                if (count != lastColumnCount) {
                    lastColumnCount = count;
                    var cells = [],
                            cols = [],
                            psuedo = [],
                            content;
                    for (var x = 0; x < count; x++) {
                        content = $headerColumns.eq(x).text();
                        cells.push('<th class="floatThead-col" aria-label="' + content + '"/>');
                        cols.push('<col/>');
                        psuedo.push(
                                $('<fthtd>').css({
                            'display': 'table-cell',
                            'height': 0,
                            'width': 'auto'
                        })
                                );
                    }
                    cols = cols.join('');
                    cells = cells.join('');
                    if (createElements) {
                        $fthRow.empty();
                        $fthRow.append(psuedo);
                        $fthCells = $fthRow.find('fthtd');
                    }
                    $sizerRow.html(cells);
                    $sizerCells = $sizerRow.find("th");
                    if (!existingColGroup) {
                        $tableColGroup.html(cols);
                    }
                    $tableCells = $tableColGroup.find('col');
                    $floatColGroup.html(cols);
                    $headerCells = $floatColGroup.find("col");
                }
                return count;
            }

            function refloat() { //make the thing float
                if (!headerFloated) {
                    headerFloated = true;
                    if (useAbsolutePositioning) { //#53, #56
                        var tw = tableWidth($table, $fthCells, true);
                        var wrapperWidth = $wrapper.width();
                        if (tw > wrapperWidth) {
                            $table.css('minWidth', tw);
                        }
                    }
                    $table.css(layoutFixed);
                    $floatTable.css(layoutFixed);
                    $floatTable.append($header); //append because colgroup must go first in chrome
                    $tbody.before($newHeader);
                    setHeaderHeight();
                }
            }

            function unfloat() { //put the header back into the table
                if (headerFloated) {
                    headerFloated = false;
                    if (useAbsolutePositioning) { //#53, #56
                        $table.width(originalTableWidth);
                    }
                    $newHeader.detach();
                    $table.prepend($header);
                    $table.css(layoutAuto);
                    $floatTable.css(layoutAuto);
                    $table.css('minWidth', originalTableMinWidth); //this looks weird, but it's not a bug. Think about it!!
                    $table.css('minWidth', tableWidth($table, $fthCells)); //#121
                }
            }
            var isHeaderFloatingLogical = false; //for the purpose of this event, the header is/isnt floating, even though the element
            //might be in some other state. this is what the header looks like to the user
            function triggerFloatEvent(isFloating) {
                if (isHeaderFloatingLogical != isFloating) {
                    isHeaderFloatingLogical = isFloating;
                    $table.triggerHandler("floatThead", [isFloating, $floatContainer])
                }
            }

            function changePositioning(isAbsolute) {
                if (useAbsolutePositioning != isAbsolute) {
                    useAbsolutePositioning = isAbsolute;
                    $floatContainer.css({
                        position: useAbsolutePositioning ? 'absolute' : 'fixed'
                    });
                }
            }

            function getSizingRow($table, $cols, $fthCells, ieVersion) {
                if (createElements) {
                    return $fthCells;
                } else if (ieVersion) {
                    return opts.getSizingRow($table, $cols, $fthCells);
                } else {
                    return $cols;
                }
            }
            /**
             * returns a function that updates the floating header's cell widths.
             * @return {Function}
             */
            function reflow() {
                var i;
                var numCols = columnNum(); //if the tables columns changed dynamically since last time (datatables), rebuild the sizer rows and get a new count
                return function () {
                    //Cache the current scrollLeft value so that it can be reset post reflow
                    var scrollLeft = $floatContainer.scrollLeft();
                    $tableCells = $tableColGroup.find('col');
                    var $rowCells = getSizingRow($table, $tableCells, $fthCells, ieVersion);
                    if ($rowCells.length == numCols && numCols > 0) {
                        if (!existingColGroup) {
                            for (i = 0; i < numCols; i++) {
                                $tableCells.eq(i).css('width', '');
                            }
                        }
                        unfloat();
                        var widths = [];
                        for (i = 0; i < numCols; i++) {
                            widths[i] = getOffsetWidth($rowCells.get(i));
                        }
                        for (i = 0; i < numCols; i++) {
                            $headerCells.eq(i).width(widths[i]);
                            $tableCells.eq(i).width(widths[i]);
                        }
                        refloat();
                    } else {
                        $floatTable.append($header);
                        $table.css(layoutAuto);
                        $floatTable.css(layoutAuto);
                        setHeaderHeight();
                    }
                    //Set back the current scrollLeft value on floatContainer
                    $floatContainer.scrollLeft(scrollLeft);
                    $table.triggerHandler("reflowed", [$floatContainer]);
                };
            }

            function floatContainerBorderWidth(side) {
                var border = $scrollContainer.css("border-" + side + "-width");
                var w = 0;
                if (border && ~border.indexOf('px')) {
                    w = parseInt(border, 10);
                }
                return w;
            }

            function isResponsiveContainerActive() {
                return $responsiveContainer.css("overflow-x") == 'auto';
            }
            /**
             * first performs initial calculations that we expect to not change when the table, window, or scrolling container are scrolled.
             * returns a function that calculates the floating container's top and left coords. takes into account if we are using page scrolling or inner scrolling
             * @return {Function}
             */
            function calculateFloatContainerPosFn() {
                var scrollingContainerTop = $scrollContainer.scrollTop();
                //this floatEnd calc was moved out of the returned function because we assume the table height doesn't change (otherwise we must reinit by calling calculateFloatContainerPosFn)
                var floatEnd;
                var tableContainerGap = 0;
                var captionHeight = haveCaption ? $caption.outerHeight(true) : 0;
                var captionScrollOffset = captionAlignTop ? captionHeight : -captionHeight;
                var floatContainerHeight = $floatContainer.height();
                var tableOffset = $table.offset();
                var tableLeftGap = 0; //can be caused by border on container (only in locked mode)
                var tableTopGap = 0;
                if (locked) {
                    var containerOffset = $scrollContainer.offset();
                    tableContainerGap = tableOffset.top - containerOffset.top + scrollingContainerTop;
                    if (haveCaption && captionAlignTop) {
                        tableContainerGap += captionHeight;
                    }
                    tableLeftGap = floatContainerBorderWidth('left');
                    tableTopGap = floatContainerBorderWidth('top');
                    tableContainerGap -= tableTopGap;
                } else {
                    floatEnd = tableOffset.top - scrollingTop - floatContainerHeight + scrollingBottom + scrollbarOffset.horizontal;
                }
                var windowTop = $window.scrollTop();
                var windowLeft = $window.scrollLeft();
                var getScrollContainerLeft = function () {
                    return (isResponsiveContainerActive() ? $responsiveContainer : $scrollContainer).scrollLeft() || 0;
                };
                var scrollContainerLeft = getScrollContainerLeft();
                return function (eventType) {
                    responsive = isResponsiveContainerActive();
                    var isTableHidden = $table[0].offsetWidth <= 0 && $table[0].offsetHeight <= 0;
                    if (!isTableHidden && floatTableHidden) {
                        floatTableHidden = false;
                        setTimeout(function () {
                            $table.triggerHandler("reflow");
                        }, 1);
                        return null;
                    }
                    if (isTableHidden) { //it's hidden
                        floatTableHidden = true;
                        if (!useAbsolutePositioning) {
                            return null;
                        }
                    }
                    if (eventType == 'windowScroll') {
                        windowTop = $window.scrollTop();
                        windowLeft = $window.scrollLeft();
                    } else if (eventType == 'containerScroll') {
                        if ($responsiveContainer.length) {
                            if (!responsive) {
                                return; //we dont care about the event if we arent responsive right now
                            }
                            scrollContainerLeft = $responsiveContainer.scrollLeft();
                        } else {
                            scrollingContainerTop = $scrollContainer.scrollTop();
                            scrollContainerLeft = $scrollContainer.scrollLeft();
                        }
                    } else if (eventType != 'init') {
                        windowTop = $window.scrollTop();
                        windowLeft = $window.scrollLeft();
                        scrollingContainerTop = $scrollContainer.scrollTop();
                        scrollContainerLeft = getScrollContainerLeft();
                    }
                    if (isWebkit && (windowTop < 0 || windowLeft < 0)) { //chrome overscroll effect at the top of the page - breaks fixed positioned floated headers
                        return;
                    }
                    if (absoluteToFixedOnScroll) {
                        if (eventType == 'windowScrollDone') {
                            changePositioning(true); //change to absolute
                        } else {
                            changePositioning(false); //change to fixed
                        }
                    } else if (eventType == 'windowScrollDone') {
                        return null; //event is fired when they stop scrolling. ignore it if not 'absoluteToFixedOnScroll'
                    }
                    tableOffset = $table.offset();
                    if (haveCaption && captionAlignTop) {
                        tableOffset.top += captionHeight;
                    }
                    var top, left;
                    var tableHeight = $table.outerHeight();
                    if (locked && useAbsolutePositioning) { //inner scrolling, absolute positioning
                        if (tableContainerGap >= scrollingContainerTop) {
                            var gap = tableContainerGap - scrollingContainerTop + tableTopGap;
                            top = gap > 0 ? gap : 0;
                            triggerFloatEvent(false);
                        } else {
                            top = wrappedContainer ? tableTopGap : scrollingContainerTop;
                            //headers stop at the top of the viewport
                            triggerFloatEvent(true);
                        }
                        left = tableLeftGap;
                    } else if (!locked && useAbsolutePositioning) { //window scrolling, absolute positioning
                        if (windowTop > floatEnd + tableHeight + captionScrollOffset) {
                            top = tableHeight - floatContainerHeight + captionScrollOffset; //scrolled past table
                        } else if (tableOffset.top >= windowTop + scrollingTop) {
                            top = 0; //scrolling to table
                            unfloat();
                            triggerFloatEvent(false);
                        } else {
                            top = scrollingTop + windowTop - tableOffset.top + tableContainerGap + (captionAlignTop ? captionHeight : 0);
                            refloat(); //scrolling within table. header floated
                            triggerFloatEvent(true);
                        }
                        left = scrollContainerLeft;
                    } else if (locked && !useAbsolutePositioning) { //inner scrolling, fixed positioning
                        if (tableContainerGap > scrollingContainerTop || scrollingContainerTop - tableContainerGap > tableHeight) {
                            top = tableOffset.top - windowTop;
                            unfloat();
                            triggerFloatEvent(false);
                        } else {
                            top = tableOffset.top + scrollingContainerTop - windowTop - tableContainerGap;
                            refloat();
                            triggerFloatEvent(true);
                            //headers stop at the top of the viewport
                        }
                        left = tableOffset.left + scrollContainerLeft - windowLeft;
                    } else if (!locked && !useAbsolutePositioning) { //window scrolling, fixed positioning
                        if (windowTop > floatEnd + tableHeight + captionScrollOffset) {
                            top = tableHeight + scrollingTop - windowTop + floatEnd + captionScrollOffset;
                            //scrolled past the bottom of the table
                        } else if (tableOffset.top > windowTop + scrollingTop) {
                            top = tableOffset.top - windowTop;
                            refloat();
                            triggerFloatEvent(false); //this is a weird case, the header never gets unfloated and i have no no way to know
                            //scrolled past the top of the table
                        } else {
                            //scrolling within the table
                            top = scrollingTop;
                            triggerFloatEvent(true);
                        }
                        left = tableOffset.left + scrollContainerLeft - windowLeft;
                    }
                    return {
                        top: Math.round(top),
                        left: Math.round(left)
                    };
                };
            }
            /**
             * returns a function that caches old floating container position and only updates css when the position changes
             * @return {Function}
             */
            function repositionFloatContainerFn() {
                var oldTop = null;
                var oldLeft = null;
                var oldScrollLeft = null;
                return function (pos, setWidth, setHeight) {
                    if (pos != null && (oldTop != pos.top || oldLeft != pos.left)) {
                        if (ieVersion === 8) {
                            $floatContainer.css({
                                top: pos.top,
                                left: pos.left
                            });
                        } else {
                            var transform = 'translateX(' + pos.left + 'px) translateY(' + pos.top + 'px)';
                            $floatContainer.css({
                                '-webkit-transform': transform,
                                '-moz-transform': transform,
                                '-ms-transform': transform,
                                '-o-transform': transform,
                                'transform': transform,
                                'top': 0,
                                'left': 0
                            });
                        }
                        oldTop = pos.top;
                        oldLeft = pos.left;
                    }
                    if (setWidth) {
                        setFloatWidth();
                    }
                    if (setHeight) {
                        setHeaderHeight();
                    }
                    var scrollLeft = (responsive ? $responsiveContainer : $scrollContainer).scrollLeft();
                    if (!useAbsolutePositioning || oldScrollLeft != scrollLeft) {
                        $floatContainer.scrollLeft(scrollLeft);
                        oldScrollLeft = scrollLeft;
                    }
                }
            }
            /**
             * checks if THIS table has scrollbars, and finds their widths
             */
            function calculateScrollBarSize() { //this should happen after the floating table has been positioned
                if ($scrollContainer.length) {
                    if (opts.support && opts.support.perfectScrollbar && $scrollContainer.data().perfectScrollbar) {
                        scrollbarOffset = {
                            horizontal: 0,
                            vertical: 0
                        };
                    } else {
                        if ($scrollContainer.css('overflow-x') == 'scroll') {
                            scrollbarOffset.horizontal = scWidth;
                        } else {
                            var sw = $scrollContainer.width(),
                                    tw = tableWidth($table, $fthCells);
                            var offsetv = sh < th ? scWidth : 0;
                            scrollbarOffset.horizontal = sw - offsetv < tw ? scWidth : 0;
                        }
                        if ($scrollContainer.css('overflow-y') == 'scroll') {
                            scrollbarOffset.vertical = scWidth;
                        } else {
                            var sh = $scrollContainer.height(),
                                    th = $table.height();
                            var offseth = sw < tw ? scWidth : 0;
                            scrollbarOffset.vertical = sh - offseth < th ? scWidth : 0;
                        }
                    }
                }
            }
            //finish up. create all calculation functions and bind them to events
            calculateScrollBarSize();
            var flow;
            var ensureReflow = function () {
                flow = reflow();
                flow();
            };
            ensureReflow();
            var calculateFloatContainerPos = calculateFloatContainerPosFn();
            var repositionFloatContainer = repositionFloatContainerFn();
            repositionFloatContainer(calculateFloatContainerPos('init'), true); //this must come after reflow because reflow changes scrollLeft back to 0 when it rips out the thead
            var windowScrollDoneEvent = util.debounce(function () {
                repositionFloatContainer(calculateFloatContainerPos('windowScrollDone'), false);
            }, 1);
            var windowScrollEvent = function () {
                repositionFloatContainer(calculateFloatContainerPos('windowScroll'), false);
                if (absoluteToFixedOnScroll) {
                    windowScrollDoneEvent();
                }
            };
            var containerScrollEvent = function () {
                repositionFloatContainer(calculateFloatContainerPos('containerScroll'), false);
            };
            var windowResizeEvent = function () {
                if ($table.is(":hidden")) {
                    return;
                }
                updateScrollingOffsets();
                calculateScrollBarSize();
                ensureReflow();
                calculateFloatContainerPos = calculateFloatContainerPosFn();
                repositionFloatContainer = repositionFloatContainerFn();
                repositionFloatContainer(calculateFloatContainerPos('resize'), true, true);
            };
            var reflowEvent = util.debounce(function () {
                if ($table.is(":hidden")) {
                    return;
                }
                calculateScrollBarSize();
                updateScrollingOffsets();
                ensureReflow();
                calculateFloatContainerPos = calculateFloatContainerPosFn();
                repositionFloatContainer(calculateFloatContainerPos('reflow'), true);
            }, 1);
            /////// printing stuff
            var beforePrint = function () {
                unfloat();
            };
            var afterPrint = function () {
                refloat();
            };
            var printEvent = function (mql) {
                //make printing the table work properly on IE10+
                if (mql.matches) {
                    beforePrint();
                } else {
                    afterPrint();
                }
            };
            var matchMediaPrint;
            if (window.matchMedia && window.matchMedia('print').addListener) {
                matchMediaPrint = window.matchMedia("print");
                matchMediaPrint.addListener(printEvent);
            } else {
                $window.on('beforeprint', beforePrint);
                $window.on('afterprint', afterPrint);
            }
            ////// end printing stuff
            if (locked) { //internal scrolling
                if (useAbsolutePositioning) {
                    $scrollContainer.on(eventName('scroll'), containerScrollEvent);
                } else {
                    $scrollContainer.on(eventName('scroll'), containerScrollEvent);
                    $window.on(eventName('scroll'), windowScrollEvent);
                }
            } else { //window scrolling
                $responsiveContainer.on(eventName('scroll'), containerScrollEvent);
                $window.on(eventName('scroll'), windowScrollEvent);
            }
            $window.on(eventName('load'), reflowEvent); //for tables with images
            windowResize(eventName('resize'), windowResizeEvent);
            $table.on('reflow', reflowEvent);
            if (opts.support && opts.support.datatables && isDatatable($table)) {
                $table
                        .on('filter', reflowEvent)
                        .on('sort', reflowEvent)
                        .on('page', reflowEvent);
            }
            if (opts.support && opts.support.bootstrap) {
                $window.on(eventName('shown.bs.tab'), reflowEvent); // people cant seem to figure out how to use this plugin with bs3 tabs... so this :P
            }
            if (opts.support && opts.support.jqueryUI) {
                $window.on(eventName('tabsactivate'), reflowEvent); // same thing for jqueryui
            }
            if (canObserveMutations) {
                var mutationElement = null;
                if (util.isFunction(opts.autoReflow)) {
                    mutationElement = opts.autoReflow($table, $scrollContainer)
                }
                if (!mutationElement) {
                    mutationElement = $scrollContainer.length ? $scrollContainer[0] : $table[0]
                }
                mObs = new MutationObserver(function (e) {
                    var wasTableRelated = function (nodes) {
                        return nodes && nodes[0] && (nodes[0].nodeName == "THEAD" || nodes[0].nodeName == "TD" || nodes[0].nodeName == "TH");
                    };
                    for (var i = 0; i < e.length; i++) {
                        if (!(wasTableRelated(e[i].addedNodes) || wasTableRelated(e[i].removedNodes))) {
                            reflowEvent();
                            break;
                        }
                    }
                });
                mObs.observe(mutationElement, {
                    childList: true,
                    subtree: true
                });
            }
            //attach some useful functions to the table.
            $table.data('floatThead-attached', {
                destroy: function () {
                    var ns = '.fth-' + floatTheadId;
                    unfloat();
                    $table.css(layoutAuto);
                    $tableColGroup.remove();
                    createElements && $fthGrp.remove();
                    if ($newHeader.parent().length) { //only if it's in the DOM
                        $newHeader.replaceWith($header);
                    }
                    triggerFloatEvent(false);
                    if (canObserveMutations) {
                        mObs.disconnect();
                        mObs = null;
                    }
                    $table.off('reflow reflowed');
                    $scrollContainer.off(ns);
                    $responsiveContainer.off(ns);
                    if (wrappedContainer) {
                        if ($scrollContainer.length) {
                            $scrollContainer.unwrap();
                        } else {
                            $table.unwrap();
                        }
                    }
                    if (locked) {
                        $scrollContainer.data('floatThead-containerWrap', false);
                    } else {
                        $table.data('floatThead-containerWrap', false);
                    }
                    $table.css('minWidth', originalTableMinWidth);
                    $floatContainer.remove();
                    $table.data('floatThead-attached', false);
                    $window.off(ns);
                    if (matchMediaPrint) {
                        matchMediaPrint.removeListener(printEvent);
                    }
                    beforePrint = afterPrint = function () {
                    };
                    return function reinit() {
                        return $table.floatThead(opts);
                    }
                },
                reflow: function () {
                    reflowEvent();
                },
                setHeaderHeight: function () {
                    setHeaderHeight();
                },
                getFloatContainer: function () {
                    return $floatContainer;
                },
                getRowGroups: function () {
                    if (headerFloated) {
                        return $floatContainer.find('>table>thead').add($table.children("tbody,tfoot"));
                    } else {
                        return $table.children("thead,tbody,tfoot");
                    }
                }
            });
        });
        return this;
    };
})((function () {
    var $ = window.jQuery;
    if (typeof module !== 'undefined' && module.exports && !$) {
        // only use cjs if they dont have a jquery for me to use, and we have commonjs
        $ = require('jquery');
    }
    return $;
})());
$(document).ready(function () {
    getDeviceType();
    initDataSetAndMultipleVideo();
    //initializeStickyHeader();
    initTooltip();
    headTagChildRefactor();
    getGlossaryData();
    initImgPopup();

    $('iframe').each(function () {
        if ($(this).hasClass('assessment') || $(this).hasClass('brightCoveVideo') || $(this).hasClass('gadget') || $(this).hasClass('ext-gadget')) {
            $(this).attr('allowfullscreen', "true").attr('mozallowfullscreen', "true").attr('webkitallowfullscreen', "true");
        }
    });

    /*setTimeout(function () {
     $('iframe').each(function () {
     var iframe = document.getElementById($(this).attr('id'));
     iframe.src = iframe.src;
     });
     }, 1000);*/
});