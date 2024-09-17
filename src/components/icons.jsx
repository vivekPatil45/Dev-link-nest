import { FaGithub, FaInfoCircle, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { RxCaretDown, RxCaretRight, RxSlash } from "react-icons/rx";

export const Icons = {
    infoCircle: FaInfoCircle,
    ioChevronBack: IoChevronBack,
    faLinkedin: FaLinkedin,
    faGithub : FaGithub,
    rxCaretDown: RxCaretDown,
    rxCaretRight: RxCaretRight,
    arrowRightLong: FaArrowRightLong,
    rxSlash: RxSlash,
    arrowBack: IoIosArrowBack,
    arrow: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 12H20.33"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    messageIcon: (props) => (
      <svg viewBox="0 0 20 20" fill="none" {...props}>
        <path
          d="M14.1667 15.3583H10.8334L7.12507 17.8249C6.57507 18.1916 5.83341 17.8 5.83341 17.1333V15.3583C3.33341 15.3583 1.66675 13.6916 1.66675 11.1916V6.19157C1.66675 3.69157 3.33341 2.0249 5.83341 2.0249H14.1667C16.6667 2.0249 18.3334 3.69157 18.3334 6.19157V11.1916C18.3334 13.6916 16.6667 15.3583 14.1667 15.3583Z"
          stroke="#A6ABBF"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 9.46655V9.29159C10 8.72492 10.35 8.4249 10.7 8.18324C11.0417 7.9499 11.3833 7.64991 11.3833 7.09991C11.3833 6.33325 10.7667 5.71655 10 5.71655C9.23334 5.71655 8.6167 6.33325 8.6167 7.09991"
          stroke="#A6ABBF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99617 11.4584H10.0037"
          stroke="#A6ABBF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Home: (props) => (
      <svg viewBox="0 0 18 18" {...props}>
        <path
          d="M15.621 6.00825L10.7085 2.07825C9.74851 1.31325 8.24851 1.30575 7.29601 2.07075L2.38351 6.00825C1.67851 6.57075 1.25101 7.69575 1.40101 8.58075L2.34601 14.2357C2.56351 15.5032 3.74101 16.5007 5.02351 16.5007H12.9735C14.241 16.5007 15.441 15.4807 15.6585 14.2282L16.6035 8.57325C16.7385 7.69575 16.311 6.57075 15.621 6.00825ZM9.56101 13.5007C9.56101 13.8082 9.30601 14.0632 8.99851 14.0632C8.69101 14.0632 8.43601 13.8082 8.43601 13.5007V11.2507C8.43601 10.9432 8.69101 10.6882 8.99851 10.6882C9.30601 10.6882 9.56101 10.9432 9.56101 11.2507V13.5007Z"
          fill="currentColor"
        />
      </svg>
    ),
    angleDown: (props) => (
      <svg viewBox="0 0 20 20" fill="none" {...props}>
        <path
          d="M5.33325 7.5L9.83325 12L14.3333 7.5"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    GitHub: (props) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37197 0 0 5.37197 0 12C0 17.301 3.43734 21.7995 8.20654 23.3876C8.8069 23.4959 9.02346 23.1265 9.02346 22.8089C9.02346 22.5238 9.01384 21.7682 9.01023 20.7684C5.67155 21.4927 4.96651 19.1586 4.96651 19.1586C4.4227 17.7726 3.63465 17.4032 3.63465 17.4032C2.54582 16.6585 3.71767 16.6754 3.71767 16.6754C4.9232 16.7596 5.55484 17.9122 5.55484 17.9122C6.62563 19.7457 8.36535 19.2164 9.04632 18.9096C9.1558 18.1335 9.46862 17.6042 9.81031 17.3046C7.14658 17.0026 4.3457 15.9727 4.3457 11.3732C4.3457 10.0654 4.81372 8.99218 5.5777 8.1548C5.45619 7.85041 5.04111 6.62924 5.69681 4.97854C5.69681 4.97854 6.70383 4.6549 8.99579 6.20694C9.97465 5.94065 10.9844 5.80473 11.9988 5.80269C13.0133 5.80433 14.023 5.94026 15.0018 6.20694C17.295 4.6537 18.3008 4.97854 18.3008 4.97854C18.9565 6.62924 18.545 7.85041 18.4199 8.1548C19.1899 8.99218 19.6519 10.0642 19.6519 11.3732C19.6519 15.9848 16.8486 16.9978 14.1753 17.295C14.6024 17.6655 14.9874 18.397 14.9874 19.5159C14.9874 21.1209 14.9729 22.4155 14.9729 22.8089C14.9729 23.1301 15.1871 23.5031 15.7995 23.3852C20.5663 21.7947 24 17.2998 24 12C24 5.37197 18.628 0 12 0Z"
                fill="currentColor"
            />
        </svg>
    ),
    saveInactive: (props) => (
        <svg viewBox="0 0 20 20" width="20" height="20" fill="none" {...props}>
            <path
                d="M14.9604 16.968L14.9596 16.9676L11.1003 14.8244C10.7579 14.6308 10.3559 14.5564 9.99637 14.5564C9.63506 14.5564 9.23285 14.6315 8.88901 14.823C8.88872 14.8232 8.88842 14.8234 8.88813 14.8235L5.02959 16.9663C5.0292 16.9665 5.02882 16.9667 5.02844 16.9669C4.54821 17.231 4.27583 17.1646 4.16736 17.1007C4.0594 17.0371 3.87 16.8323 3.87 16.2858V5.1348C3.87 3.86996 4.90461 2.82996 6.17484 2.82996H13.804C15.073 2.82996 16.1099 3.86912 16.1168 5.13665V16.2858C16.1168 16.8383 15.9261 17.0438 15.8194 17.1066C15.7132 17.1692 15.4421 17.2363 14.9604 16.968Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    saveActive: (props) => (
        <svg viewBox="0 0 20 20" width="20" height="20" fill="none" {...props}>
            <path
                d="M13.804 2.07996H6.17484C4.48914 2.07996 3.12 3.45701 3.12 5.1348V16.2858C3.12 17.7103 4.14092 18.3118 5.39135 17.6233L9.25343 15.4785C9.66497 15.249 10.3298 15.249 10.7334 15.4785L14.5955 17.6233C15.8459 18.3197 16.8668 17.7182 16.8668 16.2858V5.1348C16.8589 3.45701 15.4898 2.07996 13.804 2.07996Z"
                fill="currentColor"
            />
        </svg>
    ),
    Linkedin: (props) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M18.4167 1H5.58333C3.05242 1 1 3.05242 1 5.58333V18.4167C1 20.9476 3.05242 23 5.58333 23H18.4167C20.9485 23 23 20.9476 23 18.4167V5.58333C23 3.05242 20.9485 1 18.4167 1ZM8.33333 18.4167H5.58333V8.33333H8.33333V18.4167ZM6.95833 7.171C6.07283 7.171 5.35417 6.44683 5.35417 5.554C5.35417 4.66117 6.07283 3.937 6.95833 3.937C7.84383 3.937 8.5625 4.66117 8.5625 5.554C8.5625 6.44683 7.84475 7.171 6.95833 7.171ZM19.3333 18.4167H16.5833V13.2797C16.5833 10.1923 12.9167 10.4261 12.9167 13.2797V18.4167H10.1667V8.33333H12.9167V9.95125C14.1963 7.58075 19.3333 7.40567 19.3333 12.2209V18.4167Z"
            fill="currentColor"
          />
        </svg>
    ),
    sun: (props) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M18.7129 12.0189C18.7129 13.3428 18.3203 14.637 17.5848 15.7378C16.8492 16.8386 15.8038 17.6966 14.5807 18.2032C13.3575 18.7099 12.0116 18.8424 10.7131 18.5841C9.41466 18.3258 8.22193 17.6883 7.28578 16.7522C6.34963 15.816 5.7121 14.6233 5.45382 13.3248C5.19554 12.0263 5.3281 10.6804 5.83474 9.45729C6.34138 8.23415 7.19934 7.18872 8.30014 6.45319C9.40094 5.71766 10.6951 5.32507 12.019 5.32507C13.7944 5.32507 15.497 6.03031 16.7523 7.28565C18.0076 8.54099 18.7129 10.2436 18.7129 12.0189Z"
            fill="currentColor"
          />
          <path
            d="M12.0189 22.4995C11.8955 22.5035 11.7725 22.4827 11.6572 22.4385C11.5419 22.3942 11.4366 22.3274 11.3475 22.2418C11.2584 22.1563 11.1873 22.0538 11.1384 21.9404C11.0895 21.827 11.0637 21.705 11.0626 21.5815V21.505C11.0626 21.2514 11.1634 21.0082 11.3427 20.8288C11.522 20.6495 11.7653 20.5487 12.0189 20.5487C12.2725 20.5487 12.5157 20.6495 12.6951 20.8288C12.8744 21.0082 12.9752 21.2514 12.9752 21.505C12.9758 21.7624 12.8765 22.01 12.6981 22.1956C12.5196 22.3811 12.2761 22.4901 12.0189 22.4995ZM18.8466 19.8029C18.5929 19.8019 18.3495 19.7024 18.1677 19.5255L18.0433 19.4012C17.8867 19.2183 17.8048 18.983 17.8141 18.7423C17.8234 18.5017 17.9232 18.2734 18.0935 18.103C18.2638 17.9327 18.4921 17.833 18.7328 17.8237C18.9734 17.8144 19.2087 17.8962 19.3917 18.0529L19.516 18.1772C19.6941 18.3564 19.7941 18.5988 19.7941 18.8514C19.7941 19.104 19.6941 19.3464 19.516 19.5255C19.4283 19.6137 19.324 19.6836 19.2091 19.7312C19.0942 19.7788 18.971 19.8032 18.8466 19.8029ZM5.19117 19.8029C4.93748 19.8019 4.69407 19.7024 4.51223 19.5255C4.33412 19.3464 4.23415 19.104 4.23415 18.8514C4.23415 18.5988 4.33412 18.3564 4.51223 18.1772L4.63654 18.0529C4.81948 17.8962 5.05479 17.8144 5.29546 17.8237C5.53613 17.833 5.76442 17.9327 5.93473 18.103C6.10503 18.2734 6.2048 18.5017 6.2141 18.7423C6.22339 18.983 6.14153 19.2183 5.98487 19.4012L5.86056 19.5255C5.68244 19.7022 5.44204 19.8018 5.19117 19.8029ZM21.5815 12.9752H21.505C21.2514 12.9752 21.0082 12.8744 20.8288 12.6951C20.6495 12.5157 20.5487 12.2725 20.5487 12.0189C20.5487 11.7653 20.6495 11.522 20.8288 11.3427C21.0082 11.1634 21.2514 11.0626 21.505 11.0626C21.7624 11.062 22.01 11.1613 22.1956 11.3397C22.3811 11.5181 22.4901 11.7617 22.4995 12.0189C22.5035 12.1423 22.4827 12.2653 22.4385 12.3806C22.3942 12.4959 22.3274 12.6012 22.2418 12.6903C22.1563 12.7794 22.0538 12.8505 21.9404 12.8994C21.827 12.9483 21.705 12.9741 21.5815 12.9752ZM2.53276 12.9752H2.45626C2.20265 12.9752 1.95942 12.8744 1.78008 12.6951C1.60075 12.5157 1.5 12.2725 1.5 12.0189C1.5 11.7653 1.60075 11.522 1.78008 11.3427C1.95942 11.1634 2.20265 11.0626 2.45626 11.0626C2.71367 11.062 2.96127 11.1613 3.14682 11.3397C3.33237 11.5181 3.44135 11.7617 3.45078 12.0189C3.45473 12.1423 3.43397 12.2653 3.38972 12.3806C3.34547 12.4959 3.27861 12.6012 3.19308 12.6903C3.10756 12.7794 3.00508 12.8505 2.89169 12.8994C2.77829 12.9483 2.65626 12.9741 2.53276 12.9752ZM18.7223 6.27175C18.4686 6.27075 18.2252 6.17133 18.0433 5.99443C17.8652 5.81527 17.7653 5.5729 17.7653 5.32027C17.7653 5.06764 17.8652 4.82527 18.0433 4.6461L18.1677 4.52179C18.3506 4.36513 18.5859 4.28327 18.8266 4.29256C19.0672 4.30186 19.2955 4.40163 19.4658 4.57193C19.6361 4.74224 19.7359 4.97054 19.7452 5.2112C19.7545 5.45187 19.6726 5.68719 19.516 5.87012L19.3917 5.99443C19.304 6.0826 19.1996 6.1525 19.0847 6.2001C18.9698 6.2477 18.8467 6.27206 18.7223 6.27175ZM5.31549 6.27175C5.06179 6.27075 4.81839 6.17133 4.63654 5.99443L4.51223 5.86056C4.35557 5.67762 4.2737 5.44231 4.283 5.20164C4.2923 4.96097 4.39207 4.73268 4.56237 4.56237C4.73268 4.39207 4.96097 4.2923 5.20164 4.283C5.44231 4.2737 5.67762 4.35557 5.86056 4.51223L5.98487 4.63654C6.16298 4.81571 6.26295 5.05808 6.26295 5.31071C6.26295 5.56334 6.16298 5.8057 5.98487 5.98487C5.89842 6.07538 5.79455 6.14745 5.67951 6.19675C5.56447 6.24605 5.44065 6.27157 5.31549 6.27175ZM12.0189 3.45078C11.8955 3.45473 11.7725 3.43397 11.6572 3.38972C11.5419 3.34547 11.4366 3.27861 11.3475 3.19308C11.2584 3.10756 11.1873 3.00508 11.1384 2.89169C11.0895 2.77829 11.0637 2.65626 11.0626 2.53276V2.45626C11.0626 2.20265 11.1634 1.95942 11.3427 1.78008C11.522 1.60075 11.7653 1.5 12.0189 1.5C12.2725 1.5 12.5157 1.60075 12.6951 1.78008C12.8744 1.95942 12.9752 2.20265 12.9752 2.45626C12.9758 2.71367 12.8765 2.96127 12.6981 3.14682C12.5196 3.33237 12.2761 3.44135 12.0189 3.45078Z"
            fill="currentColor"
          />
        </svg>
      ),
      star: (props) => (
        <svg viewBox="0 0 32 32" fill="none" {...props}>
          <path
            d="M20.52 6.94675L22.3999 10.7067C22.6533 11.2267 23.3333 11.7201 23.9066 11.8267L27.3066 12.3867C29.4799 12.7467 29.9866 14.3201 28.4266 15.8934L25.7733 18.5467C25.3333 18.9867 25.08 19.8534 25.2266 20.4801L25.9866 23.7601C26.5866 26.3468 25.1999 27.3601 22.9199 26.0001L19.7333 24.1067C19.1599 23.7601 18.1999 23.7601 17.6266 24.1067L14.4399 26.0001C12.1599 27.3467 10.7733 26.3468 11.3733 23.7601L12.1333 20.4801C12.2799 19.8667 12.0266 19.0001 11.5866 18.5467L8.93328 15.8934C7.37328 14.3334 7.87995 12.7601 10.0533 12.3867L13.4533 11.8267C14.0266 11.7334 14.7066 11.2267 14.9599 10.7067L16.8399 6.94675C17.8399 4.90675 19.4933 4.90675 20.52 6.94675Z"
            fill="#FBD449"
          />
          <path
            d="M10.6667 6.66675H2.66675"
            stroke="#FBD449"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66675 25.3333H2.66675"
            stroke="#FBD449"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.00008 16H2.66675"
            stroke="#FBD449"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      search: (props) => (
        <svg viewBox="0 0 20 20" fill="none" {...props}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7159 13.463L17.7372 16.4753C17.9054 16.6422 18 16.8693 18 17.1062C18 17.3432 17.9054 17.5703 17.7372 17.7372C17.5703 17.9054 17.3432 18 17.1062 18C16.8693 18 16.6422 17.9054 16.4753 17.7372L13.463 14.7159C12.2211 15.6907 10.6876 16.2196 9.10882 16.2176C5.18273 16.2176 2 13.0349 2 9.10882C2 5.18273 5.18273 2 9.10882 2C13.0349 2 16.2176 5.18273 16.2176 9.10882C16.2196 10.6876 15.6907 12.2211 14.7159 13.463ZM9.10878 3.77729C6.16421 3.77729 3.77716 6.16434 3.77716 9.10891C3.77716 12.0535 6.16421 14.4405 9.10878 14.4405C12.0533 14.4405 14.4404 12.0535 14.4404 9.10891C14.4404 6.16434 12.0533 3.77729 9.10878 3.77729Z"
            fill="currentColor"
          />
        </svg>
    ),
    moon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M22.2584 16.2312C22.0862 15.9408 21.6022 15.489 20.3974 15.7041C19.7306 15.8259 19.0523 15.8728 18.3751 15.844C17.1664 15.7892 15.9809 15.4925 14.8889 14.9715C13.7969 14.4504 12.8206 13.7156 12.0176 12.8105C10.8876 11.573 10.1401 10.0349 9.86519 8.3818C9.59031 6.72872 9.79989 5.03142 10.4686 3.49487C10.9419 2.40841 10.6085 1.83828 10.3718 1.60163C10.1352 1.36497 9.54352 1.00999 8.40327 1.4833C6.26574 2.37566 4.46095 3.91442 3.24181 5.88395C2.02267 7.85348 1.45027 10.1551 1.60482 12.4662C1.79624 14.638 2.6136 16.7076 3.95778 18.4241C5.30196 20.1406 7.11524 21.4303 9.17778 22.1368C10.1792 22.4862 11.2268 22.6856 12.2866 22.7285C12.4587 22.7392 12.6308 22.75 12.8029 22.75C14.5755 22.753 16.3239 22.3388 17.9068 21.5408C19.4896 20.7429 20.8624 19.5836 21.9141 18.1567C22.6348 17.1563 22.4412 16.5227 22.2584 16.2312Z"
            fill="currentColor"
          />
        </svg>
      ),
      homeActive: (props) => (
        <svg viewBox="0 0 20 20" width="20" height="20" fill="none" {...props}>
          <path
            d="M17.3567 6.67498L11.8983 2.30831C10.8317 1.45831 9.16501 1.44997 8.10667 2.29997L2.64834 6.67498C1.86501 7.29998 1.39001 8.54997 1.55667 9.53331L2.60667 15.8166C2.84834 17.225 4.15667 18.3333 5.58167 18.3333H14.415C15.8233 18.3333 17.1567 17.2 17.3983 15.8083L18.4483 9.52498C18.5983 8.54998 18.1233 7.29998 17.3567 6.67498ZM10.6233 15C10.6233 15.3416 10.34 15.625 9.99834 15.625C9.65668 15.625 9.37334 15.3416 9.37334 15V12.5C9.37334 12.1583 9.65668 11.875 9.99834 11.875C10.34 11.875 10.6233 12.1583 10.6233 12.5V15Z"
            fill="currentColor"
          />
        </svg>
      ),
      homeInactive: (props) => (
        <svg viewBox="0 0 20 20" width="20" height="20" fill="none" {...props}>
          <path
            d="M10 15V12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.86055 2.93544L8.86092 2.93515C9.46861 2.44785 10.5198 2.44566 11.1385 2.94296L11.1401 2.94419L16.913 7.55921C16.9133 7.55945 16.9136 7.5597 16.9139 7.55995C17.1058 7.71485 17.3026 7.99341 17.4358 8.34238C17.5689 8.69119 17.6083 9.03171 17.5684 9.27808C17.5683 9.27845 17.5683 9.27882 17.5682 9.27919L16.4607 15.9075C16.4606 15.9079 16.4606 15.9082 16.4605 15.9086C16.3211 16.7239 15.4911 17.425 14.6667 17.425H5.33339C4.49982 17.425 3.67907 16.7315 3.53969 15.9091C3.53965 15.9088 3.53961 15.9086 3.53957 15.9084L2.43147 9.27644L2.43148 9.27643L2.43069 9.27185C2.3884 9.02807 2.42553 8.68982 2.55808 8.34238C2.6906 7.99504 2.88853 7.71706 3.08341 7.56215L3.08341 7.56216L3.08556 7.56044L8.86055 2.93544Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      searchActive: (props) => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            fill="white"
          />
          <path
            d="M21.3001 22.0001C21.1201 22.0001 20.9401 21.9301 20.8101 21.8001L18.9501 19.9401C18.6801 19.6701 18.6801 19.2301 18.9501 18.9501C19.2201 18.6801 19.6601 18.6801 19.9401 18.9501L21.8001 20.8101C22.0701 21.0801 22.0701 21.5201 21.8001 21.8001C21.6601 21.9301 21.4801 22.0001 21.3001 22.0001Z"
            fill="white"
          />
        </svg>
      ),
      searchInactive: (props) => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#7A8096"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#7A8096"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
}