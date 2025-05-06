
const BtnPrimary = ({ icon, onClick, title, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn-primary`}
    >
      {icon}
      {/* ซ่อนข้อความบนหน้าจอขนาดเล็ก */}
      <span className="hidden lg:inline-flex ml-2">{title}</span>
    </button>
  );
};

export default BtnPrimary;
