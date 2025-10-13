function handleFormSubmit(event) {
  // Prevent the default form submission behavior, restarting the page
  event.preventDefault();
  console.log("Form submitted!");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
