import Card from '../Card/Card'
import './CardList.css'

export const CardList = ({ beverages, isShowingDetails }) => (
  <div className='card-list'>
    {beverages.map((beverage) => (
      <Card
        key={'card-' + beverage.articleId}
        beverage={beverage}
        isShowingDetails={isShowingDetails}
      />
    ))}
  </div>
)
