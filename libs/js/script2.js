$('#btnRun2').click(function () {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry2').val()
        },
        success: function (result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#txtContinent2').html(result['data'][0]['continent']);
                $('#txtCapital2').html(result['data'][0]['capital']);
                $('#txtLanguages2').html(result['data'][0]['languages']);
                $('#txtPopulation2').html(result['data'][0]['population']);
                $('#txtArea2').html(result['data'][0]['areaInSqKm']);
                $('#txtCurrencyCode2').html(result['data'][0]['currencyCode']);


            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
        }
    });


});

