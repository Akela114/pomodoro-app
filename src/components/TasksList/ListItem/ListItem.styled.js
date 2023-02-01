import styled from 'styled-components'

export const Wrapper = styled.li`
  ${props =>
    props.isDragging
      ? `outline: 2px dashed ${props.theme.colors.tertiary.dark};`
      : ''}
  ${props => (props.isDragging ? 'opacity: 0.3;' : '')}

  border-radius: 1.25rem;

  cursor: grab;

  transition: transform 0.25s ease-out;

  &:hover {
    ${props => (!props.isDragging ? 'transform: scaleX(1.02);' : '')}
  }
`

export const Item = styled.div`
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.62rem;

  border-radius: 1.25rem;

  background-color: ${props => props.theme.colors.white};

  box-shadow: ${props => props.theme.shadows.medium};
`

export const Title = styled.h2`
  font-size: 0.93rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;

  @media (max-width: 1399px) {
    font-size: 0.87rem;
  }

  @media (max-width: 399px) {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`

export const RemainingTime = styled.span`
  flex: 1;

  font-size: 0.81rem;
  font-weight: 400;

  @media (max-width: 1399px) {
    font-size: 0.75rem;
  }

  @media (max-width: 499px) {
    display: none;
  }
`

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;

  @media (max-width: 399px) {
    flex-direction: column-reverse;
  }
`

ActionsGroup.Action = styled.button`
  width: 1.25rem;
  height: 1.25rem;

  background-color: transparent;
  border: 0;

  cursor: pointer;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.25rem 1.25rem;`
      : ''};

  @media (max-width: 1399px) {
    width: 1.12rem;
    height: 1.12rem;
  }
`
