const BtnSecondary = ({icon,onClick}) => {
  return (
    <button onClick={onClick} className="btn-secondary">
        {icon}
    </button>
  )
}
export default BtnSecondary