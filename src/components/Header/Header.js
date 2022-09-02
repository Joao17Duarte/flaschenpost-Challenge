import Button from '../Button/Button'
import './Header.css'

export default function Header({
  title,
  isShowingDetails,
  setIsShowingDetails,
  sortBeveragePerPrice,
  filterBeverages,
}) {
  return (
    <div className='header-container'>
      <div className='header-title'>{title}</div>
      <div className='header-menu'>
        <Button
          title={isShowingDetails ? 'Hide Details' : 'Show Details'}
          onClick={() => setIsShowingDetails(!isShowingDetails)}
        />
        <br />
        <Button title={'Sort drinks'} onClick={sortBeveragePerPrice} />
        <br />
        <Button title={'Cheaper than 2€/L'} onClick={filterBeverages} />
      </div>
    </div>
  )
}
