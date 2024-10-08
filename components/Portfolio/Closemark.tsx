interface HandleModal {
  handleModal: () => void;
}

const CloseCircle: React.FC<HandleModal> = ({ handleModal }) => {
  return (
    <>
      <svg
        onClick={() => handleModal()}
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
        <path
          d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};

export default CloseCircle;
