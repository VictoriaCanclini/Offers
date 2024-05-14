export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 72 72"
        >
            <path
                fill="#d0cfce"
                d="m42.277 59.852l-.013-18.256l-12.187-.052l-.044 18.355H16.756l-.695-25.159l.02-5.72L36.022 8.938l19.959 19.959l-.004 14.461l-.466 16.58z"
            />
            <g
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <path d="M41.99 59.95h11.992c.55 0 1-.45 1-1V34.014m-37.924-.001V58.95c0 .55.45 1 1 1h12.135" />
                <path d="M8.492 35.595L36.016 7.977l27.58 27.37M41.815 59.933V41.627h-11.59v18.306" />
            </g>
        </svg>
    );
}
