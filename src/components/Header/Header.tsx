import './Header.css'

interface IHeader{
  title: string
}

export const Header = ({title}: IHeader) => {
  return(
    <>
      <h1 className='header'>{title}</h1>
    </>
  )
}
