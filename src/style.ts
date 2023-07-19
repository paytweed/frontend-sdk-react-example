import styled from "styled-components";

export const Wrapper = styled.div`
  backgroung-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  width: 95%;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  margin: 100px;
`;
export const SubTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
`;
export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 0px 20px;
  width: 100%;
  align-items: center;
`;
export const InputLabel = styled.label`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 7px;
`;

export const InputField = styled.input`
  font-size: 20px;
  min-width: 250px;
  border-radius: 20px;
  outline: 0px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  width: 300px;
  margin-bottom: 25px;
  background: #fff;
`;
export const WalletAddress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  outline: 2px solid dodgerblue;
  border-radius: 30px;
  padding: 10px 30px;
  margin: 20px 0px 0px 0px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const MenuItemsLine = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 20px;
  min-width: 250px;
  border-radius: 30px;
  outline: 0px;
  padding: 20px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  :hover {
    transform: scale(1.009);
  }
`;

export const QrButton = styled.button`
  font-size: 17px;
  border-radius: 20px;
  padding: 0px 24px;
  margin: 0px 12px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

export const ChainButton = styled.button<{ primary: boolean }>`
  font-size: 20px;
  border-radius: 20px;
  border: 2px solid dodgerblue;
  padding: 0px 24px;
  width: 250px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  background: ${(props) => (props.primary ? "dodgerblue" : "white")};
  color: ${(props) => (props.primary ? "white" : "dodgerblue")};
  transition: background-color 0.8s ease;

  :hover {
    transform: scale(1.009);
  }
`;

export const LogoutButton = styled.button`
  font-size: 17px;
  min-width: 250px;
  border-radius: 30px;
  border-color: red;
  outline: 0px;
  margin-top 40px;
  padding: 10px 20px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  :hover {
    transform: scale(1.009);
  }
`;

export const Powered = styled.div`
  position: absolute;
  bottom: 0px;
  font-size: 15px;

  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;
  display: flex;
  flexdirection: column;
`;

export const Table = styled.table`
  font-size: 15px;
  align-self: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 40px;
  padding: 20px;
  gap: 20px;
  outline: 2px solid black;
  border-radius: 20px;
  width: 80vw;
`;

export const Th = styled.th`
  border: 1px solid;

  padding: 5px;
`;

export const Td = styled.td`
  border: 1px solid;
`;
