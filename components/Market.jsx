import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

export default function Market() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const formatCurrency = (current_price) => {
    return current_price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
  };

  const priceBodyTemplate = (coins) => {
    return formatCurrency(coins.current_price);
  };

  const marketBodyTemplate = (coins) => {
    return formatCurrency(coins.market_cap);
  };

  return (
    <div>
      <h3 className='heading'>Top coins</h3>
      <div className='card'>
        <DataTable
          value={coins}
          paginator
          rows={10}
          selectionMode='single'
          dataKey='id'
          responsiveLayout='scroll'
          stateStorage='local'
          stateKey='dt-state-demo-local'
          emptyMessage='No customers found.'
        >
          <Column field='market_cap_rank' header='#' sortable></Column>
          <Column field='name' header='Name' sortable></Column>
          <Column field='symbol' header='Symbol' sortable></Column>
          <Column
            field='current_price'
            header='Price'
            body={priceBodyTemplate}
            sortable
          ></Column>
          <Column
            field='price_change_percentage_24h'
            header='% change'
            sortable
          ></Column>
          <Column
            field='market_cap'
            header='Market Cap'
            body={marketBodyTemplate}
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
