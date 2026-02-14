const VercelIcon = ({
  width = "24",
  height = "24",
  fill = "currentColor",
  className = "",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={width}
    height={height}
    fill={fill}
    className={className}
    aria-hidden
    {...props}
  >
    <path d="M64.002 8.576 128 119.424H0Z" />
  </svg>
);

export default VercelIcon;
