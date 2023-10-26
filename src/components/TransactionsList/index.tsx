import {
  CoinTransaction,
  CryptoTransaction,
  TokenTransaction,
} from "@paytweed/frontend-sdk-react";
import { SubTitle, Table, Td, Th } from "../../style";

interface Data {
  [k: string]: Array<CryptoTransaction>;
}

const TransactionsList: React.FC<{ data: Data }> = ({ data }) => {
  const chain = Object.keys(data)[0];
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>
              <SubTitle>{chain}</SubTitle>
            </th>
          </tr>
          <tr>
            <Th>Created At</Th>
            <Th>Crypto Currency Amount</Th>
            <Th>Token Name</Th>
            <Th>Token Symbol</Th>
            <Th>Direction</Th>
            <Th>From Address</Th>
            <Th>To Address</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {data[chain].map((entry) => (
            <tr key={entry.id}>
              <Td>{entry.createdAt}</Td>
              <Td>{entry.value}</Td>
              <Td>
                {entry?.tokenMetadata?.tokenName ||
                  entry?.coinMetadata?.coinName}
              </Td>
              <Td>
                {entry?.tokenMetadata?.tokenSymbol ||
                  entry?.coinMetadata?.coinSymbol}
              </Td>
              <Td>{entry.direction}</Td>
              <Td>{entry.fromAddress}</Td>
              <Td>{entry.toAddress}</Td>
              <Td>{entry.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionsList;
