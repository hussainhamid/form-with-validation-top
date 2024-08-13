const email = document.getElementById("email");
const zip = document.getElementById("ZIP");
const country = document.getElementById("country").value;
const password = document.getElementById("password");
const passwordConf = document.getElementById("password-conf");
const submitBtn = document.getElementById("btn");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
});

password.addEventListener("input", () => {
  if (password.value !== passwordConf.value) {
    password.setCustomValidity("");
  } else {
    password.setCustomValidity("");
  }
  password.reportValidity();
});

passwordConf.addEventListener("input", () => {
  if (passwordConf.value !== password.value) {
    passwordConf.setCustomValidity("these two password do not match");
  } else {
    passwordConf.setCustomValidity("");
  }
  passwordConf.reportValidity();
});

zip.addEventListener("input", () => {
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  const ZIPField = document.getElementById("ZIP");

  const constraint = new RegExp(constraints[country][0], "");

  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  } else {
    ZIPField.setCustomValidity(constraints[country][1]);
  }
  ZIPField.reportValidity();
});
