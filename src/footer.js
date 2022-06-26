/* 

    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
    <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
    <li><a href="#"><i class="fa fa-google"></i></a></li>
    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
*/

class MediaSocial {
  constructor(facebook, instagram, whatsapp, telefone, google) {
    this.facebook = {
      icon: "fa fa-facebook",
      href: facebook,
    };
    this.instagram = {
      icon: "fa fa-instagram",
      href: instagram,
    };
    this.whatsapp = {
      icon: "fa fa-whatsapp",
      href: whatsapp
        ? `http://api.whatsapp.com/send?phone=244${whatsapp}`
        : null,
    };
    this.telefone = {
      icon: "fa fa-phone",
      href: telefone || whatsapp ? `tel:+244 ${telefone || whatsapp}` : "",
    };

    // this.google = {
    //   icon: "fa fa-google",
    //   href: google,
    // };
  }
  exibir() {
    const $lista = $(".footer-links-social ul");
    let html = "";
    Object.values(this).forEach((item) => {
      html += `<li><a href="${item.href}" target="__blank"><i class="${item.icon}"></i></a></li>`;
    });
    $lista.html(html);
  }
}

const mediaSocial = new MediaSocial(
  "https://web.facebook.com/Sal%C3%A3o-de-Beleza-July-Otchacati-109694235121091",
  "https://www.instagram.com/salaodebelezajulyotchacati/",
  "947911646",
  "947911646"
);
mediaSocial.exibir();
