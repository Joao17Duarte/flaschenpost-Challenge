import { useEffect, useState } from 'react'
import { CardList } from './components/CardList/CardList'
import Header from './components/Header/Header'

function App() {
  const [beverages, setBeverages] = useState([])
  const [mainBeverages, setMainBeverages] = useState([])
  const [isAscending, setIsAscending] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  const [isShowingDetails, setIsShowingDetails] = useState(true)

  useEffect(() => {
    const getBeverages = async () => {
      try {
        const response = await fetch(
          'https://flapotest.blob.core.windows.net/test/ProductData.json'
        )
        const data = await response.json()
        setBeverages(flatenArray(data))
        setMainBeverages(flatenArray(data))
      } catch (error) {
        console.log(error)
      }
    }
    getBeverages()
  }, [])

  const flatenArray = (beverages) => {
    if (!beverages) {
      return
    }
    const flatenedArray = []

    beverages.forEach((beverage) => {
      return beverage.articles.map((article) => {
        return flatenedArray.push({
          id: beverage.id,
          brandName: beverage.brandName,
          name: beverage.name,
          articleId: article.id,
          articleShortDescription: article.shortDescription,
          articlePrice: article.price,
          articleUnit: article.unit,
          articlePricePerUnitText: article.pricePerUnitText,
          articleImage: article.image,
        })
      })
    })
    return flatenedArray
  }

  const sortBeveragePerPrice = () => {
    const orderedArray = isAscending
      ? beverages.sort((a, b) => a.articlePrice - b.articlePrice)
      : beverages.sort((a, b) => b.articlePrice - a.articlePrice)
    setBeverages(orderedArray)
    setIsAscending(!isAscending)
  }

  const filterBeverages = () => {
    const filteredBeverages = beverages.filter((beverage) => {
      return (
        beverage.articlePricePerUnitText
          .split(' ')[0]
          .replace('(', '')
          .replace(',', '.') <= 2
      )
    })
    setBeverages(isFiltered ? filteredBeverages : mainBeverages)
    setIsFiltered(!isFiltered)
  }
  return (
    <div className='App'>
      <Header
        title={'Flaschenpost.de'}
        isShowingDetails={isShowingDetails}
        setIsShowingDetails={setIsShowingDetails}
        sortBeveragePerPrice={sortBeveragePerPrice}
        filterBeverages={filterBeverages}
      />

      <CardList isShowingDetails={isShowingDetails} beverages={beverages} />
    </div>
  )
}

export default App
