const cities=[
    'Bengaluru',
    'Bhubaneshwar',
    'Bhopal',
    'Delhi',
    'Dehradun',
    'Darjeeling'
]
$(document).ready(()=>{
    // login button
    $('#btn-login').button();
    // check box
    $('#gender').checkboxradio();
    // sign up
    $('#sbt-signup').button();
    // adjacent tabs
    $('#forms').tabs();
    // tooltip
    $('#a-login').tooltip();
    // auto complete
    $('#city').autocomplete({
        source: cities
    });
    // menu
    $('#menu').menu();
    // accordion toggle
    $('#toggle').accordion();

 });