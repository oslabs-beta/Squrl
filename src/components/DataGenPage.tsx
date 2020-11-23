import React, {useState} from 'react';
import TableGeneratorPanel from './generatorChildren/TableGeneratorPanel';
import TableViewPanel from './generatorChildren/TableViewPanel';


export type inputObj = {
    columnName: string;
    category: string;
    subcategory: string; 
    percent: string;
  }
export type tableStateData = inputObj[];

export type tableType = {
    [key:string] : tableStateData
}
//[[initColumnState]]
const DataGenPage : React.FC = () => {
    const [tableStateData, setTableStateData] = useState<tableType>({})
    const [tableName , setTableName] = useState<string>('');
    const [tableRow, setTableRow] = useState<[]>([]);
    const addTable = (e:any) => {
        tableName ? 
        setTableStateData(prev=>({...prev,[tableName]:[]}))
        : null
        setTableName('')
    }
    return (
        <div className="title">
            <h1>GENERATE DATA!</h1>
            <div className="datagen_page">
                <div className="panels">
                    <div>
                        <TableGeneratorPanel 
                        tableStateData={tableStateData} 
                        tableName={tableName} 
                        setTableStateData={setTableStateData} 
                        addTable={addTable} 
                        setTableName={setTableName}
                        />
                    </div>
                    <div>
                        <TableViewPanel 
                        tableStateData={tableStateData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataGenPage;