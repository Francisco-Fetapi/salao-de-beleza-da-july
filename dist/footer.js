"use strict";
/*

    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
    <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
    <li><a href="#"><i class="fa fa-google"></i></a></li>
    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
*/
var MediaSocial = /** @class */ (function () {
    function MediaSocial(facebook, google, whatsapp, instagram, telefone) {
        this.telefone = {
            icon: "fa fa-phone",
            href: telefone || whatsapp ? "tel:+244 ".concat(telefone || whatsapp) : "",
        };
        this.facebook = {
            icon: "fa fa-facebook",
            href: facebook,
        };
        this.whatsapp = {
            icon: "fa fa-whatsapp",
            href: whatsapp
                ? "http://api.whatsapp.com/send?phone=244".concat(whatsapp)
                : null,
        };
        this.google = {
            icon: "fa fa-google",
            href: google,
        };
        // this.instagram = {
        //   icon: "fa fa-instagram",
        //   href: instagram,
        // };
    }
    MediaSocial.prototype.exibir = function () {
        var $lista = $(".footer-links-social ul");
        var html = "";
        Object.values(this).forEach(function (item) {
            html += "<li><a href=\"".concat(item.href, "\"><i class=\"").concat(item.icon, "\"></i></a></li>");
        });
        $lista.html(html);
    };
    return MediaSocial;
}());
var mediaSocial = new MediaSocial("#1", "#2", "998923997", "#4", "947911646");
mediaSocial.exibir();
