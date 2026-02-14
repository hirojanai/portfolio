const HomeIcon = ({
  width = "24",
  height = "24",
  fill = "currentColor",
  className = "",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={fill}
    className={className}
    {...props}
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
  </svg>
);

export default HomeIcon;
