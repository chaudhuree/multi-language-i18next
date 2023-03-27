var translationData = {
  en: {
    title: "Welcome!",
    message: "Hello, world!",
    name: "sOhan",
    home: "Home",
    about: "About",
    contact: "Contact",
    button: "বাংলা "
  },
  bn: {
    title: "স্বাগতম!",
    message: "হ্যালো, বিশ্ব!",
    name: "সোহান ",
    home: "হোম",
    about: "আমাদের সম্পর্কে",
    contact: "যোগাযোগ",
    button: "English"
  }
};

i18next.init(
  {
    lng: "en",
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: translationData.en
      },
      bn: {
        translation: translationData.bn
      }
    }
  },
  function (err, t) {
    document.getElementById("title").innerHTML = i18next.t("title");
    document.getElementById("message").innerHTML = i18next.t("message");
    document.getElementById("author").innerHTML = i18next.t("name");
    document
      .getElementById("navbar")
      .querySelectorAll("a")[0].innerHTML = i18next.t("home");
    document
      .getElementById("navbar")
      .querySelectorAll("a")[1].innerHTML = i18next.t("about");
    document
      .getElementById("navbar")
      .querySelectorAll("a")[2].innerHTML = i18next.t("contact");
    document.getElementById("change-lang").innerHTML = i18next.t("button");
  }
);

document.getElementById("change-lang").addEventListener("click", function () {
  var newLang = i18next.language === "en" ? "bn" : "en";
  i18next.changeLanguage(newLang, function (err, t) {
    document.getElementById("title").innerHTML = i18next.t("title");
    document.getElementById("message").innerHTML = i18next.t("message");
    document.getElementById("author").innerHTML = i18next.t("name");
    document
      .getElementById("navbar")
      .querySelectorAll("a")[0].innerHTML = i18next.t("home");
    document
      .getElementById("navbar")
      .querySelectorAll("a")[1].innerHTML = i18next.t("about");
    document
      .getElementById("navbar")
      .querySelectorAll("a")[2].innerHTML = i18next.t("contact");
    document.getElementById("change-lang").innerHTML = i18next.t("button");
  });
});
