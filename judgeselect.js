/**
 * Created by ANUBIS on 10/31/2015.
 *
 * WE will use th full jQuery name instead of $ so as to prevent script conflicts
 * with  the rest of jotform scripts
 */
jQuery(document).ready(function () {

//call all functions for teh all the dropdowns
    var action = 'FIRST';

    //Starters
    standardStarters(action);
    starterJumpers(action);
    starterGamblers(action);
    starterSnooker(action);

    //Advanced Section
    advancedStandard(action);
    advancedJumpers(action);
    advancedGamblers(action);
    advancedSnooker(action);

//Master Section
    masterStandard(action);
    masterJumpers(action);
    masterGamblers(action);
    masterSnooker(action);
    masterChallenge(action);


//Other Games
    steepleChase(action);
    teamRelay(action);

});


//function for loading judges for each dropdown

//Standard Section
function standardStarters(action) {
    loadAllJudges(action, 'input_290', 'input_291');
}

function starterJumpers(action) {
    loadAllJudges(action, 'input_292', 'input_293');
}

function starterGamblers(action) {
    loadAllJudges(action, 'input_294', 'input_295');
}

function starterSnooker(action) {
    loadAllJudges(action, 'input_296', 'input_297');
}

//Advanced Section
function advancedStandard(action) {
    loadAllJudges(action, 'input_298', 'input_299');
}

function advancedJumpers(action) {
    loadAllJudges(action, 'input_300', 'input_301');
}

function advancedGamblers(action) {
    loadAllJudges(action, 'input_302', 'input_303');
}

function advancedSnooker(action) {
    loadAllJudges(action, 'input_304', 'input_305');
}

//Master Section
function masterStandard(action) {
    loadAllJudges(action, 'input_306', 'input_307');
}

function masterJumpers(action) {
    loadAllJudges(action, 'input_308', 'input_309');
}

function masterGamblers(action) {
    loadAllJudges(action, 'input_310', 'input_311');
}

function masterSnooker(action) {
    loadAllJudges(action, 'input_312', 'input_313');
}

function masterChallenge(action) {
    loadAllJudges(action, 'input_314', 'input_315');
}


//Other Games
function steepleChase(action) {
    loadAllJudges(action, 'input_316', 'input_317');
}
function teamRelay(action) {
    loadAllJudges(action, 'input_318', 'input_319');
}


//Shared ajax function
function loadAllJudges(action, dropdownOneID, dropdownTwoID) {
//the variable action denotes if it is the first dropdown or the second
    var dropdownId = null;
    var filteredJudge = '';
    if (action === 'FIRST') {
        //load first dropdown
        dropdownId = jQuery('#' + dropdownOneID);
    } else {
        //load second dropdown
        dropdownId = jQuery('#' + dropdownTwoID);
        //get the selected value of the first dropdown
        //we will exclude this from loading in teh second dropdown
        filteredJudge = jQuery('#' + dropdownOneID).val();
    }

    //alert('Jusde selected is '+filteredJudge);
    //now for the ajax function
    jQuery.ajax({
        url: 'phpfile/ddjudges.php',
        type: 'POST',
        data: {
            judgename: filteredJudge
        },
        dataType: 'JSON',
        success: function (data) {
            //populate the dropdown with teh judges names
            //clear the current content of the select
            dropdownId.html('');//clear the current dropdown
            //iterate over the data and append a select option*
            // dropdownId.append('<option id="">Select a judge</option>');
            jQuery.each(data, function (key, val) {
                dropdownId.append('<option style="color:blue;" value="' + val.value + '">' + val.text + '</option>');
            })
        },
        error: function (req, status, err) {
            console.log('something went wrong', status, err);
        }
    });
}