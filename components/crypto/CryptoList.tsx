import styles from "./styles"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { getCrypto } from "../../action/crypto";
import { PAGE_SIZE } from "../../constants";
import { useRouter } from 'next/router'


const columns: GridColDef[] = [
    { field: 'symbol', headerName: 'Symbol', flex: 1 },
    { field: 'askPrice', headerName: 'Ask price', flex: 1 },
    { field: 'askQty', headerName: 'Ask Qty', flex: 1 },
    { field: 'bidPrice', headerName: 'Bid price', flex: 1 },
    { field: 'bidQty', headerName: 'Bid qty', flex: 1 },
];

const CryptoList = () => {

    const [cryptoList, setCryptoList] = useState([]);
    const [page, setPage] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        getCrypto(page, PAGE_SIZE)
            .then(data => {
                setCryptoList(data.results);
                setTotalResults(data.total)
                setLoading(false);                
            });            
    }, [page]);

    const pageChange = (newPage) => {
        setLoading(true);
        setPage(newPage);
    }

    const rowClick = (rowData) => {
        const {id} = rowData;
        router.push(`/crypto/${id}`);

    }
    return (<div className="container" style={{ height: 631, width: '100%' }}>
        <DataGrid
            rows={cryptoList}
            columns={columns}
            pageSize={PAGE_SIZE}
            rowsPerPageOptions={[PAGE_SIZE]}            
            getRowId={(row) => row.symbol}
            rowCount={totalResults}
            onPageChange={pageChange}
            onRowClick={rowClick}
            paginationMode="server"
            loading={loading}
            isRowSelectable={() => false}                        
        />
        <style jsx>{styles}</style>
    </div>)

}

export default CryptoList;