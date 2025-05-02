export const multiStepFormData = [
  {
    step: 1,
    title: "Personal Information",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
      },
    ],
  },
  {
    step: 2,
    title: "Address Details",
    fields: [
      {
        name: "address",
        label: "Address",
        type: "text",
        placeholder: "Enter your address",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Enter your city",
      },
      {
        name: "zipCode",
        label: "Zip Code",
        type: "text",
        placeholder: "Enter your zip code",
      },
    ],
  },
  {
    step: 3,
    title: "Payment Information",
    fields: [
      {
        name: "cardNumber",
        label: "Card Number",
        type: "text",
        placeholder: "Enter your card number",
      },
      {
        name: "expiryDate",
        label: "Expiry Date",
        type: "text",
        placeholder: "MM/YY",
      },
      {
        name: "cvv",
        label: "CVV",
        type: "password",
        placeholder: "Enter CVV",
      },
    ],
  },
];
