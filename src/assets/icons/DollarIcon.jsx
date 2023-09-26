import PropTypes from "prop-types";

export default function DollarIcon({ className, ...rest }) {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6411 5.22585C12.1275 5.22585 5.22585 12.1275 5.22585 20.6411C5.22585 29.1548 12.1275 36.0564 20.6411 36.0564C29.1548 36.0564 36.0564 29.1548 36.0564 20.6411C36.0564 12.1275 29.1548 5.22585 20.6411 5.22585ZM2.72607 20.6411C2.72607 10.7469 10.7469 2.72607 20.6411 2.72607C30.5354 2.72607 38.5562 10.7469 38.5562 20.6411C38.5562 30.5354 30.5354 38.5562 20.6411 38.5562C10.7469 38.5562 2.72607 30.5354 2.72607 20.6411ZM20.6411 9.39215C21.3314 9.39215 21.891 9.95174 21.891 10.642V11.1699C24.6082 11.6564 26.8906 13.6978 26.8906 16.4748C26.8906 17.1651 26.331 17.7247 25.6407 17.7247C24.9504 17.7247 24.3908 17.1651 24.3908 16.4748C24.3908 15.0679 22.9351 13.5584 20.6411 13.5584C18.3472 13.5584 16.8915 15.0679 16.8915 16.4748C16.8915 17.8818 18.3472 19.3913 20.6411 19.3913C23.8696 19.3913 26.8906 21.6125 26.8906 24.8074C26.8906 27.5845 24.6082 29.6259 21.891 30.1124V30.6402C21.891 31.3305 21.3314 31.8901 20.6411 31.8901C19.9508 31.8901 19.3913 31.3305 19.3913 30.6402V30.1124C16.6741 29.6259 14.3917 27.5845 14.3917 24.8074C14.3917 24.1171 14.9513 23.5575 15.6416 23.5575C16.3319 23.5575 16.8915 24.1171 16.8915 24.8074C16.8915 26.2144 18.3472 27.7238 20.6411 27.7238C22.9351 27.7238 24.3908 26.2144 24.3908 24.8074C24.3908 23.4004 22.9351 21.891 20.6411 21.891C17.4127 21.891 14.3917 19.6698 14.3917 16.4748C14.3917 13.6978 16.6741 11.6564 19.3913 11.1699V10.642C19.3913 9.95174 19.9508 9.39215 20.6411 9.39215Z"
        fill="currentColor"
      />
    </svg>
  );
}

DollarIcon.propTypes = {
  className: PropTypes.string,
};