function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-xs font-semibold transition duration-300";

  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700",

    outline:
      "border border-orange-500 bg-white text-orange-500 hover:bg-orange-50",

    light: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export default Button;
