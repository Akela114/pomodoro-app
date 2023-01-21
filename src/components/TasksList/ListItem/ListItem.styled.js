import styled from 'styled-components'

export const Wrapper = styled.li`
  padding: 8px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  border-radius: 20px;

  background-color: ${props => props.theme.colors.white};

  box-shadow: ${props => props.theme.shadows.medium};

  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.02);
  }
`

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 400;

  @media (max-width: 1399px) {
    font-size: 14px;
  }

  @media (max-width: 399px) {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`

export const RemainingTime = styled.span`
  flex: 1;

  font-size: 13px;
  font-weight: 400;

  @media (max-width: 1399px) {
    font-size: 12px;
  }

  @media (max-width: 499px) {
    display: none;
  }
`

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 399px) {
    flex-direction: column-reverse;
  }
`

ActionsGroup.Action = styled.button`
  width: 20px;
  height: 20px;

  background-color: transparent;
  border: 0;

  cursor: pointer;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px 20px;`
      : ''};

  @media (max-width: 1399px) {
    width: 18px;
    height: 18px;
  }
`
