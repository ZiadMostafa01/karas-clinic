import { Link } from "react-router";

const Alert = ({
  variant = "info",
  title,
  message,
  showLink = false,
  linkHref = "#",
  linkText = "Learn more",
}) => {
  // ألوان تيلويند القياسية (Standard Tailwind Colors)
  const variantClasses = {
    success: {
      container: "border-green-500 bg-green-50",
      icon: "text-green-500",
      title: "text-green-800",
      message: "text-green-700",
    },
    error: {
      container: "border-red-500 bg-red-50",
      icon: "text-red-500",
      title: "text-red-800",
      message: "text-red-700",
    },
    warning: {
      container: "border-amber-500 bg-amber-50",
      icon: "text-amber-500",
      title: "text-amber-800",
      message: "text-amber-700",
    },
    info: {
      container: "border-blue-500 bg-blue-50",
      icon: "text-blue-500",
      title: "text-blue-800",
      message: "text-blue-700",
    },
  };

  const icons = {
    success: (
      <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        />
      </svg>
    ),
    error: (
      <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    warning: (
      <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    ),
    info: (
      <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  };

  const config = variantClasses[variant] || variantClasses.info;

  return (
    <div className={`rounded-xl border-l-4 p-4 shadow-sm ${config.container}`}>
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`shrink-0 ${config.icon}`}>
          {icons[variant] || icons.info}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className={`text-sm font-bold ${config.title}`}>{title}</h4>

          <p className={`text-sm mt-1 leading-relaxed ${config.message}`}>
            {message}
          </p>

          {showLink && (
            <Link
              to={linkHref}
              className={`inline-block mt-3 text-sm font-bold underline hover:opacity-80 transition-opacity ${config.icon}`}
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
