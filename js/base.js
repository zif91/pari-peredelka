/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a) { var b, c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function(a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function() { return this.trigger("unmask") }, mask: function(c, g) { var h, i, j, k, l, m, n, o; if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 } return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) { "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function() {
                function h() { if (g.completed) { for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B) } }

                function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) }

                function q(a) { for (; ++a < n && !j[a];); return a }

                function r(a) { for (; --a >= 0 && !j[a];); return a }

                function s(a, b) { var c, d; if (!(0 > a)) { for (c = a, d = q(b); n > c; c++)
                            if (j[c]) { if (!(n > d && j[c].test(C[d]))) break;
                                C[c] = C[d], C[d] = p(d), d = q(d) } z(), B.caret(Math.max(l, a)) } }

                function t(a) { var b, c, d, e; for (b = a, c = p(a); n > b; b++)
                        if (j[b]) { if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                            c = e } }

                function u() { var a = B.val(),
                        b = B.caret(); if (o && o.length && o.length > a.length) { for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--; if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin) } else { for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin) } h() }

                function v() { A(), B.val() != E && B.change() }

                function w(a) { if (!B.prop("readonly")) { var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault()) } }

                function x(b) { if (!B.prop("readonly")) { var c, d, e, g = b.which || b.keyCode,
                            i = B.caret(); if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) { if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) { if (t(c), C[c] = d, z(), e = q(c), f) { var k = function() { a.proxy(a.fn.caret, B, e)() };
                                    setTimeout(k, 0) } else B.caret(e);
                                i.begin <= m && h() } b.preventDefault() } } }

                function y(a, b) { var c; for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c)) }

                function z() { B.val(C.join("")) }

                function A(a) { var b, c, d, e = B.val(),
                        f = -1; for (b = 0, d = 0; n > b; b++)
                        if (j[b]) { for (C[b] = p(b); d++ < e.length;)
                                if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break } } else C[b] === e.charAt(d) && d++, k > b && (f = b); return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l } var B = a(this),
                    C = a.map(c.split(""), function(a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }),
                    D = C.join(""),
                    E = B.val();
                B.data(a.mask.dataName, function() { return a.map(C, function(a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function() { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function() { if (!B.prop("readonly")) { clearTimeout(b); var a;
                        E = B.val(), a = A(), b = setTimeout(function() { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10) } }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() { B.prop("readonly") || setTimeout(function() { var a = A(!0);
                        B.caret(a), h() }, 0) }), e && f && B.off("input.mask").on("input.mask", u), A() }) } }) });

function registerCallTouchRequest(form) {
  var ct_site_id = document.getElementById("ct-site-id").value;
  var first_name_input = $(form).find('[name="first_name"]');
  var mobile_tel_input = $(form).find('[name="mobile_tel"]');
  var email_input = $(form).find("#email");
  var ct_data = {
    subject: 'Заявка с сайта ' + location.hostname,
    requestUrl: location.href,
    sessionId: window.call_value
  };

if (first_name_input?.val() !== '') {
  ct_data.fio = first_name_input.val();
}
if (mobile_tel_input?.val() !== '') {
  ct_data.phoneNumber = mobile_tel_input.val();
}
if (email_input?.val() !== '') {
  ct_data.email = email_input.val();
}




  // добавляем вывод информации в консоль
  console.log("Отправляем данные на сервер CallTouch:");
  console.log("URL: https://api.calltouch.ru/calls-service/RestAPI/requests/" + ct_site_id + "/register/");
  console.log("Данные:", ct_data);

  jQuery.ajax({
    url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/',
    dataType: 'json',
    type: 'POST',
    data: ct_data,
    success: function(data) {
      console.log("Заявка на сервер CallTouch успешно отправлена:", data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("Ошибка отправки заявки на сервер CallTouch:", textStatus, errorThrown);
    }
  });
}


function loadForm(formid, data) {
    $.ajax({
        url: '/forms',
        type: 'post',
        data: { formid: formid, modal: true },
        dataType: 'html',
        success: function(res) {
            if (res) {
                showFancybox(res, data);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
        }
    });
}

function showFancybox(content, data) {
    if (data.maxwidth) {
        var html = '<div style="width:100%;max-width:' + data.maxwidth + '">' + content + '</div>';
    } else {
        var html = '<div class="popup">' + content + '</div>';
    }

    if (typeof(Fancybox) === 'undefined') {
        var s = document.createElement('SCRIPT');
        s.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js';
        s.type = 'text/javascript';
        document.getElementsByTagName('HEAD')[0].appendChild(s);

        $("head").append($("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css' type='text/css' media='screen' />"));

        s.addEventListener('load', function() {
            Fancybox.show([{
                src: html,
                type: 'html',
                opts: {
                    afterShow: function(instance, current) {
                        $('.phone-mask, input[type="tel"], input[name="phone"]').mask('+7 (999) 999-9999');
                        $(".phone-mask").mask("+7(999) 999-9999");

                        if (jQuery().styler) {
                            $('select').styler({ selectSearch: true });
                        }
                    }
                }
            }], {
                on: {
                    "reveal": (fancybox, slide) => {
                        $('.fancybox__content').addClass('popup');
                        $('.phone-mask, input[type="tel"], input[name="phone"]').mask('+7 (999) 999-9999');
                        $(".phone-mask").mask("+7(999) 999-9999");
                        if (jQuery().styler) {
                            $('select').styler({ selectSearch: true });
                        }
                    }
                }
            });
        }, false);
    } else {
        Fancybox.show(
            [{
                src: html,
                type: 'html',
                opts: {
                    afterShow: function(instance, current) {
                        $('.phone-mask, input[type="tel"], input[name="phone"]').mask('+7 (999) 999-9999');
                        $(".phone-mask").mask("+7(999) 999-9999");
                        if (jQuery().styler) {
                            $('select').styler({ selectSearch: true });
                        }
                    }
                }
            }], {
                on: {
                    "reveal": (fancybox, slide) => {
                        $('.fancybox__content').addClass('popup');
                        $('.phone-mask, input[type="tel"], input[name="phone"]').mask('+7 (999) 999-9999');
                        $(".phone-mask").mask("+7(999) 999-9999");
                        if (jQuery().styler) {
                            $('select').styler({ selectSearch: true });
                        }
                    }
                }
            }
        );
    }
}

function getModal(chunkname, data) {
    $.ajax({
            url: '/getModal',
            type: 'post',
            dataType: 'html',
            data: { chunkname, data },
        })
        .done(function(res) {
            if (res) {
                showFancybox(res, data);
            }
        })
        .fail(function() {
            console.log("getModal error");
        })
        .always(function() {
            console.log("getModal complete");
        });
}

function mainFunc() {
    $('.phone-mask, input[type="tel"], input[name="phone"]').mask('+7 (999) 999-9999');
    $('.phone-mask, input[type="tel"], input[name="mobile_tel"]').mask('+7 (999) 999-9999');
    $(".phone-mask").mask("+7(999) 999-9999");


    /* scrollTo */
    $(document).on('click', '[data-scrollto]', function(event) {
        event.preventDefault();
        var sc = $(this).data("scrollto"),
            dn = $(sc).offset().top - 60;
        if (!sc || sc == '') {
            sc = $(this).attr("href");
        }
        $('html, body').animate({ scrollTop: dn }, 1000);
    });

    /* Load modal form */
    $(document).on('click', '[data-form]', function(e) {
        e.preventDefault();
        var formid = $(this).data('form');
        var data = $(this).data();
        loadForm(formid, data);
    });

    /* Load modal chunk */
    $(document).on('click', '[data-chunk]', function(e) {
        e.preventDefault();
        var chunkname = $(this).data('chunk');
        var data = $(this).data();
        getModal(chunkname, data);
    });


    /* Send form */
    $(document).on('submit', '.ajax-form form', function(e) {
  e.preventDefault();
  var form = this;
  $(form).fadeTo('fast', 0.5, function() {
    var formData = new FormData(form);
    formData.append('url', window.location.href);
    formData.append('pagetitle', $('title').text());

    var formContainer = $(form).parent();

    $.ajax({
      url: '/forms',
      type: 'post',
      data: formData,
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: false,
      success: function(data) {
        $(formContainer).find('.text-field-error').remove();

        if ($(data.errors).length > 0) {
          var errorClass = data.errorClass;

          $.each(data.errors, function(name, errors) {
            $(formContainer).find('[name="' + name + '"]').addClass(errorClass);
            $(formContainer).on('keyup change', '[name="' + name + '"]', function() {
              $(this).removeClass(errorClass);
              $(this).parent().find('.text-field-error').remove();
            });

            $.each(errors, function(key, text) {
              $(formContainer).find('[name="' + name + '"]').parent().append('<span class="alert text-field-error"><i class="alert__icon"></i>' + text + '</span>');
            })

          });

          if (!$('.with-fancybox').length) {
            var firstError = $(formContainer).find('.' + errorClass).first();
            if (firstError.length) {
              var scrollOffset = firstError.offset().top - 150;
              $([document.documentElement, document.body]).animate({
                scrollTop: scrollOffset
              }, 500);
            }
          }

        } else {
          if (data.redirect) {
            window.location.href = data.redirect
          }
          $(formContainer).html(data.output);
          if ($('#metrik-id').length > 0) {
            var metrikId = $('#metrik-id').text();
            ym(metrikId, 'reachGoal', 'goals');
      }
        }

        $(form).fadeTo('fast', 1);
      },
      error: function(xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText);
      }
    });

    // Добавляем вызов функции registerCallTouchRequest, если на странице есть элемент <input> с id="ct-site-id" и его значение не пустое
    var ctSiteIdInput = document.getElementById("ct-site-id");
    if (ctSiteIdInput && ctSiteIdInput.value) {
      registerCallTouchRequest(form);
    }
  });
});


    /* Paginate */
    $(document).on('click', '.ajax-pages a', function(e) {

        e.preventDefault();
        var self = $(this);
        var url = $(this).attr('href');
        var container = $('.ajax-pages-container');
        var paginate = $('.ajax-pages');

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'html',
            beforeSend: function() {
                $(container).fadeTo('fast', 0.5);
            },
            success: function(data) {
                $(paginate).html('');
                $(container).append($(data).find('.ajax-pages-container').html());
                $(paginate).html($(data).find('.ajax-pages').html());
                $(container).fadeTo('fast', 1);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
            }
        });
    });


    /* Commerce 
    if (baseConfig.commerce) {
        $(document).on('click', '[data-action="decrease"]', function() {
            let $input = $(this).parent().find('[name="count"]');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $(this).parent().find('[name="count"]').trigger('change');
        });

        $(document).on('click', '[data-action="increase"]', function() {
            let $input = $(this).parent().find('[name="count"]');
            let count = parseInt($input.val()) + 1;
            count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
            $input.val(parseInt(count));

            $(this).parent().find('[name="count"]').trigger('change');
        });

        $(document).on("change keyup input click", '[name="count"]', function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
            if (this.value == "") {
                this.value = 1;
            }
            if (this.value > parseInt($(this).data('max-count'))) {
                this.value = parseInt($(this).data('max-count'));
            }
        });

      
        if (baseConfig.addedmodal) {
            $(document).on('cart-add-complete.commerce', function(e, params) {
                if (params.response.status == 'success') {
                    getModal(baseConfig.addedmodal, params.data)
                }
            });
        }

    }
        */


    /* Поиск 
        if (baseConfig.search) {
        $('[name="' + baseConfig.search_field + '"]').attr('autocomplete', 'off');

        function delay(callback, ms) {
            var timer = 0;
            return function() {
                var context = this,
                    args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    callback.apply(context, args);
                }, ms || 0);
            };
        }



        function closeSearch() {
            $('.search_results').fadeOut(100);
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        }

        function showSearch() {
            $('.search_results').fadeIn(100);
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
        }

        $(document).mouseup(function(e) {
            if ($('.search_results').length) {
                var div = $('.search_results, [name="' + baseConfig.search_field + '"]');
                if (!div.is(e.target) && div.has(e.target).length === 0) {
                    closeSearch();
                }
            }
        });



        var searchRequest = null;
        var minlength = 3;

        $(document).on('click keyup', '[name="' + baseConfig.search_field + '"]', delay(function() {
            var that = this,
                search_query = $(this).val();

            if (search_query.length >= minlength) {
                if (searchRequest != null) {
                    searchRequest.abort();
                }

                searchRequest = $.ajax({
                        url: '/search',
                        type: 'post',
                        dataType: 'json',
                        data: { search_query },
                    })
                    .done(function(result) {
                        if (search_query == $(that).val() && result.result) {
                            if (!$('.search_results').length) {
                                let width = $(that).outerWidth();
                                let search_results_wrapper = '<div class="search_results" style="width:' + width + 'px;position:absolute;top:auto;left:auto;z-index:999999;"></div>';
                                $(that).after(search_results_wrapper);
                            }
                            $('.search_results').html(result.result);

                            if ($('.search_results > ul > *').length > 10) {
                                $('.search_results').append('<div class="text-center" style="position: absolute;z-index: 999999;bottom: 0;left: 0;width: 100%;background: #fad500;padding: 5px;text-align: center;"><a href="/sample?search_query=' + search_query + '">Посмотреть все результаты</a></div>');
                            }
                            showSearch();
                        }
                    })
                    .fail(function() {
                        //console.log("error");
                    })
                    .always(function() {
                        searchRequest = null
                        //console.log("complete");
                    });
            } else {
                closeSearch();
            }
        }, 300));
    }

*/



}


mainFunc();
$(window).on('load', function() {
    $(".phone-mask").mask("+7(999) 999-9999");
    $(".phone-imask").mask("+7(999) 999-9999");
    $(".numbers").mask("999?99999");

});

