var lastPos;
var convertFrameSrc = 1;
$(document).ready(function () {
    setTimeout(function () {
        if (convertFrameSrc < 1) {
            $('iframe, img').each(function () {
                var frame = $(this),
                        vidSource = $(frame).attr('src');
                $(frame).attr('data-src', vidSource);
                $(frame).removeAttr('src');
            });
            convertFrameSrc++;
            lazyLoad();
        }
    }, 500);

    /*********************** BS-2218 ***************************/
    var doc_type = document.contentType.toLowerCase();
    if (doc_type.indexOf('xhtml') > 0) {
        data_arr = JSON.parse(localStorage.getItem('user_data'));
        if (!data_arr) {
            data_arr = [];
        }
        var this_locationName = location.href;
        var this_fileName = (this_locationName.slice(0, this_locationName.indexOf(".xhtml") + (".xhtml").length)).toString();
        data_arr.forEach(function (arrayItem) {
            if (this_fileName === arrayItem.file) {
                (arrayItem.storage_detail).forEach(function (dataVal) {
                    jQuery("#" + dataVal.element_id).val(dataVal.value);
                });
            }
        });
        jQuery('.fill-in').off().on('keyup', function () {
            var this_val = jQuery(this).val();
            var this_id = jQuery(this).attr('id');
            var data_arr = [];
            var updated = false;
            var flag = false;
            var obj = {
                'element_id': this_id,
                'value': this_val
            }
            var locationName = location.href;
            var fileName = (locationName.slice(0, locationName.indexOf(".xhtml") + (".xhtml").length)).toString();
            data_arr = JSON.parse(localStorage.getItem('user_data'));
            if (data_arr != null || data_arr) {
                data_arr.forEach(function (arrayItem) {
                    if (arrayItem.file === fileName) {
                        updated = false;
                        (arrayItem.storage_detail).forEach(function (item) {
                            if (item.element_id == this_id) {
                                item.value = this_val;
                                updated = true;
                            }
                        });

                        if (!updated) {
                            arrayItem.storage_detail.push(obj);
                        }
                        flag = true;
                    }
                });
                if (!flag) {
                    var newData = {};
                    newData.file = fileName;
                    newData.storage_detail = [];
                    newData.storage_detail.push(obj);
                    data_arr.push(newData);
                }

            } else {
                data_arr = [];
                var newData = {};
                newData.file = fileName;
                newData.storage_detail = [];
                newData.storage_detail.push(obj);
                data_arr.push(newData);
            }

            localStorage.setItem('user_data', JSON.stringify(data_arr));

        });
    }
    /***************************************************************/
});

// LAZY LOAD FUNCTION
function lazyLoad() {
    $('iframe, img').each(function () {
        var frame = $(this),
                vidSource = $(frame).attr('data-src'),
                distance = $(frame).offset().top - $(window).scrollTop(),
                distTopBot = window.innerHeight - distance,
                distBotTop = distance + $(frame).height();

        if (distTopBot >= 0 && distBotTop >= 0) { // if frame is partly in view
            $(frame).attr('src', vidSource);
            $(frame).removeAttr('data-src');
        }
    });
}

jQuery(window).on("message", function (data) {

    //BS-3582 @ SUMAN DAS
    if (data.originalEvent.data.hasOwnProperty('type') && data.originalEvent.data.type == "assesment") {
        var linkPage = data.originalEvent.data.data.url;
        var exact_url = window.location.href;
        if (exact_url.indexOf('tmp_content') != -1 && exact_url.indexOf('xhtml') != -1) {
            //linkPage = exact_url.replace("tmp_content/1", "xhtml");
            alert("Page/Pattern Links do not function in Build or Test mode.")
            return false;
        } else {
            window.location = linkPage;
            parent.postMessage(linkPage, "*");
        }

    }
    //End of BS-3582 @ SUMAN DAS

    jQuery(".savi-legacy-wrapper").off().on('click', function () {
        var iframeElement = $(this);
        var obj = {
            "name": "close-modal",
            "id": $(this).find('iframe').attr('id')
        }
        window.postMessage(obj, "*");
    });
    if (data.originalEvent.data.name) {
        if (data.originalEvent.data.name == 'custom-image-pop') {
            var frame_id = data.originalEvent.data.frame_id;
            var frameData = data.originalEvent.data.widget_data.widgetData.options;
            var activeSlide = data.originalEvent.data.active_slide;
            var slides = [];
            for (var i = 0; i < frameData.length; i++) {
                var imgsrc = frameData[i].mediaDetails.mediaPath;
                if (frameData[i].mediaDetails.mediaPath.indexOf('../') != -1) {
                    imgsrc = frameData[i].mediaDetails.mediaPath.substring(9);
                }
                var text = decodeURI('<b>' + frameData[i].title + "</b><br />" + frameData[i].description).replace(/&nbsp;/g, " ");
                var slide = {src: (imgsrc), w: frameData[i].mediaDetails.w, h: frameData[i].mediaDetails.h, title: text};
                // var slide = { src: (frameData[i].mediaDetails.mediaPath).substring(9), w: 50, h: 50, title: frameData[i].title };
                slides.push(slide);

            }
            var pswpElement = document.querySelectorAll('.pswp')[0];
            // define options (if needed)
            var options = {
                showAnimationDuration: 10,
                hideAnimationDuration: 0
            };
            // Initializes and opens PhotoSwipe
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, slides, options);
            gallery.init();
            setTimeout(function () {
                gallery.goTo(activeSlide - 1);
            }, 50);
        }
        if (data.originalEvent.data.name == "open-modal") {
            $("#" + data.originalEvent.data.id).parent().css({"width": "100%", "height": "100%", "position": "fixed", "top": "-25px", "left": "0px", "background-color": "rgba(0, 0, 0, 0.2)", "text-align": "center", "display": "-webkit-box", "display": "-moz-box", "display": "-ms-flexbox", "display": "-webkit-flex", "display": "flex", "-webkit-align-items": "center", "-ms-flex-align": "center", "align-items": "center"});
            $("#" + data.originalEvent.data.id).parent().addClass('savi-legacy-wrapper');
            $("#" + data.originalEvent.data.id).css({"border": "0px", "overflow": "hidden", "min-height": "90%", "max-height": "90%", "min-width": "90%", "max-width": "90%", "margin": "auto"});
        }

        if (data.originalEvent.data.name == "close-modal") {
            $("#" + data.originalEvent.data.id).unwrap();
            $("#" + data.originalEvent.data.id).wrap('<section></section>');
            setTimeout(function () {
                $($("#" + data.originalEvent.data.id)[0].contentWindow.document.body).find('.savi-lgy-launch').focus()
            }, 1000);
        }
    }

    if (data.originalEvent.data.height) {
        if (data.originalEvent.data.type == 'adjustIframe') {
            lastPos = $(window).scrollTop();
        }

        //BS-3367 - BrightCove Video Responsive issue.
        if ($("#" + data.originalEvent.data.id).parents('.embed-responsive').length) {
            $("#" + data.originalEvent.data.id).parents('.embed-responsive').css({'height': data.originalEvent.data.height});
        }

        $("#" + data.originalEvent.data.id).css({'height': data.originalEvent.data.height, overflow: data.originalEvent.data.overflow, 'display': 'block'});
        $("#" + data.originalEvent.data.id).attr("scrolling", "no");
        $("#" + data.originalEvent.data.id).addClass("iframe_safari");
        //For slide show height issue
        $("#" + data.originalEvent.data.frame_id).css({'height': data.originalEvent.data.height, overflow: data.originalEvent.data.overflow});

        var scrollTo = 0;
        if (typeof $("#" + data.originalEvent.data.id).offset() != 'undefined') {
            scrollTo = $("#" + data.originalEvent.data.id).offset().top;
        }
        if (data.originalEvent.data.scroll) {
            $(window).scrollTop(scrollTo);
        }
        if (data.originalEvent.data.type == 'close') {
            $(window).scrollTop(lastPos);
        }
        return true;
    }
    if (data.originalEvent.data.task == "getchEntityType") {
        var entityType = $("#" + data.originalEvent.data.iframeId).attr("data-iframeentitytype");
        var obj = {
            "entityType": entityType,
            "messagetype": "entityType"
        }
        jQuery("#" + data.originalEvent.data.iframeId)[0].contentWindow.postMessage(obj, "*");
    }

    /********************* BS-3115 *******************************/
    if (data.originalEvent.data.profile_css) {
        jQuery(jQuery('link')[0]).attr('href', data.originalEvent.data.profile_css);
    }
    /********************* BS-3115 *******************************/

    if (data.originalEvent.data.profile_type) {
        var data_profile_type = data.originalEvent.data.profile_type;
        var dataElement = jQuery("[data-profile]");

        //Unwrap al fieldset of fallback image
        var prevImg = jQuery('.prev_fallback_img');
        if (prevImg.parent().is("div")) {
            //jQuery('.prev_fallback_img').find('.prof_caption').remove();
            prevImg.unwrap();
        }
        jQuery('.prof_caption').remove();
        jQuery(dataElement).removeClass('prevCombInteractives');
        jQuery(dataElement).removeClass('prevCombFallback');

        //Savi Video CDN
        jQuery(dataElement).removeClass('savi_video_cdn_iframe');
        jQuery(dataElement).parent().removeClass('savi_video_cdn_section');

        //Figure caption
        jQuery(dataElement).removeClass('figure_combined');

        //Dataset multivideo caption
        jQuery(dataElement).parent().removeClass('dateset_combined');

        jQuery(dataElement).show();
        jQuery(".prev_fallback_img").hide();

        // For read and practice
        jQuery(".hide4read-practice").show();
        if (data_profile_type == 'read_and_practice') {
            jQuery(".hide4read-practice").hide();
            data_profile_type = 'flat';
        }

        //BS-3067
        if (data_profile_type == 'combined') {
            jQuery(".prev_fallback_img").show();
        } else {
            dataElement = jQuery("[data-profile]").not("[data-profile='" + data_profile_type + "']");
            //Only for figure tags
            jQuery(dataElement).each(function () {
                var iframeElement = $(this);
                var data_profile = iframeElement.attr("data-profile")
                if (jQuery(iframeElement).hasClass('figure') === true && data_profile != data_profile_type) {
                    jQuery(iframeElement).hide();
                }
            });

            if (data_profile_type == 'flat') {
                jQuery(dataElement).hide();
            } else {
                dataElement = '';
            }
            if (data_profile_type == 'flat' || data_profile_type == 'read_and_practice') {
                /****************** BS-3375 *******************/
                jQuery(dataElement).each(function () {
                    var iframeElement = $(this);
                    if (jQuery(iframeElement).prop('tagName') == 'img' && (jQuery(iframeElement).hasClass('dataset') === true || jQuery(iframeElement).hasClass('multiplevideo') === true)) {
                        jQuery(iframeElement).show();
                    }
                });
                /****************** BS-3375 *******************/
            }
        }


        /* To dont delete
         * else if (data_profile_type == 'flat') {
         dataElement = jQuery("[data-profile]").not("[data-profile='" + data_profile_type + "']");
         jQuery(dataElement).hide();
         //jQuery("[data-profile]").not("[data-profile='" + data_profile_type + "']").hide(); // working code
         } else {
         dataElement = '';
         //dataElement = jQuery("[data-profile]").not("[data-profile='" + data_profile_type + "'],[data-profile='']");
         }*/


        //Css for combined mode
        var flat_css = '<p class="prof_caption" style="margin-bottom:0;margin-top:25px;"><span style="background: green;padding: 5px 12px;color: #fff;font-weight: bold; line-height:1.5; border-radius: 7px 7px 0px 0px;">Flat</span></p>';
        var enhanced_css = '<p class="prof_caption" style="margin-bottom:0;margin-top:25px;"><span style="background: blue;padding: 5px 12px;color: #fff;font-weight: bold; border-radius: 7px 7px 0px 0px;">Enhanced</span></p>';

        //generate fallback image for data-profile
        // For combined mode
        jQuery(dataElement).each(function () {
            var iframeElement = $(this), id = $(this).attr("id"), iframeWindow = iframeElement[0].contentWindow, dataProfImg = iframeElement.attr("data-profiling-img"), data_profile = iframeElement.attr("data-profile"), data_profile_img_size = iframeElement.attr("data-fallbck-img-size");
            var elemntImgID = id + '_' + data_profile;
            var dataprofImgFlag = 0;
            var combined_css = '';
            var combinedElemCss = '';
            // Create Profile Image
            if (typeof dataProfImg != "undefined" && dataProfImg != '') {
                if (jQuery('p#' + elemntImgID).length < 1) {
                    jQuery('<p id="' + elemntImgID + '" class="prev_fallback_img" style="width:100%"><img class="' + data_profile_img_size + '" alt="image"  src="' + dataProfImg + '"/></p>').insertBefore(iframeElement);
                }
                jQuery('p#' + elemntImgID).show();
                dataprofImgFlag = 1;
            }

            if (data_profile_type == 'combined') {
                // For combined css wrapper
                var dataProfImgId = 'p#' + elemntImgID;
                if (dataprofImgFlag) {
                    //var preFallDiv = jQuery(dataProfImgId).parent('.prevCombFallback');
                    jQuery(dataProfImgId).wrap('<div class="prevCombFallback"></div>');
                    var parent_fallback = jQuery(dataProfImgId).parent('.prevCombFallback');
                    jQuery(flat_css).insertBefore(jQuery(parent_fallback));
                    jQuery(enhanced_css).insertBefore(jQuery(this));
                    jQuery(this).addClass('prevCombInteractives');
                } else {
                    if (data_profile == 'flat') {
                        combined_css = flat_css;
                        combinedElemCss = 'prevCombFallback';
                    } else if (data_profile == 'enhanced') {
                        combined_css = enhanced_css;
                        combinedElemCss = 'prevCombInteractives';
                    }
                    jQuery(combined_css).insertBefore(jQuery(this));
                    jQuery(this).addClass(combinedElemCss);
                }

                var iframeElement = $(this);
                //Savi Video CDN
                if (jQuery(iframeElement).hasClass('brightCoveVideo') === true && jQuery(iframeElement.parent()).hasClass('embed-responsive')) {
                    jQuery(iframeElement).addClass('savi_video_cdn_iframe');
                    jQuery(iframeElement).parent().addClass('savi_video_cdn_section');
                }
                if (jQuery(iframeElement).hasClass('figure') === true) {
                    jQuery(iframeElement).addClass('figure_combined');
                }
                if (jQuery(iframeElement).parent().hasClass('multiplevideo') === true || jQuery(iframeElement).parent().hasClass('dataset') === true) {
                    jQuery(iframeElement).parent().addClass('dateset_combined');
                }
            }
        });

        /****************** BS-3375 *******************/
        $('img.dataset').each(function () {
            $(this).off().on('click keyup', function (e) {
                if (e.keyCode === 13 || e.type === 'click') {
                    if (data_profile_type == 'flat') {
                        e.stopPropagation();
                    } else {
                        index = $(this).attr('data-dataset-id');
                        dataPath = $(this).attr('data-path');
                        loadHtmlForDataset(index, dataPath);
                    }
                }
            });
        });
        $('img.multiplevideo').each(function () {
            $(this).off().on('click keyup', function (e) {
                if (e.keyCode === 13 || e.type === 'click') {
                    if (data_profile_type == 'flat' || data_profile_type == 'read_and_practice') {
                        e.stopPropagation();
                    } else {
                        index = $(this).attr('data-multiplevideo-id');
                        dataPath = $(this).attr('data-path');
                        loadHtmlForMultipleVdo(index, dataPath);
                    }
                }
            });
        });
        /****************** BS-3375 *******************/
    }
    jQuery(".assessment").each(function () {
        var iframeElement = $(this), id = $(this).attr("id"), iframeWindow = iframeElement[0].contentWindow, dataPath = iframeElement.attr("data-path");
        var id = iframeElement.attr("id");
        if (typeof dataPath != "undefined" && typeof iframeWindow != "undefined") {
            iframeWindow.postMessage({data_path: dataPath, id: id}, "*");
        }
    });
    /*jQuery(".savi_app").on("load", function () {
     $(this).css({"border": "0px", "overflow": "hidden", "min-width": "90%", "max-width": "90%", "margin": "auto"});
     if ($(this).hasClass('savi_video_converted')) {
     $(this).css({"min-height": "60%", "max-height": "60%"});
     } else {
     /*
     * BrightCoveAudio was adding extra height under its area in Test Mode
     /
     //$(this).css({"min-height": "90%", "max-height": "90%"});
     }
     });*/

    /*     *
     * @type typeCode for lazy loading on scroll
     */
    //var throttled = $.throttle(100, lazyLoad);
    //$(window).scroll(throttled);
})
        ,
        !function () {
            function t(t) {

                h = g.getInstance();
                try {
                    o()
                } catch (r) {
                }

                var d = t.data;
                if (t.data === undefined) {
                    return false;
                }
                if (void 0 == d.type)
                    return!1;
                var u = d.type.toUpperCase();
                if ("GET" === u && h.find("iframe.exwidget").length >= s)                     //s++;
                    s = h.find("iframe.exwidget").length;
                else if ("PUT" === u)
                    try {

                        var l = htmlEditor.thisFrame.attr("data-path"), p = htmlEditor.thisFrame.attr("id"), w = {type: "GET", frame_id: p, data_path: l, images: c};
                        n("POST", "widFrame", w)
                    } catch (r) {
                    }
                else
                    "CLOSE" === u ? e() : "SIZE" === u && (f = [], f.push({height: d.height, width: d.width}), i(d.frame_id, 0));
                switch (u) {
                    case"GET":
                        var v = d.height, y = d.width;
                        f.push({height: v, width: y}), h.find("iframe.exwidget").length === s && m(f);
                        break;
                    case"POST":
                        a(htmlEditor.thisFrame.attr("id"), d.dataset, htmlEditor.thisFrame.attr("widget-id"))
                }
            }
            function e() {
                jQuery("#exwidgetModal").find("button.close").trigger("click")
            }
            function a(t, a, i) {
                var o = r(t, a, i);
                jQuery(".cke_wysiwyg_frame").contents().find("#" + t).attr("data-path", o);
                var d = {frame_id: t, data_path: o};
                n("POST", "widFrame", d), e()
            }
            function r(t, e, a) {
                var r = "", i = e, n = {project_id: project_id, project_type_id: project_type_id, ex_widgets: i, repo_id: t, object_id: node_id, widget_id: a};
                return jQuery.ajax({url: htmlEditor.PXEmappedAPI.saveWidgetDataAPI, async: !1, method: "POST", data: n, xhrFields: {withCredentials: !0}, crossDomain: !0, success: function (t) {
                        r = t.json_file_path
                    }, error: function () {
                        alert("Error occured..Retry")
                    }}), r
            }
            function i(t, e) {
                var a = t, r = h.find("#" + a)[0], i = Number(f[e].height) + 40;
                try {
                    r.height = l > i ? i : l
                } catch (n) {
                }
            }
            function n(t, e, a) {
                if ("POST" === t) {
                    var r = e, i = jQuery("body").find("#" + r)[0];
                    i.contentWindow.postMessage(a, "*")
                } else if ("GET" === t) {
                    var r = e, i = h.find("#" + r)[0];
                    i.contentWindow.postMessage(a, "*")
                }
            }
            function o() {
                var t = "", e = [];
                jQuery.ajax({url: htmlEditor.PXEmappedAPI.getLocalImagesAPI, async: !0, type: "GET", xhrFields: {withCredentials: !0}, crossDomain: !0, success: function (a) {
                        if (t = a.data, null !== t)
                            for (var r = 0; r < t.length; r++)
                                e.push({name: t[r].original_name, path: t[r].asset_location});
                        c = e
                    }, error: function () {
                        swal({title: "Error!", text: "Some error occured while fetching the assets."})
                    }})
            }
            function d(t) {
                var e = [];
                return h.find("iframe.exwidget").each(function () {
                    var a = jQuery(this).attr(t);
                    e.push(a)
                }), e
            }
            var s = 0, h = "", c = [], u = !0, f = [], g = function () {
                return{getInstance: function () {
                        var t = jQuery("#testCont").length;
                        return t ? jQuery("#testCont").contents() : jQuery("body")
                    }, getAbsolutePath: function (t) {
                        var e = document.createElement("a");
                        if (e.protocol === undefined) {
                            return t;
                        }
                        return e.href = t, e.protocol + "//" + e.host + e.pathname + e.search + e.hash
                    }}
            }();
            window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent("onmessage", t);
            var m = function () {
                var t = d("id"), e = d("data-path");
                if (u)
                    for (var a = 0; a < e.length; a++) {
                        var r = g.getAbsolutePath(e[a]);
                        e[a] = r
                    }
                for (var a = 0; a < t.length; a++) {
                    var i = {type: "GET", frame_id: t[a], data_path: e[a]};
                    n("GET", t[a], i)
                }
                s = 0
            }
        }();
var donotOpenLink = function () {
    alert("Link do not function in Build and Test mode.");
}

function setBrightcoveHeight() {
    var obj = event.target;
    var id = obj.id;
//    var height = obj.height;
    /*var parent = document.getElementById(id).parentNode;
     parent.removeAttribute('style');*/
//    if (height <= 150) {
//        height = height * 4;
//    }
    //parent.setAttribute('style', 'height:' + height + 'px; padding-bottom: 0');
    //parent.setAttribute('style', 'height:400px; padding-bottom: 0');
    //obj.setAttribute('style', 'height:350px;border:none;');
}

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a;
    $.throttle = a = function (e, f, j, i) {
        var h, d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }
        function g() {
            var o = this, m = +new Date() - d, n = arguments;
            function l() {
                d = +new Date();
                j.apply(o, n)
            }
            function k() {
                h = c
            }
            if (i && !h) {
                l()
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l()
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e)
                }
            }
        }
        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++
        }
        return g
    };
    $.debounce = function (d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
})(this);