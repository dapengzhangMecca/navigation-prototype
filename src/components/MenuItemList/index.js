import React, { useRef, useEffect } from 'react'
import MenuItem from '/src/components/MenuItem'

import * as styles from './styles'

const MenuHead = ({ handleBackButtonClick, name, url, handleAnchorClick }) => {
  return (
    <>
      <button
        type="button"
        css={styles.backButton}
        onClick={handleBackButtonClick}
      >
        &larr;
      </button>
      {name && <div css={styles.categoryName}>{name}</div>}
      <hr css={styles.hr} />
      <a
        href={url}
        css={styles.categoryLink}
        onClick={event => {
          event.preventDefault()
          handleAnchorClick({ name })
        }}
      >
        Shop All
      </a>
    </>
  )
}

export default ({
  category = {},
  handleMenuItemClick = () => {},
  handleBackButtonClick = () => {},
  handleAnchorClick = () => {},
  toSlideIn,
  toSlideOut,
  isFirstLevel,
}) => {
  const { subCategories = [], url, name } = category
  const ref = useRef()

  useEffect(() => {
    if (toSlideIn && ref.current) {
      ref.current.classList.add('slide-in')
      ref.current.classList.remove('slide-out')
    }

    if (toSlideOut && ref.current) {
      ref.current.classList.add('slide-out')
      ref.current.classList.remove('slide-in')
    }
  }, [toSlideIn, toSlideOut])

  return (
    <div ref={ref} css={styles.menuItemListWrapper}>
      {isFirstLevel ? (
        <div css={styles.menuHeadPlaceholder} />
      ) : (
        <MenuHead
          handleBackButtonClick={handleBackButtonClick}
          name={name}
          url={url}
          handleAnchorClick={handleAnchorClick}
        />
      )}
      {subCategories.map(item => {
        return (
          <MenuItem
            key={item.name}
            item={item}
            onClick={handleMenuItemClick}
            isFirstLevel={isFirstLevel}
          />
        )
      })}
      {isFirstLevel && (
        <div css={styles.navigationFooter}>
          <div>
            <span className="dot" />
            <span>My Account</span>
          </div>
          <div>
            <span className="dot" />
            <span>Shipping &#38; Returns</span>
          </div>
          <div>
            <span className="dot" />
            <span>Beauty Loop</span>
          </div>
          <div>
            <span className="dot" />
            <span>Book a Service</span>
          </div>
        </div>
      )}
    </div>
  )
}
