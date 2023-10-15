
import ready from "../../js/utils/documentReady.js";
// import IMask from "imask";
import CreditCardInputMask from "credit-card-input-mask";
import tippy from 'tippy.js';
import { initPopup } from "../../js/common/popup.js";

ready(function () {

    const formPay = document.querySelector('.form-pay');
    const jsRequired = formPay.querySelectorAll(".js-required");
    const formPaySubmit = formPay.querySelector('.js-form-pay-submit');
    const numberCard = formPay.querySelector('.js-card-number');
    const cvvCard = formPay.querySelector('.js-card-cvv');
    let flagSentForm = true;

    const formattedCreditCardInput = new CreditCardInputMask({
        element: numberCard,
        pattern: "{{9999}} {{9999}} {{9999}} {{9999}}",
    });

    const formattedCvvCard = new CreditCardInputMask({
        element: cvvCard,
        pattern: "{{999}}",
    });

    tippy('[data-tippy-content]');

    function checkedInputs(){
        flagSentForm = true;
        const itemsInput = formPay.querySelectorAll("input[required]");
        itemsInput.forEach((item)=>{
            if(item.type == "checkbox"){
                if(item.checked == false){
                    item.closest(".js-required").classList.add("required-error");
                    flagSentForm = false;
                } else{
                    item.closest(".js-required").classList.remove("required-error");
                }
            } else{
                if(item.value == ""){
                    item.closest(".js-required").classList.add("required-error");
                    flagSentForm = false;
                } else{
                    item.closest(".js-required").classList.remove("required-error");
                }
            }
        });

        if(flagSentForm){
            console.log(formPaySubmit)
            formPaySubmit.submit();
        } else{
            return false;
        }
    }

    jsRequired.forEach((element)=>{
        element.addEventListener("focus", ()=>{
            element.classList.remove("required-error");
        });
    });


    formPaySubmit.addEventListener("submit", (event)=>{
        event.preventDefault();
        checkedInputs();
    });

    //popup
    const choosePopup = document.querySelector(".popup");
    const chooseBtn = document.querySelector(".js-popup");
    if (choosePopup && chooseBtn) {
      const popupClass = ".popup";
      const triggerBtn = ".js-popup";
      initPopup(popupClass, triggerBtn);
    }
});
