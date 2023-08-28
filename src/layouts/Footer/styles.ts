import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
`

export const Content = styled.div`
  padding: 2rem 1rem;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1440px;
    justify-content: space-between;
    align-items: flex-start;
  }

  .infos-osten-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    img {
      width: 15rem;
      height: auto;
    }
    .texts-container {
      text-align: center;
      color: white;

      p {
        font-size: 14px;
      }
    }
    .social-buttons-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      a {
        .icons {
          font-size: 2.5rem !important;
        }
      }
    }
  }

  .menus-and-sendmail-section {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: start;
      flex-direction: row;
    }
    @media (min-width: 1100px) {
      gap: 4rem;
    }
    h2 {
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-size: 20px;
    }
    .menus {
      display: flex;
      justify-content: start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      @media (min-width: 1100px) {
        gap: 4rem;
      }
      .menu {
        color: white;
        margin: auto;
        width: min-content;
        white-space: nowrap;
        @media (min-width: 768px) {
          margin: 0;
        }
        a {
          text-decoration: none;
          p {
            font-size: 18px;
            color: white;
            font-weight: 300;
            &:hover {
              color: #33bcff;
            }
          }
        }
      }
    }

    .send-message {
      text-align: center;
      color: white;
      @media (min-width: 1024px) {
        text-align: start;
        width: 20rem;
      }
      form {
        .MuiInputBase-root {
          background-color: #3c3c3c;
          border-radius: 8px;
          color: white;
          .MuiFormLabel-root {
          }
          .MuiInputBase-root {
            &::before {
              border: none !important;
            }
          }
        }
      }
    }
  }
`
