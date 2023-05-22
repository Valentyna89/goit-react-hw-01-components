import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 50px auto;
  height: auto;
  width: 300px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 1px 1px 15px 3px rgba(1, 0, 0, 0.32);
`;

export const Description = styled.div`
  text-align: center;
  padding-bottom: 5px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 40px 0;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: gray;
`;

export const Location = styled.p`
  font-size: 18px;
  color: gray;
`;

export const StatsBlock = styled.div`
  padding: 10px 30px;
  background-color: rgb(225, 226, 230);
  border-top: 1px solid rgb(197, 195, 195);
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const StatsLi = styled.li`
  text-align: center;
`;

export const LabelName = styled.span`
  font-size: 20px;
  color: gray;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;
