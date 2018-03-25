$( document ).ready(function() {

    (function () {

        const weiPerPat = 0.00046044671 + -0.00002979155 * Math.log(-1521655200 + 1521990000);

        $("#pat_eth_rate").text("(Current rate: " + Math.round(1 / weiPerPat) + " PAT / ETH)");

    })();

    //Calculate invested ETH
    //Display invested ETH
    $.ajax({
        url: "https://ico-fund-calculation.herokuapp.com/",
        success: function (data) {
            if(typeof data.collected_eth === "number"){
                $('#amount').text(data.collected_eth);
                return;
            }
            console.log("collected_eth is not a number: "+JSON.stringify(data));
        },
        error: console.error
    });

    // Checkboxes validation
    $(".accept").click(function (event) {
        var counter = 0;
        $(".accept").each(function(key, checkbox) {
            if(checkbox.checked == false) {
                $("#checkboxes-continue").attr("disabled", "disabled");
                return false;
            } else {
                counter++;
                if(counter == $(".accept").length) {
                    $("#checkboxes-continue").attr("disabled", false);
                }
            }
        });
    });
    // Show address
    $("#checkboxes-continue").click(function(){
        $( "#checkboxes" ).addClass( "hidden" );
        $( "#address" ).removeClass( "hidden" );
    });
});
