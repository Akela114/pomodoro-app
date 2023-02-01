import styled from 'styled-components'

import Card from '../../UI/Card'

export const Wrapper = styled(Card)`
  padding: 2.5rem 0;

  gap: 0.62rem;

  @media (max-width: 799px) {
    padding: 1.25rem 0;
    gap: 0.31rem;
  }
`

export const Year = styled.div`
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;
`

Year.Value = styled.span`
  width: 3.11rem;
  text-align: center;

  font-size: 1.06rem;
  font-weight: 500;

  color: ${props => props.theme.colors.tertiary.middle};

  @media (max-width: 799px) {
    font-size: 0.87rem;
  }
`

Year.Button = styled.button`
  width: 1.25rem;
  height: 1.25rem;

  border: 0;
  border-radius: 0.5rem;

  background-color: ${props => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:active {
    background-color: ${props => props.theme.colors.primary.light};
  }

  &:disabled {
    visibility: hidden;
  }

  @media (max-width: 799px) {
    width: 1rem;
    height: 1rem;
  }
`

Year.ButtonImage = styled.img`
  width: 1.12rem;
  height: 1.12rem;

  @media (max-width: 799px) {
    width: 0.87rem;
    height: 0.87rem;
  }
`

export const Month = styled.div`
  padding: 0.37rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  background-color: ${props => props.theme.colors.tertiary.middle};
`

Month.Value = styled.span`
  width: 6.25rem;
  text-align: center;

  font-size: 1.25rem;
  font-weight: 500;

  color: ${props => props.theme.colors.white};

  @media (max-width: 799px) {
    font-size: 1.06rem;
  }
`

Month.Button = styled.button`
  width: 1.61rem;
  height: 1.61rem;

  border: 0;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.tertiary.middle};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:active {
    background-color: ${props => props.theme.colors.tertiary.dark};
  }

  &:disabled {
    visibility: hidden;
  }

  @media (max-width: 799px) {
    width: 1.37rem;
    height: 1.37rem;
  }
`

Month.ButtonImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 799px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const StatsList = styled.ul`
  padding: 1.25rem;

  flex: 1;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
`

export const StatsItem = styled.li`
  display: flex;
  justify-content: space-between;
`

StatsItem.Info = styled.div`
  flex: 1;

  padding: 0 0 0.25rem 0.5rem;

  font-size: 0.93rem;
  font-weight: 500;

  border-bottom: 3px solid ${props => props.theme.colors.secondary.light};
  border-bottom-left-radius: 0.75rem;

  color: ${props => props.theme.colors.primary.dark};

  display: flex;
  flex-direction: column;

  @media (max-width: 799px) {
    font-size: 0.81rem;
  }
`

StatsItem.Name = styled.div``

StatsItem.Description = styled.span`
  padding: 0 0.5rem;

  font-size: 0.81rem;
  font-weight: 400;

  @media (max-width: 799px) {
    font-size: 0.68rem;
  }
`

StatsItem.Value = styled.span`
  width: 4.37rem;

  padding-bottom: 2px;

  font-size: 0.93rem;

  border-bottom: 3px solid ${props => props.theme.colors.tertiary.light};
  border-bottom-right-radius: 0.37rem;

  color: ${props => props.theme.colors.primary.dark};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 799px) {
    font-size: 0.81rem;
  }
`
