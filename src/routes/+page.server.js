export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");

    //process the form data and perform actions
    console.log(formData);
    return {
      success: true,
      name: name,
      email: email,
    };
  },
};
