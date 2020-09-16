$('#btnRun4').click(function () {

    $.ajax({
        url: "libs/php/show.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#setCountry4').val()
        },
        success: function (result) {


            console.log(result);


            if (result.status.name == "ok") {

                $('#txtCountryName4').html(result['data']['countryName']);
                $('#txtCountryCode4').html(result['data']['countryCode']);
                $('#txtTime4').html(result['data']['time']);
                $('#txtTimezoneId4').html(result['data']['timezoneId']);
                $('#txtSunset4').html(result['data']['sunset']);
                $('#txtSunrise4').html(result['data']['sunrise']);



            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
        }
    })
});

