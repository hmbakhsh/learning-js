// PROCESSING THE FORM SUBMISSION
// Function invoked on 'submit' event of #contact-form
$("#contact-form").on("submit", function (event) {
  // Prevents default reloading of the page upon form submission
  event.preventDefault();

  // Assigns the value from each form input to a variable
  let $firstName = $("#firstName").val();
  let $lastName = $("#lastName").val();
  let $phoneNumber = $("#phoneNumber").val();
  let $address = $("#address").val();

  // Models the contact as an object (provides easier access to the value for me)
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

  // Creates a new instance of the object for the new Contact
  let newContact = contact($firstName, $lastName, $phoneNumber, $address);

  // Creates HTML elements for the contact card (assigns classes,
  // interpolates the data from the form submission)
  let $nameCard = $("<div>").addClass("card-element");
  let nameCardText = $("<p>")
    .addClass("card-text")
    .html(`<strong>Name: </strong>${newContact.name}`)
    .appendTo($nameCard);

  let $phoneCard = $("<div>").addClass("card-element");
  let phoneCardText = $("<p>")
    .addClass("card-text")
    .html(`<strong>Phone Number: </strong>${newContact.phoneNumber}`)
    .appendTo($phoneCard);

  let $addressCard = $("<div>").addClass("card-element");
  let addressCardText = $("<p>")
    .addClass("card-text")
    .html(`<strong>Address: </strong>${newContact.address}`)
    .appendTo($addressCard);

  let $removeContactButton = $("<button>");
  $removeContactButton
    .addClass("rm-contact button-styled")
    .text("Remove Contact");

  // Appends card elements created above to a div (.'contact-card')
  // which is then appended to .container
  let $contactCard = $("<div>")
    .addClass("contact-card")
    .append($nameCard, $phoneCard, $addressCard, $removeContactButton)
    .appendTo(".container");

  $(".rm-contact").on("click", function () {
    let $contactCard = $(this).parent();
    $contactCard.remove();
  });
});

// SEARCH BAR
// When there is a change in the search bar (i.e. a key is pressed)
// The current search is compared against the text in each card
// If there is a match, the card is shown, if not it is hidden

$("#search-bar").on("keyup", function (event) {
  let $searchBarEntry = $(this).val().toLowerCase();
  $(".contact-card").each(function () {
    let $contactCardData = $(this).text().toLowerCase();
    $contactCardData = $contactCardData
      .replace("name:", "")
      .replace("phone number:", "")
      .replace("address:", "");
    if ($contactCardData.indexOf($searchBarEntry) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
