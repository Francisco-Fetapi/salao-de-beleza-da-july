/* 

    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
    <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
    <li><a href="#"><i class="fa fa-google"></i></a></li>
    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
*/

class MediaSocial {
  constructor(facebook, google, whatsapp, instagram, telefone) {
    this.telefone = {
      icon: "fa fa-phone",
      href: telefone || whatsapp ? `tel:+244 ${telefone || whatsapp}` : "",
    };
    this.facebook = {
      icon: "fa fa-facebook",
      href: facebook,
    };
    this.whatsapp = {
      icon: "fa fa-whatsapp",
      href: whatsapp
        ? `http://api.whatsapp.com/send?phone=244${whatsapp}`
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
  exibir() {
    const $lista = $(".footer-links-social ul");
    let html = "";
    Object.values(this).forEach((item) => {
      html += `<li><a href="${item.href}"><i class="${item.icon}"></i></a></li>`;
    });
    $lista.html(html);
  }
}

const mediaSocial = new MediaSocial("#1", "#2", "998923997", "#4");
mediaSocial.exibir();
