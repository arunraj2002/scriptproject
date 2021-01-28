button_calculate = document.querySelector('#button_calculate');

button_calculate.addEventListener('click', function(e){
    txtb = document.querySelector('#value_b');
    txth = document.querySelector('#value_h');
    txtc = document.querySelector('#value_c');
    
    let c;

    c = 1/2* parseFloat(txtb.value) * parseFloat(txth.value);

    txtc.value = c;

});
