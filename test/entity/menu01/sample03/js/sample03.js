/*******************************************************************************
Custom JS application specific
*******************************************************************************/
$(document).ready(function () {
    // Start the spinner before heavy or long Ajax calls
    api.spinner.start();

    // Stop the Spinner when the Ajax calls end
    api.spinner.stop();
});
