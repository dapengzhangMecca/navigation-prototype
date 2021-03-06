import React, { useRef, useState, useEffect } from 'react'
import MenuItemList from '/src/components/MenuItemList'

// const handleAnchorClick = url => {
//   window.location.replace(url)
// }

export default ({ category = {}, handleAnchorClick = () => {}, showMenu }) => {
  const cachedListRef = useRef([category])
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(
    cachedListRef.current.length - 1,
  )
  const [exit, setExit] = useState(false)

  const handleMenuItemClick = (item = {}) => {
    setExit(false)
    if (item.subCategories?.length) {
      // Don't update if the item alreay exists
      let existingItemIndex
      if (
        cachedListRef.current.find((child, index) => {
          if (child === item) {
            existingItemIndex = index
            return true
          }
          return false
        })
      ) {
        setActiveCategoryIndex(existingItemIndex)
      } else {
        cachedListRef.current.push(item)
        setActiveCategoryIndex(cachedListRef.current.length - 1)
      }
    } else {
      handleAnchorClick(item)
    }
  }

  const handleBackButtonClick = () => {
    setExit(true)
    setActiveCategoryIndex(index => index - 1)
  }

  useEffect(() => {
    // reset when close menu
    if (!showMenu) {
      cachedListRef.current = [category]
      setActiveCategoryIndex(0)
      setExit(false)
    }
  }, [showMenu, category])
  return (
    <>
      {cachedListRef.current.map((theCategory, index) => {
        const toSlideIn = index === activeCategoryIndex && !exit
        const toSlideOut = index === activeCategoryIndex + 1 && exit
        return (
          <MenuItemList
            key={`menu-${theCategory.name}`}
            category={theCategory}
            handleMenuItemClick={handleMenuItemClick}
            handleBackButtonClick={handleBackButtonClick}
            handleAnchorClick={handleAnchorClick}
            isFirstLevel={index === 0}
            toSlideIn={toSlideIn}
            toSlideOut={toSlideOut}
          />
        )
      })}
    </>
  )
}
