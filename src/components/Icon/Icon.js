const Icon = ({
  name,
  className = '',
  fill = false,
  weight = 400,
  grade = 0,
  size = 24,
  onClick,
  title
}) => {
  const fontVariationSettings = `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size}`;

  const style = {
    fontVariationSettings,
    fontSize: `${size}px`,
    lineHeight: 1,
    userSelect: 'none',
  };

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {name}
    </span>
  );
};

export default Icon;
