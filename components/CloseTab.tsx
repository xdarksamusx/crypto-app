interface CloseTabProps {
  onClose: () => void;
  label?: string;
  className?: string;
}

const CloseTab: React.FC<CloseTabProps> = ({
  onClose,
  label = "Close",
  className = "",
}) => {
  //

  return (
    <>
      <svg
        className="w-4 h-4"
        onClick={onClose}
        xmlns="http://www.w3.org/2000/svg"
        id="Bold"
        viewBox="0 0 24 24"
        width="12"
        height="12"
      >
        <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
      </svg>
    </>
  );
};

export default CloseTab;
