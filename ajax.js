$(document).ready(()=>{
    $('#reload').click(()=>{
        console.log('reload() called');

        $.ajax({
            method : 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/1'
        ,success:(data)=>{
            // call back
            // create custom object with specific field / values
            const content ={
                name: data.name,
                email: data.email,
                address: data.address.street +' ,'+ data.address.city
            }
            $('#content').text(JSON.stringify(content));
            console.log(data);
        },error:(err)=>{
            console.log('Failed to load ',err);
        }});
    });
});