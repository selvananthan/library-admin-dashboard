// src/styles/styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fc;
    color: #333333;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  padding: 20px;
  background-color: #f4f7fc;
  min-height: 100vh;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 24px;
    color: #007bff;
  }

  button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    color: #333333;
    margin-bottom: 10px;
  }

  p {
    color: #666666;
    margin-bottom: 10px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    button {
      background-color: #007bff;
      color: #ffffff;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 10px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }

      &.delete {
        background-color: #dc3545;

        &:hover {
          background-color: #c82333;
        }
      }
    }
  }
`;

export const FrontPageContainer = styled.div`
  padding: 50px;
  background-color: #f4f7fc;
  min-height: 100vh;
`;

export const BookCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;

  h3 {
    font-size: 18px;
    color: #007bff;
    margin-bottom: 10px;
  }

  p {
    color: #666666;
    margin-bottom: 10px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    button {
      background-color: #007bff;
      color: #ffffff;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 10px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

export const FrontPageHeader = styled.h1`
  font-size: 32px;
  color: #007bff;
  text-align: center;
  margin-bottom: 50px;
`;
