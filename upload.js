! function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define([], e) : e()
}(function() {
  "use strict";
  var e, t, i, n = 0,
    a = window.location.search.indexOf("debug=true") > -1;
  window.jQuery ? i = window.jQuery : window.$ && window.$.fn && window.$.fn.jquery && (i = window.$);
  var o = function(e) {
      if (null == e || "object" != typeof e || e.tagName) return e;
      var t = e.constructor();
      for (var i in e) t[i] = o(e[i]);
      return t
    },
    d = function(e, t) {
      return t = o(t), t.kind = e, JSON.stringify(t)
    },
    r = function(e) {
      return JSON.parse(e)
    },
    l = function() {
      try {
        var e = document.createElement("style");
        e.type = "text/css", e.innerHTML = ".cloudinary-thumbnails { list-style: none; margin: 10px 0; padding: 0 } .cloudinary-thumbnails:after { clear: both; display: block; content: '' } .cloudinary-thumbnail { float: left; padding: 0; margin: 0 15px 5px 0; display: none } .cloudinary-thumbnail.active { display: block } .cloudinary-thumbnail img { border: 1px solid #01304d; border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px } .cloudinary-thumbnail span { font-size: 11px; font-family: Arial, sans-serif; line-height: 14px; border: 1px solid #aaa; max-width: 150px; word-wrap: break-word; word-break: break-all; display: inline-block; padding: 3px; max-height: 60px; overflow: hidden; color: #999; } .cloudinary-delete { vertical-align: top; font-size: 13px; text-decoration: none; padding-left: 2px; line-height: 8px; font-family: Arial, sans-serif; color: #01304d }.cloudinary-button { color: #fefeff; text-decoration: none; font-size: 18px; line-height: 28px; height: 28x; border-radius: 6px; -moz-border-radius: 6px; -webkit-border-radius: 6px; font-weight: normal; text-decoration: none;   display: inline-block; padding: 4px 30px 4px 30px; background: #0284cf; font-family: Helvetica, Arial, sans-serif;   background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODRjZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjU5OGIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);   background: -moz-linear-gradient(top,  #0284cf 0%, #02598b 100%);   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#0284cf), color-stop(100%,#02598b));   background: -webkit-linear-gradient(top,  #0284cf 0%,#02598b 100%);   background: -o-linear-gradient(top,  #0284cf 0%,#02598b 100%);   background: -ms-linear-gradient(top,  #0284cf 0%,#02598b 100%);   background: linear-gradient(to bottom,  #0284cf 0%,#02598b 100%);   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0284cf', endColorstr='#02598b',GradientType=0 ); }.cloudinary-button:hover { background: #02598b;   background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyNTk4YiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjg0Y2YiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);   background: -moz-linear-gradient(top,  #02598b 0%, #0284cf 100%);   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#02598b), color-stop(100%,#0284cf));   background: -webkit-linear-gradient(top,  #02598b 0%,#0284cf 100%);   background: -o-linear-gradient(top,  #02598b 0%,#0284cf 100%);   background: -ms-linear-gradient(top,  #02598b 0%,#0284cf 100%);   background: linear-gradient(to bottom,  #02598b 0%,#0284cf 100%);   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02598b', endColorstr='#0284cf',GradientType=0 ); ";
        var t = document.getElementsByTagName("head")[0];
        t && t.appendChild(e)
      } catch (i) {
        console && console.log && console.log("Cannot initialize stylesheet: " + i)
      }
    };
  l();
  var c = function(l, c) {
    var u, s, g, p = n++,
      b = o(l),
      f = b.element,
      m = !!b.inline_container,
      y = !1,
      w = !1;
    delete b.element, b.widget_id = p;
    var h = function() {
        b.cloud_name || (b.cloud_name = e), !b.api_key && t && (b.api_key = t), b.secure = b.secure || "https:" === document.location.protocol, b.requireSignature = !!b.upload_signature;
        ! function() {
          for (var e = !!b.upload_signature, t = e ? ["api_key", "cloud_name"] : ["cloud_name", "upload_preset"], i = 0; i < t.length; i++)
            if (!b[t[i]]) throw "Missing required option: " + t[i]
        }();
        u = window.document.createElement("iframe");
        var i = b.secure ? "https:" : "http:",
          n = [];
        a && n.push("debug=true"), m && n.push("inline=true"), g = b.widgetHost || i + "//widget.cloudinary.com", u.setAttribute("src", g + "/v/" + b.cloud_name + "/b461e618bfe70c2cbadbbbfbba8920c2/all?" + n.join("&")), u.setAttribute("width", "100%"), u.setAttribute("height", "100%"), u.setAttribute("frameborder", "no"), u.style.display = "none", u.style.width = "100%", u.style.border = "none", m ? u.style.height = "520px" : (u.style.position = "fixed", u.style.top = "0px", u.style.left = "0px", u.style.height = "100%", u.style.background = "transparent", u.style.zIndex = "1000000"), v(u, "load", function() {
          C("init", b), w = !0, y && (u.style.display = "block", u.focus(), C("open", {}))
        }), v(window, "message", x);
        var o = function() {
            if (!m) return document.body;
            if ("string" == typeof b.inline_container) {
              var e = document.querySelector(b.inline_container);
              if (e) return e;
              throw "Element Not Found (" + b.inline_container + ")"
            }
            return b.inline_container
          },
          d = o();
        d.appendChild(u), m || v(window.document, "keyup", function(e) {
          27 == e.keyCode && _()
        }), f && I()
      },
      I = function() {
        f.style.display = "none";
        var e = window.document.createElement("a");
        e.setAttribute("class", b.button_class || "cloudinary-button"), e.setAttribute("href", "#"), e.innerHTML = b.button_caption || "Upload image", f.parentNode.insertBefore(e, f.previousSibling), v(e, "click", function(e) {
          return k(), e && e.preventDefault && e.preventDefault(), e && e.stopPropagation && e.stopPropagation(), !1
        }), !b.field_name && f.getAttribute("name") && "" != f.getAttribute("name") && (b.field_name = f.getAttribute("name"))
      },
      v = function(e, t, i) {
        e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i)
      },
      k = function() {
        y = !0, s = window.document.body.style.overflow, m || (window.document.body.style.overflow = "hidden"), w && (u.style.display = "block", u.focus(), C("open", {}))
      },
      x = function(e) {
        if (e.origin.match(/cloudinary\.com/)) {
          var t;
          try {
            t = r(e.data)
          } catch (n) {
            return
          }
          if (t.widget_id == p) switch (t.kind) {
            case "success":
              b.keep_widget_open || m || _(), A(t.result), c && c(null, t.result), i && i(f || b.form || document).trigger("cloudinarywidgetsuccess", [t.result]);
              break;
            case "error":
              _(), c && c(t), i && i(f || b.form || document).trigger("cloudinarywidgeterror", t);
              break;
            case "closed":
              _();
              var a = {
                message: "User closed widget"
              };
              c && c(a), i && i(f || b.form || document).trigger("cloudinarywidgetclosed", a);
              break;
            case "get-signature":
              var d = b.upload_signature;
              if ("string" == typeof d) C("signature", {
                signature: d
              });
              else if ("function" == typeof d) {
                var l = o(t);
                delete l.widget_id, delete l.kind, d(function(e) {
                  C("signature", {
                    signature: e
                  })
                }, l)
              }
          }
        }
      },
      C = function(e, t) {
        u.contentWindow.postMessage(d(e, t), g)
      },
      _ = function() {
        u.style.display = "none", window.document.body.style.overflow = s, y = !1
      },
      A = function(e) {
        if (i) {
          var t = b.form;
          !t && t !== !1 && f && (t = i(f).parents("form")[0]);
          var n = b.field_name || "image";
          if (t && i.each(e, function(e, a) {
              var o, d = [a.resource_type, a.type, a.path].join("/") + "#" + a.signature,
                r = function() {
                  var e = i("<input></input>").attr({
                    type: "hidden",
                    name: n
                  }).val(d).addClass("cloudinary-hidden-field").attr("data-cloudinary-public-id", a.public_id).appendTo(t);
                  i(e).data("cloudinary", a)
                };
              o = f && "input" == f.tagName && "hidden" == i(f).attr("type") ? i(f) : i(t).find('input[name="' + n + '"]'), 0 == e && o.length > 0 ? (o.val(d), o.attr("data-cloudinary-public-id", a.public_id), o.data("cloudinary", a), o.addClass("cloudinary-hidden-field")) : r()
            }), b.thumbnails !== !1 && (b.thumbnails || f)) {
            var a = i("<ul></ul>").addClass("cloudinary-thumbnails");
            i.each(e, function(e, t) {
              var n = i("<li></li>").addClass("cloudinary-thumbnail").data("cloudinary", t);
              n.append(t.thumbnail_url ? i("<img></img>").attr("src", t.thumbnail_url) : i("<span></span>").text(t.public_id)), t.delete_token && n.append(i("<a></a>").addClass("cloudinary-delete").attr("href", "#").text("\xd7")), n.find("img").on("load", function() {
                n.addClass("active")
              }), a.append(n)
            }), a.find("li").length > 0 && (b.thumbnails ? i(b.thumbnails).append(a) : i(f).after(a)), a.find(".cloudinary-delete").click(function(e) {
              e.preventDefault();
              var a = i(this).parents(".cloudinary-thumbnail").data("cloudinary"),
                o = S(a.delete_token);
              if (o && o.always(function(e) {
                  200 == e.status && i(f || b.form || document).trigger("cloudinarywidgetdeleted", a)
                }), i(this).parents(".cloudinary-thumbnail").hide("slow"), t) {
                var d = i(t).find('input[name="' + n + '"][data-cloudinary-public-id="' + a.public_id + '"].cloudinary-hidden-field');
                i(t).find('input[name="' + n + '"].cloudinary-hidden-field').length > 1 ? i(d).remove() : i(d).attr("data-cloudinary-public-id", "").val("").data("cloudinary", null)
              }
            })
          }
        }
      },
      S = function(e, t) {
        if (i) {
          t = t || {};
          var n = t.url;
          n || (n = "https://api.cloudinary.com/v1_1/" + b.cloud_name + "/delete_by_token");
          var a = i.support.xhrFileUpload ? "json" : "iframe json";
          return i.ajax({
            url: n,
            method: "POST",
            data: {
              token: e
            },
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            },
            dataType: a
          })
        }
      };
    return h(), {
      open: function() {
        return k(), this
      },
      close: _
    }
  };
  window.cloudinary = window.cloudinary || {}, window.cloudinary.openUploadWidget = function(e, t) {
    return c(e, t).open()
  }, window.cloudinary.createUploadWidget = function(e, t) {
    return c(e, t)
  }, window.cloudinary.applyUploadWidget = function(e, t, i) {
    var n = o(t);
    return n.element = e, c(n, i)
  }, window.cloudinary.setCloudName = function(t) {
    e = t
  }, window.cloudinary.setAPIKey = function(e) {
    t = e
  }, i && (i.fn.cloudinary_upload_widget = function(e, t) {
    window.cloudinary.applyUploadWidget(i(this)[0], e, t)
  })
});
