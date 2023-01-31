import styled from 'styled-components'

import Card from '../../UI/Card'

export const Wrapper = styled(Card)`
  padding: 40px 0;

  @media (max-width: 799px) {
    padding: 20px 0;
  }
`

export const Date = styled.div`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: ${props => props.theme.colors.secondary.middle};
`

Date.Value = styled.span`
  width: 140px;
  text-align: center;

  font-size: 20px;
  font-weight: 500;

  color: ${props => props.theme.colors.white};

  @media (max-width: 799px) {
    font-size: 17px;
  }
`

Date.Button = styled.button`
  width: 26px;
  height: 26px;

  border: 0;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.secondary.middle};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:active {
    background-color: ${props => props.theme.colors.secondary.dark};
  }

  &:disabled {
    visibility: hidden;
  }

  @media (max-width: 799px) {
    width: 22px;
    height: 22px;
  }
`

Date.ButtonImage = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 799px) {
    width: 20px;
    height: 20px;
  }
`

export const StatsList = styled.ul`
  padding: 20px;

  flex: 1;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
`

export const StatsItem = styled.li`
  display: flex;
  justify-content: space-between;
`

StatsItem.Name = styled.span`
  flex: 1;

  padding: 0 0 4px 8px;

  font-size: 15px;
  font-weight: 500;

  border-bottom: 3px solid ${props => props.theme.colors.secondary.light};
  border-bottom-left-radius: 12px;

  color: ${props => props.theme.colors.primary.dark};

  @media (max-width: 799px) {
    font-size: 13px;
  }
`

StatsItem.Value = styled.span`
  width: 70px;

  padding-bottom: 2px;

  text-align: center;

  font-size: 15px;

  border-bottom: 3px solid ${props => props.theme.colors.tertiary.light};
  border-bottom-right-radius: 6px;

  color: ${props => props.theme.colors.primary.dark};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 799px) {
    font-size: 13px;
  }
`
