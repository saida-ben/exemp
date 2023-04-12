import { employeesData, employeesGrid } from '../data/dummy';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete','Search','Add','Edit','cancel'];
  const editing = { allowDeleting: true, allowEditing: false ,allowAdding: true};

 

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className="mb-2 flex justify-start"> {/* changed justify-end to justify-start */}
      
      </div>
      <GridComponent
        dataSource={employeesData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
    <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>

    </div>
  );
};

export default Customers;
