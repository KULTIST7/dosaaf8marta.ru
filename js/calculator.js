$(document).ready(function() {
    calc.idsShip = {
        ship1: {
            path: 'images/calculator-img-1.png',
            name: 'Маломерное Моторное Судно',
            cost: 10000
        },
        ship2: {
            path: 'images/calculator-img-2.png',
            name: 'Гидроцикл',
            cost: 7000
        },
        ship3: {
            path: 'images/calculator-img-3.png',
            name: 'Маломерное Моторное Судно + Гидроцикл',
            cost: 13000
        }
    };

    calc.idsArea = {
        area1: {
            cost: 2500,
            name: 'ВВ'
        },
        area2: {
            cost: 3500,
            name: 'ВВП'
        },
        area3: {
            cost: 3000,
            name: 'МП'
        },
        area4: {
            cost: 6000,
            name: 'ВВ+ВВП'
        },
        area5: {
            cost: 9000,
            name: 'ВВ+ВВП+МП'
        }
    };

    calc.init();
});

let calc = {
    areaName: '',

    shipName: '',

    shipPath: '',

    shipCost: 0,

    sum: 0,

    idsShip: {},

    idsArea: {},

    currentStep: 0,

    doCalc: function() {
        let button = $('.calculator__visual__content>button');
        let shipPath = '';

        if (this.currentStep == 1) {
            $('.calculator__control_step_1').removeClass('disabled');
            $('.calculator__control_step_2').addClass('disabled');

            $('.calculator__control_step_1 .calculator__checkbox').change(function() {
                if (this.checked) {
                    let id = this.id;
                    let img = $('.calculator__visual>img');
                    let cost = $('.calculator__visual__content>p>span');
                
                    calc.shipCost = calc.idsShip[id]['cost'];
                    calc.sum = calc.shipCost;

                    calc.shipName = calc.idsShip[id]['name'];
                    calc.shipPath = calc.idsShip[id]['path'];
                    img.attr('src', calc.idsShip[id]['path']);
                    cost.html(`${calc.sum} руб.`);
                    button.removeClass('disabled');

                    shipPath = calc.idsShip[id]['path'];
                };
            });

            button.on('click', () => {
                for (let i = 0; i < $('.calculator__control_step_1 .calculator__checkbox').length; i++) {
                    $('.calculator__control_step_1 .calculator__checkbox')[i].checked = false;
                };

                this.setStep(this.currentStep+1);

                button.removeAttr('data-fancybox data-src');
            });
        };

        if (this.currentStep == 2) {
            $('.calculator__control_step_1').addClass('disabled');
            $('.calculator__control_step_2').removeClass('disabled');
            button.addClass('disabled');

            $('.calculator__control_step_2 .calculator__checkbox').change(function() {
                if (this.checked) {
                    let id = this.id;
                    let cost = $('.calculator__visual__content>p>span');
                
                    calc.sum = calc.shipCost + calc.idsArea[id]['cost'];

                    $('.calculator__visual__area').addClass('disabled');
                    $(`.calculator__visual__area_${this.value}`).removeClass('disabled');
                    
                    calc.areaName = calc.idsArea[id]['name'];
                    cost.html(`${calc.sum} руб.`);
                    button.removeClass('disabled');
                }
            });

            $('.calculator__input.back').on('click', () => {
                let cost = $('.calculator__visual__content>p>span');

                for (let i = 0; i < $('.calculator__control_step_2 .calculator__checkbox').length; i++) {
                    $('.calculator__control_step_2 .calculator__checkbox')[i].checked = false;
                };

                $('.calculator__visual__area').addClass('disabled');

                calc.sum = this.shipCost;
                cost.html(`${calc.sum} руб.`);
                this.setStep(1);

                button.removeAttr('data-fancybox data-src');
            });

            button.on('click', () => {
                button.attr('data-fancybox', '');
                button.attr('data-src', '#order-form');
            });
        };

        if (this.currentStep > 2) {
            this.openOrderForm();
        };
    },

    init: function() {
        this.setStep(1);
    },

    setStep: function(step) {

        this.currentStep = step;

        this.doCalc();
    },

    openOrderForm: function() {
        $('#order-form>img:first-of-type').attr('src', calc.shipPath);
        $('#order-form .ship>span').html(calc.shipName);
        $('#order-form .area>span').html(calc.areaName);
        $('#order-form .cost>span').html(`${calc.sum} руб.`);
    },

    doOrder: function() {
        
    }
};