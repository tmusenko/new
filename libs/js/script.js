$('#btnRun').click(function () {
    // $(".box1").css("margin-bottom", "50px");
    // $(".box2").css("margin-bottom", "50px");

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry1').val()
        },
        success: function (result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#txtContinent').html(result['data'][0]['continent']);
                $('#txtCapital').html(result['data'][0]['capital']);
                $('#txtLanguages').html(result['data'][0]['languages']);
                $('#txtPopulation').html(result['data'][0]['population']);
                $('#txtArea').html(result['data'][0]['areaInSqKm']);
                $('#txtCurrencyCode').html(result['data'][0]['currencyCode']);


            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
        }
    });


});
