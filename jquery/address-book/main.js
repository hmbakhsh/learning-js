$("#contact-form").on("submit", function (event) {
  event.preventDefault();

  let $firstName = $("#firstName").val();
  let $lastName = $("#lastName").val();
  let $phoneNumber = $("#phoneNumber").val();
  let $address = $("#address").val();

  function contact(firstName, lastName, phoneNumber, address) {
    return {
      firstName,
      lastName,
      phoneNumber,
      address,
      get name() {
        return `${this.firstName} ${this.lastName}`;
      },
    };
  }

  let newContact = contact($firstName, $lastName, $phoneNumber, $address);
  console.log(contact.name);

  let $nameCard = $("<div>").addClass("card-element");
  let nameCardTitle = $("<h5>")
    .addClass("card-title")
    .text("Name:")
    .appendTo($nameCard);
  let nameCardText = $("<p>")
    .addClass("card-text")
    .html(`<strong>Name: </strong>${newContact.name}`)
    .appendTo($nameCard);

  let $phoneCard = $("<div>").addClass("card-element");
  let phoneNumberCardTitle = $("<h5>")
    .addClass("card-title")
    .text("Phone Number:")
    .appendTo($phoneCard);
  let phoneCardText = $("<p>")
    .addClass("card-text")
    .text(newContact.phoneNumber)
    .appendTo($phoneCard);

  let $addressCard = $("<div>").addClass("card-element");
  let addressCardTitle = $("<h5>")
    .addClass("card-title")
    .text("Address:")
    .appendTo($addressCard);
  let addressCardText = $("<p>")
    .addClass("card-text")
    .text(newContact.address)
    .appendTo($addressCard);

  let $contactCard = $("<div>")
    .addClass("contact-card")
    .append($nameCard, $phoneCard, $addressCard)
    .appendTo(".contacts");
});

// When there is a change in the search bar
// The current search is compared against the text in each card
// If there is a match, the card is shown, if not it is hidden

$("#search-bar").on("keyup", function (event) {
  let $searchEntry = $(this).val().toLowerCase(); // current search bar value
  $(".contact-card").each(function () {
    let search = $(this).text().toLowerCase();
    if (search.indexOf($searchEntry) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
