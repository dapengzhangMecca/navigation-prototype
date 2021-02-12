import React, { useRef, useState, useEffect } from 'react'
import MenuItemList from '/src/components/MenuItemList'

const handleNavigation = url => {
  // TODO: mock another behavior for demo
  window.location.replace(url)
}

export default ({ category = {} }) => {
  const cachedListRef = useRef([category])
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(
    cachedListRef.current.length - 1,
  )
  const handleMenuItemClick = (item = {}) => {
    if (item.subCategories?.length) {
      cachedListRef.current.push(item)
      setActiveCategoryIndex(cachedListRef.current.length - 1)
    } else {
      handleNavigation(item.url)
    }
  }

  const handleBackButtonClick = () => {
    setActiveCategoryIndex(index => index - 1)
  }

  useEffect(() => {
    // Remove redundant nodes but not updating UI until next STATE update
    cachedListRef.current = cachedListRef.current.slice(
      0,
      activeCategoryIndex + 1,
    )
  }, [activeCategoryIndex])

  return (
    <>
      {cachedListRef.current.map((theCategory, index) => {
        const toSlideIn =
          index === activeCategoryIndex &&
          index === cachedListRef.current.length - 1
        const toSlideOut = index === activeCategoryIndex + 1
        return (
          <MenuItemList
            key={`menu-${theCategory.name}`}
            category={theCategory}
            handleMenuItemClick={handleMenuItemClick}
            handleBackButtonClick={handleBackButtonClick}
            showMenuHead={index > 0}
            toSlideIn={toSlideIn}
            toSlideOut={toSlideOut}
          />
        )
      })}
    </>
  )
}
