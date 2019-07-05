import styled from 'styled-components'
import media from 'styled-media-query'

export const Center = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #08090c;
  flex-direction: column;
`
export const Title = styled.h1`
  font-family: 'Lato';
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  line-height: 1.37;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;

  ${media.greaterThan('large')`
    font-size: 19px;
    margin-bottom: 85px;

  `};
`

export const Logo = styled.img`
  position: absolute;
  top: 20px;

  ${media.greaterThan('large')`
    top: 60px;
  `};
`
