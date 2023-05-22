import styled from "@emotion/styled";

export const StatSection = styled.section
    `width: 300px;
    height: auto;
    padding: 0;
    margin: 50px auto;
    background-color: #edf3ee;
    box-shadow: 1px 1px 15px 3px rgba(1, 0, 0, 0.32);`
    ;


export const Title = styled.h2
    `font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
    text-align: center;
    padding-top: 15px;`
    ;


export const StatisticsList = styled.ul
    `display: flex;
    list-style: none;
    padding: 0;
    margin: 0;`
    ;


export const Item = styled.li
    ` display: flex;
    width: 75px;
    flex-direction: column;
    align-items: center;`
    ;

export const Label = styled.span
    `font-size: 16px;
    font-weight: bold;
    font-family: monospace;
    
    text-align: center;
    color: #f9f7f7;`
    ;


export const Percentage = styled.span
    `text-align: center;
    font-size: 20px;
    font-family: sans-serif;
    color: rgb(11, 11, 11);
    margin-top: 5px;`
    ;