$(document).ready(()=>{
    // custom validator
    $.validator.addMethod('customEmailValidator',(value,element)=>{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = regex.test(value);
        return isValid; 
    });
    // validate the form
    $('#sbt-register').click(()=>{
        $('#frm-registration').validate({
            rules:{
                name: 'required',
                email: {
                    required: true,
                    customEmailValidator: true
                },
                phone: {
                    required: true,
                    min: 4000000001,
                    max: 9999999999
                }
            },
            messages:{
                name : 'Name cannot be left blank',
                email: {
                    required: 'Email cannot be left blank',
                    customEmailValidator: 'Please re-enter a valid email'
                },
                phone: {
                    required: 'Phone cannot be left blank',
                    min: 'Phone number cannot be less than 4000000001',
                    max: 'Phone number cannot be greater than 9999999999'
                }
            }
        });
    });
});