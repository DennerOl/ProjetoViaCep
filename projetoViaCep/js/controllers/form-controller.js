import Address from "../models/address.js";

// responsavel por tratar eventos do usuario controla o form.

// função construtora para iniciar o estado dos atributos
function State() {
  this.address = new Address();

  this.btnSave = null;
  this.btnClear = null;

  this.inputCep = null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity = null;

  this.errorCep = null;
  this.errorNumber = null;
}

const state = new State();

export function init() {
  // faço a seleção dos atributos do form
  state.inputCep = document.forms.newAddress.cep;
  state.inputStreet = document.forms.newAddress.street;
  state.inputNumber = document.forms.newAddress.number;
  state.inputCity = document.forms.newAddress.city;

  state.btnSave = document.forms.newAddress.btnSave;
  state.btnClear = document.forms.newAddress.btnClear;

  state.errorCep = document.querySelector('[data-error="cep"]');
  state.errorNumber = document.querySelector('[data-error="number"]');

  // funções dos eventos
  state.inputNumber.addEventListener("change", handleInputNumberChange);
  state.btnClear.addEventListener("click", handleBtnClearClick);
}

// função trata  erros dos campos cep e numero
function setFormError(key, value) {
  const element = document.querySelector(`[data-error="${key}"]`);
  element.innerHTML = value;
}

function handleInputNumberChange(event) {
  if (event.target.value == "") {
    setFormError("number", "Campo requerido");
  } else {
    setFormError("number", "");
  }
}

function clearForm() {
  state.inputCep.value = "";
  state.inputCity.value = "";
  state.inputNumber.value = "";
  state.inputStreet.value = "";

  setFormError("cep", "");
  setFormError("number", "");

  state.inputCep.focus();
}

function handleBtnClearClick(event) {
  event.preventDefault();
  clearForm();
}
