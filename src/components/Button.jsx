import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    border: none;
    min-width: 60px;
    gap: 8px;
    letter-spacing: 1px;
    font-size: ${props => props.fs || "16px"};
    align-items: center;
    padding: 10px 14px;
    background: white;
    margin: ${props => props.margin || 0};
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.3);
`
export const ButtonLink = styled.button`
    display: flex;
    justify-content: space-between;
    min-width: 280px;
    border-radius: 30px;
    position: relative;
    background: white;
    color: inherit;
    align-items: center;
    border: none;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`