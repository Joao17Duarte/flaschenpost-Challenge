import './Card.css'

const Card = ({ beverage, isShowingDetails }) => {
  const {
    brandName,
    name,
    articleId,
    articleImage,
    articlePrice,
    articleShortDescription,
  } = beverage

  return (
    <>
      <div
        className={`card-container ${
          isShowingDetails ? 'card-row' : 'card-column'
        }`}
        key={articleId}>
        <img alt={`${brandName}`} src={articleImage} />

        {isShowingDetails ? (
          <div>
            <div className='card-details' hidden={!isShowingDetails}>
              <div>{name}</div>
              <div>{articlePrice} €</div>
              <div>{articleShortDescription}</div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Card
