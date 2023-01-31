import styled from 'styled-components'

import Card from '../../UI/Card'

export const Wrapper = styled(Card)`
  padding: 40px 0;

  gap: 10px;

  @media (max-width: 799px) {
    padding: 20px 0;
    gap: 5px;
  }
`

export const Year = styled.div`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

Year.Value = styled.span`
  width: 50px;
  text-align: center;

  font-size: 17px;
  font-weight: 500;

  color: ${props => props.theme.colors.tertiary.middle};

  @media (max-width: 799px) {
    font-size: 14px;
  }
`

Year.Button = styled.button`
  width: 20px;
  height: 20px;

  border: 0;
  border-radius: 8px;

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
    width: 16px;
    height: 16px;
  }
`

Year.ButtonImage = styled.img`
  width: 18px;
  height: 18px;

  @media (max-width: 799px) {
    width: 14px;
    height: 14px;
  }
`

export const Month = styled.div`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: ${props => props.theme.colors.tertiary.middle};
`

Month.Value = styled.span`
  width: 100px;
  text-align: center;

  font-size: 20px;
  font-weight: 500;

  color: ${props => props.theme.colors.white};

  @media (max-width: 799px) {
    font-size: 17px;
  }
`

Month.Button = styled.button`
  width: 26px;
  height: 26px;

  border: 0;
  border-radius: 8px;
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
    width: 22px;
    height: 22px;
  }
`

Month.ButtonImage = styled.img`
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

StatsItem.Info = styled.div`
  flex: 1;

  padding: 0 0 4px 8px;

  font-size: 15px;
  font-weight: 500;

  border-bottom: 3px solid ${props => props.theme.colors.secondary.light};
  border-bottom-left-radius: 12px;

  color: ${props => props.theme.colors.primary.dark};

  display: flex;
  flex-direction: column;

  @media (max-width: 799px) {
    font-size: 13px;
  }
`

StatsItem.Name = styled.div``

StatsItem.Description = styled.span`
  padding: 0 8px;

  font-size: 13px;
  font-weight: 400;

  @media (max-width: 799px) {
    font-size: 11px;
  }
`

StatsItem.Value = styled.span`
  width: 70px;

  padding-bottom: 2px;

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
