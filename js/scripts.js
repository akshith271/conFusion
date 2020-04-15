$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        } else if (
            $("#carouselButton").children("span").hasClass("fa-play")
        ) {
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause ");
        }
    });
});

// Reservation modal
const reservationModal = $("#reservationModal");
$("#openReservationModal").click(function () {
    reservationModal.modal("show");
});
$("#cancelReservationModal").click(function () {
    reservationModal.modal("hide");
});
$("#exitReservationModal").click(function () {
    reservationModal.modal("hide");
});

// Login modal
const loginModal = $('#loginModal');
$("#openLoginModal").click(function () {
    loginModal.modal("show");
});
$("#cancelLogin").click(function () {
    loginModal.modal("hide");
});
$("#exitLogin").click(function () {
    loginModal.modal("hide");
});