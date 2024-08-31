import { ListItem, ListContainer } from '../Styledcomponent/styledComponents';

const listItems = [
  { id: "Dashboard", item: "Dashboard" },
  { id: "Inventory", item: "Inventory" },
  { id: "Order", item: "Order" },
  { id: "Returns", item: "Returns" },
  { id: "Customers", item: "Customers" },
  { id: "Shipping", item: "Shipping" },
  { id: "Channel", item: "Channel" },
  { id: "Integrations", item: "Integrations" },
  { id: "Calculators", item: "Calculators" },
  { id: "Reports", item: "Reports" },
  { id: "Account", item: "Account" }
];

const Sidebar = () => {
  return (
    <div>
      <div>
        <ListContainer>
          {listItems.map(each => (
            <ListItem 
              key={each.id} 
              isDashboard={each.id === "Dashboard"}
            >
              {each.item}
            </ListItem>
          ))}
        </ListContainer>
      </div>
    </div>
  );
};

export default Sidebar;
