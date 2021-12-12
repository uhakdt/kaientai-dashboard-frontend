export const filterBySupplier = (data, supplierID) => {
  let result = data.filter(function(item){
    return item.supplierID === supplierID;         
  });
  return result
}