import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media (max-width: 640px) {
    padding: 20px 8px;
  }
`;
