import styles from './Sidebar.module.scss'
import bookSvg from '../../assets/book.svg'
import developmentSvg from '../../assets/development.svg'
import sportSvg from '../../assets/sport.svg'
import personalSvg from '../../assets/personal.svg'
import treeSvg from '../../assets/tree.svg'

interface IProps {
    setCollection: Function
}

export default function Sidebar(props: IProps) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <h3>Collections</h3>
        </div>
        <button onClick={() => props.setCollection('School')}>
            <img src={bookSvg} alt="" />
            School
        </button>
        <button onClick={() => props.setCollection('Development')}>
            <img src={developmentSvg} alt="" />
            Development
        </button>
        <button onClick={() => props.setCollection('Sport')}>
            <img src={sportSvg} alt="" />
            Sport
        </button>
        <button onClick={() => props.setCollection('Personal')}>
            <img src={personalSvg} alt="" />
            Personal
        </button>
        <button onClick={() => props.setCollection('Everything')}>
            <img src={treeSvg} alt="" />
            Everything
        </button>
    </div>
  )
}
