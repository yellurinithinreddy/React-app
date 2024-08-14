
import { Head } from "./components/headings/heading";
import { OrdList,UnOrdList } from "./components/list/lists";
import { Img } from "./components/image/img";
import { Table } from "./components/tables/table"; 
import { Card } from "./components/cards/card";
import './App.css';
const App=()=>{
  return (
    <>
    {/* <Head></Head>
    <OrdList></OrdList>
    <Img></Img>
    <UnOrdList></UnOrdList> */}

    <Table></Table>
    <Card></Card>
    </>
  )
}
export default App;
