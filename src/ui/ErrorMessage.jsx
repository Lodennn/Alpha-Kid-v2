function ErrorMessage({ children }) {
  return (
    <p className="text-xl font-semibold md:mt-1 text-red-400 mt-0 sm:mt-3 lg:mt-3">
      {children}
    </p>
  );
}

export default ErrorMessage;
