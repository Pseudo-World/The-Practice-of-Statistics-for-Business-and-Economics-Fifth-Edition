(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var htmlStr = '<div id="myModal1" class="modal videoPopup" tabindex="-1" role="dialog"><div class="modal-content"><button tabindex="0" title="Close (Esc)" class="close"></button><div class="modal-body" ></div></div></div><div tabindex="0" id="dummyDiv"></div>';
var modal;

var initDataSetAndMultipleVideo = function initDataSetAndMultipleVideo(count) {
  $('body').append(htmlStr);
  modal = $('#myModal1');
  if (typeof count === 'undefined') {
    $('.multiplevideo').off().on('click', function () {
      loadHtmlForMultipleVideos($(".multiplevideo").index(this));
    });
  } else {
    $('.multiplevideo').off().on('click', function () {
      loadHtmlForMultipleVideos(count);
    });
  }
  $(".close").off().on('click', function () {
    hideModal();
  });
};
var loadHtmlForMultipleVideos = function loadHtmlForMultipleVideos(index) {
  //load modal for multiple video
  $('#myModal1 .modal-content').removeClass('contentResizer');
  $('#myModal1').removeClass('overFlowHidden');
  $('#myModal1 .modal-body').html('');
  $('#myModal1 .content').html('<strong>MultiVideo</strong>');
  showModal();
  var html, alertHtml;
  var video_count = 0;
  var allData = advJsonData.quiz;
  if (allData.length > 1) {
    if (typeof index === 'undefined') {
      index = 0;
    }
    if (allData[index].QuestionData.explanationVideoSet.collection.options.length > 1) {
      html = "<ul class='vidUl lm_col_left'>";
      for (var j = 0; j < allData[index].QuestionData.explanationVideoSet.collection.options.length; j++) {
        if (j == 0) {
          html += '<li><a href="javascript:void(0)" class="videoClass active" video_id="' + allData[index].QuestionData.explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[index].QuestionData.explanationVideoSet.collection.options[j].labelName + '</a></li>';
        } else {
          html += '<li><a href="javascript:void(0)" class="videoClass" video_id="' + allData[index].QuestionData.explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[index].QuestionData.explanationVideoSet.collection.options[j].labelName + '</a></li>';
        }
      }
      html += "</ul>";
    } else {
      for (var j = 0; j < allData[index].QuestionData.explanationVideoSet.collection.options.length; j++) {
        if (j == 0) {
          html = '<ul style="display:none"><li><a href="javascript:void(0)" class="videoClass active" video_id="' + allData[index].QuestionData.explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[index].QuestionData.explanationVideoSet.collection.options[j].labelName + '</a></li></ul>';
        }
      }
      video_count = 1;
    }
  } else {
    for (var i = 0; i < allData.length; i++) {
      if (allData[i].QuestionData.question_type.text !== 'multi-part') {
        if (typeof allData[i].QuestionData.explanationVideoSet !== 'undefined') {
          if (allData[i].QuestionData.explanationVideoSet.collection.options.length === 0) {
            alertHtml = "No video Records Found";
            $('#myModal1 .modal-body').append(alertHtml);
            return false;
          } else if (allData[i].QuestionData.explanationVideoSet.collection.options.length > 1) {
            html = "<ul class='vidUl lm_col_left'>";
            for (var j = 0; j < allData[i].QuestionData.explanationVideoSet.collection.options.length; j++) {
              if (j == 0) {
                html += '<li><a href="javascript:void(0)" class="videoClass active" video_id="' + allData[i].QuestionData.explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[i].QuestionData.explanationVideoSet.collection.options[j].labelName + '</a></li>';
              } else {
                html += '<li><a href="javascript:void(0)" class="videoClass" video_id="' + allData[i].QuestionData.explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[i].QuestionData.explanationVideoSet.collection.options[j].labelName + '</a></li>';
              }
            }
            html += "</ul>";
          } else {
            for (var j = 0; j < allData[i].QuestionData.explanationVideoSet.collection.options.length; j++) {
              if (j == 0) {
                html = '<ul style="display:none"><li><a href="javascript:void(0)" class="videoClass active" video_id="' + allData[i].QuestionData.explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[i].QuestionData.explanationVideoSet.collection.options[j].labelName + '</a></li></ul>';
              }
            }
            video_count = 1;
          }
        }
      } else {
        if (index >= 0) {
          if (allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options.length > 1) {
            html = "<ul class='vidUl lm_col_left'>";
            for (var j = 0; j < allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options.length; j++) {
              if (j == 0) {
                html += '<li><a href="javascript:void(0)" class="videoClass active" video_id="' + allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options[j].labelName + '</a></li>';
              } else {
                html += '<li><a href="javascript:void(0)" class="videoClass" video_id="' + allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options[j].labelName + '</a></li>';
              }
            }
            html += "</ul>";
          } else {
            for (var j = 0; j < allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options.length; j++) {
              if (j == 0) {
                html = '<ul style="display:none"><li><a href="javascript:void(0)" class="videoClass active" video_id="' + allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options[j].mediaDetails.mediaId + '">' + allData[i].QuestionData.subquestions[index].explanationVideoSet.collection.options[j].labelName + '</a></li></ul>';
              }
            }
            video_count = 1;
          }
        }
      }
    }
  }
  $('#myModal1 .modal-content').addClass("lm_multi_vd");
  $("#myModal1 .close").html("x");
  var htmlVideo;
  if (video_count) {
    htmlVideo = "<div class='col-md-12'><p id='video_label'></p><div id='bright_video'></div></div>";
  } else {
    htmlVideo = "<div class='lm_col_right'><p id='video_label'></p><div id='bright_video'></div></div>";
  }
  showModal();

  $('#myModal1 .modal-body').html('');
  $('#myModal1 .modal-body').append(html);
  $('#myModal1 .modal-body').append(htmlVideo);
  $('#myModal1 .modal-body').append('<span style="clear:both"></span>');
  $("#bright_video").append('<section class="embed-responsive embed-responsive-16by9"><iframe  class="multipleBrightCoveVideo embed-responsive-item" id="wyjx83caac2b05d04bfab509428aefd5"  name="framewyjx83caac2b05d04bfab509428aefd5" src="https://players.brightcove.net/1500315202001/B1AhVYg4l_default/index.html?videoId=123"></iframe></section>');
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), button:not([disabled]), multipleBrightCoveVideo, object, embed, [tabindex="0"], [contentecitable]';
  var focusableElements = document.querySelectorAll(focusableElementsString);
  var focusableElements = Array.prototype.slice.call(focusableElements);
  var firstTabStop = focusableElements[0];
  var lastTabStop = $('#dummyDiv')[0];
  var bright_CoveSrc = $(".multipleBrightCoveVideo").attr('src').replace($(".multipleBrightCoveVideo").attr('src').split('=')[1], $('.videoClass').eq(0).attr('video_id'));
  //$(".multipleBrightCoveVideo").attr('src', bright_CoveSrc).attr('allowfullscreen', "true").attr('mozallowfullscreen', "true").attr('webkitallowfullscreen', "true");
  $(".multipleBrightCoveVideo").attr('data-src', bright_CoveSrc).attr('allowfullscreen', "true").attr('mozallowfullscreen', "true").attr('webkitallowfullscreen', "true");
  setTimeout(function(){
	var bcore = $(".multipleBrightCoveVideo").attr('data-src');
	 $(".multipleBrightCoveVideo").attr('src',bcore);
	},1500);
  $("#video_label").html($('.videoClass').eq(0).html());
  //Adjust Modal Height incase of single Video
  //  if ($('#myModal1 .modal-content').outerHeight() > $('.parentContainer').height()) {
  //    $('#myModal1 .modal-content').css({
  //      'height': '82%'
  //    });
  //  }
  //  $('.multipleBrightCoveVideo').height($('#myModal1 .modal-body').height());
  $('.videoClass').on('click', function () {
    $('.videoClass').removeClass('active');
    $(this).addClass('active');
    var bright_Cove = $('.multipleBrightCoveVideo').attr('src').replace($('.multipleBrightCoveVideo').attr('src').split('=')[1], $(this).attr('video_id'));
    $('.multipleBrightCoveVideo').attr('src', bright_Cove);

    $("#video_label").html($(this).html());
  });

  $('#myModal1 .close').on('click', function () {
    setTimeout(function () {
      resizeIframeData('', 'close');
    }, 300);
  });
};

var showModal = function showModal() {
  modal.show();
  $('#myModal1 .close').focus();
  $('#myModal1 .modal-body').html('');
  setTimeout(function () {
    resizeIframeData('', 'resized');
  }, 300);
  $('body').css({
    'overflow': 'auto'
  });
};

var hideModal = function hideModal() {
  $('#myModal1 .modal-content').removeClass("lm_multi_vd");
  $('#myModal1 .modal-body').html('');
  $('#myModal1 .modal-content').removeAttr('style');
  modal.hide();
  $('body').css({
    'overflow': 'auto'
  });
};

var resizeIframeData = function resizeIframeData(param, adjustIframe) {
  // resize iFrame according to content size
  var needScroll, height;
  if (adjustIframe === 'close') {
    height = $('.parentContainer').height();
  } else {
    if ($('#myModal1 .modal-content').outerHeight() > $("body").height()) {
      height = $('#myModal1 .modal-content').outerHeight() + 50;
    }
  }
  if (adjustIframe == 'close' || adjustIframe == 'resized') {
    window.parent.postMessage({ "height": height, "overflow": 'hidden', "id": window.iframeId, "scroll": needScroll, "type": adjustIframe }, "*");
  }
};

var adjustModalHeight = function adjustModalHeight() {
  if ($('#myModal1 .modal-body').height() > $('body').height()) {
    $('#myModal1 .modal-content').css({
      'height': $('body').height() - 50
    });
  } else {
    $('#myModal1 .modal-content').removeAttr('style');
  }
  return true;
};

$(document).ready(function () {
  setTimeout(function () {
    initDataSetAndMultipleVideo();
  }, 1000);
});

var count = 0;
$('#next').off().on('click', function () {
  count++;
  setTimeout(function () {
    initDataSetAndMultipleVideo(count);
  }, 1000);
});
$('#prev').off().on('click', function () {
  count--;
  setTimeout(function () {
    initDataSetAndMultipleVideo(count);
  }, 1000);
});

},{}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _assessmentsAssessment = require("./assessments/assessment");

var _assessmentsAssessment2 = _interopRequireDefault(_assessmentsAssessment);

var _dataActivity_data_factory = require("./data/activity_data_factory");

var _dataActivity_data_factory2 = _interopRequireDefault(_dataActivity_data_factory);

var _btn_setting = require("./btn_setting");

var _btn_setting2 = _interopRequireDefault(_btn_setting);

window.iframeId;
$(window).on("message", function (data) {
    // method recieves data from parent i.e frame

    if (!data.originalEvent.data.data_path) {
        return;
    }
    injectScript(data.originalEvent.data.data_path);
    window.iframeId = data.originalEvent.data.id;
});

function initializeAssessment() {
    // app bootstraps from here
    dataValidator();
    var allQuestions = _dataActivity_data_factory2["default"].getActivityDataFromJSON(advJsonData.quiz);

    for (var i = 0; i < allQuestions.length; i++) {
        allQuestions[i].questionTotal = allQuestions.length;
    }

    var assessmentController = new _assessmentsAssessment2["default"]();
    assessmentController.init(allQuestions);
    assessmentController.getInitialQuestion();
}

function injectScript(src) {
    //method for injecting the data script into head
    if ($("script[src='" + src + "']").length === 0) {
        var dataScript = document.createElement('script');
        dataScript.type = 'text/javascript';
        dataScript.src = src;
        document.getElementsByTagName('head')[0].appendChild(dataScript);
        dataScript.onload = initializeAssessment;
        dataScript.error = function (e) {
            throw e;
        };
    }
}

function dataValidator() {
    // this method scans questions
    switch (advJsonData.quiz.length) {
        case 0:
            $("#noQuestionAlert").show();
            $('footer').hide();
            return false;
            break;
        case 1:
            _btn_setting2["default"].hideNavigation();
            break;
        default:
            _btn_setting2["default"].loadFooterPanel();
    }
}
$(document).ready(function () {
    //method posts data  to top i.e outer parent
    top.postMessage("getDefaultData", "*");
    parent.postMessage("getDefaultData", "*");
});

},{"./assessments/assessment":3,"./btn_setting":7,"./data/activity_data_factory":9}],3:[function(require,module,exports){
/**
 * Created by debayan.das on 26-09-2016.
 */
/**
 *edited by tarique hussain
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _templatesTemplate_provider = require("../templates/template_provider");

var _templatesTemplate_provider2 = _interopRequireDefault(_templatesTemplate_provider);

var _checkAnswer = require("./checkAnswer");

var _checkAnswer2 = _interopRequireDefault(_checkAnswer);

var _navigation = require("./navigation");

var _navigation2 = _interopRequireDefault(_navigation);

var AssessmentController = (function () {
    function AssessmentController() {
        _classCallCheck(this, AssessmentController);

        //initialises variables
        this.currentTemplate = null;
        this.navigator = new _navigation2["default"](this);
        this.checkAnswer = new _checkAnswer2["default"](this);
        this.correctAnswers = null;
    }

    AssessmentController.prototype.init = function init(assessmentData) {
        // calls init function of different components with assessment data
        this.navigator.init(assessmentData);
        this.checkAnswer.init(assessmentData);
    };

    AssessmentController.prototype.loadQuestion = function loadQuestion(question, pageIndex) {
        var _this = this;

        // method loads question i.e previews them
        this.currentTemplate = _templatesTemplate_provider2["default"].get(question);
        $("#playground").html(this.currentTemplate.render(pageIndex + 1, 'assessment'));
        setTimeout(function () {
            _this.resizeIframe('resized');
        }, 1000);
        try {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, "playground"]);
        } catch (err) {}

        this.currentTemplate.bindEvents();
        this.bindEvents();
    };

    AssessmentController.prototype.resizeIframe = function resizeIframe(param, adjustIframe) {
        // resize iFrame according to content size

        var needScroll = undefined;
        if (param == "resized" || typeof param == 'undefined') {
            needScroll = false;
        } else {
            needScroll = true;
        }
        var height = undefined;
        height = $("body").height() + 10;
        if ($('.multi-part-main').length < 1) {
            if ($(this).hasClass('sentences') || $('.modalContext').css('display') == "block" || $('.fdbackmodal  ').css('display') == "block" || adjustIframe == 'adjustIframe') {
                //needScroll=false;
                if ($('.fdbackmodal ').css('display') == "block") {
                    height = $('.modal-content').height() + 150;
                } else {
                    height = 427;
                }
            }
        }
        //Uncomment  for Proper resize
        if ($('#myModal1 .modal-content').outerHeight() > $("body").height()) {
            height = $('#myModal1 .modal-content').outerHeight() + 50;
        }
        window.parent.postMessage({ "height": height, "overflow": 'hidden', "id": window.iframeId, "scroll": needScroll, "type": adjustIframe }, "*");
        return;
    };

    AssessmentController.prototype.getInitialQuestion = function getInitialQuestion() {
        // method gets the very first question
        this.navigator.next();
    };

    AssessmentController.prototype.getCorrectAnswer = function getCorrectAnswer() {
        //method used to get Correct Answer
        this.currentTemplate.checkCorrectAnswer();
    };

    AssessmentController.prototype.retry = function retry() {
        // method used to give user a preference to retry for particular question
        this.currentTemplate.retry();
    };

    AssessmentController.prototype.checkAndUpdateSelectedOptions = function checkAndUpdateSelectedOptions() {
        // checks and updates the selected options given by user
        if (this.currentTemplate) {
            this.currentTemplate.updateSelectedOptions();
        }
    };

    AssessmentController.prototype.bindEvents = function bindEvents() {
        var _this2 = this;

        var i = 0;
        $('img').each(function (key, item) {
            var img = new Image();
            img.onload = function () {
                i++;
                if (i == $('img').length) _this2.resizeIframe();
            };
            img.src = $(item).attr('src');
        });

        $('.feedBackIcon').on('click', function () {
            setTimeout(function () {
                _this2.resizeIframe('', 'adjustIframe');
                $('.fdbackmodal ').modal({ backdrop: 'static' });
            }, 300);
        });
        $('#next,#nextMobile,#prev,#prevMobile,#retry,#retryMobile,#retryMultipart,#retryMultipartMobile').on('click', function () {
            setTimeout(_this2.resizeIframe, 600);
        });
        $(window).on('resize', function () {
            _this2.resizeIframe('resized', 'resizing');
        });
        $('.sentences').on('click', function () {
            _this2.resizeIframe('', 'adjustIframe');
        });
        $('.modalContext .close').on('click', function () {
            setTimeout(function () {
                _this2.resizeIframe('', 'close');
            }, 300);
        });
        $('.modal-dialog .close').on('click', function () {
            setTimeout(function () {
                _this2.resizeIframe('', 'adjustIframe');
            }, 300);
        });
        $('.btn').on('click', function () {
            setTimeout(function () {
                _this2.resizeIframe('resized', '');
            }, 300);
        });
    };

    return AssessmentController;
})();

exports["default"] = AssessmentController;
;
module.exports = exports["default"];

},{"../templates/template_provider":24,"./checkAnswer":4,"./navigation":5}],4:[function(require,module,exports){
/** 
 *edited by tarique hussain
 */
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckAnswerController = (function () {
    function CheckAnswerController(assessmentControllerInstance) {
        _classCallCheck(this, CheckAnswerController);

        this.assessmentController = assessmentControllerInstance;
        this.allQuestions = null;
        this.selector = {
            body: $("body"),
            retry: $("#retry"),
            retryMobile: $("#retryMobile"),
            checkAnswer: $("#checkAnswer"),
            checkAnswerMobile: $("#checkAnswerMobile")
        };
    }

    CheckAnswerController.prototype.init = function init(assessmentData) {
        // this method initialises data
        this.allQuestions = assessmentData;
        this.bindEvents();
    };

    CheckAnswerController.prototype.bindEvents = function bindEvents() {
        // binds click event to check answer button
        this.selector.body.off("click", "#checkAnswer").on("click", "#checkAnswer", this.checkAnswer.bind(this));
        this.selector.body.off("click", "#checkAnswerMobile").on("click", "#checkAnswerMobile", this.checkAnswer.bind(this));
        this.selector.body.off("click", "#retry").on("click", "#retry", this.retry.bind(this));
        this.selector.body.off("click", "#retryMobile").on("click", "#retryMobile", this.retry.bind(this));
    };

    CheckAnswerController.prototype.checkAnswer = function checkAnswer() {
        //method used to get response
        // this.assessmentController.resizeIframe();
        this.selector.retry.show();
        this.selector.retryMobile.show();
        this.selector.checkAnswer.hide();
        this.selector.checkAnswerMobile.hide();
        $(".inputClass").addClass('pointerEvent');
        this.assessmentController.checkAndUpdateSelectedOptions();
        this.assessmentController.getCorrectAnswer();
    };

    CheckAnswerController.prototype.retry = function retry() {
        // method used to give user a preference to retry for particular question
        // this.assessmentController.resizeIframe();
        this.selector.retry.hide();
        this.selector.retryMobile.hide();
        this.selector.checkAnswer.show().attr('disabled', true);
        this.selector.checkAnswerMobile.show().attr('disabled', true);;
        $('#modalBodyPanel').html('');
        $(".inputClass").removeClass('pointerEvent');
        $('.alert').hide().removeClass('show');
        this.assessmentController.retry();
    };

    return CheckAnswerController;
})();

exports["default"] = CheckAnswerController;
;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _saveState = require('./saveState');

var _saveState2 = _interopRequireDefault(_saveState);

var NavigationController = (function () {
    function NavigationController(assessmentControllerInstance) {
        _classCallCheck(this, NavigationController);

        this.assessmentController = assessmentControllerInstance;
        this.allQuestions = null;
        this.pageIndex = -1;
        _saveState2["default"].setAssesmentCtrl(assessmentControllerInstance);
        this.selector = {
            body: $("body"),
            prev: $("#prev"),
            prevMobile: $("#prevMobile"),
            next: $("#next"),
            nextMobile: $("#nextMobile")
        };
    }

    NavigationController.prototype.init = function init(data) {
        // initialises data
        this.allQuestions = data;
        this.bindEvents();
    };

    NavigationController.prototype.bindEvents = function bindEvents() {
        //method binds events to next and previous button
        this.selector.body.off("click", "#next").on("click", "#next", this.next.bind(this));
        this.selector.body.off("click", "#nextMobile").on("click", "#nextMobile", this.next.bind(this));
        this.selector.body.off("click", "#prev").on("click", "#prev", this.prev.bind(this));
        this.selector.body.off("click", "#prevMobile").on("click", "#prevMobile", this.prev.bind(this));
        /*if((jQuery(window.parent.document.body).find("#"+window.iframeId).attr("data-iframeentitytype") == "3") && advJsonData.quiz.length == 1){
        	jQuery(this.selector.body).find('footer').addClass("noShadow");
        	jQuery(this.selector.body).find('.parentContainer').addClass("noShadow");
        	setTimeout(function(){
        	  jQuery(document.body).find('.instruction').addClass("noShadow");
        	}, 500);			
        }*/
        window.parent.postMessage({ iframeId: window.iframeId, task: "getchEntityType" }, "*");
        jQuery(window).on("message", function (data) {
            if (data.originalEvent.data.messagetype = "entityType") {
                var iframeentitytype = data.originalEvent.data.entityType;
				jQuery(document.body).find('footer').addClass("noShadow");
                if (iframeentitytype == "3" && advJsonData.quiz.length == 1) {                    
                    jQuery(document.body).find('.parentContainer').addClass("noShadow");
                    setTimeout(function () {
                        jQuery(document.body).find('.instruction').addClass("noShadow");

                        jQuery(document.body).find('.contentArea .question').addClass("noGapping");
                        jQuery(document.body).find('.contentArea .activity').addClass("noGapping");
                        //jQuery(document.body).find('.activity .submitBtns#toggler').addClass("noGapping");
                        jQuery(document.body).find('footer').hide();
                    }, 500);
                } else if (iframeentitytype == "2") {
                        jQuery(document.body).find('.parentContainer').css({"padding":"10px"});						
				}
            }
        });
    };

    NavigationController.prototype.next = function next() {
        // method used to navigate to next button
        var currentQuestion = this.allQuestions[++this.pageIndex];
        _saveState2["default"].performBasicNavigationCheck(currentQuestion, this.pageIndex, 'next');
        if (this.pageIndex > 0) {
            this.selector.prev.prop('disabled', false).attr('aria-disabled', false);
            this.selector.prevMobile.prop('disabled', false).attr('aria-disabled', 'false');
        }
        if (this.pageIndex === this.allQuestions.length - 1) {
            this.selector.next.prop('disabled', true).attr('aria-disabled', 'true');
            this.selector.nextMobile.prop('disabled', true).attr('aria-disabled', 'true');
        }
    };

    NavigationController.prototype.prev = function prev() {
        // method used  to navigate to prev button
        var currentQuestion = this.allQuestions[--this.pageIndex];
        _saveState2["default"].performBasicNavigationCheck(currentQuestion, this.pageIndex, 'prev');
        if (this.pageIndex === 0) {
            this.selector.prev.prop('disabled', true).attr('aria-disabled', 'true');
            this.selector.prevMobile.prop('disabled', true).attr('aria-disabled', 'true');
        }
        if (this.pageIndex < this.allQuestions.length) {
            this.selector.next.prop('disabled', false).attr('aria-disabled', 'false');
            this.selector.nextMobile.prop('disabled', false).attr('aria-disabled', 'false');
        }
    };

    return NavigationController;
})();

exports["default"] = NavigationController;
;
module.exports = exports["default"];

},{"./saveState":6}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SaveStateController = (function () {
    function SaveStateController() {
        _classCallCheck(this, SaveStateController);

        this.assessmentController = '';
        this.contextFlag = 0;
        this.selector = {
            retry: $("#retry"),
            retryMobile: $("#retryMobile"),
            checkAnswer: $("#checkAnswer"),
            checkAnswerMobile: $("#checkAnswerMobile"),
            submitMultipart: $('#submitMultipart'),
            submitMultipartMobile: $('#submitMultipartMobile')
        };
    }

    SaveStateController.prototype.setAssesmentCtrl = function setAssesmentCtrl(assessmentControllerInstance) {
        this.assessmentController = assessmentControllerInstance;
    };

    SaveStateController.prototype.performBasicNavigationCheck = function performBasicNavigationCheck(currentQuestion, pageIndex, navbtn) {
        this.assessmentController.loadQuestion(currentQuestion, pageIndex, navbtn);
        switch (currentQuestion.type) {
            case 'mcss':
            case 'mcms':
                this.saveStateForMcq(currentQuestion);
                break;
            case 'open-ended':
                this.hideCheckAnswerButton();
                break;
            case 'multi-part':
            case 'in-context':
                this.saveStateForMultipart(currentQuestion);
                break;
            case "fib":
            case "fib-dragdrop":
            case "fib-dropdown":
                this.saveStateForFib(currentQuestion);
                break;
        }
    };

    SaveStateController.prototype.saveStateForMcq = function saveStateForMcq(currentQuestion, parentQuestiontype) {
        var array = [];
        for (var key in currentQuestion.selectedOptions) {
            array.push(key);
        }
        if (currentQuestion.choices !== null && currentQuestion.choices !== undefined) {
            if (currentQuestion.selectedOptions[array[0]] === undefined) {
                return false;
            }
            if (currentQuestion.selectedOptions[array[0]].length === 0) {
                $(".inputClass").removeClass('pointerEvent');
                this.selector.retry.hide();
                this.selector.retryMobile.hide();
                if (this.isOptionChecked(currentQuestion)) {
                    this.selector.checkAnswer.show().attr('disabled', false);
                    this.selector.checkAnswerMobile.show().attr('disabled', false);
                } else {
                    this.selector.checkAnswer.show().attr('disabled', true);
                    this.selector.checkAnswerMobile.show().attr('disabled', true);
                }
            } else {
                this.buttonPropSetter();
                $(".inputClass").addClass('pointerEvent');
            }
            if (parentQuestiontype === 'multipart') {
                this.hideCheckAnswerButton();
            }
        }
    };

    SaveStateController.prototype.buttonPropSetter = function buttonPropSetter() {
        this.selector.retry.show();
        this.selector.retryMobile.show();
        this.selector.checkAnswer.hide();
        this.selector.checkAnswerMobile.hide();
    };

    SaveStateController.prototype.saveStateForFib = function saveStateForFib(currentQuestion) {
        if (currentQuestion.disabledFib === 'disabled') {
            if ($('.wronganswer').length > 0) {
                $('.alert-danger').attr('role', 'alert').show();
            } else {
                $('.alert-success').attr('role', 'alert').show();
            }
            this.buttonPropSetter();
        } else {
            this.selector.retry.hide();
            this.selector.retryMobile.hide();
            if ($(".dirty:visible").length) {
                this.selector.checkAnswer.show().attr('disabled', false);
                this.selector.checkAnswerMobile.show().attr('disabled', false);
            } else {
                this.selector.checkAnswer.show().attr('disabled', true);
                this.selector.checkAnswerMobile.show().attr('disabled', true);
            }
        }
    };

    SaveStateController.prototype.hideCheckAnswerButton = function hideCheckAnswerButton() {
        this.selector.checkAnswer.hide();
        this.selector.checkAnswerMobile.hide();
        this.selector.retry.hide();
        this.selector.retryMobile.hide();
    };

    SaveStateController.prototype.isOptionChecked = function isOptionChecked(currentQuestion) {
        if (currentQuestion.choices.length > 0) {
            for (var i = 0; i < currentQuestion.choices.length; i++) {
                if (currentQuestion.choices[i].pinanswer === 1) {
                    return true;
                }
            }
        }
    };

    SaveStateController.prototype.saveStateForMultipart = function saveStateForMultipart(currentQuestion) {
        this.hideCheckAnswerButton('multipart');
        if (currentQuestion.subQuestions.length === 0) {
            $("#submitMultipart").hide();
        }
        for (var i = 0; i < currentQuestion.subQuestions.length; i++) {
            switch (currentQuestion.subQuestions[i].type) {
                case 'mcss':
                case 'mcms':
                    this.saveStateForMcq(currentQuestion.subQuestions[i], 'multipart');
                    break;
            }
        }
    };

    return SaveStateController;
})();

exports["default"] = new SaveStateController();
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Setup = (function () {
    function Setup() {
        _classCallCheck(this, Setup);
    }

    Setup.prototype.loadFooterPanel = function loadFooterPanel() {
        $("#checkAnswer,#checkAnswerMobile,#prev,#prevMobile,#next,#nextMobile").show();
    };

    Setup.prototype.hideNavigation = function hideNavigation() {
        $("#checkAnswer,#checkAnswerMobile").show();
    };

    return Setup;
})();

exports["default"] = new Setup();
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
/**
 * Created by debayan.das on 09-11-2016.
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _data_serviceMcq_data_service = require("./data_service/mcq_data_service");

var _data_serviceMcq_data_service2 = _interopRequireDefault(_data_serviceMcq_data_service);

var _data_serviceOpen_ended_data_service = require("./data_service/open_ended_data_service");

var _data_serviceOpen_ended_data_service2 = _interopRequireDefault(_data_serviceOpen_ended_data_service);

var _data_serviceIn_context_data_service = require("./data_service/in_context_data_service");

var _data_serviceIn_context_data_service2 = _interopRequireDefault(_data_serviceIn_context_data_service);

var _data_serviceFib_data_service = require("./data_service/fib_data_service");

var _data_serviceFib_data_service2 = _interopRequireDefault(_data_serviceFib_data_service);

var ActivityData = (function () {
    function ActivityData() {
        _classCallCheck(this, ActivityData);

        this.questionText = null; // variable used to store the question
        this.questionNumber = ""; // variable used to store the question number
        this.choices = null; // variable used to store the choice
        this.instructionText = null; // variable used to store the instruction
        this.correctAnswers = null; // variable used to store the correct answer
        this.type = null; // variable used to store the type
        this.mediaUrl = ""; // variable used to store the media address
        this.mediaHeight = null; // variable used to store the media height
        this.mediaWidth = null; // variable used to store the media width
        this.assetType = null; // variable used to store the assesment type
        this.openEndedType = null; // variable used to store the open ended question type
        this.sampleAnswer = null; // variable used to store the sample answer
        this.feedback = null; // variable used to store the feedback
        this.selectedOptions = []; // variable used to store the selected option
        this.responsetext = ""; // variable used to store the response
        this.answer = null; // variable used to store the answer
        this.openEndedClass = ""; // variable used to store the openended classname
        this.sampleAnswerClass = ""; // variable used to store the sample answer classname
        this.answerClass = "hideAnswer"; // variable used to store the answer classname
        this.btnLabelOpenEnded = "Show Answer"; // variable used to store the value of openended button label
        this.textAreaAttr = "enabled";
        this.tabindex = '0';
        this.subQuestions = [];
        this.sentences = [];
        this.tempArrayForMultipart = [];
        this.newKey = null;
        this.disabledClass = 'disabled';
        this.multipartBtnClass = 'showAnswer';
        this.multipartFeedbackClsCorrect = 'hideAnswer';
        this.multipartFeedbackClsIncorrect = 'hideAnswer';
        this.multipartRetryClass = 'hideAnswer';
        this.globalMultipartfeedback = [];
        this.ariaAttr = 'false';
        this.fibQuestion = null;
        this.fibAnswers = [];
        this.fibValues = [];
        this.FibClasses = [];
        this.disabledFib = '';
        this.dirtyClass = [];
        this.draggables = [];
        this.dataVal = [];
        this.explanationVideoSet = [];
        this.questionStemStatus = 1;
        this.questionPrefix = '';
        this.questionSeperator = '';
        this.questionHint = '';
        this.questionTotal = 0;
        // variable used to store the classname of textarea
    }

    ActivityData.prototype.setChoices = function setChoices(choiceArray) {
        //method sets the choices of a question
        this.choices = choiceArray;
        this.correctAnswers = [];
        var currentChoice = undefined;
        for (var i = 0; i < choiceArray.length; i++) {
            currentChoice = choiceArray[i];
            if (currentChoice.assess) {
                this.correctAnswers.push(currentChoice);
            }
        }
    };

    ActivityData.prototype.setFibAnswers = function setFibAnswers(choiceArray) {
        //method sets the choices of a question
        this.choices = choiceArray;
        this.correctAnswers = [];
        var currentChoice = undefined;
        for (var i = 0; i < choiceArray.length; i++) {
            this.fibAnswers.push(choiceArray[i].textforeachblank);
        }
    };

    ActivityData.prototype.getFibAnswers = function getFibAnswers() {
        return this.fibAnswers;
    };

    ActivityData.prototype.setAttrs = function setAttrs(obj) {};

    ActivityData.prototype.setFibChoices = function setFibChoices(choiceArray) {
        //method sets the choices of a question
        this.createDrags(choiceArray);
        this.choices = choiceArray;
        this.setFibAnswers(choiceArray);
    };

    ActivityData.prototype.getFibChoices = function getFibChoices() {
        return this.choices;
    };

    ActivityData.prototype.renderQuestion = function renderQuestion(obj) {
        var template = obj.interaction;
        return this[template](obj);
    };

    ActivityData.prototype.textentry = function textentry(obj) {
        // for rendering text input
        var tempHtml = "<div id='spnCorrectIncorrect0' class='option fibclass  " + (this.getFibClasses(obj.blankid - 1) === undefined ? ' ' : this.getFibClasses(obj.blankid - 1)) + " '><input dataValue='" + this.getDataValue(obj.blankid - 1) + "' ansindex='" + obj.blankid + "' " + this.getDisableProp() + " class='form-control commonClass " + (this.getDirtyClass(obj.blankid - 1) === undefined ? ' ' : this.getDirtyClass(obj.blankid - 1)) + "' type='" + (obj.inputtype === 'numeric' ? 'number' : 'text') + "' inputType='" + obj.inputtype + "' maxlength='" + obj.characters + "' style='text-align:" + obj.inputalignment + "' value='" + (this.getFibValues(obj.blankid - 1) === undefined ? '' : this.getFibValues(obj.blankid - 1)) + "'><div class='sign'><div class='sr-only'></div><span class='fa'></span></div><div class='fdback " + (obj.correct_feedback === '' && obj.incorrect_feedback === '' ? 'hide' : '') + " ' data-toggle='modal'><div class='sr-only' aria-hidden='true' aria-label='Click to open feedback'>" + obj.correct_feedback + "|#@~" + obj.incorrect_feedback + "</div><span tabindex=0 class='fa fa-commenting feedBackIcon'></span></div></div>";
        return tempHtml;
    };

    ActivityData.prototype.escapeRegExp = function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    ActivityData.prototype.replaceAll = function replaceAll(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };

    ActivityData.prototype.replaceSpecialCharacters = function replaceSpecialCharacters(stringContent) {
        var replacedString;
        replacedString = this.replaceAll(stringContent, "'", "&#39;");
        replacedString = this.replaceAll(replacedString, '>', '&gt;');
        replacedString = this.replaceAll(replacedString, '<', '&lt;');
        return replacedString;
    };

    ActivityData.prototype.shuffleOptions = function shuffleOptions(arr) {
        return arr.sort(function () {
            return 0.5 - Math.random();
        });
    };

    ActivityData.prototype.inline = function inline(obj) {
        //for rendering dropDowns
        var dropDownOpts = this.shuffleOptions(obj.distractorforeachblank.concat(obj.textforeachblank)),
            optionLength = dropDownOpts.length,
            optionText = undefined;
        var dataValues = undefined;
        var fibValue = undefined;

        if (this.getDataValue(obj.blankid - 1)) {
            dataValues = this.replaceSpecialCharacters(this.getDataValue(obj.blankid - 1));
        }
        if (this.getFibValues(obj.blankid - 1)) {
            fibValue = this.replaceSpecialCharacters(this.getFibValues(obj.blankid - 1));
        }
        var tempHtml = "<div id='spnCorrectIncorrect0' class='option fibclass  " + (this.getFibClasses(obj.blankid - 1) === undefined ? ' ' : this.getFibClasses(obj.blankid - 1)) + " '><select  " + this.getDisableProp(obj.blankid - 1) + " value='" + fibValue + "' dataValue='" + dataValues + "' ansindex='" + obj.blankid + "' class='commonClass form-control " + (this.getDirtyClass(obj.blankid - 1) === undefined ? ' ' : this.getDirtyClass(obj.blankid - 1)) + "'><option value=''>--select--</option>";
        for (var i = 0; i < optionLength; i++) {
            if (dropDownOpts[i].text.length > 80) {
                optionText = dropDownOpts[i].text.substring(0, 60) + "...";
            } else {
                optionText = dropDownOpts[i].text;
            }
            var valueOfOptions = this.replaceSpecialCharacters(dropDownOpts[i].text);
            tempHtml += "<option " + (this.getFibValues(obj.blankid - 1) === dropDownOpts[i].text ? 'selected' : '') + " value='" + valueOfOptions + "' title='" + valueOfOptions + "'>" + optionText + "</option>";
        }
        tempHtml += "</select><div class='sign'><div class='sr-only'></div><span class='fa'></span></div><div class='fdback " + (obj.correct_feedback === '' && obj.incorrect_feedback === '' ? 'hide' : '') + "' data-toggle='modal'><div class='sr-only' aria-hidden='true' aria-label='Click to open feedback'>" + obj.correct_feedback + "|#@~" + obj.incorrect_feedback + "</div><span tabindex=0 class='fa fa-commenting feedBackIcon'></span></div></div>";
        return tempHtml;
    };

    ActivityData.prototype.setDataValue = function setDataValue(val, index) {
        this.dataVal[index] = val;
    };

    ActivityData.prototype.getDataValue = function getDataValue(index) {
        return this.dataVal[index];
    };

    ActivityData.prototype.setDistractors = function setDistractors(arr) {
        this.distractors = arr && arr.length ? arr : [];

        this.draggables.push(this.distractors.map(this.makeDraggables));
        //this.createDrags(this.distractors);
    };

    ActivityData.prototype.dragdrop = function dragdrop(obj) {
        //for rendering dragDrops
        this.makeDroppablesMob(obj);
        return this.makeDroppables(obj);
        //return this.makeDroppablesMob(obj);
    };

    ActivityData.prototype.makeDraggables = function makeDraggables(obj) {
        return '<span class="option drag btn-draggable">' + obj.text + '</span>';
    };

    ActivityData.prototype.getDraggables = function getDraggables() {
        return this.shuffleOptions(this.draggables);
    };

    ActivityData.prototype.createDrags = function createDrags(obj) {
        var _this = this;

        obj.forEach(function (item) {
            _this.draggables.push(item.textforeachblank.map(_this.makeDraggables));
        });
    };

    ActivityData.prototype.addDraggables = function addDraggables(dragElm) {
        this.draggables.push([dragElm]);
    };

    ActivityData.prototype.removeDraggables = function removeDraggables(dragElm) {
        for (var i = 0; i < this.draggables.length; i++) {
            var arr = this.draggables[i];
            for (var j = 0; j < arr.length; j++) {
                if ($(dragElm).text() === $(arr[j]).text()) {
                    arr.splice(j, 1);
                    //this.choices[i].textforeachblank.splice(j, 1);
                    return;
                }
            }
        }
    };

    ActivityData.prototype.makeDroppables = function makeDroppables(obj) {
        var html = '<div id="spnCorrectIncorrect0" class="option fibclass  ' + (this.getFibClasses(obj.blankid - 1) === undefined ? "" : this.getFibClasses(obj.blankid - 1)) + '"><div ' + this.getDisableProp(obj.blankid - 1) + ' dataValue="' + this.getDataValue(obj.blankid - 1) + '"  class="drop-box commonClass ' + (this.getDirtyClass(obj.blankid - 1) === undefined ? ' ' : this.getDirtyClass(obj.blankid - 1)) + '" ansindex="' + obj.blankid + '">' + (this.getFibValues(obj.blankid - 1) === undefined ? '' : this.getFibValues(obj.blankid - 1)) + '</div><div class="sign"><div class="sr-only"></div><span class="fa"></span></div><div class="fdback ' + (obj.correct_feedback === "" && obj.incorrect_feedback === "" ? "hide" : "") + '" data-toggle="modal"><div class="sr-only" aria-hidden="true" aria-label="Click to open feedback">' + obj.correct_feedback + '|#@~' + obj.incorrect_feedback + '</div><span tabindex=0 class="fa fa-commenting feedBackIcon"></span></div></div>';
        //this.makeDroppablesMob(obj);
        return html;
    };

    ActivityData.prototype.makeDroppablesMob = function makeDroppablesMob(obj) {
        this.fibQuestionMob += '<div id="spnCorrectIncorrect0" class="option fibclass  ' + (this.getFibClasses(obj.blankid - 1) === undefined ? "" : this.getFibClasses(obj.blankid - 1)) + '"><div ' + this.getDisableProp(obj.blankid - 1) + ' dataValue="' + this.getDataValue(obj.blankid - 1) + '"  class="mobdrop-box commonClass ' + (this.getDirtyClass(obj.blankid - 1) === undefined ? ' ' : this.getDirtyClass(obj.blankid - 1)) + '" ansindex="' + obj.blankid + '">' + (this.getFibValues(obj.blankid - 1) === undefined ? '' : this.getFibValues(obj.blankid - 1)) + '</div><div class="sign"><div class="sr-only"></div><span class="fa"></span></div><div class="fdback ' + (obj.correct_feedback === "" && obj.incorrect_feedback === "" ? "hide" : "") + '" data-toggle="modal"><div class="sr-only" aria-hidden="true" aria-label="Click to open feedback">' + obj.correct_feedback + '|#@~' + obj.incorrect_feedback + '</div><span tabindex=0 class="fa fa-commenting feedBackIcon"></span></div></div>';
        //this.makeDroppablesMob(obj);
    };

    ActivityData.prototype.setRawtext = function setRawtext(text) {
        this.fibRawText = text;
    };

    ActivityData.prototype.setFibQuestions = function setFibQuestions(text) {
        var _this2 = this;

        this.html = "";
        this.fibQuestionMob = "";
        this.fibQuestion = text.split(/(\[\[\d]])/g);
        //this.draggables=[];
        this.fibQuestion.forEach(function (i, k) {
            if (i.indexOf('[[') >= 0) {
                _this2.html += _this2.renderQuestion(_this2.searchChoiceObj(i, _this2.getFibChoices()));
            } else {
                i = i.search('<p>') === 0 ? i : '<p class="question-simple-text">' + i + '</p>';
                i = _this2.replaceAll(i, '<p>', '<p class="question-simple-text">');
                _this2.html += i;
                _this2.fibQuestionMob += i;
            }
        });
        this.fibQuestion = this.html;
    };

    ActivityData.prototype.getFibRawText = function getFibRawText() {
        return this.fibRawText;
    };

    ActivityData.prototype.setFibValues = function setFibValues(val, index) {
        if (val !== 'empty') {
            this.fibValues[index] = val;
        } else {
            this.fibValues = [];
        }
    };

    ActivityData.prototype.resetFibValues = function resetFibValues(val, index) {
        //         this.fibValues.splice(val,1);

        this.fibValues[val] = undefined;
    };

    ActivityData.prototype.setDirtyClass = function setDirtyClass(cls, index) {
        this.dirtyClass[index] = cls;
    };

    ActivityData.prototype.getDirtyClass = function getDirtyClass(index) {
        return this.dirtyClass[index];
    };

    ActivityData.prototype.getFibValues = function getFibValues(index) {
        return this.fibValues[index];
    };

    ActivityData.prototype.setDisableProp = function setDisableProp(prop) {
        this.disabledFib = prop;
    };

    ActivityData.prototype.getDisableProp = function getDisableProp() {
        return this.disabledFib;
    };

    ActivityData.prototype.setFibClasses = function setFibClasses(Class) {
        if (Class !== 'empty') {
            this.FibClasses.push(Class);
        } else {
            this.FibClasses = [];
        }
    };

    ActivityData.prototype.getFibClasses = function getFibClasses(index) {
        return this.FibClasses[index];
    };

    ActivityData.prototype.searchChoiceObj = function searchChoiceObj(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].noforeachblank === nameKey) {
                return myArray[i];
            }
        }
    };

    ActivityData.prototype.getFibQuestionText = function getFibQuestionText() {
        return this.fibQuestion;
    };

    ActivityData.prototype.getFibQuestionTextMob = function getFibQuestionTextMob() {
        return this.fibQuestionMob;
    };

    ActivityData.prototype.setSubQuestions = function setSubQuestions(questionArray) {
        var subQuestionsArray = [],
            currentActivity = {};
        for (var i = 0; i < questionArray.length; i++) {
            currentActivity.QuestionData = questionArray[i];
            var subQlen = questionArray.length;
            if (currentActivity.QuestionData.sentence != undefined) {
                this.sentences.push(currentActivity.QuestionData.sentence.text);
            }
            switch (currentActivity.QuestionData.question_type.text) {
                case "mcss":
                case "mcms":
                    this.subQuestions.push(_data_serviceMcq_data_service2["default"].getActivityData(currentActivity, subQlen));
                    break;
                case "open-ended":
                    this.subQuestions.push(_data_serviceOpen_ended_data_service2["default"].getActivityData(currentActivity, subQlen));
                    break;
                case "in-context":
                    this.subQuestions.push(_data_serviceIn_context_data_service2["default"].getActivityData(currentActivity, subQlen));
                    break;
                case "fib":
                case "fib-dragdrop":
                case "fib-dropdown":
                    this.subQuestions.push(_data_serviceFib_data_service2["default"].getActivityData(currentActivity, subQlen));
                    break;
                default:
            }
        }
    };

    ActivityData.prototype.getSubQuestions = function getSubQuestions() {
        return this.subQuestions;
    };

    ActivityData.prototype.getChoices = function getChoices() {
        // method returns the choices
        return this.choices;
    };

    ActivityData.prototype.getCorrectAnswers = function getCorrectAnswers() {
        // method returns correct responses
        return this.correctAnswers;
    };

    ActivityData.prototype.setQuestionText = function setQuestionText(questionText) {
        //method sets the text of the question
        this.questionText = questionText;
    };

    ActivityData.prototype.setQuestionNumber = function setQuestionNumber(questionNumber) {
        //method sets the question number
        this.questionNumber = questionNumber;
    };

    ActivityData.prototype.getQuestionNumber = function getQuestionNumber() {
        //method returns the question number
        return this.questionNumber;
    };

    ActivityData.prototype.setInstructionText = function setInstructionText(instructionText) {
        this.instructionText = instructionText;
    };

    ActivityData.prototype.setAnswer = function setAnswer(answer) {
        this.answer = answer;
    };

    ActivityData.prototype.getAnswer = function getAnswer() {
        return this.answer;
    };

    ActivityData.prototype.setMediaParameters = function setMediaParameters(mediaObj, mediaType) {
        this.mediaUrl = mediaObj.url;
        this.mediaType = mediaObj.type;
        if (this.mediaType === 'brightcove') {
            this.mediaHeight = mediaObj.height;
            this.mediaWidth = mediaObj.width;
        } else {
            this.assetType = mediaObj.asset_type;
        }
    };

    ActivityData.prototype.getQuestionText = function getQuestionText() {
        // method gets the question's text
        return this.questionText;
    };

    ActivityData.prototype.setGlobalCorrectFeedback = function setGlobalCorrectFeedback(globalCorrectFeedback) {
        this.globalCorrectFeedback = globalCorrectFeedback;
    };

    ActivityData.prototype.getGlobalCorrectFeedback = function getGlobalCorrectFeedback() {
        // method gets the question's text
        return this.globalCorrectFeedback;
    };

    ActivityData.prototype.setGlobalInCorrectFeedback = function setGlobalInCorrectFeedback(globalInCorrectFeedback) {
        this.globalInCorrectFeedback = globalInCorrectFeedback;
    };

    ActivityData.prototype.getGlobalInCorrectFeedback = function getGlobalInCorrectFeedback() {
        // method gets the question's text
        return this.globalInCorrectFeedback;
    };

    ActivityData.prototype.getSampleAnswer = function getSampleAnswer() {
        return this.sampleAnswer;
    };

    ActivityData.prototype.getMediaParameters = function getMediaParameters(parameter) {
        if (parameter === 'url') {
            return this.mediaUrl;
        }
        if (parameter === 'height') {
            return this.mediaHeight;
        }
        if (parameter === 'width') {
            return this.mediaWidth;
        }
        if (parameter === 'type') {
            return this.mediaType;
        }
        if (parameter === 'assetType') {
            return this.assetType;
        }
    };

    ActivityData.prototype.getInstructionText = function getInstructionText() {
        return this.instructionText;
    };

    ActivityData.prototype.setType = function setType(type, openEndedType) {
        //method sets the type of the question for example :MCQ,MCSS
        this.type = type;
        if (type === 'open-ended') {
            this.openEndedType = openEndedType;
        }
    };

    ActivityData.prototype.setSampleAnswer = function setSampleAnswer(sampleAnswer) {
        this.sampleAnswer = sampleAnswer;
    };

    ActivityData.prototype.getType = function getType() {
        //method returns the type of the question
        return this.type;
    };

    ActivityData.prototype.getOpenendedType = function getOpenendedType() {
        return this.openEndedType;
    };

    ActivityData.prototype.addSelectedOption = function addSelectedOption(ref, newOption) {
        if (this.newKey != ref) {
            this.tempArrayForMultipart = [];
        }
        this.tempArrayForMultipart.push(newOption);
        this.newKey = ref;
        this.selectedOptions[this.newKey] = this.tempArrayForMultipart;
    };

    ActivityData.prototype.checkedOptionArray = function checkedOptionArray(ref) {
        this.newKey = ref;
        this.selectedOptions[this.newKey] = this.tempArrayForMultipart;
    };

    ActivityData.prototype.resetSelectedOption = function resetSelectedOption() {
        this.selectedOptions = [];
        this.tempArrayForMultipart = [];
    };

    ActivityData.prototype.resetPinanswer = function resetPinanswer() {
        for (var i = 0; i < this.choices.length; i++) {
            this.choices[i].pinanswer = 0;
        }
    };

    ActivityData.prototype.setPinanswer = function setPinanswer(index) {
        if (typeof index === 'number') {
            this.choices[index - 1].pinanswer = 1;
        } else if (typeof index === 'object') {
            for (var i = 0; i < this.choices.length; i++) {
                if (index.indexOf(this.choices[i].choiceid) > -1) {
                    this.choices[i].pinanswer = 1;
                } else {
                    this.choices[i].pinanswer = 0;
                }
            }
        }
    };

    ActivityData.prototype.setResponseText = function setResponseText(responsetext) {
        this.responsetext = responsetext;
    };

    ActivityData.prototype.getResponseText = function getResponseText() {
        return this.responsetext;
    };

    ActivityData.prototype.setOpenEndedClass = function setOpenEndedClass(btnClassName) {
        this.openEndedClass = btnClassName;
    };

    ActivityData.prototype.getOpenEndedClass = function getOpenEndedClass(btnClass) {
        return this.openEndedClass;
    };

    ActivityData.prototype.setSampleAnswerClass = function setSampleAnswerClass(className) {
        this.sampleAnswerClass = className;
    };

    ActivityData.prototype.getSampleAnswerClass = function getSampleAnswerClass() {
        return this.sampleAnswerClass;
    };

    ActivityData.prototype.setTabindex = function setTabindex(tabindex) {
        this.tabindex = tabindex;
    };

    ActivityData.prototype.setButtonLabel = function setButtonLabel(label) {
        this.btnLabelOpenEnded = label;
    };

    ActivityData.prototype.getButtonLabel = function getButtonLabel() {
        return this.btnLabelOpenEnded;
    };

    ActivityData.prototype.getTabindex = function getTabindex() {
        return this.tabindex;
    };

    ActivityData.prototype.setAnswerClass = function setAnswerClass(answerClass) {
        this.answerClass = answerClass;
    };

    ActivityData.prototype.getAnswerClass = function getAnswerClass() {
        return this.answerClass;
    };

    ActivityData.prototype.setTextAreaAttr = function setTextAreaAttr(attr) {
        this.textAreaAttr = attr;
    };

    ActivityData.prototype.getdisabledClass = function getdisabledClass() {
        return this.disabledClass;
    };

    ActivityData.prototype.getTextAreaAttr = function getTextAreaAttr() {
        return this.textAreaAttr;
    };

    ActivityData.prototype.setDisabledClass = function setDisabledClass(cls) {
        return this.disabledClass = cls;
    };

    ActivityData.prototype.setFeedback = function setFeedback(feedback) {
        this.feedback = feedback;
    };

    ActivityData.prototype.getFeedback = function getFeedback() {
        return this.feedback;
    };

    ActivityData.prototype.getMultipartBtnClass = function getMultipartBtnClass() {
        return this.multipartBtnClass;
    };

    ActivityData.prototype.setMultipartBtnClass = function setMultipartBtnClass(cls) {
        this.multipartBtnClass = cls;
    };

    ActivityData.prototype.getMultipartFeedBackClassCorrect = function getMultipartFeedBackClassCorrect() {
        return this.multipartFeedbackClsCorrect;
    };

    ActivityData.prototype.getMultipartFeedBackClassIncorrect = function getMultipartFeedBackClassIncorrect() {
        return this.multipartFeedbackClsIncorrect;
    };

    ActivityData.prototype.setMultipartFeedBackClassCorrect = function setMultipartFeedBackClassCorrect(cls) {
        this.multipartFeedbackClsCorrect = cls;
    };

    ActivityData.prototype.setMultipartFeedBackClassIncorrect = function setMultipartFeedBackClassIncorrect(cls) {
        this.multipartFeedbackClsIncorrect = cls;
    };

    ActivityData.prototype.getglobalMultipartfeedback = function getglobalMultipartfeedback() {
        return this.globalMultipartfeedback;
    };

    ActivityData.prototype.getMultipartRetryClass = function getMultipartRetryClass() {
        return this.multipartRetryClass;
    };

    ActivityData.prototype.setMultipartRetryBtnClass = function setMultipartRetryBtnClass(cls) {
        this.multipartRetryClass = cls;
    };

    ActivityData.prototype.getTextAreaAriaDisabled = function getTextAreaAriaDisabled() {
        return this.ariaAttr;
    };

    ActivityData.prototype.setTextAreaAriaDisabled = function setTextAreaAriaDisabled(attr) {
        this.ariaAttr = attr;
    };

    ActivityData.prototype.getSentences = function getSentences() {
        return this.sentences;
    };

    ActivityData.prototype.setExplanationVideoSet = function setExplanationVideoSet(set) {
        this.explanationVideoSet = set;
    };

    ActivityData.prototype.getExplanationVideoSet = function getExplanationVideoSet() {
        return this.explanationVideoSet;
    };

    ActivityData.prototype.setQuestionStemStatus = function setQuestionStemStatus(status) {
        this.questionStemStatus = status;
    };

    ActivityData.prototype.getQuestionStemStatus = function getQuestionStemStatus() {
        return this.questionStemStatus;
    };

    ActivityData.prototype.setQuestionPrefix = function setQuestionPrefix(questionPrefix) {
        this.questionPrefix = questionPrefix;
    };

    ActivityData.prototype.getQuestionPrefix = function getQuestionPrefix() {
        return this.questionPrefix;
    };

    ActivityData.prototype.setQuestionSeperator = function setQuestionSeperator(questionSeperator) {
        this.questionSeperator = questionSeperator;
    };

    ActivityData.prototype.getQuestionSeperator = function getQuestionSeperator() {
        return this.questionSeperator;
    };

    ActivityData.prototype.setQuestionHint = function setQuestionHint(questionHint) {
        //method sets the Hint of the question
        this.questionHint = questionHint;
    };

    ActivityData.prototype.getQuestionHint = function getQuestionHint() {
        // method gets the question's Hint
        return this.questionHint;
    };

    ActivityData.prototype.setQuestionTotal = function setQuestionTotal(questionTotal) {
        //method sets the total number of question for an assessment
        this.questionTotal = questionTotal;
    };

    ActivityData.prototype.getQuestionTotal = function getQuestionTotal() {
        //method get the total number of question for an assessment
        return this.questionTotal;
    };

    return ActivityData;
})();

exports["default"] = ActivityData;
module.exports = exports["default"];

},{"./data_service/fib_data_service":10,"./data_service/in_context_data_service":11,"./data_service/mcq_data_service":12,"./data_service/open_ended_data_service":14}],9:[function(require,module,exports){
/**
 * Created by debayan.das on 09-11-2016.
 */
/**edited by Tarique*/
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _data_serviceMcq_data_service = require("./data_service/mcq_data_service");

var _data_serviceMcq_data_service2 = _interopRequireDefault(_data_serviceMcq_data_service);

var _data_serviceMultipart_data_service = require("./data_service/multipart_data_service");

var _data_serviceMultipart_data_service2 = _interopRequireDefault(_data_serviceMultipart_data_service);

var _data_serviceOpen_ended_data_service = require("./data_service/open_ended_data_service");

var _data_serviceOpen_ended_data_service2 = _interopRequireDefault(_data_serviceOpen_ended_data_service);

var _data_serviceIn_context_data_service = require("./data_service/in_context_data_service");

var _data_serviceIn_context_data_service2 = _interopRequireDefault(_data_serviceIn_context_data_service);

var _data_serviceFib_data_service = require("./data_service/fib_data_service");

var _data_serviceFib_data_service2 = _interopRequireDefault(_data_serviceFib_data_service);

var ActivityDataFactory = (function () {
    function ActivityDataFactory() {
        _classCallCheck(this, ActivityDataFactory);
    }

    ActivityDataFactory.prototype.getActivityDataFromJSON = function getActivityDataFromJSON(jsonData) {
        var allActivities = [],
            currentActivity = undefined;
        for (var i = 0; i < jsonData.length; i++) {
            currentActivity = jsonData[i];
            switch (currentActivity.QuestionData.question_type.text) {
                case "mcss":
                case "mcms":
                    allActivities.push(_data_serviceMcq_data_service2["default"].getActivityData(currentActivity));
                    break;
                case "open-ended":
                    allActivities.push(_data_serviceOpen_ended_data_service2["default"].getActivityData(currentActivity));
                    break;
                case "multi-part":
                    allActivities.push(_data_serviceMultipart_data_service2["default"].getActivityData(currentActivity));
                    break;
                case "in-context":
                    allActivities.push(_data_serviceIn_context_data_service2["default"].getActivityData(currentActivity));
                    break;
                case "fib":
                case "fib-dragdrop":
                case "fib-dropdown":
                    allActivities.push(_data_serviceFib_data_service2["default"].getActivityData(currentActivity));
                    break;
                default:
                    console.log("in default");
            }
        }
        return allActivities;
    };

    return ActivityDataFactory;
})();

exports["default"] = new ActivityDataFactory();
module.exports = exports["default"];

},{"./data_service/fib_data_service":10,"./data_service/in_context_data_service":11,"./data_service/mcq_data_service":12,"./data_service/multipart_data_service":13,"./data_service/open_ended_data_service":14}],10:[function(require,module,exports){
/**
 * Created by debayan.das on 09-11-2016.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _activity_data = require("../activity_data");

var _activity_data2 = _interopRequireDefault(_activity_data);

var FIBDataService = (function () {
  function FIBDataService() {
    _classCallCheck(this, FIBDataService);
  }

  FIBDataService.prototype.getActivityData = function getActivityData(activityDataJSON, subQuestionLength) {
    // method returns the filtered data from JSON file
    var activityData = new _activity_data2['default']();
    // activityData.setQuestionText(activityDataJSON.QuestionData.question_stem.text);
    activityData.setFibChoices(activityDataJSON.QuestionData.choices);
    activityData.setType(activityDataJSON.QuestionData.question_type.text);
    activityData.setInstructionText(activityDataJSON.QuestionData.instruction_text.text);
    activityData.setQuestionText(activityDataJSON.QuestionData.question_stem.text);
    activityData.setQuestionNumber(activityDataJSON.question_number);
    // activityData.setFibQuestions(activityDataJSON.QuestionData.textwithblanks.text);
    activityData.setRawtext(activityDataJSON.QuestionData.textwithblanks.text);
    activityData.setDistractors(activityDataJSON.QuestionData.distractors);
    //            activityData.createDrags(activityDataJSON.QuestionData.choices);
    this.setMediaParameters(activityDataJSON, activityData);
    //activityData.setAttrs(activityDataJSON.QuestionData.choices);
    activityData.setGlobalCorrectFeedback(activityDataJSON.QuestionData.global_correct_feedback.text);
    activityData.setGlobalInCorrectFeedback(activityDataJSON.QuestionData.global_incorrect_feedback.text);
    if (subQuestionLength) {
      activityData.setQuestionTotal(subQuestionLength);
    } else {
      activityData.setQuestionTotal(activityDataJSON.QuestionData.questionTotal);
    }
    if (typeof activityDataJSON.question_seperator !== 'undefined') {
      activityData.setQuestionSeperator(activityDataJSON.question_seperator);
    } else {
      if (typeof activityDataJSON.QuestionData.question_separator !== 'undefined') {
        activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_separator);
      } else if (typeof activityDataJSON.QuestionData.question_seperator !== 'undefined') {
        activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_seperator);
      }
    }

    return activityData;
  };

  FIBDataService.prototype.setMediaParameters = function setMediaParameters(activityDataJSON, activityData) {
    switch (activityDataJSON.QuestionData.media.type) {
      case 'brightcove':
        activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'brightcove');
        break;
      case 'assets':
        activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'assets');
        break;
    }
  };

  return FIBDataService;
})();

exports['default'] = new FIBDataService();
module.exports = exports['default'];

},{"../activity_data":8}],11:[function(require,module,exports){
/**
 * Created by tarique.hussain on 16-12-2016.
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _activity_data = require("../activity_data");

var _activity_data2 = _interopRequireDefault(_activity_data);

var IncontextDataService = (function () {
    function IncontextDataService() {
        _classCallCheck(this, IncontextDataService);
    }

    IncontextDataService.prototype.getActivityData = function getActivityData(activityDataJSON, subQuestionLength) {
        // method returns the filtered data from JSON file
        var activityData = new _activity_data2["default"]();
        activityData.setQuestionText(this.checkStemStatus(activityDataJSON.QuestionData.question_stem_status, activityDataJSON.QuestionData.question_stem.text, activityDataJSON.QuestionData.question_generic_stem));
        if (activityDataJSON.question_number != "" && activityDataJSON.question_number != null) activityData.setQuestionNumber(activityDataJSON.question_number);
        if (typeof activityDataJSON.QuestionData.question_number !== 'undefined') {
            activityData.setQuestionNumber(activityDataJSON.QuestionData.question_number);
        }
        activityData.setInstructionText(activityDataJSON.QuestionData.instruction_text.text);
        activityData.setSubQuestions(activityDataJSON.QuestionData.sentences); //setSubquestions
        this.setMediaParameters(activityDataJSON, activityData);
        activityData.setType(activityDataJSON.QuestionData.question_type.text);
        if (typeof activityDataJSON.QuestionData.explanationVideoSet !== 'undefined') {
            activityData.setExplanationVideoSet(activityDataJSON.QuestionData.explanationVideoSet);
        }
        if (typeof activityDataJSON.QuestionData.question_stem_status !== 'undefined') {
            activityData.setQuestionStemStatus(parseInt(activityDataJSON.QuestionData.question_stem_status));
        }
        if (typeof activityDataJSON.question_prefix !== 'undefined') {
            activityData.setQuestionPrefix(activityDataJSON.question_prefix);
        } else {
            if (typeof activityDataJSON.QuestionData.question_prefix !== 'undefined') {
                activityData.setQuestionPrefix(activityDataJSON.QuestionData.question_prefix);
            }
        }
        if (typeof activityDataJSON.question_seperator !== 'undefined') {
            activityData.setQuestionSeperator(activityDataJSON.question_seperator);
        } else {
            if (typeof activityDataJSON.QuestionData.question_separator !== 'undefined') {
                activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_separator);
            } else if (typeof activityDataJSON.QuestionData.question_seperator !== 'undefined') {
                activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_seperator);
            }
        }
        if (subQuestionLength) {
            activityData.setQuestionTotal(subQuestionLength);
        } else {
            activityData.setQuestionTotal(activityDataJSON.QuestionData.questionTotal);
        }
        //activityData.setSentences(activityDataJSON.QuestionData.question_type.text);
        //activityData.setContextResponseType(activityDataJSON.QuestionData.question_response_type);
        //        activityData.setGlobalCorrectFeedback(activityDataJSON.QuestionData.global_correct_feedback.text);
        //        activityData.setGlobalInCorrectFeedback(activityDataJSON.QuestionData.global_incorrect_feedback.text);
        return activityData;
    };

    IncontextDataService.prototype.setMediaParameters = function setMediaParameters(activityDataJSON, activityData) {
        switch (activityDataJSON.QuestionData.media.type) {
            case 'brightcove':
                activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'brightcove');
                break;
            case 'assets':
                activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'assets');
                break;
        }
    };

    IncontextDataService.prototype.checkStemStatus = function checkStemStatus(status, mainQues, genericQues) {
        switch (status) {
            case "":
            case "1":
                return mainQues;
                break;
            case "2":
                return "";
                break;
            case "3":
                return genericQues;
                break;
            default:
                return mainQues;

        }
    };

    return IncontextDataService;
})();

exports["default"] = new IncontextDataService();
module.exports = exports["default"];

},{"../activity_data":8}],12:[function(require,module,exports){
/**
 * Created by debayan.das on 09-11-2016.
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _activity_data = require("../activity_data");

var _activity_data2 = _interopRequireDefault(_activity_data);

var MCQDataService = (function () {
    function MCQDataService() {
        _classCallCheck(this, MCQDataService);
    }

    MCQDataService.prototype.getActivityData = function getActivityData(activityDataJSON, subQuestionLength) {
        // method returns the filtered data from JSON file
        var activityData = new _activity_data2["default"]();
        activityData.setQuestionText(this.checkStemStatus(activityDataJSON.QuestionData.question_stem_status, activityDataJSON.QuestionData.question_stem.text, activityDataJSON.QuestionData.question_generic_stem));
        if (activityDataJSON.question_number != "" && activityDataJSON.question_number != null) activityData.setQuestionNumber(activityDataJSON.question_number);
        if (typeof activityDataJSON.QuestionData.question_number !== 'undefined') {
            activityData.setQuestionNumber(activityDataJSON.QuestionData.question_number);
        }
        activityData.setInstructionText(activityDataJSON.QuestionData.instruction_text.text);
        activityData.setChoices(activityDataJSON.QuestionData.choices);
        this.setMediaParameters(activityDataJSON, activityData);
        activityData.setType(activityDataJSON.QuestionData.question_type.text);
        activityData.setGlobalCorrectFeedback(activityDataJSON.QuestionData.global_correct_feedback.text);
        activityData.setGlobalInCorrectFeedback(activityDataJSON.QuestionData.global_incorrect_feedback.text);
        if (subQuestionLength) {
            activityData.setQuestionTotal(subQuestionLength);
        } else {
            activityData.setQuestionTotal(activityDataJSON.QuestionData.questionTotal);
        }

        if (typeof activityDataJSON.QuestionData.explanationVideoSet !== 'undefined') {
            activityData.setExplanationVideoSet(activityDataJSON.QuestionData.explanationVideoSet);
        }
        if (typeof activityDataJSON.QuestionData.question_stem_status !== 'undefined') {
            activityData.setQuestionStemStatus(parseInt(activityDataJSON.QuestionData.question_stem_status));
        }
        if (typeof activityDataJSON.question_prefix !== 'undefined') {
            activityData.setQuestionPrefix(activityDataJSON.question_prefix);
        } else {
            if (typeof activityDataJSON.QuestionData.question_prefix !== 'undefined') {
                activityData.setQuestionPrefix(activityDataJSON.QuestionData.question_prefix);
            }
        }

        if (typeof activityDataJSON.question_seperator !== 'undefined') {
            activityData.setQuestionSeperator(activityDataJSON.question_seperator);
        } else {
            if (typeof activityDataJSON.QuestionData.question_separator !== 'undefined') {
                activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_separator);
            } else if (typeof activityDataJSON.QuestionData.question_seperator !== 'undefined') {
                activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_seperator);
            }
        }
        return activityData;
    };

    MCQDataService.prototype.setMediaParameters = function setMediaParameters(activityDataJSON, activityData) {
        switch (activityDataJSON.QuestionData.media.type) {
            case 'brightcove':
                activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'brightcove');
                break;
            case 'assets':
                activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'assets');
                break;
        }
    };

    MCQDataService.prototype.checkStemStatus = function checkStemStatus(status, mainQues, genericQues) {
        switch (status) {
            case "":
            case "1":
                return mainQues;
                break;
            case "2":
                return "";
                break;
            case "3":
                return genericQues;
                break;
            default:
                return mainQues;

        }
    };

    return MCQDataService;
})();

exports["default"] = new MCQDataService();
module.exports = exports["default"];

},{"../activity_data":8}],13:[function(require,module,exports){
/**
 * Created by debayan.das on 09-11-2016.
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _activity_data = require("../activity_data");

var _activity_data2 = _interopRequireDefault(_activity_data);

var MultipartDataService = (function () {
    function MultipartDataService() {
        _classCallCheck(this, MultipartDataService);
    }

    MultipartDataService.prototype.getActivityData = function getActivityData(activityDataJSON, subQuestionLength) {
        // method returns the filtered data from JSON file
        var activityData = new _activity_data2["default"]();
        activityData.setQuestionText(this.checkStemStatus(activityDataJSON.QuestionData.question_stem_status, activityDataJSON.QuestionData.question_stem.text, activityDataJSON.QuestionData.question_generic_stem));
        if (activityDataJSON.question_number != "" && activityDataJSON.question_number != null) activityData.setQuestionNumber(activityDataJSON.question_number);
        if (typeof activityDataJSON.QuestionData.question_number !== 'undefined') {
            activityData.setQuestionNumber(activityDataJSON.QuestionData.question_number);
        }
        activityData.setInstructionText(activityDataJSON.QuestionData.instruction_text.text);
        activityData.setSubQuestions(activityDataJSON.QuestionData.subquestions); //setSubquestions
        this.setMediaParameters(activityDataJSON, activityData);
        activityData.setType(activityDataJSON.QuestionData.question_type.text);
        activityData.setGlobalCorrectFeedback(activityDataJSON.QuestionData.global_correct_feedback.text);
        activityData.setGlobalInCorrectFeedback(activityDataJSON.QuestionData.global_incorrect_feedback.text);

        if (subQuestionLength) {
            activityData.setQuestionTotal(subQuestionLength);
        } else {
            activityData.setQuestionTotal(activityDataJSON.QuestionData.questionTotal);
        }

        if (typeof activityDataJSON.QuestionData.explanationVideoSet !== 'undefined') {
            activityData.setExplanationVideoSet(activityDataJSON.QuestionData.explanationVideoSet);
        }
        if (typeof activityDataJSON.QuestionData.question_stem_status !== 'undefined') {
            activityData.setQuestionStemStatus(parseInt(activityDataJSON.QuestionData.question_stem_status));
        }
        if (typeof activityDataJSON.question_prefix !== 'undefined') {
            activityData.setQuestionPrefix(activityDataJSON.question_prefix);
        } else {
            if (typeof activityDataJSON.QuestionData.question_prefix !== 'undefined') {
                activityData.setQuestionPrefix(activityDataJSON.QuestionData.question_prefix);
            }
        }
        if (typeof activityDataJSON.question_seperator !== 'undefined') {
            activityData.setQuestionSeperator(activityDataJSON.question_seperator);
        } else {
            if (typeof activityDataJSON.QuestionData.question_separator !== 'undefined') {
                activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_separator);
            } else if (typeof activityDataJSON.QuestionData.question_seperator !== 'undefined') {
                activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_seperator);
            }
        }
        return activityData;
    };

    MultipartDataService.prototype.setMediaParameters = function setMediaParameters(activityDataJSON, activityData) {
        switch (activityDataJSON.QuestionData.media.type) {
            case 'brightcove':
                activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'brightcove');
                break;
            case 'assets':
                activityData.setMediaParameters(activityDataJSON.QuestionData.media, 'assets');
                break;
        }
    };

    MultipartDataService.prototype.checkStemStatus = function checkStemStatus(status, mainQues, genericQues) {
        switch (status) {
            case "":
            case "1":
                return mainQues;
                break;
            case "2":
                return "";
                break;
            case "3":
                return genericQues;
                break;
            default:
                return mainQues;

        }
    };

    return MultipartDataService;
})();

exports["default"] = new MultipartDataService();
module.exports = exports["default"];

},{"../activity_data":8}],14:[function(require,module,exports){
/**
 * Created by Tarique.das on 20-10-2016.
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _activity_data = require("../activity_data");

var _activity_data2 = _interopRequireDefault(_activity_data);

var OpenEndedDataService = (function () {
  function OpenEndedDataService() {
    _classCallCheck(this, OpenEndedDataService);
  }

  OpenEndedDataService.prototype.getActivityData = function getActivityData(activityDataJSON, subQuestionLength) {
    // method returns the filtered data from JSON file
    var activityData = new _activity_data2["default"]();
    activityData.setQuestionText(this.checkStemStatus(activityDataJSON.QuestionData.question_stem_status, activityDataJSON.QuestionData.question_stem.text, activityDataJSON.QuestionData.question_generic_stem));
    if (typeof activityDataJSON.QuestionData.question_hint !== 'undefined') {
      activityData.setQuestionHint(activityDataJSON.QuestionData.question_hint.text);
    }

    if (activityDataJSON.question_number != "" && activityDataJSON.question_number != null) activityData.setQuestionNumber(activityDataJSON.question_number);
    if (typeof activityDataJSON.QuestionData.question_number !== 'undefined') {
      activityData.setQuestionNumber(activityDataJSON.QuestionData.question_number);
    }
    activityData.setInstructionText(activityDataJSON.QuestionData.instruction_text.text);
    activityData.setMediaParameters(activityDataJSON.QuestionData.media);
    if (subQuestionLength) {
      activityData.setQuestionTotal(subQuestionLength);
    } else {
      activityData.setQuestionTotal(activityDataJSON.QuestionData.questionTotal);
    }
    if (activityDataJSON.QuestionData.question_type.text === 'open-ended') {
      activityData.setType(activityDataJSON.QuestionData.question_type.text, activityDataJSON.QuestionData.response_type);
      if (activityDataJSON.QuestionData.response_type.text === 'with-response') {
        activityData.setSampleAnswer(activityDataJSON.QuestionData.sample_answer.text);
        activityData.setFeedback(activityDataJSON.QuestionData.feedback.text);
      } else {
        activityData.setAnswer(activityDataJSON.QuestionData.answer.text);
      }
    } else {
      activityData.setType(activityDataJSON.QuestionData.question_type.text, null);
    }

    if (typeof activityDataJSON.QuestionData.explanationVideoSet !== 'undefined') {
      activityData.setExplanationVideoSet(activityDataJSON.QuestionData.explanationVideoSet);
    }
    if (typeof activityDataJSON.QuestionData.question_stem_status !== 'undefined') {
      activityData.setQuestionStemStatus(parseInt(activityDataJSON.QuestionData.question_stem_status));
    }
    if (typeof activityDataJSON.question_prefix !== 'undefined') {
      activityData.setQuestionPrefix(activityDataJSON.question_prefix);
    } else {
      if (typeof activityDataJSON.QuestionData.question_prefix !== 'undefined') {
        activityData.setQuestionPrefix(activityDataJSON.QuestionData.question_prefix);
      }
    }
    if (typeof activityDataJSON.question_seperator !== 'undefined') {
      activityData.setQuestionSeperator(activityDataJSON.question_seperator);
    } else {
      if (typeof activityDataJSON.QuestionData.question_separator !== 'undefined') {
        activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_separator);
      } else if (typeof activityDataJSON.QuestionData.question_seperator !== 'undefined') {
        activityData.setQuestionSeperator(activityDataJSON.QuestionData.question_seperator);
      }
    }

    return activityData;
  };

  OpenEndedDataService.prototype.checkStemStatus = function checkStemStatus(status, mainQues, genericQues) {
    switch (status) {
      case "":
      case "1":
        return mainQues;
        break;
      case "2":
        return "";
        break;
      case "3":
        return genericQues;
        break;
      default:
        return mainQues;

    }
  };

  return OpenEndedDataService;
})();

exports["default"] = new OpenEndedDataService();
module.exports = exports["default"];

},{"../activity_data":8}],15:[function(require,module,exports){
/**
 *Created by tarique hussain
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mcq = require("./mcq");

var _mcq2 = _interopRequireDefault(_mcq);

var Fib = (function (_MCQ) {
    _inherits(Fib, _MCQ);

    function Fib(assessmentData) {
        _classCallCheck(this, Fib);

        _MCQ.call(this);
        this.assessmentData = assessmentData;
        this.elementreference = null;
        this.choices = this.assessmentData.getFibAnswers();
    }

    Fib.prototype.bindEvents = function bindEvents() {
        var _this = this;

        _MCQ.prototype.bindEvents.call(this);
        $(".mobdrop-box[disabled]").addClass('pointerEvent');
        $(this.elementreference).find('.drag').draggable({
            revert: 'invalid',
            containment: '#playground',
            scroll: true,
            zIndex: 99

        });
        $(this.elementreference).find('.mobdrop-box').on('click', function () {
            if ($(this).children().hasClass('dropped')) {
                $(this).removeClass('DropFIBCanvasCSS');
                $(this).children().appendTo($('.optionContainer'));
            }
            $('.mobdrop-box').removeClass('currActive');
            $(this).addClass('currActive');
            $('.drop-list-content-mobile').show();
            $(window).trigger('resize');
        });
        $(this.elementreference).find('.mobOpts .option').off('click').on('click', function (event) {
            $(event.target).addClass('dropped');
            if (!$(event.target).parents('.commonClass').length > 0) {
                $(event.target).parent().removeClass('DropFIBCanvasCSS');
                _this.assessmentData.removeDraggables(event.target.outerHTML);
                $(_this.elementreference).find('.currActive').append($(event.target).parent()).addClass('DropFIBCanvasCSS dirty').attr('dataValue', $(event.target).text());
                _this.assessmentData.setDataValue($(event.target).text(), $('.currActive').attr('ansIndex') - 1);
                _this.assessmentData.setDirtyClass('DropFIBCanvasCSS dirty', $('.currActive').attr('ansIndex') - 1);
                _this.enableCheckBtn(event);
                $('.drop-list-content-mobile').hide();
            } else {
                $(event.target).parents('.commonClass').removeClass('dirty');
                $(event.target).parents('.commonClass').attr('dataValue', '');
                _this.assessmentData.setDataValue('', $('.currActive').attr('ansIndex') - 1);
                _this.assessmentData.setDirtyClass('', $(event.target).parents('.commonClass').attr('ansIndex') - 1);
                $(event.target).parents('.commonClass').removeClass('DropFIBCanvasCSS');
                $(event.target).parents('.mobOpts').appendTo($('ul.divDrpItems'));
                _this.assessmentData.setDirtyClass(' ', $(event.target).parents('.commonClass').attr('ansIndex') - 1);
                _this.assessmentData.addDraggables($(event.target)[0].outerHTML);
            }
            _this.enableCheckBtn();
            _this.assessmentData.fibValues = [];
            $(_this.elementreference).find('.mobdrop-box .mobOpts').each(function (index, item) {
                _this.assessmentData.setFibValues(item.outerHTML, $(item).parent().attr('ansIndex') - 1);
            });
        });
        if ($(this.elementreference).find('.drag').parent().attr('disabled')) {
            $(this.elementreference).find('.drag').draggable('disable');
        } else {
            $(this.elementreference).find('.drag').draggable('enable');
        }
        $(this.elementreference).find('.mobOpts').find('.drag').draggable('disable');
        $(this.elementreference).find('.divDrpItems').droppable({
            accept: '.drag',
            tolerance: 'pointer',
            activeClass: "activeDrops",
            hoverClass: "hoverOnDrops",
            drop: function drop(event, ui) {
                ui.draggable.css({
                    'top': 0,
                    'left': 0
                });
                $(ui.draggable).removeClass('ui-draggable-dragging');
                if (!(ui.draggable.parents().hasClass('divDrpItems') && $(event.target).hasClass('divDrpItems'))) {
                    _this.assessmentData.addDraggables(ui.draggable[0].outerHTML);
                    _this.assessmentData.resetFibValues(ui.draggable.parent().attr('ansIndex') - 1);
                    ui.draggable.parents('.drop-box').attr('datavalue', '');
                    ui.draggable.parents('.drop-box').removeClass('dirty');
                }

                _this.assessmentData.setDirtyClass(' ', ui.draggable.parent().attr('ansIndex') - 1);
                ui.draggable.appendTo(event.target);
                $(window).trigger('resize');
                //$(this.elementreference).find('.drop-box .drag').addClass('dirty');
                _this.enableCheckBtn();
            }
        });
        $(this.elementreference).find('.drop-box').droppable({
            accept: '.drag',
            tolerance: 'pointer',
            activeClass: "activeDrops",
            hoverClass: "hoverOnDrops",
            drop: function drop(event, ui) {
                var elm = window.event ? window.event.target : e ? e.target : '';
                if ($(event.target).children().length > 0) {
                    if (!(ui.draggable.parents().hasClass('drop-box') && $(event.target).hasClass('drop-box'))) {
                        _this.assessmentData.addDraggables($(event.target).children()[0].outerHTML);
                    }
                    ui.draggable.parent().attr('dataValue', $(event.target).children().text());
                    $(event.target).children().appendTo(ui.draggable.parent());
                }
                if (ui.draggable.parents().hasClass('drop-box') && $(event.target).hasClass('drop-box')) {
                    _this.assessmentData.resetFibValues(ui.draggable.parent().attr('ansIndex') - 1);
                }
                _this.assessmentData.setDirtyClass(' ', ui.draggable.parent().attr('ansIndex') - 1);
                ui.draggable.parents('.drop-box').attr('datavalue', '');
                ui.draggable.appendTo(event.target);

                _this.assessmentData.setDirtyClass('dirty', $(event.target).attr('ansIndex') - 1);
                ui.draggable.css({
                    'top': 0,
                    'left': 0
                });
                $(event.target).attr('dataValue', ui.draggable.text());
                _this.assessmentData.setDataValue(ui.draggable.text(), $(event.target).attr('ansIndex') - 1);
                _this.assessmentData.removeDraggables(ui.draggable[0].outerHTML);
                $(_this.elementreference).find('.dirty').removeClass('dirty');
                $(_this.elementreference).find('.drop-box .drag').parent().addClass('dirty');
                $(_this.elementreference).find('.drop-box .drag').each(function (index, item) {
                    $(item).removeClass('ui-draggable-dragging');
                    _this.assessmentData.setFibValues(item.outerHTML, $(item).parent().attr('ansIndex') - 1);
                });
                _this.enableCheckBtn();
                $(window).trigger('resize');
            }
        });
        $(this.elementreference).off("change", "select").on("change", "select", function (e, t) {
            var elm = window.event ? window.event.target : e ? e.target : '';
            if (elm.value !== "") {
                $(elm).addClass("dirty");
            } else {
                $(elm).removeClass("dirty");
            }
            //  $(event.target).attr('dataValue',  $(event.target).val());
            var index = elm.getAttribute('ansindex') - 1;
            _this.assessmentData.setFibValues(elm.value, index);
            if (elm.value.length > 0) {
                _this.assessmentData.setDirtyClass('dirty', $(elm).attr('ansIndex') - 1);
            } else {
                _this.assessmentData.setDirtyClass(' ', $(elm).attr('ansIndex') - 1);
            }
            _this.enableCheckBtn(event);
        });
        $(this.elementreference).off("keyup").on("keyup", function (e, t) {
            _this.deleteFun(e);
        });
        $(this.elementreference).off("keydown input paste").on("keydown input paste", function (e, t) {

            var charCode = window.event ? window.event.keyCode : e ? e.which : "",
                inputType = $(event.target).attr('inputType'),
                eventType = event.type,
                val = $(event.target).val(),
                elm = event.target;

            if (charCode == 8 || charCode == 9) {
                _this.checkEmptyVal(event);
            } else {
                switch (inputType) {
                    case 'numeric':
                        {
                            if (charCode >= 48 && charCode <= 57 || charCode === 32 || charCode >= 186 && charCode <= 222 || eventType === "paste") {

                                $(elm).addClass("dirty");
                            } else {
                                _this.checkEmptyVal(event);
                                return false;
                            }
                            break;
                        }
                    case 'alphanumeric':
                        {
                            if (e.ctrlKey && charCode) {
                                return false;
                            } else if (charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122 || charCode >= 186 && charCode <= 222 || charCode === 32 || eventType === "paste") {
                                $(elm).addClass("dirty");
                            } else if (charCode >= 37 && charCode <= 40 || charCode === 46) {
                                _this.checkEmptyVal(event);
                                return true;
                            } else {
                                _this.checkEmptyVal(event);
                                return false;
                            }
                            break;
                        }
                    case 'alphabet':
                        {
                            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode >= 186 && charCode <= 222 || charCode === 32 || eventType === "paste") {
                                $(elm).addClass("dirty");
                            } else {
                                _this.checkEmptyVal(event);
                                return false;
                            }
                            break;
                        }
                    default:
                        return true;
                }
            }
            var index = elm.getAttribute('ansindex') - 1;
            _this.assessmentData.setFibValues(elm.value, index);
            return _this.enableCheckBtn(event);
        });
        $(this.elementreference).off("blur input").on("blur input", function (e, t) {
            var elm = window.event ? window.event.target : e ? e.target : '';
            var index = elm.getAttribute('ansindex') - 1;
            _this.assessmentData.setFibValues(elm.value, index);
            $(event.target).attr('dataValue', $(event.target).val());
            _this.assessmentData.setDataValue($(event.target).val(), $(event.target).attr('ansIndex') - 1);
            if (elm.value.length > 0) {
                _this.assessmentData.setDirtyClass('dirty', $(elm).attr('ansIndex') - 1);
            } else {
                _this.assessmentData.setDirtyClass(' ', $(elm).attr('ansIndex') - 1);
            }
        });
    };

    Fib.prototype.checkEmptyVal = function checkEmptyVal(evt) {
        if ($(evt.target).val().length === 1 && ($(evt.target).hasClass("dirty") && evt.keyCode === 8 || $(evt.target).hasClass("dirty") && evt.keyCode === 46) || $(evt.target).val().length === window.getSelection().toString().length) {
            $(evt.target).removeClass("dirty");
            this.enableCheckBtn(evt);
        }
    };

    Fib.prototype.deleteFun = function deleteFun(evt) {
        //method used to enable del btn functionality
        if ($(evt.target).val().length) {
            $(evt.target).addClass("dirty");
            this.enableCheckBtn(evt);
        }
    };

    Fib.prototype.updateSelectedOptions = function updateSelectedOptions() {};

    Fib.prototype.checkCorrectAnswer = function checkCorrectAnswer() {
        var _this2 = this;

        //method used to validate the correct & incorrect answer
        // $(this.elementreference).find('.drag').addClass('pointerEvent');
        $(this.elementreference).find('.mobdrop-box').addClass('pointerEvent');
        $(this.elementreference).find('.commonClass:visible').each(function (index, item) {
            var currentOption = _this2.choices[$(item).attr('ansindex') - 1].map(function (a) {
                return a.text.toLowerCase();
            });
            $(item).attr('disabled', true);
            $(_this2.elementreference).find('.drag:visible').draggable('disable');
            if ($.inArray($(item).attr('dataValue').toLowerCase(), currentOption) !== -1) {
                $(item).parent().addClass('rightanswer');
                _this2.assessmentData.setFibClasses('rightanswer');
                _this2.assessmentData.setFibValues($(item).val());
            } else {
                $(item).parent().addClass('wronganswer');
                _this2.assessmentData.setFibClasses('wronganswer');
            }
            _this2.assessmentData.setDisableProp('disabled');
        });
        if ($(this.elementreference).find('.wronganswer:visible').length > 0) {
            $(this.elementreference).find('.alert-danger').attr('role', 'alert').show();
        } else {
            $(this.elementreference).find('.alert-success').attr('role', 'alert').show();
        }
    };

    Fib.prototype.enableCheckBtn = function enableCheckBtn(event) {

        if ($(this.elementreference).find('.dirty:visible').length) {
            $("#checkAnswer").attr('disabled', false);
            $("#checkAnswerMobile").attr('disabled', false);
        } else {
            $("#checkAnswer").attr('disabled', true);
            $("#checkAnswerMobile").attr('disabled', true);
        }
        return true;
    };

    Fib.prototype.render = function render(pageIndex, type, templateName) {
        // method returns the desired HTML which then gets rendered.
        var contentAreaClass = '';
        this.wrongAnswerCounter = 0;
        this.rightAnswerCounter = 0;
        var idValue = type + pageIndex;

        this.elementreference = "#" + idValue;
        if (type === 'multipart') {
            pageIndex = pageIndex.replace("_", ".");
        }

        var questionTotal = this.assessmentData.getQuestionTotal();
        if (questionTotal > 1) {
            this.assessmentData.setQuestionNumber(pageIndex);
            this.assessmentData.setQuestionSeperator(":");
            this.assessmentData.setQuestionPrefix("Q");
        }
        var qNumber = this.assessmentData.getQuestionNumber();

        this.assessmentData.checkedOptionArray(this.elementreference);

        var list = "<section class=\"contentArea contentAreaClass\" id=" + idValue + ">\n                <fieldset><legend>\n                <section  class=\"question\">\n                <div class=\"stem\">\n                <div class=\"qst\"><span class=\"fixedSpan\">Q" + ($('#prev').css('display') == 'none' && type != 'multipart' ? qNumber != null ? qNumber : "" : pageIndex) + ":&nbsp;</span> " + this.assessmentData.getQuestionText() + "</div>\n                </div>\n                </section>\n                <div class=\"instruction\">" + this.assessmentData.getInstructionText() + "</div>\n                </legend>" + (this.assessmentData.setFibQuestions(this.assessmentData.getFibRawText()) || '') + "\n                <section class=\"activity " + (this.assessmentData.getFibQuestionTextMob().search("div") > -1 ? 'desk' : '') + "\">\n                <div id=\"media\" class=" + this.mediaClass() + ">" + this.loadMedia() + "</div>\n                <div class=\"options\">" + this.assessmentData.getFibQuestionText() + "</div>\n                <div class=\"dragContainer\">" + (JSON.stringify(this.assessmentData).search('dragdrop') != -1 ? this.renderDraggableContent() : '') + "</div>\n                <div class=\"clearfix\"></div>\n                </section>\n                <section class=\"activity mob " + (this.assessmentData.getFibQuestionTextMob().search("div") > -1 ? '' : 'hide-elm') + "\">\n                <div id=\"media\"></div>\n                <div class=\"options\">" + this.assessmentData.getFibQuestionTextMob() + "</div>\n                <div class=\"dragContainer\"></div>\n                <div class=\"fib drop-list-content-mobile\" style=\"display:none\">\n                <button type=\"button\" class=\"minimize\"><i class=\"fa fa-chevron-circle-down\"></i></button>\n                <h6>Choose A Word</h6>\n                <ul class=\"divDrpItems\">\n                " + this.renderOptions() + "\n                </ul>\n                </div>\n                <div class=\"clearfix\"></div>\n                </section>\n                </fieldset>";
        list += this.addGlobalLabelFeedBack(type);
        list += "</section>";
        return list;
    };

    Fib.prototype.renderOptions = function renderOptions() {
        var html = "";
        var dragElems = this.assessmentData.getDraggables();
        dragElems.map(function (i, k) {
            i.map(function (item) {
                html += "<li class=\"mobOpts\">" + item + "</li>";
            });
        });
        return html;
    };

    Fib.prototype.renderDraggableContent = function renderDraggableContent() {
        var html = "<div class=\"fib drop-list-content  dragpanel col-sm-12 col-md-12 top-matching\" style=\"min-height:50px;\">            <div class=\"arrow up\"></div><div class=\"drag-container \" style=\"min-height:50px;\"><div class=\"divDrpItems\" data-              containment=\".contentArea\" data-drag-active=\"true\" data-draggable=\"\" data-drag-id=\"0\" data-drag-class=\"drag-class\"            data-drop-class=\"drop-class-2\" data-clone-drop=\"1\" data-max-clone-drop=\"1\">";
        var dragElems = this.assessmentData.getDraggables();
        dragElems.map(function (i, k) {
            i.map(function (item) {
                html += item;
            });
        });
        html += "</span></div></div>";
        return html;
    };

    Fib.prototype.retry = function retry() {
        var _this3 = this;

        $(this.elementreference).find('.drag').draggable('enable');
        $('.commonClass').attr('dataValue', '');
        //$('.commonClass').attr('dataValue','');

        //  mobdrop-box
        //$(this.elementreference).find('.mobdrop-box').removeClass('pointerEvent');
        $(this.elementreference).find('.mobOpts>.drag').draggable('disable');
        $(this.elementreference).find('.commonClass').find('.mobOpts:visible').appendTo($('ul.divDrpItems'));
        $(this.elementreference).find('.commonClass').find('.drag:visible').appendTo($('div.divDrpItems'));
        $(this.elementreference).find('.fibclass').removeClass('wronganswer');
        $(this.elementreference).find('.fibclass').removeClass('rightanswer');
        $(this.elementreference).find('.commonClass').attr('disabled', false).removeClass('DropFIBCanvasCSS dirty pointerEvent');
        $(this.elementreference).find('.commonClass').val("");
        this.assessmentData.setDisableProp('enabled');
        this.assessmentData.setFibClasses('empty');
        this.assessmentData.setFibValues('empty');
        this.assessmentData.draggables = [];
        $(this.elementreference).find('.commonClass').each(function (indx, item) {
            _this3.assessmentData.setDirtyClass(' ', $(item).attr('ansIndex') - 1);
            _this3.assessmentData.setDataValue('', $(item).attr('ansIndex') - 1);
        });
        $(this.elementreference).find('.mobOpts>.drag').each(function (ind, item) {
            _this3.assessmentData.addDraggables(item.outerHTML);
        });
        //        $(this.elementreference).find('.drag:visible').not('.mobOpts>.drag').each((ind, item) => {
        //            this.assessmentData.addDraggables(item.outerHTML);
        //        });
    };

    return Fib;
})(_mcq2["default"]);

exports["default"] = Fib;
module.exports = exports["default"];

},{"./mcq":19}],16:[function(require,module,exports){
/**
 * Created by  tarique hussain on 16-12-2016.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _assessmentsSaveState = require('../assessments/saveState');

var _assessmentsSaveState2 = _interopRequireDefault(_assessmentsSaveState);

var _mainActivity = require('./mainActivity');

var _mainActivity2 = _interopRequireDefault(_mainActivity);

var _template_provider = require('./template_provider');

var _template_provider2 = _interopRequireDefault(_template_provider);

var Incontext = (function (_MainActivity) {
    _inherits(Incontext, _MainActivity);

    function Incontext(assessmentData) {
        _classCallCheck(this, Incontext);

        _MainActivity.call(this);
        this.assessmentData = assessmentData;
        this.subQuestions = this.getSubQuestions(this.assessmentData);
        this.elementreference = null;
        this.currentIndex = null;
    }

    Incontext.prototype.getSubQuestions = function getSubQuestions(assessmentData) {
        var subQuestionArray = [];
        for (var i = 0; i < assessmentData.subQuestions.length; i++) {
            subQuestionArray.push(_template_provider2['default'].get(assessmentData.subQuestions[i]));
        }
        return subQuestionArray;
    };

    Incontext.prototype.bindEvents = function bindEvents(type) {
        if (type != 'multipart') {
            $("#retryMultipart").hide();
            $("#retryMultipartMobile").hide();
            $("#submitMultipart").hide();
            $("#submitMultipartMobile").hide();
        }
        for (var i = 0; i < this.subQuestions.length; i++) {
            this.subQuestions[i].bindEvents('multipart');
        }
        //        $('.qst').find("li").eq(0).css({
        //            'list-style-type': 'none'
        //        });
        $(this.elementreference).off("click", ".sentences").on("click", ".sentences", this.openModal.bind(this));
        $(this.elementreference).off("click", ".close").on("click", ".close", this.hideModal.bind(this));
        $(this.elementreference).off("click", "#submitIncontext").on("click", "#submitIncontext", this.checkCorrectAnswer.bind(this));
        $(this.elementreference).off("click", "#retryIncontext").on("click", "#retryIncontext", this.retry.bind(this));
        $(document).off("keydown", "body").on("keydown", "body", this.detectKeyPress.bind(this));
        $("#checkAnswer,#checkAnswerMobile").hide();
        //$(document).off("click", "#myModalContext").on("click", "#myModalContext", this.detectClick.bind(this));
        $(document).off("focus", "#dummyDivContext").on("focus", "#dummyDivContext", this.shiftFocus.bind(this));
    };

    Incontext.prototype.render = function render(pageIndex, type) {
        // method returns the desired HTML which then gets rendered.
        var idValue = "mcq_" + pageIndex;
        var hideBtnClass = '';
        this.elementreference = "#" + idValue;

        if (type === 'multipart') {
            pageIndex = pageIndex.replace("_", ".");
            hideBtnClass = 'hideBtn';
        }

        var questionTotal = this.assessmentData.getQuestionTotal();
        if (questionTotal > 1) {
            this.assessmentData.setQuestionNumber(pageIndex);
            this.assessmentData.setQuestionSeperator(":");
            this.assessmentData.setQuestionPrefix("Q");
        }
        var qNumber = this.assessmentData.getQuestionNumber();

        var watch_exp_button = undefined;
        if (typeof this.assessmentData.getExplanationVideoSet().collection !== 'undefined') {
            watch_exp_button = '<button class="btn btn-primary submitBtns multiplevideo">Watch Explanation</button>';
        } else {
            watch_exp_button = '';
        }

        var question_stem_style = undefined;
        if (this.assessmentData.getQuestionStemStatus() !== 1) {
            question_stem_style = 'style="display:none"';
        } else {
            question_stem_style = '';
        }
        var q_stem_space = '';
        if (this.assessmentData.getQuestionPrefix() == '' && qNumber == '' && this.assessmentData.getQuestionSeperator() == '') {
            q_stem_space = '';
        } else {
            q_stem_space = '&nbsp;';
        }

        var list = ' <section class="contentArea" id=' + idValue + '>\n<fieldset><legend>\n                    <section  class="question">\n                   <div class="stem">\n                    <div class="qst" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '><span class="fixedSpan qstText">' + this.assessmentData.getQuestionPrefix() + ($('#prev').css('display') == 'none' && type != 'multipart' ? qNumber != null ? qNumber == "" ? "" : qNumber : "" : qNumber == "" ? "" : qNumber) + (this.assessmentData.getQuestionSeperator() == "" ? "" : this.assessmentData.getQuestionSeperator()) + q_stem_space + '</span> <div class="qstTextRight">' + this.assessmentData.getQuestionText() + '  </div><div class="clearfix"></div></div>\n                    </div>\n                    </section>\n  <div class="instruction" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '>' + (this.assessmentData.getQuestionStemStatus() !== 1 ? '' : this.assessmentData.getInstructionText()) + '<div class="clearfix"></div></div>\n</legend>\n                    <section class="activity">\n                    <div id="media" class=' + this.mediaClass() + '>' + this.loadMedia() + '</div>\n                    <div id="sentenceLoader">' + this.renderSentences() + ' <div class="clearfix"></div></div>\n                    <div class="clearfix" style="padding-top:5px"></div>' + watch_exp_button + '\n                    </section><div id="myModalContext" class="modalContext"><div class="modal-contentContext"><button tabindex="0" class="close">x</button><div class="modal-body contextBody" >' + this.loadModal() + '</div><footer id=\'modalfooter\'><button disabled id="submitIncontext" class="btn btn-primary ' + hideBtnClass + ' ' + this.assessmentData.getMultipartBtnClass() + ' btn btn-primary submitBtns" >Submit</button><button id="retryIncontext" class="btn btn-primary ' + this.assessmentData.getMultipartRetryClass() + ' ' + hideBtnClass + '" >Retry</button></footer>  <div class="clearfix"></div></div></div><div tabindex="0" id="dummyDivContext"></div></fieldset>';
        list += '</section>';
        return list;
    };

    Incontext.prototype.renderSentences = function renderSentences() {
        var sentences = this.assessmentData.getSentences(),
            htmlstr = "";
        sentences.map(function (value, key) {
            htmlstr += '(' + (key + 1) + ')&nbsp<a class="sentences" href="javascript:void(0)" index=' + (key + 1) + '>' + value + '</a>&nbsp';
        });
        return htmlstr;
    };

    Incontext.prototype.loadModal = function loadModal() {
        var html = '',
            subQuestion = undefined;
        for (var i = 0; i < this.subQuestions.length; i++) {
            html += this.subQuestions[i].render(i + 1, 'incontext' + this.elementreference.replace('#', ''), 'incontext');
        }
        return html;
    };

    Incontext.prototype.openModal = function openModal(event) {
        if (event.target.tagName != "A") {
            this.currentIndex = $(event.target).parents('a').attr('index');
        } else {
            this.currentIndex = event.target.getAttribute('index');
        }
        this.showModal();
    };

    Incontext.prototype.hideModal = function hideModal(event) {
        $(this.elementreference).find('#myModalContext').hide();
        $('body').css({
            'overflow': 'auto'
        });
    };

    Incontext.prototype.detectKeyPress = function detectKeyPress(event) {
        if (event.keyCode === 27) {
            this.hideModal();
        } else {
            this.trapTabKey(event);
        }
    };

    Incontext.prototype.detectClick = function detectClick() {
        if (event.target.getAttribute('id') === 'myModalContext') {
            this.hideModal();
        }
    };

    Incontext.prototype.checkCorrectAnswer = function checkCorrectAnswer(type) {
        $(this.elementreference).find('#myModalContext').find("#retryIncontext").show();
        $(this.elementreference).find('#myModalContext').find("#submitIncontext").hide();
        var isAnswerGiven = [];
        if (type === 'multipart') {
            for (var i = 0; i < this.subQuestions.length; i++) {
                isAnswerGiven.push(this.subQuestions[i].checkCorrectAnswer());
                this.subQuestions[i].updateSelectedOptions();
            }
            if (isAnswerGiven.indexOf(false) === -1) {
                return true;
            }
            return false;
        }
        this.subQuestions[this.currentIndex - 1].checkCorrectAnswer();
        this.subQuestions[this.currentIndex - 1].updateSelectedOptions();
        $("#submitIncontext").prop('disabled', true);
        $('#retryIncontext').focus();
    };

    Incontext.prototype.trapTabKey = function trapTabKey(e) {
        if (e.keyCode === 9) {
            if (e.shiftKey) {
                if (document.activeElement === this.firstTabStop) {
                    e.preventDefault();
                    this.lastTabStop.focus();
                }
            } else {
                if (document.activeElement === this.lastTabStop) {
                    e.preventDefault();
                    this.firstTabStop.focus();
                }
            }
        }
    };

    Incontext.prototype.showModal = function showModal() {
        $(this.elementreference).find('#myModalContext').find(".contentArea").hide();
        var currentSubTemplate = "#incontext" + this.elementreference.replace('#', '') + this.currentIndex;
        $(this.elementreference).find('#myModalContext').find(currentSubTemplate).show();
        $(this.elementreference).find('#myModalContext').show();
        var focusableElementsString = 'input:not([disabled]),[tabindex="0"]';
        var focusableElements = document.getElementById(currentSubTemplate.replace('#', '')).querySelectorAll(focusableElementsString);
        var focusableElements = Array.prototype.slice.call(focusableElements);
        var firstTabStop = $('.close')[0];
        var lastTabStop = $('#dummyDivContext')[0];
        if ($(this.elementreference).find('#myModalContext').find("#incontext" + this.elementreference.replace('#', '') + this.currentIndex).find('.rightanswer').length > 0 || $(this.elementreference).find('#myModalContext').find("#incontext" + this.elementreference.replace('#', '') + this.currentIndex).find('.wronganswer').length > 0) {
            $(this.elementreference).find('#myModalContext').find("#submitIncontext").hide();
            $(this.elementreference).find('#myModalContext').find("#retryIncontext").show();
        } else if ($(this.elementreference).find('#myModalContext').find("#incontext" + this.elementreference.replace('#', '') + this.currentIndex).find('.selected').length > 0) {
            $(this.elementreference).find("#submitIncontext").prop('disabled', false);
            $(this.elementreference).find('#myModalContext').find("#submitIncontext").show();
            $(this.elementreference).find('#myModalContext').find("#retryIncontext").hide();
        } else {
            $(this.elementreference).find("#submitIncontext").prop('disabled', true);
            $(this.elementreference).find('#myModalContext').find("#submitIncontext").show();
            $(this.elementreference).find('#myModalContext').find("#retryIncontext").hide();
        }
        $('body').css({
            'overflow': 'hidden'
        });
        this.shiftFocus();
    };

    Incontext.prototype.shiftFocus = function shiftFocus() {
        setTimeout(function () {
            $('.close').focus();
        }, 300);
    };

    Incontext.prototype.updateSelectedOptions = function updateSelectedOptions() {
        return false;
    };

    Incontext.prototype.retry = function retry(type) {
        $("#submitIncontext").focus();
        this.assessmentData.setMultipartFeedBackClassIncorrect('hideAnswer');
        this.assessmentData.setMultipartFeedBackClassCorrect('hideAnswer');
        $(this.elementreference).find('#myModalContext').find(".inputClass").removeClass('pointerEvent');
        $(this.elementreference).find('#myModalContext').find('.alert').hide().removeClass('show');
        $(this.elementreference).find('#myModalContext').find("#retryIncontext").hide();
        $(this.elementreference).find('#myModalContext').find("#submitIncontext").show().prop('disabled', true);;
        this.assessmentData.setMultipartRetryBtnClass('hideAnswer');
        this.assessmentData.setMultipartBtnClass('showAnswer');
        if (type === 'multipart') {
            for (var i = 0; i < this.subQuestions.length; i++) {
                this.subQuestions[i].retry();
            }
            return;
        }
        this.subQuestions[this.currentIndex - 1].retry();
    };

    return Incontext;
})(_mainActivity2['default']);

exports['default'] = Incontext;
module.exports = exports['default'];

},{"../assessments/saveState":6,"./mainActivity":17,"./template_provider":24}],17:[function(require,module,exports){
/*created by tarique*/

"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainActivity = (function () {
    function MainActivity() {
        _classCallCheck(this, MainActivity);

        if (this.constructor === MainActivity) {
            throw new Error("Abstract class can not be instantiated");
        }
    }

    MainActivity.prototype.loadMedia = function loadMedia() {
        //returns an iframe with the media

        var frameHtml = "",
            mediaUrl = this.assessmentData.getMediaParameters('url'),
            mediaType = this.assessmentData.getMediaParameters('type'),
            assetType = this.assessmentData.getMediaParameters('assetType');
        if (mediaUrl !== "") {
            switch (assetType) {

                case null:
                    frameHtml += "<div class=\"embed-responsive embed-responsive-16by9\"><iframe title='brightcove' class=\"mediaLoader multiMedia\" frameborder=\"0\" src=" + mediaUrl + " height=" + this.assessmentData.getMediaParameters('height') + " width=" + this.assessmentData.getMediaParameters('width') + " allowfullscreen=\"allowfullscreen\" webkitallowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"allowfullscreen\"  style=\"max-width: 100%\"></iframe></div>";
                    break;
                case 'image':
                    frameHtml += "<img class=\"multiMedia\"  tabindex=0 alt='image' src=" + mediaUrl + " >";
                    break;
                case 'video':
                    frameHtml += "<video class=\"multiMedia\" tabindex=0 alt='video' width=\"400\" controls>\n       <source src=" + mediaUrl + "  type=\"video/mp4\">\n       </video>";
                    break;
            }
        }
        return frameHtml;
    };

    MainActivity.prototype.mediaClass = function mediaClass() {
        //method for getting the class related to media
        if (this.assessmentData.getMediaParameters('url') !== "") {
            switch (this.assessmentData.getMediaParameters('assetType')) {
                case null:
                    return 'media';
                    break;
                default:
                    return 'resizer media';
            }
        }
    };

    return MainActivity;
})();

exports["default"] = MainActivity;
module.exports = exports["default"];

},{}],18:[function(require,module,exports){
/**
 * Created by debayan.das on 19-09-2016.
 */
/** 
 *edited by tarique hussain
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mcq = require("./mcq");

var _mcq2 = _interopRequireDefault(_mcq);

var MCMS = (function (_MCQ) {
    _inherits(MCMS, _MCQ);

    function MCMS(assessmentData) {
        _classCallCheck(this, MCMS);

        _MCQ.call(this);
        this.assessmentData = assessmentData;
        this.elementreference = null;
    }

    MCMS.prototype.bindEvents = function bindEvents(type) {
        if (type != 'multipart') {
            $("#retryMultipart").hide();
            $("#retryMultipartMobile").hide();
            $("#submitMultipart").hide();
            $("#submitMultipartMobile").hide();
        }
        $(this.elementreference).on("click", "input", this.selectAnswers.bind(this));
        _MCQ.prototype.bindEvents.call(this);
    };

    MCMS.prototype.selectAnswers = function selectAnswers() {
        //method used to add a styles to options
        this.buttonSetterForIncontext();
        //$(event.target).prop('checked', true);
        if ($(this.elementreference).find('input[name="optionsRadios"]:checked').length === 0) {
            $("#checkAnswer,#checkAnswerMobile").attr('disabled', true);
            $('#submitIncontext').attr('disabled', true);
        } else {
            $("#checkAnswer,#checkAnswerMobile").attr('disabled', false);
            $('#submitIncontext').attr('disabled', false);
        }
        $(this.elementreference).find('input[name="optionsRadios"]:not(:checked)').parents('.option').removeClass('selected');
        $(this.elementreference).find('input[name="optionsRadios"]:checked').parents('.option').addClass('selected');
        $(this.elementreference).find('.options .option').removeClass('rightanswer wronganswer');
        if ($(this.elementreference).find('input:checked').length === 0) {
            return;
        }
        var chekedIndxArr = [],
            checkedIndx = $(this.elementreference).find('input:checked');
        if (checkedIndx.length > 0) {
            for (var i = 0; i < checkedIndx.length; i++) {
                chekedIndxArr.push(parseInt(checkedIndx.eq(i).attr("id").split('checkbox')[1]));
            }
        }
        this.assessmentData.setPinanswer(chekedIndxArr);
    };

    MCMS.prototype.checkCorrectAnswer = function checkCorrectAnswer() {
        //method used to check the response
        this.assessmentData.setTextAreaAttr('disabled');
        this.assessmentData.resetPinanswer();
        this.assessmentData.setTextAreaAriaDisabled('true');
        $(this.elementreference).find('input[type="checkbox"]').attr('aria-disabled', 'true').prop('disabled', true);
        var correctChoiceId = [];
        var selectedbtnId = $(this.elementreference).find('input:checked');
        if (selectedbtnId.length === 0) {
            return false;
        }
        if (selectedbtnId.length === this.assessmentData.getCorrectAnswers().length) {
            var totalCorrect = true;
            for (var i = 0; i < this.assessmentData.getCorrectAnswers().length; i++) {
                correctChoiceId.push(this.assessmentData.getCorrectAnswers()[i].choiceid);
            }
            for (var i = 0; i < selectedbtnId.length; i++) {
                if (correctChoiceId.indexOf(parseInt($(selectedbtnId[i]).attr("id").split('checkbox')[1])) === -1) {
                    totalCorrect = false;
                }
            }
            if (totalCorrect) {
                selectedbtnId.parents('.option').removeClass('selected').addClass('rightanswer');
                $(this.elementreference).find('.alert-success').attr('role', 'alert').show();
            } else {
                selectedbtnId.parents('.option').removeClass('selected').addClass('wronganswer');
                $(this.elementreference).find('.alert-danger').attr('role', 'alert').show();
            }
        } else {
            selectedbtnId.parents('.option').removeClass('selected').addClass('wronganswer');
            $(this.elementreference).find('.alert-danger').attr('role', 'alert').show();
        }
    };

    MCMS.prototype.render = function render(pageIndex, type, templateName) {
        // method returns the desired HTML which then gets rendered.
        this.wrongAnswerCounter = 0;
        this.rightAnswerCounter = 0;
        var contentAreaClass = '';
        var idValue = type + pageIndex;
        this.elementreference = "#" + idValue;

        if (type === 'multipart') {
            pageIndex = pageIndex.replace("_", ".");
        }
        if (templateName === 'incontext') {
            contentAreaClass = 'contentAreaClass';
        }

        var questionTotal = this.assessmentData.getQuestionTotal();
        if (questionTotal > 1) {
            this.assessmentData.setQuestionNumber(pageIndex);
            this.assessmentData.setQuestionSeperator(":");
            this.assessmentData.setQuestionPrefix("Q");
        }
        var qNumber = this.assessmentData.getQuestionNumber();

        this.assessmentData.checkedOptionArray(this.elementreference);
        var watch_exp_button = undefined;
        if (typeof this.assessmentData.getExplanationVideoSet().collection !== 'undefined') {
            watch_exp_button = '<button class="btn btn-primary submitBtns multiplevideo">Watch Explanation</button>';
        } else {
            watch_exp_button = '';
        }

        var question_stem_style = undefined;
        if (this.assessmentData.getQuestionStemStatus() !== 1) {
            question_stem_style = 'style="display:none"';
        } else {
            question_stem_style = '';
        }
        var q_stem_space = '';
        if (this.assessmentData.getQuestionPrefix() == '' && qNumber == '' && this.assessmentData.getQuestionSeperator() == '') {
            q_stem_space = '';
        } else {
            q_stem_space = '&nbsp;';
        }

        var list = "<section class=\"contentArea contentAreaClass\" id=" + idValue + ">\n                    <fieldset><legend>\n                    <section class=\"question\">\n                    <div class=\"stem\">\n                    <div class=\"qst\" " + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + "><span class=\"fixedSpan qstText\">" + this.assessmentData.getQuestionPrefix() + ($('#prev').css('display') == 'none' && type != 'multipart' ? qNumber != null ? qNumber == "" ? "" : qNumber : "" : qNumber == '' ? '' : qNumber) + "" + (this.assessmentData.getQuestionSeperator() == '' ? '' : this.assessmentData.getQuestionSeperator()) + q_stem_space + "</span><div class=\"qstTextRight\">" + this.assessmentData.getQuestionText() + "  </div><div class=\"clearfix\"></div></div>\n                    </div>\n                    </section>\n                    <section class=\"activity\">\n                    <div class=\"instruction\" " + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + ">" + (this.assessmentData.getQuestionStemStatus() !== 1 ? '' : this.assessmentData.getInstructionText()) + "<div class=\"clearfix\"></div></div>\n                    </legend>\n                    <div id=\"media\" class=" + this.mediaClass() + ">" + this.loadMedia() + "</div>\n                    <div class=\"options\">" + this.getChoiceList(this.elementreference) + " <div class=\"clearfix\"></div></div>\n                    <div class=\"clearfix\" style=\"padding-top:5px\"></div>" + watch_exp_button + "\n                    <div class=\"clearfix\"></div>\n                    </section>\n                    </fieldset>";
        list += this.addGlobalLabelFeedBack(type);
        list += "</section>";
        if (this.wrongAnswerCounter > 0) {
            return list.replace(/rightanswer/g, 'wronganswer');
        } else if (this.rightAnswerCounter !== this.assessmentData.getCorrectAnswers().length) {
            return list.replace(/rightanswer/g, 'wronganswer');
        } else {
            return list;
        }
    };

    MCMS.prototype.getChoiceList = function getChoiceList(ref) {
        // method return the checkbox option html
        var choiceList = "",
            allChoices = this.assessmentData.getChoices();
        for (var i = 0; i < allChoices.length; i++) {
            choiceList += "<div class=\"col-md-12\">\n                            <div class=\"option " + this.checkItemAttemptState(allChoices[i], ref) + "\">\n                            <div class=\"checkbox inputClass\">\n                            <label><input type=\"checkbox\" name=\"optionsRadios\" id=\"checkbox" + (i + 1) + "\"                                               value=\"option" + (i + 1) + "\" " + this.isItemChecked(allChoices[i], ref) + " " + this.assessmentData.getTextAreaAttr() + ">" + allChoices[i].text + "</label>\n                            </div>\n                            <div class=\"sign\"><div class=\"sr-only\"></div><span class=\"fa\"></span>  <div class=\"clearfix\"></div></div>\n                              <div class=\"clearfix\"></div></div>\n                            </div>";
        }
        return choiceList;
    };

    return MCMS;
})(_mcq2["default"]);

exports["default"] = MCMS;
module.exports = exports["default"];

},{"./mcq":19}],19:[function(require,module,exports){
/*created by tarique*/
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mainActivity = require('./mainActivity');

var _mainActivity2 = _interopRequireDefault(_mainActivity);

var MCQ = (function (_MainActivity) {
    _inherits(MCQ, _MainActivity);

    function MCQ() {
        _classCallCheck(this, MCQ);

        _MainActivity.call(this);
        if (this.constructor === MCQ) {
            throw new Error("Abstract class can not be instantiated");
        }
        this.pageIndex = 1;
    }

    MCQ.prototype.bindEvents = function bindEvents() {
        //method binds click events checkbox & radio button
        $('.feedBackIcon').off().on('click keypress', function (e) {
            if (e.keyCode === 13 || e.type === "click") {
                var feedBackText = [];
                //debugger;
                //                  var arr1=this.regexManager('<math xmlns="http://www.w3.org/1998/Math/MathML">',$(e.target).siblings().html());
                //                  var arr2=this.regexManager('</math></script>',$(e.target).siblings().html());
                //                this.replaceMathml(arr1,arr2,$(e.target).siblings().html());
                var index = 0;
                feedBackText = $(e.target).siblings().html().split('|#@~');
                //feedBackText[0]=feedBackText.replace(feedBackText[0].replace(feedBackText[0].substr(feedBackText[0].indexOf())))
                //                if(feedBackText[1].indexOf('<math xmlns')!=-1){
                //                    index=feedBackText[1].indexOf('<math xmlns');
                //                }
                if ($(e.target).parents('.rightanswer').length) {
                    $('#modalBodyPanel').html(feedBackText[0].substring(index)).attr('role', 'alert');
                } else if ($(e.target).parents('.wronganswer').length) {
                    $('#modalBodyPanel').html(feedBackText[1].substring(index)).attr('role', 'alert');
                }
                //MathJax.Hub.Queue(["Typeset",MathJax.Hub, "modalBodyPanel"]);
                $('#myModal').modal('show');
            }
        });
    };

    //    regexManager(pat,c){
    //            var regexp = new RegExp(pat, 'g')
    //            var foo = c;
    //            var match, matches = [];
    //            while ((match = regexp.exec(foo)) != null) {
    //           matches.push(match.index);
    //}
    //        return matches
    //    }
    //    replaceMathml(arr1,arr2,str){
    //        debugger;
    //    }

    MCQ.prototype.retry = function retry() {
        //method allows user to retry for a question
        this.assessmentData.resetPinanswer();
        this.assessmentData.resetSelectedOption();
        this.assessmentData.setTextAreaAriaDisabled('false');
        this.assessmentData.setTextAreaAttr('');
        $(this.elementreference).find('input[type="radio"]').attr('aria-disabled', 'false').prop('disabled', false);
        $(this.elementreference).find('input[type="radio"]').prop('disabled', false);
        $(this.elementreference).find('input[type="checkbox"]').prop('disabled', false);
        $(this.elementreference).find("#checkAnswer,#checkAnswerMobile").attr('disabled', true);
        $(this.elementreference).find('input[type="radio"]:checked').prop('checked', false);
        $(this.elementreference).find('input[type="checkbox"]:checked').prop('checked', false);
        $(this.elementreference).find('input[type="radio"]').parents('.option').removeClass('selected wronganswer rightanswer');
        $(this.elementreference).find('input[type="checkbox"]').parents('.option').removeClass('selected wronganswer rightanswer');
    };

    MCQ.prototype.isItemChecked = function isItemChecked(item, ref) {
        //method for checking the item is already selected or not
        if (this.assessmentData.selectedOptions[ref] === undefined) {
            return false;
        }
        if (this.assessmentData.selectedOptions[ref].length === 0) {
            return item.pinanswer === 1 ? "checked" : "";
        }
        return this.assessmentData.selectedOptions[ref].indexOf(String(item.choiceid)) > -1 ? "checked" : "";
    };

    MCQ.prototype.isCorrectFedbckVisible = function isCorrectFedbckVisible(wrongAnswerCounter, rightAnswerCounter) {
        //method decide the flag to show the correct feedback panel
        if (wrongAnswerCounter === 0 && rightAnswerCounter === 0 || wrongAnswerCounter > 0 || rightAnswerCounter !== this.assessmentData.getCorrectAnswers().length) {
            return;
        }
        return 'show';
    };

    MCQ.prototype.isInCorrectFedbckVisible = function isInCorrectFedbckVisible(wrongAnswerCounter, rightAnswerCounter) {
        //method decide the flag to show the incorrect feedback panel
        if (wrongAnswerCounter > 0 && rightAnswerCounter !== this.assessmentData.getCorrectAnswers().length) {
            return 'show';
        }
        if (wrongAnswerCounter === 0 && rightAnswerCounter === 0) {
            return;
        }
        return;
    };

    MCQ.prototype.updateSelectedOptions = function updateSelectedOptions() {
        //method for updating selected option
        var selectedInput = $(this.elementreference).find('input:checked');
        for (var i = 0; i < selectedInput.length; i++) {
            this.assessmentData.addSelectedOption(this.elementreference, $(this.elementreference).find(selectedInput[i]).attr("id").split('checkbox')[1]);
        }
    };

    MCQ.prototype.checkItemAttemptState = function checkItemAttemptState(item, ref) {
        //method return the classname for already selected right or wrong answer
        if (this.assessmentData.selectedOptions[ref] === undefined) {
            return;
        }
        if (this.assessmentData.selectedOptions[ref].length === 0 && item.pinanswer === 1) {
            return "selected";
        }
        if (this.assessmentData.selectedOptions[ref].length > 0) {
            return this.submittedCheckedItemState(item, ref);
        }
    };

    MCQ.prototype.submittedCheckedItemState = function submittedCheckedItemState(item, ref) {
        if (this.assessmentData.selectedOptions[ref].indexOf(String(item.choiceid)) === -1) {
            return;
        }
        if (this.assessmentData.selectedOptions[ref].indexOf(String(item.choiceid)) > -1 && item.assess === true) {
            this.rightAnswerCounter++;
            return "rightanswer";
        }
        if (this.assessmentData.selectedOptions[ref].indexOf(String(item.choiceid)) > -1 && item.assess === false) {
            this.wrongAnswerCounter++;
            return "wronganswer";
        }
    };

    MCQ.prototype.addGlobalLabelFeedBack = function addGlobalLabelFeedBack(type) {
        //method return the global correct & incorrect feedback html
        if (type === 'multipart') {
            return "";
        }
        var globalFeedbackHtml = '';
        if (this.assessmentData.getGlobalCorrectFeedback().replace(/^\s+|\s+$/gm, '') !== "") {
            globalFeedbackHtml += '<div class="alert alert-success ' + this.isCorrectFedbckVisible(this.wrongAnswerCounter, this.rightAnswerCounter) + '" >' + this.assessmentData.getGlobalCorrectFeedback().replace(/(<p[^>]+?>|<p>|<\/p>)/img, "") + '<div class="clearfix"></div></div>';
        }
        if (this.assessmentData.getGlobalInCorrectFeedback().replace(/^\s+|\s+$/gm, '') !== "") {
            globalFeedbackHtml += '<div class="alert alert-danger ' + this.isInCorrectFedbckVisible(this.wrongAnswerCounter, this.rightAnswerCounter) + '" >' + this.assessmentData.getGlobalInCorrectFeedback().replace(/(<p[^>]+?>|<p>|<\/p>)/img, "") + '<div class="clearfix"></div></div>';
        }
        return globalFeedbackHtml;
    };

    MCQ.prototype.buttonSetterForIncontext = function buttonSetterForIncontext() {
        $("#submitIncontext").prop('disabled', false);
    };

    return MCQ;
})(_mainActivity2['default']);

exports['default'] = MCQ;
module.exports = exports['default'];

},{"./mainActivity":17}],20:[function(require,module,exports){
/**
 * Created by debayan.das on 19-09-2016.
 */
/** 
 *edited by tarique hussain
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mcq = require("./mcq");

var _mcq2 = _interopRequireDefault(_mcq);

var MCSS = (function (_MCQ) {
    _inherits(MCSS, _MCQ);

    function MCSS(assessmentData) {
        _classCallCheck(this, MCSS);

        _MCQ.call(this);
        this.assessmentData = assessmentData;
        this.elementreference = null;
    }

    MCSS.prototype.bindEvents = function bindEvents(type) {
        if (type != 'multipart') {
            $("#retryMultipart").hide();
            $("#retryMultipartMobile").hide();
            $("#submitMultipart").hide();
            $("#submitMultipartMobile").hide();
        }
        $(this.elementreference).off("click", "input").on("click", "input", this.selectAnswers.bind(this));
        _MCQ.prototype.bindEvents.call(this);
        $('.stem .qst:before').css('content', '');
        //$('.stem .qst:before').css('content','wwwwwwww');
    };

    MCSS.prototype.selectAnswers = function selectAnswers() {
        //method used to add a styles to options
        this.buttonSetterForIncontext();
        $("#checkAnswer,#checkAnswerMobile").attr('disabled', false);
        $(this.elementreference).find('input[type="radio"]:not(:checked)').parents('.option').removeClass('selected');
        $(this.elementreference).find('input[type="radio"]:checked').parents('.option').addClass('selected');
        $(this.elementreference).find('.options .option').removeClass('rightanswer wronganswer');
        this.assessmentData.resetPinanswer();
        if ($(this.elementreference).find('input:checked').length === 0) {
            return false;
        }
        this.assessmentData.setPinanswer(parseInt($(this.elementreference).find('input:checked').attr("id").split('checkbox')[1]));
    };

    MCSS.prototype.checkCorrectAnswer = function checkCorrectAnswer() {
        //method used to validate the correct & incorrect answer
        this.assessmentData.setTextAreaAriaDisabled('true');
        this.assessmentData.setTextAreaAttr('disabled');
        this.assessmentData.resetPinanswer();
        $(this.elementreference).find('input[type="radio"]').attr('aria-disabled', 'true').prop('disabled', true);
        var selectedbtnId = undefined,
            rightanswerChoiceId = undefined;
        if ($(this.elementreference).find('input:checked').length === 0) {
            return false;
        }
        selectedbtnId = $(this.elementreference).find('input[type="radio"]:checked').attr("id").split('checkbox')[1];
        if (this.assessmentData.getCorrectAnswers().length) {
            rightanswerChoiceId = this.assessmentData.getCorrectAnswers()[0].choiceid;
        } else {
            rightanswerChoiceId = "12121";
        }
        if (selectedbtnId === String(rightanswerChoiceId)) {
            $(this.elementreference).find('input[type="radio"]:checked').parents('.option').removeClass('selected').addClass('rightanswer');
            $(this.elementreference).find('.alert-success').attr('role', 'alert').show();
        } else {
            $(this.elementreference).find('input[type="radio"]:checked').parents('.option').removeClass('selected').addClass('wronganswer');
            $(this.elementreference).find('.alert-danger').attr('role', 'alert').show();
        }
    };

    MCSS.prototype.render = function render(pageIndex, type, templateName) {
        // method returns the desired HTML which then gets rendered.
        var contentAreaClass = '';
        this.wrongAnswerCounter = 0;
        this.rightAnswerCounter = 0;
        var idValue = type + pageIndex;

        if (templateName === 'incontext') {
            contentAreaClass = 'contentAreaClass';
        }
        this.elementreference = "#" + idValue;
        if (type === 'multipart') {
            pageIndex = pageIndex.replace("_", ".");
        }

        var questionTotal = this.assessmentData.getQuestionTotal();
        if (questionTotal > 1) {
            this.assessmentData.setQuestionNumber(pageIndex);
            this.assessmentData.setQuestionSeperator(":");
            this.assessmentData.setQuestionPrefix("Q");
        }
        var qNumber = this.assessmentData.getQuestionNumber();

        this.assessmentData.checkedOptionArray(this.elementreference);
        var watch_exp_button = undefined;
        if (typeof this.assessmentData.getExplanationVideoSet().collection !== 'undefined') {
            watch_exp_button = '<button class="btn btn-primary submitBtns multiplevideo">Watch Explanation</button>';
        } else {
            watch_exp_button = '';
        }

        var question_stem_style = undefined;
        if (this.assessmentData.getQuestionStemStatus() !== 1) {
            question_stem_style = 'style="display:none"';
        } else {
            question_stem_style = '';
        }
        var q_stem_space = '';
        if (this.assessmentData.getQuestionPrefix() == '' && qNumber == '' && this.assessmentData.getQuestionSeperator() == '') {
            q_stem_space = '';
        } else {
            q_stem_space = '&nbsp;';
        }

        var list = "<section class=\"contentArea contentAreaClass\" id=" + idValue + ">\n                    <fieldset><legend>\n                    <section  class=\"question\">\n                    <div class=\"stem\">\n                    <div class=\"qst\" " + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + "><span class=\"fixedSpan qstText\">" + this.assessmentData.getQuestionPrefix() + ($('#prev').css('display') == 'none' && type != 'multipart' ? qNumber != null ? qNumber == "" ? "" : qNumber : "" : qNumber == '' ? '' : qNumber) + "" + (this.assessmentData.getQuestionSeperator() == '' ? '' : this.assessmentData.getQuestionSeperator()) + q_stem_space + "</span>\n                    <div class=\"qstTextRight\">" + this.assessmentData.getQuestionText() + "  </div><div class=\"clearfix\"></div></div>\n                    </div>\n                    </section>\n                    <div class=\"instruction\" " + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + ">" + (this.assessmentData.getQuestionStemStatus() !== 1 ? '' : this.assessmentData.getInstructionText()) + "<div class=\"clearfix\"></div></div>\n                    </legend>\n                    <section class=\"activity\">\n                    <div id=\"media\" class=" + this.mediaClass() + ">" + this.loadMedia() + "</div>\n                    <div class=\"options\">" + this.getChoiceList(pageIndex, this.elementreference) + "</div>\n                    <div class=\"clearfix\" style=\"padding-top:5px\"></div>" + watch_exp_button + "\n                    <div class=\"clearfix\"></div>\n                    </section>\n                    </fieldset>";
        list += this.addGlobalLabelFeedBack(type);
        list += "</section>";
        return list;
    };

    MCSS.prototype.getChoiceList = function getChoiceList(pageIndex, ref) {
        //method build the radio button html list
        var choiceList = "",
            allChoices = this.assessmentData.getChoices();
        for (var i = 0; i < allChoices.length; i++) {
            choiceList += "<div class=\"col-md-12\">\n                            <div class=\"option " + this.checkItemAttemptState(allChoices[i], ref) + "\">\n                            <div class=\"radio inputClass\">\n                            <label><input type=\"radio\" name=\"optionsRadios" + (pageIndex + ref) + "\" aria-disabled=" + this.assessmentData.getTextAreaAriaDisabled() + " id=\"checkbox" + (i + 1) + "\" value=\"option" + (i + 1) + "\" " + this.isItemChecked(allChoices[i], ref) + " " + this.assessmentData.getTextAreaAttr() + ">" + allChoices[i].text + "</label>\n                              <div class=\"clearfix\"></div></div>\n                            <div class=\"sign\"><div class=\"sr-only\"><div class=\"clearfix\"></div></div><span class=\"fa\"></span></div>";
            if (this.addOptionLevelFeedback(allChoices[i]) !== undefined) {
                choiceList += this.addOptionLevelFeedback(allChoices[i]);
            }
            choiceList += "</div></div>";
        }
        return choiceList;
    };

    MCSS.prototype.addOptionLevelFeedback = function addOptionLevelFeedback(allChoices) {
        //method used to decide the option lebel feedback
        if (allChoices.correct_feedback.replace(/^\s+|\s+$/gm, '') !== "" && allChoices.incorrect_feedback.replace(/^\s+|\s+$/gm, '') !== "" || allChoices.correct_feedback.replace(/^\s+|\s+$/gm, '') !== '' && allChoices.assess === true || allChoices.incorrect_feedback.replace(/^\s+|\s+$/gm, '') !== '' && allChoices.assess === false) {
            var html = "<div class=\"fdback\" data-toggle=\"modal\"><div class=\"sr-only\" aria-hidden=\"true\" aria-label=\"Click to open feedback\">" + allChoices.correct_feedback + "|#@~" + allChoices.incorrect_feedback + "<div class=\"clearfix\"></div></div><span tabindex=0 class=\"fa fa-commenting feedBackIcon\"></span><div class=\"clearfix\"></div></div>";
            return html;
        }
    };

    return MCSS;
})(_mcq2["default"]);

exports["default"] = MCSS;
module.exports = exports["default"];

},{"./mcq":19}],21:[function(require,module,exports){
/*
 *created by tarique hussain on 10.20.16
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _template_provider = require('./template_provider');

var _template_provider2 = _interopRequireDefault(_template_provider);

var _mainActivity = require('./mainActivity');

var _mainActivity2 = _interopRequireDefault(_mainActivity);

var Multipart = (function (_MainActivity) {
    _inherits(Multipart, _MainActivity);

    function Multipart(assessmentData) {
        _classCallCheck(this, Multipart);

        _MainActivity.call(this);
        this.assessmentData = assessmentData;
        this.subQuestions = this.getSubQuestions(this.assessmentData);
        this.elementreference = null;
    }

    Multipart.prototype.getSubQuestions = function getSubQuestions(assessmentData) {
        var subQuestionArray = [];
        for (var i = 0; i < assessmentData.subQuestions.length; i++) {
            subQuestionArray.push(_template_provider2['default'].get(assessmentData.subQuestions[i]));
        }
        return subQuestionArray;
    };

    Multipart.prototype.bindEvents = function bindEvents() {
        //binds events to button present in DOM
        //         if($('.multi-part-main>.activity').children('#media').html()==""){
        //            $('.activity').remove();
        //        }
        if ($(this.elementreference).find('#media').html() == "") {
            $(this).remove();
        }
        $('body').off("click", "#retryMultipart").on("click", "#retryMultipart", this.retry.bind(this));
        $('body').off("click", "#retryMultipartMobile").on("click", "#retryMultipartMobile", this.retry.bind(this));
        $('body').off("click", "#submitMultipart").on("click", "#submitMultipart", this.checkAnswer.bind(this));
        $('body').off("click", "#submitMultipartMobile").on("click", "#submitMultipartMobile", this.checkAnswer.bind(this));
        for (var i = 0; i < this.subQuestions.length; i++) {
            this.subQuestions[i].bindEvents("multipart");
        }
        $(".submitBtns").hide();
        $('#submitMultipart').show();
        $('#submitMultipartMobile').show();
        $("#checkAnswer,#checkAnswerMobile").hide();
    };

    Multipart.prototype.render = function render(pageIndex, type) {
        // method returns the desired HTML which then gets rendered.
        var idValue = "mcq_" + pageIndex;
        this.elementreference = "#" + idValue;

        var questionTotal = this.assessmentData.getQuestionTotal();
        if (questionTotal > 1) {
            this.assessmentData.setQuestionNumber(pageIndex);
            this.assessmentData.setQuestionSeperator(":");
            this.assessmentData.setQuestionPrefix("Q");
        }
        var qNumber = this.assessmentData.getQuestionNumber();

        var watch_exp_button = undefined;
        if (typeof this.assessmentData.getExplanationVideoSet().collection !== 'undefined') {
            watch_exp_button = '<button class="btn btn-primary submitBtns multiplevideo">Watch Explanation</button>';
        } else {
            watch_exp_button = '';
        }

        var question_stem_style = undefined;
        if (this.assessmentData.getQuestionStemStatus() !== 1) {
            question_stem_style = 'style="display:none"';
        } else {
            question_stem_style = '';
        }
        var q_stem_space = '';
        if (this.assessmentData.getQuestionPrefix() == '' && qNumber == '' && this.assessmentData.getQuestionSeperator() == '') {
            q_stem_space = '';
        } else {
            q_stem_space = '&nbsp;';
        }

        var list = '<section class="contentArea" id=' + idValue + '>\n                    <fieldset class="multi-part-main"><legend>\n                    <section class="question">\n                    <div class="stem">\n                    <div class="qst" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '><span class="fixedSpan qstText">' + this.assessmentData.getQuestionPrefix() + ($('#prev').css('display') == 'none' && type != 'multipart' ? qNumber != null ? qNumber == "" ? "" : qNumber : "" : qNumber == "" ? "" : qNumber) + (this.assessmentData.getQuestionSeperator() == '' ? '' : this.assessmentData.getQuestionSeperator()) + q_stem_space + '</span> <div class="qstTextRight">' + this.assessmentData.getQuestionText() + '  </div><div class="clearfix"></div></div>\n                    </div>\n                    </section>\n                    <div class="instruction" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '>' + (this.assessmentData.getQuestionStemStatus() !== 1 ? '' : this.assessmentData.getInstructionText()) + '<div class="clearfix"></div></div>\n                    </legend>\n                    <section class="activity">\n                    <div id="media"  class=' + this.mediaClass() + '>' + this.loadMedia() + '</div>\n                   ' + (qNumber != null ? this.renderAllSubTemplates(qNumber) : this.renderAllSubTemplates(pageIndex)) + '\n                    <div class="clearfix" style="padding-top:5px"></div>' + watch_exp_button + '\n                    </section>\n                    </fieldset>\n <div id="correct"  class="' + this.assessmentData.getMultipartFeedBackClassCorrect() + ' alert alert-success"><strong>Feedback:</strong><br>' + this.assessmentData.getGlobalCorrectFeedback() + ' <div class="clearfix"></div></div>\n<div id="incorrect" class="' + this.assessmentData.getMultipartFeedBackClassIncorrect() + ' alert alert-danger"><strong>Feedback:</strong><br>' + this.assessmentData.getGlobalInCorrectFeedback() + '  <div class="clearfix"></div></div></section>';
        return list;
    };

    Multipart.prototype.renderAllSubTemplates = function renderAllSubTemplates(pageIndex) {
        var html = '',
            subQuestion = undefined;
        this.subQuestions.map(function (elem, index) {
            html += elem.render(pageIndex + "_" + (index + 1), 'multipart');
        });
        return html;
    };

    Multipart.prototype.checkAnswer = function checkAnswer() {
        var isAnswerGiven = [],
            that = this;
        $("#retryMultipart").show();
        $("#retryMultipartMobile").show();
        $("#submitMultipart").hide();
        $("#submitMultipartMobile").hide();
        $(".inputClass").addClass('pointerEvent');
        this.assessmentData.setMultipartRetryBtnClass('showAnswer');
        this.assessmentData.setMultipartBtnClass('hideAnswer');
        this.subQuestions.map(function (elem) {
            isAnswerGiven.push(elem.checkCorrectAnswer('multipart'));
            if (elem.assessmentData.type != 'open-ended') {
                elem.updateSelectedOptions();
            }
        });
        that.checkGlobalFeedback(isAnswerGiven);
    };

    Multipart.prototype.checkGlobalFeedback = function checkGlobalFeedback(isAnswerGiven) {
        if (isAnswerGiven.indexOf(false) === -1 && $(".wronganswer").length === 0) {
            $('p').removeAttr('role');
            $("#correct").attr('role', 'alert').show();
            $("#incorrect").hide();
            if (this.assessmentData.getGlobalCorrectFeedback() === "") {
                this.assessmentData.setMultipartFeedBackClassCorrect('hideAnswer');
                $("#correct").hide();
                return false;
            }
            this.assessmentData.setMultipartFeedBackClassCorrect('showAnswer');
            this.assessmentData.setMultipartFeedBackClassIncorrect('hideAnswer');
        } else {
            if (this.assessmentData.getGlobalInCorrectFeedback() === "") {
                this.assessmentData.setMultipartFeedBackIncorrect('hideAnswer');
                $("#incorrect").hide();
                return false;
            }
            this.assessmentData.setMultipartFeedBackClassIncorrect('showAnswer');
            this.assessmentData.setMultipartFeedBackClassCorrect('hideAnswer');
            $('p').removeAttr('role');
            $("#incorrect").attr('role', 'alert').show();
            $("#correct").hide();
        }
    };

    Multipart.prototype.retry = function retry() {
        $('p').removeAttr('role');
        this.assessmentData.setMultipartFeedBackClassIncorrect('hideAnswer');
        this.assessmentData.setMultipartFeedBackClassCorrect('hideAnswer');
        $('#modalBodyPanel').html('');
        $(".inputClass").removeClass('pointerEvent');
        $('.alert').hide().removeClass('show');
        $("#retryMultipart").hide();
        $("#retryMultipartMobile").hide();
        $("#submitMultipart").show();
        $("#submitMultipartMobile").show();
        this.assessmentData.setMultipartRetryBtnClass('hideAnswer');
        this.assessmentData.setMultipartBtnClass('showAnswer');
        this.subQuestions.map(function (elem) {
            if (elem.assessmentData.type != 'open-ended') {
                elem.retry('multipart');
                elem.updateSelectedOptions();
            }
        });
    };

    return Multipart;
})(_mainActivity2['default']);

exports['default'] = Multipart;
module.exports = exports['default'];

},{"./mainActivity":17,"./template_provider":24}],22:[function(require,module,exports){
/*
 *created by tarique hussain on 10.20.16 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mainActivity = require('./mainActivity');

var _mainActivity2 = _interopRequireDefault(_mainActivity);

var OpenWithResponse = (function (_MainActivity) {
    _inherits(OpenWithResponse, _MainActivity);

    function OpenWithResponse(assessmentData) {
        _classCallCheck(this, OpenWithResponse);

        _MainActivity.call(this);
        this.assessmentData = assessmentData;
        this.elementreference = null;
    }

    OpenWithResponse.prototype.bindEvents = function bindEvents(type) {
        if (type != 'multipart') {
            $("#retryMultipart").hide();
            $("#retryMultipartMobile").hide();
            $("#submitMultipart").hide();
            $("#submitMultipartMobile").hide();
        }
        $(this.elementreference).off("click", "#toggler2").on("click", "#toggler2", this.checkCorrectAnswer.bind(this));
        $(this.elementreference).off("blur", "#responseArea").on("blur", "#responseArea", this.textInteractivity.bind(this));
        $(this.elementreference).off("keyup", "#responseArea").on("keyup", "#responseArea", this.disableSubmitButton.bind(this));
        //        $("#responseArea").attr('title', this.assessmentData.getQuestionText().replace(/<(?:.|\n)*?>/gm, '').replace(/&nbsp;/gi,''));
        $("#responseArea").attr('title', $(this.assessmentData.getQuestionText()).text().replace(/&nbsp;/gi, ''));
        $(this.elementreference).off("click", "#toggler_hint").on("click", "#toggler_hint", this.showHint.bind(this));
    };

    OpenWithResponse.prototype.render = function render(pageIndex, type) {
        // method returns the desired HTML which then gets rendered.
        var idValue = "mcq_" + pageIndex;
        this.elementreference = "#" + idValue;

        if (type === 'multipart') {
            pageIndex = pageIndex.replace("_", ".");
        }

        var questionTotal = this.assessmentData.getQuestionTotal();
        if (questionTotal > 1) {
            this.assessmentData.setQuestionNumber(pageIndex);
            this.assessmentData.setQuestionSeperator(":");
            this.assessmentData.setQuestionPrefix("Q");
        }
        var qNumber = this.assessmentData.getQuestionNumber();

        var watch_exp_button = undefined;
        if (typeof this.assessmentData.getExplanationVideoSet().collection !== 'undefined') {
            watch_exp_button = '<button class="btn btn-primary submitBtns multiplevideo">Watch Explanation</button>';
        } else {
            watch_exp_button = '';
        }

        var question_stem_style = undefined;
        if (this.assessmentData.getQuestionStemStatus() !== 1) {
            question_stem_style = 'style="display:none"';
        } else {
            question_stem_style = '';
        }
        var q_stem_space = '';
        if (this.assessmentData.getQuestionPrefix() == '' && qNumber == '' && this.assessmentData.getQuestionSeperator() == '') {
            q_stem_space = '';
        } else {
            q_stem_space = '&nbsp;';
        }

        var hint_button = '';
        if (this.assessmentData.getQuestionHint() != '') {
            hint_button = '<button id="toggler_hint" class="btn btn-primary submitBtns">Show Hint</button>\n<div id="hint" style="display:none" class="hintText">' + this.assessmentData.getQuestionHint() + '</div><div class="clearfix"></div>';
        }
        var list = '<section class="contentArea" id=' + idValue + '>\n                    <section  class="question">\n                    <div class="stem">\n                    <div class="qst" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '><span class="fixedSpan qstText">' + this.assessmentData.getQuestionPrefix() + ($('#prev').css('display') == 'none' && type != 'multipart' ? qNumber != null ? qNumber == "" ? "" : '' + qNumber : "" : qNumber == "" ? "" : '' + qNumber) + (this.assessmentData.getQuestionSeperator() == "" ? "" : this.assessmentData.getQuestionSeperator() + '') + q_stem_space + '</span><div class="qstTextRight"> ' + this.assessmentData.getQuestionText() + '  </div><div class="clearfix"></div></div>\n                    </div>\n </section>\n                    <div  class="instruction" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '>' + (this.assessmentData.getQuestionStemStatus() !== 1 ? '' : this.assessmentData.getInstructionText()) + '<div class="clearfix"></div></div>\n                    <section class="activity">\n                    <div id="media" class=' + this.mediaClass() + '>' + this.loadMedia() + '</div>\n              ' + hint_button + '      <form>\n                    <div class="form-group">\n                    <textarea aria-disabled=' + this.assessmentData.getTextAreaAriaDisabled() + ' tabindex="' + this.assessmentData.getTabindex() + '" class="form-control" ' + this.assessmentData.getTextAreaAttr() + ' rows="5" id="responseArea" title="">' + this.assessmentData.getResponseText() + '</textarea>\n                    </div>\n                    </form>\n                    <button id="toggler2" class="btn btn-primary submitBtns ' + this.assessmentData.getOpenEndedClass() + '" ' + this.assessmentData.getdisabledClass() + '>Show Answer</button>\n                    <div class="' + this.assessmentData.getSampleAnswerClass() + ' openFeedback headingClass"><strong>Feedback:</strong><br>' + this.assessmentData.getFeedback() + '  <div class="clearfix"></div></div>\n                    <div  class="' + this.assessmentData.getSampleAnswerClass() + ' headingClass"><strong>Sample Answer:</strong><br>' + this.assessmentData.getSampleAnswer() + '  <div class="clearfix"></div></div>\n                    <div class="clearfix"></div>' + watch_exp_button + '\n                    </section>\n                    </section>';
        return list;
    };

    OpenWithResponse.prototype.textInteractivity = function textInteractivity() {
        //method extracts the text from the text area
        this.assessmentData.setResponseText($(this.elementreference).find('#responseArea').val());
    };

    OpenWithResponse.prototype.checkCorrectAnswer = function checkCorrectAnswer() {
        //method submits the form and disables the text area
        this.assessmentData.setDisabledClass('');
        this.assessmentData.setOpenEndedClass('hideBtn');
        this.assessmentData.setSampleAnswerClass('showSampleAnswer');
        this.assessmentData.setTextAreaAttr('disabled');
        this.assessmentData.setTextAreaAriaDisabled('true');
        this.assessmentData.setTabindex('-1');
        $(this.elementreference).find('.headingClass').eq(0).attr('role', 'alert').show();
        $(this.elementreference).find('.headingClass').eq(1).show();
        $(this.elementreference).find('#responseArea').prop('disabled', true);
        $(this.elementreference).find('#responseArea').attr('aria-disabled', "true");
        $(this.elementreference).find('#toggler2').hide();
        return true;
    };

    OpenWithResponse.prototype.disableSubmitButton = function disableSubmitButton() {
        if ($(this.elementreference).find("#responseArea").val() === "") {
            $(this.elementreference).find('#toggler2').prop('disabled', true);
        } else {
            $(this.elementreference).find('#toggler2').prop('disabled', false);
        }
    };

    OpenWithResponse.prototype.showHint = function showHint() {
        if ($(this.elementreference).find('#toggler_hint').text() === 'Show Hint') {
            $(this.elementreference).find('#toggler_hint').text('Hide Hint');
            $(this.elementreference).find('#hint').attr('role', 'alert').show();
        } else {
            $(this.elementreference).find('#hint').attr('style', 'display:none');
            $(this.elementreference).find('#toggler_hint').text('Show Hint');
        }
        return true;
    };

    return OpenWithResponse;
})(_mainActivity2['default']);

exports['default'] = OpenWithResponse;
module.exports = exports['default'];

},{"./mainActivity":17}],23:[function(require,module,exports){
/*
 *created by tarique hussain on 10.20.16 
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mainActivity = require('./mainActivity');

var _mainActivity2 = _interopRequireDefault(_mainActivity);

var OpenWithoutResponse = (function (_MainActivity) {
    _inherits(OpenWithoutResponse, _MainActivity);

    function OpenWithoutResponse(assessmentData) {
        _classCallCheck(this, OpenWithoutResponse);

        _MainActivity.call(this);
        this.assessmentData = assessmentData;
        this.elementreference = null;
    }

    OpenWithoutResponse.prototype.bindEvents = function bindEvents(type) {
        if (type != 'multipart') {
            $("#retryMultipart").hide();
            $("#retryMultipartMobile").hide();
            $("#submitMultipart").hide();
            $("#submitMultipartMobile").hide();
        }
        $(this.elementreference).off("click", "#toggler").on("click", "#toggler", this.checkCorrectAnswer.bind(this));
        $(this.elementreference).off("click", "#toggler_hint").on("click", "#toggler_hint", this.showHint.bind(this));
    };

    OpenWithoutResponse.prototype.render = function render(pageIndex, type) {
        // method returns the desired HTML which then gets rendered.
        var idValue = "mcq_" + pageIndex;
        this.elementreference = "#" + idValue;
        if (type === 'multipart') {
            pageIndex = pageIndex.replace("_", ".");
        }

        var questionTotal = this.assessmentData.getQuestionTotal();
        if (questionTotal > 1) {
            this.assessmentData.setQuestionNumber(pageIndex);
            this.assessmentData.setQuestionSeperator(":");
            this.assessmentData.setQuestionPrefix("Q");
        }
        var qNumber = this.assessmentData.getQuestionNumber();

        var watch_exp_button = undefined;
        if (typeof this.assessmentData.getExplanationVideoSet().collection !== 'undefined') {
            watch_exp_button = '<button class="btn btn-primary submitBtns multiplevideo">Watch Explanation</button>';
        } else {
            watch_exp_button = '';
        }

        var question_stem_style = undefined;
        if (this.assessmentData.getQuestionStemStatus() !== 1) {
            question_stem_style = 'style="display:none"';
        } else {
            question_stem_style = '';
        }
        var q_stem_space = '';
        if (this.assessmentData.getQuestionPrefix() == '' && qNumber == '' && this.assessmentData.getQuestionSeperator() == '') {
            q_stem_space = '';
        } else {
            q_stem_space = '&nbsp;';
        }
        var hint_button = '';
        if (this.assessmentData.getQuestionHint() != '') {
            hint_button = '<button id="toggler_hint" class="btn btn-primary submitBtns">Show Hint</button>\n<div id="hint" style="display:none" class="hintText">' + this.assessmentData.getQuestionHint() + '</div><div class="clearfix"></div>';
        }
        var dummy_stem_div = $("<div></div>").html(this.assessmentData.getQuestionText());
        var dummy_answer_div = $("<div></div>").html(this.assessmentData.getAnswer());

        var list = '<section class="contentArea" id=' + idValue + '>\n                    <section class="123 question">\n                    <div class="stem">\n                    <div class="qst" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '><span class="fixedSpan qstText">' + this.assessmentData.getQuestionPrefix() + ($('#prev').css('display') == 'none' && type != 'multipart' ? qNumber != null ? qNumber == "" ? "" : qNumber : "" : qNumber == "" ? "" : qNumber) + (this.assessmentData.getQuestionSeperator() == "" ? "" : this.assessmentData.getQuestionSeperator()) + q_stem_space + '</span><div class="qstTextRight">' + dummy_stem_div.html() + '  </div><div class="clearfix"></div></div>\n                    </div>\n                   </section>\n                    <div class="' + (this.assessmentData.getInstructionText() == "borderBottom" ? '' : 'instruction') + '" ' + (this.assessmentData.getQuestionStemStatus() === 2 ? question_stem_style : '') + '>' + (this.assessmentData.getQuestionStemStatus() !== 1 ? '' : this.assessmentData.getInstructionText()) + '<div class="clearfix"></div></div>\n                    <section class="activity">\n                    <div id="media" class=' + this.mediaClass() + '>' + this.loadMedia() + '</div>\n     ' + hint_button + '                <button id="toggler" class="btn btn-primary submitBtns">' + this.assessmentData.getButtonLabel() + '</button>\n                    <div id="answer" class="' + this.assessmentData.getAnswerClass() + '">' + dummy_answer_div.html() + '<div class="clearfix"></div></div>\n                    <div class="clearfix"></div>' + watch_exp_button + '\n                    <div class="clearfix"></div>\n                    </section>\n                    </section>';
        return list;
    };

    OpenWithoutResponse.prototype.checkCorrectAnswer = function checkCorrectAnswer() {
        //method is triggered when button is clicked,it toggles between hide and show.
        $(this.elementreference).find('#answer').removeClass('showAnswer hideAnswer');
        if ($(this.elementreference).find('#toggler').text() === 'Show Answer') {
            this.assessmentData.setAnswerClass('showAnswer');
            this.assessmentData.setButtonLabel('Hide Answer');
            $(this.elementreference).find('#answer').attr('role', 'alert').show();
            $(this.elementreference).find('#toggler').text('Hide Answer');
        } else {
            this.assessmentData.setAnswerClass('hideAnswer');
            this.assessmentData.setButtonLabel('Show Answer');
            $(this.elementreference).find('#answer').hide();
            $(this.elementreference).find('#toggler').text('Show Answer');
        }
        return true;
    };

    OpenWithoutResponse.prototype.showHint = function showHint() {
        if ($(this.elementreference).find('#toggler_hint').text() === 'Show Hint') {
            $(this.elementreference).find('#toggler_hint').text('Hide Hint');
            $(this.elementreference).find('#hint').attr('role', 'alert').show();
        } else {
            $(this.elementreference).find('#hint').attr('style', 'display:none');
            $(this.elementreference).find('#toggler_hint').text('Show Hint');
        }
        return true;
    };

    return OpenWithoutResponse;
})(_mainActivity2['default']);

exports['default'] = OpenWithoutResponse;
module.exports = exports['default'];

},{"./mainActivity":17}],24:[function(require,module,exports){
/**
 * Created by debayan.das on 19-09-2016.
 */
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _mcssJs = require("./mcss.js");

var _mcssJs2 = _interopRequireDefault(_mcssJs);

var _mcmsJs = require("./mcms.js");

var _mcmsJs2 = _interopRequireDefault(_mcmsJs);

var _multipartJs = require("./multipart.js");

var _multipartJs2 = _interopRequireDefault(_multipartJs);

var _openWithResponse = require("./openWithResponse");

var _openWithResponse2 = _interopRequireDefault(_openWithResponse);

var _openWithoutResponse = require("./openWithoutResponse");

var _openWithoutResponse2 = _interopRequireDefault(_openWithoutResponse);

var _inContext = require("./inContext");

var _inContext2 = _interopRequireDefault(_inContext);

var _fibJs = require("./fib.js");

var _fibJs2 = _interopRequireDefault(_fibJs);

var TemplateProvider = (function () {
    function TemplateProvider() {
        _classCallCheck(this, TemplateProvider);
    }

    TemplateProvider.prototype.get = function get(question) {
        // method returns the desired template
        switch (question.getType()) {
            case "mcss":
                return new _mcssJs2["default"](question);
                break;
            case "mcms":
                return new _mcmsJs2["default"](question);
                break;
            case "open-ended":
                if (question.getOpenendedType().text === 'without-response') {
                    return new _openWithoutResponse2["default"](question);
                }
                return new _openWithResponse2["default"](question);
                break;
            case "multi-part":
                return new _multipartJs2["default"](question);
                break;
            case "in-context":
                return new _inContext2["default"](question);
                break;
            case "fib":
            case "fib-dragdrop":
            case "fib-dropdown":
                return new _fibJs2["default"](question);
                break;
            default:
                console.log("default");
        }
    };

    return TemplateProvider;
})();

exports["default"] = new TemplateProvider();
module.exports = exports["default"];

},{"./fib.js":15,"./inContext":16,"./mcms.js":18,"./mcss.js":20,"./multipart.js":21,"./openWithResponse":22,"./openWithoutResponse":23}]},{},[1,2]);
