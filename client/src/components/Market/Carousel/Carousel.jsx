import { Children, useEffect } from 'react';
import { cloneElement } from 'react';
import { useState } from 'react';
import './Carousel.css'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const PAGE_WIDTH = 650

const Carousel = ({ children }) => {

  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)


  // логика левой кнопки
  const handleLeftArrowClick = () => {
    console.log('left');

    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset);
      return Math.min(newOffset, 0)
    })
  }

  // логика правой кнопки
  const handleRightArrowClick = () => {
    console.log('right');

    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }


  useEffect(() => {
    console.log('in corrrr');
    setPages(
      Children.map(children, child => {
        console.log(children);
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      })
    )
  }, [])


  return (
    <div>
      <div className="main-container">
        <button type="button" className='arrow' onClick={handleLeftArrowClick}>{'<---'}</button>
        <div className="window">
          <div
            className="all-pages-container"

            style={{
              transform: `translateX(${offset}px)`
            }}
          >
            {pages}
          </div>
        </div>
        <button type="button" className='arrow' onClick={handleRightArrowClick}>{'--->'}</button>

      </div>
      <button>Купить</button>
    </div>

  );
}

export default Carousel;
