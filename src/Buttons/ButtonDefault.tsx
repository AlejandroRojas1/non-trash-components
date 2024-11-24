type buttonTypes = {
    children: string,
    moreStyles?: string
}

const ButtonDefault: React.FC<buttonTypes> = ({children, moreStyles}) => {
  return (
    <button className={`${moreStyles} bg-blue-500 text-white rounded-md p-2`}>{children}</button>
  )
}

export default ButtonDefault