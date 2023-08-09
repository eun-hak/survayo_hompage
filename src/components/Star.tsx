import React, { useState, useEffect } from 'react';
import { FaBorderNone, FaStar, FaStarHalf } from 'react-icons/fa';
import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
  //1,2,3,4,5
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  //0.5 , 1.5, 2.5, 3.5, 4.5
  const [clicked2, setClicked2] = useState([false, false, false, false, false]);

  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const handleStarClick2 = (index: number) => {
    let clickStates2 = [...clicked2];
    for (let i = 0; i < 5; i++) {
      clickStates2[i] = i <= index ? true : false;
    }
    setClicked2(clickStates2);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };

  return (
    <Wrap>
      <RatingText>평가하기</RatingText>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <>
              <FaStarHalf
                key={idx + 0.5}
                size='50'
                onClick={() => handleStarClick2(el)}
                className={clicked2[el] ? 'yellowStar' : undefined}
              />
              <StyledFaStar
                key={idx}
                size='50'
                onClick={() => handleStarClick(el)}
                className={clicked[el] ? 'yellowStar' : undefined}
              />
            </>
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const StyledFaStar = styled(FaStar)``;
