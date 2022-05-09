import { useSelector, useDispatch } from 'react-redux';
import { 
  changeServiceField,
  addService,
  clearServiceField,
  cancelEdit,
} from '../actions/ActionCreators';

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const item2 = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value)); 
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addService(item.name, item.price));
    dispatch(clearServiceField());
  }

  const onFormReset = (e) => {
    e.preventDefault();
    dispatch(clearServiceField());
  }

  const onEditCancel = (e) => {
    dispatch(cancelEdit());
    dispatch(clearServiceField());
  }

  return (
    <form onReset={onFormReset}>
      <div className='input_row'>
        <label htmlFor="name">Service:</label>
        <input name="name" 
          onChange={onFieldChange} 
          value={item.name}
          placeholder='Service name'/>
      </div>

      <div className='input_row'>
        <label htmlFor="price">Price:</label>
        <input name="price"
          type='number'
          onChange={onFieldChange} 
          value={item.price}
          placeholder='Service price'/>
      </div>     

      <div className="btn_row">
        <button type="submit"
          className={`form_btn${!item.name.trim() || !item.price.trim() ? ' inactive' : ' '}`}
          onClick={onFormSubmit}>Save</button>
        <button type="reset"
          className={`form_btn${!item.name.trim() || !item.price.trim() ? ' inactive' : ' '}`}
          >Clear</button>

        <button type="button"
          onClick={onEditCancel}
          className={`form_btn${!item2.selected ? ' hidden' : ''}`}
          >Cancel</button>
      </div>
    </form>
  )
}