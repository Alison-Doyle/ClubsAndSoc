(function() {
    document.getElementById('card-form').addEventListener('submit', ShowToast, false)
}())

function ShowToast() {
    // HTML elements
    const submitButton = document.getElementById("register-button");
    const toast = document.getElementById('liveToast');

    // Calling toast
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
    toast.show();
}