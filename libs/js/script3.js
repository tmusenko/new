$('#btnRun3').click(function () {

    $.ajax({
        url: "libs/php/show.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#setCountry3').val()
        },
        success: function (result) {


            console.log(result);


            if (result.status.name == "ok") {

                $('#txtCountryName').html(result['data']['countryName']);
                $('#txtCountryCode').html(result['data']['countryCode']);
                $('#txtTime').html(result['data']['time']);
                $('#txtTimezoneId').html(result['data']['timezoneId']);
                $('#txtSunset').html(result['data']['sunset']);
                $('#txtSunrise').html(result['data']['sunrise']);



            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
        }
    })
});

