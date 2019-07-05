import styled from 'styled-components'
import posed from 'react-pose'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
`

export const Wrap = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  padding: 50px 20px;

  width: 100%;

  background: #12141b;

  ${media.greaterThan('medium')`
    font-size: 45px;
    padding: 90px 20px;
  `};
`

export const Field = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  font-weight: 300;
  font-family: 'Lato';
  text-align: center;
  outline: none;
  font-size: 25px;

  ${media.greaterThan('medium')`
    font-size: 45px;
  `};
`

export const Action = styled.button`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);

  width: 60px;
  height: 60px;
  background-color: #e3bf2a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:before {
    position: absolute;

    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 50%;

    opacity: 0.03;
    /* content: ''; */
  }

  &:after {
    position: absolute;

    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50%;

    opacity: 0.02;
  }

  ${media.greaterThan('medium')`
    &:before,
    &:after {
      content: '';

    }
  `};
`

export const AnimationErrorBox = posed.div({
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 50
  }
})

export const ErrorBox = styled(AnimationErrorBox)`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: 20px 10px;

  background: rgba(227, 74, 42, 0.06);
  border-radius: 6px;
  text-align: center;

  ${media.greaterThan('medium')`
    bottom: auto;
  left: 50%;

    margin-top: 100px;
    margin-left: -180px;
    width:360px;
  `}
`

export const ErrorText = styled.p`
  font-size: 17px;
  font-family: 'Lato';
  color: #e34a2a;
  font-weight: 500;
`
