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
    // date picker
    $('#dob').datepicker();
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
    // dialog
    $('#dialog-box').dialog();
    // draggable
    $('#draggable-box').draggable().resizable({
        minWidth: 200,
        maxWidth: 300
    });
    // resizable
    $('#resizable-box').resizable();
    // progress bar
    $('#progress-bar').draggable().progressbar({
        value: 90
    });
    // slider
    $('#slider').slider({ range:true});

    // sortable items
    $('#sortable').sortable();
    $('#sortable').disableSelection();
 });