import { useForm } from "react-hook-form";
import "./FormDemo.css";

export default function FormDemo() {
  // Functions from "react-hook-form" library, handles registration validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Console logs inputted registration information
  const handleRegistration = (FormData) => {
    console.log("Form Submitted!");
    console.log(FormData);
  };

  // Error handling
  const handleError = (errors) => {
    console.log("An error has occurred!");
    console.log(errors);
  };

  // Options for register form input and messages
  const registerOptions = {
    name: { required: "Name cannot be blank" },
    email: { required: "Email cannot be blank" },
    password: {
      required: "Password is required",
      minLength: {
        value: 10,
        message: "Password must be at least 10 characters",
      },
    },
    quantity: {
      required: "Quantity is required",
      min: {
        value: 0,
        message: "Quantity must be greater than 0",
      },
      max: {
        value: 10,
        message: "Quantity must be less than 10",
      },
    },
  };

  return (
    // Uses validation set for registration before allowing it to be submitted
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label>Name: </label>
        {/* Checks if name input is valid */}
        <input
          type="text"
          name="name"
          id="name"
          {...register("name", registerOptions.name)}
        />
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <br />
      <div>
        <label>Email: </label>
        {/* Checks if email input is valid */}
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <br />
      <div>
        <label>Password: </label>
        {/* Checks if password input is valid */}
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <br />
      <div>
        <label>Quantity: </label>
        {/* Checks if quantity input is valid */}
        <input
          type="number"
          name="quantity"
          id="quantity"
          {...register("quantity", registerOptions.quantity)}
        />
        <small className="text-danger">
          {errors?.quantity && errors.quantity.message}
        </small>
      </div>
      <button>Submit</button>
    </form>
  );
}
