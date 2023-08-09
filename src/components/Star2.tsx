//참고
// https://velog.io/@stakbucks/%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styled from 'styled-components';

export default function StarRating() {
  const [score, setScore] = useState<number>(0);
  const [scoreFixed, setScoreFixed] = useState(score);

  const handleLeftHalfEnter = (idx: number) => setScore(idx + 0.5);

  const handleRightHalfEnter = (idx: number) => setScore(idx + 1);

  const handleStarClick = () => {
    setScoreFixed(score);
  };

  const handleStarLeave = () => {
    if (score !== scoreFixed) {
      setScore(scoreFixed);
    }
  };

  return (
    <RowBox>
      {Array(5)
        .fill(0)
        .map((i, idx) => (
          <StarDiv key={idx} onClick={handleStarClick}>
            {score - Math.floor(score) === 0.5 && Math.floor(score) === idx ? (
              <FaStarHalfAlt
                key={idx}
                style={{ position: 'absolute' }}
                size={32}
                color='gold'
              />
            ) : idx + 1 > score ? (
              <FaStar
                key={idx}
                style={{ position: 'absolute' }}
                size={32}
                color='lightGray'
              />
            ) : (
              <FaStar
                key={idx}
                style={{ position: 'absolute' }}
                size={32}
                color='gold'
              />
            )}
            <Left
              key={idx + 'left'}
              onMouseEnter={() => handleLeftHalfEnter(idx)}
              onMouseLeave={handleStarLeave}
            />
            <Right
              key={idx + 'right'}
              onMouseEnter={() => handleRightHalfEnter(idx)}
              onMouseLeave={handleStarLeave}
            />
          </StarDiv>
        ))}
    </RowBox>
  );
}

export const StarDiv = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  display: flex;
`;
export const Left = styled.div`
  width: 16px;
  height: 100%;
  z-index: 100;
`;
export const Right = styled.div`
  width: 16px;
  height: 100%;
  z-index: 100;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
`;
