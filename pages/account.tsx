import Link from 'next/link';
import React, { useState, useCallback, useMemo } from 'react';
import { IAccount } from '../app/types/types';

const Account = () => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  const getAccountNo = (accountNo: number) => {
    return accountNo * 2;
  };

  const getBranchCode = (branchNo: number) => {
    return branchNo * 23;
  };

  return (
    <div>
      <div className="flex flex-col">
        {accounts.map(
          (
            {
              accountName,
              accountNo,
              branchCode,
              city,
              country,
              balance,
              branchName,
            },
            index
          ) => {
            return (
              <div className="flex flex-row space-x-4" key={index}>
                <p>{accountName}</p>
                <p>{getAccountNo(accountNo)}</p>
                <p>{getBranchCode(branchCode)}</p>
                <p>{balance}</p>
                <p>{branchName}</p>
                <p>{city}</p>
                <p>{country}</p>
              </div>
            );
          }
        )}
      </div>

      <div className="grid grid-cols-5 ">
        <button
          onClick={() => {
            setAccounts((oldArray) => [
              ...oldArray,
              {
                accountName: 'string',
                accountNo: accounts.length,
                branchCode: accounts.length,
                city: 'string',
                country: 'string',
                balance: 'string',
                branchName: 'string',
              },
            ]);
          }}
          className="bg-sky-400 h-10 rounded-lg px-4 text-white font-bold mx-2 w-48"
        >
          Add Account
        </button>

        <button
          onClick={() => {
            setAccounts((previousArr) => previousArr.slice(0, -1));
          }}
          className="bg-sky-400 h-10 rounded-lg px-4 text-white font-bold mx-2 w-48"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
