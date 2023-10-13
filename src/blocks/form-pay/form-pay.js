
import ready from "../../js/utils/documentReady.js";
import IMask from "imask";
import CreditCardInputMask from "credit-card-input-mask";

ready(function () {

    const numberCard = document.querySelector('.js-card-number');
    const numberMask = {
        mask: Number,
        thousandsSeparator: ' ',
    };

    // noUiSlider.create(item, {
    //     start: [min, max],
    //     connect: true,
    //     range: {
    //         'min': min,
    //         'max': max
    //     },
    //     format: wNumb({
    //         decimals: 0,
    //         thousand: " "
    //     })
    // });
    //const maskCard = IMask(numberCard, numberMask);

    const formattedCreditCardInput = new CreditCardInputMask({
        element: numberCard,
        pattern: "{{9999}} {{9999}} {{9999}} {{9999}}",
    });

    // numberCard.addEventListener('change', () =>{
    //     maskCard.updateValue();
    // });
});
