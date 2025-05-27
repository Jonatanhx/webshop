export default function SignInForm() {
  return (
    <form className="flex flex-col gap-12 min-w-[30%]">
      <input
        className="input-field1"
        placeholder="Email address"
        type="email"
      />
      <button className="btn1" type="submit">
        Continue
      </button>
    </form>
  );
}
